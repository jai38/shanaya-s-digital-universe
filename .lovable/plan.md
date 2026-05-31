## Concept

Shanaya Kacheria — **Singer • Songwriter • Composer • DJ** — positioned around her unique angle: *music as a study of emotion, memory, and the human mind.*

Vibe: Gen-Z editorial-meets-rave. Think bold display type, grainy gradients, neon/iridescent accents, animated noise, sticker-style chips, dragged-around 3D objects (vinyl, cassette, headphones, soundwave), kinetic typography, cursor-reactive blobs, scroll-jacked storytelling sections.

## Tech Stack

- React 19 + TypeScript on TanStack Start (existing template)
- Tailwind v4 with custom design tokens (oklch) — bold dark base + iridescent accent
- **framer-motion** — page transitions, scroll reveals, kinetic text, layout animations
- **@react-three/fiber + drei** — lightweight 3D for hero (floating vinyl/headphones), interactive scene on Music & Mind page
- **lenis** — buttery smooth scrolling
- **GSAP ScrollTrigger** (optional, only if framer scroll falls short for pinning)
- Custom cursor, magnetic buttons, marquee strips, audio-reactive waveform component

## Site Map (multipage)

```
/              Home — hero w/ 3D vinyl, animated tagline, story scroll intro
/about         About — editorial about + timeline of training
/music         Music & Performance — what she does + training cards
/songs         Original Songs — Falling For You, Love Me Bold (audio embeds, lyrics, art)
/projects      Projects & Performances — timeline w/ Berklee highlight
/mind          Music & Mind — 3 immersive "insight" panels (sad songs, memory, rhythm)
/beyond        Beyond the Stage — poetry, travel, scuba, skiing, community service
/contact       Contact — socials, email, collab CTA
```

Persistent: animated nav with active indicator, page transition curtain, footer with the tagline *"Music that doesn't just sound meaningful — it feels meaningful."*

## Page Concepts

**Home** — Full-bleed 3D scene: slowly spinning vinyl + floating headphones, name "SHANAYA" in massive kinetic display type, sublabel cycling through roles (singer → songwriter → composer → DJ). Scroll triggers a storytelling intro that morphs into the next section.

**About** — Split layout: large portrait on one side, scroll-pinned editorial text on the other. Vertical timeline of training (Trinity, Rock School, Piano, Pro DJ, A Cappella India).

**Music** — Bento grid of "What I Do" cards with hover-tilt + glow. Training certifications as a horizontal marquee of badge chips.

**Songs** — Two hero song panels, each with custom artwork placeholder, theme line, story, lyric excerpt, and an audio player with animated waveform. Falling For You / Love Me Bold get equal weight.

**Projects** — Animated vertical timeline; GMI x Berklee gets a featured "spotlight" card with glow + badge.

**Music & Mind** — The signature page. Three full-viewport scroll-pinned panels, each with a 3D/animated visual + insight copy:

1. Sad Songs & Comfort
2. Songs & Memory
3. Rhythm & Mood

**Beyond** — Asymmetric collage of cards (poetry, travel, scuba, skiing, academics, community service). Salaam Baalak Trust gets featured treatment.

**Contact** — Big animated "Let's make something" headline, magnetic social buttons, email CTA.

## Design Tokens (initial direction — confirmed via design questions)

- Base: deep midnight (`oklch(0.15 0.04 280)`)
- Accents: iridescent magenta → electric cyan gradient, plus warm "stage-light" amber
- Type: display serif (Instrument Serif / Fraunces) for emotion + tight mono (JetBrains) for labels, modern sans (Inter Tight) for body
- Grain texture overlay, soft glow shadows, rounded-2xl + occasional sharp-corner editorial frames

## Content/Asset Strategy

The PDF has no real photos/audio. To avoid a text-heavy site I will:

- Use AI-generated atmospheric/abstract visuals (vinyl, stage lights, smoke, abstract neural shapes for Music & Mind) as hero/section art
- Use SVG/3D objects (vinyl, cassette, soundwave) for performance proof until real media arrives
- Leave clearly-marked placeholder slots for: real photos, song audio (Spotify/SoundCloud embed-ready), performance videos, Instagram handle, email

You can drop replacements in later — I'll comment each slot.

## Build Order (after approval)

1. Design tokens + global styles + smooth scroll + custom cursor + page transition shell
2. Persistent nav + footer + route scaffolding for all 8 pages
3. Home with 3D vinyl scene + kinetic hero
4. Songs page (highest content value)
5. Music & Mind scroll-pinned panels
6. About, Music, Projects, Beyond, Contact
7. Generate hero/section imagery, polish motion, mobile pass

## Open inputs (nice-to-have, can ship without)

- Real social links (Instagram, YouTube, Spotify, email)
- Any photos of Shanaya
- Audio links for the two original songs

If you don't have these yet, I'll ship with tasteful placeholders and you can swap them in any time.

&nbsp;

Looks good to me -> just make sure that it is responsive -> coz around 90% of audience will see on Mobile / Tab