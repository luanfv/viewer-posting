document.querySelector('#search').onclick = () => {
    document.querySelector('#content').innerHTML = ''
    document.querySelector('#content').style = ''
    
    let url = 'https://jsonplaceholder.typicode.com/posts'
    
    if(document.querySelector('#idUser').value != ''){
        url += `?userId=${document.querySelector('#idUser').value}`
    }

    axios.get(url)
    .then((response) => {
        for(let i = 0; i < response.data.length; i++){
            render(response.data[i])
        }
    })
    .catch((e) => {
        console.log("Não rolou campeão!")
    })
}

function render(response) {
    const postElement = document.createElement('div')
    postElement.setAttribute('class', 'post')
    const titlePostElement = document.createElement('h2')
    const idUserPostElement = document.createElement('div')
    const bodyPostElement = document.createElement('p')

    idUserPostElement.appendChild(document.createTextNode(`ID: ${response.userId}`))
    titlePostElement.appendChild(document.createTextNode(response.title))
    bodyPostElement.appendChild(document.createTextNode(response.body))

    postElement.appendChild(idUserPostElement)
    postElement.appendChild(titlePostElement)
    postElement.appendChild(bodyPostElement)

    document.querySelector('#content').appendChild(postElement)
}