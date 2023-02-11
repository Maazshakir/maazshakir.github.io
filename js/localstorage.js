function deleteNoteFromStorage() {
    localStorage.clear();
    for (let index = 0; index < allNotes.length; index++) {
        updateNote(index, allNotes[index].Heading+":"+allNotes[index].mainText)
    }
}

function updateNote(item, data) {
    localStorage.setItem(item, data);
}

function retrieveDataFromLocalStorage() {
    let localString;
    for (let index = 0; index < localStorage.length; index++) {
        localString = localStorage[index].split(':');
        allNotes.push(new notesFormat(localString[0], localString[1]));
    }
}
/*initial run */
retrieveDataFromLocalStorage();
