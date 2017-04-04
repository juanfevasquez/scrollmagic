$(document).ready(function(){

	//Init scrollmagic to tell the browser that scrolling will trigger certain behavior
    var controller = new ScrollMagic.Controller();
    //Scroll animations are always define within a Scene

    //Build a Scene
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#project01 img',
        duration: '100%', //100% this means 100% of the viewport height
        triggerHook: 1  //1 means bottom, 0 top
    })
    .setClassToggle('#project01', 'fade-in') // this class contains the visual changes
    .addIndicators()  //this requires a plugin
    .addTo(controller);

});


















