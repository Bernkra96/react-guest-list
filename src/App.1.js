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

  function AddGust() {
    api
      .post(`/guests`, {
        firstName: inputFirstName,
        lastName: inputLastName,
      })

      .then(function (response) {
        console.log(response);
        setInputFirstName('');

        setInputLastName('');
      })

      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => GustList(), []);

  function UpdateGust(x) {
    api
      .put(`/guests/${x}`, { attending: true })

      .then(function (response) {
        console.log(response);
      })

      .catch(function (error) {
        console.log(error);
      });
  }
  // async function GetSingleGust(id) {
  /// await fetch(`${baseUrl}/guests/${id}`)
  //  .then((res) => res.json())
  //  .then((data) => console.log(data));
  // }

  function DeleteGust(x) {
    api
      .delete(`/guests/${x}`)
      .then((x) => {
        console.log(`Deleted post with ID ${x}`);
      })
      .catch((error) => {
        console.error(error);
      });
  }

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
                <p>{gust.id} </p>
                <p>{gust.firstName} </p>
                <p>{gust.lastName} </p>
                <input
                  type="checkbox"
                  checked={gust.attending}
                  onChange={UpdateGust(gust.id)}
                />
                <input
                  type="button"
                  value="Delade Gust"
                  onClick={DeleteGust(gust.id)}
                />
              </div>
            </li>
          ))}
        </ol>

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

            <input type="button" value="Add Gust" onClick={AddGust} />
          </form>
        </div>
      </main>
    </body>
  );
}
