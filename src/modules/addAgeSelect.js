export default function addAgeSelect(numberOfChildrens) {
  const childrenAgeSelect = document.createElement('select');
  const childrenAgeWrap = document.getElementsByClassName('children-age-wrap fil-el')[0];
  childrenAgeWrap.appendChild(childrenAgeSelect);
  childrenAgeSelect.className = 'select-children-age fil-el';
  for (let i = 0; i < 18; i += 1) {
    const optionOfSelect = document.createElement('option');
    optionOfSelect.className = 'ageOption fil-el';
    optionOfSelect.innerHTML = `${i} years old`;
    optionOfSelect.setAttribute('value', i);
    childrenAgeSelect.appendChild(optionOfSelect);
  }
  return numberOfChildrens + 1;
}
