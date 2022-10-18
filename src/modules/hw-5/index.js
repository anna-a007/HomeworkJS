import { KEY_MAP, COLORS, SOUNDS } from "./constants.js";

const pads = document.querySelectorAll(".pad");
const visual = document.querySelector(".visual");

const playSound = (sounds, index) => {
  const sound = sounds[index];
  const audio = new Audio(sound);
  audio.load();
  audio.play(); 
  createBubble(index);
};


const animatePad = (pads,index) => {
  const pad = pads[index];
  pad.style.animation = `dance 0.1s ease`;
  pad.addEventListener("animationend", () => {
    pad.style.animation = "none";
  });
 
};


const createBubble = (index) => {
  const bubble = document.createElement("div");
  visual.appendChild(bubble);

  const color = COLORS[index];
  bubble.style.backgroundColor = color;
  bubble.style.animation = `jump 1.5s ease`;

  bubble.addEventListener("animationend", () => {
    bubble.style.animation = "none";
  });
 
};



// const play = (index) => {
//   playSound(SOUNDS, index);
//   animatePad(index);
//   createBubble(index);
// };


const keyPressHandler = (evt) => {
  switch (evt.key) {
    case KEY_MAP.kick:
      playSound(SOUNDS,0)
      animatePad(pads,0)
      break;
    case KEY_MAP.cymbal:
      playSound(SOUNDS,1)
      animatePad(pads,1)
      break;
    case KEY_MAP.snare:
      playSound(SOUNDS,2)
      animatePad(pads,2)
      break;
    case KEY_MAP.openHat:
      playSound(SOUNDS,3)
      animatePad(pads,3)
      break;
    case KEY_MAP.longCrash:
      playSound(SOUNDS,4)
      animatePad(pads,4)
      break;
    case KEY_MAP.hitHat:
      playSound(SOUNDS,5)
      animatePad(pads,5)
      break;

    default:
      console.error("Error!!! Wrong a key");
      break;
  }
};

document.addEventListener("keypress", keyPressHandler);
