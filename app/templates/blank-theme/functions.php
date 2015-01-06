<?php
/**
 * @package WordPress
 * @subpackage <%= themeName %>
 * @since <%= themeName %> 1.0
 */



	// Theme Setup (based on twentythirteen: http://make.wordpress.org/core/tag/twentythirteen/)
	function <%= themeNameSpace %>_setup() {
		load_theme_textdomain( '<%= themeNameSpace %>', get_template_directory() . '/languages' );
		add_theme_support( 'automatic-feed-links' );
		add_theme_support( 'structured-post-formats', array( 'link', 'video' ) );
		add_theme_support( 'post-formats', array( 'aside', 'audio', 'chat', 'gallery', 'image', 'quote', 'status' ) );
		register_nav_menu( 'primary', __( 'Navigation Menu', '<%= themeNameSpace %>' ) );
		add_theme_support( 'post-thumbnails' );
	}
	add_action( 'after_setup_theme', '<%= themeNameSpace %>_setup' );

	// Scripts & Styles (based on twentythirteen: http://make.wordpress.org/core/tag/twentythirteen/)
	/**
 	* Enqueue <%= themeNameSpace %> scripts
 	* @return void
 	*/
	// Load jQuery
	if ( !is_admin() ) {
	   // wp_deregister_script('jquery');
	   // wp_register_script('jquery', ("http://ajax.googleapis.com/ajax/libs/jquery/1.4.1/jquery.min.js"), false);
	   // wp_enqueue_script('jquery');
	}

	    


	function <%= themeNameSpace %>_enqueue_scripts() {
	    wp_enqueue_style( '<%= themeNameSpace %>-styles', get_template_directory_uri() . '/static/css/style.css' ); //our stylesheet
	    wp_enqueue_script( 'jquery' );
	    wp_enqueue_script( 'default-scripts', get_template_directory_uri() . '/static/js/footer.js', array(), '1.0', true );
	    if ( is_singular() ) {
	    	// wp_enqueue_script( 'comment-reply' )
	    };
	}
	add_action( 'wp_enqueue_scripts', '<%= themeNameSpace %>_enqueue_scripts' );






	if ( in_array( 'woocommerce/woocommerce.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) ) {
	    // Put your plugin code here

		/**
		 * Remove WooCommerce Generator tag, styles, and scripts from the homepage.
		 * Tested and works with WooCommerce 2.0+
		 *
		 * @author Greg Rickaby
		 * @since 2.0.0
		 */


		add_action( 'wp_enqueue_scripts', 'child_manage_woocommerce_styles', 99 );
		function child_manage_woocommerce_styles() {
			remove_action( 'wp_head', array( $GLOBALS['woocommerce'], 'generator' ) );
			// if ( is_front_page() || is_home() ) {
				wp_dequeue_style( 'woocommerce-general' );
				wp_dequeue_style( 'woocommerce-layout' );
				wp_dequeue_style( 'woocommerce-smallscreen' );
				wp_dequeue_style( 'wc-composite-css' );

				wp_dequeue_style( 'woocommerce_frontend_styles' );
				wp_dequeue_style( 'woocommerce_fancybox_styles' );
				wp_dequeue_style( 'woocommerce_chosen_styles' );
				wp_dequeue_style( 'woocommerce_prettyPhoto_css' );
				wp_dequeue_script( 'wc_price_slider' );
				wp_dequeue_script( 'wc-single-product' );
				wp_dequeue_script( 'wc-add-to-cart' );
				wp_dequeue_script( 'wc-cart-fragments' );
				wp_dequeue_script( 'wc-checkout' );
				wp_dequeue_script( 'wc-add-to-cart-variation' );
				wp_dequeue_script( 'wc-single-product' );
				wp_dequeue_script( 'wc-cart' );
				wp_dequeue_script( 'wc-chosen' );
				wp_dequeue_script( 'woocommerce' );
				wp_dequeue_script( 'prettyPhoto' );
				wp_dequeue_script( 'prettyPhoto-init' );
				wp_dequeue_script( 'jquery-blockui' );
				wp_dequeue_script( 'jquery-placeholder' );
				wp_dequeue_script( 'fancybox' );
				wp_dequeue_script( 'jqueryui' );
			// }
		}

		add_theme_support( 'woocommerce' );

		
	}


	function get_all_categories(){
		if ( in_array( 'woocommerce/woocommerce.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) ) {
		global $wp_query;
		
		$cur_cat_slug = "";
		$cur_cat_q = $wp_query->get_queried_object();

		if(@$cur_cat_q->slug){
			$cur_cat_slug = $cur_cat_q->slug;
		}
		
		$cur_cat_parent = '';
		if(@$cur_cat_q->parent){
			$cur_cat_parent = get_term_by( 'id', $cur_cat_q->parent, 'product_cat' )->slug;
		}




		$result = '';
		$main_cat = '';
		$sub_cat = '';
		$taxonomy     = 'product_cat';
		$orderby      = 'name';
		$show_count   = 1; // 1 for yes, 0 for no
		$pad_counts   = 1; // 1 for yes, 0 for no
		$hierarchical = 1; // 1 for yes, 0 for no  
		$title        = '';
		$empty        = 0;
		$args         = array(
		    'taxonomy' => $taxonomy,
		    // 'orderby' => $orderby,
		    'show_count' => $show_count,
		    'pad_counts' => $pad_counts,
		    'hierarchical' => $hierarchical,
		    'title_li' => $title,
		    'hide_empty' => $empty
		);
		$all_categories = get_categories($args);
		


		//print_r($all_categories);

		$main_cat .= '<ul class="main_cat">';

		foreach ($all_categories as $cat) {
		    //print_r($cat);
		    if ($cat->category_parent == 0) {
		        $category_id = $cat->term_id;
		        

		        
		        $main_cat .= '<li><a data-id="'.$cat->slug.'" class="'.(($cur_cat_slug==$cat->slug||$cur_cat_parent==$cat->slug) ? 'active':'').'" href="' . get_term_link($cat->slug, 'product_cat') . '">' . $cat->name . '</a>';
		        //$res .= $cat->description;
		        

				$args2    = array(
				    'taxonomy' => $taxonomy,
				    'child_of' => 0,
				    'parent' => $category_id,
				    // 'orderby' => $orderby,
				    'show_count' => $show_count,
				    'pad_counts' => $pad_counts,
				    'hierarchical' => $hierarchical,
				    'title_li' => $title,
				    'hide_empty' => $empty
				);
				$sub_cats = get_categories($args2);
				if ($sub_cats) {
					$sub_cat .= '<ul class="sub_cat" data-parent="'.$cat->slug.'" >';
				    foreach ($sub_cats as $sub_category) {
				    	// print_r($sub_category);
				        // echo $sub_category->name;
				        $thumbnail_id = get_woocommerce_term_meta( $sub_category->term_id, 'thumbnail_id', true );
		    			$image = wp_get_attachment_url( $thumbnail_id );

				        $sub_cat .= '<li data-img="'.$image.'"><a class="'.(($cur_cat_slug==$sub_category->slug) ? 'active':'').'"  href="' . get_term_link($sub_category->slug, 'product_cat') . '">' . $sub_category->name . '</a></li>';
				        // echo apply_filters( 'woocommerce_subcategory_count_html', ' <span class="cat-count">' . $sub_category->count . '</span>', $sub_category );

				    }
				    $sub_cat .= '</ul>';
				    
				}


				$main_cat .= '</li>';
			
		    }
		}

		$main_cat .= '</ul>';

		$result = '<div class="main_cat">';
		$result .= $main_cat;
		$result .= '</div>';

		$result .= '<div class="sub_cat">';
		$result .= $sub_cat;
		$result .= '</div>';
		// echo $res;
		return $result;
		} else {
			return '';
		} 
	}



	//removojam drankjus
	add_action('get_header', 'ad_ob_start');
	add_action('wp_head', 'ad_ob_end_flush', 100);
	function ad_ob_start() {
	    ob_start('ad_filter_wp_head_output');
	}
	function ad_ob_end_flush() {
	    ob_end_flush();
	}


	function ad_filter_wp_head_output($output) {
	    if (defined('WPSEO_VERSION')) {
	        $output = str_ireplace('<!-- This site is optimized with the Yoast WordPress SEO plugin v' . WPSEO_VERSION . ' - https://yoast.com/wordpress/plugins/seo/ -->', '', $output);
	        $output = str_ireplace('<!-- / Yoast WordPress SEO plugin. -->', '', $output);
	    }

	    if (defined('GADWP_CURRENT_VERSION')) {
 			$output = str_ireplace('<!-- BEGIN GADWP v' . GADWP_CURRENT_VERSION . ' Classic Tracking - https://deconf.com/google-analytics-dashboard-wordpress/ -->', '', $output);
 			$output = str_ireplace('<!-- BEGIN GADWP v' . GADWP_CURRENT_VERSION . ' Universal Tracking - https://deconf.com/google-analytics-dashboard-wordpress/ -->', '', $output);
 			$output = str_ireplace('<!-- END GADWP Classic Tracking -->', '', $output);
 			$output = str_ireplace('<!-- END GADWP Universal Tracking -->', '', $output);

		}

	    return $output;
	}
	

	// WP Title (based on twentythirteen: http://make.wordpress.org/core/tag/twentythirteen/)
	function <%= themeNameSpace %>_wp_title( $title, $sep ) {
		global $paged, $page;

		if ( is_feed() )
			return $title;

//		 Add the site name.
		$title .= get_bloginfo( 'name' );

//		 Add the site description for the home/front page.
		$site_description = get_bloginfo( 'description', 'display' );
		if ( $site_description && ( is_home() || is_front_page() ) )
			$title = "$title $sep $site_description";

//		 Add a page number if necessary.
		if ( $paged >= 2 || $page >= 2 )
			$title = "$title $sep " . sprintf( __( 'Page %s', '<%= themeNameSpace %>' ), max( $paged, $page ) );
//FIX
//		if (function_exists('is_tag') && is_tag()) {
//		   single_tag_title("Tag Archive for &quot;"); echo '&quot; - '; }
//		elseif (is_archive()) {
//		   wp_title(''); echo ' Archive - '; }
//		elseif (is_search()) {
//		   echo 'Search for &quot;'.wp_specialchars($s).'&quot; - '; }
//		elseif (!(is_404()) && (is_single()) || (is_page())) {
//		   wp_title(''); echo ' - '; }
//		elseif (is_404()) {
//		   echo 'Not Found - '; }
//		if (is_home()) {
//		   bloginfo('name'); echo ' - '; bloginfo('description'); }
//		else {
//		    bloginfo('name'); }
//		if ($paged>1) {
//		   echo ' - page '. $paged; }

		return $title;
	}
	add_filter( 'wp_title', '<%= themeNameSpace %>_wp_title', 10, 2 );




	// Custom Menu
	register_nav_menu( 'primary', __( 'Navigation Menu', '<%= themeNameSpace %>' ) );

	// Widgets
	if ( function_exists('register_sidebar' )) {
		function <%= themeNameSpace %>_widgets_init() {
			register_sidebar( array(
				'name'          => __( 'Sidebar Widgets', '<%= themeNameSpace %>' ),
				'id'            => 'sidebar-primary',
				'before_widget' => '<div id="%1$s" class="widget %2$s">',
				'after_widget'  => '</div>',
				'before_title'  => '<h3 class="widget-title">',
				'after_title'   => '</h3>',
			) );
		}
		add_action( 'widgets_init', '<%= themeNameSpace %>_widgets_init' );
	}

	// Navigation - update coming from twentythirteen
	function post_navigation() {
		echo '<div class="navigation">';
		echo '	<div class="next-posts">'.get_next_posts_link('&laquo; Older Entries').'</div>';
		echo '	<div class="prev-posts">'.get_previous_posts_link('Newer Entries &raquo;').'</div>';
		echo '</div>';
	}

	// Posted On
	function posted_on() {
		printf( __( '<span class="sep">Posted </span><a href="%1$s" title="%2$s" rel="bookmark"><time class="entry-date" datetime="%3$s" pubdate>%4$s</time></a> by <span class="byline author vcard">%5$s</span>', '' ),
			esc_url( get_permalink() ),
			esc_attr( get_the_time() ),
			esc_attr( get_the_date( 'c' ) ),
			esc_html( get_the_date() ),
			esc_attr( get_the_author() )
		);
	}



add_filter('show_admin_bar', '__return_false');









/* Uncomment to add custom image sizes

function <%= themeNameSpace %>_add_image_sizes() {
    add_image_size( '<%= themeNameSpace %>-thumb', 300, 100, true );
    add_image_size( '<%= themeNameSpace %>-large', 600, 300, true );
}
add_action( 'init', '<%= themeNameSpace %>_add_image_sizes' );
 


function <%= themeNameSpace %>_show_image_sizes($sizes) {
    $sizes['<%= themeNameSpace %>-thumb'] = __( 'Boardside Thumb', '<%= themeNameSpace %>' );
    $sizes['<%= themeNameSpace %>-large'] = __( 'Boardside Large', '<%= themeNameSpace %>' );
 
    return $sizes;
}
add_filter('image_size_names_choose', '<%= themeNameSpace %>_show_image_sizes');

*/





/* Uncomment to add minimum image upload sizes

add_filter('wp_handle_upload_prefilter','<%= themeNameSpace %>_handle_upload_prefilter');
//Set the minimum file sizes
$minimumWidth = '640';
$minimumHeight = '480';

function <%= themeNameSpace %>_handle_upload_prefilter($file)
{

    $img=getimagesize($file['tmp_name']);
    $minimum = array('width' => $minimumWidth, 'height' => $minimumHeight);
    $width= $img[0];
    $height =$img[1];

    if ($width < $minimum['width'] )
        return array("error"=>"Image dimensions are too small. Minimum width is {$minimum['width']}px. Uploaded image width is $width px");

    elseif ($height <  $minimum['height'])
        return array("error"=>"Image dimensions are too small. Minimum height is {$minimum['height']}px. Uploaded image height is $height px");
    else
        return $file; 
}
*/
?>