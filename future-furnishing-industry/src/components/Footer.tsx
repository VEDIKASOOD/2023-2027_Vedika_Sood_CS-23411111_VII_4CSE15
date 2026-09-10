import React from 'react';
import { Layers, Download, Phone, Mail, MapPin, ShieldCheck, Award, Facebook, Instagram } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  setCurrentPage: (page: string) => void;
  themeMode: 'industrial' | 'luxury';
  onDownloadCatalog: (catalogName: string) => void;
}

export default function Footer({ setCurrentPage, themeMode, onDownloadCatalog }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-editorial-blue text-stone-300 border-t border-gray-200 text-left">
      {/* Upper Footer section with catalogue download and highlights */}
      <div className="py-12 border-b border-white/10 bg-slate-950/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div>
            <div className="flex items-center space-x-2 text-white mb-2">
              <Award className="text-editorial-orange" size={20} />
              <h3 className="text-base font-black uppercase tracking-tight">Global Quality Assurance</h3>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed font-serif italic">
              Supporting international trade with ISTA 1A, 3A, and 6A packaging standards. Shipped safely to the USA and European Union.
            </p>
          </div>

          <div className="lg:col-span-2 flex flex-col sm:flex-row gap-4 justify-end">
            <button
              onClick={() => onDownloadCatalog('The Home Collection - Luxury Furniture & Decor')}
              className="px-5 py-3 text-[10px] font-bold tracking-widest uppercase bg-editorial-orange hover:bg-white hover:text-editorial-blue text-white transition-colors flex items-center justify-center space-x-2"
            >
              <Download size={14} />
              <span>Download Home Collection Portfolio</span>
            </button>
            <button
              onClick={() => onDownloadCatalog('Industrial Finishing & Advanced Coating Solutions')}
              className="px-5 py-3 text-[10px] font-bold tracking-widest uppercase bg-white/10 hover:bg-editorial-orange text-white border border-white/10 hover:border-editorial-orange transition-colors flex items-center justify-center space-x-2"
            >
              <Download size={14} />
              <span>Download Machinery Catalogue</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer link categories */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand & Mission */}
        <div className="space-y-4">
          <Logo size="md" layout="horizontal" theme="dark" />
          <p className="text-xs leading-relaxed text-gray-400 font-serif italic">
            An industry leader operating a 20,000 SQFT high-precision factory, specializing in heavy-duty Powder Coating Machines, premium thermosetting Powder Coating Powder, and contract furniture manufacturing.
          </p>
      <div className="flex items-center space-x-1.5 text-xs text-emerald-400 font-mono">
            <ShieldCheck size={14} />
            <span>ISO 9001:2015 Certified Plant</span>
          </div>
                   <div className="flex items-center space-x-4 pt-3">
            
              <a href="https://www.facebook.com/share/1CNobaMFuC/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              className="w-11 h-11 flex items-center justify-center bg-white/10 hover:bg-[#1877F2] text-white transition-all border border-white/20 hover:border-[#1877F2] hover:scale-110 rounded-full"
            >
              <Facebook size={20} />
            </a>
            
             <a  href="https://www.instagram.com/future_furnishing_indutry"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="w-11 h-11 flex items-center justify-center bg-white/10 hover:bg-gradient-to-tr hover:from-[#FEDA75] hover:via-[#D62976] hover:to-[#4F5BD5] text-white transition-all border border-white/20 hover:border-transparent hover:scale-110 rounded-full"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Divisions Quick Navigation */}
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-widest text-white mb-6 border-b border-white/10 pb-2">Business Units</h4>
          <ul className="space-y-3.5 text-xs">
            <li>
              <button 
                onClick={() => { setCurrentPage('finishing'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                className="hover:text-editorial-orange transition-colors text-left"
              >
                Powder Coating Machines
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setCurrentPage('coating'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                className="hover:text-editorial-orange transition-colors text-left"
              >
                Powder Coating Powder
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setCurrentPage('homecollection'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                className="hover:text-editorial-orange transition-colors text-left"
              >
                Furniture Manufacturing
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setCurrentPage('company'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                className="hover:text-editorial-orange transition-colors text-left"
              >
                Manufacturing Infrastructure
              </button>
            </li>
          </ul>
        </div>

        {/* Links & Inquiries */}
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-widest text-white mb-6 border-b border-white/10 pb-2">B2B Trade Portal</h4>
          <ul className="space-y-3.5 text-xs">
            <li>
              <button 
                onClick={() => { setCurrentPage('inquiry'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                className="hover:text-editorial-orange transition-colors text-left"
              >
                Request Product Quotation
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setCurrentPage('inquiry'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                className="hover:text-editorial-orange transition-colors text-left"
              >
                Registered Dealer Program
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setCurrentPage('inquiry'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                className="hover:text-editorial-orange transition-colors text-left"
              >
                Join Our Team (Careers)
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setCurrentPage('company'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                className="hover:text-editorial-orange transition-colors text-left"
              >
                Export Credentials
              </button>
            </li>
          </ul>
        </div>

       {/* Corporate Address & Contacts */}
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-widest text-white mb-6 border-b border-white/10 pb-2">Corporate Office</h4>
          <ul className="space-y-4 text-xs">
            <li className="flex items-start space-x-2.5">
              <MapPin size={16} className="text-editorial-orange shrink-0 mt-0.5" />
              <span>
                D-329, Sector 63, Noida, Uttar Pradesh - 201301, India
              </span>
            </li>
            <li className="flex items-center space-x-2.5">
              <Phone size={14} className="text-editorial-orange shrink-0" />
              <a href="tel:+911204938501" className="hover:text-editorial-orange transition-colors">+91 120-4938501</a>
            </li>
            <li className="flex items-center space-x-2.5">
              <Phone size={14} className="text-editorial-orange shrink-0" />
              <a href="tel:+917065112886" className="hover:text-editorial-orange transition-colors">+91 70651 12886</a>
            </li>
            <li className="flex items-center space-x-2.5">
              <Phone size={14} className="text-editorial-orange shrink-0" />
              <a href="tel:+917428733752" className="hover:text-editorial-orange transition-colors">+91 74287 33752</a>
            </li>
            <li className="flex items-center space-x-2.5">
              <Mail size={14} className="text-editorial-orange shrink-0" />
              <a href="mailto:info@futurefurnishingindustry.com" className="hover:text-editorial-orange transition-colors">info@futurefurnishingindustry.com</a>
            </li>
          </ul>
        </div>
           </div>

      {/* Trademark and Credits */}
      <div className="py-6 px-6 md:px-12 text-center text-[10px] bg-slate-950 border-t border-white/10 uppercase tracking-widest font-bold">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400">
          <div>© {currentYear} Future Furnishing Industry Private Limited</div>
          <div className="flex gap-6">
            <span>Trust: ISTA 6A Standards</span>
            <span>Production: 25 Containers / Month</span>
            <button 
              onClick={() => { setCurrentPage('inquiry'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
              className="text-white hover:text-editorial-orange transition-colors uppercase tracking-widest font-bold"
            >
              Dealer Portal →
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
