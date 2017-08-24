// init ScrollMagic Controller
var controller = new ScrollMagic.Controller();


// Scale Scene
var scale_scene = new ScrollMagic.Scene({
  triggerElement: '#scale-trigger'
})
.setTween(scale_tween);


controller.addScene([
  scale_scene,
]);
