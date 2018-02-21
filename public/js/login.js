var modal-login-submit = [];

$("#modal-login-submit").on("click", function(event) {
	event.preventDefault();
	var modal-login-submit = $("#modal-login-submit").val().trim();
	login.push(logininfo);
})

//routing the user back to the homepage

router.post('/', function (req, res) {

    User.findOne({
        username: req.body.log_username,
        password: req.body.log_password
    }, function (err, docs) {
        if (docs.length !== 0) {
            console.log("user exists");
            res.redirect('/index.html'); // main page url
        }
        else {
            console.log("no exist");
            res.redirect('/login');
        }
    });

});

// Get the modal
var modal = document.getElementById("modal-login-submit");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$(function () {

    function redirectToPage() {
        var url = window.location.href;
        window.location(url + "/index.html");
    }
});