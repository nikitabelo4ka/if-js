import { addHotels } from '../modules/addHotelsInfo.js';
import { sort } from '../modules/sort.js';

async function arrFromFetch() {
  const API = 'https://fe-student-api.herokuapp.com/api';
  const PATH = 'hotels/popular';
  const response = await fetch(`${API}/${PATH}`);
  return response.json();
}

const arrayOfHotels = sessionStorage.getItem('arrayOfHotels');

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
