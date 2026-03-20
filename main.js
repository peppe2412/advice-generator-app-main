document.addEventListener("DOMContentLoaded", () => {
  const h1 = document.querySelector("h1");
  const buttonRegenerate = document.querySelector("#button-regenerate")

  async function getApi() {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      h1.textContent = `${data.slip.advice}`;
    } catch (error) {
      console.error(error);
    }
  }

  buttonRegenerate.addEventListener("click", getApi)

  getApi();
});
