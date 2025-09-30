import React from 'react'
import Header from '../components/Header'
import ProdutosDestaque from '../components/ProdutosDestaque'
import Destaques from '../components/Destaques'
import Carrossel from '../components/Carrossel'
import Beneficios from '../components/Beneficios'

const Home = () => {
  return (
    <>
      <Header />
      <ProdutosDestaque />
      <Destaques />
      <Carrossel />
      <Beneficios />
    </>
  )
}

export default Home