# Repository Guidelines

## Project Structure & Module Organization
- `index.html` is the single-page presentation shell and slide markup.
- `presentation.css` defines the visual system (CSS variables, layout, animation).
- `presentation.js` handles slide navigation, autoplay, and progress UI.
- `section/` holds source content (`section/**/text.md`) and reference snippets (`section/**/code_snippets/*.py`).
- `section/**/images`, `screenshot/`, and `image.png` contain visual assets; `lab_resources/` stores notebooks and analysis artifacts.
- `style.md` and `ui-style-guideline.md` are the design-token sources; keep them in sync with CSS.

## Build, Test, and Development Commands
This is a static HTML/CSS/JS project; no build step is required.
- `python3 -m http.server 8000` starts a local server, then visit `http://localhost:8000/index.html`.
- Direct preview is acceptable by opening `index.html` in a browser, but a server helps with relative assets.

## Coding Style & Naming Conventions
- Indentation: 4 spaces in HTML/CSS/JS (match existing files).
- CSS: prefer variables defined in `style.md` and `ui-style-guideline.md`; keep new tokens in `:root`.
- HTML: favor reusable classes over new inline styles; keep inline tweaks minimal.
- Naming: section folders use `NN_Title_With_Underscores`; snippets and images use `snake_case` (e.g., `loss_curve.png`).

## Testing Guidelines
No automated test framework is configured.
- Manual checks: load the page, verify slide navigation (buttons + arrow keys/space), autoplay toggle, and MathJax rendering.
- Responsive sanity: check a narrow viewport (<768px) to ensure text and layout remain readable.

## Commit & Pull Request Guidelines
- Commit messages are short, imperative sentences with context (e.g., “Update index.html with new experiment overview”).
- PRs should include: a brief summary, screenshots of affected slides, and any updates to `style.md` or `ui-style-guideline.md`.

## Security & Configuration Tips
- External CDNs are used for Google Fonts, MathJax, and polyfills. For offline or strict CSP environments, vendor these assets and update `<head>` accordingly.
- Avoid committing secrets; keep large binaries limited to `lab_resources/` or `screenshot/` and compress images when possible.
