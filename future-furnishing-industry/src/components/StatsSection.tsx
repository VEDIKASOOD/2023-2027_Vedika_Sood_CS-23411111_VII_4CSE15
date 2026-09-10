import React from 'react';
import { Box, Factory, Globe, Cpu, ShieldCheck, Layers, Award } from 'lucide-react';
import { MANUFACTURING_STATS } from '../data';

interface StatsSectionProps {
  themeMode: 'industrial' | 'luxury';
}

export default function StatsSection({ themeMode }: StatsSectionProps) {
  return (
    <div className="space-y-16">
      {/* Visual Banners / Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <Factory size={22} className="text-editorial-orange" />,
            value: MANUFACTURING_STATS.factoryArea,
            label: 'Production Facility',
            desc: 'Self-owned factory plant area in IMT Manesar'
          },
          {
            icon: <Globe size={22} className="text-editorial-orange" />,
            value: MANUFACTURING_STATS.shippingCapacity,
            label: 'Monthly Shipping Volume',
            desc: `Shipped regularly to USA and EU markets`
          },
          {
            icon: <Cpu size={22} className="text-editorial-orange" />,
            value: MANUFACTURING_STATS.maxShippingCapacity,
            label: 'Peak Idle Capacity',
            desc: 'Capable of handling rapid wholesale scaleups'
          },
          {
            icon: <ShieldCheck size={22} className="text-editorial-orange" />,
            value: 'ISO 9001:2015',
            label: 'Quality Standard',
            desc: 'Strict quality control on metal, welding & plating'
          }
        ].map((stat, idx) => (
          <div 
            key={idx} 
            className="bg-white border border-gray-200 p-6 flex flex-col justify-between hover:border-editorial-orange transition-colors"
          >
            <div className="space-y-4">
              <div className="p-3 bg-gray-50 border border-gray-200 inline-block">
                {stat.icon}
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-black text-editorial-blue tracking-tight font-sans">{stat.value}</h3>
                <p className="text-[10px] uppercase tracking-wider font-bold text-stone-600 mt-1">{stat.label}</p>
              </div>
            </div>
            <p className="text-xs text-stone-500 font-serif italic mt-4 border-t border-gray-100 pt-3 leading-relaxed text-left">
              {stat.desc}
            </p>
          </div>
        ))}
      </div>

      {/* In-House Manufacturing Capabilities and Machinery */}
      <div className="bg-white border border-gray-200 p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 space-y-5 text-left">
          <div className="inline-block bg-editorial-blue text-white px-3 py-1 text-[9px] uppercase font-black tracking-widest">
            Heavy Machinery Suites
          </div>
          <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-editorial-blue leading-tight">
            Precision Machining, <br />
            <span className="font-black italic">Spot-Welding & Finishing</span>
          </h3>
          <p className="text-xs text-stone-500 leading-relaxed font-serif italic">
            As a heavy industrial manufacturer, Future Furnishing Industry is fully integrated. We do not farm out key structural stages. From processing raw wire meshes to complex laser profile carving, bending, rockwool insulation filling, and multi-vat electroplating, our engineering bays control the absolute outcome.
          </p>

          <div className="p-5 bg-gray-50 border border-gray-200 space-y-2.5">
            <h4 className="text-[10px] font-bold text-editorial-orange uppercase tracking-widest">Export Presence:</h4>
            <p className="text-xs text-stone-700 leading-relaxed font-serif italic">
              Our sales channels ship regularly to volume buyers, hardware dealers, and design collectives in the **United States of America** and the **European Union**.
            </p>
          </div>
        </div>

        {/* Machinery List */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {MANUFACTURING_STATS.inhouseMachinery.map((mach, idx) => (
            <div key={idx} className="bg-gray-50 p-4 border border-gray-200 flex flex-col justify-between hover:bg-white hover:border-editorial-orange transition-all text-left">
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <h4 className="text-xs font-black uppercase tracking-tight text-editorial-blue">{mach.name}</h4>
                  <span className="px-2 py-0.5 text-[9px] font-mono font-bold uppercase bg-editorial-orange text-white">
                    {mach.qty}
                  </span>
                </div>
                <p className="text-[11px] text-stone-500 leading-relaxed">{mach.use}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ISTA Packaging Security Standards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
        <div className="lg:col-span-4 text-left space-y-4">
          <div className="inline-block bg-editorial-orange text-white px-3 py-1 text-[9px] uppercase font-black tracking-widest">
            Shipment Safety
          </div>
          <h3 className="text-2xl font-light tracking-tight text-editorial-blue">
            Drop-Ship Certified <span className="font-black italic block">Standards</span>
          </h3>
          <p className="text-xs text-stone-500 leading-relaxed font-serif italic">
            International furniture and machinery shipping require absolute padding security. We build customized export crating and pre-test packages to comply with Amazon-grade and retail standard dropship guidelines.
          </p>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {MANUFACTURING_STATS.packagingStandards.map((std, idx) => (
            <div key={idx} className="bg-white border border-gray-200 p-5 space-y-3 hover:border-editorial-orange transition-colors text-left">
              <span className="w-10 h-10 bg-editorial-blue flex items-center justify-center text-xs font-bold font-mono text-white">
                {std.code}
              </span>
              <div>
                <h4 className="text-xs font-black uppercase text-editorial-blue tracking-tight">{std.name}</h4>
                <p className="text-[11px] text-stone-500 leading-relaxed mt-1">{std.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global Client Portfolio Logo Slider */}
      <div className="bg-gray-50 border border-gray-200 p-8 text-center space-y-6">
        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-editorial-gray">
          Supplying Volume Catalogs & Metal Parts to Global Brands
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {MANUFACTURING_STATS.globalClients.map((client) => (
            <div key={client} className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-editorial-orange"></span>
              <span className="text-xs font-black tracking-widest text-editorial-blue uppercase">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
