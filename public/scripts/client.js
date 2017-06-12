var myApp = angular.module('myApp', []);

myApp.controller('GalleryController', function(){
  var vm = this;
  vm.photoArr = [];
  vm.showComments = false;

  // var vm.commentsArr[index] = vm.photoArr[index].commentsArr

  function Photo(url, description) {
    this.url = url;
    this.description = description;
    this.loves = 0;
    this.commentsArr = [];
  }

  var co = new Photo ('../images/IMG_4130.jpg', 'My husbands family has a ranch in Colorado with wild horses! I always love visiting them when we go.');
  var kai = new Photo ('../images/IMG_0241.jpg', 'My boy, Kai. He is a Tibetan Terrier and approaching 13 years old!');
  var co2 = new Photo ('../images/IMG_2723.jpg', 'My husband, Caleb, in the mountains of Colorado.');
  var fl = new Photo ('../images/IMG_4261.jpg', 'My first salt water fish catch! It was a black sheep and I ate it that night.');
  var paris = new Photo ('../images/paris.jpg', 'My amazing Mother and I on our Europe trip together.');
  var poppy = new Photo ('../images/IMG_3098.jpg', 'Poppies, one of my favorite spring flowers.');
  vm.photoArr.push(co, kai, co2, fl, paris, poppy);

  vm.loves = function(index){
    vm.photoArr[index].loves++;
  } // end loves

  vm.addComment = function(comment, index) {
    vm.photoArr[index].commentsArr.push(comment);
    vm.comment='';
    console.log(vm.photoArr[index].commentsArr);
  } // end addComment

  vm.viewComments = function (index){
    console.log(index);
    vm.photoArr[index].commentsArr = !vm.photoArr[index].commentsArr
    // vm.showComments = !vm.showComments;
  } // end viewComments

});
