//your JS code here. If required.
let openBtn=document.querySelector("#openModal")
let modal=document.querySelector(".modal")
let closeBtn=document.querySelector(".close-modal")
openBtn.addEventListener("click",display)
function display(){
	modal.style.display="block";
}
closeBtn.addEventListener("click",close)
function close(e){
	modal.style.display="none";
}
modal.addEventListener("click",close2)
function close2(e){
	if (e.target === "modal") {
    modal.style.display = "none";
  }
}