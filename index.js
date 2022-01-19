let form = document.querySelector('form');
let inputCounter = document.querySelector('#input-counter');
let btn = document.querySelector('#start-counting');
let circle = document.querySelector('.c100');
let timerNumb = document.querySelector('.c100 > span');
let lastPercent = '';
let orginalSeconds, seconds, timerId;



btn.addEventListener('click', function () {
    seconds = parseInt(inputCounter.value);


    if (isNaN(seconds)) {
        alert("زمان را به درستی وارد کنید");
        return;
    }

    circle.style.display = 'block';
    form.classList.remove('active');
    timerNumb.textContent = seconds;
    toggleLoadingMsg({ show: true });


    orginalSeconds = seconds;

    timerId = setInterval(startTimer, 1000);
});


let startTimer = () => {
    if (lastPercent) {
        circle.classList.remove(lastPercent)
    }

    if (seconds <= 0) {
        clearInterval(timerId);
        form.classList.add('active');
        circle.style.display = 'none';
        inputCounter.value = '';
        toggleLoadingMsg({ show: false });
        return;
    }
    seconds -= 1;
    timerNumb.textContent = seconds;
    let percent = lastPercent = `p${Math.floor((orginalSeconds - seconds) / orginalSeconds * 100)}`
    circle.classList.add(percent)
    console.log(percent);

}

let toggleLoadingMsg = ({ show }) => {
    let loadingTxt = document.querySelector('#loading');
    let successTxt = document.querySelector('#success');
    if (show) {
        loadingTxt.style.display = 'block';
        successTxt.style.display = 'none';
    } else {
        successTxt.style.display = 'block';
        loadingTxt.style.display = 'none';
    }
}