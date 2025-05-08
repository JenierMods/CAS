  const envelope = document.getElementById('envelope');
  const lyricsEl = document.getElementById('lyrics');
  const audio = document.getElementById('audio');
  const lyrics = [
    "Cigarettes After Sex - You're The Only Good Thing In My Life",
    "Haz lo que tú corazón desea",
    "El amor siempre es extraño cuando empieza",
    "No te quedaban preocupaciones en el mundo ",
    "Desnuda, bronceada junto a la piscina",
    "Me haces pensar en....",
    "Las tormentas en las playas",
    "Con todas las luces apagadas",
    "Todo está mal pero está bien",
    "Todo está mal pero está bien",
    "Eres lo único bueno en mi vida",
    "By JenierMods OFC",
    "Acostado en el sol",
    "No necesitas decirme cuando vienes",
    "Porque sabes que puedo sentirlo",
    "🎶"
  ];

  const timings = [9000, 5000, 7000, 7000, 10000, 6000, 8000, 5000, 7000, 7000, 8000, 8000, 5000, 7000, 9000, 10000];
  
  let currentLine = 0;
  let timeout;
  let isPlaying = false;
  audio.addEventListener('ended', () => {
    lyricsEl.textContent = "Toca para iniciar";
    lyricsEl.classList.add("show");
    envelope.classList.remove('open');
    isPlaying = false;
  });
  envelope.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
    } else {
      audio.play().then(() => {
        isPlaying = true;
        envelope.classList.toggle('open');
        if (envelope.classList.contains('open')) {
          currentLine = 0;
          lyricsEl.textContent = lyrics[currentLine];
          showLine(currentLine);
        }
      }).catch(err => {
        console.error("Error al reproducir el audio:", err);
        alert("No se pudo reproducir el audio. Por favor, inténtalo de nuevo.");
      });
    }
  });
  function showLine(index) {
    if (index >= lyrics.length) return;
    lyricsEl.classList.remove("show");
    setTimeout(() => {
      lyricsEl.textContent = lyrics[index];
      lyricsEl.classList.add("show");
      timeout = setTimeout(() => {
        showLine(index + 1);
      }, timings[index]);
    }, 300);
  }