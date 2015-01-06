/* jshint undef: false, unused: false, -W020 */
/* global Gumby,jQuery */




(function($, window, document, undefined) {
    'use strict';
    //------------------------  CONSOLE FIX
    // Avoid `console` errors in browsers that lack a console.
    var method;
    var noop = function() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});
    while (length--) {
        method = methods[length];
        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
    //------------------------  CONSOLE END



    $.extend($.lazyLoadXT, {
        autoInit: true,
        edgeY: 600,
        srcAttr: 'data-src'
    });





    $(function() {
        // JQUERY READY, MY FUNCTIONS HERE
        console.log('Website ready!!!');
        if (!Modernizr.csstransitions || !Modernizr.cssanimations || !Modernizr.svg) {
            // $('#warning').addClass('active');
        }


        var h = $(window).height();
        var body = $("html, body");
        var keys = [37, 38, 39, 40];

        function preventDefault(e) {
            e = e || window.event;
            if (e.preventDefault)
                e.preventDefault();
            e.returnValue = false;
        }

        function keydown(e) {
            for (var i = keys.length; i--;) {
                if (e.keyCode === keys[i]) {
                    preventDefault(e);
                    return;
                }
            }
        }

        function wheel(e) {
            preventDefault(e);
        }

        function disable_scroll() {
            if (window.addEventListener) {
                window.addEventListener('DOMMouseScroll', wheel, false);
            }
            window.onmousewheel = document.onmousewheel = wheel;
            document.onkeydown = keydown;
        }

        function enable_scroll() {
            if (window.removeEventListener) {
                window.removeEventListener('DOMMouseScroll', wheel, false);
            }
            window.onmousewheel = document.onmousewheel = document.onkeydown = null;
        }

        // noblokjejam visur
        document.addEventListener('touchmove', function(event) {
            //event.preventDefault();
        });
        // atljaujam sheit
        // var scrollingDiv = document.getElementById('nav');
        // $('#nav-wraper')[0].addEventListener('touchmove', function (event) {
        //     event.stopPropagation();
        // });


        var $active_sub = $('ul.main_cat a.active').attr('data-id');
        // $('ul.sub_cat a.active').parent().parent().show();
        $('ul.sub_cat[data-parent=' + $active_sub + ']').show();

        $('ul.main_cat a').mouseover(function(event) {
            event.preventDefault();
            var $category = $(event.currentTarget).attr('data-id');

            $('ul.sub_cat').hide();
            $('ul.sub_cat[data-parent=' + $category + ']').show();
            $('ul.main_cat a').removeClass('active');
            $(this).addClass('active');

        });



        $('ul.main_cat a').mouseout(function(event) {
            event.preventDefault();
            var $category = $(event.currentTarget).attr('data-id');


        });


        $("ul.main_cat a").on("click", function(event) {
            // event.preventDefault();
        });


        //subcat izmers
        var subcat_height = 0;
        $("ul.sub_cat").each(function(index) {
            // console.log(index + ": " + $(this).height());
            if ($(this).height() > subcat_height) {
                subcat_height = $(this).height();
            }
        });
        $("div.sub_cat").height(subcat_height);




    });
})(jQuery, this, this.document);