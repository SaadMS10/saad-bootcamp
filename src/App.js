import React from 'react';
import './App.css';
import Footballer from './footballer.js';
function App() {
  return (
    <div className='App'>
      <h1>Hello Welcome To React APP</h1>
      <h1>The List Of The Some Greatest Footballer</h1>
      <hr />
      {/* <Footbller></Footballer> */}
      <Footballer no="1" Name="Messi"  Club="Barcelona"/>
      <hr />
      <Footballer no="2" Name="Cristiano"  Club="Madrid"/>
      <hr />
      <Footballer no="3" Name="Maradona"  Club="Barcelona,Napoli"/>
      <hr />
    </div>
  );
}

export default App;
