<?php
/**
 * @package WordPress
 * @subpackage <%= themeName %>
 * @since <%= themeName %> 1.0
 */
?>
<!-- footer -->

    <footer id="footer" class="source-org vcard copyright" role="contentinfo">
      <small>&copy;<?php echo date("Y"); echo " "; bloginfo('name'); ?></small>
    </footer>


  </div>
<!-- end wrapper -->



<?php 


    /*

      
      <!-- build:js /wp-content/themes/<%= site_nameSpace %>/static/js/app.min.js -->
      <!-- put all your js files here  -->
      <script type='text/javascript' src='/wp-content/themes/<%= site_nameSpace %>/static/js/modernizr.js'></script>
      <script type='text/javascript' src='/wp-content/themes/<%= site_nameSpace %>/static/js/jquery.js'></script>
      <script type='text/javascript' src='/wp-content/themes/<%= site_nameSpace %>/static/js/libs/html5shiv.min.js'></script>
      <script type='text/javascript' src='/wp-content/themes/<%= site_nameSpace %>/static/js/libs/wiselinks-1.2.2.min.js'></script>


      <script type='text/javascript' src='/wp-content/themes/<%= site_nameSpace %>/static/js/footer.js'></script>
      <!-- endbuild -->


      <script type='text/javascript' src='/wp-content/themes/<%= site_nameSpace %>/static/js/libs/jquery.magnific-popup.min.js'></script>
      <script type='text/javascript' src='/wp-content/themes/<%= site_nameSpace %>/static/js/libs/fotorama.js'></script>
      <script type='text/javascript' src='/wp-content/themes/<%= site_nameSpace %>/static/js/libs/fotorama-wp.js'></script>
      <script type='text/javascript' src='/wp-content/themes/<%= site_nameSpace %>/static/js/libs/swiper.js'></script>
      <script type='text/javascript' src='/wp-content/themes/<%= site_nameSpace %>/static/js/libs/soundmanager2-nodebug-jsmin.js'></script>
      <script type='text/javascript' src='/wp-content/themes/<%= site_nameSpace %>/static/js/libs/mp3-player-button.js'></script>

      <script type='text/javascript' src='/wp-content/themes/<%= site_nameSpace %>/static/js/libs/ScrollMagic.js'></script>
      <script type='text/javascript' src='/wp-content/themes/<%= site_nameSpace %>/static/js/libs/TweenMax.min.js'></script>
      <script type='text/javascript' src='/wp-content/themes/<%= site_nameSpace %>/static/js/libs/animation.gsap.js'></script>

      <script type='text/javascript' src='/wp-content/themes/<%= site_nameSpace %>/static/js/libs/SmoothScroll.js'></script>

      <script type='text/javascript' src='/wp-includes/js/jquery/ui/datepicker.min.js'></script>
      <script type='text/javascript' src='/wp-content/themes/<%= site_nameSpace %>/static/js/libs/datepicker-ru.js'></script>
      <script type='text/javascript' src='/wp-content/themes/<%= site_nameSpace %>/static/js/libs/datepicker-lv.js' ></script>
      <script type='text/javascript' src='/wp-content/themes/<%= site_nameSpace %>/static/js/libs/jquery.ScrollMagic.js'></script>
      <script type='text/javascript' src='/wp-content/themes/<%= site_nameSpace %>/static/js/libs/debug.addIndicators.js'></script>
    */


    wp_footer();  ?>

<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-XXXXX-X']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>

</body>
</html>