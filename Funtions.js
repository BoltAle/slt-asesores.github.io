jQuery ('document').ready(function($){

    var navBtn = $('#main-menu .nav-btn');
    menu = $('#main-menu .menu');

    navBtn.click(function(){

        if(menu.css('display') == 'none'){

            $('this').addClass('open');
            menu.addClassClass('open');

        } else {

            $('this').removeClass('open');
            menu.removeClass('open');
        }
    });  

}); 


// Path: Funtions.js
