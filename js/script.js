// Get the overlay
var overlay = document.getElementById("menuOverlay");

// Get the button that opens the overlay
var btn = document.getElementById("hamburger-button");

// Get the button that closes the overlay
var close = document.querySelector(".closebtn");

// When the user clicks the button, open the overlay 
btn.onclick = function() {
    overlay.style.display = "block";
}

// When the user clicks on (x), close the overlay
close.onclick = function() {
    overlay.style.display = "none";
}

// Close the overlay when the user clicks anywhere outside of it
window.onclick = function(event) {
    if (event.target == overlay) {
        overlay.style.display = "none";
    }
}
