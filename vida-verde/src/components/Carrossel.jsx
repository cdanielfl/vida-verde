import React from 'react'

const Carrossel = () => {
  const slides = [
    {
      id: 1,
      imagem: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800",
      titulo: "Transforme seu espaço",
      descricao: "Crie um jardim dos sonhos com nossos produtos."
    },
    {
      id: 2,
      imagem: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800",
      titulo: "Plantas e flores",
      descricao: "Encontre espécies perfeitas para sua casa."
    },
    {
      id: 3,
      imagem: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800",
      titulo: "Ferramentas e acessórios",
      descricao: "Os melhores equipamentos para cuidar do seu jardim."
    },
    {
      id: 4,
      imagem: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800",
      titulo: "Adubos e fertilizantes",
      descricao: "Produtos naturais para um crescimento saudável."
    }
  ]

  return (
    <section className="container mt-3">
      <h2 className="text-center mb-4">🌿 Inspirações para seu Jardim</h2>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div key={slide.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img
                src={slide.imagem}
                className="d-block w-100"
                alt={slide.titulo}
              />
              <div className="carousel-caption d-none d-md-block">
                <h4>{slide.titulo}</h4>
                <p className="caption-carrousel">{slide.descricao}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Próximo</span>
        </button>
      </div>
    </section>
  )
}

export default Carrossel