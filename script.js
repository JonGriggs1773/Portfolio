

const showDetails = (element) => {
    let text = element.innerText
    console.log(text)
    switch(text) {
        case "Front-End":
            element.innerHTML = "<p>HTML, CSS and Javascript</p>"
            break
        case "Back-End":
            element.innerHTML = "<p>Python, Java and MERN</p>"
            break
        case "Databases":
            element.innerHTML = "<p>MySQL and MongoDB</p>"
            break
        case "Frameworks/\nLibraries":
            element.innerHTML = "<p style='font-size: small; padding: 10px;'>Flask, SpringBoot, libGDX, Jinja2, React.js, Express.js, Chart.js, Three.js, Bootstrap, Mongoose</p>"
            break
        case "Tools":
            element.innerHTML = "<p style='font-size: small; padding: 10px;'>VSCode, Eclipse, Vite, Maven, Postman, and Figma</p>"
            break
        case "HTML, CSS and Javascript":
            element.innerHTML = "<h3>Front-End</h3>"
            break
        case "Python, Java and MERN":
            element.innerHTML = "<h3>Back-End</h3>"
            break
        case "MySQL and MongoDB":
            element.innerHTML = "<h3>Databases</h3>"
            break
        case "Flask, SpringBoot, libGDX, Jinja2, React.js, Express.js, Chart.js, Three.js, Bootstrap, Mongoose":
            element.innerHTML = "<h3>Frameworks/</h3><h3>Libraries</h3>"
            break
        case "VSCode, Eclipse, Vite, Maven, Postman, and Figma":
            element.innerHTML = "<h3>Tools</h3>"
    }
}


const shadowEffectOn = (element) => {
    console.log(element.style)
    element.style.boxShadow = "0px 0px 5px 5px black"
}

const shadowEffectOff = (element) => {
    element.style.boxShadow = ""
}