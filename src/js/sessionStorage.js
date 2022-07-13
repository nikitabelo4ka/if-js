async function arrFromFetch() {
  const API = 'https://fe-student-api.herokuapp.com/api';
  const PATH = 'hotels/popular';
  const response = await fetch(`${API}/${PATH}`);
  return response.json();
}

const arrayOfHotels = sessionStorage.getItem('arrayOfHotels');

function addHotels(hotelInfo) {
  hotelInfo.forEach((item) => {
    const homesGuestsLoves = document.getElementById('homes-guests-loves');
    const newDiv = document.createElement('div');
    newDiv.className = 'homes-guests-loves-element col-m-6 col-3';
    homesGuestsLoves.appendChild(newDiv);
    newDiv.innerHTML = `<img class="hotel-icon" src="${item.imageUrl}" alt="${item.name} image">
                          <a class="hotel-link" href="">${item.name}</a>
                          <p class="hotel-location">${item.city}, ${item.country}</p>`;
  });
}

function sort(arr) {
  for (let i = 0, endI = arr.length; i < endI; i += 1) {
    let toggle = false;

    for (let j = 0, endJ = endI - 1; j < endJ; j += 1) {
      if (arr[j].name > arr[j + 1].name) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        toggle = true;
      }
    }
    if (!toggle) break;
  }
  return arr;
}

async function checkSessionStorage() {
  if (arrayOfHotels === null) {
    const info = await arrFromFetch();
    sessionStorage.setItem('arrayOfHotels', JSON.stringify(info));
    addHotels(sort(info));
    return;
  }
  addHotels(sort(JSON.parse(arrayOfHotels)));
}

checkSessionStorage().catch((error) => console.log(error.massage));
