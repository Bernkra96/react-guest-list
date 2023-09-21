import './App.css';
import { useState } from 'react';
import styles from './index.css';

let lastId = 0;
export default function App() {
  const [inputFirstName, setinputFirstName] = useState('');
  const [inputLastName, setinputLastName] = useState('');
  const [guestList, setGustList] = useState([]);

  function addGust() {
    guestList.push({
      id: lastId,

      firstName: inputFirstName,
      lasstName: inputLastName,
      attending: false,
    });

    lastId++;

    setinputFirstName('');
    setinputLastName('');
  }

  const deleteByValue = (value) => {
    guestList((oldValues) => {
      return oldValues.filter((guest) => guest !== value);
    });
  };

  return (
    <>
      <header>
        <h1>Gust list</h1>
      </header>
      <ol>
        {guestList.map((gust) => {
          return (
            <li data-test-id="guest">
              <div> {gust.firstName} </div>
              <div> {gust.lasstName} </div>
              <div> {gust.id} </div>
            </li>
          );
        })}
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
