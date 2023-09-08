const body = document.querySelector("body")
const sidebar = body.querySelector(".sidebar")
const arrow = body.querySelector(".arrow")
const searchBtn = body.querySelector(".search-box")
const modeSwitch = body.querySelector(".toggle-switch")
const modeText = body.querySelector(".mode-text") 
const sun = document.querySelector('.sun')
const moon = document.querySelector('.moon')

modeSwitch.addEventListener("click", () => {
    body.classList.toggle('dark')
    console.log('balls')

    if(body.classList.contains('dark')){
        modeText.textContent = "Light Mode"
        sun.style.opacity = 1;
        moon.style.opacity = 0;
    } else{
        modeText.textContent = "Dark Mode"
        moon.style.opacity = 1;
        sun.style.opacity = 0;
    }
})

arrow.addEventListener("click", () => {
    sidebar.classList.toggle('close')
    console.log('balls')
})


searchBtn.addEventListener("click", () => {
    sidebar.classList.remove('close')
    console.log('balls')
})