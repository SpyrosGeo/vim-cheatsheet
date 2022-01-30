const image = document.getElementById("image")
const modal = document.querySelector('.modal')
const closeButton = document.querySelector('.close')
// javascript for modal
//clicking the image opens the modal
image.addEventListener("click",()=>{
   modal.style.display ="block" 
})

//clicking the x button closes the modal
closeButton.addEventListener('click',()=>{
    modal.style.display = "none"
})
//clicking anywhere in the window except modal closes the modal
window.onclick = (e)=>{
    if(e.target == modal){
        modal.style.display ="none"
    }
}