import React, { useState } from 'react';
import { X, Trash2, Send, ShoppingBag, Building, CheckCircle, Package } from 'lucide-react';
import { Product } from '../types';

interface InquiryBagProps {
  isOpen: boolean;
  onClose: () => void;
  bagItems: Product[];
  onRemoveItem: (id: string) => void;
  onClearBag: () => void;
  themeMode: 'industrial' | 'luxury';
}

export default function InquiryBag({
  isOpen,
  onClose,
  bagItems,
  onRemoveItem,
  onClearBag,
  themeMode,
}: InquiryBagProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bagItems.length === 0) return;

    const id = 'INQ-' + Math.floor(100000 + Math.random() * 900000);
    const newInquiry = {
      id,
      ...formData,
      items: bagItems.map(item => ({
        id: item.id,
        name: item.name,
        category: item.category,
        code: item.code || 'N/A'
      })),
      timestamp: new Date().toISOString(),
    };

    // Store in localStorage
    const existing = JSON.parse(localStorage.getItem('future_furnishing_inquiries') || '[]');
    existing.push(newInquiry);
    localStorage.setItem('future_furnishing_inquiries', JSON.stringify(existing));

    setInquiryId(id);
    setSubmitted(true);

    // Trigger standard browser dispatch or clean
    setTimeout(() => {
      onClearBag();
    }, 100);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div className="absolute inset-0 overflow-hidden">
        {/* Backdrop */}
        <div 
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300"
        ></div>

        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          <div className="pointer-events-auto w-screen max-w-lg">
            <div className="flex h-full flex-col bg-white shadow-2xl border-l border-gray-200">
              {/* Header */}
              <div className="px-6 py-5 flex items-center justify-between bg-editorial-blue text-white border-b border-gray-200">
                <div className="flex items-center space-x-2.5">
                  <ShoppingBag size={18} className="text-editorial-orange" />
                  <h2 className="text-sm font-black uppercase tracking-widest" id="slide-over-title">
                    B2B Shopping Cart & RFQ
                  </h2>
                </div>
                <button 
                  onClick={onClose}
                  className="text-stone-400 hover:text-white transition-colors p-1"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto p-6">
                {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center px-4">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 border border-emerald-200">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-xl font-light tracking-tight text-editorial-blue mb-2">Inquiry Lodged <span className="font-black italic">Successfully</span></h3>
                    <p className="text-xs text-stone-500 max-w-xs mb-4">
                      Thank you. Your corporate RFQ has been logged with ID <span className="font-mono font-bold text-editorial-orange">{inquiryId}</span>.
                    </p>
                    <p className="text-xs text-stone-400 mb-8 leading-relaxed font-serif italic">
                      Our commercial team, supervised by Amit Tyagi, will contact you within 4 business hours to supply pricing, technical specs, and customized shipping terms.
                    </p>
                    <button
                      onClick={handleReset}
                      className="px-6 py-3 bg-editorial-blue hover:bg-editorial-orange text-white font-bold uppercase text-[10px] tracking-widest transition-colors"
                    >
                      Close Cart Drawer
                    </button>
                  </div>
                ) : (
                  <div>
                    {/* Selected Products list */}
                    <div className="mb-8">
                      <h3 className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-4 flex items-center justify-between">
                        <span>Items in Cart ({bagItems.length})</span>
                        {bagItems.length > 0 && (
                          <button 
                            onClick={onClearBag} 
                            className="text-red-600 hover:text-red-700 font-bold uppercase tracking-wider text-[9px] flex items-center space-x-1"
                          >
                            <Trash2 size={11} />
                            <span>Clear All</span>
                          </button>
                        )}
                      </h3>

                      {bagItems.length === 0 ? (
                        <div className="border border-dashed border-gray-200 p-8 text-center bg-gray-50/50">
                          <Package className="mx-auto text-stone-300 mb-2.5" size={28} />
                          <p className="text-xs text-stone-500 leading-relaxed font-serif italic max-w-[240px] mx-auto">
                            Your shopping cart is empty. Browse machines, color shades, or custom luxury furniture to add items.
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
                          {bagItems.map((item) => (
                            <div key={item.id} className="flex items-center justify-between bg-gray-50 p-3 border border-gray-200 hover:border-editorial-orange transition-colors">
                              <div className="flex items-center space-x-3 min-w-0">
                                <img 
                                  src={item.image} 
                                  alt={item.name} 
                                  referrerPolicy="no-referrer"
                                  className="w-10 h-10 object-cover bg-gray-100 border border-gray-200" 
                                />
                                <div className="min-w-0 text-left">
                                  <h4 className="text-xs font-bold text-stone-900 truncate">{item.name}</h4>
                                  <p className="text-[9px] text-stone-500 font-mono flex items-center space-x-1">
                                    <span className="truncate">{item.category}</span>
                                    {item.code && (
                                      <>
                                        <span className="text-stone-300">•</span>
                                        <span className="bg-editorial-orange text-white px-1 font-bold">{item.code}</span>
                                      </>
                                    )}
                                  </p>
                                </div>
                              </div>
                              <button 
                                onClick={() => onRemoveItem(item.id)}
                                className="text-stone-400 hover:text-red-600 p-1.5 transition-colors"
                              >
                                <Trash2 size={13} />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Inquiry Form */}
                    {bagItems.length > 0 && (
                      <form onSubmit={handleSubmit} className="border-t border-gray-200 pt-6 space-y-4 text-left">
                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">Corporate Credentials</h3>
                        
                        <div>
                          <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-1.5">Company / Firm Name *</label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-stone-400">
                              <Building size={14} />
                            </span>
                            <input
                              type="text"
                              required
                              value={formData.company}
                              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                              placeholder="e.g. Oliver Home Decor Ltd"
                              className="w-full text-xs pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-editorial-orange focus:outline-none transition-colors"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-1.5">Your Name *</label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="Contact person"
                              className="w-full text-xs px-3.5 py-2.5 bg-gray-50 border border-gray-200 focus:border-editorial-orange focus:outline-none transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-1.5">Phone Number *</label>
                            <input
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="+91 XXXXX XXXXX"
                              className="w-full text-xs px-3.5 py-2.5 bg-gray-50 border border-gray-200 focus:border-editorial-orange focus:outline-none transition-colors"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-1.5">Official Email *</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="buyer@company.com"
                            className="w-full text-xs px-3.5 py-2.5 bg-gray-50 border border-gray-200 focus:border-editorial-orange focus:outline-none transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-1.5">Specifications / Inquiry Message</label>
                          <textarea
                            rows={3}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Specify custom size requirements, delivery destination, container volume, or required color volume in kg..."
                            className="w-full text-xs px-3.5 py-2.5 bg-gray-50 border border-gray-200 focus:border-editorial-orange focus:outline-none transition-colors resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full py-3.5 mt-2 bg-editorial-blue hover:bg-editorial-orange text-white font-bold uppercase text-[10px] tracking-widest transition-colors flex items-center justify-center space-x-2"
                        >
                          <Send size={12} />
                          <span>Submit Multi-Product Inquiry</span>
                        </button>
                      </form>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
