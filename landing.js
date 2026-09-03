/**
 * VELOFIT STUDIO — TASTE SKILL LANDING CONTROLLER & LOCALIZATION
 */

const LANDING_I18N = {
  currentLang: "it",

  init() {
    try {
      const saved = localStorage.getItem("vlft_lang");
      if (saved === "it" || saved === "en") {
        this.currentLang = saved;
      } else {
        const navLang = navigator.language || "it";
        this.currentLang = navLang.startsWith("it") ? "it" : "en";
      }
    } catch (e) {
      this.currentLang = "it";
    }
  },

  setLanguage(lang) {
    if (lang !== "it" && lang !== "en") return;
    this.currentLang = lang;
    try {
      localStorage.setItem("vlft_lang", lang);
    } catch (e) {}
    this.apply();
  },

  apply() {
    const isEn = this.currentLang === "en";
    document.documentElement.lang = this.currentLang;

    // Segmented toggle active states
    const btnIT = document.getElementById("langIT");
    const btnEN = document.getElementById("langEN");
    if (btnIT && btnEN) {
      btnIT.classList.toggle("active", !isEn);
      btnEN.classList.toggle("active", isEn);
      btnIT.setAttribute("aria-pressed", String(!isEn));
      btnEN.setAttribute("aria-pressed", String(isEn));
    }

    const dict = this.DICTIONARY[this.currentLang] || this.DICTIONARY["it"];
    for (const [id, text] of Object.entries(dict)) {
      const el = document.getElementById(id);
      if (el) {
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.placeholder = text;
        } else {
          el.innerHTML = text;
        }
      }
    }
  },

  DICTIONARY: {
    it: {
      navKicker: "SUITE BIOMECCANICA",
      navFeatures: "Piattaforma",
      navBento: "Cinematica",
      navScience: "Protocolli Clinici",
      navFaq: "FAQ",
      btnNavLaunchText: "Avvia Studio",

      heroBadgeText: "100% LOCALE IN RUST WEBASSEMBLY • ZERO CLOUD UPLOAD",
      heroTitle: "Precisione Biomeccanica.<br><span class=\"text-gradient\">Nel tuo Browser.</span>",
      heroSubtitle: "Tracciamento cinematico AI a 60 FPS, trigonometria vettoriale del cockpit e protocolli clinici deterministici.",
      btnHeroLaunchText: "Avvia Velofit Studio Gratis",
      btnHeroExploreText: "Specifiche Tecniche",

      mLatency: "Latenza Locale in WASM",
      mPrivacy: "Elaborazione On-Device",
      mDisciplines: "Discipline Bici Supportate",

      hudKneeLabel: "GINOCCHIO BDC",
      hudKneeValue: "143.2° OTTIMALE",
      hudTorsoLabel: "BUSTO",
      hudCadenceLabel: "CADENZA RILEVATA",
      hudSaddleLabel: "ALTEZZA SELLA:",
      hudReachLabel: "COCKPIT REACH:",
      hudFitLabel: "INDICE FIT:",
      hudFitVal: "94% CONFORME",

      featKicker: "TECNOLOGIA & ARCHITETTURA",
      featTitle: "Costruito per la Massima Accuratezza",
      featSubtitle: "Un approccio ingegneristico al bike fitting: niente congetture empiriche, solo vettori, angoli articolari ed evidenza clinica.",

      f1Title: "Tracciamento Landmark AI a 60 FPS",
      f1Desc: "MediaPipe Pose traccia in tempo reale 33 coordinate scheletriche. Rileva istantaneamente l'inversione sinusoidale della caviglia per bloccare il fotogramma al Punto Morto Inferiore (BDC) ed estrarre la distensione femoro-rotulea esatta.",
      f2Title: "Simulatore Vettoriale Cockpit 2D",
      f2Desc: "Risolutore vettoriale bidimensionale che calcola la variazione di Reach e Stack al manubrio in base all'angolo sterzo, distanziali sotto l'attacco, lunghezza e inclinazione dello stem.",
      f3Title: "Motore Diagnostico Deterministico Multi-Disciplina",
      f3Desc: "Alberi decisionali calibrati su Strada (Race & Endurance), Gravel, MTB XC, MTB Enduro, Crono/Triathlon e Cicloturismo. Nessun testo casuale: il motore calcola l'Indice di Idoneità e genera un piano d'azione prioritario 1-2-3 con spostamenti millimetrici lungo l'asse piantone (ratio Retül 1.25 mm/°).",
      f4Title: "Player Dual Video Sincronizzato",
      f4Desc: "Confronto affiancato Prima vs Dopo. I due video vengono sincronizzati alla stessa identica fase di pedalata al BDC per validare visivamente l'effetto di ogni regolazione meccanica.",
      f5Title: "Core Rust WebAssembly",
      f5Desc: "Le formule matematiche e le tabelle di tolleranza sono compilate in binario bytecode `.wasm`. Calcolo istantaneo a velocità nativa della CPU, completamente offline e protetto.",
      f6Title: "Dossier Markdown & JSON",
      f6Desc: "Esporta la tua scheda completa in file aperti e standard. Mantieni lo storico di ogni uscita con il Registro Modifiche per monitorare nel tempo l'adattamento biomeccanico.",

      sciKicker: "EVIDENZA MEDICO-SPORTIVA",
      sciTitle: "Protocolli Biomeccanici Convalidati",
      sciSubtitle: "Velofit Studio implementa standard clinici estratti dalla letteratura scientifica internazionale di medicina dello sport e biomeccanica applicata.",

      howKicker: "WORKFLOW IN 3 PASSI",
      howTitle: "Dalla Registrazione alla Regolazione",
      step1Title: "Registra la Ripresa",
      step1Desc: "Posiziona la fotocamera ad altezza movimento centrale/bacino, perfettamente perpendicolare alla bicicletta sul rullo. Registra 20–30 secondi a cadenza naturale.",
      step2Title: "Analisi Telemetrica AI",
      step2Desc: "Carica il file video locale. Il modello estrae i landmark articolari a 60 FPS, rileva i cicli di pedalata e calcola l'angolo di ginocchio, busto e gomito al BDC.",
      step3Title: "Esegui le Modifiche",
      step3Desc: "Consulta il Piano d'Azione Prioritario 1-2-3. Applica gli spostamenti millimetrici suggeriti per sella e attacco manubrio e annota i riscontri nel registro.",

      faqKicker: "DOMANDE FREQUENTI",
      faqTitle: "Informazioni & Sicurezza",
      faq1Q: "I miei video o i dati personali vengono inviati a server esterni?",
      faq1A: "<p><strong>Nessun fotogramma o dato personale lascia mai il tuo dispositivo.</strong> Velofit Studio opera al 100% in locale tramite computer vision (Google MediaPipe) e WebAssembly compilato in Rust. Tutta l'elaborazione avviene sulla CPU/GPU del tuo browser.</p>",
      faq2Q: "Come devo posizionare la telecamera per la massima precisione?",
      faq2A: "<p>Per minimizzare l'errore di parallasse, posiziona lo smartphone a circa 2–3 metri di distanza, ad altezza anca/movimento centrale (circa 80–90 cm da terra) e rigorosamente a 90° perpendicolare rispetto alla linea della bicicletta.</p>",
      faq3Q: "Velofit Studio è accessibile gratuitamente?",
      faq3A: "<p>Sì, la suite web è liberamente accessibile, completa di diagnostica automatica, simulatore vettoriale del cockpit e salvataggio dei dossier in formato Markdown e JSON.</p>",
      faq4Q: "Quali tipologie di biciclette sono supportate?",
      faq4A: "<p>La suite include target biometrici dedicati per: Bici da Corsa (Strada Race & Endurance), Gravel / All-Road, Mountain Bike Cross Country (XC), MTB Trail / Enduro, Cronometro / Triathlon con prolunghe aero e Bici Urbana / Cicloturismo.</p>",

      ctaTitle: "Pronto a Perfezionare la Tua Posizione?",
      ctaSubtitle: "Avvia la suite biomeccanica nel tuo browser ed effettua l'analisi del tuo video in meno di 5 minuti.",
      btnCtaLaunchText: "Avvia Velofit Studio",

      footerTagline: "Suite biomeccanica e simulatore vettoriale del cockpit compilato in Rust WebAssembly.",
      footColApp: "Applicazione",
      footLinkApp: "Avvia Web App",
      footLinkFeat: "Specifiche Cinematica",
      footLinkSci: "Protocolli Clinici",
      footColTech: "Sviluppo & Open Source"
    },

    en: {
      navKicker: "BIOMECHANICAL SUITE",
      navFeatures: "Platform",
      navBento: "Kinematics",
      navScience: "Clinical Protocols",
      navFaq: "FAQ",
      btnNavLaunchText: "Launch Studio",

      heroBadgeText: "100% CLIENT-SIDE IN RUST WEBASSEMBLY • ZERO CLOUD UPLOADS",
      heroTitle: "Biomechanical Precision.<br><span class=\"text-gradient\">Directly in Your Browser.</span>",
      heroSubtitle: "60 FPS AI pose kinematics, 2D vector cockpit trigonometry, and deterministic clinical diagnostics.",
      btnHeroLaunchText: "Launch Velofit Studio (Free)",
      btnHeroExploreText: "Technical Specs",

      mLatency: "Local Latency in WASM",
      mPrivacy: "On-Device Processing",
      mDisciplines: "Bike Disciplines Supported",

      hudKneeLabel: "KNEE BDC",
      hudKneeValue: "143.2° OPTIMAL",
      hudTorsoLabel: "TORSO",
      hudCadenceLabel: "DETECTED CADENCE",
      hudSaddleLabel: "SADDLE HEIGHT:",
      hudReachLabel: "COCKPIT REACH:",
      hudFitLabel: "FIT INDEX:",
      hudFitVal: "94% OPTIMAL",

      featKicker: "TECHNOLOGY & ARCHITECTURE",
      featTitle: "Engineered for Clinical Accuracy",
      featSubtitle: "An engineering-first approach to bike fitting: zero guesswork, pure vector trigonometry, joint mechanics, and clinical evidence.",

      f1Title: "60 FPS AI Landmark Kinematics",
      f1Desc: "MediaPipe Pose tracks 33 skeletal landmarks in real time. It detects the sinusoidal ankle velocity inversion to phase-lock Bottom Dead Center (BDC) and compute exact knee extension.",
      f2Title: "2D Vector Cockpit Solver",
      f2Desc: "Two-dimensional vector trigonometry computing precise handlebar Reach and Stack deltas from steerer angle, spacer stack, stem length, and stem angle.",
      f3Title: "Deterministic Multi-Discipline Diagnostic Engine",
      f3Desc: "Decision trees calibrated for Road (Race & Endurance), Gravel, MTB XC, MTB Trail/Enduro, TT/Triathlon, and Urban/Touring. Pure logic: computes Fitness Score and generates a prioritized 1-2-3 Action Plan with millimetric seatpost adjustments (Retül ratio 1.25 mm/°).",
      f4Title: "Synchronized Dual Video Engine",
      f4Desc: "Side-by-side Before vs After validation. Both video feeds phase-lock at BDC to visually inspect pelvic stability and leg extension changes under identical load.",
      f5Title: "Rust WebAssembly Core",
      f5Desc: "Mathematical formulas and diagnostic matrices are compiled to low-level `.wasm` bytecode. Runs at native CPU speed, 100% offline and tamper-resistant.",
      f6Title: "Universal Markdown & JSON Dossiers",
      f6Desc: "Export comprehensive fitting dossiers in open formats. Maintain your Fit Modification Log ride after ride to document long-term biomechanical adaptation.",

      sciKicker: "SPORTS MEDICINE EVIDENCE",
      sciTitle: "Validated Biomechanical Protocols",
      sciSubtitle: "Velofit Studio implements clinical standards derived from peer-reviewed sports medicine and orthopaedic cycling literature.",

      howKicker: "3-STEP WORKFLOW",
      howTitle: "From Recording to Calibration",
      step1Title: "Record Your Ride",
      step1Desc: "Place the camera at hip/BB height, exactly perpendicular (90°) to the bicycle on a trainer. Record 20–30 seconds at your natural cadence.",
      step2Title: "AI Telemetry Extraction",
      step2Desc: "Load the local video file. The neural network extracts 60 FPS skeletal landmarks, detects cadence cycles, and calculates BDC joint angles.",
      step3Title: "Execute the Action Plan",
      step3Desc: "Review the prioritized 1-2-3 Action Plan. Apply the millimeter-exact saddle and stem adjustments, then log rider feedback.",

      faqKicker: "FREQUENTLY ASKED QUESTIONS",
      faqTitle: "Information & Security",
      faq1Q: "Are my videos or anthropometric data sent to external servers?",
      faq1A: "<p><strong>Never. No video frames or personal metrics ever leave your device.</strong> Velofit Studio operates 100% locally via Google MediaPipe and compiled Rust WebAssembly on your browser's CPU/GPU.</p>",
      faq2Q: "How should I position the camera for maximum accuracy?",
      faq2A: "<p>To eliminate parallax distortion, place your camera 2–3 meters away, at hip/bottom bracket height (around 80–90 cm from the floor), strictly perpendicular (90°) to the bicycle frame.</p>",
      faq3Q: "Is Velofit Studio completely free to use?",
      faq3A: "<p>Yes, the web application is fully accessible, featuring automated clinical diagnostics, 2D vector cockpit solver, and Markdown/JSON export capabilities.</p>",
      faq4Q: "Which cycling disciplines are supported?",
      faq4A: "<p>The engine includes dedicated biomechanical targets for: Road (Race & Endurance), Gravel / All-Road, Mountain Bike Cross Country (XC), MTB Trail / Enduro, Time Trial / Triathlon with aero bars, and Urban / Touring.</p>",

      ctaTitle: "Ready to Dial In Your Optimal Position?",
      ctaSubtitle: "Launch the biomechanics suite in your browser and analyze your video in under 5 minutes.",
      btnCtaLaunchText: "Launch Velofit Studio",

      footerTagline: "Biomechanical suite and 2D vector cockpit solver compiled in Rust WebAssembly.",
      footColApp: "Application",
      footLinkApp: "Launch Web App",
      footLinkFeat: "Kinematics Specs",
      footLinkSci: "Clinical Protocols",
      footColTech: "Development & Open Source"
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  LANDING_I18N.init();
  LANDING_I18N.apply();

  document.getElementById("langIT")?.addEventListener("click", () => LANDING_I18N.setLanguage("it"));
  document.getElementById("langEN")?.addEventListener("click", () => LANDING_I18N.setLanguage("en"));
});
