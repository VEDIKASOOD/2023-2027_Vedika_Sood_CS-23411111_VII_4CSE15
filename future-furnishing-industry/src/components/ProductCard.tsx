import React, { useState } from 'react';
import { Product } from '../types';
import { Plus, Check, ClipboardList, PenTool, Tag, Maximize } from 'lucide-react';
import ImageZoomModal from './ImageZoomModal';

interface ProductCardProps {
  key?: string;
  product: Product;
  onAddToBag: (product: Product) => void;
  isInBag: boolean;
  themeMode: 'industrial' | 'luxury';
  onQuickInquiry: (product: Product) => void;
}

export default function ProductCard({
  product,
  onAddToBag,
  isInBag,
  themeMode,
  onQuickInquiry,
}: ProductCardProps) {
  const [showSpecs, setShowSpecs] = useState(false);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [activeView, setActiveView] = useState<'photo' | 'blueprint'>('photo');

  // Determine colors based on category
  const isIndustrial = product.category === 'Powder Coating Machines';
  const isPowder = product.category === 'Powder Coating Powder';

  const hasBlueprint = !!product.svgImage;
  const currentImage = activeView === 'blueprint' && product.svgImage ? product.svgImage : product.image;

  return (
    <div className="bg-white border border-gray-200 transition-all duration-300 flex flex-col h-full group hover:border-editorial-orange">
      {/* Product Image */}
      <div 
        className="relative overflow-hidden aspect-4/3 bg-gray-50 border-b border-gray-200 cursor-zoom-in group"
        onClick={() => setIsZoomOpen(true)}
      >
        <img
          src={currentImage}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            if (product.svgImage && currentImage !== product.svgImage) {
              e.currentTarget.src = product.svgImage;
            }
          }}
        />

        {/* Toggle Switcher for Photo vs Blueprint */}
        {hasBlueprint && (
          <div 
            className="absolute top-3 right-3 flex items-center bg-[#0A192F]/95 border border-white/10 p-0.5 rounded-none z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveView('photo')}
              className={`px-2 py-1 text-[8px] font-black uppercase tracking-wider transition-colors duration-150 ${
                activeView === 'photo' 
                  ? 'bg-[#f68b1e] text-white' 
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              Photo
            </button>
            <button
              onClick={() => setActiveView('blueprint')}
              className={`px-2 py-1 text-[8px] font-black uppercase tracking-wider transition-colors duration-150 ${
                activeView === 'blueprint' 
                  ? 'bg-[#f68b1e] text-white' 
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              Blueprint
            </button>
          </div>
        )}
        
        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-black/75 border border-white/15 text-white font-mono text-[9px] uppercase tracking-widest font-black px-3 py-1.5 flex items-center gap-1.5 shadow-md">
            <Maximize size={11} className="text-editorial-orange" />
            <span>Enlarge Image (HD)</span>
          </span>
        </div>

        {/* Subcategory Label - Blocky Editorial Style */}
        <span className="absolute top-3 left-3 bg-editorial-blue text-white text-[9px] uppercase font-black tracking-widest px-3 py-1 z-10">
          {product.subcategory}
        </span>

        {/* Color Code Badge for Coating Shades */}
        {product.code && (
          <span className="absolute bottom-3 right-3 px-2.5 py-1 text-[10px] font-bold font-mono bg-white text-editorial-blue border border-gray-200 flex items-center space-x-1 z-10">
            <Tag size={10} className="text-editorial-orange" />
            <span>{product.code}</span>
          </span>
        )}
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-3 text-left">
          {/* Title */}
          <h3 className="text-base font-black uppercase tracking-tight text-editorial-blue group-hover:text-editorial-orange transition-colors duration-200 line-clamp-1">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-xs text-stone-500 leading-relaxed font-serif italic line-clamp-3">
            {product.description}
          </p>

          {/* Finishes or Materials (Category III Luxury Furniture Specific) */}
          {(product.materials || product.finishes) && (
            <div className="pt-2 space-y-2">
              {product.materials && (
                <div className="flex flex-wrap gap-1.5 items-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mr-1.5">Materials:</span>
                  {product.materials.map((mat) => (
                    <span key={mat} className="text-[9px] font-bold bg-gray-100 text-stone-600 px-2 py-0.5 border border-gray-200">
                      {mat}
                    </span>
                  ))}
                </div>
              )}
              {product.finishes && (
                <div className="flex flex-wrap gap-1.5 items-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mr-1.5">Finishes:</span>
                  {product.finishes.map((fin) => (
                    <span key={fin} className="text-[9px] font-bold bg-editorial-orange/10 text-editorial-orange px-2 py-0.5 border border-editorial-orange/20">
                      {fin}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Actions & Spec toggle */}
        <div className="pt-5 border-t border-gray-200 mt-5 space-y-3">
          {/* Technical Specs Accordion Toggle */}
          <button
            onClick={() => setShowSpecs(!showSpecs)}
            className="w-full text-left py-2 px-3 bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-stone-600"
          >
            <span className="flex items-center space-x-1.5">
              <ClipboardList size={12} className="text-stone-400" />
              <span>{showSpecs ? 'Hide Specifications' : 'View Specifications'}</span>
            </span>
            <span className="text-stone-400 text-[10px]">{showSpecs ? '▲' : '▼'}</span>
          </button>

          {/* Expanded Specs Details */}
          {showSpecs && (
            <div className="bg-gray-50 p-3 border border-gray-200 space-y-2.5 animate-fadeIn">
              <h4 className="text-[9px] font-bold text-stone-400 uppercase tracking-widest font-mono">Technical Parameters:</h4>
              <div className="grid grid-cols-1 gap-1.5">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-start text-[11px] leading-tight border-b border-dashed border-gray-200 pb-1.5 last:border-0 last:pb-0">
                    <span className="text-stone-500 font-medium mr-4">{key}</span>
                    <span className="text-editorial-blue font-bold text-right font-mono">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Inquiry buttons */}
          <div className="grid grid-cols-2 gap-2">
            {/* Add to list */}
            <button
              onClick={() => onAddToBag(product)}
              className={`w-full py-2.5 px-2.5 text-[10px] font-bold uppercase tracking-widest border transition-all duration-200 flex items-center justify-center space-x-1.5 ${
                isInBag
                  ? 'bg-emerald-600 border-emerald-600 text-white cursor-default'
                  : 'bg-editorial-blue border-editorial-blue hover:bg-editorial-orange text-white'
              }`}
            >
              {isInBag ? (
                <>
                  <Check size={12} className="stroke-[3]" />
                  <span>In Cart</span>
                </>
              ) : (
                <>
                  <Plus size={12} />
                  <span>Add to Cart</span>
                </>
              )}
            </button>

            {/* Quick quote action */}
            <button
              onClick={() => onQuickInquiry(product)}
              className="w-full py-2.5 px-2.5 text-[10px] font-bold uppercase tracking-widest border border-gray-300 hover:border-editorial-orange hover:text-editorial-orange text-stone-700 transition-all flex items-center justify-center space-x-1.5"
            >
              <PenTool size={11} />
              <span>Direct RFQ</span>
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for HD Inspection */}
      <ImageZoomModal
        isOpen={isZoomOpen}
        onClose={() => setIsZoomOpen(false)}
        imageUrl={currentImage}
        fallbackUrl={product.svgImage}
        imageName={product.name}
        imageDescription={product.description}
        specs={product.specs}
      />
    </div>
  );
}
