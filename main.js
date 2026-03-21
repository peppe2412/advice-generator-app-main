import { setLoader } from "./loader.js";
import { divider } from "./divider.js";

const h1 = document.querySelector("h1");
const buttonRegenerate = document.querySelector("#button-regenerate");
const adviceId = document.querySelector("#advice-id");

async function getApi() {
  try {
    setLoader(true);
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    appendData(data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoader(false);
  }
}

buttonRegenerate.addEventListener("click", getApi);

getApi();

function appendData(data) {
  adviceId.textContent = data.slip.id;
  h1.textContent = `"${data.slip.advice}"`;
}

window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    divider(true);
  } else {
    divider(false);
  }
});