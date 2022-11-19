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

