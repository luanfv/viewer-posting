function createPost(post) {
    axios.post('https://jsonplaceholder.typicode.com/posts', post)
    .then((response) => {
        console.log(response)
    })
    .catch(() => {
        alert('NÃO ROLOU')
    })
}