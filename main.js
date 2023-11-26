console.info('hello');
let toggle = document.querySelector('#toggle');
let toggleRound = document.querySelector('#toggleRound');

let button = false;

toggle.addEventListener('click', () => {

  if(button) {
    toggleRound.classList.add('translate-x-[55px]');
    toggleRound.classList.remove('translate-x-[0px]');
    toggleRound.classList.add('bg-white')
    toggle.classList.add('bg-green-600');
    button = false;
  } else {
    toggleRound.classList.remove('translate-x-[55px]');
    toggleRound.classList.add('translate-x-[0px]');
    toggle.classList.remove('bg-green-600');
    toggleRound.classList.remove('bg-white')
    button = true;
  }
});
