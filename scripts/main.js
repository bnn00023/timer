let time = new Date();
const buttons = $('.button');
buttons.css('background', 'red');
buttons.click(e => {
    console.log(e)
    e.preventDefault();
    let now = new Date() - time;
    alert(now + 'ms');
});

$(document).ready(function () {
    $('#startButton').click(function () {
        buttons.css('background', 'white');
        $('#startButton').attr('hidden', true);
        setTimeout(lightUp, 5000);
    });
});

function lightUp() {
    time = new Date();
}

function lightDown() {

}