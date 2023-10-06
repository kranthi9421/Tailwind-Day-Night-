let moonIc = document.querySelector('.moon')
let sunIc = document.querySelector('.sun')

const userTheme = localStorage.getItem("theme")
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches


const iconToggle = ()=>{
    moonIc.classList.toggle('display-none')
    sunIc.classList.toggle('display-none')
}

const themeCheck = ()=>{
    if(userTheme === "dark" || (!userTheme && systemTheme)){
        document.documentElement.classList.add('dark')
        moonIc.classList.add('display-none')
        return;
    }
   sunIc.classList.add('display-none')
}

const themeSwitch = ()=>{
    if(document.documentElement.classList.contains("dark")){
        document.documentElement.classList.remove('dark')
        localStorage.setItem("theme", "light")
        iconToggle()
        return;
    }
    document.documentElement.classList.add("dark")
    localStorage.setItem("theme","dark")
    iconToggle()
}

sunIc.addEventListener("click",()=>{
    themeSwitch()
})

moonIc.addEventListener("click",()=>{
    themeSwitch()
})
themeCheck()