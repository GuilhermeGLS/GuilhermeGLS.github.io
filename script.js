const dark = document.getElementById('botao') 

dark.addEventListener('click', darkMode)

function darkMode(){
    const darkMode = document.getElementById('b') //b de Body
    if(darkMode.getAttribute('data-bs-theme') === "dark"){
        darkMode.removeAttribute('data-bs-theme')
    }else{
        darkMode.setAttribute('data-bs-theme', "dark")
    }
}



