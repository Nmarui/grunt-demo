module.exports = function(grunt) {
    grunt.initConfig({
         clean: {
             foo1: {
                 src: ['dist/*']
             }
         },
         less: {
             css: {
                 options: {
                     compress: true,
                     strictMath: true
                 },
                 files: {
                     'dist/build.css': 'theme/build.less'
                 }
             }
         }
      });
     grunt.loadNpmTasks('grunt-contrib-less');
     grunt.loadNpmTasks('grunt-contrib-clean');
 
    grunt.registerTask('default', [
        'clean',
        'less'
    ]);
}