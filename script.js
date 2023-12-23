// document.addEventListener("DOMContentLoaded", function () {
//   const audio = document.getElementById("backgroundMusic");
//   const playButton = document.getElementById("playButton");
//   const volumeControl = document.getElementById("volumeControl");

//   // Play audio on play button click
//   playButton.addEventListener("click", function () {
//     if (audio.paused) {
//       audio.play();
//       playButton.textContent = "Pause";
//     } else {
//       audio.pause();
//       playButton.textContent = "Play";
//     }
//   });

//   // Adjust volume on volume control change
//   volumeControl.addEventListener("input", function () {
//     audio.volume = volumeControl.value;
//   });
// });

// // Animation

// document.addEventListener("DOMContentLoaded", function () {
//   const audio = document.getElementById("backgroundMusic");
//   const playButton = document.getElementById("playButton");
//   const volumeControl = document.getElementById("volumeControl");
//   const quoteContainer = document.getElementById("quote2");

//   const words = [
//     "😤😤😤😤",
//     "Dai",
//     "😂😂",
//     "Arun Sunn",
//     "🥳",
//     "Love you 😘",
//     "😍😚😚",
//     "bs podum",
//     "bhgg😤😤",
//     "kutte",
//     "🍑",
//     "Arunnnn",
//     "🥹🥹🥹",
//     "babe",
//     "🙄🙄",
//     "motti",
//     "😁",
//     "babes",
//     "😤😤😤",
//     "thango",
//     "mooditu velai paaru",
//     "😤",
//     "devatha",
//     "chubby cheeks",
//     "😍",
//     "poda dai",
//     "kiss kuda pannule arun nee",
//     "😤😤😤",
//     "maiyuru",
//     "😘",
//     "moodu",
//     "serupu",
//     "🤤",
//     "👉🍑👈",
//     "Arun no 😤",
//     "🥹",
//     "what babes",
//     "madhu👉👈",
//     "wo🥹",
//     "arun chup",
//     "🥺☹️",
//     "think h na",
//     "chi poo",
//   ];

//   let currentIndex = 0;

//   function displayNextWord() {
//     quoteContainer.innerHTML = `"${words[currentIndex]}"`;
//     currentIndex = (currentIndex + 1) % words.length;
//   }

//   setInterval(displayNextWord, 2000); // Change the interval as needed (in milliseconds)
// });

document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("backgroundMusic");
  const playButton = document.getElementById("playButton");
  const volumeControl = document.getElementById("volumeControl");
  const quoteContainer = document.getElementById("quote2");

  const words = [
    "😤😤😤",
    "text",
    "😂😂",
    "text",
    "🥳",
    "text",
    "😍😚😚",
    "text",
    "bhgg😤😤",
    "text",
    "🍑",
    "text",
    "🥹🥹🥹",
    "babe",
    "🙄🙄",
    "text",
    "😁",
    "babes",
    "😤😤😤",
    "thango",
    "mooditu velai paaru",
    "😤",
    "devatha",
    "chubby cheeks",
    "😍",
    "poda dai",
    "text",
    "😤😤😤",
    "maiyuru",
    "text",
    "moodu",
    "serupu",
    "🤤",
    "🍑",
    "name😤",
    "🥹",
    "what text",
    "name👉",
    "wo🥹",
    "name",
    "🥺☹️",
    "think h na",
    "text",
  ];

  let currentIndex = 0;
  let animationStarted = false;

  // Play audio on play button click
  playButton.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
      playButton.textContent = "Pause";
      if (!animationStarted) {
        setInterval(displayNextWord, 2000); // Change the interval as needed (in milliseconds)
        animationStarted = true;
      }
    } else {
      audio.pause();
      playButton.textContent = "Play";
    }
  });

  // Adjust volume on volume control change
  volumeControl.addEventListener("input", function () {
    audio.volume = volumeControl.value;
  });

  function displayNextWord() {
    quoteContainer.innerHTML = `👉${words[currentIndex]}👈`;
    currentIndex = (currentIndex + 1) % words.length;
  }
});
