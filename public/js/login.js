
$("#modal-login-submit").on("click", function(event) {
    event.preventDefault();

    var logUser = {
        email: $("#modal-email").val().trim(),
        pwd: $("#modal-password").val().trim()
    };
    console.log("log on user: ", logUser.email, " created!");

//routing the user back to the homepage
$.post('/signin', logUser)
    .then(function(data) {
        console.log(data)
    });
    redirectToPage();
     alert("Welcome back " + newUser.email + " to Sweet Basil!");
})

// Get the modal
var modal = document.getElementById("modal-login-submit");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//Function to redirect to the main homepage
function redirectToPage() {
    window.location.href = "index.html";
    }