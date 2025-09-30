import React, { useState } from 'react'
import InputField from './InputField'

const Destaques = () => {
  const [_busca, setBusca] = useState("")

  return (
    <>
    <section className="mt-3 py-5" style={{backgroundColor: '#f8f9fa'}}>
            <div className="container text-center">
                <h2 className="mb-4">🌿 Categorias</h2>
                <div className="row justify-content-center mb-4">
                    <div className="col-md-6">
                        <InputField 
                            type="text"
                            placeholder="Buscar plantas..."
                            onChange={setBusca}
                            className="text-start"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 col-6 mb-4">
                        <div className="categoria">
                            <img src="https://images.tcdn.com.br/files/350075/themes/293/img/settings/frutiferascd.jpg?21c024c16131a7dfc1f13fece841637f" className="rounded-circle img-fluid" alt="Flores" />
                            <p className="mt-2">Frutíferas</p>
                        </div>
                    </div>
                    <div className="col-md-2 col-6 mb-4">
                        <div className="categoria">
                            <img src="https://images.tcdn.com.br/files/350075/themes/293/img/settings/folhagenscd.jpg?21c024c16131a7dfc1f13fece841637f" className="rounded-circle img-fluid" alt="Sementes" />
                            <p className="mt-2">Folhagens</p>
                        </div>
                    </div>
                    <div className="col-md-2 col-6 mb-4">
                        <div className="categoria">
                            <img src="https://images.tcdn.com.br/files/350075/themes/293/img/settings/bulboscd.jpg?21c024c16131a7dfc1f13fece841637f" className="rounded-circle img-fluid" alt="Vasos" />
                            <p className="mt-2">Bulbos de Flores</p>
                        </div>
                    </div>
                    <div className="col-md-2 col-6 mb-4">
                        <div className="categoria">
                            <img src="https://images.tcdn.com.br/files/350075/themes/293/img/settings/plantasmodacd.jpg?21c024c16131a7dfc1f13fece841637f" className="rounded-circle img-fluid" alt="Adubos" />
                            <p className="mt-2">Plantas da Moda</p>
                        </div>
                    </div>
                    <div className="col-md-2 col-6 mb-4">
                        <div className="categoria">
                            <img src="https://images.tcdn.com.br/files/350075/themes/293/img/settings/hortalicascd.jpg?21c024c16131a7dfc1f13fece841637f" className="rounded-circle img-fluid" alt="Ferramentas" />
                            <p className="mt-2">Hortaliças</p>
                        </div>
                    </div>
                    <div className="col-md-2 col-6 mb-4">
                        <div className="categoria">
                            <img src="https://images.tcdn.com.br/files/350075/themes/293/img/settings/florescd.jpg?21c024c16131a7dfc1f13fece841637f" className="rounded-circle img-fluid" alt="Ferramentas" />
                            <p className="mt-2">Flores</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Destaques