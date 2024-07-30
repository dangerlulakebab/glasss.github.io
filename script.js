let lastImageUrl = ''

document.getElementById('change-bg-button').addEventListener('click', function() {
    const newImageUrl = getRandomImageUrl();
    document.body.style.backgroundImage = `url(${getRandomImageUrl()})`;
    lastImageUrl = newImageUrl;
});

function getRandomImageUrl() {
    const images = [
        '1.jpg',
        '3.jpg',
        '4.jpg',
        '5.jpg',
    ];
    
    const filteredImages = images.filter(image => image !== lastImageUrl);

    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}
