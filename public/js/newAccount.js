
$("#modal-create-account-submit").on("click", function(event) {
    event.preventDefault();

    var newUser = {
        email: $("#modal-create-account-email").val().trim(),
        pwd: $("#modal-create-account-password").val().trim()
    };

    console.log("New user: ", newUser.email, " created!");

    //routing the user back to the homepage
    $.post('/api/new/user', newUser)
        .then(function(data) {
            console.log(data);
        });

     redirectToPage();
     alert("Welcome " + newUser.email + " to Sweet Basil!");
    
})


// Get the modal
var modal = document.getElementById("modal-create-account-submit");

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
