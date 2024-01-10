<script>
    // reddit -> bandcamp
    let redditIcon = document.getElementsByClassName('fa-reddit')[0];
    let redditButton = document.querySelector('[title="Reddit"]');
    redditIcon.classList.remove('fa-reddit')
    redditIcon.classList.add('fa-bandcamp')
    redditButton.ariaLabel = 'Bandcamp';
    redditButton.title = 'Bandcamp';
</script>