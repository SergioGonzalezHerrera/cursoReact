import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';


function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting='Bienvenido a Potterhead Artículos!' />} />
            <Route path='/category/:idCategory' element={<ItemListContainer greeting='Bienvenido a Potterhead Articulos!' />} />
            <Route path='/detalle/:idProduct' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartContainer />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App
