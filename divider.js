const dividerDesktop = document.querySelector("#divider-desktop");
const dividerMobile = document.querySelector("#divider-mobile");

export function divider(isMobile) {
  dividerDesktop.style.display = isMobile ? "none" : "flex";
  dividerMobile.style.display = isMobile ? "flex" : "none";
}

divider()