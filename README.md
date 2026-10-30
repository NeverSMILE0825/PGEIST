# Pepegeist / $PGEIST — Complete Website Source

A static, responsive, single-page Ethereum Halloween meme-token website inspired by the user's Holdoween reference, reimagined for Pepegeist with its own artwork, copy, animations, and story sections.

## Run locally

Open `index.html` in your browser. For consistent development and testing, you can also serve the folder:

```bash
python -m http.server 8000
```

Visit `http://localhost:8000`.

## Deploy

- **GitHub Pages:** upload the contents of this folder to a repository and enable Pages deployment from the repository root (or your chosen folder). If deploying under a project subpath, the site's relative links work without changing a `basePath`.
- **Netlify:** drag this folder to Netlify Drop or deploy through Git.
- **Any static host:** serve `index.html` together with `config.js`, `script.js`, `styles.css`, and `assets`.

No Node dependencies, build command, wallet connection, or API keys are required.

## Important prelaunch edits

Edit `config.js`:

```js
window.PEPEGEIST_CONFIG = {
  contractAddress: 'Coming Soon..',
  socialX: '',
  socialTelegram: '',
  halloweenYear: 2026,
  useVisitorsLocalTime: true
};
```

1. Once an **independently verified Ethereum contract** exists, replace `Coming Soon..` with the **actual checksum Ethereum address**.
2. Add the actual official X and Telegram URLs when ready. Until then, their buttons show a safe "Coming Soon" message instead of sending visitors to invented links.
3. Update any prelaunch wording only when the corresponding on-chain facts are verified.
4. If a live Uniswap pool exists, optionally add your verified pool URL to the site. The "How to Buy" section currently links only to the official Uniswap app and does not invent a contract or trading pair.

**Tokenomics on the page:** 1,000,000,000 total supply; 0% token tax; Ethereum mainnet; Uniswap V3 with **intended LP lock**, not represented as a verified current state.

**Halloween countdown:** implemented in `script.js` using October 31, **2026** at midnight in each visitor's local timezone. It never auto-increments the target year to claim a new launch event. On or after that date, the timer reaches zero and shows an appropriate message. The promotional poster prints a static date and does not include a stale numerical countdown.

## Images

- `assets/images/` — 18 production assets, with wide graphics compressed as WebP and the logo/character as transparent PNGs.
- `assets/originals/` — original full-resolution copies of all 18 selected images, named in story order for future editing.
- All story `<img>` elements use `object-fit: contain` to avoid cutting off the important character art. Hero/environment panels are atmospheric crops only.

**Creative note:** Some generated image variants were rejected because they repeated the same scene or introduced the wrong token ticker. The website uses curated existing files and avoids showing any image containing `$SNAFU404`. The "How to Buy" images are illustrations, not actual wallet UI or financial instructions.

## Sections

1. Hero, ghost mascot, event teaser, and working prelaunch CA copy
2. Dynamic Halloween countdown and event poster
3. Four-part supernatural origin story
4. Haunted world visual chapter
5. Tokenomics
6. Four illustrated steps (wallet, ETH, swap, community)
7. Mirror séance finale and community CTA

## Customization

- Replace images with your own in `assets/images/`, keeping filenames or updating `index.html`.
- Edit styling in `styles.css` (`--purple`, `--cyan`, fonts, spacing, etc.).
- Update text in `index.html`.
- All header nav links scroll to their single-page sections. No wallet-connect functionality is present.
- `prefers-reduced-motion` is supported for visitors who disable animations.

## Source material

The user-provided Holdoween HTML/CSS ZIP was consulted as a **reference for major layout patterns and the event-countdown concept**. This is an original, independently authored codebase rather than a copy of the source website.
