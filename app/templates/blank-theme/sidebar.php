<?php
/**
 * @package WordPress
 * @subpackage <%= themeName %>
 * @since <%= themeName %> 1.0
 */
?>
    <aside id="sidebar">
        <?php if (function_exists('dynamic_sidebar') && dynamic_sidebar('Sidebar Widgets')) : else : ?>
        <?php get_search_form(); ?>
    	<h2><?php _e('Archives','<%= themeNameSpace %>'); ?></h2>
    	<ul>
            <?php wp_get_archives('type=monthly'); ?>
    	</ul>
    	<h2><?php _e('Meta','<%= themeNameSpace %>'); ?></h2>
    	<ul>
            <?php wp_register(); ?>
            <li><?php wp_loginout(); ?></li>
            <?php wp_meta(); ?>
    	</ul>
    	<h2><?php _e('Subscribe','<%= themeNameSpace %>'); ?></h2>
    	<ul>
    		<li><a href="<?php bloginfo('rss2_url'); ?>"><?php _e('Entries (RSS)','<%= themeNameSpace %>'); ?></a></li>
    		<li><a href="<?php bloginfo('comments_rss2_url'); ?>"><?php _e('Comments (RSS)','<%= themeNameSpace %>'); ?></a></li>
    	</ul>
    <?php endif; ?>
</aside>