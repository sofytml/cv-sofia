/*
  ============================================================
  QUESTO È L'UNICO FILE CHE DOVRAI MODIFICARE PER AGGIORNARE IL CV.
  Non toccare index.html, style.css o script.js: leggeranno
  automaticamente quello che scrivi qui.
  ============================================================
*/

const cvData = {

  // ---- INTESTAZIONE ----
  profilo: {
    nome: "Sofia Tombolato",
    ruolo: "Orafa incastonatrice — Tecnico di progettazione e stampa 3D",
    citta: "Cittadella (PD)",
    foto: "290AEB1B-1644-4E81-8B80-4D8AF018118D.jpg",
    bio: "Orafa incastonatrice con una solida formazione artistica e tecnica, specializzata anche in progettazione e stampa 3D con SolidWorks. Integro la modellazione digitale con la lavorazione artigianale del gioiello, dalla progettazione virtuale alla realizzazione fisica. Precisa, tenace e attenta alla qualità del made in Italy, oggi cerco di mettere a sistema competenze manuali e digitali per realizzare manufatti unici, anche attraverso tecnologie additive."
  },

  // ---- COMPETENZE ARTIGIANALI ----
  competenze: [
    "Incastonatura di pietre e diamanti",
    "Riparazione e restauro di gioielli",
    "Saldatura a microfiamma e laser",
    "Lucidatura e finitura (lustreria)",
    "Incisione con Gravermax",
    "Progettazione digitale 3D",
    "Utilizzo di strumenti di intelligenza artificiale",
  ],

  // ---- SOFTWARE E STRUMENTI ----
  software: [
    "SolidWorks",
    "Rhinoceros",
    "Procreate",
    "Illustrator",
    "Photoshop",
    "SVG",
    "Pacchetto Office",
    "Gestione cloud (OneDrive, Dropbox)",
    "Fatturazione elettronica"
  ],

  // ---- LINGUE ----
  lingue: [
    { lingua: "Italiano", livello: "Livello professionale (C2)" },
    { lingua: "Inglese", livello: "Livello intermedio (B2)" }
  ],

  // ---- FORMAZIONE ----
  formazione: [
    {
      titolo: "Competenze digitali specialistiche",
      ente: "Infolingue Srl",
      periodo: "2026 — in corso"
    },
    {
      titolo: "Tecnico di Progettazione e Stampa 3D con SolidWorks — 120 ore",
      ente: "Infolingue Srl",
      periodo: "2026"
    },
    {
      titolo: "Corso di specializzazione — Academy Bulgari",
      ente: "Scuola Arte e Mestieri di Vicenza",
      periodo: "2022"
    },
    {
      titolo: "Specializzazione tecnica in realizzazione artigianale made in Italy e lavorazione orafa",
      ente: "Scuola Arte e Mestieri di Vicenza",
      periodo: "2022"
    },
    {
      titolo: "Corso di Decorazione",
      ente: "Accademia delle Belle Arti di Venezia",
      periodo: "2021"
    },
    {
      titolo: "Maturità artistica — indirizzo Arti Figurative",
      ente: "Liceo Artistico \"M. Fanoli\", Cittadella (PD)",
      periodo: "2019"
    }
  ],

  // ---- ESPERIENZA ----
  esperienza: [
    {
      ruolo: "Orafa & Incastonatrice",
      azienda: "Gori Annalisa Gioielli — Vicenza (VI)",
      periodo: "01/2023 – 03/2026",
      mansioni: [
        "Incastonatura di pietre e diamanti al microscopio (Leica 30x), con standard di precisione elevati",
        "Gestione dell'intero ciclo produttivo del gioiello: fusione, assemblaggio, incastonatura, finitura, rodiatura",
        "Riparazione e restauro di gioielli danneggiati o usurati",
        "Saldatura a microfiamma e laser, incisione con Gravermax, costruzione e manutenzione bulini",
        "Controllo qualità su diamanti e pezzi finiti: verifica di autenticità, integrità e corretto montaggio",
        "Progettazione digitale di bozzetti e file vettoriali per incisione laser (Procreate, SVG)"
      ]
    },
    {
      ruolo: "Stage formativo",
      azienda: "Patros S.r.l.",
      periodo: "09/2022 – 12/2022",
      mansioni: [
        "Incastonatura in produzione, saldatura laser e utilizzo del microscopio in un contesto aziendale strutturato"
      ]
    }
  ],

  // ---- PORTFOLIO ---- (finché non hai foto, resta un segnaposto elegante)
  portfolio: [
    {
      titolo: "Anello Floreale",
      materiale: "Oro giallo 18K e diamanti",
      immagine: "IMG_4310.jpg",
      descrizione: "Anello a forma di fiore, progettato per non avere alcuna griffa a vista. La pietra centrale è incastonata con la tecnica a 'notte' (battuto); attorno, due corone di petali di dimensioni crescenti, ciascuno impreziosito da un diamante. Le pietre dei petali esterni sono incastonate sotto ai petali più piccoli e fermate in punta da una grana."
    },
    {
      titolo: "Dettaglio anello con fish tail reverse",
      materiale: "Oro bianco 18K e diamanti",
      immagine: "IMG_8826.jpg",
      posizione: "center 83%",
      descrizione: "Dettaglio dell'incisione a fish tail lungo il bordo del castone di un anello — una tecnica incisoria che richiede estrema precisione."
    }
  ],

  // ---- CONTATTI E INFORMAZIONI ----
  contatti: {
    telefono: "+39 333 352 0528",
    email: "tombolatosofia@gmail.com",
    patente: "Patente B, automunita",
    categoriaProtetta: "Iscritta alla L. 68/99 (Provincia di Padova) — Collocamento mirato",
    noteGdpr: "Autorizzo il trattamento dei miei dati personali ai sensi del D.Lgs. 196/2003 e dell'art. 13 GDPR."
  }

};
