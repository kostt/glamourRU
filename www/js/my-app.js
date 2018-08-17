// Initialize app
var myApp = new Framework7({
    modalTitle: "Gramour",
});


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var menth_caps_counter = 0;
var violet_caps_counter = 0;
var common_counter = 0;
var capsule_counter = 0;

(function($){
    $(function(){

        var pageWidth, pageHeight;

        var basePage = {
            width: 1920,
            height: 1280,
            scale: 1,
            scaleX: 1,
            scaleY: 1
        };




        var $page = $('body > section');

        getPageSize();
        scalePages($page, pageWidth, pageHeight);

        //using underscore to delay resize method till finished resizing window
        $(window).resize(function () {
            getPageSize();
            scalePages($page, pageWidth, pageHeight);
        });


        function getPageSize() {
            pageHeight = $('body').height();
            pageWidth = $('body').width();
        }

        function scalePages(page, maxWidth, maxHeight) {
            var scaleX = 1, scaleY = 1;
            scaleX = maxWidth / basePage.width;
            scaleY = maxHeight / basePage.height;
            basePage.scaleX = scaleX;
            basePage.scaleY = scaleY;
            basePage.scale = (scaleX > scaleY) ? scaleY : scaleX;

            var newLeftPos = Math.abs(Math.floor(((basePage.width * basePage.scale) - maxWidth)/2));
            var newTopPos = Math.abs(Math.floor(((basePage.height * basePage.scale) - maxHeight)/2));

            page.attr('style', '-webkit-transform:scale(' + basePage.scale + ') translateX(-50%);margin-left:50%;');
            $('footer').attr('style', '-webkit-transform:scale(' + basePage.scale + ') translateX(-50%);margin-left:50%;');
        }

        function scalePages1(page, maxWidth, maxHeight) {
            var scaleX = 1, scaleY = 1;
            scaleX = maxWidth / basePage.width;
            scaleY = maxHeight / basePage.height;
            basePage.scaleX = scaleX;
            basePage.scaleY = scaleY;
            basePage.scale = (scaleX > scaleY) ? scaleY : scaleX;

            var newLeftPos = Math.abs(Math.floor(((basePage.width * basePage.scale) - maxWidth)/2));
            var newTopPos = Math.abs(Math.floor(((basePage.height * basePage.scale) - maxHeight)/2));

            page.attr('style', '-webkit-transform:scale(' + basePage.scale + ') translateX(-50%);margin-left:40%;');
            $('footer').attr('style', '-webkit-transform:scale(' + basePage.scale + ') translateX(-50%);margin-left:40%;');
        }





        $('a').click(function(){
            event.preventDefault();
        });



    });
    // $(function(){
    //  $('.hidden_treasure').click(function(){
    //    $('.hidden_treasure').off('click');
    //  })
    // });


    // $(function(){
    //  $("*").dblclick(function(e){
    //     event.preventDefault();
    //     console.log('lox')
    //  })
    // });
    $(function(){
        $('.st_page_right .cig_pack_bg_cont .cig_pack_bg_cont_caps ').click(function(){
            $(this).addClass('non_displayed');
            $('.non_game').addClass('condition_1_right');
        })
    });
    $(function(){
        $('.st_page_left .cig_pack_bg_cont .cig_pack_bg_cont_caps ').click(function(){
            $(this).addClass('non_displayed');
            $('.non_game').addClass('condition_1_left');
        })
    });


    var count = true;

    $(function(){
        $('.st_page_right .cig_pack_bg_cont .cig_pack_bg_cont_caps').click(function(){
            count = false;
            $('.st_page_right .cig_pack_capsule').removeClass('non_displayed');
            capsule_counter++;
            $('.bigMenthol').removeClass('visOne visTwo visThree visFour');
            $('.st_page_right .menthols').css({'float' : 'none'});
            $('.menthols .one').addClass('enable');
            $('.menthols .one').on('animationed webkitAnimationEnd oAnimationEnd', function () {
                $(this).removeClass('enable');
                $(this).addClass('vis');

                $('.bigMenthol').addClass('enableOne');
                $('.bigMenthol').on('animationed webkitAnimationEnd oAnimationEnd', function () {
                    $(this).removeClass('enableOne');
                    $('.bigMenthol').removeClass('visTwo visThree visFour');
                    $(this).addClass('visOne');
                });
            });
            $('.menthols .two').addClass('enable');
            $('.menthols .two').on('animationed webkitAnimationEnd oAnimationEnd', function () {
                $(this).removeClass('enable');
                $(this).addClass('vis');

                $('.bigMenthol').removeClass('visOne');
                $('.bigMenthol').addClass('enableTwo');
                $('.bigMenthol').on('animationed webkitAnimationEnd oAnimationEnd', function () {
                    $(this).removeClass('enableTwo');
                    $('.bigMenthol').removeClass('visThree visFour');
                    $(this).addClass('visTwo');
                });
            });
            $('.menthols .three').addClass('enable');
            $('.menthols .three').on('animationed webkitAnimationEnd oAnimationEnd', function () {
                $(this).removeClass('enable');
                $(this).addClass('vis');

                $('.bigMenthol').removeClass('visTwo')
                $('.bigMenthol').addClass('enableThree');
                $('.bigMenthol').on('animationed webkitAnimationEnd oAnimationEnd', function () {
                    $(this).removeClass('enableThree');
                    $('.bigMenthol').removeClass('visFour');
                    $(this).addClass('visThree');
                });
            });
            $('.menthols .four').addClass('enable');
            $('.menthols .four').on('animationed webkitAnimationEnd oAnimationEnd', function () {
                $(this).removeClass('enable');
                $(this).addClass('vis');

                $('.bigMenthol').removeClass('visThree');
                $('.bigMenthol').addClass('enableFour');
                $('.bigMenthol').on('animationed webkitAnimationEnd oAnimationEnd', function () {
                    $(this).removeClass('enableFour');
                    $(this).addClass('visFour');
                    $('.st_page_right .cig_pack_caption').addClass('enable');
                    $('.st_page_right .cig_pack_caption').on('animationed webkitAnimationEnd oAnimationEnd', function () {
                        console.log('rightpart?')
                        // $(this).removeClass('enable');
                        $(this).addClass('vis');
                        $('.menthols .one').removeClass('enable');
                        $('.menthols .two').removeClass('enable');
                        $('.menthols .three').removeClass('enable');
                        $('.menthols .four').removeClass('enable');

                        // console.log(capsule_counter)
                        if (capsule_counter==2) {
                            if(count == false){
                                count == true;
                                console.log('huh')
                                $('.st_page_left .cig_pack_caption').on('animationEnd animationed webkitAnimationEnd omAnimationEnd', function () {
                                    $('.st_page_center_cond2_into3').removeClass('non_displayed');
                                    $('.st_page_center h3').addClass('non_displayed');
                                });
                            }
                            else{
                                $('.st_page_center_cond2_into3').removeClass('non_displayed');
                                $('.st_page_center h3').addClass('non_displayed');
                            }
                        }
                    });
                });
            });
        })
    });
    $(function(){
        $('.st_page_left .cig_pack_bg_cont .cig_pack_bg_cont_caps').click(function(){
            count = false;
            capsule_counter++;
            $('.st_page_left .cig_pack_capsule').removeClass('non_displayed');
            $('.st_page_left .berries').css({'float' : 'none'});
            $('.berries .one').addClass('enable');
            $('.berries .one').on('animationed webkitAnimationEnd oAnimationEnd', function () {
                $(this).removeClass('enable');
                $(this).addClass('vis');
                $('.cig_pack_capsule_grapes').append($('.berries .one'));
                $('.cig_pack_capsule_grapes .one').addClass('cig_pack_capsule_grapes_one');
                $('.cig_pack_capsule_grapes').addClass('first');
            });
            $('.berries .two').addClass('enable');
            $('.berries .two').on('animationed webkitAnimationEnd oAnimationEnd', function () {
                $(this).removeClass('enable');
                $(this).addClass('vis');
                $('.cig_pack_capsule_grapes').append($('.berries .two'));
                $('.cig_pack_capsule_grapes .two').addClass('cig_pack_capsule_grapes_two');
                $('.cig_pack_capsule_grapes').removeClass('first');
                $('.cig_pack_capsule_grapes').addClass('second');
            });
            $('.berries .three').addClass('enable');
            $('.berries .three').on('animationed webkitAnimationEnd oAnimationEnd', function () {
                $(this).removeClass('enable');
                $(this).addClass('vis');
                $('.cig_pack_capsule_grapes').append($('.berries .three'));
                $('.cig_pack_capsule_grapes .three').addClass('cig_pack_capsule_grapes_three');
                $('.cig_pack_capsule_grapes').removeClass('second');
                $('.cig_pack_capsule_grapes').addClass('third');
            });
            $('.berries .four').addClass('enable');
            $('.berries .four').on('animationed webkitAnimationEnd oAnimationEnd', function () {
                $(this).removeClass('enable');
                $(this).addClass('vis');
                $('.cig_pack_capsule_grapes').append($('.berries .four'));
                $('.cig_pack_capsule_grapes .four').addClass('cig_pack_capsule_grapes_four');
                $('.cig_pack_capsule_grapes').removeClass('third');
                $('.cig_pack_capsule_grapes').addClass('fourth');
                $('.st_page_left .cig_pack_caption').addClass('enable');
                $('.st_page_left .cig_pack_caption').on('animationEnd animationed webkitAnimationEnd omAnimationEnd', function () {
                    $(this).removeClass('enable');
                    $(this).addClass('vis');
                    $('.berries .one').removeClass('enable');
                    $('.berries .two').removeClass('enable');
                    $('.berries .three').removeClass('enable');
                    $('.berries .four').removeClass('enable');
                    if (capsule_counter==2) {
                        if(count == false){
                            count = true;
                            console.log('heh')
                            $('.st_page_right .cig_pack_caption').on('animationEnd animationed webkitAnimationEnd omAnimationEnd', function () {
                                $('.st_page_center_cond2_into3').removeClass('non_displayed');
                                $('.st_page_center h3').addClass('non_displayed');
                            });
                        }
                        else{
                            $('.st_page_center_cond2_into3').removeClass('non_displayed');
                            $('.st_page_center h3').addClass('non_displayed');
                        }
                        // 		$('.st_page_right .cig_pack_caption').on('animationEnd animationed webkitAnimationEnd omAnimationEnd', function () {
                        // 		console.log('left?')
                        // 	$('.st_page_center_cond2_into3').removeClass('non_displayed');
                        // 	$('.st_page_center h3').addClass('non_displayed');
                        // });
                    }
                });
            });
        })
    });
    // $(function(){
    //  $('.cig_pack_capsule').click(function(){
    //    $('.non_game').addClass('condition_2').removeClass('condition_1');
    //  })
    // });
    // $(function(){
    //  $('.st_page_right .cig_pack_capsule').one("click",(function(){
    //    $('.st_page_right .cig_pack_caption').removeClass('non_displayed');
    //    capsule_counter++;
    //    if (capsule_counter==2) {
    //      $('.st_page_center_cond2_into3').removeClass('non_displayed');
    //      $('.st_page_center h3').addClass('non_displayed');
    //    }
    //  }));
    // });
    // $(function(){
    //  $('.st_page_left .cig_pack_capsule').one("click",(function(){
    //    $('.st_page_left .cig_pack_caption').removeClass('non_displayed');
    //    capsule_counter++;
    //    if (capsule_counter==2) {
    //      $('.st_page_center_cond2_into3').removeClass('non_displayed');
    //      $('.st_page_center h3').addClass('non_displayed');
    //    }
    //  }));
    // });
    $(function(){
        $('.st_page_center_cond2_into3').click(function(){
            $('.non_game').addClass('condition_2').removeClass('condition_1').removeClass('condition_1_left').removeClass('condition_1_right');
            $('.berries').addClass('non_displayed')
        })
    });
    $(function(){
        $('.button_to_play').click(function(){
            $('.non_game').addClass('condition_3').removeClass('condition_2');
            $('.cig_pack_caption').addClass('non_displayed');
            $('.game').show();
            function Timer(){
                $('.game_score_balls').addClass("animated_score").removeClass("game_score_balls");
                $('.game_menthole_capsule div').addClass('nope');
            }
            timer = setTimeout(Timer,60000);

        })
    });
    var arr = [];
    var test2 = function(){
        if (common_counter<5){
            $(this).addClass('game_menthole_capsule_expl');
            $(this).removeClass('expl_me');
            var r = this;

            if ($.inArray(r, arr) != 0){
                $(r).off("click");
            }
            arr.push(r);

            $('.hidden_treasure').off('click');
            menth_caps_counter++;
            common_counter = violet_caps_counter + menth_caps_counter;
            $('.ball_'+ common_counter).addClass("m_balls");
            function func() {
                $(r).addClass('game_menthole_capsule_fade');
            }
            function funct() {
                $(r).addClass('expl_me');
                $(r).removeClass('game_menthole_capsule_fade');
                $(r).removeClass('game_menthole_capsule_expl');
            }
            timer3 = setTimeout(func,500);
            timer4 = setTimeout(funct,5000);
        }

        function animate_score_delay(){

            if (common_counter == 5) {
                $('.game_score_balls').addClass("animated_score").removeClass("game_score_balls");
                $('.game_menthole_capsule div').addClass('nope');
            }
        }
        if (common_counter == 5) {
            timer5 = setTimeout(animate_score_delay, 500);
        }
    }
    $(function(){
        $('.game_menthole_capsule .expl_me').on( 'click', test2);
    });

    var test = function(){
        if (common_counter<5){
            $(this).addClass('game_violet_capsule_expl');
            $(this).removeClass('expl_me');
            var r = this;

            if ($.inArray(r, arr) != 0){
                $(r).off("click");
            }
            arr.push(r);

            violet_caps_counter++;
            common_counter = violet_caps_counter + menth_caps_counter;
            $('.ball_'+ common_counter).addClass("v_balls");
            function func() {
                $(r).addClass('game_violet_capsule_fade');
            }
            function funct() {
                $(r).addClass('expl_me');
                $(r).removeClass('game_violet_capsule_expl');
                $(r).removeClass('game_violet_capsule_fade');
            }
            timer7 = setTimeout(func,500);
            timer6 = setTimeout(funct,5000);
        }
        function animate_score_delay(){

            if (common_counter == 5) {
                $('.game_score_balls').addClass("animated_score").removeClass("game_score_balls");
                $('.game_violet_capsule div').addClass('nope');
            }
        }
        if (common_counter == 5) {
            timer8 = setTimeout(animate_score_delay, 500);
        }

    }
    $(function(){
        $('.game_violet_capsule .expl_me').on( 'click', test
        );
    });

    var timer,timer2,timer3,timer4,timer5,timer6,timer7,timer8;

    function finish(){
        console.log('finish');
        $('.non_game').addClass('condition_1').removeClass('condition_4');
        $('.st_page').removeClass('after_game');
        $('.st_page_none').addClass('non_displayed');
        $('.cig_pack_capsule ').addClass('non_displayed');
        $('.cig_pack_caption ').removeClass('vis');
        $('.st_page_right .cig_pack_caption').removeClass('enable');
        $('.st_page_center_cond2_into3 ').addClass('non_displayed');
        $('.st_page_center h3').removeClass('non_displayed');
        $('.cig_pack_bg_cont_caps.animated_caps_spin ').removeClass('non_displayed');
        $('.st_page_right .menthols').css({'float' : 'left'});
        $('.st_page_left .berries').css({'float' : 'left'});
        $('.berries').removeClass('non_displayed');
        $('.berries img').removeClass('vis');
        $('.menthols img').removeClass('vis');
        $('.cig_pack_caption').removeClass('enable non_displayed');
        $('.add_part  ').removeClass('after_game');
        $('.animated_score').addClass("game_score_balls").removeClass("animated_score");
        $('.balls').removeClass('v_balls m_balls');
        $('.animated_score_explode').addClass("animated_score_explode_hide").removeClass('animated_score_explode');
        $('.game_menthole_capsule div').removeClass('nope');
        $('.cig_pack_bg_cont_taste').addClass('non_displayed');
        $('.cig_pack_bg_cont_taste').removeClass('non_displayed');
        $('.expl_me').off("click");
        $('.game_menthole_capsule .expl_me').on( 'click', test2);
        $('.game_violet_capsule .expl_me').on( 'click', test);
        $('.cig_pack_capsule_grapes').removeClass('first second third fourth');
        $('.berries').append($('.cig_pack_capsule_grapes_one'));
        $('.berries').append($('.cig_pack_capsule_grapes_two'));
        $('.berries').append($('.cig_pack_capsule_grapes_three'));
        $('.berries').append($('.cig_pack_capsule_grapes_four'));
        $('.cig_pack_capsule_grapes img').removeClass('vis');
        $('.berries .one').removeClass('vis cig_pack_capsule_grapes_one');
        $('.berries .two').removeClass('vis cig_pack_capsule_grapes_two');
        $('.berries .three').removeClass('vis cig_pack_capsule_grapes_three');
        $('.berries .four').removeClass('vis cig_pack_capsule_grapes_four');

        $('.ball-explode-1').removeClass("ball-explode-1");
        $('.ball-explode-2').removeClass("ball-explode-2");
        $('.ball-explode-3').removeClass("ball-explode-3");
        $('.ball-explode-4').removeClass("ball-explode-4");
        $('.ball-explode-5').removeClass("ball-explode-5");

        console.log(timer2);
        arr = [];
        clearTimeout(timer);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
        clearTimeout(timer5);
        clearTimeout(timer6);
        clearTimeout(timer7);
        clearTimeout(timer8);
        capsule_counter = 0;
        common_counter = 0;
        violet_caps_counter = 0;
        menth_caps_counter = 0;
        console.log(timer2);
    };




    $(function(){
        $(document).on('animationend oAnimationEnd  webkitAnimationEnd', '.animated_score',
            function(e) {
                $('.animated_score .balls').eq(0).addClass("ball-explode-1");
                $('.animated_score .balls').eq(1).addClass("ball-explode-2");
                $('.animated_score .balls').eq(2).addClass("ball-explode-3");
                $('.animated_score .balls').eq(3).addClass("ball-explode-4");
                $('.animated_score .balls').eq(4).addClass("ball-explode-5");

                $('.ball-explode-5').on('animationend oAnimationEnd  webkitAnimationEnd',
                    function(e) {
                        $('.game').fadeOut(1000, function(){
                            $(this).hide();

                            $('.st_page_right .menthols').css({'float' : 'left'});
                            $('.non_game').addClass("condition_4").removeClass('condition_3');
                            $('.add_part').addClass("after_game");
                            $('.st_page').addClass("after_game");
                            $('.st_page_none').removeClass('non_displayed');
                            setTimeout(function() { navigator.app.exitApp(); }, 7000);
                            timer2 = setTimeout(finish,32000);
                        });
                    });
                // setTimeout(func,3500);
            });

        $(document).on('click', '.after_game .cig_pack_bg_cont', finish);
    });


    // $('.animated_score_explode').one('animationend ',
    //  function(e) {
    //    $('.game').hide();
    //    $('.non_game').show();
    // });

})(jQuery);














