var wizard = (function () {
  this.init = function () {
    console.log('The wizard is back');
  };

  this.fireball = function () {
    console.log('Preparing fireball...');
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
