// https://www.omnicalculator.com/conversion/seconds-to-minutes-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const minutesRadio = document.getElementById('minutesRadio');
const secondsRadio = document.getElementById('secondsRadio');

let minutes;
let seconds = v; 

// labels of the inpust
const variable = document.getElementById('variable');

minutesRadio.addEventListener('click', function() {
  variable.textContent = 'Seconds';
  seconds = v;
  result.textContent = '';
});

secondsRadio.addEventListener('click', function() {
  variable.textContent = 'Minutes';
  minutes = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(minutesRadio.checked)
    result.textContent = `Minutes = ${computeminutes().toFixed(5)}`;

  else if(secondsRadio.checked)
    result.textContent = `Seconds = ${computeseconds().toFixed(5)}`;
})

// calculation

function computeminutes() {
  return Number(seconds.value) / 60;
}

function computeseconds() {
  return Number(minutes.value) * 60;
}