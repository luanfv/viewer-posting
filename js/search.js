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
    const titlePostElement = document.createElement('h2')
    const idUserPostElement = document.createElement('div')
    const bodyPostElement = document.createElement('p')
    const buttonElement = document.createElement('button')

    postElement.setAttribute('class', 'post')

    buttonElement.appendChild(document.createTextNode('Excluir'))
    idUserPostElement.appendChild(document.createTextNode(`ID: ${response.userId}`))
    titlePostElement.appendChild(document.createTextNode(response.title))
    bodyPostElement.appendChild(document.createTextNode(response.body))

    buttonElement.onmouseover = () => {
        buttonElement.style.color = 'white'
        buttonElement.style.background = '#FA5858'
        buttonElement.style.cursor = 'pointer'
    }

    buttonElement.onmouseout = () => {
        buttonElement.style.background = 'none'
        buttonElement.style.color = '#FA5858'
    }

    postElement.appendChild(idUserPostElement)
    postElement.appendChild(buttonElement)
    postElement.appendChild(titlePostElement)
    postElement.appendChild(bodyPostElement)

    document.querySelector('#content').appendChild(postElement)
}