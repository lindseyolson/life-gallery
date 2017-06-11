var myApp = angular.module('myApp', []);

myApp.controller('GalleryController', function(){
  var vm = this;
  vm.photoArr = [];

  function Photo(photo, description) {
    this.photo = photo;
    this.description = description;
  }

  var rose = new Photo ('../images/rose.jpg', 'This pic is of a rose');
  var blue = new Photo ('../images/blue.jpg', 'This pic is of a blue flower');
  var blue2 = new Photo ('../images/blue.jpg', 'This pic is of a blue flower');
  var blue3 = new Photo ('../images/blue.jpg', 'This pic is of a blue flower');
  var blue4 = new Photo ('../images/blue.jpg', 'This pic is of a blue flower');
  var blue5 = new Photo ('../images/blue.jpg', 'This pic is of a blue flower');
  vm.photoArr.push(rose, blue, blue2, blue3, blue4, blue5);

});
