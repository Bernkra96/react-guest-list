import React from 'react';

export default function App() {
  const [inputFirstName, setInputFirstName] = React.useState('');
  const [inputLastName, setInputLastName] = React.useState('');
  // const [guestList, setGustList] = useState([]);
  // const [isChecked, setIsChecked] = useState(false);
  // function addGust() {
  // return AddGust(inputFirstName, inputLastName);
  // }
  // const deleteById = (id) => {
  // return DeleteGust(id);
  // };
  // function setAddening  (id)  {
  // return UpdateGust(id);
  // };
  const baseUrl = 'http://localhost:4000';

  // async function BaseURl() {
  // await fetch(baseUrl)
  // .then((res) => res.json())
  // .then((data) => console.log(data));
  // }
  // async function GuestList() {
  // await fetch(`${baseUrl}/guests`);
  // }
  // async function GetSingleGust(id) {
  /// await fetch(`${baseUrl}/guests/${id}`)
  //  .then((res) => res.json())
  //  .then((data) => console.log(data));
  // }
  // async function AddGust(firstName, lasstName) {
  // await fetch(`${baseUrl}/guests`, {
  // method: 'POST',
  // headers: {
  // 'Content-Type': 'application/json',
  // },
  //  body: JSON.stringify({ firstName: firstName, lastName: lasstName }),
  // })
  //  .then((res) => res.json())
  //  .then((data) => console.log(data));
  // }
  //  async function UpdateGust(id) {
  //    await fetch(`${baseUrl}/guests/${id}`, {
  //      method: 'PUT',
  //      headers: {
  //        'Content-Type': 'application/json',
  //      },
  //      body: JSON.stringify({ attending: true }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }
  // async function DeleteGust(id) {
  // await fetch(`${baseUrl}/guests/${id}`, { method: 'DELETE' })
  //  .then((res) => res.json())
  //  .then((data) => console.log(data));
  // }
  return (
    <body>
      <header>
        <h1>Gust list</h1>
      </header>
      <main>
        <h2>Add Gust</h2>

        <ol></ol>
      </main>
    </body>
  );
}
