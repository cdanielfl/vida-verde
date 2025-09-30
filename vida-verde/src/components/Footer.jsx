import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>🌱 Sobre a Loja</h5>
            <p className="small">A melhor loja de jardinagem, trazendo plantas, sementes e acessórios para você transformar seu espaço.</p>
          </div>

          <div className="col-md-3">
            <h5>📞 Atendimento</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Fale Conosco</a></li>
              <li><a href="#" className="text-light text-decoration-none">Política de Privacidade</a></li>
              <li><a href="#" className="text-light text-decoration-none">Trocas e Devoluções</a></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>📢 Redes Sociais</h5>
            <a href="#" className="text-light me-2"><i className="fab fa-facebook fa-lg"></i></a>
            <a href="#" className="text-light me-2"><i className="fab fa-instagram fa-lg"></i></a>
            <a href="#" className="text-light"><i className="fab fa-whatsapp fa-lg"></i></a>
          </div>

          <div className="col-md-3">
            <h5>💳 Pagamento</h5>
            <img src="https://images.tcdn.com.br/exclusive/assets/store/img/icons/formas_pagamento/pag_peqcartaovisa.png?7e0d94a2e3076197c5e2a453b1e80183" width="30" alt="Visa" />
            <img src="https://images.tcdn.com.br/exclusive/assets/store/img/icons/formas_pagamento/pag_peqcartaomastercard.png?7e0d94a2e3076197c5e2a453b1e80183" width="30" alt="Mastercard" />
            <img src="https://images.tcdn.com.br/exclusive/assets/store/img/icons/formas_pagamento/pag_pd_peqcartaohiper.png?7e0d94a2e3076197c5e2a453b1e80183" width="30" height="25" alt="Hiper" />
            <img src="https://images.tcdn.com.br/exclusive/assets/store/img/icons/formas_pagamento/pag_peqcartaoelo.png?7e0d94a2e3076197c5e2a453b1e80183" width="30" alt="Elo" />
          </div>
        </div>

        <hr className="bg-light" />

        <div className="text-center">
          <p className="small mb-0">&copy; 2025 Plantei. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer