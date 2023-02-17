let isRunning = false;
function showMobileNav() {
  if (isRunning == false) {
    if (
      document.getElementById("HeaderRedirects").classList.contains("HeaderRedirectsShow")
    ) {
      document.getElementById("HeaderRedirects").classList.remove("HeaderRedirectsShow");
      isRunning = true;
      setTimeout(() => {
        document.getElementById("HeaderRedirects").classList.remove("Show");
        document.getElementById("HeaderRedirects").classList.add("Hide");
        isRunning = false;
      }, 300);
    } else {
      document.getElementById("HeaderRedirects").classList.remove("Hide");
      isRunning = true;
      setTimeout(() => {
        document.getElementById("HeaderRedirects").classList.add("Show");
        document.getElementById("HeaderRedirects").classList.add("HeaderRedirectsShow");
        isRunning = false;
      }, 300);
    }
  }
}
