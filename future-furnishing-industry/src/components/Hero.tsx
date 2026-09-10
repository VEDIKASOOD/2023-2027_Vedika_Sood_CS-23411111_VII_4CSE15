import React from 'react';
import { Compass, Factory, ArrowRight, Download, Layers } from 'lucide-react';

interface HeroProps {
  themeMode: 'industrial' | 'luxury';
  setThemeMode: (mode: 'industrial' | 'luxury') => void;
  setCurrentPage: (page: string) => void;
  onDownloadCatalog: (catalogName: string) => void;
}

export default function Hero({ themeMode, setThemeMode, setCurrentPage, onDownloadCatalog }: HeroProps) {
  return (
    <div className="bg-editorial-bg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Editorial Copy */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
          <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-editorial-gray">
            Manufacturing Excellence Since 2010
          </span>

          {themeMode === 'industrial' ? (
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.0] tracking-tighter text-editorial-blue">
              Engineering <span className="font-black block italic text-editorial-orange">The Future of Industry.</span>
            </h1>
          ) : (
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.0] tracking-tighter text-editorial-blue">
              Crafting <span className="font-black block italic text-editorial-orange">Bespoke Modern Luxury.</span>
            </h1>
          )}

          {themeMode === 'industrial' ? (
            <p className="text-base sm:text-lg text-stone-600 max-w-xl leading-relaxed font-serif italic">
              Heavy-duty manual & automatic powder coating booths, forced air curing ovens, and automated reciprocators built for precision high-capacity paint lines.
            </p>
          ) : (
            <p className="text-base sm:text-lg text-stone-600 max-w-xl leading-relaxed font-serif italic">
              Exclusive stainless steel nesting tables, marble-top dining consoles, and elegant chair series coated in flawless Gold/Rose Gold PVD mirror finishes.
            </p>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            {themeMode === 'industrial' ? (
              <>
                <button
                  onClick={() => { setCurrentPage('finishing'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="px-6 py-3 bg-editorial-blue hover:bg-editorial-orange text-white font-bold uppercase text-[11px] tracking-widest transition-colors shadow-sm"
                >
                  Explore Machinery
                </button>
                 <button
                  onClick={() => onDownloadCatalog('Powder Coating Machines')}
                  className="px-6 py-3 border border-gray-300 hover:border-editorial-orange hover:text-editorial-orange text-stone-800 font-bold uppercase text-[11px] tracking-widest transition-colors flex items-center gap-2"
                >
                  <Download size={14} />
                  <span>Download Catalog</span>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => { setCurrentPage('homecollection'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="px-6 py-3 bg-editorial-orange hover:bg-editorial-blue text-white font-bold uppercase text-[11px] tracking-widest transition-colors shadow-sm"
                >
                  View Collection
                </button>
                <button
                  onClick={() => onDownloadCatalog('Furniture Manufacturing')}
                  className="px-6 py-3 border border-gray-300 hover:border-editorial-orange hover:text-editorial-orange text-stone-800 font-bold uppercase text-[11px] tracking-widest transition-colors flex items-center gap-2"
                >
                  <Download size={14} />
                  <span>Download Catalog</span>
                </button>
              </>
            )}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
            <div className="flex flex-col">
              <span className="text-3xl font-black text-editorial-blue">20k</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-editorial-gray">SQFT Facility</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black text-editorial-blue">32+</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-editorial-gray">Container Cap</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black text-editorial-blue">USA/EU</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-editorial-gray">B2B Footprint</span>
            </div>
          </div>
        </div>

        {/* Right Column: Featured Visual */}
        <div className="lg:col-span-5 h-[460px] bg-editorial-blue text-white relative flex flex-col justify-end p-8 md:p-12 overflow-hidden shadow-xl border border-gray-200">
          {/* Background image based on mode */}
          <div className="absolute inset-0 z-0">
            {themeMode === 'industrial' ? (
              <img 
                src="/images/product_with_logo/machine-1.jpeg"
                alt="Industrial finishing preview" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-80 scale-105 hover:scale-100 transition-transform duration-700"
              />
            ) : (
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800" 
                alt="Luxury design preview" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-60 scale-105 hover:scale-100 transition-transform duration-700"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-editorial-blue via-editorial-blue/40 to-transparent"></div>
          </div>

          <div className="relative z-10 space-y-4">
            <span className="inline-block px-3 py-1 bg-editorial-orange text-white text-[9px] uppercase font-black tracking-widest">
              Featured Division
            </span>

            {themeMode === 'industrial' ? (
              <>
                <h3 className="text-3xl font-light mb-2">
                  Coating <br />
                  <span className="font-black italic">Systems</span>
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed max-w-xs">
                  Automated powder spray systems, thermal baking systems, and fast color-change cyclones tailored for elite high-yield manufacturing plants.
                </p>
              </>
            ) : (
              <>
                <h3 className="text-3xl font-light mb-2">
                  PVD Gold <br />
                  <span className="font-black italic">Dining Series</span>
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed max-w-xs">
                  High-profile Nesting consoles and luxurious marble series styled with Grade-304 mirror polished anti-fingerprint PVD gold.
                </p>
              </>
            )}

            {/* Quick Toggle Inside Image Card */}
            <div className="pt-4 border-t border-white/10 flex justify-between items-center">
              <span className="text-[10px] uppercase tracking-wider text-gray-300">Select Division:</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setThemeMode('industrial')}
                  className={`px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider transition-colors ${
                    themeMode === 'industrial'
                      ? 'bg-editorial-orange text-white'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Industrial
                </button>
                <button
                  onClick={() => setThemeMode('luxury')}
                  className={`px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider transition-colors ${
                    themeMode === 'luxury'
                      ? 'bg-editorial-orange text-white'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Luxury Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
