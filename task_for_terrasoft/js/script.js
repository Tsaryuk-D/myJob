
var avatarElem = document.getElementById('header');

var avatarSourceBottom = avatarElem.getBoundingClientRect().bottom + window.pageYOffset;

window.onscroll = function() {
    if (avatarElem.classList.contains('fixed') && window.pageYOffset < avatarSourceBottom) {
        avatarElem.classList.remove('fixed');
    } else if (window.pageYOffset > avatarSourceBottom) {
        avatarElem.classList.add('fixed');
    }
};


var mMenu = document.getElementById('mobile_menu');
var first_s = document.querySelector('.first');
var second_s = document.querySelector('.second');
var third_s = document.querySelector('.third');

mMenu.onclick = function() {
        first_s.classList.toggle('activ_span_one');
        second_s.classList.toggle('activ_span_two');
        third_s.classList.toggle('activ_span_three');
    };
