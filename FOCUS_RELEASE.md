# Focus release — 27 October 2026

The image-led homepage keeps In Whose Name? first, uses one column on phones and three aligned columns above 600 px, and preserves all 27 project routes. The 48 px logo strip measures the rendered name width; its two identical 1716 px tracks travel at a constant rate over 130 seconds. Logo color and identity text share `--ink: #4A3226`.

Project roles and concise copy were reviewed by the site owner. Six contextual milestones link to their sources and distinguish film recognition, album recognition, and device recognition from individual production credits. Publication summaries describe coverage without adding promotional claims. Existing media, article links, canonical metadata, sitemap, and profile links remain.

## Validation

- `npm run build` passes, including TypeScript and 34 generated pages.
- All 27 project routes plus homepage, About, Publications, robots, and sitemap return HTTP 200 locally.
- Browser checks at 320, 390, 430, 768, and 1440 px: no horizontal page overflow; hero/grid widths match; logo aperture matches the rendered name.
- All 27 project headings checked at 320 px without clipping.
- Menu, About sections, project opening, Escape, focus return, and browser back/forward checked. Navigation timing and the narrow Publications heading were corrected.
- All referenced project images exist locally; no browser console errors were observed during route checks.
- Reduced-motion and reduced-transparency fallbacks are implemented. Real-device GPU profiling and external video playback on every device were not performed. Continuous decorative motion without a visible pause control is an explicit owner preference; this release does not claim full WCAG motion compliance.

## Brand assets

`data/brands.json` records source provenance and public relationship context. Seventeen entries use supplied or sourced artwork; Chance the Rapper, AMSI Entertainment, BET Awards, Revolt, and The Shade Room use ordinary typeset names, not purported official logos. Just Don, Roc Nation, and the two owner-supplied marks contain raster artwork; wrapping an image in SVG does not make it vector artwork. Source geometry is retained, with transparent masks colored by the shared ink token.

## Deployment and rollback

Verified existing Netlify project: `beautiful-arithmetic-fd8ea5`, site ID `8a00831b-7d6a-4dbf-bd6a-635fee15dc5b`, domain `vaughn-robison.com`. It builds this repository's `main` branch using `npm run build`, publishes `.next`, and automatically publishes successful production builds.

Previous production commit: `2b32ce9fbcc06c50521a57470361bb8ccdafbbb5`.
Rollback branch: `rollback/pre-focus-2026-10-27`.
Previous Netlify deploy: `6ad3de93a53347afb95a2a53`.
For immediate recovery, republish that prior deploy in Netlify. For a durable source rollback, revert the Focus release commit on `main`, preserving subsequent unrelated changes.
