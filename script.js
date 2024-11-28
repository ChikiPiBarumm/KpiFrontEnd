// Lab4.Завдання 1
let clickCount = 0;
const targetIndex = 11;

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

// Lab4.Завдання 2
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


// Lab 5.Завдання 1
function validateForm() {
    const fullName = document.getElementById('fullName');
    const group = document.getElementById('group');
    const phone = document.getElementById('phone');
    const faculty = document.getElementById('faculty');
    const email = document.getElementById('email');

    // Регулярні вирази
    const fullNameRegex = /^[А-ЯІЇЄA-Z][а-яіїєa-z]+\s[А-ЯІЇЄA-Z]\.[А-ЯІЇЄA-Z]\.$/; // Прізвище з великої літери та ініціали
    const groupRegex = /^[A-ZА-ЯІЇЄ]{2}-\d{2}$/; // Дві літери та дві цифри через дефіс
    const phoneRegex = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/; // Формат (123)-456-78-90
    const facultyRegex = /^[A-ZА-ЯІЇЄa-zа-яіїє]{4,10}$/; // 4-10 букв
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Стандартний email

    let isValid = true;

    [fullName, group, phone, faculty, email].forEach(field => field.classList.remove('error'));

    if (!fullNameRegex.test(fullName.value)) {
        fullName.classList.add('error');
        isValid = false;
    }
    if (!groupRegex.test(group.value)) {
        group.classList.add('error');
        isValid = false;
    }
    if (!phoneRegex.test(phone.value)) {
        phone.classList.add('error');
        isValid = false;
    }
    if (!facultyRegex.test(faculty.value)) {
        faculty.classList.add('error');
        isValid = false;
    }
    if (!emailRegex.test(email.value)) {
        email.classList.add('error');
        isValid = false;
    }

    if (isValid) {
        alert(`ПІБ: ${fullName.value}\nГрупа: ${group.value}\nТелефон: ${phone.value}\nФакультет: ${faculty.value}\nEmail: ${email.value}`);
    } else {
        alert('Перевірте правильність введених даних.');
    }
}


// Lab 5.Завдання 2
function createTable() {
    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';

    // Створення палітри кольорів
    const colorPalette = document.createElement('div');
    colorPalette.style.marginBottom = '10px';
    document.body.appendChild(colorPalette);

    const colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.style.marginBottom = '10px';
    colorInput.style.width = '10%'
    colorInput.value = '#000000';
    colorPalette.appendChild(colorInput);

    let selectedColor = colorInput.value;

    colorInput.addEventListener('input', () => {
        selectedColor = colorInput.value;
    });

    // Створюємо таблицю
    for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 6; j++) {
            const cell = document.createElement('td');
            const number = i * 6 + j + 1;
            cell.textContent = number;

            // Зміна кольору на випадковий при наведенні миші (hover)
            if (number === 8) {
                cell.addEventListener('mouseover', () => {
                    cell.style.backgroundColor = getRandomColor();
                    cell.style.color = getRandomColor();
                });
            }

            // Зміна кольору при кліку
            cell.addEventListener('click', () => {
                if (selectedColor) {
                    cell.style.backgroundColor = selectedColor;
                }
            });

            // Зміна кольору стовпців через один при подвійному кліку
            cell.addEventListener('dblclick', () => {
                if (selectedColor) {
                    const columnIndex = j;
                    const rows = table.rows;
                    for (let rowIdx = 0; rowIdx < rows.length; rowIdx++) {
                        for (let colIdx = columnIndex; colIdx < rows[rowIdx].cells.length; colIdx += 2) {
                            rows[rowIdx].cells[colIdx].style.backgroundColor = selectedColor;
                        }
                    }
                }
            });

            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    document.body.appendChild(table);
}

// Функція для генерації випадкового кольору
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}