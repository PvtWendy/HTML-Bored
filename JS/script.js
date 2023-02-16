function showMobileNav() {
    if (document.getElementById("HeaderRedirects").classList.contains("HeaderRedirectsShow")) {
        document.getElementById("HeaderRedirects").classList.remove("HeaderRedirectsShow")
        setTimeout(() => {
            document.getElementById("HeaderRedirects").classList.remove("Show")
            document.getElementById("HeaderRedirects").classList.add("Hide")
        }, 300);
    } else{
        document.getElementById("HeaderRedirects").classList.remove("Hide")
        setTimeout(() => {
            document.getElementById("HeaderRedirects").classList.add("Show")
            document.getElementById("HeaderRedirects").classList.add("HeaderRedirectsShow")
        }, 300);
        
    }
}