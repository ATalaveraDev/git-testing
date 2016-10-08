var wizard = (function () {
  this.init = function () {
    console.log('Mel is the best');
  };

  this.fireball = function () {
    console.log('Launching fireball');
  };

  this.romero = function () {
  	var pepe = 'Soy Pepe';
  	alert(pepe);
  };

  this.status = function () {
  	return 'KO';
  };

  return this.init();
})();
