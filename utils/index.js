export const getImage = (url) => {
  if (url.indexOf("http") !== -1) {
    return url;
  } else {
    return `https:${url}`;
  }
};
export const navOptionHandler = () => ({
  headerShown: false,
});

export const getImageDetail = (url) => {
  return `https://next-comicszzz.vercel.app/api/handler?url=${url}`;
};
