function createPost(post) {
    axios.post('https://jsonplaceholder.typicode.com/posts', post)
    .then((response) => {
        console.log(response)
    })
    .catch(() => {
        alert('NÃO ROLOU')
    })
}

function deletePost(id){
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => {
        console.log(response)
        alert(`Postagem do id: ${id}, foi removido com sucesso!`)
    })
    .catch(() => {
        alert('NÃO ROLOU')
    })
}