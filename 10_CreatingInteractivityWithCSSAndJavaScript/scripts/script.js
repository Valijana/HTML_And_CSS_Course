/*
Student Name:Valmira 
File Name:script.js
Date:14.04.2022
*/
/*
    Student Name: Your Name
    File Name: script.js
    Data: Today's Date
*/

// Global variables
var videoSource = document.getElementById("vid-src");
var video = document.getElementById("example");
var descriptionSource = document.getElementById("despsrc");
video.style.width = "500px";
video.style.height = "300px";

// Function to display burpees video
function burpees() {
   videoSource.src = "./video/burpees.mp4";
   video.style.display = "block";
   video.load();
}

// Function to display plank video
function plank() {
    videoSource.src = "./video/plank.mp4";
    video.style.display = "block";
    video.load();
 }

 // Function to display climbers video
function climbers() {
    videoSource.src = "./video/climbers.mp4";
    video.style.display = "block";
    video.load();
 }
//Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("ffc-logo");
    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        logo.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
    
    //Function to display a promo code
    function discount() {
        var promo = document.getElementById("special");
        promo.firstChild.nodeValue = "Promo Code:D25START";
        promo.style.color = "#ff0000";
        promo.style.fontSize = "2em";
    }
}