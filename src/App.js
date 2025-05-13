import logo from './logo.svg';
import './App.css';
import React from 'react';
import Item from './MyItem'
import StarWarsRaw from './StarWarsRaw';
import StarWars from './StarWars';
import MyButton from './MyButton';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState(''); // State to hold the message

  const apiCall = () => {
    axios.get('http://localhost:8080/').then((response) => {
      //this console.log will be in our frontend console
      setMessage(response.data.message)
      console.log(response.data)
    })
  }  

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <button onClick={apiCall}>Make API Call</button>  
        <label>{message}</label>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org"
          target="_blank" rel="noopener noreferrer">
          Learn React 3
        </a>
        {/* <StarWars /> */}
        <Item count={count} onClick={handleClick} />
        <Item count={count} onClick={handleClick} />

        <MyButton count={count} onClick={handleClick} />
      </header>
    </div>
  );
}

export default App;
