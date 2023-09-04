/* Criar um post utilizando a API.
const url = 'https://jsonplaceholder.typicode.com/posts/2';
const options = {
     method: 'PUT',
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: '{"titulo": "JavaScript"}'
};
   
fetch(url, options)
.then (response => response.json())
.then (response => console.log (response));

*/ 


const url = 'https://jsonplaceholder.typicode.com/posts/2';
const option = {
    method: 'HEAD'
};

fetch (url, option)
.then (response => console.log(response));