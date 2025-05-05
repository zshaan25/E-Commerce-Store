import React from 'react'
import Navbar from './components/layouts/Navbar'
import HeroBanner from './components/views/home/HeroBanner'
import Testimonials from './components/views/home/Testimonials'
import NewsLetterSignup from './components/views/home/NewsLetterSignup'
import Footer from './components/layouts/Footer'
import ProductCard from './components/views/home/ProductCard'
import CategoryCard from './components/views/home/CategoryCard'
import SectionContainer from './components/layouts/SectionContainer'
import GridLayout from './components/layouts/GridLayout'

const App = () => {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gray-50 px-4 py-6">
      <Navbar />
      <SectionContainer title="Top Categories">
        <GridLayout>
          <CategoryCard title="Electronics" icon="📱" />
          <CategoryCard title="Clothing" icon="👗" />
          <CategoryCard title="Books" icon="📚" />
        </GridLayout>
      </SectionContainer>
      <HeroBanner />
      <GridLayout/>
      <SectionContainer title="Featured Products">
        <GridLayout>
          <ProductCard name="Smartphone" price="799" image="/images/phone.jpg" />
          <ProductCard name="Sneakers" price="129" image="/images/shoes.jpg" />
          <ProductCard name="Backpack" price="49" image="/images/bag.jpg" />
        </GridLayout>
      </SectionContainer>
      <CategoryCard/>
      <Testimonials />
      <NewsLetterSignup />
      <Footer />
    </div>
  )
}

export default App