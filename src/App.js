import './App.css';
import { useState } from 'react';
import styles from './index.css';

export default function App() {
  const [inputFirstName, setinputFirstName] = useState('');
  const [inputLastName, setinputLastName] = useState('');
  const [guestList, setGustList] = useState([]);

  function addGust() {
    guestList.push({


      firstName: inputFirstName,
      lasstName: inputLastName,
      attending: false,
    });

    setinputFirstName('');
    setinputLastName('');
  }

  function deleteGust(x) {
    delete guestList[x];
  }

  const deleteByIndex = index => {
    setFruits(oldValues => {
      return oldValues.filter((_, i) => i !== index)
    })

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
              <button onClick={() => () => deleteByIndex(gust)}>
                {' '}
                Activate Lasers
              </button>
            </li>
          );
        })}
      </ol>

      <div>
        {' '}
        <input
          type="text"
          value={inputFirstName}
          onChange={(e) => setinputFirstName(e.target.value)}
        />{' '}
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
        <button onClick={addGust}> Activate Lasers</button>
      </div>
    </>
  );
}
