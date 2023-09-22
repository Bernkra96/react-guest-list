const baseUrl = 'http://localhost:4000';

async function BaseURl() {
  await fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => console.log(data));
}

async function GguestList() {
  await fetch(`${baseUrl}/guests`);
}

async function GetSingleGust(id) {
  await fetch(`${baseUrl}/guests/${id}`)
    .then((res) => res.json())
    .then((data) => console.log(data));
}

async function AddGust(firstName, lasstName) {
  await fetch(`${baseUrl}/guests`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ firstName: firstName, lastName: lasstName }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

async function UpdateGust(id) {
  await fetch(`${baseUrl}/guests/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ attending: true }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

async function DeleteGust(id) {
  await fetch(`${baseUrl}/guests/${id}`, { method: 'DELETE' })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

export { AddGust, BaseURl, DeleteGust, GetSingleGust, GguestList, UpdateGust };
