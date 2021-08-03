//import React from 'react';
import './App.css';
import Row from './Row'
import requests from './requests';

function App() {
  return (
    <div className="App">
     <h1>Lets go</h1>
     <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
     <Row title="Trending Now" fetchUrl={requests.fetchTreanding}/>
    </div>
  );
}

export default App;
