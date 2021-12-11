const textBox= document.getElementById("textBox") ;
const addItemButton=document.getElementById("addItemButton");
const removeButton=document.getElementById("removeButton");
const clearButton = document.getElementById("clearButton");
const content = document.getElementById("content");


function addItem(){
    const newItem = document.createElement("p");
    newItem.innerText = textBox.value;
    newItem.className="para"
    content.appendChild(newItem);
    textBox.value = "";
}    

function addToLocal(){
    let key=localStorage.length+1;
    let note = textBox.value
    localStorage.setItem("note "+key, note);
    addItem();

}

addItemButton.addEventListener("click", addToLocal)

// get from local and show in browser
function getFromLocal(){ 
    for (i=0; i <=localStorage.length; i=i+1){
        let key = i;
        let item = localStorage.getItem("note " +key.toString());
        const newItem = document.createElement("p");
        newItem.innerText = item;
        newItem.className="para"
        content.appendChild(newItem);
    }
    }

getFromLocal();  

function removeLastItem(){
    const notes=document.getElementsByClassName("para");
    if (notes.length > 0){
        const lastPos = notes.length-1;
        content.removeChild(notes[lastPos]);
    }
}

function removeFromLocal(){
    let key=localStorage.length;
    if (localStorage.length >0){
        localStorage.removeItem("note "+key)
    }
    removeLastItem();
}

removeButton.addEventListener("click", removeFromLocal)

function clearAll(){
    const notes=document.getElementsByClassName("para")
    while (notes.length > 0){
        const lastPos = notes.length-1;
        content.removeChild(notes[lastPos]); 
    }
}

function clearLocal(){
    if (localStorage.length >0){
        localStorage.clear();
    }
    clearAll();
}

clearButton.addEventListener("click", clearLocal);
