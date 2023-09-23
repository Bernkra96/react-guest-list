import React from 'react';

export default function App() {
  const [inputFirstName, setInputFirstName] = React.useState('');
  const [inputLastName, setInputLastName] = React.useState('');
  // const [guestList, setGustList] = useState([]);
  // const [isChecked, setIsChecked] = useState(false);

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

  async function GuestList() {
    await fetch(`${baseUrl}/guests`).then((res) => res.json());
  }

  // async function GetSingleGust(id) {
  /// await fetch(`${baseUrl}/guests/${id}`)
  //  .then((res) => res.json())
  //  .then((data) => console.log(data));
  // }

  async function AddGust(firstName, lasstName) {
    await fetch(`${baseUrl}/guests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName: firstName, lastName: lasstName }),
    }).then((res) => res.json());
  }

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

        <ol>{(GuestList.map = (gust) => <li> {gust.id} </li>)}</ol>

        <div>
          <form>
            <label>
              First name
              <input
                name="name"
                value={inputFirstName}
                onChange={(e) => setInputFirstName(e.target.value)}
              />
            </label>
            <label>
              Last name
              <input
                name="name"
                value={inputLastName}
                onChange={(e) => setInputLastName(e.target.value)}
              />
            </label>
            <input
              type="submit"
              value="Add Gust"
              onClick={AddGust(inputFirstName, inputLastName)}
            />
          </form>
        </div>
      </main>
    </body>
  );
}
