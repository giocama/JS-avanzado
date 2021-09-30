const $btnDog = document.querySelector('#btnDog');
const $dogContainer = document.querySelector('#dogContainer');

$btnDog.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(resp => resp.json()).then(data => {
        const img = document.createElement('img');
        img.src = data.message;
        $dogContainer.appendChild(img);
        });
});