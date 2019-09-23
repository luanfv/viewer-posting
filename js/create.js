document.querySelector('#create').onclick = () => {
    document.querySelector('#content').innerHTML = ''
    
    document.querySelector('#content').style = 'width: 1200px; height: 620px; border: #A4A4A4 solid 1px; margin: 50px auto; align-content: center; text-align: center; background: white; border-radius: 5px;'

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