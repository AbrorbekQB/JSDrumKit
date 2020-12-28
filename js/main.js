function playsound(evt) {
  if(evt.type==="click"&&evt.target.matches("kbd")){
    const audio = document.querySelector("audio[data-key=\"" +evt.target.dataset.key + "\"]");
    const key = document.querySelector(".key[data-key=\"" + evt.target.dataset.key + "\"]");
    if (!audio) {
      return;
    }
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
  } 
  if(evt.type ==="keydown") {
    const audio = document.querySelector("audio[data-key=\"" + evt.keyCode + "\"]");
    const key = document.querySelector(".key[data-key=\"" + evt.keyCode + "\"]");
    if (!audio) {
      return;
    }
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
  }
  // setTimeout (function() {
  //   key.classList.remove("playing");
  // }, 0.07);
};

function removeTransition (e) {
  if(e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playsound);

window.addEventListener("click", playsound);