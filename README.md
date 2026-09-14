# DevForge

A responsive redesign of https://devforge.co.za/, built as a lightweight static website.

## Preview

Run `node scripts/serve.mjs` from this directory, then open http://127.0.0.1:4173.

## Files

- `dist/index.html`: complete website content and metadata.
- `dist/styles.css`: foundational layout, typography, header and hero.
- `dist/sections.css`: complete visual theme, sections and responsive refinements.
- `dist/app.js`: mobile navigation, accessible industry tabs and reduced-motion-aware reveals.
- `dist/assets/forge-hero.webp`: original generated hero artwork, compressed to 151 KiB.
- `.openai/hosting.json`: Sites identity and static publishing configuration.

No package installation or compilation is required. The `dist` directory is the complete deployable site. Fonts use Google Fonts with system fallbacks. No analytics, trackers, forms or backend services are installed. Contact links open the visitor’s email or phone app; they do not automatically send a message.

## Content provenance

Business content was audited against the original homepage on 14 September 2026. Its original service areas, technology stack, five industry examples, experience claims, support offering and both contacts are preserved in rewritten copy. See `docs/content-audit.md`.

## Validation

The page was checked in a real browser at desktop and mobile widths. Industry tabs support click, touch, Arrow Left/Right, Home and End; mobile navigation closes on selection and Escape. Content remains available without JavaScript. The source-site contact addresses and telephone numbers were verified. Reduced-motion preferences disable decorative transitions.
