//  array of objects to store all books
let library =   [];

let showFormButton    =   document.getElementById('show_form');
let form    =   document.getElementById('form')
showFormButton.addEventListener('click',showForm)
function showForm() {
    form.style.display  =   'grid';
}

let addButton   =   document.getElementById('add_book')
addButton.addEventListener('click',hideForm)
function hideForm() {
    form.style.display  =   'none';
}


class Books {
    constructor(title,author,pages,read,cover) {
        this.title  =   title;
        this.author =   author;
        this.pages  =   pages;
        this.read   =   read;
        this.cover  =   cover;
    }
    get title() {
        return this._title;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
    get read() {
        return this._read;
    }
    get cover() {
        return this._cover;
    }
    set title(value) {
        this._title =   value;
    }
    set author(value) {
        this._author    =   value;
    }
    set pages(value) {
        this._pages =   value;
    }
    set read(value) {
        this._read  =   value;
    }
    set cover(value) {
        this._cover  =   value;
    }
    toggleStatus() {
        if (this._read  ==  'true') {
            this._read  =  'false'
        } else if (this._read=='false') {
            this._read  =   'true'
        }
    }
}

//  Executes after addBook() to add new card to DOM
function createCard(title,author,pages,read,cover) {
        title   =   library[library.length-1].title;
        author  =   library[library.length-1].author;
        pages   =   library[library.length-1].pages;
        read    =   library[library.length-1].read;
        cover   =   library[library.length-1].cover;
        let cardField =   document.getElementById('library');
        let newCard =   document.createElement('div');
        newCard.setAttribute('id','card');
        /* not working */
        newCard.style.backgroundImage    =   cover;
        /*             */
        let cardTitle   =   document.createElement('h2')
        cardTitle.setAttribute('id','card_title')
        cardTitle.innerText     =   title;

        let cardAuthor  =   document.createElement('h4');
        cardAuthor.setAttribute('id','card_author')
        cardAuthor.innerText    =   author;

        let cardPages   =   document.createElement('p');
        cardPages.setAttribute('id','card_pages');
        cardPages.innerText     =   pages;

        let cardRead    =   document.createElement('p');
        cardRead.innerText  =   read 

        let removeButton    =   document.createElement('button');
        removeButton.setAttribute('class','remove_button')
        removeButton.innerText  =   'X';
        let changeStatusButton  =   document.createElement('button');
        changeStatusButton.setAttribute('class','change_status_button')
        changeStatusButton.innerText    =   'Read?'
//  Appends new card as child of #library and fills it with content (title, author, pages, status, button to change status and to remove card)
        cardField.appendChild(newCard);

        newCard.appendChild(cardTitle)
        newCard.appendChild(cardAuthor)
        newCard.appendChild(cardPages)
        
        
        newCard.appendChild(cardRead);
        newCard.appendChild(changeStatusButton)
        newCard.appendChild(removeButton)

        let removeBtn    =   document.querySelectorAll('.remove_button');
        removeBtn.forEach(button => {
            button.addEventListener('click', function handleClick(event) {
                for (let i =0; i<library.length;i++) {
                    if (library[i]._title==button.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.innerText) {
                        library.splice(i,1);
                        button.parentElement.remove()
                    } 
                }
            })
        })
        let statusBtn  =   document.querySelectorAll('.change_status_button');
        statusBtn.forEach(button => {
            button.addEventListener('click', function handleClick(event) {
                for (let i=0;i<library.length;i++) {
                    if (library[i]._title==button.previousSibling.previousSibling.previousSibling.previousSibling.innerText) {
                        let currentBook =   library[i];
                        currentBook.toggleStatus()
                        button.previousSibling.innerText    =   currentBook._read;
                    }
                }
            })
        })
    }
//  Executes when user presses the '+' button
function addBook(title,author,pages,read,cover) {
 
    title   =   document.getElementById('title')
    author  =   document.getElementById('author')
    pages   =   document.getElementById('pages')
    read    =   document.querySelector('input[name="read"]:checked')
    cover   =   document.getElementById('cover')  
     for (let i = 0; i<library.length;i++) {
        if (library[i]._title==title.value) {
            alert('This book is already in your library!')
            title.value=''
        } else {
            break;
        }
    }
    library.push(new Books(title.value,author.value,pages.value,read.value,cover.value))
    createCard()
}
addButton.addEventListener('click', addBook)









