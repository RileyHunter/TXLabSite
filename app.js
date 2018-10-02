window.addEventListener("deviceorientation", handleOrientation, true);

const background = document.querySelector("#background");
var isFirstIter = true;

function handleOrientation(event) {
	var absolute = event.absolute;
	var alpha    = event.alpha;
	var beta     = event.beta;
	var gamma    = event.gamma;

	if(alpha && beta && gamma) {
		console.log("Recieving orientation data");
		if(isFirstIter) {
			var alphaOffset = alpha;
			var betaOffset = beta;
			var gammaOffset = gamma;
			isFirstIter = false;
		}
		try {
		background.style.transform = "rotate(" + (alpha - alphaOffset) + "deg)";
		var newTop = ((window.innerHeight / 2) - 155) - ((beta / 90) * (window.innerHeight / 2));
		background.style.top = "newTop";
		} catch (err) {
			console.log("Error", e.stack);
			console.log("Error", e.name);
			console.log("Error", e.message);
		}
	} else {
		console.log("No orientation data");
	}
}

console.log("v 0.1.5")