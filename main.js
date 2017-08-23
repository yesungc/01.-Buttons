
  //***********************
  // init ScrollMagic Controller
  var controller = new ScrollMagic.Controller();

  // building a scene
  var sceneOne = new ScrollMagic.Scene({
    triggerElement: '#first_button'
  })
  .setClassToggle("first_button fade-in") // add class to first_button

  .addTo(controller);
