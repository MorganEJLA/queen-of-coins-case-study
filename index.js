document.querySelectorAll('.screenshot-thumb').forEach(img => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', () => {
    document.getElementById('lightbox-img').src = img.src;
    document.getElementById('lightbox').style.display = 'flex';
  });
});
