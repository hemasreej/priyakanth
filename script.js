let currentPage = 1;
const totalPages = 10;  // Update this with the total number of pages

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('keydown', handleKeyPress);
});

function handleKeyPress(event) {
    if (event.keyCode === 39) { // Right arrow key
        nextPage();
    }
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        updateBook();
    }
}

function updateBook() {
    const book = document.getElementById('book');
    book.style.transform = `translateX(${-100 * (currentPage - 1)}vw)`;
}
