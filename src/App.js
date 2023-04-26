import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import {Navbar} from './components/navbar';
import {Shop} from './pages/shop/shop';
import {Cart} from './pages/cart/cart'
import { ShopContextProvider } from './context/shop-context';
import { ProductDetail } from './pages/shop/product-detail';




function App() {
  return (
    <div className="App">
     <ShopContextProvider>
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/detail/:id' element={<ProductDetail />} />
          </Routes>
      </Router>
    </ShopContextProvider>
    </div>
  );
}

export default App;
