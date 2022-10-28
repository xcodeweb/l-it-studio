import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./docs`;
const srcFolder = `./src`;

export const path = {
  build: {
    html: `${buildFolder}`,
    css: `${buildFolder}/css`,
    js: `${buildFolder}/js`,
    imgs: `${buildFolder}/img`,
    fonts: `${buildFolder}/fonts`,
    vid: `${buildFolder}/video`
  },
  src: {
    html: `${srcFolder}/*.html`,
    pug: `${srcFolder}/*.pug`,
    scss: `${srcFolder}/css/*.scss`,
    less: `${srcFolder}/css/*.less`,
    js: `${srcFolder}/js/app.js`,
    imgs: [`${srcFolder}/img/**/*.{jpeg,jpg,png,gif,webp,svg}`, `!${srcFolder}/img/UI/*.*`],
    svgs: `${srcFolder}/img/UI/*.svg`,
    fonts: `${srcFolder}/fonts`,
    vid: `${srcFolder}/video/*.mp4`
  },
  watch: {
    html: `${srcFolder}/**/*.html`,
    pug: `${srcFolder}/**/*.pug`,
    scss: [`${srcFolder}/css/*.scss`, `${srcFolder}/dev-scss/**/*.scss`],
    less: [`${srcFolder}/css/*.less`, `${srcFolder}/dev-less/**/*.less`],
    js: `${srcFolder}/js/**/*.js`,
    imgs: [`${srcFolder}/img/**/*.{jpeg,jpg,png,gif,webp,svg,ico}`, `!${srcFolder}/img/UI`],
    svgs: `${srcFolder}/img/UI/*.svg`,
    vid: `${srcFolder}/video/*.mp4`
  },
  clean: {
    html: `${buildFolder}/*.html`,
    css: `${buildFolder}/css/*.css`,
    js: `${buildFolder}/js/*.js`,
    imgs: [`${buildFolder}/img/**/*.*`, `!${buildFolder}/img/sprite/*.svg`, `!${buildFolder}/img/stack/*.html`],
    svgs: `${buildFolder}/img/sprites, ${buildFolder}/img/stack`
  },
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``
};
