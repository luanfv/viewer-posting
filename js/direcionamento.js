document.querySelector('#create').onclick = () => {
    document.querySelector('#content').innerHTML = ''
    
    const formElement = document.createElement('form')
    const inputTitleElement = document.createElement('input')
    const inputBodyElement = document.createElement('input')
    const inputIdUserElement = document.createElement('input')
    const publicElement = document.createElement('button')

    inputTitleElement.setAttribute('placeholder', 'Informe o titulo da postagem')
    inputTitleElement.setAttribute('class', 'title')
    inputIdUserElement.setAttribute('placeholder', 'Identificador')
    inputIdUserElement.setAttribute('class', 'idUser')
    inputBodyElement.setAttribute('placeholder', 'Informe o conteudo da postagem')
    inputBodyElement.setAttribute('class', 'body')
    publicElement.appendChild(document.createTextNode("Publicar"))
    publicElement.setAttribute('class', 'public')

    formElement.appendChild(inputTitleElement)
    formElement.appendChild(inputIdUserElement)
    formElement.appendChild(inputBodyElement)
    formElement.appendChild(publicElement)

    document.querySelector('#content').appendChild(formElement)
}

document.querySelector('#search').onclick = () => {
    document.querySelector('#content').innerHTML = ''
}