// start js begint hier

document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("StartBtn");
  const startScreen = document.getElementById("startscreen");
  const gameSscreen = document.getElementById("game");

  // start game
  startBtn.addEventListener("click", () => {
    document.body.classList.add("fade-out");

    setTimeout(() => {
      document.body.classList.remove("fade-out");
      toggleVisability(startScreen);
      toggleVisability(gameSscreen);
    }, 500);
  });

  // visibility start en gamescreen
  function toggleVisability(element) {
    if (element.classList.contains("visible")) {
      element.classList.add("hidden");
      element.classList.remove("visible");
    } else {
      element.classList.add("visible");
      element.classList.remove("hidden");
    }
  }

  // button effect start
  startBtn.addEventListener("mouseover", () => {
    startBtn.classList.add("grow");
  });
  startBtn.addEventListener("mouseout", () => {
    startBtn.classList.remove("grow");
  });
  startBtn.addEventListener("click", () => {
    music.volume = 0.05;
    music.currentTime = 0;
    music.play();
  });

  //Game js start hier

  // buttons
  const button = document.getElementById("SpringBtn");
  const suprise = document.getElementById("SupriseBtn");
  // sheeps
  const sheep = document.getElementById("sheep");
  const sheep2 = document.getElementById("sheep2");
  const sheep3 = document.getElementById("sheep3");
  const sheep4 = document.getElementById("sheep4");
  const sheep5 = document.getElementById("sheep5");
  const sheep6 = document.getElementById("sheep6");
  // counter
  const counter = document.getElementById("counter");
  // audio
  const sheepAudio = document.getElementById("sheepAudio");
  const sheepAudio2 = document.getElementById("sheepAudio2");
  const sheepAudio3 = document.getElementById("sheepAudio3");
  const nightSound = document.getElementById("nightsound");
  const partyaudio = document.getElementById("party");
  const music = document.getElementById("background_music");
  const birdAudio1 = document.getElementById("birdAudio1");
  const birdAudio2 = document.getElementById("birdAudio2");
  // achtergrond
  const cloud1 = document.querySelector(".cloud1");
  const cloud2 = document.querySelector(".cloud2");
  const cloud3 = document.querySelector(".cloud3");
  const moon = document.querySelector(".moon");
  const stars = document.querySelector(".stars");

  const tekst2 = document.querySelector(".tekst2");
  const birds = document.querySelector(".birds");

  const grass = document.querySelector(".grass");

  let count = 0;
  let randomTrigger = Math.floor(Math.random() * 45) + 1;

  // button effect

  button.addEventListener("mouseover", () => {
    button.classList.add("grow");
  });
  button.addEventListener("mouseout", () => {
    button.classList.remove("grow");
  });
  suprise.addEventListener("mouseover", () => {
    suprise.classList.add("grow");
  });
  suprise.addEventListener("mouseout", () => {
    suprise.classList.remove("grow");
  });

  // spring animatie

  const jumpSheep = [
    { sh: sheep, anim: "jump", audio: sheepAudio },
    { sh: sheep2, anim: "jump", audio: sheepAudio },
    { sh: sheep3, anim: "jump2", audio: sheepAudio3 },
    { sh: sheep4, anim: "jump2", audio: sheepAudio3 },
    { sh: sheep5, anim: "jump3", audio: sheepAudio2 },
    { sh: sheep6, anim: "jump3", audio: sheepAudio2 },
  ];
  button.addEventListener("click", () => {
    jumpSheep.forEach(({ sh, anim }) => {
      sh.classList.add(anim);
      sh.addEventListener("animationend", () => sh.classList.remove(anim), {
        once: true,
      });
    });

    // aantal schapen teller
    count = count + 1;
    counter.textContent = count;

    // schaap audio

    jumpSheep.forEach(({ sh, audio }) => {
      sh.addEventListener("mouseover", () => {
        audio.volume = 0.2;
        audio.currentTime = 0;
        audio.play().catch(() => {});
      });
      sh.addEventListener("mouseout", () => {
        audio.pause();
        audio.currentTime = 0;
      });
    });

    //dag en nacht

    if (count % 5 === 0) {
      const isdag =
        document.body.style.backgroundColor === "rgb(179, 229, 252)" ||
        document.body.style.backgroundColor === "";

      // nacht

      if (isdag) {
        document.body.style.backgroundColor = "#05446C";
        document.body.style.color = "white";
        [cloud1, cloud2, cloud3].forEach((c) => (c.style.opacity = "0"));
        moon.style.opacity = "1";
        stars.style.opacity = "1";

        [sheep, sheep3, sheep5].forEach((s) => (s.style.opacity = "0"));
        [sheep2, sheep4, sheep6].forEach((s) => (s.style.opacity = "1"));

        music.pause();
        music.currentTime = 0;
        nightSound.volume = 0.2;
        nightSound.currentTime = 0;
        nightSound.play();
      }

      // dag
      else {
        document.body.style.backgroundColor = "#b3e5fc";
        document.body.style.color = "#332e2e";

        [cloud1, cloud2, cloud3].forEach((c) => (c.style.opacity = "1"));
        moon.style.opacity = "0";
        stars.style.opacity = "0";

        [sheep, sheep3, sheep5].forEach((s) => (s.style.opacity = "1"));
        [sheep2, sheep4, sheep6].forEach((s) => (s.style.opacity = "0"));
        nightSound.pause();
        nightSound.currentTime = 0;
        music.volume = 0.05;
        music.currentTime = 0;
        music.play();
      }
    }

    //glowing animatie

    const glowing = [
      { el: stars, anim: "glow" },
      { el: moon, anim: "glow" },
    ];

    glowing.forEach(({ el, anim }) => {
      el.addEventListener("mouseover", () => {
        el.classList.add(anim);
        el.addEventListener("mouseout", () => el.classList.remove(anim), {
          once: true,
        });
      });
    });

    // boodshcap

    if (count % 15 === 0) {
      tekst2.style.display = "block";
      tekst2.textContent = `Ben je al moe aan het worden?`;

      setTimeout(() => {
        tekst2.textContent =
          "Hoe meer schaapjes je telt hoe dichter je komt tot dromen land";
      }, 3000);
    }

    if (count % 25 === 0) {
      tekst2.textContent = "HOPE YOU WILL HAVE A NICE DREAM!!!";
      setTimeout(() => {
        tekst2.textContent =
          "Hoe meer schaapjes je telt hoe dichter je komt tot dromen land";
      }, 3000);
    }

    // Vogels

    if (count % 10 === 0) {
      birdAudio1.volume = 0.2;
      birdAudio2.volume = 0.2;
      birdAudio1.play();
      setTimeout(() => {
        birdAudio2.play();
      }, 1850);

      birds.style.display = "block";
      document.body.style.backgroundColor = "#F0E1FF";

      setTimeout(() => {
        document.body.style.backgroundColor = "";
      }, 4000);
    } else {
      birds.style.display = "none";
    }

    if (count === 45) {
      tekst2.textContent = "Zzzzzz";

      setTimeout(() => {
        tekst2.textContent = "Slaapzacht!";

        setTimeout(() => {
          document.body.classList.add("fade-out");
          setTimeout(() => {
            window.location.href = "end.html";
          }, 500);
        }, 1000);
      }, 2000);
    }

    // party suprise

    if (count === randomTrigger) {
      randomTrigger = Math.floor(Math.random() * 45) + 1;
      tekst2.textContent = "Kan je niet slapen? Dans dan met ons mee!";
      setTimeout(() => {
        tekst2.textContent =
          "Hoe meer schaapjes je telt hoe dichter je komt tot dromen land";
      }, 3000);
      document.body.classList.add("disco");
      partyaudio.volume = 0.2;
      partyaudio.currentTime = 0;
      partyaudio.play();
      nightSound.pause();
      music.pause();
      music.currentTime = 0;
      nightSound.currentTime = 0;
      [sheep, sheep2, sheep3, sheep4, sheep5, sheep6].forEach((s) =>
        s.classList.add("wiggle")
      );
    } else {
      document.body.classList.remove("disco");
      partyaudio.pause();
      partyaudio.currentTime = 0;

      [sheep, sheep2, sheep3, sheep4, sheep5, sheep6].forEach((s) =>
        s.classList.remove("wiggle")
      );
    }

    // suprise sheep

    if (count === 15 || count === 30) {
      suprise.style.display = "block";
      tekst2.textContent = "Rara wat zou het kunnen zij?";
    }

    suprise.addEventListener("click", () => {
      sheep3.style.display = "block";
      sheep4.style.display = "block";

      if (count === 30) {
        sheep5.style.display = "block";
        sheep6.style.display = "block";
      }
      suprise.style.display = "none";
    });
  });
});
