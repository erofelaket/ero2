
document.getElementById('yesBtn').addEventListener('click', () => {
  const loading = document.getElementById('loading');
  const percent = document.getElementById('percent');
  loading.classList.remove('hidden');
  let i = 0;
  const interval = setInterval(() => {
    i += 5;
    percent.textContent = i + '%';
    if (i >= 100) {
      clearInterval(interval);
      window.location.href = 'index.html';
    }
  }, 150);
});

document.getElementById('noBtn').addEventListener('click', () => {
  const threat = document.getElementById('threat');
  const error = document.getElementById('error');
  threat.classList.remove('hidden');

  setTimeout(() => {
    threat.innerHTML += "<p>Sunucu tepkisi alınamadı...</p>";
  }, 2000);
  setTimeout(() => {
    threat.classList.add('hidden');
    error.classList.remove('hidden');
  }, 4000);
});
