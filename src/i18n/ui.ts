export const LANGS = ["en", "it"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "en";

export const LANG_META: Record<Lang, { flag: string; label: string; htmlLang: string }> = {
  en: { flag: "🇬🇧", label: "English", htmlLang: "en" },
  it: { flag: "🇮🇹", label: "Italiano", htmlLang: "it" },
};

/** Prefix a root-relative path with the language segment. English lives at the root. */
export function localize(lang: Lang, path: string): string {
  if (lang === DEFAULT_LANG) return path;
  return path === "/" ? "/it/" : `/it${path}`;
}

/** Strip the language segment back off, so the switcher can stay on the same page. */
export function depath(path: string): string {
  const p = path.replace(/^\/it(?=\/|$)/, "") || "/";
  return p.endsWith("/") && p !== "/" ? p.slice(0, -1) : p;
}

type Dict = Record<string, string>;

const en: Dict = {
  // nav
  "nav.index": "Index",
  "nav.works": "Works",
  "nav.bio": "Bio",
  "nav.contact": "Contact",
  "nav.home_aria": "Andrea Ricciotti — Home",
  "nav.role_tag": "Dir · Ed",
  "nav.status": "Open to work",
  "nav.primary": "Primary",
  "nav.lang_aria": "Choose language",

  // home
  "home.title": "Andrea Ricciotti — Director / Editor",
  "home.desc": "Andrea Ricciotti — film editor and director based in Rome. Selected work for Netflix, Prime Video, Sky and Rai.",
  "home.file": "File · Portfolio",
  "home.role_label": "001 — Role",
  "home.role": "Director",
  "home.role_and": "&",
  "home.role_2": "Editor",
  "home.cta_works": "View the works",
  "home.cta_brief": "Send a brief",
  "home.photo_caption": "Rome",
  "home.stat_projects": "A · Projects",
  "home.stat_projects_n": "shipped",
  "home.stat_editor": "B · As Editor",
  "home.stat_editor_n": "credits",
  "home.stat_director": "C · As Director",
  "home.stat_director_n": "films",
  "home.stat_exp": "D · Experience",
  "home.stat_exp_n": "years",
  "home.reel_label": "§ 02 — Selected work",
  "home.reel_title": "Recent cuts.",
  "home.reel_all": "All works ↗",
  "home.marquee": "Director|Editor|Assembly|Trailer Cutter|Writer|Rome · IT",

  // works index
  "works.title": "Works / Index — Andrea Ricciotti",
  "works.desc": "The full filmography of Andrea Ricciotti — editing and directing credits from 2016 to today.",
  "works.section": "§ 01 — Filmography",
  "works.entries": "entries",
  "works.h1": "Works",
  "works.h1_it": "the index.",
  "works.lede": "A working list of projects in post-production and direction. Filter by role. Hover a row to preview the slate.",
  "works.all": "All",
  "works.as_director": "As Director",
  "works.as_editor": "As Editor",
  "works.as_writer": "As Writer",
  "works.col_n": "N°",
  "works.col_title": "Title",
  "works.col_credit": "Credit",
  "works.col_platform": "Platform",
  "works.col_format": "Format",
  "works.col_view": "View",
  "works.close_title": "Have a cut",
  "works.close_it": "in mind?",
  "works.marquee": "Cinema|Streaming|Documentary|Short Film|Trailer|Music Video",

  // project page
  "proj.back": "← Works",
  "proj.about": "§ — About",
  "proj.my_role": "§ — My role",
  "proj.sheet": "§ — Technical sheet",
  "proj.press": "§ — Press",
  "proj.coming_soon": "Coming Soon",
  "proj.view_external": "View externally",
  "proj.open_on": "Open on",
  "proj.all_works": "← All works",
  "proj.prev": "← Prev",
  "proj.next": "Next →",
  "proj.nav_aria": "Project navigation",

  // bio
  "bio.title": "Bio — Andrea Ricciotti",
  "bio.desc": "Andrea Ricciotti — editor and director, born in Rome in 1995. Career, credits and CV.",
  "bio.section": "§ 03 — Profile",
  "bio.est": "Est. 1995 · Rome, IT",
  "bio.h1_a": "Between",
  "bio.h1_b": "instinct",
  "bio.h1_c": "and",
  "bio.h1_d": "patience.",
  "bio.lede": "I cut stories for cinema and streaming, and direct short-form work about memory, rupture, and the quiet moments between.",
  "bio.cv_label": "§ — CV · Highlights",
  "bio.cv": "Curriculum Vitae",
  "bio.p1": "orn in 1995, I took my first steps into directing with Claudio Di Biagio's course {i}La regia e l'idea{/i} at Artithesi in 2016. My directorial debut came with the web series {i}Love: Edit{/i}, produced by Artithesi and ImageHunters.",
  "bio.p2": "After a few years navigating videomaking and filmmaking, I won the {i}SIAE SILLUMINA{/i} grant in 2018, directing {i}CLARK{/i} — a short film that marked a turning point in my career.",
  "bio.p3": "I sharpened my skills as an assistant editor ({i}Bentornato Presidente{/i}, {i}Permette, Alberto Sordi?{/i}), before stepping onto set as an assistant director ({i}Il Cacciatore S3{/i}, {i}Ai Confini del Male{/i}).",
  "bio.p4": "My path led me to assembly editing ({i}Altrimenti ci Arrabbiamo{/i}, {i}The Bad Guy{/i}, {i}Shake{/i}) before taking the lead in the cutting room, shaping {i}Pesci Piccoli{/i} (Prime Video) and {i}Hanno Ucciso l'Uomo Ragno{/i} (Sky, 2024).",
  "bio.p5": "Between 2019 and 2023, I cut trailers for Cit Studio. My latest directorial work, {i}Combattere{/i} — produced by PunxFilm — wrapped post-production in January 2024. Most recently, I completed {i}Pesci Piccoli S2{/i} and the documentary {i}Benetton Formula{/i}. I also edited Federico Zampaglione's latest feature film, which premiered in London. In 2026, I won the 8th edition of {i}La Realtà che Non Esiste{/i} with {i}Il Primo della Classe{/i} — produced with One More Pictures and Rai Cinema, and selected for Venice.",
  "bio.tl_section": "§ 04 — Timeline",
  "bio.tl_title": "Chronology.",
  "bio.close": "Want to work",
  "bio.close_it": "together?",
  "bio.fact_based": "Based in",
  "bio.fact_based_v": "Rome, IT",
  "bio.fact_langs": "Languages",
  "bio.fact_langs_v": "Italian · English · French",
  "bio.fact_exp": "Experience",
  "bio.fact_exp_v": "10+ years",
  "bio.fact_tools": "Tools",
  "bio.fact_rep": "Rep.",
  "bio.fact_rep_v": "Self-represented",
  "bio.fact_status": "Status",
  "bio.fact_status_v": "Open to commissions",

  // contact
  "contact.title": "Contact — Andrea Ricciotti",
  "contact.desc": "Get in touch with Andrea Ricciotti for editing and directing work.",
  "contact.send": "Send",
  "contact.message": "message.",
  "contact.note": "No tracking · No newsletter · Just a message.",
  "contact.city": "Rome, ",
  "contact.available": "Available worldwide for remote cuts and travel-friendly productions.",
  "contact.opt_feature": "Feature film",
  "contact.opt_series": "TV series",
  "contact.opt_doc": "Documentary",
  "contact.opt_short": "Short film",
  "contact.opt_trailer": "Trailer",
  "contact.opt_mv": "Music video",
  "contact.opt_other": "Other",
  "contact.onset": "On set · Il Primo della Classe · 2026",

  // shared
  "common.rights": "All rights reserved.",
  "common.built": "Built ex-novo in Astro.",
  "common.get_in_touch": "§ — Get in touch",
  "common.elsewhere": "§ — Elsewhere",
  "common.nav": "§ — Nav",
  "common.build": "§ — Build",
};

const it: Dict = {
  "nav.index": "Indice",
  "nav.works": "Lavori",
  "nav.bio": "Bio",
  "nav.contact": "Contatti",
  "nav.home_aria": "Andrea Ricciotti — Home",
  "nav.role_tag": "Reg · Mont",
  "nav.status": "Disponibile",
  "nav.primary": "Principale",
  "nav.lang_aria": "Scegli la lingua",

  "home.title": "Andrea Ricciotti — Regista / Montatore",
  "home.desc": "Andrea Ricciotti — montatore e regista, con base a Roma. Lavori per Netflix, Prime Video, Sky e Rai.",
  "home.file": "Archivio · Portfolio",
  "home.role_label": "001 — Ruolo",
  "home.role": "Regista",
  "home.role_and": "&",
  "home.role_2": "Montatore",
  "home.cta_works": "Guarda i lavori",
  "home.cta_brief": "Scrivimi",
  "home.photo_caption": "Roma",
  "home.stat_projects": "A · Progetti",
  "home.stat_projects_n": "realizzati",
  "home.stat_editor": "B · Al montaggio",
  "home.stat_editor_n": "crediti",
  "home.stat_director": "C · Alla regia",
  "home.stat_director_n": "film",
  "home.stat_exp": "D · Esperienza",
  "home.stat_exp_n": "anni",
  "home.reel_label": "§ 02 — Lavori scelti",
  "home.reel_title": "Ultimi montaggi.",
  "home.reel_all": "Tutti i lavori ↗",
  "home.marquee": "Regia|Montaggio|Assemblaggio|Trailer|Sceneggiatura|Roma · IT",

  "works.title": "Lavori / Indice — Andrea Ricciotti",
  "works.desc": "La filmografia completa di Andrea Ricciotti — crediti di montaggio e regia dal 2016 a oggi.",
  "works.section": "§ 01 — Filmografia",
  "works.entries": "voci",
  "works.h1": "Lavori",
  "works.h1_it": "l'indice.",
  "works.lede": "L'elenco dei progetti di montaggio e regia. Filtra per ruolo. Passa sopra una riga per vedere l'anteprima.",
  "works.all": "Tutti",
  "works.as_director": "Alla regia",
  "works.as_editor": "Al montaggio",
  "works.as_writer": "Alla scrittura",
  "works.col_n": "N°",
  "works.col_title": "Titolo",
  "works.col_credit": "Credito",
  "works.col_platform": "Piattaforma",
  "works.col_format": "Formato",
  "works.col_view": "Vedi",
  "works.close_title": "Hai un montaggio",
  "works.close_it": "in mente?",
  "works.marquee": "Cinema|Streaming|Documentario|Cortometraggio|Trailer|Videoclip",

  "proj.back": "← Lavori",
  "proj.about": "§ — Il progetto",
  "proj.my_role": "§ — Il mio ruolo",
  "proj.sheet": "§ — Scheda tecnica",
  "proj.press": "§ — Rassegna stampa",
  "proj.coming_soon": "Prossimamente",
  "proj.view_external": "Guarda online",
  "proj.open_on": "Apri su",
  "proj.all_works": "← Tutti i lavori",
  "proj.prev": "← Prec",
  "proj.next": "Succ →",
  "proj.nav_aria": "Navigazione progetti",

  "bio.title": "Bio — Andrea Ricciotti",
  "bio.desc": "Andrea Ricciotti — montatore e regista, nato a Roma nel 1995. Percorso, crediti e CV.",
  "bio.section": "§ 03 — Profilo",
  "bio.est": "Classe 1995 · Roma, IT",
  "bio.h1_a": "Tra",
  "bio.h1_b": "istinto",
  "bio.h1_c": "e",
  "bio.h1_d": "pazienza.",
  "bio.lede": "Monto storie per il cinema e lo streaming, e dirigo lavori brevi sulla memoria, sulle fratture e sui momenti silenziosi che stanno in mezzo.",
  "bio.cv_label": "§ — CV · In breve",
  "bio.cv": "Curriculum Vitae",
  "bio.p1": "ato nel 1995, ho mosso i primi passi verso la regia con il corso di Claudio Di Biagio {i}La regia e l'idea{/i} ad Artithesi, nel 2016. L'esordio alla regia è arrivato con la web series {i}Love: Edit{/i}, prodotta da Artithesi e ImageHunters.",
  "bio.p2": "Dopo qualche anno tra videomaking e cinema, nel 2018 ho vinto il bando {i}SIAE SILLUMINA{/i} dirigendo {i}CLARK{/i}, un cortometraggio che ha segnato una svolta nel mio percorso.",
  "bio.p3": "Mi sono formato come assistente al montaggio ({i}Bentornato Presidente{/i}, {i}Permette? Alberto Sordi{/i}), prima di passare al set come aiuto regia ({i}Il Cacciatore 3{/i}, {i}Ai Confini del Male{/i}).",
  "bio.p4": "Da lì sono arrivato al montaggio di assemblaggio ({i}Altrimenti ci Arrabbiamo{/i}, {i}The Bad Guy{/i}, {i}Shake{/i}), per poi prendere in mano la sala di montaggio con {i}Pesci Piccoli{/i} (Prime Video) e {i}Hanno Ucciso l'Uomo Ragno{/i} (Sky, 2024).",
  "bio.p5": "Tra il 2019 e il 2023 ho montato trailer per Cit Studio. Il mio ultimo lavoro da regista, {i}Combattere{/i} — prodotto da PunxFilm — ha chiuso la post-produzione a gennaio 2024. Più di recente ho completato {i}Pesci Piccoli 2{/i} e il documentario {i}Benetton Formula{/i}. Ho montato anche l'ultimo film di Federico Zampaglione, presentato in anteprima a Londra. Nel 2026 ho vinto l'VIII edizione de {i}La Realtà che Non Esiste{/i} con {i}Il Primo della Classe{/i}, prodotto da One More Pictures con Rai Cinema e selezionato a Venezia.",
  "bio.tl_section": "§ 04 — Percorso",
  "bio.tl_title": "Cronologia.",
  "bio.close": "Lavoriamo",
  "bio.close_it": "insieme?",
  "bio.fact_based": "Base",
  "bio.fact_based_v": "Roma, IT",
  "bio.fact_langs": "Lingue",
  "bio.fact_langs_v": "Italiano · Inglese · Francese",
  "bio.fact_exp": "Esperienza",
  "bio.fact_exp_v": "10+ anni",
  "bio.fact_tools": "Software",
  "bio.fact_rep": "Agenzia",
  "bio.fact_rep_v": "Nessuna",
  "bio.fact_status": "Stato",
  "bio.fact_status_v": "Disponibile per incarichi",

  "contact.title": "Contatti — Andrea Ricciotti",
  "contact.desc": "Scrivi ad Andrea Ricciotti per lavori di montaggio e regia.",
  "contact.send": "Mandami",
  "contact.message": "un messaggio.",
  "contact.note": "Niente tracciamento · Niente newsletter · Solo un messaggio.",
  "contact.city": "Roma, ",
  "contact.available": "Disponibile ovunque per montaggi da remoto e produzioni in trasferta.",
  "contact.opt_feature": "Lungometraggio",
  "contact.opt_series": "Serie TV",
  "contact.opt_doc": "Documentario",
  "contact.opt_short": "Cortometraggio",
  "contact.opt_trailer": "Trailer",
  "contact.opt_mv": "Videoclip",
  "contact.opt_other": "Altro",
  "contact.onset": "Sul set · Il Primo della Classe · 2026",

  "common.rights": "Tutti i diritti riservati.",
  "common.built": "Costruito da zero in Astro.",
  "common.get_in_touch": "§ — Contatti",
  "common.elsewhere": "§ — Altrove",
  "common.nav": "§ — Naviga",
  "common.build": "§ — Build",
};

const DICTS: Record<Lang, Dict> = { en, it };

/** Split a dictionary string on {i}...{/i} into plain/italic runs. */
export function runs(text: string): { text: string; italic: boolean }[] {
  return text
    .split(/(\{i\}.*?\{\/i\})/g)
    .filter(Boolean)
    .map((part) =>
      part.startsWith("{i}")
        ? { text: part.slice(3, -4), italic: true }
        : { text: part, italic: false },
    );
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    return DICTS[lang][key] ?? DICTS[DEFAULT_LANG][key] ?? key;
  };
}

/* ------------------------------------------------------------------ *
 * Project data translation.
 * Categories, credits and technical-sheet rows are drawn from a small
 * closed vocabulary, so they are translated by lookup rather than being
 * duplicated on all 55 entries. Only synopsis and contribution are
 * written out per project.
 * ------------------------------------------------------------------ */

const CATEGORY_IT: Dict = {
  "Feature Film": "Lungometraggio",
  "Short Film": "Cortometraggio",
  "Short Film · Horror": "Cortometraggio · Horror",
  "TV Series": "Serie TV",
  "TV Movie": "Film TV",
  "Documentary": "Documentario",
  "Music Video": "Videoclip",
  "Commercial": "Spot",
  "Reality": "Reality",
  "Podcast": "Podcast",
  "Interview": "Intervista",
  "Web Series": "Web Series",
  "Branded Content": "Branded Content",
  "Sport": "Sport",
  "Reel": "Reel",
  "Interactive": "Interattivo",
};

/** Credit lines are built from these tokens, joined by · or —. */
const CREDIT_IT: Dict = {
  "Director": "Regia",
  "Co-Director": "Co-regia",
  "Editor": "Montaggio",
  "Writer": "Sceneggiatura",
  "Co-Editor": "Co-montaggio",
  "Pre-Editor": "Pre-montaggio",
  "Additional Editor": "Montaggio aggiuntivo",
  "On-Set Editor": "Montaggio in presa diretta",
  "Assistant Editor": "Assistente al montaggio",
  "Assistant Director": "Aiuto regia",
  "Second Assistant Director": "Secondo aiuto regia",
  "Trailer Editor": "Montaggio trailer",
  "Trailer Author": "Autore del trailer",
  "Editing Supervisor": "Supervisione al montaggio",
  "Supervising Editor": "Supervisione al montaggio",
  "Creative Director": "Direzione creativa",
  "Filmmaker": "Filmmaker",
  "Cinematography": "Fotografia",
  "Host": "Conduzione",
  "Backstage": "Backstage",
  "Camera": "Operatore",
  "DoP": "Fotografia",
};

const SPEC_KEY_IT: Dict = {
  "Format": "Formato",
  "Platform": "Piattaforma",
  "Production": "Produzione",
  "Producer": "Produttore",
  "Direction": "Regia",
  "Screenplay": "Sceneggiatura",
  "Editing": "Montaggio",
  "Cinematography": "Fotografia",
  "Cast": "Cast",
  "With": "Con",
  "Special appearance": "Con la partecipazione di",
  "Music": "Musiche",
  "Runtime": "Durata",
  "Release": "Uscita",
  "Premiere": "Anteprima",
  "Award": "Premio",
  "Credit": "Credito",
  "Created by": "Ideato da",
  "Based on": "Tratto da",
  "Year": "Anno",
  "Years": "Anni",
  "Status": "Stato",
  "Episodes": "Episodi",
  "Season": "Stagione",
  "Artist": "Artista",
  "Client": "Cliente",
  "Brand": "Brand",
  "Event": "Evento",
  "Venue": "Sede",
  "Guest": "Ospite",
  "Subject": "Soggetto",
  "For": "Per",
  "Also known as": "Conosciuto anche come",
  "Track produced by": "Brano prodotto da",
  "Campaign": "Campagna",
  "Label": "Etichetta",
  "From": "Da",
  "Executive producer": "Produttore esecutivo",
  "Production design": "Scenografia",
  "Costumes": "Costumi",
  "Make-up": "Trucco",
  "Mix": "Mix",
  "Colour": "Color",
  "VFX": "VFX",
  "Selection": "Selezione",
  "Main partner": "Main partner",
  "Note": "Nota",
};

/** Only the spec values that are prose rather than proper nouns. */
const SPEC_VALUE_IT: Dict = {
  "Self-produced": "Autoprodotto",
  "In development": "In sviluppo",
  "Completed": "Completato",
  "Ongoing": "In corso",
  "Sport · Live event": "Sport · Evento dal vivo",
  "Interactive video": "Video interattivo",
  "First short film": "Primo cortometraggio",
  "Filmmaker · Editing": "Riprese · Montaggio",
  "Foro Italico, Rome": "Foro Italico, Roma",
  "The novel by Donatella Di Pietrantonio": "Il romanzo di Donatella Di Pietrantonio",
  "Othello by William Shakespeare": "Otello di William Shakespeare",
};

const WORD_IT: Dict = {
  "Feature Film": "Lungometraggio",
  "Short Film": "Cortometraggio",
  "TV Series": "Serie TV",
  "TV Mini Series": "Miniserie TV",
  "TV Movie": "Film TV",
  "Documentary": "Documentario",
  "Music Video": "Videoclip",
  "Commercial": "Spot",
  "Reality Series": "Reality",
  "Interview": "Intervista",
  "Branded Series": "Serie branded",
  "Branded Content": "Branded Content",
  "Web Series": "Web Series",
  "Podcast": "Podcast",
  "Mockumentary": "Mockumentary",
  "Horror": "Horror",
  "Drama": "Drammatico",
  "Comedy": "Commedia",
  "Romance": "Sentimentale",
  "episodes": "episodi",
  "Episodes": "Episodi",
  "min": "min",
};

const MONTH_IT: Dict = {
  January: "gennaio", February: "febbraio", March: "marzo", April: "aprile",
  May: "maggio", June: "giugno", July: "luglio", August: "agosto",
  September: "settembre", October: "ottobre", November: "novembre", December: "dicembre",
};

function translateSegments(text: string, table: Dict): string {
  return text
    .split(" · ")
    .map((seg) => table[seg] ?? seg)
    .join(" · ");
}

export function tCategory(v: string, lang: Lang): string {
  return lang === "it" ? CATEGORY_IT[v] ?? v : v;
}

export function tCredit(v: string, lang: Lang): string {
  if (lang !== "it") return v;
  // credits look like "Director · Editor" or "Editor — Episodes 5, 7, 8"
  const [head, ...tail] = v.split(" — ");
  let out = translateSegments(head, CREDIT_IT);
  if (tail.length) {
    let rest = tail.join(" — ");
    for (const [k, val] of Object.entries(WORD_IT)) {
      rest = rest.replace(new RegExp(`\\b${k}\\b`, "g"), val);
    }
    out += ` — ${rest}`;
  }
  return out;
}

export function tSpecKey(k: string, lang: Lang): string {
  return lang === "it" ? SPEC_KEY_IT[k] ?? k : k;
}

export function tSpecValue(v: string, lang: Lang): string {
  if (lang !== "it") return v;
  if (SPEC_VALUE_IT[v]) return SPEC_VALUE_IT[v];
  let out = v;
  for (const [k, val] of Object.entries(WORD_IT)) {
    out = out.replace(new RegExp(`\\b${k}\\b`, "g"), val);
  }
  for (const [k, val] of Object.entries(MONTH_IT)) {
    out = out.replace(new RegExp(`\\b${k}\\b`, "g"), val);
  }
  return out;
}

export function tYear(v: string | undefined, lang: Lang): string | undefined {
  if (!v || lang !== "it") return v;
  let out = v.replace("Upcoming", "In arrivo").replace("ongoing", "in corso");
  for (const [k, val] of Object.entries(MONTH_IT)) {
    out = out.replace(new RegExp(`\\b${k}\\b`, "g"), val);
  }
  return out;
}

/* ------------------------------------------------------------------ *
 * Prose: synopses and role descriptions, keyed by the English source.
 * Repeated strings ("Edited the short.") translate once for all of them.
 * ------------------------------------------------------------------ */

const PROSE_IT: Dict = {
  // --- contributions ---
  "In the writers' room for the third season.": "In sala scrittura per la terza stagione.",
  "Cut the feature from assembly to final picture lock.": "Montaggio del film, dall'assemblaggio al visto si stampi.",
  "Wrote and directed. Winner of the 8th edition of La Realtà Che Non Esiste.": "Scritto e diretto. Vincitore dell'VIII edizione de La Realtà Che Non Esiste.",
  "Wrote and directed.": "Scritto e diretto.",
  "Wrote, directed and edited.": "Scritto, diretto e montato.",
  "Wrote, directed, shot and edited.": "Scritto, diretto, fotografato e montato.",
  "Directed and edited the music video.": "Regia e montaggio del videoclip.",
  "Directed the music video.": "Regia del videoclip.",
  "Directed the spot.": "Regia dello spot.",
  "Directed the short.": "Regia del cortometraggio.",
  "Directed all ten episodes.": "Regia di tutti e dieci gli episodi.",
  "Edited the short.": "Montaggio del cortometraggio.",
  "Edited the video.": "Montaggio del video.",
  "Editor on the short.": "Montaggio del cortometraggio.",
  "Editor on the documentary.": "Montaggio del documentario.",
  "Editor on the first season.": "Montaggio della prima stagione.",
  "Editing on the series.": "Montaggio della serie.",
  "Edited episodes 1, 2, 4, 6 and 8.": "Montaggio degli episodi 1, 2, 4, 6 e 8.",
  "Edited episodes 5, 7 and 8.": "Montaggio degli episodi 5, 7 e 8.",
  "Co-editor on the series.": "Co-montaggio della serie.",
  "Supervised the edit.": "Supervisione al montaggio.",
  "Authored and cut the launch trailer.": "Ideazione e montaggio del trailer di lancio.",
  "Cut the trailer for the feature.": "Montaggio del trailer del film.",
  "Cut the trailer for the short.": "Montaggio del trailer del cortometraggio.",
  "Cut the trailer and operated B camera.": "Montaggio del trailer e operatore alla camera B.",
  "Cut the trailer and worked as additional editor.": "Montaggio del trailer e montaggio aggiuntivo.",
  "Additional editor on the short.": "Montaggio aggiuntivo del cortometraggio.",
  "Additional editor across six episodes.": "Montaggio aggiuntivo su sei episodi.",
  "On-set editor across four episodes.": "Montaggio in presa diretta su quattro episodi.",
  "Assistant editor on the film.": "Assistente al montaggio del film.",
  "Assistant editor on the feature.": "Assistente al montaggio del film.",
  "Assistant director on the short.": "Aiuto regia del cortometraggio.",
  "Second second assistant director on the feature.": "Secondo aiuto regia del film.",
  "Second second assistant director across eight episodes.": "Secondo aiuto regia su otto episodi.",
  "Creative director and host.": "Direzione creativa e conduzione.",
  "Shot and edited the interview.": "Riprese e montaggio dell'intervista.",
  "Shot and edited the documentary.": "Riprese e montaggio del documentario.",
  "Shot and edited the series.": "Riprese e montaggio della serie.",
  "Shot the backstage on the feature.": "Riprese del backstage del film.",
  "Editor on the tournament's video output every year since 2017.": "Montaggio dei contenuti video del torneo, ogni anno dal 2017.",

  "Cut the reel.": "Montaggio del reel.",

  "Editor across the branching video tree.": "Montaggio dell'intero albero di video ramificati.",
  "Wrote, directed and edited. His first self-produced short.": "Scritto, diretto e montato. Il suo primo cortometraggio autoprodotto.",
  "Editor on the campaign film.": "Montaggio dello spot.",
  "Co-directed, co-wrote and co-edited.": "Co-regia, co-sceneggiatura e co-montaggio.",

  // --- synopses ---
  "Third season of the mockumentary workplace comedy set inside a Neapolitan advertising agency, produced by The Jackal.": "Terza stagione della mockumentary comedy ambientata in un'agenzia pubblicitaria napoletana, prodotta da The Jackal.",
  "A horror feature written and directed by Federico Zampaglione with Barbara Baraldi, out 5 November 2026.": "Un horror scritto e diretto da Federico Zampaglione con Barbara Baraldi, in uscita il 5 novembre 2026.",
  "Vincenzo is the perfect boy: brilliant, popular, charismatic. When his ex-girlfriend accuses him of assault, a video seems to tell the whole story. But images can lie, and the truth stops being simple — friends and social media split, leaving one question open: who do you believe? Or rather, who do you want to believe?": "Vincenzo è il ragazzo perfetto: brillante, popolare, carismatico. Quando la sua ex fidanzata lo accusa di violenza, un video sembra raccontare tutta la storia. Ma le immagini possono mentire e la verità smette di essere così semplice: amici e social si dividono, lasciando aperta una domanda, a chi credere? O, meglio ancora: a chi vuoi credere?",
  "A young couple, determined to build their future on land confiscated from the Mafia, find themselves fighting an enemy that tries to destroy their very notion of resistance and love.": "Una giovane coppia, decisa a costruirsi un futuro su una terra confiscata alla mafia, si ritrova a combattere un nemico che vuole distruggere la loro idea stessa di resistenza e di amore.",
  "Documentary on the Benetton Formula 1 team — the Italian outfit that took on the establishment and won back-to-back drivers' titles.": "Documentario sulla scuderia Benetton Formula 1: la squadra italiana che sfidò l'establishment e vinse due titoli piloti consecutivi.",
  "Second season of the mockumentary comedy following the staff of an advertising agency, produced by The Jackal.": "Seconda stagione della mockumentary comedy sullo staff di un'agenzia pubblicitaria, prodotta da The Jackal.",
  "Italian edition of the Netflix dating format in which singles get engaged before ever seeing each other.": "Edizione italiana del dating show Netflix in cui i single si fidanzano prima ancora di vedersi.",
  "Rai documentary marking the centenary of Giacomo Puccini's death, tracing the composer's life and work.": "Documentario Rai per il centenario della morte di Giacomo Puccini, sulla vita e l'opera del compositore.",
  "The origin story of 883 — how two friends from Pavia, Max Pezzali and Mauro Repetto, became the sound of a generation.": "La nascita degli 883: come due amici di Pavia, Max Pezzali e Mauro Repetto, sono diventati il suono di una generazione.",
  "A teen drama in eight episodes, loosely adapted from Shakespeare’s Othello, released on RaiPlay on 14 April 2023.": "Un teen drama in otto episodi liberamente ispirato all'Otello di Shakespeare, uscito su RaiPlay il 14 aprile 2023.",
  "First season of the mockumentary comedy set inside an advertising agency, produced by The Jackal.": "Prima stagione della mockumentary comedy ambientata in un'agenzia pubblicitaria, prodotta da The Jackal.",
  "The first auteur branded series by Philadelphia, following the joys and struggles of the Millennial generation. Premiered at the 80th Venice Film Festival in the Brand come Autori strand.": "La prima branded series d'autore firmata Philadelphia, sulle gioie e le difficoltà della generazione dei Millennials. Presentata in anteprima alla 80ª Mostra di Venezia nello spazio Brand come Autori.",
  "A Sicilian anti-mafia prosecutor, framed and disgraced, decides that if everyone believes he is a mobster he might as well become one.": "Un pubblico ministero antimafia siciliano, incastrato e screditato, decide che se tutti lo credono un mafioso tanto vale diventarlo davvero.",
  "A legacy sequel to the 1974 Bud Spencer and Terence Hill comedy, following the sons of Spencer’s original character.": "Un legacy sequel della commedia del 1974 con Bud Spencer e Terence Hill, con protagonisti i figli del personaggio di Spencer.",
  "Feature-length documentary on the birth, rise and death of Italian children's television.": "Documentario sulla nascita, la crescita e la morte della TV dei ragazzi italiana.",
  "A podcast about cinema and the state it is in — conversations, arguments and obituaries for a medium that keeps refusing to die.": "Un podcast sul cinema e su come sta messo: conversazioni, litigi e necrologi per un mezzo che si rifiuta di morire.",
  "A thriller adapted from Giorgio Glaviano's novel, in which a father's search drags him into the dark.": "Un thriller tratto dal romanzo di Giorgio Glaviano, in cui la ricerca di un padre lo trascina nel buio.",
  "Third season of the Rai crime series following a Palermo prosecutor hunting the Sicilian mafia's fugitive bosses.": "Terza stagione della serie crime Rai su un magistrato palermitano a caccia dei boss latitanti di Cosa Nostra.",
  "A Neapolitan romantic comedy that jumps between the dial-up nineties and the present day.": "Una commedia romantica napoletana che salta tra gli anni Novanta del modem 56K e il presente.",
  "Adapted from Donatella Di Pietrantonio's novel: a thirteen-year-old girl is returned without explanation to the birth family she never knew she had.": "Dal romanzo di Donatella Di Pietrantonio: una ragazzina di tredici anni viene restituita senza spiegazioni alla famiglia d'origine che non sapeva di avere.",
  "Biopic on the young Alberto Sordi, from dubbing Oliver Hardy to becoming the face of Italian comedy.": "Biopic sul giovane Alberto Sordi, dal doppiaggio di Oliver Hardy fino a diventare il volto della commedia italiana.",
  "Sequel to Benvenuto Presidente — the accidental head of state is pulled back into Italian politics.": "Seguito di Benvenuto Presidente: il capo di Stato per caso viene ritrascinato nella politica italiana.",
  "A ten-part travel series following Dario Moccia across Japan.": "Una serie di viaggio in dieci episodi che segue Dario Moccia attraverso il Giappone.",
  "A documentary portrait of Gipi, one of the most singular voices in Italian comics.": "Un ritratto documentario di Gipi, una delle voci più singolari del fumetto italiano.",
  "Two friends from the Roman outskirts, with no real prospects, accidentally kill a pedestrian with their car and end up as low-level hires for a local crime family. The D’Innocenzo brothers’ debut feature, premiered in Panorama at the 68th Berlinale.": "Due amici della periferia romana, senza prospettive, investono per sbaglio un pedone e finiscono a fare i manovali di un clan criminale. L'esordio dei fratelli D'Innocenzo, presentato in Panorama alla 68ª Berlinale.",
  "A director’s reel cut for Mauro Zingarelli, drawing his shorts and commercials into a single showreel.": "Il director's reel di Mauro Zingarelli, che raccoglie i suoi corti e i suoi spot in un unico montaggio.",
  "Fondazione Telethon’s campaign film with Frank Matano — life smiles at you when you help research.": "Lo spot di Fondazione Telethon con Frank Matano: la vita ti sorride quando aiuti la ricerca.",
  "An interactive mini-film built with Warner Bros. for the Italian release of Final Destination Bloodlines: every choice branches, and the wrong turn kills Mauro Zingarelli in a new way.": "Un mini-film interattivo realizzato con Warner Bros. per l'uscita italiana di Final Destination Bloodlines: ogni scelta apre un bivio, e quella sbagliata uccide Mauro Zingarelli in un modo sempre diverso.",
  "A short film made with AIPAMM, the Italian association of patients with myeloproliferative diseases, about living a real life alongside a chronic illness.": "Un cortometraggio realizzato con AIPAMM, l'associazione italiana pazienti con malattie mieloproliferative, su come si vive una vita vera accanto a una malattia cronica.",
  "Part of Campioni Ogni Giorno, P&G Italia’s programme of everyday actions in the run-up to the Milano Cortina 2026 Games.": "Parte di Campioni Ogni Giorno, il programma di azioni concrete di P&G Italia verso i Giochi di Milano Cortina 2026.",
  "The first film Andrea ever made: written, directed and cut on his own, with no one asking for it.": "Il primo film che Andrea abbia mai fatto: scritto, diretto e montato da solo, senza che nessuno glielo avesse chiesto.",
  "The official video for the Dune Buggy cover from the Altrimenti ci arrabbiamo! soundtrack, cut by the film’s composer Francesco Cerasi with Federico Zampaglione.": "Il video ufficiale della cover di Dune Buggy dalla colonna sonora di Altrimenti ci arrabbiamo!, firmata dal compositore del film Francesco Cerasi con Federico Zampaglione.",
  "Editor on the music video.": "Montaggio del videoclip.",
  "Geopop goes inside a waste-to-energy plant to show how it works and where the leftovers actually end up.": "Geopop entra in un termovalorizzatore per far vedere come funziona e che fine fanno davvero gli scarti.",
  "A vertical horror short about a doppelgänger, made for the TikTok Short Film Competition.": "Un horror verticale su un doppelgänger, realizzato per la TikTok Short Film Competition.",
  "Italy's biggest tennis tournament, held every spring at the Foro Italico in Rome.": "Il più grande torneo di tennis italiano, ogni primavera al Foro Italico di Roma.",
  "Interview with Inio Asano, author of Goodnight Punpun.": "Intervista a Inio Asano, autore di Buonanotte Punpun.",
  "screenWEEK's trailer-reaction series, hosted by Claudio Di Biagio with a rotating cast of guests.": "La serie di reaction ai trailer di screenWEEK, condotta da Claudio Di Biagio con ospiti sempre diversi.",
  "Interview with Mark Osborne, director of Kung Fu Panda and The Little Prince.": "Intervista a Mark Osborne, regista di Kung Fu Panda e Il Piccolo Principe.",
  "Roberto Recchioni on three decades of Dylan Dog and what has changed.": "Roberto Recchioni su trent'anni di Dylan Dog e su cosa è cambiato.",
};

/** Translate a synopsis or contribution. Falls back to the English source. */
export function tProse(v: string | undefined, lang: Lang): string | undefined {
  if (!v || lang !== "it") return v;
  return PROSE_IT[v] ?? v;
}
