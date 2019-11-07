import React, {Component} from 'react'
import './style.css'

export default class CreatePost extends Component {
    render() {
        return(
            <div className='content'>

                <h1>
                    Preencha os campos abaixo e simule a criação de uma nova postagem
                </h1>

                <hr className='create-hr'/>

                <input className='create-title' placeholder='Titulo' />
                <input className='create-userId' placeholder='ID de usuario' />
                <textarea className='create-body' placeholder='Conteudo da postagem' />
                <button className='create-public' placeholder='Publicar' >Publicar</button>

            </div>
        )
    }
}