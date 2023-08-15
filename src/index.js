console.log('%c HI', 'color: firebrick')

fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(data => {
        data.message.forEach(image => addingOurImage(image));
    });

function addingOurImage(dogUrl) {
    let imgElement = document.createElement('img');
    imgElement.src = dogUrl;

    let container = document.getElementById('dog-image-container');
    container.appendChild(imgElement);
}

fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(data => {
        //data
    })