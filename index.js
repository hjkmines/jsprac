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

    list.append(row);
}

UI.prototype.clearFields = function () {
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('isbn').value = ''
}

UI.prototype.showAlert = function (message, className) {
    //create div 
    const div = document.createElement('div')
    //add classes 
    div.className = `alert ${className}`; 
    //add text 
    div.appendChild(document.createTextNode(message));
    //get parent 
    const container = document.querySelector('container'); 
    const form = document.querySelector('#book-form')
    container.insertBefore(div, form )

    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 3000)
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

    //validate
    if(title === '' || author === "" || isbn === "") {
        //Error 
        UI.showAlert('Please fill in all fields', 'error')
    } else {
        ui.addBookToList(book)
    }

    //add book to list 
    ui.addBookToList(book); 
    ui.clearFields(); 

}) 


//clear fields 
