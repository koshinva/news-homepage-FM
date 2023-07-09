import ghPages from 'gulp-gh-pages';

export const ghpages = () => {
  return app.gulp.src(app.path.build.all).pipe(ghPages());
};
