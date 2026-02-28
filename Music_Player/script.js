var playBtn = document.querySelector(".play-btn");
var forwordBtn = document.querySelector(".frwrd-btn");
var backwordBtn = document.querySelector(".bkwrd-btn");

var progressBar = document.querySelector(".progress-bar");
var audio = new Audio();
audio.src = "./assets/Finding Her Kushagra 128 Kbps.mp3";

playBtn.addEventListener("click", function () {
    if (audio.paused) {
        audio.play()
        playBtn.classList.remove("ri-play-circle-line")
        playBtn.classList.add("ri-pause-circle-line")

        var updatedProgress = setInterval(function () {
            if (audio.paused || audio.ended) {
                clearInterval(updatedProgress)
            }
            var percentage = (audio.currentTime / audio.duration) * 100;
            progressBar.style.width = percentage + '%'
        }, 100)
    }
    else {
        audio.pause()
        playBtn.classList.remove("ri-pause-circle-line")
        playBtn.classList.add("ri-play-circle-line")
    }


});
forwordBtn.addEventListener("click", function () {
    if (audio.duration) {
        audio.currentTime = Math.min(audio.currentTime + 5, audio.duration);
    }
});

backwordBtn.addEventListener("click", function () {
    audio.currentTime = Math.max(audio.currentTime - 5, 0);
});