var wizard = (function () {
  this.init = function () {
    console.log('Mel is the best');
  };

  this.fireball = function () {
    alert('Launching fireball');
  };

  this.romer = function () {
  	var pepe = 'Soy Pepe';
  	alert(pepe);
  };

  this.status = function () {
  	return 'OK';
  };

  return this.init();
})();
