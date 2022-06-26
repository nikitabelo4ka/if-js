const homesGuestsLoves = document.getElementById('homes-guests-loves');

fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
  .then((response) => response.json())
  .then((result) => {
    result.forEach((item) => {
      const newDiv = document.createElement('div');
      newDiv.className = 'homes-guests-loves-element col-m-6 col-3';
      homesGuestsLoves.appendChild(newDiv);
      newDiv.innerHTML = `<img class="hotel-icon" src="${item.imageUrl}" alt="${item.name} image"/><a class="hotel-link" href="">${item.name}</a><p class="hotel-location">${item.city}, ${item.country}</p>`;
    });
  });
