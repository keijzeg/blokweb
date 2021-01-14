// JavaScript Document
var latestButton = document.querySelector('#latestknop') ;
var matchesButton = document.querySelector('#matchesknop');
var buttonSection = document.querySelector('#buttons');

var news = document.querySelector('#news');
var matches = document.querySelector('#matches');

const mediaQuery = window.matchMedia('(min-width: 700px)')



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

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    console.log('Media Query Matched!');
    buttonSection.classList.add('hidden');
    news.classList.remove('hidden');
    matches.classList.remove('hidden');
  }
  else {
    buttonSection.classList.remove('hidden');
    matches.classList.add('hidden')
      
  }
}


// eventListeners
latestButton.addEventListener('click', weergeefLatest);
matchesButton.addEventListener('click', weergeefMatches);
mediaQuery.addListener(handleTabletChange)

handleTabletChange(mediaQuery)


// informatie over javascript media queries komt van https://css-tricks.com/css-media-queries/ //