const musicMenu = document.querySelector(".music-drop");
const musicList = document.querySelector(".list");

musicMenu.addEventListener("click", function() {
    musicList.classList.toggle("close")
})

let currentMusic = null;

function playMusic(src) {
    if (currentMusic && currentMusic.src === src) {
        if (currentMusic.paused) {
            currentMusic.play();
        } else {
            currentMusic.pause();
        }
    } else {
        if (currentMusic) {
            currentMusic.pause();
        }
        currentMusic = new Audio(src);
        currentMusic.play();
    }
}
