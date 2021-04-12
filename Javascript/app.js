const notesArray = []

function defineTextAreaSection() {
    html = `
    <div id="note-area">
        <div id="note" contenteditable="true"></div>
        <button onclick="saveNote()">Save</button>
        <button onclick="cleanUp()">Delete</button>
    </div>
    `
    return html
}

function createtextarea() {
    const div = document.querySelector('#maintext')
    div.insertAdjacentHTML('beforeend', defineTextAreaSection())
    setCursor()
}

function setCursor() {
    const div = document.querySelector('#note')
    div.focus()
}

function saveNote() {
    const div = document.querySelector('#note')
    const title = div.firstChild.textcontent
    const body = convertDivsToString()
    notesArray.push(createNote(title, body))
    cleanUp()
}

function createNote(title, body) {
    return { title, body }
}

function convertDivsToString() {
    let str = ""
    const divs = [...document.querySelectorAll('[contenteditable] > div:not(:first-child)')]
    for (const i of divs) {
        str += `${i.textContent}\n`
    }
    return str
}

function cleanUp() {
    const div = document.querySelector('#note-area')
    div.remove()
}

function toggle_dark_mode() {
    var app = document.getElementsByTagName("body")[0];
    if (localStorage.darkMode == "dark") {
        localStorage.darkMode = "light";
        app.setAttribute("dark-mode", "light");
    } else {
        localStorage.darkMode = "dark";
        app.setAttribute("dark-mode", "dark");
    }
}





function savetextarea() {
    const note = document.querySelector('textarea').value
    console.log(note)
    const notearr = note.split('\n\n')
    notesArray.push(createNoteObject(notearr))
    document.querySelector('textarea').value = ""
    console.log(notesArray)
}

function createNoteObject(arr) {
    return newObject = { title: arr[0], body: arr[1] }
}