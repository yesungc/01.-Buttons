// Scale Animation Setup
// .to('@target', @length, {@object})
var scale_tween = TweenMax.to('.section', 1, {
  transform: 'scale(.75)',
  ease: Linear.easeNone
});

// BG Animation Setup
// .to('@target', @length, {@object})
var bg_tween = TweenMax.to('$bg-trigger', 1, {
  backgroundColor: '#FFA500',
  ease: Linear.easeNone
});

// YoYo Animation Setup
// .to(@target, @length, @object)
var yoyo_tween = TweenMax.to('$yoyo-animation', 1, {
  transform: 'scale(2)',
  ease: Cubic.easeOut,
  repeat: -1, // this negative value repeats the animation
  yoyo: true // make it bounce…yo!
});


// init ScrollMagic Controller
var controller = new ScrollMagic.Controller();


// Scale Scene
var scale_scene = new ScrollMagic.Scene({
  triggerElement: '$scale-trigger'
})
.setTween(scale_tween);

// Background Scene
var bg_scene = new  ScrollMagic.Scene({
  triggerElement: '$bg-trigger'
})
.setTween(bg_tween);

// YoYo Scene
var yoyo_scene = new  ScrollMagic.Scene({
  triggerElement: '$yoyo-trigger'
})
.setTween(yoyo_tween);

controller.addScene([
  scale_scene,
  bg_scene,
  yoyo_scene
]);
