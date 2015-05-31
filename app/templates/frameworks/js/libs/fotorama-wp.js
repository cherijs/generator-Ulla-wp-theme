(function($) {
    $(function() {
        $.fn.fotoramaWPAdapter = function() {
            this.each(function() {
                var $this = $(this),
                    data = $this.data(),
                    $fotorama = $('<div></div>');


                $('dl', this).each(function() {
                    var $a = $('dt a', this);
                    var $thumb = $('dt a .attachment-thumbnail', this);
                    $fotorama.append(
                        $a.attr('data-caption', $('dd', this).text())
                    );


                });

                $this.html($fotorama.html());

            });

            return this;
        };


        $.fn.fotoramaThumbs = function() {
            var thumb;

            $nav = $('<div class="news_gallery"></div>'),


            this.each(function() {

                var $this = $(this);

                $('dl', this).each(function() {

                    var $a = $('dt a', this);
                    var $thumb = $('dt a .attachment-thumbnail', this);

                    var thumb = $('<div class="thumb"></div>')
                    var a = $('<a>');
                    var img = $('<img>');
                    img.attr('src', $thumb.attr('src'));
                    a.attr('href', $a.attr('href'));
                    // img.appendTo('#imagediv');
                    a.append(img);
                    thumb.append(a);
                    $nav.append(
                        thumb
                    );

                });


            });

            return $nav;
        };

        var $thumbs_div = $('.fotorama--wp').fotoramaThumbs();
        if ($thumbs_div[0]) {
            $thumbs_div.insertAfter('.fotorama--wp');

        }

        $('.fotorama--wp')
            .fotoramaWPAdapter();
        // .fotorama();





    });
})(jQuery);