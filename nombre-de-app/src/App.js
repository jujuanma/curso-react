import './App.css';
import NavBar from  './Components/NavBar/NavBar';
import FunctionCounter from './Components/itemCount/itemCount';
import ItemListContainer from './Components/itemListContainer/itemListContainer';
import { useState } from 'react'


function App() {
  const [show, setShow] = useState(true)
  return (
    <div className="App">
      <NavBar  title="ecommerce"/>
      <ItemListContainer/>
      
     

    </div>
    
  );
}

export default App;
