const saveDm = localStorage.getItem("nocturneview")
const moonShadow = document.getElementById("darkMode");
const nightLight = document.getElementById("nightLight");
const html = document.querySelector("html")

function darkMode(){
    nightLight.addEventListener('click', () => {
    html.classList.toggle("dark-mode")

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

if(saveDm){
    html.classList.add("dark-mode")
    moonShadow.src = "../../assets/img/sun.png"
}