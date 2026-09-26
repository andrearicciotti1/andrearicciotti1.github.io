/** Things Andrea builds when he is not cutting: plugins, small Mac apps,
 *  a browser game, and a couple of referral links. Grouped for the Lab page.
 *
 *  `title` stays as written — product names are not translated. `blurb` and
 *  the group `label`/`note` translate by lookup, like the rest of the prose. */
export interface LabItem {
  title: string;
  blurb: string;
  url: string;
  /** Where the link goes, shown as a small tag. */
  host: string;
  /** Optional second link — a direct download, a mirror. */
  alt?: { label: string; url: string };
  /** Small pill: price, platform, whatever is worth saying at a glance. */
  tags?: string[];
}

export interface LabGroup {
  /** Two-digit number, like the rest of the site's section markers. */
  n: string;
  label: string;
  note: string;
  items: LabItem[];
}

export const labGroups: LabGroup[] = [
  {
    n: "01",
    label: "Editing plugins",
    note: "Paste a video link, get the clip in your timeline. One build per NLE.",
    items: [
      {
        title: "DropCut · DaVinci Resolve",
        blurb: "Paste any video link straight into the Media Pool — no browser, no download folder, no manual import. Queues, playlists and batches, plus a built-in mini-browser.",
        url: "https://andrearicciotti1.gumroad.com/l/qkheq",
        host: "Gumroad",
        tags: ["Resolve 18+", "macOS 12+"],
      },
      {
        title: "DropCut · Adobe Premiere Pro",
        blurb: "The same thing for the Project panel: paste a link, pick a quality, the clip is already in the project.",
        url: "https://andrearicciotti1.gumroad.com/l/vwmjbi",
        host: "Gumroad",
        tags: ["Premiere Pro 2023+", "macOS 12+"],
      },
      {
        title: "DropCut · Final Cut Pro",
        blurb: "And for the Final Cut library. YouTube, Reels, TikTok, Vimeo, X, Facebook and hundreds more sources.",
        url: "https://andrearicciotti1.gumroad.com/l/rfvay",
        host: "Gumroad",
        tags: ["Final Cut Pro 10.6+", "macOS 12+"],
      },
    ],
  },
  {
    n: "02",
    label: "Menu bar apps",
    note: "Free, open source, about 100 KB. No Electron, no Python, no dock icon.",
    items: [
      {
        title: "Armadillo Bar",
        blurb: "Roman one-liners a keystroke away, from the menu bar — a fan tribute to Zerocalcare. Nine clips on global shortcuts, your own sounds, and an armadillo that turns up every ten minutes to say something.",
        url: "https://github.com/andrearicciotti1/armadillo-bar",
        host: "GitHub",
        alt: { label: "Download the .dmg", url: "https://drive.google.com/drive/folders/1qd8M_UxKrWeRRPyF7kIST_PVKxqnCrF5" },
        tags: ["macOS", "Swift", "Free"],
      },
      {
        title: "Boris Bar",
        blurb: "The same idea, for Boris. Iconic clips on ⌥⌘1 … ⌥⌘9, a goldfish in the menu bar, and room for your own audio.",
        url: "https://github.com/andrearicciotti1/boris-bar/releases/tag/v1.0",
        host: "GitHub",
        alt: { label: "Download the .dmg", url: "https://drive.google.com/drive/folders/1qd8M_UxKrWeRRPyF7kIST_PVKxqnCrF5" },
        tags: ["macOS", "Swift", "Free"],
      },
    ],
  },
  {
    n: "03",
    label: "Play",
    note: "Built for fun. Runs in the browser, works offline.",
    items: [
      {
        title: "Friends Trivia — Central Perk Edition",
        blurb: "735 questions across five levels, from Easy to MANIAC. Every answer comes back with the line and the episode it came from, plus reactions and the original music.",
        url: "https://andrearicciotti1.github.io/FRIENDS-TRIVIA",
        host: "Browser",
        tags: ["735 questions", "Free"],
      },
    ],
  },
  {
    n: "04",
    label: "Invites",
    note: "Services I actually use. Both links give you something for signing up.",
    items: [
      {
        title: "Trailers Film Fest",
        blurb: "The festival for trailers, on FilmFreeway. Submit yours.",
        url: "https://filmfreeway.com/TrailersFilmFest",
        host: "FilmFreeway",
      },
      {
        title: "Fiscozen",
        blurb: "Accountants for the Italian flat-rate regime — what a freelance editor actually needs. The invite takes a chunk off the first year.",
        url: "https://www.fiscozen.it/invito374638",
        host: "Fiscozen",
      },
    ],
  },
];
