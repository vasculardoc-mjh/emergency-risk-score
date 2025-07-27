# Emergency Surgery Risk Score (Enhanced)

A static web app to calculate surgical risk including:
- Age, Frailty, Albumin, Lactate, Anemia, Renal function
- NEW: Aboriginal identity and hospital admissions (last 12 months)

## Use
Open `index.html` in a browser or deploy via Netlify/GitHub Pages.

## Scoring

| Factor                | Points |
|-----------------------|--------|
| Age >75               | 1      |
| Frailty >=6           | 2      |
| Albumin <3.0          | 2      |
| Lactate >4 / pH <7.3  | 3      |
| Hemoglobin <8         | 1      |
| Renal Dysfunction     | 2      |
| Aboriginal/Indigenous | 1      |
| 2–3 Admissions         | 1      |
| 4+ Admissions          | 2      |

## License

MIT