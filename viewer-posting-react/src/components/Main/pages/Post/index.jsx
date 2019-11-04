import React, {Component} from 'react'
import './style.css'
import imgDelete from '../../../../img/delete.png'
import api from '../../../../service/api'

export default class Post extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            id: props.match.params.postId,
            post: [],
            comments: []
        }
    }
    
    componentDidMount() {
        this.loadComments()
        this.loadPost()
    }

    loadPost = async () => {
        const {id} = this.state
        
        const response = await api.get(`/comments?postId=${id}`)
        this.setState({comments: response.data})
    }

    loadComments = async () => {
        const {id} = this.state
        
        const response = await api.get(`/posts/${id}`)
        this.setState({post: response.data})
    }
    
    deletePost = (post) => {
        api.delete(`/posts/${post.id}`)
        alert(`Post foi deletado (simulação) - Post ID: ${post.id} / User ID: ${post.userId}`)
    }

    render() {
        const {post, comments} = this.state

        return (
            <div className='content'>
                
                <div className='post'>
                    <img className='delete' onClick={() => this.deletePost(post)} src={imgDelete} />
                    <h2 className='userId'>User ID: {post.userId}</h2>
                    <h1 className='title'>{post.title}</h1>
                    <p className='body'>{post.body}</p>
                </div> 
                <hr />
                <div>
                    <h2 className='comment-title'>Comentários</h2>
                    {
                        comments.map(element => 
                            <div className='comment' key={element.id}>
                                <p className='email'>{element.email}</p>
                                <p className='name'>{element.name}</p>
                                
                                <p className='body'>{element.body}</p>
                            </div>
                        )
                    }
                </div>
                
            </div>
        )
    }
}