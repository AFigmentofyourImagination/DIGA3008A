//console testing
console.log("good evening");

//get button
let backtotopbutton = document.getElementById("bttBtn");

//when user scrolls down 20 px from the top of doc, show button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backtotopbutton.style.display = "block";
    }
    else {
        backtotopbutton.style.display = "none";
    }
}

//when user clicks on btn, scroll to top of document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/*function previous() {
    window.history.back();
}*/

//navbar
var menu = document.getElementById("menu");

//function to close navbar
function closeMenu(){
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

//function to open navbar
function openMenu(){
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}