module.exports.routes = {

  // HTML Views
  '/': { view: 'homepage' },
  '/register': { view: 'register'},
  '/cgu': { view: 'cgu' },
  '/regles': { view: 'regles' },
   '/newsletter': { view: 'newsletter' },
   '/staff': { view: 'staff' },
   '/faq': { view: 'faq' },


  'get /login': { view: 'user/login' },
  'get /signup': { view: 'user/signup' },
  '/welcome': { view: 'user/welcome' },

  // Endpoints
  'post /login': 'UserController.login',
  'post /signup': 'UserController.signup',
  '/logout': 'UserController.logout',
};
