function showMobileNav() {
    if (document.getElementById("HeaderRedirects").classList.contains("HeaderRedirectsShow")) {
        document.getElementById("HeaderRedirects").classList.remove("HeaderRedirectsShow")
    } else{
        document.getElementById("HeaderRedirects").classList.add("HeaderRedirectsShow")
    }
}