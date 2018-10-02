window.addEventListener("deviceorientation", handleOrientation, true);

const background = document.querySelector("#background");

function handleOrientation(event) {
	var absolute = event.absolute;
	var alpha    = event.alpha;
	var beta     = event.beta;
	var gamma    = event.gamma;
	
	console.log("a: " + alpha)
	console.log("b: " + beta)
	console.log("g: " + gamma)
}