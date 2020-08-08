//Book constructor 

function Book(title, author, isbn) {
    this.title = title; 
    this.author = author; 
    this.isbn = isbn; 
}

//UI Constructor 
function UI() {}

UI.prototype.addBookToList = function(book) {
    const list = document.getElementById('book-list'); 
    // create tr element 
    const row = document.createElement('tr')

    //insert cols 
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>`

    console.log(row)
}

//Event Listeners 
const bookForm = document.getElementById('book-form')
bookForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const title = document.getElementById('title').value, 
          author = document.getElementById('author').value, 
          isbn = document.getElementById('isbn').value 

    const book = new Book (title, author, isbn)

    const ui = new UI()

    //add book to list 
    ui.addBookToList(book); 

}) 

