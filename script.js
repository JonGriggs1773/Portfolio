
// Variable used for showDetails function
const contentMap = {
    "Front-End": "<p>HTML, CSS and Javascript</p>",
    "Back-End": "<p>Python, Java and MERN</p>",
    "Databases": "<p>MySQL and MongoDB</p>",
    "Frameworks/\nLibraries": "<p style='font-size: small; padding: 10px;'>Flask, SpringBoot, libGDX, Jinja2, React.js, Express.js, Chart.js, Three.js, Bootstrap, Mongoose</p>",
    "Tools": "<p style='font-size: small; padding: 10px;'>VSCode, Eclipse, Vite, Maven, Postman, and Figma</p>",
    "HTML, CSS and Javascript": "<h3>Front-End</h3>",
    "Python, Java and MERN": "<h3>Back-End</h3>",
    "MySQL and MongoDB": "<h3>Databases</h3>",
    "Flask, SpringBoot, libGDX, Jinja2, React.js, Express.js, Chart.js, Three.js, Bootstrap, Mongoose": "<h3>Frameworks/</h3><h3>Libraries</h3>",
    "VSCode, Eclipse, Vite, Maven, Postman, and Figma": "<h3>Tools</h3>"
}

// Variable needed for the custom modal function
let beenCalled = false

const showDetails = (element) => {
    let text = element.innerText
    element.innerHTML = contentMap[text] || text
}


const shadowEffectOn = (element) => {
    console.log(element.style)
    element.style.boxShadow = "0px 0px 5px 5px black"
}

const shadowEffectOff = (element) => {
    element.style.boxShadow = ""
}

const showAlert = () => {
    document.getElementById("custom-modal").style.display = "block"
}

const closeAlert = () => {
    document.getElementById("custom-modal").style.display = "none"
}


const handleAlertBasedOnScrollDistance = () => {
    let scrollPosition = window.scrollY || document.documentElement.scrollTop
    if (scrollPosition > 450 && beenCalled == false) {
        showAlert()
        beenCalled = true
    }
}

window.addEventListener('scroll', handleAlertBasedOnScrollDistance)
