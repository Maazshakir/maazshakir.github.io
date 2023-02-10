
//global variable for tracing true index across functions
let Index;

let singleHeading = document.getElementById("single-heading");

function openSettings(){
    getSettingsBar.style.visibility = "visible";
}


function displayAllNotes(){
    for (let index = 0; index < allNotes.length; index++) {
        getAllNotes.innerHTML+='<div id="notes-heading" onclick="openNote('+index+')"><h3>'+ allNotes[index].Heading.substring(0,6) +'</h3></div>';
    }
}

function openNote(index){
    document.getElementById("single-note").style.visibility = "visible";
    getSingleHeading.value = allNotes[index].Heading;
    getSingleText.value = allNotes[index].mainText;
    Index = index;
}

addNote.addEventListener("click",function(){
    if(inputName.value!=""){
        allNotes.push(new notesFormat(inputName.value , ""));
        getAllNotes.innerHTML+='<div id="notes-heading" onclick="openNote('+(allNotes.length-1)+')"><h3>'+ allNotes[(allNotes.length-1)].Heading +'</h3></div>';
    }
    else{
        alert("Give your note a heading");
    }
    
})


deleteNote.addEventListener('click',function(){
    allNotes.splice(Index,1);
    document.getElementById("single-note").style.visibility = "hidden";
    getAllNotes.innerHTML='';
    displayAllNotes();
    console.log(Index);
})

function saveNote(){
    allNotes[Index].Heading = getSingleHeading.value;
    allNotes[Index].mainText = getSingleText.value;
    getAllNotes.innerHTML='';
    displayAllNotes();
}

//initial start
displayAllNotes();
