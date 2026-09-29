const button = document.getElementById("start-button");
button.addEventListener("click", () => {
    const introPanel = document.querySelector(".intro-screen");
    const bgm = document.getElementById("aud-bgm");
    introPanel.classList.add("fade");
    setTimeout(() => {
        introPanel.style.display = "none";
    }, 500);
    playMain(bgm);
}, {once: true})

function playMain(song) {
    song.currentTime = 0;
    playSong(song);
    song.addEventListener("timeupdate", () => {
    if (song.currentTime >= 134.5) {
        song.currentTime = 22.1;
    }
    });
}

function playSong(song) {
    song.currentTime = 0;
    song.loop = true;
    song.play();
    song.volume = 0.8;
}