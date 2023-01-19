const hamburger = document.querySelector(".hamburger")
const body = document.querySelector("body")
const homeLink = document.getElementById("home-link")
const featuresLink = document.getElementById("features-link")
const servicesLink = document.getElementById("services-link")
const homePage = document.getElementById("home-page")
const featuresPage = document.getElementById("features-page")
const servicesPage = document.getElementById("services-page")
const page = document.getElementById("page-holder")

function dropmenu(){
    // alert("Confirmed")
    body.classList.toggle("menu-drop")
}

function removeHighlights(){
    page.classList.remove("highlight-home")
    page.classList.remove("highlight-features")
    page.classList.remove("highlight-services")
}

function removeHighlight(){
}

function homeLinkClick(){
    // body.classList.toggle("menu-drop")
    removeHighlights()
    page.classList.add("highlight-home")
    page.classList.add("home-top")
    page.classList.remove("features-top")
    page.classList.remove("services-top")
    body.classList.add("home-theme")
    body.classList.remove("features-theme")
    body.classList.remove("services-theme")
    // dropmenu()
    homeLink.style.opacity = "1"
    featuresLink.style.opacity = "0.6"
    servicesLink.style.opacity = "0.6"
}

function featuresLinkClick(){
    // body.classList.toggle("menu-drop")
    removeHighlights()
    page.classList.add("highlight-features")
    page.classList.add("features-top")
    page.classList.remove("services-top")
    page.classList.remove("home-top")
    homeLink.style.opacity = "0.6"
    featuresLink.style.opacity = "1"
    servicesLink.style.opacity = "0.6"
    body.classList.add("features-theme")
    body.classList.remove("services-theme")
    body.classList.remove("home-theme")
    // dropmenu()
}

function servicesLinkClick(){
    // body.classList.toggle("menu-drop")
    removeHighlights()
    page.classList.add("highlight-services")
    page.classList.add("services-top")
    page.classList.remove("features-top")
    page.classList.remove("home-top")
    body.classList.add("services-theme")
    body.classList.remove("features-theme")
    body.classList.remove("home-theme")
    homeLink.style.opacity = "0.6"
    featuresLink.style.opacity = "0.6"
    servicesLink.style.opacity = "1"
    // dropmenu()
}

homeLink.addEventListener("click", homeLinkClick)
featuresLink.addEventListener("click", featuresLinkClick)
servicesLink.addEventListener("click", servicesLinkClick)

homePage.addEventListener("click", homeLinkClick)
featuresPage.addEventListener("click", featuresLinkClick)
servicesPage.addEventListener("click", servicesLinkClick)

function homeLinkOver(){
    page.classList.add("highlight-home")
    page.classList.remove("highlight-features")
    page.classList.remove("highlight-services")
}

function featuresLinkOver(){
    page.classList.add("highlight-features")
    page.classList.remove("highlight-services")
    page.classList.remove("highlight-home")
}

function servicesLinkOver(){
    page.classList.add("highlight-services")
    page.classList.remove("highlight-home")
    page.classList.remove("highlight-features")
}

homeLink.addEventListener("mouseover", homeLinkOver)
featuresLink.addEventListener("mouseover", featuresLinkOver)
servicesLink.addEventListener("mouseover", servicesLinkOver)

function preloader(){
    body.style.overflowY = "scroll"
    document.querySelector(".preloader").classList.add("load-complete")
}

window.addEventListener("load", preloader)