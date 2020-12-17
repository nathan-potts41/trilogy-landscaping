document.body.className += 'fade-out';

$(function () {
    $('body').removeClass('fade-out');
})

// activates img carousel
$(document).ready(function () {
    $('.carousel').carousel({
        dist: -200,
        numVisible: 3,
        padding: 10,
    });
});

//activated img popout
$(document).ready(function () {
    $('.materialboxed').materialbox();
});

//sidenav at smaller screens
$(document).ready(function(){
    $('.sidenav').sidenav();
  });
