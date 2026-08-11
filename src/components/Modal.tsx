import { useEffect, useId, useRef, type ReactNode, type RefObject } from 'react'
import { createPortal } from 'react-dom'
import { Close } from './icons'

/**
 * Small reusable modal dialog. Matches the site's dark/orange spec-sheet aesthetic.
 * Handles: dim + blur backdrop, close via X / backdrop / Esc, role="dialog" +
 * aria-modal labelled by the title, focus trap + focus return, body scroll lock,
 * and prefers-reduced-motion (animations are gated in index.css). Centered card on
 * desktop, bottom sheet on mobile. Rendered into <body> via a portal.
 */
type ModalProps = {
  open: boolean
  onClose: () => void
  title: string
  /** monospace spec-sheet label above the title */
  eyebrow?: string
  children: ReactNode
  /** element focus returns to on close (usually the trigger) */
  returnFocusRef?: RefObject<HTMLElement>
}

export function Modal({ open, onClose, title, eyebrow, children, returnFocusRef }: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const titleId = useId()

  useEffect(() => {
    if (!open) return
    const previouslyFocused = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'

    const panel = panelRef.current
    const focusables = () =>
      Array.from(
        panel?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      )
    ;(focusables()[0] ?? panel)?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation()
        onClose()
        return
      }
      if (e.key !== 'Tab') return
      const items = focusables()
      if (items.length === 0) {
        e.preventDefault()
        return
      }
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
      ;(returnFocusRef?.current ?? previouslyFocused)?.focus?.()
    }
  }, [open, onClose, returnFocusRef])

  if (!open) return null

  return createPortal(
    <div className="fixed inset-0 z-modal flex items-end justify-center sm:items-center">
      {/* dim + blur backdrop */}
      <div
        className="modal-backdrop-in absolute inset-0 bg-ink/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      {/* panel — bottom sheet on mobile, centered card on desktop */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="modal-panel-in relative z-raised max-h-[90vh] w-full overflow-y-auto rounded-t-2xl border border-ink-line bg-charcoal p-6 shadow-lift focus:outline-none sm:max-w-lg sm:rounded-none sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center border border-ink-line text-aggregate transition-colors duration-200 ease-out hover:border-asphalt/60 hover:text-warm focus-visible:outline focus-visible:outline-2 focus-visible:outline-asphalt"
        >
          <Close className="h-5 w-5" />
        </button>

        {eyebrow && (
          <p className="pr-12 font-mono text-xs uppercase tracking-chip text-asphalt">{eyebrow}</p>
        )}
        <h2
          id={titleId}
          className="mt-2 font-display text-3xl font-bold uppercase leading-none text-warm sm:text-4xl"
        >
          {title}
        </h2>

        <div className="mt-6">{children}</div>
      </div>
    </div>,
    document.body,
  )
}
