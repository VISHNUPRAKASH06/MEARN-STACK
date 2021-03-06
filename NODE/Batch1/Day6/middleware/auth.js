var mongoose = require('mongoose');
var userModel = mongoose.model('User');

module.exports.setLoginUser = function(req, res, next) {
  if (req.session && req.session.user){
    req.user = user;
    delete req.user.password; 
    req.session.user = user;
    next();
  } else {
    next();
  }
}

module.exports.authenticate = function(req, res, next) {
  const token = req.header('x-auth-token');
  userModel.findByToken(token).then((result) => {
    if(result) {
      req.user = result;
      req.token = token;
      next();
    }
  })
  .catch((err) => {
    res.send({'data': 'user is not authenticated'});
  });
}

module.exports.authenticateAdmin = function(req, res, next) {
  let user = req.user;
  if (user.role === 'admin') {
    next()
  } else {
    res.send({'data': 'user is not authenticated'});
  }
}


module.exports.checkLogin = function(req,res,next){
	if(!req.user && !req.session.user){
		res.redirect('/user/login/');
	}
	else{
		next();
	}

}