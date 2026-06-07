import { isWithinRange } from "./index.astro.0.mts";

export function updateScheduleStatus() {
const now = new Date();
const day = now.getDay();
const currentMinutes = now.getHours() * 60 + now.getMinutes();

document.querySelectorAll('.schedule-status').forEach((status) => {
const card = status.closest('.card-custom');
const title = (card?.querySelector('.place h3')?.textContent || '').toLowerCase();
const phone = (card?.querySelector('.phone-number')?.textContent || '').replace(/\s/g, '');

const isAlwaysOpen = status.dataset.open24 === 'true' || title.includes('urgencia de salud mental') || phone.includes('225157007');

let available = false;
if (isAlwaysOpen) {
available = true;
} else {
let range = null;
if (day >= 1 && day <= 5) range = status.dataset.openWeekdays;
else if (day === 6) range = status.dataset.openSaturday;
else if (day === 0) range = status.dataset.openSunday;
available = isWithinRange(range, currentMinutes);
}

status.classList.toggle('is-open', available);
status.classList.toggle('is-closed', !available);
const text = status.querySelector('.status-text');
if (text) text.textContent = available ? 'Servicio disponible' : 'Servicio fuera de horario';
});
}
