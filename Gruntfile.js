module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.initConfig({
  responsive_images: {
    dev: {
      options: {
        engine: 'im',
        sizes: [{
          suffix: '_small',
          width: 800,
          quality: 30

        }]
      },

      files: [{
        expand: true,
        src: ['*.{gif,jpg,png}'],
        cwd: 'images_src/',
        dest: 'images/'
      }]
    }
  },

  cssmin: {
    target: {
      files: [{
        expand: true,
        cwd: 'css/',
        src: ['*.css', '!*.min.css'],
        dest: 'css/min/',
        ext: '.min.css'
    }]
  }
}
});
  grunt.register.Task('default',[
    'responsive_images',
    'cssmin'
  ])
};
