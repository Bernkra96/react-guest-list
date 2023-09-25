import Axios from 'axios';
import React, { useEffect } from 'react';

const api = Axios.create({ baseURL: 'http://localhost:4000' });

export default function App() {
  const [inputFirstName, setInputFirstName] = React.useState('');
  const [inputLastName, setInputLastName] = React.useState('');
  const [guestList, setGuestList] = React.useState([]);
  // const [isChecked, setIsChecked] = useState(false);

  // const deleteById = (id) => {
  // return DeleteGust(id);
  // };

  // function setAddening  (id)  {
  // return UpdateGust(id);
  // };

  // async function BaseURl() {
  // await fetch(baseUrl)
  // .then((res) => res.json())
  // .then((data) => console.log(data));
  // }

  function AddGust() {
    api
      .post(`/guests`, {
        firstName: 'Karl',
        lastName: 'Horky',
      })

      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const GustList = () => {
    api
      .get('/guests')
      .then((response) => {
        // handle success
        console.log(response);
        setGuestList(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  useEffect(() => GustList(), []);
  // async function GetSingleGust(id) {
  /// await fetch(`${baseUrl}/guests/${id}`)
  //  .then((res) => res.json())
  //  .then((data) => console.log(data));
  // }

  function addGust() {
    AddGust();
    setInputFirstName('');
    setInputLastName('');
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

        <ol>
          {guestList.map((gust) => (
            <li key={`user-${gust.id}`}>
              <div>
                <p>
                  {gust.id}
                  {gust.firstName}
                  {gust.lastName}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <div>
          <p>{GustList}'##</p>
        </div>
        <div>
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
          <input type="submit" value="Add Gust" onClick={addGust} />
        </div>
      </main>
    </body>
  );
}
