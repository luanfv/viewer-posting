import React, {Component} from 'react'
import './style.css'
import SubMenu from './SubMenu/index'
import Postings from './pages/Postings'

export default class Main extends Component {
    render() {
        return (
            <main id='main'>
                <SubMenu />
                <Postings />
            </main>
        )
    }
}