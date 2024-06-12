document.addEventListener('DOMContentLoaded', function () {
    const books = [
        {
            title: 'Book 1',
            author: 'Author 1',
            cover: 'book1.jpg',
        },
        {
            title: 'Book 2',
            author: 'Author 2',
            cover: 'book2.jpg',
        },
        // Add more book objects here
    ];

    const bookList = document.getElementById('bookList');

    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'p-4';

        bookCard.innerHTML = `
            <div class="bg-white rounded-lg shadow-md p-4">
                <img src="${book.cover}" alt="${book.title}" class="w-full h-48 object-cover">
                <h2 class="text-lg font-semibold mt-2">${book.title}</h2>
                <p class="text-gray-600">${book.author}</p>
            </div>
        `;

        bookList.appendChild(bookCard);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Define your dynamic content for the About page.
    const aboutContent = `
        Gyan-Lok Bookstore was founded with a passion for literature and knowledge. 
        Our mission is to provide a diverse selection of books that cater to all interests and age groups.
        <br><br>
        We believe that books have the power to inspire, educate, and transform lives.
        Our dedicated team is here to help you discover your next great read.
    `;

    // Update the content of the "Our Story" section.
    const aboutText = document.getElementById('aboutText');
    aboutText.innerHTML = aboutContent;
});
// Show or hide the book categories drop-down menu on hover
document.addEventListener('DOMContentLoaded', function () {
    const booksNavItem = document.querySelector('.relative.group');
    booksNavItem.addEventListener('mouseenter', function () {
        const dropdownMenu = booksNavItem.querySelector('ul');
        dropdownMenu.style.display = 'block';
    });

    booksNavItem.addEventListener('mouseleave', function () {
        const dropdownMenu = booksNavItem.querySelector('ul');
        dropdownMenu.style.display = 'none';
    });
});




