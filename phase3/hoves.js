function other3(elem){
	elem.classList.toggle("new3");
}
function other4(elem){
	elem.classList.toggle("new4");
}
function other10(elem){
	elem.classList.toggle("gif2");
}
function other16(elem){
	elem.classList.toggle("whitepage2");
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
    setTimeout(carousel, 9000);    
}
