document.querySelectorAll('.slider-call').forEach((slider) => {
const btn = slider.querySelector('.slider-btn');
const label = slider.querySelector('.slider-text');
let dragging = false, startX = 0, currentX = 0, callLocked = false;

const maxX = () => slider.clientWidth - btn.clientWidth - 12;
const setX = (x: number) => {
const bounded = Math.max(0, Math.min(x, maxX()));
btn.style.transform = `translateX(${bounded}px)`;
currentX = bounded;
};

const reset = () => {
dragging = false;
if (callLocked) return;
btn.style.transition = 'transform .25s ease';
setX(0);
slider.classList.remove('active');
label.textContent = 'Desliza para llamar →';
setTimeout(() => { btn.style.transition = ''; }, 250);
};

const confirmCall = () => {
if (callLocked) return;
callLocked = true; dragging = false;
slider.classList.add('active');
label.textContent = 'Llamando…';
setX(maxX());
setTimeout(() => { window.location.href = `tel:${slider.dataset.phone}`; }, 320);
setTimeout(() => {
btn.style.transition = 'transform .25s ease';
setX(0);
slider.classList.remove('active');
label.textContent = 'Desliza para llamar →';
setTimeout(() => { btn.style.transition = ''; }, 250);
callLocked = false;
}, 2200);
};

const pointerDown = (clientX: number) => {
if (callLocked) return;
dragging = true; startX = clientX - currentX; btn.style.transition = 'none';
};

const pointerMove = (clientX: number) => {
if (!dragging || callLocked) return;
const x = clientX - startX;
setX(x);
if (currentX >= maxX() - 8) confirmCall();
};

btn.addEventListener('mousedown', (e) => pointerDown(e.clientX));
window.addEventListener('mousemove', (e) => pointerMove(e.clientX));
window.addEventListener('mouseup', () => { if (dragging && !callLocked) reset(); });
btn.addEventListener('touchstart', (e) => pointerDown(e.touches[0].clientX), { passive: true });
window.addEventListener('touchmove', (e) => pointerMove(e.touches[0].clientX), { passive: true });
window.addEventListener('touchend', () => { if (dragging && !callLocked) reset(); });
});
