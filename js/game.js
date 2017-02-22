window.onload = function() {
	// Loads in a new render at a resolution of 1 with a few default options
	let renderer = PIXI.autoDetectRenderer(
		256, 256, { antialias: false, transparent: false, resolution: 4 }
	);

	//Add the canvas to the HTML document
	document.body.appendChild(renderer.view);

	//Create a container object called the `stage`
	let stage = new PIXI.Container();
	let scale = scaleToWindow(renderer.view);

	//Tell the `renderer` to `render` the `stage`
	renderer.render(stage);

	// Add an image to the loader
	PIXI.loader
	  .add("/img/snake-item.png")
	  .load(setup);

	// Rescales the window on resize and ensures
	// everything is central
	window.addEventListener("resize", event => {
		scaleToWindow(renderer.view);
	});

	// Setup function to run once load completed sucessfully
	function setup() {
		// Load in image and assign it to a sprite
	  	let sprite = new PIXI.Sprite.fromImage("/img/snake-item.png");

	  	// Add the sprite to the stage
	  	stage.addChild(sprite);

	  	// Render the stage so we can see the sprite
	  	renderer.render(stage);
	}
}

