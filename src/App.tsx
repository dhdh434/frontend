import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TopBanner from './Blah';
import MovieList from './Movies';

class Conclusion extends React.Component {
  render() {
    return <p>Toodles!</p>;
  }
}

// function Rando() {
//   return (
//     <div>
//       <h2>Random Number: {Math.random()}</h2>
//     </div>
//   );
// }

// function GoButton(props: any) {
//   return (
//     <div>
//       <button onClick={props.blahGo}>GO!</button>
//       <br></br>
//     </div>
//   );
// }

// function AmountOfGo(props: any) {
//   return <label>{props.num}</label>;
// }

function App() {
  // const [count, setCount] = useState(0);
  // const incrementGo = () => setCount(count + 1);

  return (
    <div>
      <TopBanner saying="Dave's Website" />
      <MovieList />
      {/* <Rando /> */}
      {/* <GoButton blahGo={incrementGo} /> */}
      {/* <AmountOfGo num={count} /> */}
      <br />
      <br />
      <br />
      <Conclusion />
    </div>
  );
}

export default App;
