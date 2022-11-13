window.addEventListener('keydown', (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

  if (!audio) return;

  audio.currentTime = 0;
  key.classList.add("playing");
  audio.play();
});

function removeKeyEffect(e) {
  if (e.propertyName !== "transform") return; //it will skip if the propertyname is not transform.
  this.classList.remove("playing"); //remove the border
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => {
  key.addEventListener("transitionend", removeKeyEffect);
});
