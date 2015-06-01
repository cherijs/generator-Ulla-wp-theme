/* jshint undef: false, unused: false, -W020 */
/* global Gumby,jQuery */




(function ($, window, document, undefined) {
    'use strict';
    //------------------------  CONSOLE FIX
    // Avoid `console` errors in browsers that lack a console.
    var method;
    var noop = function () {};
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



    $(function () {
        // JQUERY READY, MY FUNCTIONS HERE
        console.log('Website ready!!!');
        if (!Modernizr.csstransitions || !Modernizr.cssanimations || !Modernizr.svg) {
            // $('#warning').addClass('active');
        }

        // prieksh wiselinks



        function makeWiselinks() {
            $('a[href^="http://localhost:3000/"]').each(function () {
                var a = $(this);
                a.attr("data-push", "true");
                a.attr("data-target", "#wrapper");
            });
        }
        makeWiselinks();

        window.wiselinks = new Wiselinks($('#wrapper'));

        $(document).off('page:loading').on('page:loading', function (event, $target, render, url) {
            console.log("Loading: #{url} to #{$target.selector} within '#{render}'"); // # code to start loading animation
            $('body').addClass('loading');

        });

        $(document).off('page:redirected').on('page:redirected', function (event, $target, render, url) {
            console.log("Redirected to: #{url}"); // # code to start loading animation
            $('body').addClass('loading');
        });

        $(document).off('page:always').on('page:always', function (event, xhr, settings) {
            console.log("Wiselinks page loading completed"); // # code to stop loading animation
            $('body').removeClass('loading');

        });


        $(document).off('page:done').on('page:done', function (event, $target, status, url, data) {
            console.log("Wiselinks status: '#{status}'");
            $('body').removeClass('loading');
            makeWiselinks();
            _gaq.push(['_trackPageview', url]);
        });

        $(document).off('page:fail').on('page:fail', function (event, $target, status, url, error, code) {
            console.log("Wiselinks status: '#{status}'");

        });


    });
})(jQuery, this, this.document);