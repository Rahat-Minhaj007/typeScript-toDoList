import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <div className="App ">
        <h1 className="text-center text-uppercase">TO DO LIST</h1>
         <Contacts></Contacts>
    </div>
  );
}

export default App;
