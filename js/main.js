// Test that Pixi is working
console.log(PIXI);

let renderer = PIXI.autoDetectRenderer(
	256, 256,
	{antialias: false, transparent: false, resolution: 1}
);
document.body.appendChild(renderer.view);

let stage = new PIXI.Container();
let scale = scaleToWindow(renderer.view);

renderer.render(stage);

window.addEventListener("resize", event => {
	scaleToWindow(renderer.view);
});

