//getting the two vars that will allow the clicking
var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

//establishing the function to open an image when clicked on
function openFullImg(pic) {
    fullImgBox.style.display = "flex";
    fullImg.src = pic; //this is so the image changes depending what you click on
}

function closeFullImg() {
    fullImgBox.style.display = "none";
}