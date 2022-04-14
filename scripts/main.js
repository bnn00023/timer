const clickNumber = 3;//遊戲需要按幾次結束
const lightUpinterval = 3000;//等待亮燈的時間(ms)

let time = new Date();
const buttons = $('.button');
const clickTimes = [];

buttons.css('background', 'red');
buttons.click(e => {
    e.preventDefault();
    if (e.target.isLightUp) {
        let timer = new Date() - time;
        clickTimes.push(timer);
        $("#list").append(`<li>${timer} ms</li>`);
        lightDown();
        if (clickTimes.length == clickNumber)
            alert('End');
        else
            setTimeout(lightUp, lightUpinterval);
    }
});

$(document).ready(function () {
    $('#startButton').click(function () {
        lightDown();
        $('#startButton').attr('hidden', true);
        setTimeout(lightUp, lightUpinterval);
    });
});

function lightUp() {
    var selectButton = buttons[getRandomInt(buttons.length)];
    selectButton.style.background = 'red';
    selectButton.isLightUp = true;
    console.log(selectButton);
    time = new Date();

}

function lightDown() {
    buttons.css('background', 'white');
    $.each(buttons, function (indexInArray, valueOfElement) {
        valueOfElement.isLightUp = false;
    });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}