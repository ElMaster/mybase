var tempClasss = 'span8';
$(document).ready(function() {
//Опридиления розмера окна и функционал меню + удаления левого блока
    width_orig = $('.container').width();


    if (width_orig >= 1170) {si= 257; sim =434;}
    if (width_orig <= 940){si = 206; sim = 315;}

    $(function() {
            $('.kwicks').kwicks({
                size: si,
                maxSize : sim,
                spacing : 0,
                behavior: 'menu'
            });
        });

 if ( tempClasss == 'span8') {

        $(window).resize(function(){
            var width_tmp = $('.container').width();




            if (  width_tmp >= 1170){
                width_orig = width_tmp;
                si= 257; sim =434;

            }
            if ( width_tmp <= 940 ){
                width_orig = width_tmp;
                si = 206; sim = 315;

            }

            $(function() {
                $('.kwicks').kwicks({
                    size: si,
                    maxSize : sim,
                    spacing : 0,
                    behavior: 'menu'
                });
            });
        });
    }
$('.active-block').click(function (){
                $('#off-block').hide(200);
                setTimeout(function () {$("#on-block").removeClass("span8").addClass("span12").css({"margin":"0"});}, 200);
                $(".foot-search").animate({width: "100%"},200);
                $(".radio-group input[type='radio'] + label p").css({'font-size':'19px'});
                width_orig = $('.container').width();
                if (width_orig >= 1170) {si= 390;sim =770;}
                if (width_orig <= 940){si = 313; sim = 570;}
                $(function() {
                    $('.kwicks').kwicks({
                        size: si,
                        maxSize : sim,
                        spacing : 0,
                        behavior: 'menu'
                    });
                });
                 tempClasss = 'span12';
    if ( tempClasss == 'span12') {
        $(window).resize(function(){
            var width_tmp = $('.container').width();
            if (  width_tmp >= 1170){
                width_orig = width_tmp;
                si= 390; sim =770;

            }
            if ( width_tmp <= 940 ){
                width_orig = width_tmp;
                si = 313; sim = 570;

            }

            $(function() {
                $('.kwicks').kwicks({
                    size: si,
                    maxSize : sim,
                    spacing : 0,
                    behavior: 'menu'
                });
            });
        });
    }

        });

//-------------------------------------------------------------------





    $(".main-pages .click_faq_blok").click(function(){

        $(this).next("div.faq_block").slideToggle(300).siblings("div.faq_block").slideUp("slow");
        $(this).siblings();
    });

    $(".main-pages .click_faq_blok").click(function(){

         $(this).toggleClass("active").siblings(".click_faq_blok").removeClass("active");


    });

   /* $(".login-but .navbar > div").removeClass ('navbar-inner');
    $(".login-but .navbar ul").addClass ('pull-right');*/
    $(".editableform .editable-buttons  button").removeClass("btn-primary");
    $(".danue-user tbody tr:eq(5)").addClass ('pasvords');


    $('.pasvords a').click(function (){

       $('.danue-user tbody').append("<tr class='next-pass'><td>Повтор пароля</td><td><input type='text' class='input-medium inputError'></td></tr>");

    });

    $(".pasvords button.editable-submit").click(function () {

        var valueX = $(".pasvords input").val();
        var valueY = $(".next-pass input").val();

        if (valueX != valueY) {
            $('.pasvords input').addClass("inputError");
            $('.next-pass input').addClass("inputError");
            $('.err-block').css({'display':'block'});
            $('.pasvords input, .next-pass input').css({'color':'#cc6666'});
        }
    });

    $(".pasvords input, .next-pass input").click(function () {
        $('.err-block').css({'display':'none'});
        $('.pasvords input').removeClass("inputError");
        $('.next-pass input').removeClass("inputError");
        $('.pasvords input, .next-pass input').css({'color':'#555'});
    });


$(".form-search input").click(function () {
    $(this).val('');

});
    $(".click-script-submit").click(function () {
        $(".user-data-widget").toggle(300);
        return false
    });

    $("#tooMod").click(function () {
        $('#myModal2').modal('hide')
        return false
    });

  /* $('.foot-search textarea').autoResize({
        //  при изменение размера:
        onResize : function() {
            $(this).css({});
        },
        // после изменения размера:
        animateCallback : function() {
            $(this).css({});
        },
        // Замедляем анимацию:
        animateDuration : 300,
        // Увеличиваем отступ:
        extraSpace : 20
    */
    jQuery(function() {
        $('.tables-cont a, #pageAll i').tooltip('hide');
        $('.error_tab a').tooltip('show');

    });


 jQuery(document).ready(function(){

        /* функция кроссбраузерного определения отступа от верха документа к текущей позиции скроллера прокрутки */
        function getScrollTop() {
            var scrOfY = 0;
            if( typeof( window.pageYOffset ) == "number" ) {
                //Netscape compliant
                scrOfY = window.pageYOffset;
            } else if( document.body
    && ( document.body.scrollLeft
    || document.body.scrollTop ) ) {
        //DOM compliant
        scrOfY = document.body.scrollTop;
        } else if( document.documentElement
    && ( document.documentElement.scrollLeft
    || document.documentElement.scrollTop ) ) {
        //IE6 Strict
        scrOfY = document.documentElement.scrollTop;
        }
    return scrOfY;
    }
    /* пересчитываем отступ при прокрутке экрана */
    jQuery(window).scroll(function() {
        fixPaneRefresh();
        });

    function fixPaneRefresh(){
        if (jQuery("#fixedBox").length) {
        var top  = getScrollTop();
        if (top < 135) jQuery("#fixedBox").css("margin-top",135-top+"px"); /* 170 - это наш отступ */
        else jQuery("#fixedBox").css("margin-top","0");
        }
    }


    });

    $(function() {
        var offset = $("#fixed").offset();
        var topPadding = 10;
        $(window).scroll(function() {
            if ($(window).scrollTop() > offset.top) {
                $("#fixed").stop().animate({marginTop: $(window).scrollTop() - offset.top + topPadding});
            }
            else {$("#fixed").stop().animate({marginTop: 0});};});
    });

});
