window.addEventListener('DOMContentLoaded', function() {
  const links = document.links;
  const linksLength = links.length;
  for (let i = 0; i < linksLength ; i++) {
    if (links[i].hostname !== window.location.hostname) {
      links[i].target = '_blank';
      links[i].rel = 'noreferrer noopener';
    }
  }
});