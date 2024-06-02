import React from 'react'
import Category from '../Category/Category'
import './Home.scss'

const Home = () => {
  return (
    <div className="home-container">
      <div className="banner">
        <img src="https://www.clubhousegolf.co.uk/acatalog/966_85_callaway_2024_paradym_ai_smoke_iron_offer_banner_93713.jpg" alt="Banner" className="banner-image" />
      </div>
      <div className="category-section">
        <Category categoryId={1} categoryName="Golf Clubs" />
      </div>
      <div className="category-section">
        <Category categoryId={4} categoryName="Drivers" />
      </div>
    </div>
  )
}

export default Home