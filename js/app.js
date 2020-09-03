$(document).ready(function(){
    $('.slider').slick({
arrows:false,
dots:true,
appendDots:'.slider-dots',
dotsClass:'dots'
    });

    var hamberger=document.querySelector('.hamberger');
    var times=document.querySelector('.times');
    var mobile=document.querySelector('.mobile');
    hamberger.addEventListener('click',function(){
mobile.classList.add('open');
    });
    times.addEventListener('click',function(){
        mobile.classList.remove('open');
    });
});