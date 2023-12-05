import { generateHomePageContent } from './homePage.js';
import { generateMenuContent } from './menuPage.js';
import { generateContactContent } from './contactPage.js';

window.onload = function() {
const header = document.createElement("header");
const footer = document.createElement("footer");
//const content = document.createElement("div");
const content = document.getElementById("content")

//Add classnames
content.classList.add("mainContent");
header.classList.add("tabSection");
footer.classList.add("theFooter");
//content.setAttribute("id","content");

//create tabs and add the the header
const homeTab = document.createElement("div");
const menuTab = document.createElement("div");
const contactTab = document.createElement("div");

homeTab.innerHTML = "HOME";
menuTab.innerHTML = "MENU";
contactTab.innerHTML = "CONTACT";

homeTab.classList.add("contentTabs");
menuTab.classList.add("contentTabs");
contactTab.classList.add("contentTabs");

homeTab.setAttribute("id", "home");
menuTab.setAttribute("id", "menu");
contactTab.setAttribute("id", "contact");

header.appendChild(homeTab);
header.appendChild(menuTab);
header.appendChild(contactTab);

footer.innerHTML='<p>&copy; 2023 Hlulani DC</p>'

const theBody = document.body;

theBody.appendChild(header);
theBody.appendChild(content);
theBody.appendChild(footer);

generateHomePageContent();

function openTab(e){
    let tabId = e.target.id;
    if (tabId === "home"){generateHomePageContent();}
    if (tabId === "menu"){generateMenuContent();}
    if (tabId === "contact"){generateContactContent();}
}

const selectTabs = document.querySelectorAll(".contentTabs"); 
selectTabs.forEach(tab => tab.addEventListener("click",openTab));

 //let selectTab = Array.from(selectTabs);
}