import { useEffect } from 'react';
import './App.css';
//import { fetchJoke } from '../Api/jokeApi';

function App() {


  const test = fetch('https://official-joke-api.appspot.com/jokes/programming/ten')

  console.log(test);
  

  useEffect(() => {}, [])
  return( <div>
    
  </div>);
}

export default App;
