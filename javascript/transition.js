Barba.Pjax.start();

var FadeTransition = Barba.BaseTransition.extend({
  start: function() {

  // As soon the loading is finished and the old page is faded out, let's fade the new page
  Promise
  .all([this.newContainerLoading, this.fadeOut()])
  .then(this.fadeIn.bind(this));
  },
  fadeOut: function() {
    this.oldContainer
  },

  fadeIn: function() {
    this.newContainer.classList.add("slide-in");
    const that = this;
    this.newContainer.addEventListener("animationend", function(){
      that.newContainer.classList.remove("slide-in");
      that.done();
    });
  }
});
/**
* Next step, you have to tell Barba to use the new Transition
*/
Barba.Pjax.getTransition = function() {

  return FadeTransition;
};