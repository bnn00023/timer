var time = new Date();
let buttons = $('.button');
buttons.css('background','red');
buttons.click(function (e) { 
    e.preventDefault();
    let now = new Date() - time;
    alert(now + 'ms');
    time  = new Date();
});