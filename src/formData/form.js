const form = document.getElementById('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const fd = new FormData(form);

  const fetchOptions = {
    method: 'POST',
    enctype: 'multipart/form-data',
    body: fd,
  };

  try {
    const response = await fetch('https://fe-student-api.herokuapp.com/api/file', fetchOptions);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});
