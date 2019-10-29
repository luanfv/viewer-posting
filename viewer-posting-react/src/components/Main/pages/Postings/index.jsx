import React, {Component} from 'react'
import './style.css'
import api from '../../../../service/api'
import imgDelete from '../../../../img/delete.png'

export default class Postings extends Component {
    state = {
        postings: [],
    }

    componentDidMount() {
       this.loadPostings() 
    }

    loadPostings = async () => {
        const response = await api.get(`/posts`)
        this.setState({postings: response.data})
    }

    deletePost = (post) => {
        api.delete(`/posts/${post.id}`)
        alert(`Post foi deletado (simulação) - Post ID: ${post.id} / User ID: ${post.userId}`)
    }

    render() {
        const {postings} = this.state

        return (
            <div className='postings'>
                {
                    postings.map(post => {
                        return ( 
                            <div key={post.id} className='post'>
                                <img className='delete' onClick={(e) => this.deletePost(post)} src={imgDelete} />
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