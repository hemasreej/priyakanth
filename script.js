// Inside script.js file

const book = document.getElementById('book');
const pages = document.querySelectorAll('.page');
let currentPage = 0;

book.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        updateBook();
    }
});

function updateBook() {
    const angle = -currentPage * 90;
    book.style.transform = `rotateY(${angle}deg)`;
}
