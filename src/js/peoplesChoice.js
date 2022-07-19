import addAgeSelect from '../modules/addAgeSelect.js';

const filtres = document.getElementById('filtres');

const peoplesInput = document.getElementById('people-room');

const filterInputs = document.querySelectorAll('.filter-input');

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('people-room')) {
    filtres.classList.remove('unactive');
  } else {
    if (event.target.classList.contains('fil-el')) {
      peoplesInput.classList.add('people-room-active');

      if (event.target.classList.contains('filter-button')) {
        const buttonId = event.target.id;
        const inputId = buttonId.split('-')[0];
        const input = document.getElementById(inputId);
        const action = buttonId.split('-')[1];

        if (action === 'less') {
          if (Number(input.value) > Number(input.dataset.min)) {
            input.value = Number(input.value) - 1;
            input.setAttribute('value', Number(input.value) - 1);
            const more = document.getElementById(`${inputId}-more`);
            more.classList.remove('button-unactive');
            if (Number(input.value) === Number(input.dataset.min)) {
              event.target.classList.add('button-unactive');
            }
          }
        }

        if (action === 'more') {
          if (Number(input.value) < Number(input.dataset.max)) {
            input.value = Number(input.value) + 1;
            input.setAttribute('value', Number(input.value) + 1);
            const less = document.getElementById(`${inputId}-less`);
            less.classList.remove('button-unactive');
            if (Number(input.value) === Number(input.dataset.max)) {
              event.target.classList.add('button-unactive');
            }
          }
        }
      }
    } else {
      peoplesInput.classList.remove('people-room-active');
      filtres.classList.add('unactive');
    }
    peoplesInput.setAttribute('value', `${filterInputs[0].value} Adults — ${filterInputs[1].value} Children — ${filterInputs[2].value} Rooms`);
  }
});

filterInputs.forEach((item) => item.addEventListener('input', () => {
  peoplesInput.setAttribute('value', `${filterInputs[0].value} Adults — ${filterInputs[1].value} Children — ${filterInputs[2].value} Rooms`);
}));

filterInputs.forEach((item) => item.addEventListener('focusout', (event) => {
  const inputId = event.target.id;

  if (Number(event.target.value) <= Number(event.target.dataset.min)) {
    event.target.value = event.target.dataset.min;
    event.target.setAttribute('value', event.target.dataset.min);
    const less = document.getElementById(`${inputId}-less`);
    less.classList.add('button-unactive');
  } else {
    const less = document.getElementById(`${inputId}-less`);
    less.classList.remove('button-unactive');
  }

  if (Number(event.target.value) >= Number(event.target.dataset.max)) {
    event.target.value = event.target.dataset.max;
    event.target.setAttribute('value', event.target.dataset.max);
    const more = document.getElementById(`${inputId}-more`);
    more.classList.add('button-unactive');
  } else {
    const more = document.getElementById(`${inputId}-more`);
    more.classList.remove('button-unactive');
  }

  event.target.setAttribute('value', event.target.value);
}));

let numberOfChildrens = 0;

document.getElementById('children-more').addEventListener('click', () => {
  if (numberOfChildrens === 0) {
    const childrenAgeWrap = document.createElement('div');
    childrenAgeWrap.className = 'children-age-wrap fil-el';
    filtres.appendChild(childrenAgeWrap);
    const childrenAge = document.createElement('p');
    childrenAge.innerHTML = 'What is the age of the child you’re travelling with?';
    childrenAge.className = 'children-age-text fil-el';
    childrenAgeWrap.appendChild(childrenAge);
    numberOfChildrens = addAgeSelect(numberOfChildrens);
  } else if (numberOfChildrens < 10) {
    numberOfChildrens = addAgeSelect(numberOfChildrens);
  }
});

const childrenLess = document.getElementById('children-less');

childrenLess.addEventListener('click', () => {
  const selects = document.getElementsByClassName('select-children-age fil-el');
  const lastSelect = selects.length - 1;
  if (numberOfChildrens === 1) {
    const childrenAgeWrap = document.getElementsByClassName('children-age-wrap fil-el')[0];
    childrenAgeWrap.parentNode.removeChild(childrenAgeWrap);
    numberOfChildrens = 0;
  } else {
    selects[lastSelect].parentNode.removeChild(selects[lastSelect]);
    numberOfChildrens -= 1;
  }
});

const childrenInput = document.getElementById('children');

childrenInput.addEventListener('focusout', () => {
  const childrenInputValue = childrenInput.value;

  if (numberOfChildrens > 0) {
    const childrenAgeWrapOld = document.getElementsByClassName('children-age-wrap fil-el')[0];
    childrenAgeWrapOld.parentNode.removeChild(childrenAgeWrapOld);
    numberOfChildrens = 0;
  }

  if (childrenInputValue > 0) {
    const childrenAgeWrap = document.createElement('div');
    childrenAgeWrap.className = 'children-age-wrap fil-el';
    const childrenAge = document.createElement('p');
    childrenAge.innerHTML = 'What is the age of the child you’re travelling with?';
    childrenAge.className = 'children-age-text fil-el';
    childrenAgeWrap.appendChild(childrenAge);
    filtres.appendChild(childrenAgeWrap);

    for (let i = 0; i < childrenInputValue; i += 1) {
      numberOfChildrens = addAgeSelect(numberOfChildrens);
    }
  }
});
