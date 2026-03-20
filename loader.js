const loader = document.querySelector(".loader");
const overlay = document.querySelector(".overlay")

export function setLoader(isLoader) {
  loader.style.display = isLoader ? "flex" : "none";
  overlay.style.display = isLoader ? "flex" : "none";
}
