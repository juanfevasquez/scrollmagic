$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// ---- PINNING!
	// pin the intro
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#intro',
		triggerHook: 0, //this means top
		duration: '30%' //during the first 30% of the scrolling action nothing happens
	})
	.setPin('#intro', {
		pushFollowers: false //this option disables the following section to slide over the intro.  False will make the intro move upwards.
	})
	.addTo(controller);

	// pinning .project01
	var pinProject01S = new ScrollMagic.Scene({
		triggerElement: '#project01',
		triggerHook: 0.4
	})
	.setPin('#intro', {
		pushFollowers: false
	})
	.addTo(controller);

	// loop through each .project element
	$('.project').each(function(){

		// build a scene
		var ourScene = new ScrollMagic.Scene({
			triggerElement: this.children[0],
			triggerHook: 0.9
		})
		.setClassToggle(this, 'fade-in') // add class to project01
		.addIndicators({
			name: 'fade scene',
			colorTrigger: 'black',
			colorStart: '#75C695',
			colorEnd: 'pink'
		}) // this requires a plugin
		.addTo(controller);

	});

});


















