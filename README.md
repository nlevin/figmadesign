# Figma Design Career Framework

This repository contains Figma's current design career frameworks and the source for the **Skills Chart** FigJam widget. The widget turns the framework into an interactive chart that people can use for career conversations, self-assessment, and development planning.

The readable web version includes both career tracks:

- **[Individual contributor framework](https://product-design-ladder-ictrack.vercel.app/)** — Design and Writing, L1–L6
- **[Manager framework](https://product-design-ladder-ictrack.vercel.app/manager-levels.html)** — Design and Writing management, M3–E2 (E2 criteria are currently TBD)

## Use the published widget

The latest published version is available in the Figma Community:

**[Open Skills Chart in Figma](https://www.figma.com/community/widget/1207836110040407856/skills-chart?fuid=203211554002657486)**

The widget supports three tracks:

- **Design:** six IC levels, L1–L6
- **Writing:** six IC levels, L1–L6
- **Manager:** five management levels, M3–E1

Each skill includes level-specific criteria in its tooltip. Skill levels and the overall current-level marker can be set directly on the chart.

## Repository structure

- `index.html` — current Individual Contributor career framework
- `manager-levels.html` — current Manager career framework
- `styles.css` — shared framework layout and responsive styling
- `SkillChart/` — FigJam widget source and publishing files
  - `code.tsx` — widget layout, role switching, selection behavior, and styling
  - `levelinfo.tsx` — Design, Writing, and Manager level descriptions
  - `code.js` — compiled widget bundle loaded by Figma
  - `levelinfo.js` — compiled standalone description data
  - `manifest.json` — Figma widget manifest

## Develop the widget locally

Install dependencies and build the widget:

```sh
cd SkillChart
npm install
npm run build
```

Import `SkillChart/manifest.json` through Figma's development-widget workflow to test the local build in FigJam.

### Manifest ID and forks

The checked-in manifest ID belongs to the published Skills Chart widget linked above.

- If you are contributing directly to this widget, keep the existing ID.
- If you are forking the project or publishing your own version, create a new development widget in Figma and replace the manifest's `id` with the new ID Figma generates for you.

Do not publish a separate widget using the checked-in ID; it is uniquely associated with the existing Figma Community listing.

When changing framework copy, edit `levelinfo.tsx`. To refresh the standalone compiled description file as well as the widget bundle, run:

```sh
npx esbuild levelinfo.tsx --format=esm --outfile=levelinfo.js
npm run build
```

Commit the TypeScript sources and their compiled JavaScript outputs together so the repository always contains a publishable widget bundle.

## Publishing notes

The widget does not request external network access. Its manifest declares no allowed network domains and uses dynamic-page document access, as required by Figma's publishing checks.
