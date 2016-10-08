var wizard = (function () {
  this.init = function () {
    console.log('The wizard is back');
  };

  this.fireball = function () {
    console.log('Preparing fireball...');
    alert('Launching fireball');
  };

  this.romer = function () {
  	alert('Soy Pepe');
  };

  this.status = function () {
  	return 'OK';
  };

  return this.init();
})();
