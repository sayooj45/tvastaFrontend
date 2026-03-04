import React from 'react';
import { FadeIn, SlideInUp } from '../../utils/animations.jsx';

const ProductsMain = () => {
  return (
    <section className="flex flex-col items-center gap-[25px] w-full max-w-[1280px] px-4 md:px-8">
      {/* Main Image - animation restored with threshold fix */}
      <SlideInUp delay={0.2} duration={0.8} threshold={0} className="w-full">
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-[12px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-black/20">
            <img 
              src="https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Products/Rectangle%2034625215%20(1).jpg" 
              alt="3D Printed Furniture Manufacturing"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </SlideInUp>
      {/* Description Text - animation restored with threshold fix */}
      <div className="w-full">
        <FadeIn delay={0.4} duration={0.8} threshold={0}>
          <p className="text-card-mobile md:text-description font-normal leading-[1.25] text-center text-[#0D192D] max-w-[1280px] px-4">
            Crafted with precision and purpose, our concrete furniture range blends aesthetic form with functional design. Whether it's for public spaces, institutions, or contemporary interiors, each piece is made to endure and impress.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default ProductsMain;
