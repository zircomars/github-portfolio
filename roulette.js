// --------------------------------------
// PROJECT DATA
/* 
korttien päivityksen
vasen/oikea liike
index‑logiikan
*/
// --------------------------------------
/* 5-6 PROJEKTIA LYHYESTI - ESIKATSELLU JA LYHYT KUVAUS */
const projects = [
    { title: "Projekti - 1 PowerShell-skriptit – automaatio ja IAM ", desc: "Rakensin Entra ID -pohjaisen automaation PowerShell skriptin, joka hyödyntää Graph API -tokenia ja suodattaa käyttäjätietoja SQL-tyylisesti." },

    { title: "Projekti - 2 Kali Linux – hiekkalaatikkotestit ", desc: "Kali Linux -hiekkalaatikkoympäristö, jossa testasin keskeisiä tietoturvatyökaluja, harjoittelin tiedonhakua ja seurasin Cisco Academy Ethical Hacking -moduulia sekä Natas-harjoituksia." },

    { title: "Projekti - 3 MySQL-tietokannan pentest Kali Linuxilla ", desc: "Kali Linux -hiekkalaatikkoympäristö, jossa asensin MySQL-tietokannan ja harjoittelin sen peruspentestauksia, haavoittuvuuksien tunnistamista ja oman testisivun parantamista." },

    { title: "Projekti - 4 Windows Server - yritysverkko projekti ", desc: "Windows Server -hiekkalaatikkoympäristö, jossa rakensin oman yritysverkon, harjoittelin AD- ja GPO-hallintaa, käyttäjähallintaa, PowerShelliä ja palvelinympäristön ylläpitoa." },

    { title: "Projekti - 5 Portfolio-rakenne ", desc: "HTML5-, CSS- ja JavaScript-pohjainen portfolio, jonka suunnittelin ja rakensin hyödyntäen aiempia opintoja, harjoituksia ja omaa teknistä osaamistani. Tavoitteena oli luoda selkeä, responsiivinen ja helposti luettava kokonaisuus." },

];


// --------------------------------------
// CAROUSEL LOGIC
// --------------------------------------
let index = 0;

const leftCard = document.getElementById("leftCard");
const centerCard = document.getElementById("centerCard");
const rightCard = document.getElementById("rightCard");

function updateCards() {
    const leftIndex = (index - 1 + projects.length) % projects.length;
    const rightIndex = (index + 1) % projects.length;

    // Päivitä vasen kortti
    leftCard.querySelector(".project-title").textContent = projects[leftIndex].title;
    leftCard.querySelector(".project-desc").textContent = projects[leftIndex].desc;

    // Päivitä keskikortti
    centerCard.querySelector(".project-title").textContent = projects[index].title;
    centerCard.querySelector(".project-desc").textContent = projects[index].desc;

    // Päivitä oikea kortti
    rightCard.querySelector(".project-title").textContent = projects[rightIndex].title;
    rightCard.querySelector(".project-desc").textContent = projects[rightIndex].desc;
}

// Carousel like
function rotateRight() {
    leftCard.className = "project-card center";
    centerCard.className = "project-card right";
    rightCard.className = "project-card left";

    setTimeout(() => {
        index = (index + 1) % projects.length;
        updateCards();

        leftCard.className = "project-card left";
        centerCard.className = "project-card center";
        rightCard.className = "project-card right";
    }, 500);
}

function rotateLeft() {
    leftCard.className = "project-card right";
    centerCard.className = "project-card left";
    rightCard.className = "project-card center";

    setTimeout(() => {
        index = (index - 1 + projects.length) % projects.length;
        updateCards();

        leftCard.className = "project-card left";
        centerCard.className = "project-card center";
        rightCard.className = "project-card right";
    }, 500);
}

// Carousel-korttien klikkaukset
leftCard.addEventListener("click", rotateLeft);
rightCard.addEventListener("click", rotateRight);
centerCard.addEventListener("click", () => openModal(index));

updateCards();


// --------------------------------------
// GRID VIEW BUILDER + TOGGLE
// --------------------------------------
const toggleBtn = document.getElementById("toggleView");
const gridContainer = document.getElementById("projectGrid");
const carouselContainer = document.getElementById("projectCarousel");

function buildGrid() {
    gridContainer.innerHTML = "";

    projects.forEach((p, i) => {
        const card = document.createElement("div");
        card.className = "grid-card";
        card.innerHTML = `
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
        `;
        gridContainer.appendChild(card);

        // Grid-kortti avaa modalin
        card.addEventListener("click", () => openModal(i));
    });
}

buildGrid();

let isGrid = false;

toggleBtn.addEventListener("click", () => {
    isGrid = !isGrid;

    if (isGrid) {
        carouselContainer.classList.add("hidden");
        gridContainer.classList.remove("hidden");
        toggleBtn.textContent = "Carousel";
    } else {
        gridContainer.classList.add("hidden");
        carouselContainer.classList.remove("hidden");
        toggleBtn.textContent = "Grid";
    }
});



