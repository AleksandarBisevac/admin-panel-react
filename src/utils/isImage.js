const isImage = (file) => {
  if (file && file.type === "image/png") return file;
};

export default isImage;
