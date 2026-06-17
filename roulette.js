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
    {
        title: "Luotea Hackathon – WorkPulse (3. sija)",
        desc: "3. sija · Rakensin tiimin kanssa data‑pohjaisen ratkaisun, joka hyödynsi 389 sensoria, 628 päivän käyttödataa ja 6 datasettiä ennustamaan rakennusten käyttöastetta ja huollon kuormitusta."
    },

    {
        title: "Projekti - 1 PowerShell-skriptit – automaatio ja IAM",
        desc: "Rakensin Entra ID -pohjaisen automaation PowerShell skriptin, joka hyödyntää Graph API -tokenia ja suodattaa käyttäjätietoja SQL-tyylisesti."
    },

    {
        title: "Projekti - 4 Windows Server - yritysverkko projekti",
        desc: "Windows Server -hiekkalaatikkoympäristö, jossa rakensin oman yritysverkon ja harjoittelin AD-, GPO- ja palvelinympäristön ylläpitoa."
    },

    {
        title: "Projekti - 2 Kali Linux – hiekkalaatikkotestit",
        desc: "Kali Linux -ympäristö, jossa harjoittelin tietoturvatyökaluja, Cisco Academy Ethical Hacking -moduulia ja Natas-harjoituksia."
    },

    {
        title: "Projekti - 3 MySQL-tietokannan pentest Kali Linuxilla",
        desc: "Asensin MySQL-tietokannan ja harjoittelin sen peruspentestauksia sekä oman testisivun suojaamista."
    },

    {
        title: "Projekti - 5 Portfolio-rakenne",
        desc: "HTML-, CSS- ja JavaScript-pohjainen portfolio, jonka suunnittelin ja rakensin itse AI-avusteisesti."
    }
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



