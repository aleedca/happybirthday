function switchScreen() {
    const screen1 = document.getElementById('screen-1');
    const screen2 = document.getElementById('screen-2');

    screen1.style.display = 'none';
    screen2.style.display = 'block';

    happybirthday();
}

function happybirthday() {
    let audio = new Audio('utils/happybirthdaysong.mp3');
    audio.play();

    let timer = 0;
    let interval = setInterval(() => {
        timer++;
        if (timer === 15) {
            clearInterval(interval);
            const message = document.getElementById('message');
            message.textContent = 'Make a wish and blow the candle!';
        }
    }, 1000);
}