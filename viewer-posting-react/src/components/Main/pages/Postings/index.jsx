import React, {Component} from 'react'
import './style.css'
import api from '../../../../service/api'
import imgDelete from '../../../../img/delete.png'
import {Link} from 'react-router-dom'

export default class Postings extends Component {
    constructor(props) {
        super(props)
    }
    
    state = {
        postings: [],
    }

    componentDidMount() {
       this.loadPostings() 
    }

    componentDidUpdate() {
        this.loadPostings()
    }

    loadPostings = async () => {
        const url = this.props.match.params.userId ? `/posts?userId=${this.props.match.params.userId}` : `/posts`
        const response = await api.get(url)
        this.setState({postings: response.data})
    }

    deletePost = (post) => {
        api.delete(`/posts/${post.id}`)
        alert(`Post foi deletado (simulação) - Post ID: ${post.id} / User ID: ${post.userId}`)
    }

    render() {
        const {postings} = this.state

        return (
            <div>
                {
                    postings.map(post => 
                        <div key={post.id} className='content'>
                            <img className='delete' onClick={() => this.deletePost(post)} src={imgDelete} />
                            <h3 className='userId'>ID de usuário: {post.userId}</h3>
                            <Link className='title' to={`/post/${post.id}`}>{post.title}</Link>
                            <hr />
                            <p className='body'>{post.body}</p>
                        </div>
                    )
                }
            </div>
        )
    }
}