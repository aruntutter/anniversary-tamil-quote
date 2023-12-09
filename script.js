document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("backgroundMusic");
  const playButton = document.getElementById("playButton");
  const volumeControl = document.getElementById("volumeControl");

  // Play audio on play button click
  playButton.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
      playButton.textContent = "Pause";
    } else {
      audio.pause();
      playButton.textContent = "Play";
    }
  });

  // Adjust volume on volume control change
  volumeControl.addEventListener("input", function () {
    audio.volume = volumeControl.value;
  });
});
