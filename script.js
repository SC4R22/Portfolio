// Get the modal
var modal = document.getElementById("myModal");

// Get the buttons that open the modal
var btns = document.querySelectorAll(".applyButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks any button, open the modal
btns.forEach(function(btn) {
    btn.onclick = function() {
        modal.style.display = "block";
    };
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Show popup function (optional if you want to do something else on submit)
function showPopup() {
    var name = document.getElementById('nameInput').value;
    alert('Hello, ' + name + '!');
}

