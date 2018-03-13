// Author : Chathu Vishwajith
// Licence : MIT License
// http://opensource.org/licenses/MIT

const gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('serve', function () {
    nodemon({
        script: 'index.js',
        ext: 'js',
        env: {
            NODE_ENV: "dev",
            PORT: 9080,
            JWT_TOKEN_EXPIRE_TIME: '1h',
            MONGO_SEED: true
        },
        ignore: ['./node_modules/**']
    })
});