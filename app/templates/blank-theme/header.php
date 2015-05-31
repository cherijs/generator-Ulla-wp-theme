<?php
/**
 * @package WordPress
 * @subpackage <%= themeName %>
 * @since <%= themeName %> 1.0
 */
?><!doctype html>
<!--[if lt IE 7 ]> <html class="ie ie6 ie-lt10 ie-lt9 ie-lt8 ie-lt7 no-js" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 7 ]>    <html class="ie ie7 ie-lt10 ie-lt9 ie-lt8 no-js" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 8 ]>    <html class="ie ie8 ie-lt10 ie-lt9 no-js" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 9 ]>    <html class="ie ie9 ie-lt10 no-js" <?php language_attributes(); ?>> <![endif]-->
<!--[if gt IE 9]><!--><html class="no-js" <?php language_attributes(); ?>><!--<![endif]-->
<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<!--[if IE ]>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<![endif]-->
<?php
if (is_search()){
echo '	<meta name="robots" content="noindex, nofollow" />';
}
?>
	<title><?php wp_title( '|', true, 'right' ); ?></title>
	<meta name="title" content="<?php wp_title( '|', true, 'right' ); ?>">
	<meta name="Copyright" content="Copyright &copy; <?php bloginfo('name'); ?> <?php echo date('Y'); ?>. All Rights Reserved.">

	<link rel="profile" href="http://gmpg.org/xfn/11" />
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
	<link rel="apple-touch-icon" sizes="57x57" href="/assets/apple-touch-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="/assets/apple-touch-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="/assets/apple-touch-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="/assets/apple-touch-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="/assets/apple-touch-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="/assets/apple-touch-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="/assets/apple-touch-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="/assets/apple-touch-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon-180x180.png">
	<link rel="icon" type="image/png" href="/assets/favicon-32x32.png" sizes="32x32">
	<link rel="icon" type="image/png" href="/assets/android-chrome-192x192.png" sizes="192x192">
	<link rel="icon" type="image/png" href="/assets/favicon-96x96.png" sizes="96x96">
	<link rel="icon" type="image/png" href="/assets/favicon-16x16.png" sizes="16x16">
	<link rel="manifest" href="/assets/manifest.json">
	<link rel="shortcut icon" href="/assets/favicon.ico">
	<meta name="msapplication-TileColor" content="#2b5797">
	<meta name="msapplication-TileImage" content="/assets/mstile-144x144.png">
	<meta name="msapplication-config" content="/assets/browserconfig.xml">
	<meta name="theme-color" content="#ffffff">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

	<div id="wrapper">

		<header id="header" role="banner">
			<h1><a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
			<div class="description"><?php bloginfo( 'description' ); ?></div>
		</header>
			
		<nav id="nav" role="navigation">
			<?php wp_nav_menu( array('menu' => 'primary') ); ?>
		
		</nav>
		

<?


?>