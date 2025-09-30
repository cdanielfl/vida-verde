import React from 'react'

const ProdutosDestaque = () => {
  const produtos = [
    {
      id: 1,
      nome: "Kit Jardinagem Completo",
      preco: "R$ 99,90",
      imagem: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400"
    },
    {
      id: 2,
      nome: "Adubo Orgânico",
      preco: "R$ 29,90",
      imagem: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400"
    },
    {
      id: 3,
      nome: "Sementes Variadas",
      preco: "R$ 14,90",
      imagem: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400"
    }
  ]

  return (
    <section className="container mt-5">
      <h2 className="text-center mb-4">🌱 Destaques da Semana</h2>
      <div className="row">
        {produtos.map(produto => (
          <div key={produto.id} className="col-md-4">
            <div className="card">
              <img
                src={produto.imagem}
                className="card-img-top"
                alt={produto.nome}
              />
              <div className="card-body">
                <h5 className="card-title">{produto.nome}</h5>
                <p className="card-text">{produto.preco}</p>
                <a href="#" className="btn btn-success">Comprar</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProdutosDestaque