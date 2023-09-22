import './App.css';
import { useState } from 'react';
import styles from './index.css';

let lastId = 0;
export default function App() {
  const [inputFirstName, setinputFirstName] = useState('');
  const [inputLastName, setinputLastName] = useState('');
  const [guestList, setGustList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  function addGust() {
    guestList.push({
      id: lastId,
      firstName: inputFirstName,
      lasstName: inputLastName,
      attennging: false,
    });
    setinputFirstName('');
    setinputLastName('');
    lastId++;
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
        {guestList.map((gust) => (
          <li key={gust.id} data-test-id="guest">
            <div> {gust.id} </div>
            <div> {gust.firstName} </div>
            <div> {gust.lasstName} </div>
            <input
              aria-label="<gust.firstName> <gust.lasstName> attending <isChecked>"
              type="checkbox"
              id="topping"
              name="topping"
              value="Paneer"
              checked={gust.attending}
              onChange={() => setAddening(gust.attending)}
            />

            <button
              aria-label="Remove <gust.firstName> {gust.lasstName}"
              onClick={() => deleteById(gust.id)}
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
