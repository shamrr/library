import ghPages from "gulp-gh-pages";

export const deploy = () => {
    return app.gulp.src.deploy
        .pipe(ghPages());
}