const h1 = document.querySelector("h1");
const loader = document.querySelector(".loader");

export function setLoader(isLoader) {
  h1.style.display = isLoader ? "none" : "flex";
  loader.style.display = isLoader ? "flex" : "none";
}
