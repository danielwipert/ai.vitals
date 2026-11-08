# AI Vitals website

The public website for **AI Vitals**, "an annual physical for your company's AI spend," by Daniel S. Wipert.

A plain static site (HTML, one stylesheet, one small script), published with GitHub Pages. No build step.

## Pages

| File | Page |
|---|---|
| `index.html` | Home: the hook, the four doors, why no one has a clean number, what AI Vitals does, who does the work, request a conversation |
| `readings/ceo-question.html` | Door 1: "My CEO asked what we spend on AI, and I couldn't answer." |
| `readings/growing-bill.html` | Door 2: "Our AI bills keep growing, and I can't say how big they'll get." |
| `readings/new-leader.html` | Door 3: "I'm new here, and I need a clean picture of what we're paying for." |
| `readings/not-started.html` | Door 4: "We haven't started yet, and we want to do it right." |
| `how-we-work.html` | The steps, the public prices with the honest note, and five promises |
| `about.html` | About Dan |
| `sample-report.html` | Sample report on a made-up company (illustrative) |
| `404.html` | Page not found |
| `assets/styles.css` | The whole look: Cloud Dancer paper, violet band, highlighter yellow, IBM Plex type, hand marks |
| `assets/site.js` | Sends the request forms to Formspree without leaving the page |

## Request forms

Every "Request a conversation" form posts to Formspree. Each form carries a hidden `door` field, so requests show which page the visitor came from. The form `action` points to Formspree form `mqpporre`.

## Rules

- Public prices only: intro call free, working session $350, first look from $2,500 (AI Starting Plan from $2,900 on its own page), full exam from $4,000, check-ins from $1,200 a quarter. Internal prices and rates live in the private repo and never come here.
- No claim goes on the site that Dan can't back up.
