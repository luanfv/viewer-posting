import React, {Component} from 'react'
import './style.css'

export default class SubMenu extends Component {
    render() {
        return (
            <div id='subMenu'>
                <h2>Busque uma postagem através do id de usuário de quem publicou</h2>
                <input className='search' placeholder='ID de usuário'></input>
                <button className='searchStart'>Pesquisar</button>
                <hr />
                <h2>Crie uma nova postagem agora, apenas clique no botão abaixo e preencha o formulario</h2>
                <button className='createPosting'>Criar nova postagem</button>
            </div>
        )
    }
}