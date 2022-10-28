import fileinclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNum from "gulp-version-number";
import pug from "gulp-pug";

export const mhtml = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(fileinclude())
    .pipe(app.plugins.replace(/@img\//g, "img/"))
    .pipe(app.plugins.replace(/@vid\//g, "video/"))
    .pipe(webpHtmlNosvg())
    .pipe(
      versionNum({
        value: "%DT%",
        append: {
          key: "_v",
          cover: 0,
          to: ["css", "js"]
        }
        // 'output': {
        //   'file': 'gulp/version.json'
        // }
      })
    )
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream());
};

export const mpug = () => {
  return app.gulp
    .src(app.path.src.pug)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "PUG",
          message: "Error: <%= error.message %>"
        })
      )
    )
    .pipe(
      pug({
        pretty: true,
        verbose: true
      })
    )
    .pipe(app.plugins.replace(/@img\//g, "img/"))
    .pipe(app.plugins.replace(/@vid\//g, "video/"))
    .pipe(webpHtmlNosvg())
    .pipe(
      versionNum({
        value: "%DT%",
        append: {
          key: "_v",
          cover: 0,
          to: ["css", "js"]
        }
        // 'output': {
        //   'file': 'gulp/version.json'
        // }
      })
    )
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream());
};
