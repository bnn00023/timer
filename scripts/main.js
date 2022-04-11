let time = new Date();
const buttons = $('.button');
const clickTimes = [];

buttons.css('background', 'red');
buttons.click(e => {
    e.preventDefault();
    if (e.target.isLightUp) {
        let timer = new Date() - time;
        clickTimes.push(timer);
        alert(timer + 'ms');
        lightDown();
        if (clickTimes.length == buttons.length)
            clickTimes.push('End');
        else
            setTimeout(lightUp, 3000);
    }
});

$(document).ready(function () {
    $('#startButton').click(function () {
        lightDown();
        $('#startButton').attr('hidden', true);
        setTimeout(lightUp, 3000);
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