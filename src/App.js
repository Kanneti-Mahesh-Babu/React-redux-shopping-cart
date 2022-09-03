import './App.css';
import Home from './Components/Home'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CartList from './Components/CartList'




function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cart' element={<CartList/>}/>
        </Routes>

</BrowserRouter>
</div>

  );
}

export default App;
