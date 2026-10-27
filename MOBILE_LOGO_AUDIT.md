# Mobile logo audit — 2026-10-27

Preview only; production remains on hold. Supersedes the temporary Tau-removal commit f955123. Tau restored in every About section.

## Changes and evidence

- 17 SVG-served carousel marks now paint directly as images, avoiding a second CSS-mask sampling stage. Existing geometry, optical dimensions, 64px cells, 48px strip, exact #4A3226 and name-width clipping remain.
- The Tau uses its supplied raster geometry with direct brown output and transparent white. Mobile now uses the same small 24 × 28px box as desktop (previously 20 × 24px). No invented vector tracing.
- Roc Nation uses the official 1207 × 200 source with normalized alpha. The previous 160 × 24 source lacked sufficient width for 3× sampling at 64 CSS pixels.
- Continuous movement still uses only CSS transform. Observed fractional translation is inherent to smooth motion; pixel-stepping would introduce judder and was not added. No extra GPU promotion or blur was added.
- Four existing social SVGs and the IMDb vector mask have no raster source or color filter; all five keep 44px interaction targets.

## Per-asset findings

| Asset | Source / action | Remaining small-size limit |
| --- | --- | --- |
| Disney | Genuine vector; direct brown paint | Fine script at 14px |
| NBC | Genuine vector; direct brown paint | Tiny letters at 18px |
| NBA | Genuine vector; preserved player knockout; direct paint | NBA letters are only a few pixels high in a 20px mark |
| Yeezy | Supplied 2021 × 617 transparent PNG; retained | Raster, ample sampling resolution |
| Stem | Genuine official vector, eight arms; direct paint | Small dots approach subpixel size at 17px |
| Pepsi | Genuine vector; native knockout; direct paint | Fine ring at 20px |
| Just Don | Official 625 × 132 transparent PNG; retained | Raster; fine script at 10px |
| Chicago Bulls | Supplied 1081 × 1081 artwork; direct transparent brown output | Raster; very thin facial lines at 20px |
| Roc Nation | Official 1207 × 200 raster, alpha normalized; direct output | Still raster, no authentic vector located |
| SiriusXM | Genuine vector; direct paint | Small wordmark at 8px |
| AMC | Genuine vector; direct paint | THEATRES subtitle tiny at 12px |
| Apple TV | Genuine vector; direct paint | No source-resolution issue |
| Cinemark | Genuine vector; direct paint | Tiny wordmark at 8px |
| Chance the Rapper | Typeset name retained | Not an official logo |
| ESPN | Genuine vector; direct paint | No source-resolution issue |
| AMSI | Supplied 1200 × 630 raster with faithful viewport crop; direct paint | ENTERTAINMENT subtitle tiny at 16px |
| SeatGeek | Genuine vector; direct paint | No source-resolution issue |
| BET Awards | Supplied 600 × 600 raster; direct paint | Fine two-line lettering at 18px |
| Revolt | Official 513 × 513 R mark; direct paint | Raster, ample sampling resolution |
| The Shade Room | Official 1342 × 111 transparent image; retained | Very wide wordmark reduced to 64px maximum width |
| Live Nation | Genuine vector; direct paint | Wide wordmark limited to 64px |
| About Tau | Supplied 612 × 612 raster, faithful crop, direct output | Raster; small curved edges use normal antialiasing |
| LinkedIn / Instagram / X / YouTube / IMDb | Genuine SVG icon geometry retained | Normal antialiasing at 20px; IMDb 28px wide |

## Validation and limits

- Build: `npm run build -- --webpack`, TypeScript, all 34 pages passed.
- About: all three states at 320, 375, 390, 430 and 1440px; Tau loaded, no clip/overflow, no CSS mask.
- All 17 direct carousel images loaded; computed CSS mask and filter are none. Moving and keyboard-stationary views inspected. Reduced-motion CSS remains in place.
- Browser viewport tests are DPR 1; native desktop is DPR 2. Audit sheet includes 1×, 2× and 3× sample sizes. The available browser control does not expose arbitrary DPR, so this is not a claim of physical 3× phone validation.
- Browser screenshots are JPEG, not lossless pixel proof. Fine details should be judged in the interactive preview on the user's phone. No physical phone is attached for Safari/Android hardware verification.
- Continuous nonessential motion retains the previously noted accessibility tradeoff; no visible toggle was added per the user's design request.

## Actual iPhone feedback and targeted Tau candidate

The supplied iPhone screenshot (Library libfile_b8b62614ade0819180a1c4839c8e407e) shows a soft/pixelated Tau beside sharp ABOUT text. This contradicts the earlier emulated-view assessment. SVG-filter rasterization on iOS is a suspected cause, not conclusively proven.

Replaced only the Tau renderer with a precomputed 452×505 transparent PNG, derived from the original 612×612 supplied artwork: luminance becomes inverse alpha, RGB is exactly #4A3226, and transparent margins are cropped. No tracing or changed geometry. The browser now displays a plain img at 24×28 CSS pixels without filters or masks. The original source and prior SVG remain available. A two-layer CSS mask candidate was inspected and rejected before publication because its small-size rendering remained rough.

Validated local 320, 390, 430, and 1280 widths; all three About tabs load the PNG, preserve layout, and use filter:none/mask:none. Webpack production build and TypeScript passed (34 generated routes). Actual iPhone confirmation remains pending; browser screenshots are JPEG and are not physical-device proof. No other logo or production deployment is changed by this candidate.
