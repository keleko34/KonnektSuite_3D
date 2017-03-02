requireLocal(['App/Window','./Main'],function(CreateWindow){
  CreateWindow().call(require('nw.gui'),document.getElementById('Window'));
});
