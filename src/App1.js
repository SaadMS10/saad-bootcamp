import React from 'react';

// Import CSS
import './App.css';

// Import Components
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { AccountSummary } from './components/AccountSummary';
import { TransactionHistory } from './components/TransactionHistory';
import { AddTransaction } from './components/AddTransaction';

// Import Provider
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <AccountSummary />
          <TransactionHistory />
          <AddTransaction />
        </div>
      </GlobalProvider>
  );
}






// import React, { useState } from 'react';
// import { Message } from './message.js'
// import React, {UseContext } from './ContextProvider';
// import './App.css';

// export default function App() {

//   let [count, setCount] = useState(1);
//   let [isMorning, setMorning] = useState(false)

//   return (
//     <div className={`box ${isMorning ? 'dayLight' : ''}`}>

//       <h1>Good {isMorning ? 'Morning' : 'Night'}</h1>

//       <Message counter={count} />
//       <br />

//       <button onClick={() => setCount(count + 1)}>
//         Update Counter
//       </button>

//       <button onClick={() => setMorning(!isMorning)}> 
//         Update Day
//       </button>

//     </div>
//   );

// function App() {
//   return (
//     <div className='App'>
//       <h1>Hello Welcome To React APP</h1>
//       <h1>The List Of The Some Greatest Footballer</h1>
//       <hr />
//       {/* <Footbller></Footballer> */}
//       <Footballer no="1" Name="Messi"  Club="Barcelona"/>
//       <hr />
//       <Footballer no="2" Name="Cristiano"  Club="Madrid"/>
//       <hr />
//       <Footballer no="3" Name="Maradona"  Club="Barcelona,Napoli"/>
//       <hr />
//     </div>
//   );
// }

export default App;
