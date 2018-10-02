window.addEventListener("deviceorientation", handleOrientation, true);

const background = document.querySelector("#background");
var isFirstIter = true;
var alphaOffset = 0,
	betaOffset = 0,
	gammaOffset = 0;

function handleOrientation(event) {
	var absolute = event.absolute;
	var alpha    = event.alpha;
	var beta     = event.beta;
	var gamma    = event.gamma;

	if(alpha && beta && gamma) {
		if(isFirstIter) {
			alphaOffset = alpha;
			betaOffset = beta;
			gammaOffset = gamma;
			console.log("Recieving orientation data");
			isFirstIter = false;
		}
		try {
			var newTop = ((window.innerHeight / 2) - 155) - (((beta - betaOffset) / 90) * (window.innerHeight / 2));
			background.style.top = newTop;
			var newLeft = ((window.innerWidth / 2) - 400) - (((gamma - gammaOffset) / 90) * (window.innerWidth / 2));
			background.style.left = newLeft;
			background.style.transform = "rotate(" + (alpha - alphaOffset) + "deg)";
		} catch (err) {
			console.log("Error", e.stack);
			console.log("Error", e.name);
			console.log("Error", e.message);
		}
	} else {
		console.log("No orientation data");
	}
}

console.log("v 0.1.14")