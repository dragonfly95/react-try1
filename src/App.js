import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';


var customer = [
  {"name": "test12"},
  {"name": "test13"},
  {"name": "test14"},
  {"name": "test15"},
];

function App() {

  return (
    <div>
    <Customer name={customer}/>

    </div>
  );
}

export default App;
