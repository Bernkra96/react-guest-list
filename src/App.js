import './App.css';
import { useState } from 'react';
import {
  AddGust,
  BaseURl,
  DeleteGust,
  GetSingleGust,
  UpdateGust,
} from './ApiController';
import styles from './index.css';

const baseUrl = 'http://localhost:4000';
let lastId = 0;
export default function App() {
  const [inputFirstName, setinputFirstName] = useState('');
  const [inputLastName, setinputLastName] = useState('');
  const [guestList, setGustList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  function GguestList() {
    fetch(`${baseUrl}/guests`);
  }

  function addGust() {
    AddGust(inputFirstName, inputLastName);

    setinputFirstName('');
    setinputLastName('');
  }

  const deleteById = (id) => {
    setGustList((oldValues) => {
      return oldValues.filter((fruit) => fruit.id !== id);
    });
  };

  const setAddening = (x) => {
    if (!x) {
      x(true);
    }
  };

  return (
    <>
      <header>
        <h1>Gust list</h1>
      </header>
      <ol>
        {GetSingleGust.map((guest) => (
          <li key={guest.id} data-test-id="guest">
            <div> {guest.id} </div>
            <div> {guest.firstName} </div>
            <div> {guest.lasstName} </div>
            <input
              aria-label="<gust.firstName> <gust.lasstName> attending <isChecked>"
              type="checkbox"
              id="topping"
              name="topping"
              value="Paneer"
              checked={guest.attending}
              onChange={() => setAddening(guest.attending)}
            />

            <button
              aria-label="Remove <gust.firstName> {gust.lasstName}"
              onClick={() => deleteById(guest.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ol>

      <div>
        <label>
          First name
          <input
            type="text"
            value={inputFirstName}
            onChange={(e) => setinputFirstName(e.target.value)}
          />
        </label>
        <label>
          {' '}
          Last name
          <input
            type="text"
            value={inputLastName}
            onChange={(e) => setinputLastName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Return') {
                addGust();
              }
            }}
          />
        </label>
        <button onClick={addGust}> Activate Lasers</button>
      </div>
    </>
  );
}
