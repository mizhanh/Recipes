module.exports = function(app, passport) {
 
    app.post('/signup', passport.authenticate('local-signup', {
    	successRedirect: '/',
    	failureRedirect: '/'
    	}
    ));
	
	app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/',
        failureRedirect: '/'
    	}
	));
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/');
    }
}