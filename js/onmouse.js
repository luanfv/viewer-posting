document.querySelector('#search').onmouseover = () => {
    document.querySelector('#search').style.backgroundColor = '#F2F2F2'
    document.querySelector('#search').style.color = '#04B404'
    document.querySelector('#search').style.cursor = 'pointer'
}

document.querySelector('#search').onmouseout = () => {
    document.querySelector('#search').style.backgroundColor = '#04B404'
    document.querySelector('#search').style.color = '#F2F2F2'
}

document.querySelector('#create').onmouseover = () => {
    document.querySelector('#create').style.backgroundColor = '#F2F2F2'
    document.querySelector('#create').style.color = '#045FB4'
    document.querySelector('#create').style.cursor = 'pointer'
}

document.querySelector('#create').onmouseout = () => {
    document.querySelector('#create').style.backgroundColor = '#045FB4'
    document.querySelector('#create').style.color = '#F2F2F2'
}