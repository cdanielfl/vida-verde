import React from 'react'

const Beneficios = () => {
  return (
    <section className="container mt-5">
      <h2 className="text-center">Por que comprar na Plantei?</h2>
      <div className="row text-center">
        <div className="col-md-4">
          <h4>🚚 Frete Rápido</h4>
          <p>Enviamos para todo o Brasil com rapidez e segurança.</p>
        </div>
        <div className="col-md-4">
          <h4>🌱 Produtos Naturais</h4>
          <p>Garantimos produtos de alta qualidade e sustentáveis.</p>
        </div>
        <div className="col-md-4">
          <h4>💳 Pagamento Seguro</h4>
          <p>
            Compre com tranquilidade, aceitamos diversas formas de pagamento.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Beneficios