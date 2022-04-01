var time = new Date();
let buttons = $('.continue');
buttons.css('color','red');
buttons.click(function (e) { 
    e.preventDefault();
    let now = new Date() - time;
    alert(now + 'ms');
    time  = new Date();
});
console.log(a);