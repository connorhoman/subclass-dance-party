var makeBlueDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  
}


makeBlueDancer.prototype = Object.create(makeDancer.prototype);
makeBlueDancer.prototype.constructor = makeBlueDancer;

makeBlueDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  
  this.$node.toggle();
  this.$node.addClass('blueDancer');
  this.$node.addClass('dancer');
}

makeBlueDancer.prototype.lineUp = function() {
  this.$node.animate({left: '500px'});
}