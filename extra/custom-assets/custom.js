// convert reddit icon to bandcamp
let redditIcon = document.getElementsByClassName('fa-reddit')[0];
let redditButton = document.querySelector('[title="Reddit"]');
if (redditIcon !== null && redditButton !== null) {
    redditIcon.classList.remove('fa-reddit');
    redditIcon.classList.add('fa-bandcamp');
    redditButton.ariaLabel = 'Bandcamp';
    redditButton.title = 'Bandcamp';
}

// convert snapchat icon to spotify
let snapchatIcon = document.getElementsByClassName('fa-snapchat')[0];
let snapchatButton = document.querySelector('[title="Snapchat"]');
if (snapchatIcon !== null && snapchatButton !== null) {
    snapchatIcon.classList.remove('fa-snapchat');
    snapchatIcon.classList.add('fa-spotify');
    snapchatButton.ariaLabel = 'Spotify';
    snapchatButton.title = 'Spotify';
}

// youtube video embed hack
let videoLink = document.evaluate('//a[text()="!video-embed"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
if (videoLink !== null) {
    let videoElement = videoLink.parentElement;
    let videoUrl = videoLink.href.match(/watch\?v=(.+)/)[1];
    videoElement.style.paddingBottom = "40px";
    videoElement.style.marginLeft = "10px";
    videoElement.style.marginRight = "10px";
    videoElement.innerHTML = '<div id="youtube-player-container"><iframe id="youtube-player" frameborder="0" ></iframe></div>'
    document.querySelector("#youtube-player").src = `https://www.youtube.com/embed/${videoUrl}`
}

// spotify embed hack
let spotifyLink = document.evaluate('//a[text()="!spotify-embed"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
if (spotifyLink !== null) {
    let spotifyElement = spotifyLink.parentElement;
    let spotifyUrl = spotifyLink.href;
    spotifyElement.style.paddingBottom = "40px";
    spotifyElement.style.marginLeft = "10px";
    spotifyElement.style.marginRight = "10px";
    spotifyElement.innerHTML = '<div id="spotify-player-container"><iframe id="spotify-player" style="border-radius:12px" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>'
    document.querySelector("#spotify-player").src = spotifyUrl
}

