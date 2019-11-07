import React, {Component} from 'react'
import './style.css'
import Postings from './pages/Postings/index'
import {Route, Switch, Link} from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Post from './pages/Post/index'

export default class Main extends Component {
    state = {
        userId: '',
    }

    render() {
        const {userId} = this.state

        return (
            <main id='main'>
                <div id='subMenu'>
                    <h2>Busque uma postagem através do id de usuário de quem publicou</h2>
                    <input id='search' className='search' placeholder='ID de usuário' value={userId} onChange={(e) => this.setState({userId: e.target.value})}></input>
                    <Link className='searchStart' to={userId == '' ? '/' : `/posts/${userId}`}>Pesquisar</Link>
                    <hr />
                    <h2>Crie uma nova postagem agora, apenas clique no botão abaixo e preencha o formulario</h2>
                    <Link className='createPosting' to={`/create`}>Criar nova postagem</Link>
                </div>
                
                <Switch>
                    <Route exact path='/' component={Postings} />
                    <Route exact path='/posts/:userId' component={Postings} />
                    <Route exact path='/post/:postId' component={Post} />
                    <Route exact path='/create' component={CreatePost} />
                </Switch>
            </main>
        )
    }
}