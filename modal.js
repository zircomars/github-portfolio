/* THIS IS MODAL SCRIPTS 
USER CLICK PROJECT X AND POP UP AND GIVE MORE DETAILS. LEFT DESCRIPTIONS AND RIGHT IMAGE IF IS NECESSARY 

openModal()
closeModal()
modalin sisällön täyttämisen
*/
// --------------------------------------
// PROJECT DATA (carousel + grid + modal) - PROJEKTISTA LISÄTIETOA KLIKKATTUNA
// --------------------------------------
/* \n\n• - pieni cheatsheet jos on useampi ranskalaisviiva ja drop seuraavalle riville */
const projectsDetails = [
    { 
        title: "Projektikuva 1",
        desc: "Lyhyt kuvaus projektista 1…",
        details: "• Projekti toteutettiin aiemmassa työroolissa yritysympäristössä. Vastasin skriptin arkkitehtuurista, IAM-oikeuksista, token-hallinnasta ja automaation toteutuksesta. \n\n • Tavoitteena oli hakea Entra ID (Azure) -käyttäjätietoja PowerShellin kautta ja tuottaa niistä Excel-yhteensopiva CSV, joka lähetettiin automaattisesti SharePointin määriteltyyn kansiopolkuun. \n\n • Skripti kirjautui Microsoft-tilillä, haki Graph API -tokenin ja suodatti käyttäjät SQL-tyylisesti (esim. 'Matti' tai 'M-*'). Haetut attribuutit koottiin CSV:hen, jonka rakenne piti määritellä tarkasti. \n\n • Teknologiat: PowerShell, VS Code, Azure Entra ID, Microsoft Graph API, SharePoint, M365 Excel, Copilot, automaatio ja integraatiot. \n\n • Opin skriptirakenteen, jatkuvan testauksen ja SharePoint-viennin luotettavan toteutuksen. Lopputuloksena skripti tuotti selkeän taulukon ja lähetti sen oikeaan kansioon oikeilla käyttöoikeuksilla. Hyödynsin myös Copilotin (tekoäly) tukea skriptin suunnittelussa ja parantamisessa, mikä nopeutti työskentelyä ja auttoi varmistamaan ratkaisun turvallisuuden.",

        image: "images/projekti1.png"
    },

    { 
        title: "Projektikuva 2",
        desc: "Lyhyt kuvaus projektista 2…",
        details: "• Pystytin oman Kali Linux -hiekkalaatikkoympäristön, jossa harjoittelin Linux-komentoja ja penetraatiotestauksen työkaluja. \n\n • Tutustuin keskeisiin tietoturvatyökaluihin ja analysointimenetelmiin sekä seurasin Cisco Academy -materiaalin Ethical Hacking -moduulia oppimisen tukena. \n\n • Harjoittelin Natas web-security -tehtäviä, joissa ratkaistaan tasokohtaisia haasteita analysoimalla verkkosivun toimintaa (lähdekoodi, JavaScript, evästeet, tietokanta) ja hyödyntämällä Kali Linuxin työkaluja. \n\n • Teknologiat ja työkalut: VMware Workstation, Kali Linux, HTML5, JavaScript, Python, Linux-ympäristö, OWASP, Nessus ja tiedustelutyökalut.",
        image: "images/projekti2.png"
    },

    { 
        title: "Projektikuva 3",
        desc: "Lyhyt kuvaus projektista 3…",
        details: "• Samassa Kali Linux -hiekkalaatikkoympäristössä asensin XAMPP-pohjaisen testipalvelimen ja rakensin oman MySQL-tietokannan phpMyAdminin kautta. \n\n • Suoritin tietokantaan kohdistuvia peruspentestauksia ja testasin erilaisia hyökkäysmenetelmiä kontrolloidussa ympäristössä. \n\n • Harjoitusten perusteella paransin omaa testisivua ja tietokantaa vahvistamalla kirjautumista, lisäämällä vahvempia salasanoja ja tarkastelemalla lokitietoja hyökkäysyritysten tunnistamiseksi. \n\n • Kysyin lisäksi tekoälyltä neuvoja liikenteen salaamisen ja palvelimen suojaamisen parantamiseen. Loinkin useita testikäyttäjiä ja rakensin pienen harjoitustietokannan (esim. pieni kauppasovellus), jossa harjoittelin MySQL-kyselyitä ja tietokantarakenteita. Lisäksi tutustuin ISO 27000 -standardin periaatteisiin ja siihen, miten niitä voi soveltaa peruspentestauksen tukena. \n\n • Teknologiat ja työkalut: Linux-ympäristö, XAMPP, MySQL, phpMyAdmin, HTTP/HTTPS, tietoturvatestauksen työkalut.",

        image: "images/projekti3.png"
    },

    { 
        title: "Projektikuva 4",
        desc: "Lyhyt kuvaus projektista 4…",
        details: "• Rakensin Windows Server -hiekkalaatikkoympäristön, jossa toteutin oman yritysverkon ja lokaalin palvelimen. Harjoituksissa toimin sekä järjestelmänvalvojan että IT-tuen roolissa ja tarkastelin asioita myös loppukäyttäjän näkökulmasta. Ympäristö koostui kahdesta virtuaalikoneesta: palvelin (VM1) ja työasema (VM2). \n\n • Toteutin ja testasin GPO-asetuksia, käyttäjä- ja ryhmähallintaa, palvelutilejä, ABE-asetuksia, DNS-konfiguraatiota, sovellusten rajoituksia sekä PowerShell- ja Sysinternals-työkaluja. Harjoittelin myös GPO‑troubleshootingia ja käytin Microsoftin tarjoamia työkaluja, kuten mini kiosk -ratkaisua. \n\n • Pohdin myös, mitä tulee huomioida, jos fyysinen palvelin poistetaan käytöstä (rakenteet, käyttöoikeudet, riskit, vauriot, sopimustahot, sisäiset käyttäjät sekä mahdolliset katkokset ja muut poikkeavat tilanteet). \n\n • Tutustuin Windows Serverin keskeisiin palveluihin ja ominaisuuksiin, kuten BitLocker-salaukseen, Active Directoryyn, EFS-salaukseen, käyttöoikeuksiin, levyjakojen hallintaan ja muihin yritysverkkojen palvelinrooleihin.",
        image: "images/projekti4.png",
    },

    { 
        title: "Projektikuva 5",
        desc: "Lyhyt kuvaus projektista 5…",
        details: "• Tämä projekti liittyy suoraan tämän portfolion rakenteeseen ja ulkoasuun. \n\n • Hyödynsin tekoälyä suunnittelussa, ideoinnissa ja koodin parantamisessa, mutta rakensin portfolion itse HTML5-, CSS- ja JavaScript-teknologioilla. Selailin useita portfolioita inspiraatioksi ja yhdistin niistä toimivia ratkaisuja omaan tyyliini. \n\n • Suunnittelussa keskityin selkeyteen, tiiviisiin kuvauksiin ja helppolukuiseen rakenteeseen. Rakensin projektikortit, lisätietonäkymät, navigaation ja kokonaisuuden, joka toimii sekä puhelimessa, tabletissa että suurella näytöllä. \n\n • Tavoitteena oli luoda tekninen, ammattimainen ja yhtenäinen portfolio, joka esittelee osaamiseni selkeästi ja tukee tulevia työnhakutilanteita. \n\n • Tämän portfolion julkaisu ja lisäys Github ei ollut vaikeeta, josta olen aikaisemmin tehnyt ja vastaavasti yhteistietojen jättämisestä piti suorittaa varovasti etten kerro kaikkea tietoja",
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
