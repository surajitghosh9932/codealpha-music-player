const audio = document.getElementById('audio');
const playPause = document.getElementById('play-pause');
const stop = document.getElementById('stop');
const seekBar = document.getElementById('seek-bar');
const volumeBar = document.getElementById('volume-bar');
const songTitle = document.getElementById('song-title');
const songArtist = document.getElementById('song-artist');

playPause.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPause.textContent = 'Pause';
  } else {
    audio.pause();
    playPause.textContent = 'Play';
  }
});

stop.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
  playPause.textContent = 'Play';
});

seekBar.addEventListener('input', () => {
  audio.currentTime = seekBar.value * audio.duration / 100;
});

volumeBar.addEventListener('input', () => {
  audio.volume = volumeBar.value / 100;
});
audio.addEventListener('timeupdate', () => {
    seekBar.value = (audio.currentTime / audio.duration) * 100;
  });
  
  // Example song info
  songTitle.textContent = 'Example Song';
  songArtist.textContent = 'Example Artist';
  