# Emergency Surgery Risk Score (Detailed)

A static web app to estimate emergency surgical risk based on validated and expert-derived criteria.

## Components and Criteria

| Component               | Threshold / Definition           | Points |
|------------------------|----------------------------------|--------|
| Age                    | > 75 years                       | 1      |
| Frailty                | Clinical Frailty Scale ≥6        | 2      |
| Albumin                | Serum albumin < 3.0 g/dL         | 2      |
| Lactate / pH           | Lactate > 4 mmol/L or pH < 7.3   | 3      |
| Anemia                 | Hemoglobin < 8 g/dL              | 1      |
| Renal Dysfunction      | eGFR < 30 mL/min/1.73 m²         | 2      |
| Aboriginal Identity    | Self-identified Aboriginal/Torres Strait Islander | 1 |
| Hospital Admissions    | 2–3 admissions = 1 pt; 4+ = 2 pts (in last 12 mo) | 1–2 |

## Risk Interpretation

- **Low**: 0–2 points
- **Moderate**: 3–5 points
- **High**: 6–8 points
- **Extreme**: 9–13 points

## Use

Open `index.html` in a browser or deploy via Netlify/GitHub Pages/Vercel.

## References

- Joseph B, et al. JAMA Surg. 2014.
- Lee TH, et al. Circulation. 1999.
- NELA Audit Report. 2020.
- ACS NSQIP Risk Calculator. 2023.
- Alana E, et al. Lancet Glob Health. 2021.
- Walsh M, et al. BMJ Open. 2018.

## License

MIT