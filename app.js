const image = document.getElementById("image")
const modal = document.querySelector('.modal')
const closeButton = document.querySelector('.close')
const example = document.getElementById('example-p')
const explanation = document.getElementById('explain-p')
const commands = {
    "h":'moves cursor to the left',
    "j":'moves the cursor down',
    "k":'moves the cursor up',
    "l":'moves the cursor right',
    "w":'moves to the start of the next word',
    "b":'moves to the start of the previous word',
    "e":"moves cursor to the end of the word",
    "0":"moves cursor to the beginning of line",
    "&":"moves cursor to the end of line",
    "^":"moves cursor to the non-blank beginning of line",
    "{":"moves cursor to previous paragraph",
    "}":"moves cursor to next paragraph",

    
}
// javascript for modal
//clicking the image opens the modal
image.addEventListener("click",()=>{
   modal.style.display ="block" 
   explanation.style.display="none"
})

//clicking the x button closes the modal
closeButton.addEventListener('click',()=>{
    modal.style.display = "none"
    example.style.display="inline"
})
//clicking anywhere in the window except modal closes the modal
window.onclick = (e)=>{
    if(e.target == modal){
        modal.style.display ="none"
    }
}
//checking keypresses

document.onkeydown = function(e){
    if( e.key in commands){
        modal.style.display="block"
        example.style.display="none"
        explanation.style.display="inline"
        explanation.innerHTML=`${e.key} ${commands[e.key]} `
    }
}