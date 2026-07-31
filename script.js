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
  .map(voce => {
    const bullet = voce.mansioni
      .map(riga => `<li>${riga}</li>`)
      .join("");
    return `
      <li class="voce-esperienza">
        <p class="periodo">${voce.periodo}</p>
        <div>
          <p class="ruolo-azienda"><strong>${voce.ruolo}</strong> presso ${voce.azienda}</p>
          <ul class="mansioni">${bullet}</ul>
        </div>
      </li>
    `;
  })
  .join("");

document.getElementById("esperienza").innerHTML = `
  <h2>Esperienza</h2>
  <ul class="lista-esperienza">${listaEsperienza}</ul>
`;

// ---- COMPETENZE ----
const listaCompetenze = cvData.competenze
  .map(voce => `<li class="tag">${voce}</li>`)
  .join("");

document.getElementById("competenze").innerHTML = `
  <h2>Competenze</h2>
  <ul class="tag-list">${listaCompetenze}</ul>
`;

// ---- SOFTWARE E STRUMENTI ----
const listaSoftware = cvData.software
  .map(voce => `<li class="tag">${voce}</li>`)
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
      <li class="riga-formazione">
        <span class="titolo">${voce.titolo}</span>
        <span class="dettaglio">${voce.ente}${voce.periodo ? " · " + voce.periodo : ""}</span>
        ${moduliHtml}
      </li>
    `;
  })
  .join("");

document.getElementById("formazione").innerHTML = `
  <h2>Formazione</h2>
  <ul class="lista-formazione">${listaFormazione}</ul>
`;

// ---- PORTFOLIO ----
const listaPortfolio = cvData.portfolio
  .map(pezzo => {
    const stilePosizione = pezzo.posizione
      ? ` style="object-position: ${pezzo.posizione};"`
      : "";
    const immagineHtml = pezzo.immagine
      ? `<img class="segnaposto-immagine prong-frame" src="${pezzo.immagine}" alt="${pezzo.titolo}"${stilePosizione}>`
      : `<div class="segnaposto-immagine prong-frame"></div>`;
    return `
      <li class="scheda-pezzo">
        ${immagineHtml}
        <p class="titolo-pezzo">${pezzo.titolo}</p>
        <p class="materiale">${pezzo.materiale}</p>
        <p class="descrizione">${pezzo.descrizione}</p>
      </li>
    `;
  })
  .join("");

document.getElementById("portfolio").innerHTML = `
  <h2>Portfolio</h2>
  <ul class="griglia-portfolio">${listaPortfolio}</ul>
`;

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
    ${c.patente ? `<li class="riga-contatto"><span class="etichetta">Patente</span><span>${c.patente}</span></li>` : ""}
    ${c.categoriaProtetta ? `<li class="riga-contatto"><span class="etichetta">Collocamento</span><span>${c.categoriaProtetta}</span></li>` : ""}
  </ul>
  ${c.noteGdpr ? `<p class="nota-gdpr">${c.noteGdpr}</p>` : ""}
`;

// ---- DATA IN FONDO ALLA PAGINA ----
document.getElementById("data-aggiornamento").textContent =
  new Date().toLocaleDateString("it-IT", { year: "numeric", month: "long", day: "numeric" });
