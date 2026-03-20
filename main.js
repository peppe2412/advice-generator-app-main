import { setLoader } from "./loader.js";

const h1 = document.querySelector("h1");
const buttonRegenerate = document.querySelector("#button-regenerate");
const adviceId = document.querySelector("#advice-id")

async function getApi() {
  try {
    setLoader(true)
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    adviceId.textContent = `${data.slip.id}`
    h1.textContent = `"${data.slip.advice}"`;
  } catch (error) {
    console.error(error);
  }finally{
    setLoader(false)
  }
}

buttonRegenerate.addEventListener("click", getApi);

getApi();