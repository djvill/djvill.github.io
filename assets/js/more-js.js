//Code to run at page load
window.onload = function() {
	
	//Make footer links open in new tab
	var footA = document.querySelectorAll("footer a");
	footA.forEach(a => a.target = "_blank");
};
