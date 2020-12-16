// JavaScript Document
var latestButton = document.querySelector('#latestknop') ;
var matchesButton = document.querySelector('#matchesknop');

var news = document.querySelector('#news');
var matches = document.querySelector('#matches');


// eventHandler functies
function weergeefLatest(  ) {
	document.querySelector('#latestknop').classList.add('active');
	document.querySelector('#matchesknop').classList.remove('active');
    document.querySelector('#news').classList.remove('hidden');
    document.querySelector('#matches').classList.add('hidden');
}
function weergeefMatches(  ) {
	document.querySelector('#matchesknop').classList.add('active');
	document.querySelector('#latestknop').classList.remove('active');
    document.querySelector('#matches').classList.remove('hidden');
    document.querySelector('#news').classList.add('hidden');
}


// eventListeners
latestButton.addEventListener('click', weergeefLatest);
matchesButton.addEventListener('click', weergeefMatches);