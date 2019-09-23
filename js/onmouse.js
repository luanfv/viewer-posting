document.querySelector('#search').onmouseover = () => {
    document.querySelector('#search').style.backgroundColor = '#088A08'
    document.querySelector('#search').style.cursor = 'pointer'
}

document.querySelector('#search').onmouseout = () => {
    document.querySelector('#search').style.backgroundColor = '#04B404'
}

document.querySelector('#create').onmouseover = () => {
    document.querySelector('#create').style.backgroundColor = '#084B8A'
    document.querySelector('#create').style.cursor = 'pointer'
}

document.querySelector('#create').onmouseout = () => {
    document.querySelector('#create').style.backgroundColor = '#045FB4'
}