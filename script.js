const progress = document.getElementById('progress');

function updateProgress() {
  const top = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = height > 0 ? `${(top / height) * 100}%` : '0%';
}

window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();
