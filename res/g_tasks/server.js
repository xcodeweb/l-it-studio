export const server = (done) => {
  app.plugins.browsersync.init({
    server: {
      baseDir: `${app.path.build.html}`
    },
    notify: false,
    port: 3000,
    online: false,
    // browser: {
    //   app: [
    //     "chrome",
    //     '--incognito'
    //   ]
    // }
  });
}