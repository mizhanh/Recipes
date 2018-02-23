var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, user) {
	var User = user;
    var LocalStrategy = require('passport-local').Strategy;

	//serialize
	passport.serializeUser(function(user, done) {
	    done(null, user.id);
	});

	// deserialize user 
	passport.deserializeUser(function(id, done) {
	    User.findById(id).then(function(user) {
	        if (user) {
	            done(null, user.get());
	        } else {
	            done(user.errors, null);
	        }
	    });
	});

	// Local signup
	passport.use('local-signup', new LocalStrategy(
	 	{
	        usernameField: 'email',
	        passwordField: 'pwd',
	        passReqToCallback: true // allows us to pass back the entire request to the callback
	 	},
	 	function(req, email, pwd, done) {
            var generateHash = function(pwd) {
 				return bCrypt.hashSync(pwd, bCrypt.genSaltSync(8), null);	 		
	 		};
	 		User.findOne({
	 			where: {
	 				email: email
	 			}
	 		}).then(function(user) {
	 			if (user) {
	 				return done(null, false, {
	 					message: 'That email is already taken'
	 				});
	 			} else {
	 				var userPassword = generateHash(pwd);
	 				var data =
	 					{
	 						email: email,
	 						pwd: userPassword
	 					};
	 				User.create(data).then(function(newUser, created) {
	 					if (!newUser) {
	 						return done(null, false);
	 					}
	 					if (newUser) {
	 						return done(null, newUser);
	 					}
	 				});
	 			}
	 		});
	 	}
	));
	//LOCAL SIGNIN
	passport.use('local-signin', new LocalStrategy(
	 	{
	 		// by default, local strategy uses username and password, we will override with email
	        usernameField: 'email',
	        passwordField: 'pwd',
	        passReqToCallback: true // allows us to pass back the entire request to the callback
	    },
	    function(req, email, pwd, done) {
	        var User = user;
	        var isValidPassword = function(userpass, pwd) {
	            return bCrypt.compareSync(pwd, userpass);
	        }
	        User.findOne({
	            where: {
	                email: email
	            }
	        }).then(function(user) {
	            if (!user) {
	                return done(null, false, {
	                    message: 'Email does not exist'
	                });
	            }
	            if (!isValidPassword(user.pwd, pwd)) {
	                return done(null, false, {
	                    message: 'Incorrect password.'
	                });
	            }
	            var userinfo = user.get();
	            return done(null, userinfo);
	        }).catch(function(err) {
	            console.log("Error:", err);
	            return done(null, false, {
	                message: 'Something went wrong with your Signin'
	            });
	        });
	    }
	));
}