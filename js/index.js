var $$ = Dom7;

var app  = new Framework7({
  root: '#app',
});

var mainView = app.views.create('.view-main', {
  url: '/',
  stackPages: true,
  routes: [
    {
      path: '/',
      pageName: 'casa'
    },
    {
      path: '/dos/',
      pageName: 'dos'
    },
  ],
});
