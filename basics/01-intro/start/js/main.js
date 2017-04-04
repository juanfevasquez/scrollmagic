$(document).ready(function(){

	//Init scrollmagic to tell the browser that scrolling will trigger certain behavior
    var controller = new ScrollMagic.Controller();
    //Scroll animations are always define within a Scene

    //Behaviour we want: if a user scrolls back up again, we don't want the fade-in to happen again.  We want this animation to happen only once.
    //For this we have an option called reverse: false

    //Build a Scene
    /*
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#project01 img',
        triggerHook: 0.9, //1 means bottom, 0 top
        reverse: false  //this is by default set to true
    })
    .setClassToggle('#project01', 'fade-in') // this class contains the visual changes
    .addIndicators({
        name: 'fade scene 1'
    })  //this requires a plugin
    .addTo(controller);
    */

    // ------ UGLY CODE STARTS HERE ------
    //Creating a new scene for a new animated section of the site: THE HARD WAY: copying and pasting
    /*

    var ourScene2 = new ScrollMagic.Scene({
        triggerElement: '#project02 img',
        triggerHook: 0.9, //1 means bottom, 0 top
        reverse: false  //this is by default set to true
    })
    .setClassToggle('#project02', 'fade-in') // this class contains the visual changes
    .addIndicators({
        name: 'fade scene 2'
    })  //this requires a plugin
    .addTo(controller);

    var ourScene3 = new ScrollMagic.Scene({
        triggerElement: '#project03 img',
        triggerHook: 0.9, //1 means bottom, 0 top
        reverse: false  //this is by default set to true
    })
    .setClassToggle('#project03', 'fade-in') // this class contains the visual changes
    .addIndicators({
        name: 'fade scene 3'
    })  //this requires a plugin
    .addTo(controller);

    */


    // ------ BETTER CODE STARTS HERE -------
    // loop through each .project element 

    $('.project').each(function() {
        var ourScene = new ScrollMagic.Scene({
            triggerElement: this.children[0], //we don't want the whole section to be the trigger point, we want the image, so we dig into the child elements, in this case the 0 index is the image
            triggerHook: 0.9, //1 means bottom, 0 top
            reverse: false  //this is by default set to true
        })
        .setClassToggle(this, 'fade-in') // this class contains the visual changes
        .addIndicators({
            name: 'fade scene ' + this
        })  //this requires a plugin
        .addTo(controller);
        });
});


















