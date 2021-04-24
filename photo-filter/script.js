











// fullscreen

document.querySelector('.fullscreen').addEventListener('click', toogleScreen);

function toogleScreen() {
    if (document.fullscreenElement == null) {
        document.documentElement.requestFullscreen();
    }
    else {
        if (document.fullscreenEnabled == true) {
            document.exitFullscreen();
        }
    }    
}