import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './pages/Movies';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import PodcastInfo from './pages/podcast';
import Home from './pages/Home';

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
    //add a navigation section
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Movies" element={<MovieList />} />
            <Route path="podcast" element={<PodcastInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <MovieList /> */}
      {/* <Rando /> */}
      {/* <GoButton blahGo={incrementGo} /> */}
      {/* <AmountOfGo num={count} /> */}
    </div>
  );
}

export default App;
