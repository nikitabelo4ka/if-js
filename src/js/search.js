const form = document.getElementById('inputs');
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

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const destinationInput = document.getElementById('destination');
  const destinationInputValue = destinationInput.value;
  const API = 'https://fe-student-api.herokuapp.com/api';
  const PATH = 'hotels?search';

  fetch(`${API}/${PATH}=${destinationInputValue}`)
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
