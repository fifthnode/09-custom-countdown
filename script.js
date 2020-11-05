const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

// Set date input minimum with today's date
const today = new Date().toISOString().split('T')[0];
// console.log(today);
dateEl.setAttribute('min', today);