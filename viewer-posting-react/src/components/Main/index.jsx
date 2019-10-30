import React, {Component} from 'react'
import './style.css'
import Postings from './pages/Postings/index'
import Search from './pages/Search/index'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import CreatePost from './pages/CreatePost'

export default class Main extends Component {
    state = {
        userId: '',
    }

    render() {
        const {userId} = this.state

        return (
            <main id='main'>
                <BrowserRouter>
                    <div id='subMenu'>
                        <h2>Busque uma postagem através do id de usuário de quem publicou</h2>
                        <input id='search' className='search' placeholder='ID de usuário' value={userId} onChange={(e) => this.setState({userId: e.target.value})}></input>
                        <Link to='/'>home</Link>
                        <Link className='searchStart' to={`/posts/userId/${userId}`}>Pesquisar</Link>
                        <hr />
                        <h2>Crie uma nova postagem agora, apenas clique no botão abaixo e preencha o formulario</h2>
                        <Link className='createPosting' to={`/posts/create`}>Criar nova postagem</Link>
                    </div>
                    
                    <Switch>
                        <Route exact path='/' component={Postings} />
                        <Route exact path='/posts/userId/:userId' render={(props) => <Search {...props} condition={`?userId=${userId}`} />} />
                        <Route exact path='/posts/create' component={CreatePost} />
                    </Switch>
                </BrowserRouter>
            </main>
        )
    }
}