import './App.css';
import React,{ useState } from 'react'

function App() {
  const [isMarco, setMarco] = useState(false)

  const clickhandler = () => {
    if(!isMarco){
      setMarco(true)
    }else{
      setMarco(false)
    }
  }

  return (
    <div className="App">
      <h1 id="marco-polo">{isMarco ? 'Polo' : 'Marco'}</h1>
      <button onClick={clickhandler} id="marco-polo-toggler">{isMarco ? 'Marco' : 'Polo'}</button>
    </div>
  );
}

export default App;
