import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Products from './components/Products/Products'
import { ProductsProvider } from './context/ProductContext/ProductState'
import Cart from './components/Cart/Cart'

function App() {

  return (
    <div className="app">
      <BrowserRouter>
      <ProductsProvider>
        <Header />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/cart' element={<Cart/>} />
          </Routes>
        </div>
        <Footer />
      </ProductsProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
