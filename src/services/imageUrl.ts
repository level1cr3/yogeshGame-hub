// it would be nice to provide. width and height as an argument. But we cannot do that Because backend is not setup in
// that way.
const getCroppedImageUrl = (url: string) => {
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return `${url.slice(0, index)}crop/600/400/${url.slice(index)}`;
};

export default getCroppedImageUrl;
