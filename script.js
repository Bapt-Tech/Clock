// Fonction pour mettre à jour l'heure
function updateClock() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  // Calcul des degrés de rotation en tenant compte de l'orientation de l'horloge
  const hourDeg = ((hour + 9) % 12) * 30 + minute * 0.5;
  const minuteDeg = (minute + 45) * 6 + second * 0.1;
  const secondDeg = (second + 45) * 6;

  document.querySelector('.hour-hand').style.transform = `rotate(${hourDeg}deg)`;
  document.querySelector('.minute-hand').style.transform = `rotate(${minuteDeg}deg)`;
  document.querySelector('.second-hand').style.transform = `rotate(${secondDeg}deg)`;
}

// Appel initial pour positionner les aiguilles correctement
updateClock();

// Mise à jour de l'horloge chaque seconde
setInterval(updateClock, 1000);
