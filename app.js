document.addEventListener("DOMContentLoaded", () => {

  /* ---------------------------
     Background jungle sound
  --------------------------- */
  const bgSound = new Audio("sounds/גונגל.wav");
  bgSound.loop = false;
  bgSound.volume = 0.3;

  // some browsers require user interaction before playing sound
  bgSound.play().catch(() => {});
  document.body.addEventListener(
    "click",
    () => bgSound.play().catch(() => {}),
    { once: true }
  );

  /* ---------------------------
     Mouse clicks on animals
  --------------------------- */
  document.querySelector(".animal[data-key='w']").addEventListener("click", playRooster);
  document.querySelector(".animal[data-key='a']").addEventListener("click", playDog);
  document.querySelector(".animal[data-key='s']").addEventListener("click", playDolphin);
  document.querySelector(".animal[data-key='d']").addEventListener("click", playCat);
  document.querySelector(".animal[data-key='j']").addEventListener("click", playSheep);
  document.querySelector(".animal[data-key='k']").addEventListener("click", playSnake);
  document.querySelector(".animal[data-key='l']").addEventListener("click", playHorse);

  /* ---------------------------
     Keyboard events
  --------------------------- */
  document.addEventListener("keydown", (event) => {
    const key = (event.key || "").toLowerCase();

    if (key === "w") {
      playRooster();
    } else if (key === "a") {
      playDog();
    } else if (key === "s") {
      playDolphin();
    } else if (key === "d") {
      playCat();
    } else if (key === "j") {
      playSheep();
    } else if (key === "k") {
      playSnake();
    } else if (key === "l") {
      playHorse();
    }
  });
});

/* ---------------------------
   Animal functions
--------------------------- */

function playRooster() {
  playSound("sounds/תרנגול.mp3");
  activateCard("w");
}

function playDog() {
  playSound("sounds/כלב.wav");
  activateCard("a");
}

function playDolphin() {
  playSound("sounds/דולפין.wav");
  activateCard("s");
}

function playCat() {
  playSound("sounds/חתול.mp3");
  activateCard("d");
}

function playSheep() {
  playSound("sounds/כבשה.mp3");
  activateCard("j");
}

function playSnake() {
  playSound("sounds/נחש.wav");
  activateCard("k");
}

function playHorse() {
  playSound("sounds/סוס.mp3");
  activateCard("l");
}

/* ---------------------------
   Helper functions
--------------------------- */

function playSound(path) {
  const sound = new Audio(path);
  sound.currentTime = 0;
  sound.play();
}

function activateCard(key) {
  const cards = document.querySelectorAll(".animal");
  cards.forEach(card => card.classList.remove("active"));

  const activeCard = document.querySelector(`.animal[data-key='${key}']`);
  if (!activeCard) return;
  activeCard.focus();

  // לא נלמד:
  // classList.toggle כדי לשנות את מצב העיצוב של אלמנט בעת לחיצה, בלי צורך להוסיף ולהסיר מחלקות ידנית.
  activeCard.classList.toggle("active");

}
