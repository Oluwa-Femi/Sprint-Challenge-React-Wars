import React, {useState, useEffect} from 'react'
import Actors from './components/Actors'
import axios from 'axios'

import './App.css';




const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData] = useState([])

  const fetchData = () => {
    axios.get('https://swapi.co/api/people/')
    .then(response => {
      setData(response.data.results)
    })
    .catch(error =>{console.log('Bleh!! Error :(')})
  }

  useEffect(fetchData, [])

  console.log(data);

// iterating through data variable
  // data.map(rebelname => {
  //   setData(rebelname.name)
  // })

  //   console.log(data);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div>
      <h2>Personal bio page</h2>
        {data.map((rebels, index) => {
          return <Actors name={rebels.name} key={index} height={rebels.height} birthday={rebels.birth_year} gender={rebels.gender}/>
        })}
      </div>
    </div>
  );
}

export default App;
