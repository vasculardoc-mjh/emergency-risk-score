# Emergency Surgery Risk Score

A simple static web app to calculate emergency surgical risk using validated comorbidity markers.

## Features

- Select risk factors (age, frailty, lactate, etc.)
- Real-time scoring and risk level
- Mobile-optimized and easily deployed

## How to Use

Open `index.html` in any browser or host via Netlify, GitHub Pages, Vercel, etc.

## Risk Scoring Weights

- Age >75 = 1
- Frailty >=6 = 2
- Albumin <3.0 = 2
- Lactate >4 or pH <7.3 = 3
- Hemoglobin <8 = 1
- Renal dysfunction = 2

## License

MIT