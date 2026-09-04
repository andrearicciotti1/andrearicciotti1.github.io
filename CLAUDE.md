# andrearicciotti.github.io

Portfolio for Andrea Ricciotti — editor and director, Rome. Astro, deployed
on Netlify at https://andrearicciotti.netlify.app.

## Shape

- `src/data/projects.ts` — the single source of truth for the filmography.
  `n` is a **stable catalogue number**: the oldest work is 001 and each new
  work takes the next number up. Never renumber existing entries; the array
  is ordered newest-first for display, which is a separate concern.
- `src/i18n/ui.ts` — UI dictionary plus lookup tables that translate the
  project data. Categories, credits and technical-sheet rows come from a
  closed vocabulary and translate by lookup; synopses and role notes are
  keyed by their English source so repeated lines translate once.
- `src/components/pages/*.astro` — one copy of each page, taking a `lang`
  prop. `src/pages/*` and `src/pages/it/*` are thin route files.
- Fonts are self-hosted in `public/fonts`. Do not reintroduce Google Fonts.

## Working rules — these matter more than any feature

**Stop early when something will not budge.** Two failed attempts at the
same thing is the limit: a blocked API, a file that will not download, a
rate limit. Do not sit in retry loops with long waits — that has burned
whole sessions of Andrea's credits for nothing, which costs him real time
and real money. Say what is blocked, ask him for the missing fact, and
carry on with everything else. He answers in seconds; the retry loop never
worked once.

**Check what renders, not what the markup says.** Counting elements in the
built HTML once "confirmed" a section that CSS was hiding entirely. If a
change is visual, open the page in the browser and look.

## Conventions

- The works index credit column stays short — a role, not a sentence.
  Episode counts and the like belong in the project page's technical sheet.
- Only assert credits, years and names that come from a source Andrea gave
  or that were verified online. Leave a field out rather than guessing it.

## Parked

The home page's **Selected work** grid is switched off behind `SHOW_REEL`
in `src/components/pages/Home.astro`. It rendered as a row of thumbnails
crushed to the left: `.reel__grid` is `repeat(12, 1fr)` and `ProjectCard`
sets no column span, so every card took one twelfth of the row. Andrea
wants the section, so this is a layout job to finish, not a feature to
drop.

## Open thread — to design together, later

A **stills page**: a gallery of frames from his work, treated as
photography rather than as evidence — big, quiet, minimal chrome. Possibly
paired with a **director's reel** at the top of the home page, which is the
one thing a portfolio for an editor is still missing. Andrea wants to think
this through together before it gets built; do not build it unprompted.
