export const vImgSrc = (name) => {
  return new URL(`/src/assets/img/${name}`, import.meta.url).href
}