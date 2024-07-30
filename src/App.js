import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductDetails from './components/ProductDetails';
import Testimonials from './components/Testimonials';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <ProductDetails />
            <Testimonials />
            <TrustSection />
            <Footer />
        </div>
    );
};

export default App;
