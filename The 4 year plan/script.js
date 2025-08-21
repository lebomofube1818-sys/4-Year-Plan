// === Footer year ===
document.getElementById("year").textContent = new Date().getFullYear();

// === Music Player ===
const player = document.getElementById("player");
const playlist = document.getElementById("playlist");

if (player && playlist) {
  const tracks = playlist.querySelectorAll("li");

  tracks.forEach(track => {
    track.addEventListener("click", () => {
      player.src = track.getAttribute("data-src");
      player.play();
    });
  });
}

// === Disqus Comments ===
if (document.getElementById("disqus_thread")) {
  var disqus_config = function () {
    this.page.url = window.location.href;
    this.page.identifier = document.title;
  };

  (function () {
    var d = document, s = d.createElement('script');
    s.src = 'https://YOUR_DISQUS_SHORTNAME.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  })();
} 