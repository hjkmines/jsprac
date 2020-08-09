class Book {
    constructor(title, author, isbn) {
        this.title = title
        this.author = author
        this.isbn = isbn 
    }
}

const form = document.querySelector('form')

class UI {
    addBook(book) {
        const $tbody = document.querySelector('#book-list')
        const $tr = document.createElement('tr')
        const $div = document.createElement('div')

        $tr.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <a href="#" id="remove">X</a>
        `

        $div.textContent = 'Book added!'
        $div.classList.add('success')

        $tbody.append($tr); 
        form.prepend($div)

        setTimeout(() => {
            const removeMessage = document.querySelector('.success'); 
            removeMessage.remove(); 
        }, 3000)
    }

    removeBook() {

    }

    clearFields() {
        document.querySelector('#title').value = ""
        document.querySelector('#author').value = ""
        document.querySelector('#isbn').value = ""
    }

    showAlert() {
        const $div = document.createElement('div')
        $div.innerText = 'Please fill out all three input fields!'
        $div.classList.add('error')
        form.prepend($div)

        setTimeout(() => {
            const removeMessage = document.querySelector('.error'); 
            removeMessage.remove(); 
        }, 3000)
    }

}


form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    //Grab values of input fields 
    const title = document.querySelector('#title').value,
          author = document.querySelector('#author').value, 
          isbn = document.querySelector('#isbn').value

    const ui = new UI()

    if (title === "" || author === "" || isbn === "") {
        ui.showAlert(); 
    } else {
        const book = new Book (title, author, isbn); 
        ui.addBook(book); 
        ui.clearFields(); 
    }

})