async function arrFromFetch() {
  const API = 'https://fe-student-api.herokuapp.com/api';
  const PATH = 'hotels/popular';
  const response = await fetch(`${API}/${PATH}`);
  return response.json();
}

async function checkSessionStorage() {
  if (sessionStorage.getItem('arrayOfHotels') === null) {
    const info = await arrFromFetch();
    sessionStorage.setItem('arrayOfHotels', JSON.stringify(info));
    const result = sessionStorage.getItem('arrayOfHotels');
    JSON.parse(result).forEach((item) => {
      const homesGuestsLoves = document.getElementById('homes-guests-loves');
      const newDiv = document.createElement('div');
      newDiv.className = 'homes-guests-loves-element col-m-6 col-3';
      homesGuestsLoves.appendChild(newDiv);
      newDiv.innerHTML = `<img class="hotel-icon" src="${item.imageUrl}" alt="${item.name} image">
                          <a class="hotel-link" href="">${item.name}</a>
                          <p class="hotel-location">${item.city}, ${item.country}</p>`;
    });
  } else {
    const resultFromStorage = sessionStorage.getItem('arrayOfHotels');
    JSON.parse(resultFromStorage).forEach((item) => {
      const newDiv = document.createElement('div');
      const homesGuestsLoves = document.getElementById('homes-guests-loves');
      newDiv.className = 'homes-guests-loves-element col-m-6 col-3';
      homesGuestsLoves.appendChild(newDiv);
      newDiv.innerHTML = `<img class="hotel-icon" src="${item.imageUrl}" alt="${item.name} image">
                          <a class="hotel-link" href="">${item.name}</a>
                          <p class="hotel-location">${item.city}, ${item.country}</p>`;
    });
  }
}

checkSessionStorage().catch((error) => console.log(error.massage));
