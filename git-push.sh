#!/bin/bash
# RHEPL — git commit and push to GitHub
# Run this from the project root:
#   cd "/Users/aasnaurza/Desktop/Claude/Roadtech Highway Engineering"
#   bash git-push.sh

set -e
cd "/Users/aasnaurza/Desktop/Claude/Roadtech Highway Engineering"

echo "→ Staging all changes..."
git add -A

echo "→ Committing..."
git commit -m "$(cat <<'EOF'
feat: add client logos strip, fix sector images, polish homepage

- HomePage: add 18-client logos strip in white card boxes (visible)
- HomePage: remove grayscale filter; logos now show full colour on hover
- ProjectsPage: replace ind-racetrack.jpg (Audi R8) with svc-microsurfacing.jpg
  for Industrial & Port sector card
- General: tighten Why RHEPL copy, About snippet caption

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01G5K62VACLAn1u63KXgLJsM
EOF
)"

echo "→ Pushing to GitHub..."
git push origin main

echo "✅ Done! Check: https://github.com/Bhogla/RHEPL"
