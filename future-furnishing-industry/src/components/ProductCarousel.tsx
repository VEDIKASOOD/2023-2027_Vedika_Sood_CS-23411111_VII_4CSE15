import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, CornerDownRight, ShieldCheck, ShoppingBag, Maximize } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data';
import ImageZoomModal from './ImageZoomModal';

interface ProductCarouselProps {
  onAddToBag: (product: Product) => void;
  isInBag: (id: string) => boolean;
  onQuickInquiry: (product: Product) => void;
}

export default function ProductCarousel({ onAddToBag, isInBag, onQuickInquiry }: ProductCarouselProps) {
  // Select 6 of the best products from our 3 categories
  const carouselProducts: Product[] = PRODUCTS.filter(p => 
   ['ifs-09', 'ifs-16', 'thc-01', 'thc-06', 'thc-16', 'thc-19'].includes(p.id)
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  // Auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % carouselProducts.length);
  };

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + carouselProducts.length) % carouselProducts.length);
  };

  const setIndexDirectly = (index: number) => {
    if (index > currentIndex) {
      setDirection('right');
    } else if (index < currentIndex) {
      setDirection('left');
    }
    setCurrentIndex(index);
  };

  const currentProduct = carouselProducts[currentIndex];

  // Motion variants for slide transition
  const slideVariants = {
    enter: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      }
    },
    exit: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? -300 : 300,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      }
    }),
  };

  return (
    <div id="product-carousel" className="bg-slate-900 text-white relative overflow-hidden border border-white/10 shadow-2xl">
      {/* Structural Framing Decorator */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-editorial-orange via-[#ffab5e] to-editorial-blue z-20"></div>

      {/* Main Sliding Content Container */}
      <div className="relative min-h-[500px] lg:min-h-[550px] grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* Left Side: Product Image Showcase with AnimatePresence */}
        <div className="lg:col-span-6 relative overflow-hidden bg-black/40 min-h-[300px] lg:min-h-full group">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full cursor-zoom-in"
              onClick={() => setIsZoomOpen(true)}
            >
              <img
                src={currentProduct.image}
                alt={currentProduct.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none group-hover:scale-102 transition-transform duration-700"
                onError={(e) => {
                  if (currentProduct.svgImage && currentProduct.image !== currentProduct.svgImage) {
                    e.currentTarget.src = currentProduct.svgImage;
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-950/80"></div>
              
              {/* Overlaid Zoom Icon and Hint on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 pointer-events-none">
                <span className="bg-black/75 border border-white/15 text-white font-mono text-[9px] uppercase tracking-widest font-black px-3.5 py-2 flex items-center gap-2 shadow-xl">
                  <Maximize size={12} className="text-editorial-orange" />
                  <span>View Full-Size HD Image</span>
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Overlaid Category Badge */}
          <div className="absolute top-6 left-6 z-20 flex flex-col items-start gap-1">
            <span className="bg-editorial-orange text-white text-[9px] font-mono font-black uppercase tracking-widest px-3 py-1.5 shadow-md">
              {currentProduct.category}
            </span>
            <span className="bg-slate-950/70 text-gray-300 text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 backdrop-blur-xs border border-white/5">
              {currentProduct.subcategory}
            </span>
          </div>

          {/* Left / Right Nav Arrows for Image */}
          <div className="absolute bottom-6 right-6 z-20 flex gap-2">
            <button
              onClick={handlePrev}
              className="w-10 h-10 bg-slate-950/60 hover:bg-editorial-orange hover:text-white text-gray-300 flex items-center justify-center transition-all duration-300 border border-white/10"
              aria-label="Previous image"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 bg-slate-950/60 hover:bg-editorial-orange hover:text-white text-gray-300 flex items-center justify-center transition-all duration-300 border border-white/10"
              aria-label="Next image"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Side: Product Description & Specific Specifications */}
        <div className="lg:col-span-6 bg-slate-950 p-8 lg:p-12 flex flex-col justify-between text-left relative z-10 border-t lg:border-t-0 lg:border-l border-white/10">
          
          {/* Subtle grid background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-40"></div>

          <div className="relative z-10 space-y-6">
            <div className="flex justify-between items-start gap-4">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-editorial-orange font-bold font-mono">
                  Best Seller Selection {currentIndex + 1}/6
                </span>
                {currentProduct.code && (
                  <span className="inline-block text-[10px] uppercase tracking-wider bg-white/10 text-gray-300 font-mono font-black px-2 py-0.5 border border-white/10">
                    SKU: {currentProduct.code}
                  </span>
                )}
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-gray-500 font-bold">
                REF: {currentProduct.id}
              </span>
            </div>

            {/* Product Title inside AnimatePresence to crossfade details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-white leading-tight">
                  {currentProduct.name}
                </h3>
                
                <p className="text-xs sm:text-sm text-gray-400 font-serif italic leading-relaxed">
                  {currentProduct.description}
                </p>

                {/* Technical specs block */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <span className="text-[9px] uppercase tracking-widest text-gray-500 font-black block">
                    Technical Specifications:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                    {Object.entries(currentProduct.specs).slice(0, 4).map(([key, val]) => (
                      <div key={key} className="flex items-start space-x-1.5 text-xs text-gray-300">
                        <CornerDownRight size={12} className="text-editorial-orange shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-gray-400 font-bold uppercase text-[9px] tracking-wide block">
                            {key}:
                          </strong>
                          <span className="text-[11px] font-mono">{val}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Actions and Carousel Index Indicators */}
          <div className="relative z-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-8">
            
            {/* Quick Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => onQuickInquiry(currentProduct)}
                className="px-5 py-2.5 bg-editorial-orange hover:bg-white hover:text-slate-950 text-white font-bold uppercase text-[10px] tracking-widest transition-all shadow-md shrink-0 cursor-pointer"
              >
                Direct Inquiry
              </button>
              
              <button
                onClick={() => onAddToBag(currentProduct)}
                disabled={isInBag(currentProduct.id)}
                className={`px-4 py-2.5 border font-bold uppercase text-[10px] tracking-widest transition-all flex items-center gap-2 ${
                  isInBag(currentProduct.id)
                    ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400 cursor-default'
                    : 'border-white/15 hover:border-editorial-orange hover:text-editorial-orange text-gray-300 cursor-pointer'
                }`}
              >
                <ShoppingBag size={13} />
                <span>{isInBag(currentProduct.id) ? 'In Inquiry Sheet' : 'Add to Sheet'}</span>
              </button>
            </div>

            {/* Custom Interactive Indicators */}
            <div className="flex items-center gap-2.5">
              {carouselProducts.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setIndexDirectly(idx)}
                  className={`relative h-2 transition-all duration-300 cursor-pointer ${
                    currentIndex === idx 
                      ? 'w-8 bg-editorial-orange' 
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>

      </div>

      {/* Interactive HD Zoom Lightbox Modal */}
      <ImageZoomModal
        isOpen={isZoomOpen}
        onClose={() => setIsZoomOpen(false)}
        imageUrl={currentProduct.image}
        fallbackUrl={currentProduct.svgImage}
        imageName={currentProduct.name}
        imageDescription={currentProduct.description}
        specs={currentProduct.specs}
        gallery={carouselProducts.map(p => ({ url: p.svgImage && p.image.includes('curing-oven') ? p.svgImage : p.image, name: p.name }))}
        currentGalleryIndex={currentIndex}
        onNavigateGallery={(idx) => setCurrentIndex(idx)}
      />
    </div>
  );
}
