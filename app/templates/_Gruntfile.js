/* Generated for <%= site_name %> */
'use strict';
module.exports = function(grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //watch
        watch: {
            bower: {
                // files: ['bower.json'],
                // tasks: ['bowerInstall']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            // scss: {
            //     files: '../src/scss/**/*.scss',
            //     tasks: ['sass:dev', 'autoprefixer', 'notify:sassDone'],
            //     // tasks: ['sass:dev', 'autoprefixer', 'notify:sassDone'],
            //     options: {
            //         livereload: true,
            //     },
            // },

            compass: {
                files: ['../src/scss/**/*.{scss,sass}'],
                tasks: ['compass', 'autoprefixer', 'notify:sassDone']
            },

            js: {
                files: '../src/js/**/*.js',
                tasks: ['copy:js', 'min'],
                options: {
                    livereload: true,
                },
            },
            php: {
                files: '../../**/*.php',
                options: {
                    livereload: true,
                },
            },
            images: {
                files: '../src/images/**/*.{png,jpg,gif,svg}',
                tasks: ['copy:images'],
                options: {
                    livereload: true,
                },
            },
            fonts: {
                files: '../src/fonts/**/*',
                tasks: ['copy:fonts'],
                options: {
                    livereload: true,
                },
            },
        },
        // end watch


        compass: {
            dist: {
                options: {
                    config: 'config.rb',
                    sassDir: '../src/scss/',
                    cssDir: '../../static/css/',
                    javascriptsDir: '../../static/js/',
                    imagesDir: '../../static/images/',
                    fontsDir: '../../static/fonts/',
                    outputStyle: 'compressed',
                    noLineComments: true

                }
            }
        },

        //sass
        sass: { // Task
            dev: { // Target
                options: { // Target options
                    style: 'expanded',
                    //sourcemap: true,
                },
                files: { // Dictionary of files
                    '../../static/css/style.css': '../src/scss/style.scss'
                }
            },
            dist: { // Target
                options: { // Target options
                    style: 'expanded',
                },
                files: { // Dictionary of files
                    '../../static/css/style.css': '../src/scss/style.scss'
                }
            }
        },
        // end sass

        //auto prefixer
        autoprefixer: {
            options: {
                browsers: ['last 3 version', 'ie 8', 'ie 9']
            },
            singleFile: {
                options: {
                    // Target-specific options go here.
                },
                src: '../../static/css/style.css',
                dest: '../../static/css/style.css'
            }
        },
        //end auto prefixer
        //css min
        cssmin: {
            minify: {
                expand: true,
                cwd: '../../static/css',
                src: ['*.css', '!*.min.css'],
                dest: '../../static/css',
                ext: '.css',
                report: 'gzip'
            }
        },
        // end ccs min


        // Automatically inject Bower components into the HTML file
        // bowerInstall: {
        //     php: {
        //         src: ['../../{,*/}*.php'],
        //         exclude: ['bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap.js', 'bower_components/modernizr/modernizr.js', 'jquery.js'],
        //         fileTypes: {
        //             html: {
        //                 replace: {
        //                     js: '<script src="/wp-content/themes/<%= site_nameSpace %>/{{filePath}}"></script>'
        //                 }
        //             }
        //         }
        //     },

        //     scss: {
        //         src: ['../src/scss/{,*/}*.{scss,sass}'],
        //         fileTypes: {
        //             html: {
        //                 replace: {
        //                     css: '<link rel="stylesheet" href="/wp-content/themes/<%= site_nameSpace %>/{{filePath}}" type="text/css" media="all">'
        //                 }
        //             }
        //         }
        //     }
        // },

        //notify
        notify: {
            done: {
                options: {
                    title: 'Done!', // optional
                    message: 'Whatever you were doing is done!', //required
                }
            },
            distStart: {
                options: {
                    title: 'Prepping for distribution!', // optional
                    message: 'Get ready for the awesome...', //required
                }
            },
            distDone: {
                options: {
                    title: 'All packaged up!', // optional
                    message: '<%= site_name %> is ready to be distributed', //needed escaping!
                }
            },
            sassDone: {
                options: {
                    title: 'Ta-da!!!', // optional
                    message: 'Sass has compiled successfully', //required
                }
            },
            initStart: {
                options: {
                    title: 'Initializing project', // optional
                    message: '...', //required
                }
            },
            initDone: {
                options: {
                    title: 'Initialization done!', // optional
                    message: 'Run : "grunt watch" and get to work!', //required
                }
            },
        },
        //endnotify
        //Bower copy
        bowercopy: {
            libs: {
                options: {
                    destPrefix: '../../static/js/libs'
                },
                files: {
                    // 'modernizr.js': 'modernizr/modernizr.js',
                    'jquery.js': 'jquery/dist/jquery.min.js',
                }
            }
        },

        // Generates a custom Modernizr build that includes only the tests you
        // reference in your app
        modernizr: {
            dist: {
                devFile: '../bower_components/modernizr/modernizr.js',
                outputFile: '../../static/js/libs/modernizr.js',
                files: {
                    src: [
                        '../../static/js/{,*/}*.js',
                        '../../static/css/{,*/}*.css',
                        '!../../static/js/libs/*'
                    ]
                },
                'extra': {
                    'animation': true,
                    'shiv': true,
                    'svg': true,
                    'touch': true,
                    'load': true
                },
                uglify: true
            }
        },


        //end Bower copy
        //copy
        copy: {
            js: {
                files: [
                    // includes files within path
                    {
                        expand: true,
                        cwd: '../src/js',
                        src: ['**/*.js'],
                        dest: '../../static/js',
                        filter: 'isFile'
                    },
                ]
            },
            images: {
                files: [
                    // includes files within path
                    {
                        expand: true,
                        cwd: '../src/images',
                        src: ['**/*.{png,jpg,gif,svg}'],
                        dest: '../../static/images',
                        filter: 'isFile'
                    },
                ]
            },
            fonts: {
                files: [
                    // includes files within path
                    {
                        expand: true,
                        cwd: '../src/fonts',
                        src: ['**/*'],
                        dest: '../../static/fonts',
                        filter: 'isFile'
                    },
                ]
            },
            production: {
                // files: [{
                expand: true,
                flatten: true,
                cwd: '../../',
                dest: '../../production/',
                src: [
                    // '**/static/**/*',
                    'footer.php',
                    'header.php',
                    '!**/production/**',
                    '!**/dev/**'
                ]
                // }]
            }
        },
        //end copy

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp'
                    ]
                }]
            }
            // ,server: '.tmp'
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            options: {
                root: '../../../../../',
                dest: '../../../../../',

            },
            html: ['../../header.php', '../../footer.php']
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            html: ['../../production/header.php', '../../production/footer.php']
        },

        //Image min
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    src: ['../../static/images/**/*.{png,jpg,gif}'],
                    dest: '../../static/images'
                }]
            }
        },
        //end image min

        // make a zipfile
        compress: {
            production: {
                options: {
                    archive: '../../production/<%= site_nameSpace %>.zip'
                },
                files: [{
                        src: ['../../**/*', '!../../header.php', '!../../footer.php', '!../../dev/**', '!../../production/**']
                    }, {
                        expand: true,
                        cwd: '.tmp/',
                        src: ['*.php'],
                        dest: '/',
                        filter: 'isFile'
                    }, // includes files in path

                ]
            }
        }
        // end make a zipfile


    }); //end grunt package configs



    // Start BrowserSync via the API
    var bs;
    grunt.registerTask('bs-start', function() {
        var browserSync = require('browser-sync');
        bs = browserSync.init([
            '../../static/css/**/*.css',
            '../../static/js/app.min.js',
            // '../../static/js/**/*.js',
            '../../*.php'
        ], {
            logLevel: 'info',
            notify: true,
            reloadDelay: 1000,
            injectChanges: true,
            debugInfo: true,
            proxy: '<%= site_devUrl %>',
            browser: ["google chrome canary"],
            watchTask: true, // < VERY important
            ghostMode: {
                clicks: true,
                location: true,
                links: true,
                forms: true,
                scroll: true
            }
        });
    });

    // Fire file-change events manually for greater control
    grunt.registerTask('bs-reload', function() {
        bs.events.emit('file:changed', {
            path: '../../static/css/style.css'
        });

    });




    //Asset pipelines
    grunt.registerTask('prepJS', ['copy:js']);
    grunt.registerTask('prepStyles', ['compass', 'autoprefixer', 'cssmin']);
    grunt.registerTask('prepImages', ['copy:images', 'imagemin:dynamic']);
    grunt.registerTask('prepFonts', ['copy:fonts']);
    grunt.registerTask('browser', ['browserSync', 'watch']);
    grunt.registerTask('copyHeadFooter', ['copy:production', 'useminPrepare', 'usemin']);
    grunt.registerTask('min', ['clean', 'useminPrepare', 'concat', 'uglify', 'autoprefixer', 'cssmin', 'usemin']);
    grunt.registerTask('minify', ['clean', 'useminPrepare', 'concat', 'uglify', 'autoprefixer', 'cssmin', 'copy:production', 'usemin']);


    //RUN ON START
    grunt.registerTask('init', ['notify:initStart', 'bowercopy', 'copy:js', 'copy:images', 'copy:fonts', 'compass:dist', 'notify:initDone']);

    //RUN FOR PRODUCTION 
    grunt.registerTask('prod', ['notify:distStart', 'bowercopy', 'prepJS', 'prepImages', 'prepStyles', 'prepFonts', 'modernizr', 'copyHeadFooter', 'compress:production', 'clean', 'notify:distDone']);

    //DEFAULT
    // grunt.registerTask('default', [
    //     'browser'
    // ]);
    grunt.registerTask('default', ['bs-start', 'watch']);
};