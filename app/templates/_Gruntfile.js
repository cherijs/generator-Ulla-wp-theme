/* Generated for <%= site_name %> */

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        watch: {
            options: {
                spawn: false // Important, don't remove this!
            },
            compass: {
                files: ['../src/scss/**/*.{scss,sass}'],
                tasks: ['compass', 'autoprefixer', 'bsReload:css']
                //tasks: ['compass', 'autoprefixer', 'bsReload:css']
            },

            js: {
                files: '../src/js/**/*.js',
                tasks: ['copy:js', 'min', 'bsReload:all']
            },
            php: {
                files: '../../*.php',
                tasks: ['bsReload:all']
            },
            // images: {
            //     files: '../src/images/**/*.{png,jpg,gif,svg}',
            //     tasks: ['copy:images', 'bsReload:all'],

            // },
            // fonts: {
            //     files: '../src/fonts/**/*',
            //     tasks: ['copy:fonts', 'bsReload:all'],

            // },
        },

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

        sass: {
            dev: {
                files: {
                    "../../static/css/style.css": "../src/scss/style.scss"
                }
            }
        },


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
        },

        browserSync: {
            default_options: {
                bsFiles: {
                    src: [
                        "../../static/css/style.css"
                    ]
                },
                options: {
                    browser: ["google chrome canary"],
                    watchTask: true,
                    proxy: "<%= site_devUrl %>",
                    rewriteRules: [{
                        match: /\/\/localhost/g,
                        fn: function (match) {
                            return 'http://localhost';
                        }
                    }]
                }
            }
        },
        bsReload: {
            css: {
                reload: "../../static/css/style.css"
            },
            all: {
                reload: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

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


    grunt.registerTask('default', ['browserSync', 'watch']);
};