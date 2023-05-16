const app = () => {
    let startButton = document.getElementById("startbutton");
    startButton.addEventListener('click', workTimer);

    let minutes = document.querySelector(".minutes");
    let seconds = document.querySelector(".seconds");
    let restStart = document.getElementById("restStart");
    let restOver = document.getElementById("restOver");

    function workTimer() {
        minutes.textContent = "20";
        seconds.textContent = "5";
        let intervalReturn = setInterval(() => {
            if (seconds.textContent != 0) {
                seconds.textContent -= 1;
            }
            else if (minutes.textContent != 0 && seconds.textContent == 0) {
                minutes.textContent -= 1;
                seconds.textContent = 59;
            }
            else {
                clearInterval(intervalReturn);
                restStart.play();
                restTimer();
            }
        }, 1000);

    }
    function restTimer() {
        seconds.textContent = "25";
        minutes.textContent = "00";
        let intervalReturn = setInterval(() => {
            if (seconds.textContent != "0") {
                seconds.textContent -= 1;
            }
            else {
                restOver.play();
                clearInterval(intervalReturn);
                workTimer();
            }
        }, 1000);
    }
}
app();
