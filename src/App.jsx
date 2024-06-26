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
import Signup from './components/Signup/Signup'
import { OrderProvider } from './context/OrderContext/OrderState'
import { CategoryProvider } from './context/CategoryContext/CategoryState'
import GolfClubs from './components/GolfClubs/GolfClubs'
import Drivers from './components/Drivers/Drivers'
import Irons from './components/Irons/Irons'
import FairwayWoods from './components/FairwayWoods/FairwayWoods'
import Wedges from './components/Wedges/Wedges'
import Accessories from './components/Accessories/Accessories'
import Balls from './components/Balls/Balls'

function App() {

  return (
    <div className="app">
      <BrowserRouter>
      <ProductsProvider>
        <UserPorivider>
          <OrderProvider>
            <CategoryProvider>
              <Header />
              <div className="content">
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/products' element={<Products />} />
                  <Route path='/golfClubs' element={<GolfClubs />} />
                  <Route path='/irons' element={<Irons />} />
                  <Route path='/fairwayWoods' element={<FairwayWoods />} />
                  <Route path='/drivers' element={<Drivers />} />
                  <Route path='/wedges' element={<Wedges />} />
                  <Route path='/accessories' element={<Accessories />} />
                  <Route path='/balls' element={<Balls />} />
                  <Route path='/cart' element={<Cart/>} />
                  <Route path='/users/login' element={<Login/>} />
                  <Route path='/users/conecteduser' element={<Profile/>} />
                  <Route path='/users/' element={<Signup/>} />
                </Routes>
              </div>
              <Footer />
            </CategoryProvider>
          </OrderProvider>
        </UserPorivider>
      </ProductsProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
