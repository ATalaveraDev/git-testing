function test() {
	alert('I\'m a new file');
};

var monster = (function () {
  this.init = function () {
    console.log('The creature has born');
  };
})();

