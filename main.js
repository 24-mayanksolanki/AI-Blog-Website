// JavaScript to handle the carousel effect
let currentItem = 0;
const items = document.querySelectorAll('.carousel-item');

function showItem(index) {
    items[currentItem].style.display = 'none';
    items[index].style.display = 'block';
    currentItem = index;
}

function nextItem() {
    const newIndex = (currentItem + 1) % items.length;
    showItem(newIndex);
}

function prevItem() {
    const newIndex = (currentItem - 1 + items.length) % items.length;
    showItem(newIndex);
}

// Automatically advance the carousel
setInterval(nextItem, 5000); // Change image every 5 seconds

// Show the initial item
showItem(currentItem);
