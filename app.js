const root = document.getElementById('root');

const weights = {
  age: 1,
  frailty: 2,
  albumin: 2,
  lactate: 3,
  anaemia: 1,
  renal: 2,
  first nations: 1,
  admissions: 0
};

const riskLevels = [
  { max: 2, label: 'Low (0–2)', color: 'green' },
  { max: 5, label: 'Moderate (3–5)', color: 'orange' },
  { max: 8, label: 'High (6–8)', color: 'darkorange' },
  { max: 99, label: 'Extreme (9–13)', color: 'red' }
];

function renderApp() {
  const container = document.createElement('div');
  const state = {};
  let score = 0;

  const title = document.createElement('h2');
  title.textContent = 'Emergency Surgery Assessment Checklist';
  container.appendChild(title);

  const description = document.createElement('p');
  description.innerHTML = 'Select risk factors below. Score ranges:<br>' +
    '<strong>Low</strong>: 0–2, <strong>Moderate</strong>: 3–5, ' +
    '<strong>High</strong>: 6–8, <strong>Extreme</strong>: 9–13';
  container.appendChild(description);

  const form = document.createElement('div');
  form.className = 'card';

  const factors = ['age', 'frailty', 'albumin', 'lactate', 'anaemia', 'renal', 'first nations'];
  factors.forEach((key) => {
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.justifyContent = 'space-between';
    row.style.marginBottom = '0.5rem';

    const label = document.createElement('label');
    label.textContent = key.charAt(0).toUpperCase() + key.slice(1).replace('firstnations', 'First Nations Status');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onchange = () => {
      state[key] = checkbox.checked;
    };

    row.appendChild(label);
    row.appendChild(checkbox);
    form.appendChild(row);
  });

  const admissionsRow = document.createElement('div');
  admissionsRow.style.marginBottom = '0.5rem';

  const admissionsLabel = document.createElement('label');
  admissionsLabel.textContent = 'Hospital Admissions (past 12 mo): ';
  admissionsLabel.style.marginRight = '0.5rem';

  const admissionsInput = document.createElement('input');
  admissionsInput.type = 'number';
  admissionsInput.min = 0;
  admissionsInput.value = 0;
  admissionsInput.oninput = () => {
    const val = parseInt(admissionsInput.value, 10);
    weights.admissions = val >= 4 ? 2 : val >= 2 ? 1 : 0;
  };

  admissionsRow.appendChild(admissionsLabel);
  admissionsRow.appendChild(admissionsInput);
  form.appendChild(admissionsRow);

  const button = document.createElement('button');
  button.textContent = 'Calculate Score';
  button.onclick = () => {
    score = 0;
    for (const key in state) {
      if (state[key]) score += weights[key];
    }
    score += weights.admissions;
    const risk = riskLevels.find(r => score <= r.max);
    result.textContent = `Score: ${score}/13 | Risk: ${risk.label}`;
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
