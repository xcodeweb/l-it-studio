// Pref
const devindex = mhtml; // mhtml, mpug
const devstyle = scss;
// End pref

// main
import gulp from "gulp";
import { path } from "./res/g_config/path.js";
import { plugins } from "./res/g_config/plugins.js";
import { server } from "./res/g_tasks/server.js";
// tasks
import * as resets from "./res/g_tasks/del.js";
import { copy, copyv } from "./res/g_tasks/copy.js";
import { mhtml } from "./res/g_tasks/html.js";
import { mpug } from "./res/g_tasks/html.js";
import { scss, less } from "./res/g_tasks/styles.js";
import { scripts } from "./res/g_tasks/scripts.js";
import { images } from "./res/g_tasks/imgs.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./res/g_tasks/fonts.js";
import { svgSprite, svgSpriteBuild } from "./res/g_tasks/sprites.js";

// Globs
global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path,
  gulp,
  plugins
};

function overwatch() {
  if (devindex == mhtml) {
    gulp.watch(app.path.watch.html, gulp.series(resets.rh, devindex));
  } else if (devindex == mpug) {
    gulp.watch(app.path.watch.pug, gulp.series(resets.rh, devindex));
  }
  if (devstyle == scss) {
    gulp.watch(app.path.watch.scss, gulp.series(resets.rc, devstyle));
  } else if (devstyle == less) {
    gulp.watch(app.path.watch.less, gulp.series(resets.rc, devstyle));
  }
  gulp.watch(app.path.watch.js, gulp.series(resets.rjs, scripts));
  gulp.watch(app.path.watch.imgs, gulp.series(resets.rimg, images));
  gulp.watch(app.path.watch.svgs, gulp.series(resets.rsvg, svgSprite));
  gulp.watch(app.path.watch.vid, copyv);
}

const fonts = gulp.series(copy, otfToTtf, ttfToWoff, fontsStyle);
const vid = copyv;
const resetGulp = gulp.series(resets.rh, resets.rc, resets.rjs, resets.rimg, resets.rsvg);
const baseGulp = gulp.parallel(devindex, devstyle, scripts, images, svgSprite);
const dev = gulp.series(resetGulp, baseGulp, gulp.parallel(overwatch, server));
const build = gulp.series(resetGulp, baseGulp, resets.rsvgb, svgSpriteBuild);

gulp.task("default", dev);

//exports

export { dev };
export { build };
export { resetGulp };
export { svgSprite };
export { fonts };
export { vid };
