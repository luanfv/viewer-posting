document.querySelector('#create').onclick = () => {
    document.querySelector('#content').innerHTML = ''
    
    document.querySelector('#content').style = 'width: 1200px; height: 620px; border: #A4A4A4 solid 1px; margin: 50px auto; align-content: center; text-align: center; background: white; border-radius: 5px;'

    const formElement = document.createElement('div')
    const inputTitleElement = document.createElement('input')
    const inputBodyElement = document.createElement('textarea')
    const inputIdUserElement = document.createElement('input')
    const publicElement = document.createElement('button')

    inputTitleElement.setAttribute('placeholder', 'Informe o titulo da postagem')
    inputTitleElement.setAttribute('class', 'title')
    inputIdUserElement.setAttribute('placeholder', 'ID')
    inputIdUserElement.setAttribute('class', 'idUser')
    inputBodyElement.setAttribute('placeholder', 'Informe o conteudo da postagem')
    inputBodyElement.setAttribute('class', 'body')
    publicElement.appendChild(document.createTextNode("Publicar"))
    publicElement.setAttribute('class', 'public')

    publicElement.onmouseover = () => {
        publicElement.style.backgroundColor = 'black'
        publicElement.style.cursor = 'pointer'
    }

    publicElement.onmouseout = () => {
        publicElement.style.backgroundColor = '#2E2E2E'
    }

    publicElement.onclick = () => {
        const postToCreate = getPostObject()

        if(Object.keys(postToCreate) == 0)
            alert('Postagem não foi criada. \n\nNem todos os campos foram preenchidos!')
        else {
            createPost(postToCreate)
            alert('Postagem criada com sucesso!')
        }
    }

    function getPostObject() {
        if(inputTitleElement.value.trim() == '')
            return {}

        if(inputBodyElement.value.trim() == '')
            return {}

        if(inputIdUserElement.value.trim() == '')
            return {}

        const post = {
                        title: inputTitleElement.value,
                        body: inputBodyElement.value,
                        userId: inputIdUserElement.value    
                    }

        return post
    }

    formElement.appendChild(inputTitleElement)
    formElement.appendChild(inputIdUserElement)
    formElement.appendChild(inputBodyElement)
    formElement.appendChild(publicElement)

    document.querySelector('#content').appendChild(formElement)
}