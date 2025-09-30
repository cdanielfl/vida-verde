import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './Layout'
import Home from './pages/Home'
import Ofertas from './pages/Ofertas'
import Produtos from './pages/Produtos'
import Contato from './pages/Contato'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Layout>
  )
}

export default App
