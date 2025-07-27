const root = document.getElementById('root');

const weights = {
  age: 1,
  frailty: 2,
  albumin: 2,
  lactate: 3,
  anemia: 1,
  renal: 2
};

const riskLevels = [
  { max: 2, label: 'Low', color: 'green' },
  { max: 5, label: 'Moderate', color: 'orange' },
  { max: 8, label: 'High', color: 'darkorange' },
  { max: 99, label: 'Extreme', color: 'red' }
];

function renderApp() {
  const container = document.createElement('div');

  const title = document.createElement('h2');
  title.textContent = 'Emergency Surgery Risk Score';
  container.appendChild(title);

  const form = document.createElement('div');
  form.className = 'card';

  const state = {};
  let score = 0;

  Object.keys(weights).forEach((key) => {
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.justifyContent = 'space-between';
    row.style.marginBottom = '0.5rem';

    const label = document.createElement('label');
    label.textContent = key.charAt(0).toUpperCase() + key.slice(1);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onchange = () => {
      state[key] = checkbox.checked;
    };

    row.appendChild(label);
    row.appendChild(checkbox);
    form.appendChild(row);
  });

  const button = document.createElement('button');
  button.textContent = 'Calculate Score';
  button.onclick = () => {
    score = 0;
    for (const key in state) {
      if (state[key]) score += weights[key];
    }
    const risk = riskLevels.find(r => score <= r.max);
    result.textContent = `Score: ${score}/11 | Risk: ${risk.label}`;
    result.style.color = risk.color;
  };

  const result = document.createElement('div');
  result.style.marginTop = '1rem';
  result.style.fontWeight = 'bold';

  container.appendChild(form);
  container.appendChild(button);
  container.appendChild(result);

  root.appendChild(container);
}

renderApp();