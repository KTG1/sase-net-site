# SASE.Net

An editorial, interactive guide to **Secure Access Service Edge (SASE)**. The site explains how cloud-delivered networking and security converge at the edge through a responsive, dependency-free experience.

[View the live site](https://ktg1.github.io/sase-net-site/)

## What is included

- A visual introduction to the SASE operating model
- Reviews with video and written-review tabs
- Core capabilities including ZTNA, SWG, CASB, FWaaS, DLP, and SD-WAN
- An interactive attribute explorer and architecture overview
- Contextual FAQ tabs for edge, cloud, security, access, trust, network, and policy topics
- A phased implementation playbook and provider-selection guidance
- Responsive layouts, keyboard-friendly controls, reduced-motion support, and semantic HTML

## Technology

This project intentionally uses a small, portable stack:

- HTML5
- CSS3
- Vanilla JavaScript
- GitHub Pages

There is no build step and no runtime dependency.

## Run locally

Clone the repository and serve its root directory with any static file server:

```bash
git clone https://github.com/KTG1/sase-net-site.git
cd sase-net-site
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

Opening `index.html` directly also works, but a local server more closely matches the GitHub Pages environment.

## Project structure

```text
.
├── index.html    # Page content and semantic structure
├── styles.css    # Layout, visual system, and responsive states
└── script.js     # Tabs, accordions, navigation, and interactions
```

## Content map

| Section | Purpose |
| --- | --- |
| Why SASE | Defines SASE and the shift away from appliance-centric security |
| Reviews | Presents video and written proof formats |
| Experts & benefits | Connects the operating model to practical outcomes |
| Architecture | Explains the converged controls and single policy plane |
| Framework FAQ | Groups technical questions into contextual tabs |
| Playbook | Outlines a phased path from discovery to optimization |
| Resources | Covers cost, operations, readiness, and provider selection |

## Editing the site

- Update page copy and section order in `index.html`.
- Change the visual system and breakpoints in `styles.css`.
- Update tab content and interactive behavior in `script.js`.
- Preserve the existing ARIA roles, `aria-selected` states, keyboard focus styles, and reduced-motion behavior when adding interactions.

## Publishing

The `main` branch is published with GitHub Pages. Changes pushed to `main` appear at:

**https://ktg1.github.io/sase-net-site/**

Deployment status is available from the repository's **Actions** and **Deployments** views.

## Content status

The review metrics, review quotes, video cards, expert profiles, and subscription interaction are illustrative placeholders. Replace them with verified material and connect the form to a real service before treating the site as production-ready.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the lightweight contribution and review workflow.

## License

No open-source license has been added. All rights are reserved unless the repository owner states otherwise.
