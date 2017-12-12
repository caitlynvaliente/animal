
function other(elem){
	elem.classList.toggle("new1");
}
function other2(elem){
	elem.classList.toggle("new2");
}
function other8(elem){
	elem.classList.toggle("gif");
}
function other9(elem){
	elem.classList.toggle("whitepage");
}
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 3000);    
}
