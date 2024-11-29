angular.module('generApp', [])
.controller('generateController', function() {
  var G = this;
  G.todos = [
    {text:'learn AngularJS', done:true},
    {text:'build an AngularJS app', done:false}];

  
});
