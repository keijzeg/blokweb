// JavaScript Document
var latestButton = document.querySelector('#latestknop') ;
var matchesButton = document.querySelector('#matchesknop');


// eventHandler functies
function weergeefLatest(  ) {
	document.querySelector('#latestknop').classList.add('active');
	document.querySelector('#matchesknop').classList.remove('active');
}
function weergeefMatches(  ) {
	document.querySelector('#matchesknop').classList.add('active');
	document.querySelector('#latestknop').classList.remove('active');
}


// eventListeners
latestButton.addEventListener('click', weergeefLatest);
matchesButton.addEventListener('click', weergeefMatches);