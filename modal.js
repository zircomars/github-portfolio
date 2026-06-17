/* THIS IS MODAL SCRIPTS 
USER CLICK PROJECT X AND POP UP AND GIVE MORE DETAILS. LEFT DESCRIPTIONS AND RIGHT IMAGE IF IS NECESSARY 

openModal()
closeModal()
modalin sisällön täyttämisen
*/

/*

⭐ Miksi 3–4 ranskalaista viivaa per projekti on täydellinen?
🔹 1. Rekrytoija näkee heti olennaisen
He eivät jaksa lukea pitkiä tekstiseiniä.
3–4 bulletia kertoo:

mitä teit

miksi teit

miten ratkaisit sen

mikä oli lopputulos

Se riittää 90 %:lle lukijoista.

🔹 2. Tekniset lukijat voivat avata projektin syvemmälle
Jos joku haluaa tietää lisää, hän klikkaa projektin auki.
Mutta etusivulla pitää olla tiivis ja iskevä.

🔹 3. Rakenne pysyy yhtenäisenä
Kun jokainen projekti noudattaa samaa kaavaa, portfolio näyttää ammattimaiselta ja huolitellulta.*/

// --------------------------------------
// PROJECT DATA (carousel + grid + modal) - PROJEKTISTA LISÄTIETOA KLIKKATTUNA
// --------------------------------------
/* \n\n• - pieni cheatsheet jos on useampi ranskalaisviiva ja drop seuraavalle riville ja huom. järjestys parannettu*/
const projectsDetails = [

    // 1) HACKATHON
    { 
        title: "Luotea Hackathon – WorkPulse (3. sija)",
        desc: "Lyhyt kuvaus projektista…",
        details:
            "• Luotea Hackathon 2026 – 48h kehityshaaste, jossa tavoitteena oli muuttaa kiinteistöjen data reaktiivisesta → ennakoivaksi ja tuottaa selkeä, datavetoinen demo tuomaristolle.\n\n" +
            "• Työstimme 6 datasettiä (389 sensoria, 628 päivän dataa) sisältäen mm. käyttöasteen, sisäilman, energiankulutuksen ja huoltokeikat neljästä rakennuksesta.\n\n" +
            "• Oma roolini: UI‑rakenteen suunnittelu, HTML‑pohjan rakentaminen, datan visualisointi ja tuomaristolle olennaisen informaation priorisointi. Käytin VS Code + GitHub Copilot Chat + Blackbox AI nopeaan iterointiin.\n\n" +
            "• Tuin tiimiä datan analysoinnissa, käyttöaste‑ ja huoltokuormitusnäkymien rakentamisessa sekä pitchin sisällön rajaamisessa.\n\n" +
            "• Lopputulos: selkeä web‑prototyyppi (WorkPulse), joka yhdisti datasetit yhteen näkymään ja auttoi tunnistamaan käyttöpiikkejä, SLA‑riskejä ja ennakoivia huoltotarpeita. Projekti sijoittui 3. sijalle.\n\n" +
            "• Projektin GitHub: https://gellati.github.io/Luotea2026/",
        image: "images/projekti6.png",
    },

    // 2) POWERSHELL + IAM
    { 
        title: "PowerShell-skriptit – automaatio ja IAM",
        desc: "Lyhyt kuvaus projektista 1…",
        details:
            "• Rakensin Entra ID -pohjaisen automaation PowerShellillä. Skripti haki Graph API -tokenin, suodatti käyttäjät SQL-tyylisesti ja tuotti CSV‑raportin.\n\n" +
            "• Skripti kirjautui Microsoft-tilillä, haki tokenin, suodatti käyttäjät (esim. 'Matti' tai 'M-*') ja rakensi Excel-yhteensopivan CSV:n.\n\n" +
            "• Lopuksi CSV vietiin automaattisesti SharePoint-kansioon oikeilla käyttöoikeuksilla.\n\n" +
            "• Teknologiat: PowerShell, VS Code, Entra ID, Graph API, SharePoint, M365 Excel, Copilot.\n\n" +
            "• Opin skriptirakenteen, token-hallinnan ja automaation luotettavan toteutuksen.",
        image: "images/projekti1.png"
    },

    // 3) WINDOWS SERVER
    { 
        title: "Windows Server - yritysverkko projekti",
        desc: "Lyhyt kuvaus projektista 4…",
        details:
            "• Rakensin Windows Server -hiekkalaatikkoympäristön kahdella virtuaalikoneella (palvelin + työasema).\n\n" +
            "• Harjoittelin AD:tä, GPO:ita, DNS:ää, palvelinrooleja, levyjakoja, ABE:tä, EFS:ää, BitLockeria ja PowerShelliä.\n\n" +
            "• Toteutin käyttäjä- ja ryhmähallintaa, palvelutilejä, sovellusten rajoituksia ja GPO‑troubleshootingia.\n\n" +
            "• Pohdin myös fyysisen palvelimen poistamisen riskejä ja vaikutuksia.\n\n" +
            "• Ymmärsin paremmin yritysverkon rakenteen ja palvelinympäristön ylläpidon.",
        image: "images/projekti4.png",
    },

    // 4) KALI LINUX – HIEKKALAATIKKO
    { 
        title: "Kali Linux – hiekkalaatikkotestit",
        desc: "Lyhyt kuvaus projektista 2…",
        details:
            "• Pystytin oman Kali Linux -ympäristön ja harjoittelin tietoturvatyökaluja.\n\n" +
            "• Seurasin Cisco Academy Ethical Hacking -moduulia.\n\n" +
            "• Ratkaisin Natas web-security -tehtäviä (lähdekoodi, JS, evästeet, tietokanta-analyysi).\n\n" +
            "• Teknologiat: VMware, Kali Linux, Python, OWASP, Nessus, tiedustelutyökalut.",
        image: "images/projekti2.png"
    },

    // 5) MYSQL PENTEST
    { 
        title: "MySQL-tietokannan pentest Kali Linuxilla",
        desc: "Lyhyt kuvaus projektista 3…",
        details:
            "• Asensin XAMPP-palvelimen ja rakensin oman MySQL-tietokannan.\n\n" +
            "• Suoritin peruspentestauksia ja testasin hyökkäysmenetelmiä.\n\n" +
            "• Paransin testisivua: vahvemmat salasanat, lokien tarkastelu, HTTPS.\n\n" +
            "• Rakensin pienen harjoitustietokannan (esim. kauppasovellus) ja harjoittelin SQL-kyselyitä.\n\n" +
            "• Teknologiat: XAMPP, MySQL, phpMyAdmin, HTTP/HTTPS, Linux.",
        image: "images/projekti3.png"
    },

    // 6) PORTFOLIO
    { 
        title: "Portfolio-rakenne",
        desc: "Lyhyt kuvaus projektista 5…",
        details:
            "• Rakensin tämän portfolion HTML5-, CSS- ja JavaScript-teknologioilla.\n\n" +
            "• Hyödynsin tekoälyä suunnittelussa ja koodin parantamisessa.\n\n" +
            "• Suunnittelin responsiivisen rakenteen, projektikortit, lisätietonäkymät ja navigaation.\n\n" +
            "• Tavoitteena oli luoda selkeä, tekninen ja ammattimainen kokonaisuus.",
        image: "images/projekti5.png"    
    }

];


// --------------------------------------
// MODAL LOGIC
// --------------------------------------
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalImage = document.getElementById("modalImage");
const modalClose = document.getElementById("modalClose");

// Avaa modal ja näyttää projektin lisätiedot
function openModal(projectIndex) {
    const p = projectsDetails[projectIndex];

    modalTitle.textContent = p.title;
    modalDesc.textContent = p.details;
    //Kuvapolun pitää olla suhteellinen polku, ei Windows‑polku ja nyt sallii kaikki kuvat tyyppit png/jpg
    modalImage.src = p.image;

    modal.classList.remove("hidden");
}

/* USER CLICK PROJECT X AND GIVE MORE DETAIL, AND CLICK ANYWHERE BACK TO ROULETTE OR GRID VIEW */
modalClose.addEventListener("click", () => {
    modal.classList.add("hidden");
});

// Sulje klikkaamalla taustaa
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
    }
});