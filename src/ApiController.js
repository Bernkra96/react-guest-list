const baseUrl = 'http://localhost:4000';

const id = 4;

const firstName = 'Max';
const lasstName = 'Musster ';

function BaseURl() {
  fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function GguestList() {
  fetch(`${baseUrl}/guests`);
}

function GetSingleGust(id) {
  fetch(`${baseUrl}/guests/${id}`)
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function AddGust(firstName, lasstName) {
  fetch(`${baseUrl}/guests`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ firstName: firstName, lastName: lasstName }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function UpdateGust(id) {
  fetch(`${baseUrl}/guests/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ attending: true }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function DeleteGust(id) {
  fetch(`${baseUrl}/guests/${id}`, { method: 'DELETE' })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

export { AddGust, BaseURl, DeleteGust, GetSingleGust, GguestList, UpdateGust };
