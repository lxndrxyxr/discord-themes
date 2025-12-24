// Imposta automaticamente l'anno nel footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Qui in futuro puoi aggiungere:
// - animazioni leggere
// - caricamento dinamico dei temi
// - interazioni avanzate
