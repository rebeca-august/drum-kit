function getCorrectDrum(e) {
    if (e.keyCode) {
        return document.querySelector(`.key[data-key="${e.keyCode}"]`);
    }
    return e.target.closest(".key");
}

const subTitle = document.querySelector(".sub-title");
let counter = 0;

function playSound(e) {
    const drum = getCorrectDrum(e);

    if (!drum) return;

    const key = drum.dataset.key;
    const audio = document.querySelector(`audio[data-key="${key}"]`);

    audio.currentTime = 0;
    audio.play();

    drum.classList.add("playing");

    counter++;

    if (counter === 4) {
        subTitle.classList.add("slide-in");
    }
};

function removeTransition(e) {
    if (e.propertyName !== "transform")
        return;
    this.classList.remove("playing");
}


const keys = document.querySelectorAll(".key");
keys.forEach(key => {
    key.addEventListener("transitionend", removeTransition);
    key.addEventListener("touchstart", playSound);
});

window.addEventListener("keydown", playSound);
