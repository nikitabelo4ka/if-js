const form = document.getElementById('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const fd = new FormData(form);

  const fetchOptions = {
    method: 'Post',
    enctype: 'multipart/form-data',
    body: fd,
  };

  const res = await fetch('https://fe-student-api.herokuapp.com/api/file', fetchOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((result) => result)
    .catch((error) => console.log(error.message));
  console.log(res);
});
