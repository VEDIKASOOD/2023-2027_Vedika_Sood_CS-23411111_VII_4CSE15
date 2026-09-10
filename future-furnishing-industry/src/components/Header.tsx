import React, { useState, useEffect } from 'react';
import { ShieldCheck, Mail, Phone, Factory, ShoppingBag, Menu, X, Layers, Compass } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  themeMode: 'industrial' | 'luxury';
  setThemeMode: (mode: 'industrial' | 'luxury') => void;
  inquiryBagCount: number;
  setIsInquiryBagOpen: (open: boolean) => void;
}

export default function Header({
  currentPage,
  setCurrentPage,
  themeMode,
  setThemeMode,
  inquiryBagCount,
  setIsInquiryBagOpen,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'company', label: 'Company' },
    { id: 'finishing', label: 'Powder Coating Machines' },
    { id: 'coating', label: 'Powder Coating Powder' },
    { id: 'homecollection', label: 'Furniture Manufacturing' },
    { id: 'inquiry', label: 'Inquiry & Careers' },
  ];

  return (
    <header className="w-full z-50">
      {/* Top bar with quick contact and theme toggle */}
      <div className={`w-full text-xs transition-colors duration-300 py-2 px-4 md:px-8 flex justify-between items-center ${
        themeMode === 'industrial' 
          ? 'bg-slate-900 text-slate-300 border-b border-slate-800' 
          : 'bg-stone-900 text-stone-300 border-b border-stone-800'
      }`}>
        <div className="flex items-center space-x-6">
          <a href="tel:+911204938501" className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
          <Phone size={13} />
          <span>+91 120-4938501 (B2B Sales)</span>
        </a>
        <a href="tel:+917065112886" className="hover:text-amber-400 transition-colors flex items-center space-x-1.5 hidden sm:flex">
  <Phone size={13} />
  <span>+91 70651 12886</span>
</a>
<a href="tel:+917428733752" className="hover:text-amber-400 transition-colors flex items-center space-x-1.5 hidden lg:flex">
  <Phone size={13} />
  <span>+91 74287 33752</span>
</a>
            <a href="mailto:info@futurefurnishingindustry.com" className="hover:text-amber-400 transition-colors flex items-center space-x-1.5 hidden sm:flex">
          <Mail size={13} />
          <span>info@futurefurnishingindustry.com</span>
        </a>
          <span className="text-slate-400 hidden lg:inline flex items-center space-x-1">
            <ShieldCheck size={13} className="text-emerald-400 inline" />
            <span>ISTA 1A/3A/6A Drop-Ship Certified Packaging</span>
          </span>
        </div>

        <div className="flex items-center space-x-4">
          {currentPage === 'home' && (
            <>
          <span className="text-stone-400 font-medium hidden xs:inline">Select Business Division:</span>
          <div className="inline-flex rounded-full bg-slate-800/80 p-0.5 border border-slate-700">
            <button
              onClick={() => setThemeMode('industrial')}
              className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 flex items-center space-x-1 ${
                themeMode === 'industrial'
                  ? 'bg-slate-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Factory size={11} />
              <span>Industrial</span>
            </button>
            <button
              onClick={() => setThemeMode('luxury')}
              className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 flex items-center space-x-1 ${
                themeMode === 'luxury'
                  ? 'bg-amber-500 text-stone-950 shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Compass size={11} />
              <span>Luxury Home</span>
            </button>
          </div>
          </>
          )}
        </div>
      </div>

      {/* Main navigation header */}
      <nav className={`w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md py-3 shadow-md' 
          : 'bg-white py-4'
      } border-b border-gray-200 px-6 md:px-12 flex justify-between items-center`}>
        {/* Logo and Brand */}
        <div 
          onClick={() => setCurrentPage('home')} 
          className="flex items-center cursor-pointer group text-left"
        >
          <Logo size="md" layout="horizontal" theme="light" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            if (item.id === 'inquiry') {
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`px-4 py-2 transition-colors duration-200 font-bold uppercase ${
                    isActive
                      ? 'bg-editorial-orange text-white'
                      : 'bg-editorial-blue text-white hover:bg-editorial-orange'
                  }`}
                >
                  Inquiry
                </button>
              );
            }
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`transition-colors duration-200 ${
                  isActive
                    ? 'text-editorial-orange font-black'
                    : 'text-stone-600 hover:text-editorial-orange'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Action Buttons: Shopping Cart & Mobile Hamburger */}
        <div className="flex items-center space-x-4">
                 <button
            onClick={() => setIsInquiryBagOpen(true)}
            className="relative p-2.5 rounded-full hover:bg-stone-100 transition-colors text-stone-700 group"
            title="Open B2B Shopping Cart"
            id="inquiry-bag-btn"
          >
            <ShoppingBag size={21} className="group-hover:scale-105 transition-transform text-editorial-blue" />
            {inquiryBagCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 text-[11px] font-bold rounded-full flex items-center justify-center text-white animate-bounce shadow-md bg-editorial-orange">
                {inquiryBagCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-100 transition-colors"
          >
            {isMobileMenuOpen ? <X size={22} className="text-editorial-blue" /> : <Menu size={22} className="text-editorial-blue" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden w-full bg-white border-b border-slate-200 shadow-xl absolute left-0 z-40 transition-all duration-300">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? themeMode === 'industrial'
                        ? 'bg-slate-100 text-slate-900 border-l-4 border-slate-700'
                        : 'bg-amber-50 text-amber-900 border-l-4 border-amber-500'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
