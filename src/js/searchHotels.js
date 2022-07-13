const form1 = document.getElementById('inputs');
const adultsInput = document.getElementById('adults');
const childrensAges = document.getElementsByClassName('select-children-age fil-el');
const roomsInput = document.getElementById('rooms');
const destinationInput = document.getElementById('destination');

const API1 = 'https://fe-student-api.herokuapp.com/api';
const PATH1 = 'hotels?search=';

let hotelsExist = false;
const availableHotelsWrap = document.getElementsByClassName('available-hotels')[0];

function makeStartState() {
  if (hotelsExist) {
    const oldAvailableHotels = document.getElementById('available-hotels');
    oldAvailableHotels.parentNode.removeChild(oldAvailableHotels);
    const newAvailableHotels = document.createElement('div');
    newAvailableHotels.classList = 'available-hotels-elements col-m-12 col-s-12';
    newAvailableHotels.id = 'available-hotels';
    availableHotelsWrap.appendChild(newAvailableHotels);
    hotelsExist = false;
  }
}

form1.addEventListener('submit', (event) => {
  event.preventDefault();

  const adultsValue = adultsInput.value;
  const roomsValue = roomsInput.value;
  const destinationValue = destinationInput.value;
  let chilndrensAgesValue = '';

  if (childrensAges.length !== 0) {
    chilndrensAgesValue = '&children=';
    for (let i = 0; i < childrensAges.length; i += 1) {
      chilndrensAgesValue += `${childrensAges[i].value},`;
    }
  }

  fetch(`${API1}/${PATH1}${destinationValue}&adults=${adultsValue}${chilndrensAgesValue.slice(0, -1)}&rooms=${roomsValue}`)
    .then((response) => response.json())
    .then((result) => {
      if (result.length === 0) {
        availableHotelsWrap.classList.add('unactive');

        makeStartState();

        alert('Nothing was found for your query');

        return;
      }
      availableHotelsWrap.classList.remove('unactive');

      makeStartState();

      result.forEach((item) => {
        const availableHotels = document.getElementById('available-hotels');
        const newDiv = document.createElement('div');
        newDiv.className = 'available-hotels-element col-m-6 col-3';
        availableHotels.appendChild(newDiv);
        newDiv.innerHTML = `<img class="available-hotels-icon" src="${item.imageUrl}" alt="${item.name} image"/>
                            <a class="available-hotels-link" href="">${item.name}</a>
                            <p class="available-hotels-location">${item.city}, ${item.country}</p>`;
      });

      hotelsExist = true;
    });
});
