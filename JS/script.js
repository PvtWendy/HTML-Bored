let isRunning = false;
function showMobileNav() {
  if (isRunning == false) {
    if (
      document
        .getElementById("HeaderRedirects")
        .classList.contains("HeaderRedirectsShow")
    ) {
      document
        .getElementById("HeaderRedirects")
        .classList.remove("HeaderRedirectsShow");
        isRunning = true
      setTimeout(() => {
        document.getElementById("HeaderRedirects").style.display = "none";
        isRunning = false
      }, 300);
    } else {
      document.getElementById("HeaderRedirects").style.display = "flex";
      isRunning = true
      setTimeout(() => {
        document
          .getElementById("HeaderRedirects")
          .classList.add("HeaderRedirectsShow");
          isRunning = false
      }, 300);
    }
  }
}
