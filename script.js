/*
  Cosa fa questo file, in breve:
  per ogni sezione della pagina, prende i dati corrispondenti da data.js
  e costruisce l'HTML da inserire. Non devi modificarlo per aggiornare
  il CV — questo si fa in data.js.
*/

// ---- INTESTAZIONE ----
const fotoProfiloHtml = cvData.profilo.foto
  ? `<img class="foto-profilo prong-frame" src="${cvData.profilo.foto}" alt="Foto di ${cvData.profilo.nome}">`
  : "";

document.getElementById("hero").innerHTML = `
  ${fotoProfiloHtml}
  <p class="eyebrow">Curriculum</p>
  <h1 class="prong-frame">${cvData.profilo.nome}</h1>
  <p class="ruolo">${cvData.profilo.ruolo}, ${cvData.profilo.citta}</p>
`;

// ---- CHI SONO ----
document.getElementById("chi-sono").innerHTML = `
  <h2>Chi sono</h2>
  <p class="bio">${cvData.profilo.bio}</p>
`;

// ---- ESPERIENZA ----
// per ogni esperienza, trasforma l'elenco "mansioni" in una lista puntata
const listaEsperienza = cvData.esperienza
  .map((voce, indice) => {
    const bullet = voce.mansioni
      .map(riga => `<li>${riga}</li>`)
      .join("");
    const logoHtml = voce.logo
      ? `<img class="logo-azienda" src="${voce.logo}" alt="Logo ${voce.azienda}">`
      : "";
    const linkSito = voce.sito ? `<a href="${voce.sito}" target="_blank" rel="noopener">Sito</a>` : "";
    const linkInstagram = voce.instagram ? `<a href="${voce.instagram}" target="_blank" rel="noopener">Instagram</a>` : "";
    const separatore = linkSito && linkInstagram ? " · " : "";
    const linkAzienda = (linkSito || linkInstagram)
      ? `<p class="link-azienda">${linkSito}${separatore}${linkInstagram}</p>`
      : "";
    const apertoDiDefault = indice === 0; // la più recente parte già aperta
    return `
      <li class="voce-esperienza">
        <p class="periodo">${voce.periodo}</p>
        <div>
          <div class="intestazione-esperienza attivatore-esperienza" data-indice="${indice}" tabindex="0" role="button" aria-expanded="${apertoDiDefault}">
            ${logoHtml}
            <p class="ruolo-azienda"><strong>${voce.ruolo}</strong> presso ${voce.azienda}</p>
            <span class="icona-toggle">${apertoDiDefault ? "−" : "+"}</span>
          </div>
          ${linkAzienda}
          <ul class="mansioni" id="mansioni-esperienza-${indice}"${apertoDiDefault ? "" : " hidden"}>${bullet}</ul>
        </div>
      </li>
    `;
  })
  .join("");

document.getElementById("esperienza").innerHTML = `
  <h2>Esperienza</h2>
  <ul class="lista-esperienza">${listaEsperienza}</ul>
`;

function alternaEsperienza(attivatore) {
  const indice = attivatore.dataset.indice;
  const mansioni = document.getElementById(`mansioni-esperienza-${indice}`);
  const staAprendo = mansioni.hidden;
  mansioni.hidden = !staAprendo;
  attivatore.setAttribute("aria-expanded", String(staAprendo));
  attivatore.querySelector(".icona-toggle").textContent = staAprendo ? "−" : "+";
}

document.querySelectorAll(".attivatore-esperienza").forEach(attivatore => {
  attivatore.addEventListener("click", () => alternaEsperienza(attivatore));
  attivatore.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter" || evento.key === " ") {
      evento.preventDefault();
      alternaEsperienza(attivatore);
    }
  });
});

// ---- COMPETENZE ----
const listaCompetenze = cvData.competenze
  .map((voce, indice) => `<li class="tag" data-indice="${indice}" tabindex="0" role="button">${voce.nome}</li>`)
  .join("");

const dettagliCompetenze = cvData.competenze
  .map((voce, indice) => `
    <div class="dettaglio-competenza" id="dettaglio-competenza-${indice}" hidden>
      <strong>${voce.nome}:</strong> ${voce.dettaglio}
    </div>
  `)
  .join("");

document.getElementById("competenze").innerHTML = `
  <h2>Competenze</h2>
  <ul class="tag-list" id="lista-tag-competenze">${listaCompetenze}</ul>
  <div class="pannello-dettaglio" id="pannello-competenze">${dettagliCompetenze}</div>
`;

// al click (o tocco) su un tag, mostra/nasconde la SUA spiegazione.
// un secondo click sullo stesso tag la richiude.
const listaTagCompetenze = document.getElementById("lista-tag-competenze");
const pannelloCompetenze = document.getElementById("pannello-competenze");

function gestisciClickCompetenza(tag) {
  const indice = tag.dataset.indice;
  const elementoDettaglio = document.getElementById(`dettaglio-competenza-${indice}`);
  const giaAperto = tag.classList.contains("tag-attivo");

  listaTagCompetenze.querySelectorAll(".tag").forEach(t => t.classList.remove("tag-attivo"));
  pannelloCompetenze.querySelectorAll(".dettaglio-competenza").forEach(d => { d.hidden = true; });

  if (!giaAperto) {
    tag.classList.add("tag-attivo");
    elementoDettaglio.hidden = false;
  }
}

listaTagCompetenze.addEventListener("click", (evento) => {
  const tag = evento.target.closest(".tag");
  if (tag) gestisciClickCompetenza(tag);
});

listaTagCompetenze.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter" || evento.key === " ") {
    const tag = evento.target.closest(".tag");
    if (tag) {
      evento.preventDefault();
      gestisciClickCompetenza(tag);
    }
  }
});

// ---- SOFTWARE E STRUMENTI ----
const ICONE_SOFTWARE = {
  cubo: '<svg viewBox="0 0 20 20"><path d="M10 2 L17 6 L17 14 L10 18 L3 14 L3 6 Z M10 2 L10 10 M10 10 L17 6 M10 10 L3 6" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>',
  penna: '<svg viewBox="0 0 20 20"><path d="M3 17 L4 13 L13 4 L16 7 L7 16 Z M13 4 L16 7" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" stroke-linecap="round"/></svg>',
  immagine: '<svg viewBox="0 0 20 20"><rect x="2" y="4" width="16" height="12" rx="1" fill="none" stroke="currentColor" stroke-width="1.3"/><circle cx="7" cy="9" r="1.4" fill="currentColor"/><path d="M3 15 L8 10 L11 13 L14 9 L17 13" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>',
  vettore: '<svg viewBox="0 0 20 20"><circle cx="4" cy="15" r="1.6" fill="none" stroke="currentColor" stroke-width="1.3"/><circle cx="16" cy="5" r="1.6" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M5.5 14 C8 10 12 10 14.5 6" fill="none" stroke="currentColor" stroke-width="1.3"/></svg>',
  documento: '<svg viewBox="0 0 20 20"><path d="M5 2 H12 L16 6 V18 H5 Z M12 2 V6 H16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M7.5 10 H13.5 M7.5 13 H13.5" stroke="currentColor" stroke-width="1.1"/></svg>',
  nuvola: '<svg viewBox="0 0 20 20"><path d="M6 15 C3.5 15 2 13.2 2 11.3 C2 9.4 3.5 8 5.3 8 C5.7 5.5 8 4 10.2 4.7 C12 5.2 13 6.8 13 8.3 C15 8.3 17 9.8 17 12 C17 14 15.3 15 13.5 15 Z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>',
  ricevuta: '<svg viewBox="0 0 20 20"><path d="M5 2 H15 V18 L13 16.5 L11 18 L9 16.5 L7 18 L5 16.5 Z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M7.5 6 H12.5 M7.5 9 H12.5 M7.5 12 H10.5" stroke="currentColor" stroke-width="1.1"/></svg>'
};

// sceglie l'icona in base a parole chiave nel nome, così funziona
// anche se modifichi leggermente il testo in data.js
function iconaPerSoftware(nome) {
  const n = nome.toLowerCase();
  if (n.includes("solidworks") || n.includes("rhino")) return ICONE_SOFTWARE.cubo;
  if (n.includes("procreate") || n.includes("illustrator")) return ICONE_SOFTWARE.penna;
  if (n.includes("photoshop")) return ICONE_SOFTWARE.immagine;
  if (n.includes("svg")) return ICONE_SOFTWARE.vettore;
  if (n.includes("office")) return ICONE_SOFTWARE.documento;
  if (n.includes("cloud")) return ICONE_SOFTWARE.nuvola;
  if (n.includes("fattura")) return ICONE_SOFTWARE.ricevuta;
  return ICONE_SOFTWARE.documento;
}

const listaSoftware = cvData.software
  .map(voce => `<li class="tag tag-icona">${iconaPerSoftware(voce)}<span>${voce}</span></li>`)
  .join("");

document.getElementById("software").innerHTML = `
  <h2>Software e strumenti</h2>
  <ul class="tag-list">${listaSoftware}</ul>
`;

// ---- LINGUE ----
const listaLingue = cvData.lingue
  .map(voce => `
    <li class="riga-formazione">
      <span class="titolo">${voce.lingua}</span>
      <span class="dettaglio">${voce.livello}</span>
    </li>
  `)
  .join("");

document.getElementById("lingue").innerHTML = `
  <h2>Lingue</h2>
  <ul class="lista-formazione">${listaLingue}</ul>
`;

// ---- FORMAZIONE ----
const listaFormazione = cvData.formazione
  .map(voce => {
    const moduliHtml = voce.moduli
      ? `<ul class="mansioni">${voce.moduli.map(m => `<li>${m}</li>`).join("")}</ul>`
      : "";
    return `
      <li class="tappa">
        <p class="periodo-formazione">${voce.periodo}</p>
        <p class="titolo">${voce.titolo}</p>
        <p class="dettaglio">${voce.ente}</p>
        ${moduliHtml}
      </li>
    `;
  })
  .join("");

document.getElementById("formazione").innerHTML = `
  <h2>Formazione</h2>
  <ul class="timeline">${listaFormazione}</ul>
`;

// ---- PORTFOLIO ----
const listaPortfolio = cvData.portfolio
  .map((pezzo, indice) => {
    const stiliImmagine = [];
    if (pezzo.posizione) stiliImmagine.push(`object-position: ${pezzo.posizione}`);
    if (pezzo.adatta) stiliImmagine.push(`object-fit: ${pezzo.adatta}`);
    const stileAttributo = stiliImmagine.length ? ` style="${stiliImmagine.join("; ")}"` : "";
    const immagineHtml = pezzo.immagine
      ? `<img class="segnaposto-immagine prong-frame" src="${pezzo.immagine}" alt="${pezzo.titolo}"${stileAttributo}>`
      : `<div class="segnaposto-immagine prong-frame"></div>`;
    return `
      <li class="scheda-pezzo" data-indice="${indice}"${indice === 0 ? "" : " hidden"}>
        ${immagineHtml}
        <p class="titolo-pezzo">${pezzo.titolo}</p>
        <p class="materiale">${pezzo.materiale}</p>
        <p class="descrizione">${pezzo.descrizione}</p>
      </li>
    `;
  })
  .join("");

const puntiPortfolio = cvData.portfolio
  .map((_, indice) => `<button class="punto-slider${indice === 0 ? " punto-attivo" : ""}" data-indice="${indice}" aria-label="Vai al pezzo ${indice + 1}"></button>`)
  .join("");

document.getElementById("portfolio").innerHTML = `
  <h2>Portfolio</h2>
  <div class="slider-portfolio">
    <button class="freccia-slider freccia-sinistra no-print" aria-label="Pezzo precedente" type="button">‹</button>
    <ul class="griglia-portfolio">${listaPortfolio}</ul>
    <button class="freccia-slider freccia-destra no-print" aria-label="Pezzo successivo" type="button">›</button>
  </div>
  <div class="punti-slider no-print">${puntiPortfolio}</div>
`;

// gestione dello slider: mostra una sola scheda alla volta, il resto resta
// nella pagina (nascosto) cosi in stampa puo comparire tutto
let indicePortfolioAttivo = 0;
const slidesPortfolio = document.querySelectorAll("#portfolio .scheda-pezzo");
const puntiPortfolioEl = document.querySelectorAll("#portfolio .punto-slider");

function mostraSlidePortfolio(nuovoIndice) {
  slidesPortfolio.forEach((slide, i) => { slide.hidden = i !== nuovoIndice; });
  puntiPortfolioEl.forEach((punto, i) => punto.classList.toggle("punto-attivo", i === nuovoIndice));
  indicePortfolioAttivo = nuovoIndice;
}

const frecciaSinistra = document.querySelector("#portfolio .freccia-sinistra");
const frecciaDestra = document.querySelector("#portfolio .freccia-destra");

if (frecciaSinistra) {
  frecciaSinistra.addEventListener("click", () => {
    const nuovoIndice = (indicePortfolioAttivo - 1 + slidesPortfolio.length) % slidesPortfolio.length;
    mostraSlidePortfolio(nuovoIndice);
  });
}

if (frecciaDestra) {
  frecciaDestra.addEventListener("click", () => {
    const nuovoIndice = (indicePortfolioAttivo + 1) % slidesPortfolio.length;
    mostraSlidePortfolio(nuovoIndice);
  });
}

puntiPortfolioEl.forEach(punto => {
  punto.addEventListener("click", () => mostraSlidePortfolio(Number(punto.dataset.indice)));
});

// ---- CONTATTI E INFORMAZIONI ----
const c = cvData.contatti;
const telefonoPulito = c.telefono ? c.telefono.replace(/\D/g, "") : "";
const messaggioWhatsapp = encodeURIComponent("Ciao Sofia, ho visto il tuo CV online e vorrei contattarti.");
const oggettoEmail = encodeURIComponent("Il tuo CV online");
const corpoEmail = encodeURIComponent("Ciao Sofia,\n\nho visto il tuo CV online e vorrei contattarti.\n\n");

document.getElementById("contatti").innerHTML = `
  <h2>Contatti</h2>
  <ul class="lista-contatti">
    ${c.email ? `<li class="riga-contatto"><span class="etichetta">Email</span><a href="mailto:${c.email}?subject=${oggettoEmail}&body=${corpoEmail}">${c.email}</a></li>` : ""}
    ${c.telefono ? `<li class="riga-contatto"><span class="etichetta">Telefono</span><a href="https://wa.me/${telefonoPulito}?text=${messaggioWhatsapp}" target="_blank" rel="noopener">${c.telefono}</a></li>` : ""}
    ${c.linkedin ? `<li class="riga-contatto"><span class="etichetta">LinkedIn</span><a href="${c.linkedin}" target="_blank" rel="noopener">Vedi profilo</a></li>` : ""}
    ${c.patente ? `<li class="riga-contatto"><span class="etichetta">Patente</span><span>${c.patente}</span></li>` : ""}
    ${c.categoriaProtetta ? `<li class="riga-contatto"><span class="etichetta">Collocamento</span><span>${c.categoriaProtetta}</span></li>` : ""}
  </ul>
  ${c.noteGdpr ? `<p class="nota-gdpr">${c.noteGdpr}</p>` : ""}
`;

// ---- DATA IN FONDO ALLA PAGINA ----
document.getElementById("data-aggiornamento").textContent =
  new Date().toLocaleDateString("it-IT", { year: "numeric", month: "long", day: "numeric" });

// ---- PULSANTE DOWNLOAD PDF ----
document.getElementById("bottone-pdf").addEventListener("click", () => {
  window.print();
});
