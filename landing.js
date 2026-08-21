/**
 * VELOFIT STUDIO - LANDING PAGE CONTROLLER & I18N
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

    // Switcher active states
    document.getElementById("langIT")?.classList.toggle("active", !isEn);
    document.getElementById("langEN")?.classList.toggle("active", isEn);
    document.getElementById("langIT")?.setAttribute("aria-pressed", String(!isEn));
    document.getElementById("langEN")?.setAttribute("aria-pressed", String(isEn));

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
      navKicker: "STUDIO BIOMECCANICO",
      navFeatures: "Funzionalità",
      navHow: "Come Funziona",
      navScience: "Letteratura",
      navFaq: "FAQ",
      btnNavLaunchText: "Apri Studio",

      heroBadgeText: "🦀 Motore Rust WebAssembly • 100% Privacy Locale",
      heroTitle: "Precisione Biomeccanica per <span class=\"text-gradient\">Ogni Pedalata</span>",
      heroSubtitle: "Tracciamento cinematico video con intelligenza artificiale, simulatore vettoriale del cockpit e motore diagnostico clinico. Senza caricare i tuoi video nel cloud e senza costosi sensori 3D.",
      btnHeroLaunchText: "Avvia Velofit Studio Gratis",
      btnHeroExploreText: "Esplora le Funzionalità",

      prevCardScoreLbl: "INDICE DI IDONEITÀ",
      prevCardCockpitLbl: "SIMULATORE COCKPIT",
      prevCardActionLbl: "PIANO D'AZIONE CLINICO",

      mLatency: "Latenza Locale in Rust WASM",
      mPrivacy: "Privacy: Zero Upload Video",
      mDisciplines: "Discipline Bici Supportate",
      mStandards: "Protocolli Clinici Integrati",

      featKicker: "TECNOLOGIA & FUNZIONALITÀ",
      featTitle: "Gli Strumenti per un Posizionamento Perfetto",
      featSubtitle: "Un'intera suite biomeccanica professionale condensata in una singola applicazione web reattiva e veloce.",

      f1Title: "AI Video Landmark Kinematics",
      f1Desc: "Tracciamento in tempo reale a 60 FPS degli angoli articolari: estensione ginocchio, inclinazione busto, apertura spalla e gomito. Calcolo automatico della cadenza e rilevamento millimetrico del punto morto inferiore (BDC).",
      f2Title: "Simulatore Vettoriale Cockpit 2D",
      f2Desc: "Trigonometria pura a 2 dimensioni che calcola con precisione millimetrica la variazione di Reach e Stack al manubrio in base ad angolo sterzo, spessori, lunghezza e inclinazione dell'attacco manubrio.",
      f3Title: "Motore Diagnostico Multi-Disciplina",
      f3Desc: "Algoritmi clinici non distorti tarati su 6 discipline: Strada (Race & Endurance), Gravel, MTB XC, MTB Enduro, Crono/Triathlon e Cicloturismo. Produce un Indice di Idoneità e un piano d'azione prioritario 1-2-3.",
      f4Title: "Player Dual Video Sincronizzato",
      f4Desc: "Confronta i tuoi video di pedalata Prima vs Dopo. Il sistema sincronizza la fase al BDC per visualizzare fianco a fianco la stabilità del bacino e la distensione della gamba a parità di pedalata.",
      f5Title: "Core Rust WebAssembly Nativo",
      f5Desc: "Tutte le formule matematiche e gli alberi decisionali sono compilati in binario WebAssembly (`.wasm`). Esecuzione a velocità nativa della CPU, 100% offline e protetto contro ispezione.",
      f6Title: "Dossier Markdown & JSON Portabile",
      f6Desc: "Importa ed esporta la tua scheda completa in formato Markdown o JSON. Tieni traccia dei cambiamenti uscita dopo uscita con il Registro Modifiche integrato.",

      sciKicker: "RIGORE CLINICO & BIOMECCANICA",
      sciTitle: "Basato sulla Letteratura Scientifica",
      sciSubtitle: "Nessuna congettura empirica casuale. Gli algoritmi di Velofit Studio applicano i protocolli clinici internazionalmente riconosciuti.",

      howKicker: "SEMPLICE, PRECISO, IMMEDIATO",
      howTitle: "Come Effettuare il Tuo Bike Fit in 3 Passi",
      step1Title: "Registra il Tuo Video",
      step1Desc: "Posiziona lo smartphone ad altezza anca e registra 20–30 secondi di pedalata sul rullo nella tua posizione abituale.",
      step2Title: "Analisi Automatica AI",
      step2Desc: "Carica il file in Velofit Studio. L'AI rileva la postura, i punti BDC e TDC, e calcola tutti gli angoli articolari in tempo reale.",
      step3Title: "Applica il Piano d'Azione",
      step3Desc: "Ricevi il tuo punteggio e un piano di regolazione 1-2-3 (altezza sella, arretramento, attacco). Applica le modifiche e registra i tuoi feedback.",

      faqKicker: "DOMANDE FREQUENTI",
      faqTitle: "Tutto Quello che Devi Sapere",
      faq1Q: "I miei video o i miei dati personali vengono caricati online?",
      faq1A: "<p><strong>Assolutamente no.</strong> Velofit Studio è un'applicazione 100% client-side. Tutti i calcoli di computer vision (MediaPipe) e il motore di calcolo Rust WebAssembly girano localmente sul tuo processore. Nessun fotogramma o dato personale lascia mai il tuo computer o smartphone.</p>",
      faq2Q: "Ho bisogno di un rullo da allenamento (turbo trainer)?",
      faq2A: "<p>Un rullo (o una cyclette stabile) è l'ideale per registrare una pedalata fluida e costante. Tuttavia, puoi anche utilizzare un cavalletto da officina con ruota sollevata o una ripresa laterale in sicurezza.</p>",
      faq3Q: "Velofit Studio è gratuito?",
      faq3A: "<p>Sì! L'applicazione web è completamente accessibile e gratuita, dotata di importazione/esportazione in Markdown e simulatore del cockpit completo.</p>",
      faq4Q: "Quali tipologie di biciclette sono supportate?",
      faq4A: "<p>Tutte le principali discipline: Bici da Corsa (Strada Endurance e Race), Gravel / All-Road, Mountain Bike Cross Country (XC), MTB Trail / Enduro, Crono / Triathlon con prolunghe aero, Ciclocross e Bici Urbana / Cicloturismo.</p>",

      ctaTitle: "Pronto a Trovare la Tua Posizione Ideale?",
      ctaSubtitle: "Inizia subito la tua analisi biomeccanica gratuita in meno di 5 minuti.",
      btnCtaLaunchText: "Apri Velofit Studio Ora",

      footerTagline: "Suite Biomeccanica & Posizionamento Bici in WebAssembly.",
      footColApp: "Applicazione",
      footLinkApp: "Apri Web App",
      footLinkFeat: "Funzionalità",
      footLinkSci: "Letteratura",
      footColTech: "Tecnologia"
    },

    en: {
      navKicker: "BIOMECHANICAL STUDIO",
      navFeatures: "Features",
      navHow: "How It Works",
      navScience: "Literature",
      navFaq: "FAQ",
      btnNavLaunchText: "Launch Studio",

      heroBadgeText: "🦀 Powered by Rust WebAssembly • 100% Client-Side Privacy",
      heroTitle: "Biomechanical Precision on <span class=\"text-gradient\">Every Ride</span>",
      heroSubtitle: "AI-driven kinematic video pose tracking, 2D vector cockpit trigonometry, and deterministic clinical diagnostics. Zero cloud uploads, zero expensive 3D sensor rigs.",
      btnHeroLaunchText: "Open Velofit Studio (Free)",
      btnHeroExploreText: "Explore Features",

      prevCardScoreLbl: "FITNESS INDEX",
      prevCardCockpitLbl: "COCKPIT SIMULATOR",
      prevCardActionLbl: "CLINICAL ACTION PLAN",

      mLatency: "Local Latency in Rust WASM",
      mPrivacy: "Privacy: Zero Video Uploads",
      mDisciplines: "Cycling Disciplines Supported",
      mStandards: "Clinical Standards Integrated",

      featKicker: "TECHNOLOGY & FEATURES",
      featTitle: "The Toolkit for a Flawless Position",
      featSubtitle: "A complete professional biomechanical fitting laboratory condensed into a high-speed, responsive web application.",

      f1Title: "AI Video Landmark Kinematics",
      f1Desc: "Real-time 60 FPS joint angle tracking: dynamic knee extension, torso angle, shoulder reach, and elbow bend. Automatic cadence calculation and Bottom Dead Center (BDC) lock.",
      f2Title: "2D Vector Cockpit Simulator",
      f2Desc: "Pure 2D vector trigonometry calculating millimetric clamp and hood Reach & Stack variations based on steerer angle, spacer stack, stem length, and stem angle.",
      f3Title: "Multi-Discipline Diagnostic Engine",
      f3Desc: "Unbiased clinical algorithms tailored across 6 distinct disciplines: Road (Race & Endurance), Gravel, MTB XC, MTB Trail/Enduro, TT/Triathlon, and Urban/Touring. Produces a 1-2-3 Action Plan.",
      f4Title: "Phase-Locked Dual Video Comparison",
      f4Desc: "Compare Before vs After pedal strokes. The player phase-locks BDC timing in lockstep to visualize pelvic stability and leg extension side-by-side.",
      f5Title: "Native Rust WebAssembly Core",
      f5Desc: "All mathematical rules and diagnostic decision trees are compiled into a high-performance `.wasm` binary bytecode running directly on your CPU with zero cloud lag.",
      f6Title: "Portable Markdown & JSON Dossiers",
      f6Desc: "Import and export your position sheet in universal Markdown and JSON formats. Track incremental tweaks over time in the built-in Fit Modification Register.",

      sciKicker: "CLINICAL EVIDENCE & BIOMECHANICS",
      sciTitle: "Built Upon Scientific Literature",
      sciSubtitle: "Zero guesswork or arbitrary formulas. Velofit Studio applies internationally validated clinical biomechanical protocols.",

      howKicker: "SIMPLE, ACCURATE, INSTANT",
      howTitle: "How to Fit Your Bike in 3 Steps",
      step1Title: "Record Your Ride",
      step1Desc: "Place your smartphone camera at hip height and record 20–30 seconds of pedaling on a trainer in your normal riding posture.",
      step2Title: "Automated AI Analysis",
      step2Desc: "Load the video into Velofit Studio. The AI tracks landmarks, identifies BDC pedal phases, and extracts joint angles instantly.",
      step3Title: "Execute the Action Plan",
      step3Desc: "Receive your Fitness Score and a prioritized 1-2-3 adjustment roadmap (saddle height, setback, stem). Make the tweaks and record feedback.",

      faqKicker: "FREQUENTLY ASKED QUESTIONS",
      faqTitle: "Everything You Need to Know",
      faq1Q: "Are my videos or anthropometric data uploaded to any server?",
      faq1A: "<p><strong>Never.</strong> Velofit Studio is 100% client-side. All MediaPipe computer vision calculations and the Rust WebAssembly binary execute entirely on your device's CPU. No video frames or personal measurements ever leave your browser.</p>",
      faq2Q: "Do I need a stationary trainer (turbo trainer)?",
      faq2A: "<p>A stationary trainer or stationary bike is ideal for recording smooth, continuous pedal strokes. However, you can also use a workshop bike stand with the rear wheel elevated or a stable side video.</p>",
      faq3Q: "Is Velofit Studio completely free?",
      faq3A: "<p>Yes! The web application is fully accessible, featuring complete Markdown/JSON import/export and the 2D cockpit simulator.</p>",
      faq4Q: "Which bike types and disciplines are supported?",
      faq4A: "<p>All major disciplines: Road (Race & Endurance), Gravel / All-Road, Mountain Bike Cross Country (XC), MTB Trail / Enduro, Time Trial / Triathlon with aero extensions, Cyclocross, and Urban / Touring.</p>",

      ctaTitle: "Ready to Dial In Your Optimal Position?",
      ctaSubtitle: "Start your free biomechanical analysis in under 5 minutes.",
      btnCtaLaunchText: "Launch Velofit Studio Now",

      footerTagline: "Biomechanics & Bike Fitting Suite in WebAssembly.",
      footColApp: "Application",
      footLinkApp: "Open Web App",
      footLinkFeat: "Features",
      footLinkSci: "Literature",
      footColTech: "Technology"
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  LANDING_I18N.init();
  LANDING_I18N.apply();

  document.getElementById("langIT")?.addEventListener("click", () => LANDING_I18N.setLanguage("it"));
  document.getElementById("langEN")?.addEventListener("click", () => LANDING_I18N.setLanguage("en"));
});
