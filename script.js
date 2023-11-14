let currentPage = 1;
const totalPages = 10;

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
    const nextPage = document.getElementById(`page${currentPage}`);
    const currentTransform = getComputedStyle(book).transform;
    
    // Ensure smooth transition between pages
    book.style.transition = 'transform 1s ease-in-out';
    
    // Apply the transition to the next page
    book.style.transform = `translateX(${currentTransform ? parseInt(currentTransform.split(',')[4]) - 100 : 0}vw)`;
    
    // Remove transition after it's done to avoid affecting other transformations
    setTimeout(() => {
        book.style.transition = 'none';
    }, 1000);
}
