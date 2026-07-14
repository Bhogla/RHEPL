import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Products } from './pages/Products'
import { ProductPage } from './components/ProductPage'
import { Consultancy } from './pages/Consultancy'
import { Contact } from './pages/Contact'
import { Join } from './pages/Join'
import { NotFound } from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:slug" element={<ProductPage />} />
        <Route path="consultancy" element={<Consultancy />} />
        <Route path="contact" element={<Contact />} />
        <Route path="join" element={<Join />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
