import React, {Component} from 'react'
import './style.css'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header id='header'>
                <Link className='title-header' to='/'>Viewer Posting</Link>
            </header>
        )
    }
}