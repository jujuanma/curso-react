import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/itemListContainer/itemListContainer';
import ItemDetailContainer from './Components/itemDetailContainer/itemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<div><h1>Bienvenido!</h1> <h2>Elija una categoria</h2></div>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}


export default App;
