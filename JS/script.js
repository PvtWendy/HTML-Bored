let alreadyShown = false
function showMobileNav() {
    if (alreadyShown == false) {
        console.log("got to if")
        document.getElementById("HeaderRedirects").style.animationDirection = "normal"
        document.getElementById("HeaderRedirects").style.display = "flex"
        
    } else{
        console.log("got to else")
        document.getElementById("HeaderRedirects").style.animationDirection = "reverse"
        document.getElementById("HeaderRedirects").style.animationPlayState = "running"
        setTimeout(() => {
            document.getElementById("HeaderRedirects").style.display = "none"
        }, 1000);

    }    
    alreadyShown = !alreadyShown
}