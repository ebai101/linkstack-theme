// convert reddit icon to bandcamp
let redditIcon = document.getElementsByClassName('fa-reddit')[0];
let redditButton = document.querySelector('[title="Reddit"]');
redditIcon.classList.remove('fa-reddit');
redditIcon.classList.add('fa-bandcamp');
redditButton.ariaLabel = 'Bandcamp';
redditButton.title = 'Bandcamp';

// convert snapchat icon to spotify
let snapchatIcon = document.getElementsByClassName('fa-snapchat')[0];
let snapchatButton = document.querySelector('[title="Snapchat"]');
snapchatIcon.classList.remove('fa-snapchat');
snapchatIcon.classList.add('fa-spotify');
snapchatButton.ariaLabel = 'Spotify';
snapchatButton.title = 'Spotify';

// youtube video embed hack
let videoLink = document.evaluate('//a[text()="!video-embed"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
if (videoLink !== null) {
    let videoElement = videoLink.parentElement;
    let videoUrl = videoLink.href.match(/watch\?v=(.+)/)[1];
    videoElement.innerHTML = '<div id="player-container"><iframe id="player" frameborder="0" ></iframe></div>'
    document.querySelector("#player").src = `https://www.youtube.com/embed/${videoUrl}`
}