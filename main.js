const galleryList = document.querySelector('.gallery-list');

const bigImage = document.querySelector('.gallery-img-big');
const elementTitle = document.querySelector('.gallery-img-title');
const elementText = document.querySelector('.gallery-img-text');

galleryList.addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
        const image = event.target.getAttribute('data-big-image');
        const title = event.target.getAttribute('data-title');
        const text = event.target.getAttribute('data-text');

        bigImage.setAttribute('src', image);
        elementTitle.textContent = title;
        elementText.textContent = text;
    }
})
