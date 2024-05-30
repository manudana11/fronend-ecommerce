import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Products from './components/Products/Products'
import { ProductsProvider } from './context/ProductContext/ProductState'
import Cart from './components/Cart/Cart'
import Login from './components/LogIn/Login'
import { UserPorivider } from './context/UserContext/UserState'
import Profile from './components/Profile/Profile'

function App() {

  return (
    <div className="app">
      <BrowserRouter>
      <ProductsProvider>
        <UserPorivider>
        <Header />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/users/login' element={<Login/>} />
            <Route path='/users/conecteduser' element={<Profile/>} />
          </Routes>
        </div>
        <Footer />
        </UserPorivider>
      </ProductsProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
