import del from "del";

export const rh = () => {
  return del(app.path.clean.html);
};

export const rc = () => {
  return del(app.path.clean.css);
};

export const rjs = () => {
  return del(app.path.clean.js);
};

export const rimg = () => {
  return del(app.path.clean.imgs);
};

export const rsvg = () => {
  return del(app.path.clean.svgs);
};

export const rsvgb = () => {
  return del(`${app.path.build.imgs}/stack`);
};