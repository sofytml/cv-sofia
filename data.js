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
    ruolo: "Orafa incastonatrice: Tecnico di progettazione e stampa 3D",
    citta: "Cittadella (PD)",
    foto: "290AEB1B-1644-4E81-8B80-4D8AF018118D.jpg",
    bio: "Orafa incastonatrice con una solida formazione artistica e tecnica, specializzata anche in progettazione e stampa 3D con SolidWorks. Integro la modellazione digitale con la lavorazione artigianale del gioiello, dalla progettazione virtuale alla realizzazione fisica. Precisa, tenace e attenta alla qualità del made in Italy, oggi cerco di mettere a sistema competenze manuali e digitali per realizzare manufatti unici, anche attraverso tecnologie additive."
  },

  // ---- COMPETENZE ARTIGIANALI ----
  competenze: [
     {
      nome: "Incastonatura di pietre e diamanti",
      dettaglio: "Sviluppata quotidianamente presso Gori Annalisa Gioielli, lavorando al microscopio (Leica 30x) su pietre e diamanti con standard qualitativi e di precisione elevati."
    },
    {
      nome: "Riparazione e restauro di gioielli",
      dettaglio: "Acquisita sul campo, restaurando e ripristinando gioielli danneggiati o usurati per la clientela."
    },
    {
      nome: "Saldatura a microfiamma e laser",
      dettaglio: "Tecnica per unire metalli preziosi, sia con strumenti tradizionali (microfiamma) sia con saldatrice laser per interventi di maggiore precisione."
    },
    {
      nome: "Lucidatura e finitura (lustreria)",
      dettaglio: "Rifinitura estetica dei pezzi, a mano e con macchine lucidatrici, per portare il gioiello alla qualità finale prima della consegna."
    },
    {
      nome: "Incisione con Gravermax",
      dettaglio: "Uso del Gravermax per incisioni artistiche e tecniche sul metallo, oltre a costruzione e affilatura dei bulini."
    },
    {
      nome: "Progettazione digitale 3D",
      dettaglio: "Acquisita con il corso Tecnico di Progettazione e Stampa 3D con SolidWorks (Infolingue, 2026): dalla modellazione virtuale alla stampa 3D del prototipo."
    },
    {
      nome: "Utilizzo di strumenti di intelligenza artificiale",
      dettaglio: "In fase di apprendimento nel corso Competenze digitali specialistiche (Infolingue, 2026, in corso)."
    }
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
      titolo: "Competenze digitali specialistiche (IA)",
      ente: "Infolingue Srl",
      periodo: "2026"
    },
    {
      titolo: "Tecnico di Progettazione e Stampa 3D con SolidWorks: 120 ore",
      ente: "Infolingue Srl",
      periodo: "2026"
    },
    {
      titolo: "Corso di specializzazione (Academy Bulgari)",
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
      titolo: "Maturità artistica: indirizzo Arti Figurative",
      ente: "Liceo Artistico \"M. Fanoli\", Cittadella (PD)",
      periodo: "2019"
    }
  ],

  // ---- ESPERIENZA ----
  esperienza: [
    {
      ruolo: "Orafa & Incastonatrice",
      azienda: "Gori Annalisa Gioielli: Vicenza (VI)",
      periodo: "Da 01/2023 a 03/2026",
      logo: "gori-logo.jpg",
      sito: "https://goriannalisagioielli.it/",
      instagram: "https://www.instagram.com/goriannalisagioielli/",
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
      periodo: "Da 09/2022 a 12/2022",
      logo: "patros-logo.jpg",
      sito: "https://patrosgioielli.com/",
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
      descrizione: "Dettaglio dell'incisione a fish tail lungo il bordo del castone di un anello, una tecnica incisoria che richiede estrema precisione."
    }
    {
  titolo: "Croce",
  materiale: "Oro bianco, diamanti",
  immagine: "3.jpg",
  descrizione: "Ciondolo a forma di croce, interamente pavé di diamanti 33mm cadauno, pezzo unico. Dalla fusione al pezzo finito, lucidato e rodiato con catena a maglia scatolata."
},
  {
  titolo: "Anello con doppio alone",
  materiale: "Oro, diamanti",
  immagine: "2.jpg",
  descrizione: "Anello preincassato con diamante centrale circondato da un doppio alone pavé, ripreso durante la lavorazione al banco prima della lucidatura."
},
    {
  titolo: "Anello a contrariè",
  materiale: "Oro, diamanti",
  immagine: "1.jpg",
  descrizione: "Anello contrariè a fascia aperta, con pavé di diamanti tagliata interamente a mano da pezzo integro. Svasata e incassata con progetto comprendente 4 misure di pietre. da 1,50 mm a 1,10 mm."
},
  ],

  // ---- CONTATTI E INFORMAZIONI ----
  contatti: {
    telefono: "+39 333 352 0528",
    email: "tombolatosofia@gmail.com",
    linkedin: "https://www.linkedin.com/in/sofia-tombolato-7829a621b",
    patente: "Patente B, automunita",
    categoriaProtetta: "Iscritta alla L. 68/99 (Provincia di Padova), Collocamento mirato",
    noteGdpr: "Autorizzo il trattamento dei miei dati personali ai sensi del D.Lgs. 196/2003 e dell'art. 13 GDPR."
  }

};
