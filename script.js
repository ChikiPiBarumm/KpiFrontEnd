// Завдання 1
let clickCount = 0;
const targetIndex = (58 % 10) + 1;

document.querySelectorAll('li, p, h2, ol li').forEach((element, index) => {
    element.addEventListener('click', (event) => {
        clickCount++;
        let isEvenClick = clickCount % 2 === 0;
        if ((index + 1) === targetIndex) {
            event.target.style.backgroundColor = isEvenClick ? 'white' : 'lightblue';
            event.target.style.color = isEvenClick ? 'black' : 'red';
        } else if ((index + 1) === targetIndex + 1) {
            event.target.style.backgroundColor = isEvenClick ? 'white' : 'lightgreen';
            event.target.style.color = isEvenClick ? 'black' : 'blue';
        }
    });
});

// Завдання 2
const imageContainer = document.querySelector('.image-container');
const mainImage = document.getElementById('main-image');

document.getElementById('add-image').addEventListener('click', () => {
    if (!document.querySelector('.additional-image')) {
        const newImage = mainImage.cloneNode(true);
        newImage.classList.add('additional-image');
        imageContainer.appendChild(newImage);
    }
});

document.getElementById('increase-image').addEventListener('click', () => {
    mainImage.style.width = (mainImage.offsetWidth + 50) + 'px';
});

document.getElementById('decrease-image').addEventListener('click', () => {
    if (mainImage.offsetWidth > 100) {
        mainImage.style.width = (mainImage.offsetWidth - 50) + 'px';
    }
});

document.getElementById('remove-image').addEventListener('click', () => {
    const additionalImage = document.querySelector('.additional-image');
    if (additionalImage) {
        additionalImage.remove();
    }
});
