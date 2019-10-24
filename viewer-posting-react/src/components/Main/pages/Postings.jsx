import React, {Component} from 'react'
import './style.css'
import api from '../../../service/api'

export default class Postings extends Component {
    state = {
        postings: [],
    }

    componentDidMount() {
       this.loadPostings() 
    }

    loadPostings = async () => {
        const response = await api.get()
        this.setState({postings: response.data})
    }

    render() {
        const {postings} = this.state

        return (
            <div className='postings'>
                {
                    postings.map(post => {
                        return ( 
                            <div key={post.id} className='post'>
                                <h3 className='userId'>ID de usuário: {post.userId}</h3>
                                <h2 className='title'>{post.title}</h2>
                                <hr />
                                <p className='body'>{post.body}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}