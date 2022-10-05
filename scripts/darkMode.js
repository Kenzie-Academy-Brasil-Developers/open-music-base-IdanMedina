function darkMode(){
    const moonShadow = document.getElementById("darkMode");
    const nightLight = document.getElementById("nightLight");
    const html = document.querySelector("html")

    nightLight.addEventListener('click', () => {
    html.classList.toggle("dark-mode")

    const saveDm = localStorage.getItem("nocturneview")
    if(!saveDm){
        localStorage.setItem('nocturneview', true)
    } 
    if(saveDm){localStorage.removeItem('nocturneview')}

    if(html.classList.contains("dark-mode")) {
        moonShadow.src = "../../assets/img/sun.png"
    } else {
        moonShadow.src = "../../assets/img/moon.png"
    }

    }
    )

   
}
darkMode()