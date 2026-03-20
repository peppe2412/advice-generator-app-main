import { setLoader } from "./loader.js";

const h1 = document.querySelector("h1");
const buttonRegenerate = document.querySelector("#button-regenerate");

async function getApi() {
  try {
    setLoader(true)
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    h1.textContent = `"${data.slip.advice}"`;
  } catch (error) {
    console.error(error);
  }finally{
    setLoader(false)
  }
}

buttonRegenerate.addEventListener("click", getApi);

getApi();
