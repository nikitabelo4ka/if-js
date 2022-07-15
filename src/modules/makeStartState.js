function makeStartState(hotelsExist) {
  if (hotelsExist) {
    const availableHotelsWrap = document.getElementsByClassName('available-hotels')[0];
    const oldAvailableHotels = document.getElementById('available-hotels');
    oldAvailableHotels.parentNode.removeChild(oldAvailableHotels);
    const newAvailableHotels = document.createElement('div');
    newAvailableHotels.classList = 'available-hotels-elements col-m-12 col-s-12';
    newAvailableHotels.id = 'available-hotels';
    availableHotelsWrap.appendChild(newAvailableHotels);
  }
  return false;
}

export default { makeStartState };
