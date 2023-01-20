document.addEventListener('DOMContentLoaded', function () {
  const cursor = document.querySelector('.cursor');
  const mouseX = document.getElementById('mouse-x');
  const mouseY = document.getElementById('mouse-y');

  document.body.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;

    mouseX.innerText = e.clientX + ' px';
    mouseY.innerText = e.clientY + ' px';
  });
});
