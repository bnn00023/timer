const clickNumber = 18;//遊戲需要按幾次結束
const lightUpinterval = 3000;//等待亮燈的時間(ms)

let time = new Date();
const buttons = $('.button');
const clickTimes = [];

buttons.css('background', 'red');
buttons.click(e => {
    e.preventDefault();
    if (e.target.isLightUp) {
        e.target.selected = true;
        let timer = new Date() - time;
        clickTimes.push(timer);
        $("#list").append(`<li>${timer} ms</li>`);
        lightDown();
        if (buttons.toArray().filter(e => e.selected == true).length == clickNumber)
            alert('End');
        else
            setTimeout(lightUp, lightUpinterval);
    }
});

$(document).ready(function () {
    $('#startButton').click(function () {
        lightDown();
        $('#startButton').attr('hidden', true);
        $.each(buttons, function (indexInArray, valueOfElement) {
            valueOfElement.selected = false;
        });
        setTimeout(lightUp, lightUpinterval);
    });
});

function lightUp() {
    let notSelectedButtons = buttons.toArray().filter(e => !e.selected);
    var selectButton = notSelectedButtons[getRandomInt(notSelectedButtons.length)];
    selectButton.style.background = 'red';
    selectButton.isLightUp = true;
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
