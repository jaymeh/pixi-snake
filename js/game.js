window.onload = function() {
	let renderer = PIXI.autoDetectRenderer(256, 256, { antialias: false, transparent: false, resolution: 1 });

	//Add the canvas to the HTML document
	document.body.appendChild(renderer.view);

	//Create a container object called the `stage`
	let stage = new PIXI.Container();

	//Tell the `renderer` to `render` the `stage`
	renderer.render(stage);

	PIXI.loader
	  .add("/img/snake-item.png")
	  .load(setup);

	console.log(PIXI.loader);

	function setup() {
	  let sprite = new PIXI.Sprite.fromImage("/img/snake-item.png");

	  stage.addChild(sprite);

	  renderer.render(stage);

	  console.log(sprite);
	}
}