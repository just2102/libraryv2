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
}

//  Executes after addBook() to add new card to DOM
function createCard(title,author,pages,read,img) {
    for (let i = library.length-1;i>=0;i--) {
        title   =   library[i].title;
        author  =   library[i].author;
        pages   =   library[i].pages;
        read    =   library[i].read;
        img     =   library[i].cover;
        console.log(img)
    }
        let cardField =   document.getElementById('library');
        let newCard =   document.createElement('div');
        newCard.setAttribute('id','card');
        /* not working */
        newCard.style.backgroundImage    =   'img';
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
        if (read=='read') {
            cardRead.setAttribute('id','card_read')
            cardRead.innerText  =   read;
        } else if (read=='notread') {
            cardRead.setAttribute('id','card_not_read')
            cardRead.innerText  =   read
        }
        let removeButton    =   document.createElement('button');
        removeButton.setAttribute('class','remove_button')
        removeButton.innerText  =   'X';
        let changeStatusButton  =   document.createElement('button');
        changeStatusButton.setAttribute('class','change_status_button')
        changeStatusButton.innerText    =   'Change status'

        cardField.appendChild(newCard);

        newCard.appendChild(cardTitle)
        newCard.appendChild(cardAuthor)
        newCard.appendChild(cardPages)
        newCard.appendChild(cardRead);

        newCard.appendChild(removeButton)
        newCard.appendChild(changeStatusButton)
    }
//  Executes when user presses the '+' button
function addBook(title,author,pages,read, cover) {
    title   =   document.getElementById('title')
    author  =   document.getElementById('author')
    pages   =   document.getElementById('pages')
    read    =   document.querySelector('input[name="read"]:checked')
    cover   =   document.getElementById('cover')
    library.push(new Books(title.value,author.value,pages.value,read.value,cover.value))
    createCard()
}
addButton.addEventListener('click', addBook)

let harryPotter =   new Books ('Harry Potter','Pidrik',300,true)



