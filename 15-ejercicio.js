const $btnCat = document.querySelector('#btnCat');

$btnCat.addEventListener('click', () => {
    fetch(' https://api.thecatapi.com/v1/images/search')
    .then(resp => resp.json().then(data => ))
})