<?php
function my_nextjs_theme_setup() {
    // Add theme support for various features
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
}
add_action('after_setup_theme', 'my_nextjs_theme_setup');

function my_nextjs_theme_assets() {
    // Enqueue the main CSS file (adjust the path if necessary)
    wp_enqueue_style(
        'nextjs-style',
        get_template_directory_uri() . '/.next/static/css/main.css',
        array(),
        null
    );

    // Enqueue the main JavaScript file (adjust the path if necessary)
    wp_enqueue_script(
        'nextjs-app',
        get_template_directory_uri() . '/.next/static/chunks/main.js',
        array(),
        null,
        true
    );
}
add_action('wp_enqueue_scripts', 'my_nextjs_theme_assets');
