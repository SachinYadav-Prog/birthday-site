function showPage2() {
  document.getElementById('page1').classList.add('hidden');
  setTimeout(() => {
    document.getElementById('page2').classList.remove('hidden');
  }, 800);
}

function cutCake() {
  let cake = document.getElementById('cake');
  cake.src = 'cut_cake.png';
  cake.style.transform = 'scale(0.9)';
  setTimeout(() => {
    document.getElementById('page2').classList.add('hidden');
    document.getElementById('page3').classList.remove('hidden');
  }, 1200);
}

function showPhotos() {
  document.getElementById('page3').classList.add('hidden');
  setTimeout(() => {
    document.getElementById('photos').classList.remove('hidden');
  }, 800);
}

function toggleMusic() {
  const music = document.getElementById('bg-music');
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
