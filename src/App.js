import './App.css';
import AutoComplete from './AutoComplete';
import { useState } from 'react';
import axios from 'axios'

function App() {

  const [results, setResults] = useState([]);

  const filterData = (filter) => {
    axios.get(`http://localhost:3001/posts?author=${filter}`).then((response) => {
      console.log(response);
      setResults(response)
    }).catch((error) => {
      console.log(error);
    })
  }

  const inputChange=(e)=>{
    let input = e.currentTarget.value;
    console.log(input);
    filterData(input);
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" onChange={inputChange}></input>
        <AutoComplete results={results}></AutoComplete>
      </header>
    </div>
  );
}

export default App;
