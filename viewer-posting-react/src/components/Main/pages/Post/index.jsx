import React, {Component} from 'react'
import './style.css'
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

    render() {
        const {post, comments} = this.state

        return (
            <div className='content'>
                
                <div>
                    <h2 className='userId'>{post.userId}</h2>
                    <h1 className='title'>{post.title}</h1>
                    <p className='body'>{post.body}</p>
                </div> 
                <hr />
                <div>
                    {
                        comments.map(element => 
                            <div key={element.id}>
                                <p>E-mail: {element.email}</p>
                                <p>nome: {element.name}</p>
                                
                                <p>{element.body}</p>
                            </div>
                        )
                    }
                </div>
                
            </div>
        )
    }
}