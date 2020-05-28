let $todoInput; // treść zadania
let $alertInfo; // info o brak uzadań / koniecznosć dodania tekstu
let $addBtn; // przycisk dodawnia zadania
let $ulList; // lista zadań
let $newTask;
let $toolsPanel;
let $completeBtn;
let $editBtn;
let $deleteBtn

// okienko popup z edycją
let $popup; // pobrany popup
let $popupInfo; // alert w popupie ja ksie doda pusty tekst
let $editedTodo; // edytowany Todo
let $popupInput; // tekst wpisywane w inputa w popupie
let $addPopupBtn; // przycisk zatwierdź w popupie
let $closeTodoBtn;  // przycisk do zamykania popupa


const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
};

// pobieramy nasze elementy
const prepareDOMElements = () => {
    $todoInput = document.querySelector('.todoInput');
    $alertInfo = document.querySelector('.alertInfo');
    $addBtn = document.querySelector('.addBtn');
    $ulList = document.querySelector('.todoList ul');

    $popup = document.querySelector('.popup');
    $popupInfo = document.querySelector('.popupInfo');
    $popupInput = document.querySelector('.popupInput');
    $addPopupBtn = document.querySelector('.accept');
    $closeTodoBtn = document.querySelector('.cancel');
};

// nadajemy nasłuchiwanie
const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask);
    $ulList.addEventListener('click', checkClick);
    $closeTodoBtn.addEventListener('click', closePopup);
};

// Dodaj nowe zadanie
const addNewTask = () => {
    if($todoInput.value != '') {
        $newTask = document.createElement('li');
        $newTask.innerHTML = $todoInput.value;
        $ulList.appendChild($newTask);
        $todoInput.value = '';
        $alertInfo.innerHTML = '';

        createToolsArea();
    }else {
        $alertInfo.innerHTML = 'Wpisz treść zadania!';
    }
};

const createToolsArea = () => {
    $toolsPanel = document.createElement('div');
    $toolsPanel.classList.add('tools');

    $completeBtn = document.createElement('button');
    $completeBtn.classList.add('complete');
    $completeBtn.innerHTML = '✔️';

    $editBtn = document.createElement('button');
    $editBtn.classList.add('edit')
    $editBtn.innerHTML = 'EDIT';

    $deleteBtn = document.createElement('button');
    $deleteBtn.classList.add('delete');
    $deleteBtn.innerHTML = '❌';

    $toolsPanel.appendChild($completeBtn);
    $toolsPanel.appendChild($editBtn);
    $toolsPanel.appendChild($deleteBtn);

    $newTask.appendChild($toolsPanel);
};

const checkClick = (e) => {

    if (e.target.closest('button').classList.contains('complete')){
        e.target.closest('li').classList.toggle('completed');
        e.target.closest('button').classList.toggle('completed');
    } else if (e.target.closest('button').className == 'edit') {
        editTask();
    } else if (e.target.closest('button').className == 'delete') {

    } else {

    }

};

const editTask = () =>{
    $popup.style.display = 'flex';
}

const closePopup =() => {
    $popup.style.display = 'none';
}

// Funkcja czekająca na załadowanie contentu strony
document.addEventListener('DOMContentLoaded', main);