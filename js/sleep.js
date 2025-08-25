// sheeps in bed
const sleepsheeps = document.getElementById("sleepingsheep");
// sleep music
const sleepmusic = document.getElementById("sleepmusic");
// background
const starsEnd = document.querySelector(".stars_sleep");
const moonEnd = document.querySelector(".moon_sleep");
// replay button
const againBtn = document.querySelector(".again");

// play sleep music

sleepsheeps.addEventListener("mouseover", () => {
  sleepmusic.volume = 0.2;
  sleepmusic.currentTime = 0;
  sleepmusic.play();
});

// background glow

const glowing = [
  { el: starsEnd, anim: "glow" },
  { el: moonEnd, anim: "glow" },
];
glowing.forEach(({ el, anim }) => {
  el.addEventListener("mouseover", () => {
    el.classList.add(anim);
    el.addEventListener("mouseout", () => el.classList.remove(anim), {
      once: true,
    });
  });
});

// replay event

againBtn.addEventListener("click", () => {
  document.body.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = "index.html";
  }, 500);
});

againBtn.addEventListener("mouseover", () => {
  againBtn.classList.add("grow");
});

againBtn.addEventListener("mouseout", () => {
  againBtn.classList.remove("grow");
});
