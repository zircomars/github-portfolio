/* intro content H1 otsikko*/
const words = [
    "Zhao, Helsinki (Suomi)",
    "system administrator",
    "IT support",
    "järjestelmänvalvoja",
    "technical specialist"
];

  let i = 0; // mikä sana
  let j = 0; // mikä kirjain
  let isDeleting = false;
  const speed = 75; /* pienempi luku on nopeutettu ja jos isompi luku hidastuva */
  const element = document.getElementById("typewriter-loop");

  function typeLoop() {
    const current = words[i];
    
    if (!isDeleting) {
      element.textContent = current.substring(0, j + 1);
      j++;

      if (j === current.length) {
        isDeleting = true;
        setTimeout(typeLoop, 1200); // odota ennen poistamista
        return;
      }
    } else {
      element.textContent = current.substring(0, j - 1);
      j--;

      if (j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length; // seuraava sana
      }
    }

    setTimeout(typeLoop, speed);
  }

  window.onload = typeLoop;

/* ################################################################### */

/* KLIKKATTESSA NAVBAR NIIN PONNAHTAA ALAS SINNE OTSIKKON ID MUKAISESTI  */

const sections = document.querySelectorAll("#about, #projects, #timeline, #resume, #otayhteytta");
const navLinks = document.querySelectorAll(".header-nav a");

function activateNav() {
    let current = "";

    sections.forEach(section => {
        const top = section.offsetTop - 100;
        if (scrollY >= top) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", activateNav);


/* ################################################################## */
/* varjostus scrollatessa */
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header-row");
    if (window.scrollY > 20) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

/* ################################################################## */
/* Laita koko burger-menu + sulkemislogiikka */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

// Avaa/sulje burger-menu
hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

// Sulje mobile-menu kun linkkiä klikataan
document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});
