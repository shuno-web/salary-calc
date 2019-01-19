'use strict';

{
  const hour = document.getElementById('hour');
  const month = document.getElementById('month');
  const year = document.getElementById('year');
  const calc = document.getElementById('calc');
  const reset = document.getElementById('reset');

  calc.addEventListener('click', () => {
    if (hour.value !== null && month.value === '' && year.value === '') {
      month.value = hour.value * 8 * 5 * 4;
      year.value = hour.value * 8 * 5 * 52;
    }
    if (hour.value === '' && month.value !== '' && year.value === '') {
      hour.value = Math.floor(month.value / 8 / 5 / 4);
      year.value = month.value * 12;
    }
    if (hour.value === '' && month.value === '' && year.value !== '') {
      hour.value = Math.floor(year.value / 12 / 20 / 8);
      month.value = Math.floor(year.value / 12);
    }
  });

  reset.addEventListener('click', () => {
    hour.value = '';
    month.value = '';
    year.value = '';
  });
}
