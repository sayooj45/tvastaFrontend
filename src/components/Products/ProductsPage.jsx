import React from 'react';
import { PageTransition } from '../../utils/animations.jsx';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ScrollProgressBar from '../ScrollProgressBar';
import ProductsHero from './ProductsHero';
import ProductsMain from './ProductsMain';
import ProductsGrid from './ProductsGrid';
import ProductsCategories from './ProductsCategories';
import ProductsDownload from './ProductsDownload';
import ProductsCustom from './ProductsCustom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ProductsPage = () => {
  useScrollAnimation();

  return (
    <PageTransition className="min-h-screen bg-white">
      <Navbar />
      <ProductsHero />
      <div className="flex flex-col justify-center items-center gap-[120px] w-full py-[60px]">
        <ProductsMain />
        <ProductsGrid />
        <ProductsCategories />
        <ProductsDownload />
        <ProductsCustom />
      </div>
      <Footer />
    </PageTransition>
  );
};

export default ProductsPage;
