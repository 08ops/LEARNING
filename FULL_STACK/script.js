function navigate(event, path) {
    event.preventDefault()
    window.history.pushState({}, "", path)
    renderPage(path)
}

function renderPage(path) {
    let app = document.getElementById("app")

    if (path === "/") {
        app.innerHTML = "<h1>Home Page</h1>"
    } 
    else if (path === "/about") {
        app.innerHTML = "<h1>About Page</h1>"
    } 
    else if (path === "/projects") {
        app.innerHTML = "<h1>Projects Page</h1>"
    } 
    else if (path === "/contact") {
        app.innerHTML = "<h1>Contact Page</h1>"
    } 
    else {
        app.innerHTML = "<h1>404 Not Found</h1>"
    }
}

// Handle back/forward buttons
window.onpopstate = () => {
    renderPage(window.location.pathname)
}

// Load correct page on refresh
renderPage(window.location.pathname)