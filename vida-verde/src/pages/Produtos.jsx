import React, { useEffect, useState } from 'react'
import { api } from '../service/api'

const Produtos = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchProducts = async () => {
    try {
      const response = await api.get('/produtos')
      const data = response.data

      console.log('Produtos carregados:', data);
      console.log('Tipo dos dados:', typeof data);
      console.log('É array?', Array.isArray(data));
      
      // Se data é objeto com array dentro, pega o array
      const produtos = Array.isArray(data) ? data : data.produtos || data.data || []
      console.log('Produtos finais:', produtos);
      
      setProducts(produtos)
    } catch (err) {
      console.error('Erro ao carregar os produtos:', err)
      setError('Erro ao carregar produtos')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  if (loading) return <p>Carregando produtos...</p>
  if (error) return <p>{error}</p>

  return (
    <div className="container mt-5">
      <h1>🌱 Produtos</h1>

      {products.length === 0 && <p>Nenhum produto encontrado</p>}

      <div className="row">
        {products.map(p => (
          <div key={p.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={p.imagem}
                className="card-img-top"
                alt={p.nome}
              />
              <div className="card-body">
                <h5 className="card-title">{p.nome}</h5>
                <p className="card-text">R$ {p.preco}</p>
                <a href="#" className="btn btn-success">Comprar</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Produtos