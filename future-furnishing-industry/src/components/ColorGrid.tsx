import React, { useState } from 'react';
import { Product } from '../types';
import { Search, Check, Plus, RefreshCw, Layers, Maximize } from 'lucide-react';
import ImageZoomModal from './ImageZoomModal';

interface ColorGridProps {
  products: Product[];
  onAddToBag: (product: Product) => void;
  bagItemIds: string[];
  themeMode: 'industrial' | 'luxury';
}

export default function ColorGrid({
  products,
  onAddToBag,
  bagItemIds,
  themeMode,
}: ColorGridProps) {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedShade, setSelectedShade] = useState<any | null>(null);

  const shadesList = [
    // === ANTIQUES ===
    {
      id: 'shade-antique-01',
      name: 'Red',
      code: 'HKT 0315',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Antiques',
      description: 'Elegant textured red antique finish with heavy gold relief veins. Provides high-durability and corrosion resistance.',
      colorClass: 'from-[#B22222] via-[#5C1111] to-[#B22222]',
      textureType: 'Veined / Textured Relief',
      gloss: 'Textured Satin',
      curing: '180°C for 10-12 Mins',
      image: '/images/finish_swatches/antiques_Red_HKT0315.png',
      specs: { 'Pencil Hardness': '2H-3H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-antique-02',
      name: 'Copper A',
      code: 'HKT 0345',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Antiques',
      description: 'Classic copper-vein relief pattern. Outstanding scratch resistance, suitable for high-end architectural hardware.',
      colorClass: 'from-[#8C3A23] via-[#4A1D11] to-[#8C3A23]',
      textureType: 'Veined / Textured Relief',
      gloss: 'Low Gloss Matt',
      curing: '180°C for 10-12 Mins',
      image: '/images/finish_swatches/antiques_Copper-A_HKT0345.png',
      specs: { 'Pencil Hardness': '3H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-antique-03',
      name: 'Gold',
      code: 'HKT 0301',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Antiques',
      description: 'Splendid golden metallic-veined texture. Delivers a luxurious historical and heavy-duty protective coat.',
      colorClass: 'from-[#9A7B43] via-[#1A1405] to-[#9A7B43]',
      textureType: 'High Metallic Vein',
      gloss: 'Textured Satin',
      curing: '180°C for 15 Mins',
      image: '/images/finish_swatches/antiques_Gold_HKT0301.png',
      specs: { 'Pencil Hardness': '2H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-antique-04',
      name: 'Copper S',
      code: 'HKT 0314',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Antiques',
      description: 'Sophisticated dark-bronze copper vein finish. Features dense patterns of darker copper-veined networks.',
      colorClass: 'from-[#603813] via-[#2F1F17] to-[#603813]',
      textureType: 'Veined / Textured Relief',
      gloss: 'Low Gloss Matt',
      curing: '180°C for 10-12 Mins',
      image: '/images/finish_swatches/antiques_Copper-S_HKT0314.png',
      specs: { 'Pencil Hardness': '2H-3H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-antique-05',
      name: 'Silver',
      code: 'HKT 0302',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Antiques',
      description: 'Refined silver vein, replicating historic pewter and cast iron. Highly resilient to weathering environments.',
      colorClass: 'from-[#B0B3B5] via-[#2F3132] to-[#B0B3B5]',
      textureType: 'Pewter Hammered Vein',
      gloss: 'Textured Satin',
      curing: '180°C for 10 Mins',
      image: '/images/finish_swatches/antiques_Silver_HKT0302.png',
      specs: { 'Pencil Hardness': '3H', 'Salt Spray Resistance': '1000 Hours' }
    },

    // === METALLICS ===
    {
      id: 'shade-metallic-01',
      name: 'Golden Pink',
      code: 'HNS 0316',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Metallics',
      description: 'Delicate, premium rose-pink metallic luster. Perfect for architectural design and custom luxury fittings.',
      colorClass: 'from-[#D8A191] via-[#E9C7BE] to-[#D8A191]',
      textureType: 'Smooth Metallic Sparkle',
      gloss: 'Satin Gloss',
      curing: '190°C for 10 Mins',
      image: '/images/finish_swatches/metallics_Golden-Pink_HNS0316.png',
      specs: { 'Pencil Hardness': '2H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-metallic-02',
      name: 'Rusty Brown',
      code: 'HNS 0272',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Metallics',
      description: 'Earthy metallic rust brown containing sparkling golden-orange flakes. Fits modern industrial facades.',
      colorClass: 'from-[#7B4B3a] via-[#4A251B] to-[#7B4B3a]',
      textureType: 'Textured Metallic Sparkle',
      gloss: 'Matt Textured',
      curing: '180°C for 12 Mins',
      image: '/images/finish_swatches/metallics_Rusty-Brown_HNS0272.png',
      specs: { 'Pencil Hardness': '2H-3H', 'Salt Spray Resistance': '1200 Hours' }
    },
    {
      id: 'shade-metallic-03',
      name: 'Gold LM',
      code: 'HNS 0245',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Metallics',
      description: 'Classic smooth metallic pale gold finish. Outstanding UV resistance and high chemical durability.',
      colorClass: 'from-[#C5A059] via-[#E8D09E] to-[#C5A059]',
      textureType: 'Smooth Metallic Sparkle',
      gloss: 'Semi-Gloss',
      curing: '190°C for 12 Mins',
      image: '/images/finish_swatches/metallics_Gold-LM_HNS0245.png',
      specs: { 'Pencil Hardness': 'H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-metallic-04',
      name: 'Bright Gold',
      code: 'HNS 0236',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Metallics',
      description: 'Highly vibrant royal gold finish with sparkling micro-flakes. Outstanding for profiles and screens.',
      colorClass: 'from-[#DAA520] via-[#FCE082] to-[#B8860B]',
      textureType: 'Smooth Bright Metallic',
      gloss: 'High Gloss',
      curing: '190°C for 10 Mins',
      image: '/images/finish_swatches/metallics_Bright-Gold_HNS0236.png',
      specs: { 'Pencil Hardness': 'H-2H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-metallic-05',
      name: 'Sparkle Silver',
      code: 'PNS 0301',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Metallics',
      description: 'Highly reflective brilliant pure aluminum flake metallic. Delivers maximum depth and gloss protection.',
      colorClass: 'from-[#E5E7EB] via-[#9CA3AF] to-[#FFFFFF]',
      textureType: 'Smooth Metallic Sparkle Flake',
      gloss: '85% High Gloss',
      curing: '190°C for 10 Mins',
      image: '/images/finish_swatches/metallics_Sparkle-Silver_PNS0301.png',
      specs: { 'Pencil Hardness': '2H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-metallic-06',
      name: 'Copper SC',
      code: 'HNS 0306',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Metallics',
      description: 'Fine-grained polished copper metallic coat, providing outstanding coverage and warmth.',
      colorClass: 'from-[#B87333] via-[#E3A87C] to-[#B87333]',
      textureType: 'Satin Metallic',
      gloss: 'Semi-Gloss',
      curing: '190°C for 12 Mins',
      image: '/images/finish_swatches/metallics_Copper-SC_HNS0306.png',
      specs: { 'Pencil Hardness': 'H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-metallic-07',
      name: 'Brass',
      code: 'HNS 0214',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Metallics',
      description: 'Superb warm brass metallic shade. Replicates classic polished brass metal alloy beautifully.',
      colorClass: 'from-[#b5a642] via-[#decb6a] to-[#a39331]',
      textureType: 'Smooth Metallic',
      gloss: 'Semi-Gloss',
      curing: '190°C for 10 Mins',
      image: '/images/finish_swatches/metallics_Brass_HNS0214.png',
      specs: { 'Pencil Hardness': '2H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-metallic-08',
      name: 'Black Sparkle',
      code: 'HNS 0904',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Metallics',
      description: 'Dazzling black paint base filled with heavy silver micro-sparkles, creating a classic star-field effect.',
      colorClass: 'from-[#111111] via-[#2F3132] to-[#111111]',
      textureType: 'Metallic Sparkle Flake',
      gloss: 'High Gloss',
      curing: '200°C for 10 Mins',
      image: '/images/finish_swatches/metallics_Black-Sparkle_HNS0904.png',
      specs: { 'Pencil Hardness': '2H', 'Salt Spray Resistance': '1000 Hours' }
    },

    // === MATT FINISH ===
    {
      id: 'shade-matt-01',
      name: 'Bright silver',
      code: 'VL 04',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Matt Finish',
      description: 'Sleek, low-gloss anodized-style matte silver. Professional, smooth coating for industrial design.',
      colorClass: 'from-[#CCCCCC] via-[#EAEAEA] to-[#BDBDBD]',
      textureType: 'Smooth Matt',
      gloss: '10% - 20% Matte',
      curing: '200°C for 10 Mins',
      image: '/images/finish_swatches/matt-finish_Bright-Silver_VL04.png',
      specs: { 'Pencil Hardness': '2H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-matt-02',
      name: 'Champagne Gold',
      code: 'VL 06',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Matt Finish',
      description: 'Ultra-sleek champagne gold shade. Simulates chemical anodized and premium PVD finishes perfectly.',
      colorClass: 'from-[#D4AF37] via-[#E6D290] to-[#CFB53B]',
      textureType: 'Smooth Semi-Matt',
      gloss: '15% - 25% Matte',
      curing: '200°C for 10 Mins',
      image: '/images/finish_swatches/matt-finish_Champagne-Gold_VL06.png',
      specs: { 'Pencil Hardness': 'H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-matt-03',
      name: 'Copper Metallic',
      code: 'VL 15',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Matt Finish',
      description: 'Warm copper-colored matte metallic coating. Delivers highly elegant, non-reflective warm glow.',
      colorClass: 'from-[#D2691E] via-[#E9967A] to-[#CD853F]',
      textureType: 'Smooth Matt Metallic',
      gloss: '10% - 20% Matte',
      curing: '200°C for 12 Mins',
      image: '/images/finish_swatches/matt-finish_Copper-Metallic_VL15.png',
      specs: { 'Pencil Hardness': 'H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-matt-04',
      name: 'Super Gold',
      code: 'VL 22',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Matt Finish',
      description: 'Highly radiant matte gold featuring a rich velvet micro-texture. Perfect for bespoke luxury setups.',
      colorClass: 'from-[#E5A93B] via-[#FAD375] to-[#D4931E]',
      textureType: 'Smooth Velvet Matt',
      gloss: 'Matte',
      curing: '200°C for 10 Mins',
      image: '/images/finish_swatches/matt-finish_Super-Gold_VL22.png',
      specs: { 'Pencil Hardness': 'H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-matt-05',
      name: 'Magic Gold',
      code: 'VL 24',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Matt Finish',
      description: 'Subtle soft golden-sand tone with smooth velvet finish. Highly resistant to physical scratches.',
      colorClass: 'from-[#E5C158] via-[#F7E298] to-[#CDA735]',
      textureType: 'Smooth Matt',
      gloss: 'Matt',
      curing: '200°C for 10 Mins',
      image: '/images/finish_swatches/matt-finish_Magic-Gold_VL24.png',
      specs: { 'Pencil Hardness': '2H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-matt-06',
      name: 'Black silver',
      code: 'VL 14',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Matt Finish',
      description: 'Premium dark charcoal gunmetal shade. Fingerprint and smudge resistant finish.',
      colorClass: 'from-[#2d2d2d] via-[#3f3f3f] to-[#1e1e1e]',
      textureType: 'Smooth Matte',
      gloss: '10% Matte',
      curing: '200°C for 10 Mins',
      image: '/images/finish_swatches/matt-finish_Black-Silver_VL14.png',
      specs: { 'Pencil Hardness': '2H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-matt-07',
      name: 'Rose metallic',
      code: 'VL 29',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Matt Finish',
      description: 'Delicate matte rose-gold metallic. Extremely soft color profile preferred by luxury boutique stores.',
      colorClass: 'from-[#B76E79] via-[#E8C3C8] to-[#C08081]',
      textureType: 'Smooth Suede Matte',
      gloss: '10% - 20% Matte',
      curing: '190°C for 12 Mins',
      image: '/images/finish_swatches/matt-finish_Rose-Metallic_VL29.png',
      specs: { 'Pencil Hardness': 'H', 'Salt Spray Resistance': '800 Hours' }
    },
    {
      id: 'shade-matt-08',
      name: 'S.S Finish',
      code: 'VL 32',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Matt Finish',
      description: 'Accurately mimics the brushed satin metallic surface of high-grade stainless steel.',
      colorClass: 'from-[#D1D5DB] via-[#9CA3AF] to-[#F3F4F6]',
      textureType: 'Smooth Matt Metallic',
      gloss: 'Semi-Gloss',
      curing: '200°C for 12 Mins',
      image: '/images/finish_swatches/matt-finish_SS-Finish_VL32.png',
      specs: { 'Pencil Hardness': '2H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-matt-09',
      name: 'Brush silver',
      code: 'VL 15',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Matt Finish',
      description: 'Premium low-gloss matte silver with elegant brush aesthetics. Perfect for industrial fittings.',
      colorClass: 'from-[#C0C0C0] via-[#E1E1E1] to-[#A9A9A9]',
      textureType: 'Smooth Matt',
      gloss: 'Matte',
      curing: '200°C for 10 Mins',
      image: '/images/finish_swatches/matt-finish_Brush-Silver_VL15.png',
      specs: { 'Pencil Hardness': '2H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-matt-10',
      name: 'Bright white',
      code: 'VL 08',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Matt Finish',
      description: 'Pure architectural white with highly resilient binders. Brings exceptional clean minimalist depth.',
      colorClass: 'from-[#FFFFFF] via-[#FAFAFA] to-[#F5F5F5]',
      textureType: 'Smooth Super-Matt',
      gloss: '5% - 15% Matte',
      curing: '190°C for 10 Mins',
      image: '/images/finish_swatches/matt-finish_Bright-White_VL08.png',
      specs: { 'Pencil Hardness': '2H', 'Salt Spray Resistance': '1000 Hours' }
    },

    // === MIX SHADES ===
    {
      id: 'shade-mix-01',
      name: 'Black',
      code: 'HG 9100',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Mix Shades',
      description: 'Deep high-gloss jet black with extreme mirror reflection. High impact and scratch resistance.',
      colorClass: 'from-[#000000] via-[#1A1A1A] to-[#000000]',
      textureType: 'High Gloss Smooth',
      gloss: '95% High Gloss',
      curing: '200°C for 10 Mins',
      image: '/images/finish_swatches/mix-shades_Black_HG9100.png',
      specs: { 'Pencil Hardness': '3H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-mix-02',
      name: 'Clear',
      code: 'HG 1130',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Mix Shades',
      description: 'Pure transparent glossy coating, engineered to protect base metal and add high chemical durability.',
      colorClass: 'from-[#E0F2FE]/40 via-white/30 to-[#E0F2FE]/20',
      textureType: 'High Gloss Transparent',
      gloss: '98% Ultra Gloss',
      curing: '180°C for 12 Mins',
      image: '/images/finish_swatches/mix-shades_Clear_HG1130.png',
      specs: { 'Pencil Hardness': '2H', 'Salt Spray Resistance': '1200 Hours' }
    },
    {
      id: 'shade-mix-03',
      name: 'Light brown',
      code: 'HGS 8304',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Mix Shades',
      description: 'Elegant glossy chocolate light brown. Offers uniform distribution and excellent impact resistance.',
      colorClass: 'from-[#8B5A2B] via-[#A0522D] to-[#5C2E0B]',
      textureType: 'Smooth Glossy',
      gloss: 'Glossy',
      curing: '190°C for 12 Mins',
      image: '/images/finish_swatches/mix-shades_Light-Brown_HGS8304.png',
      specs: { 'Pencil Hardness': '2H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-mix-04',
      name: 'Copper transparent',
      code: 'HKS 0309',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Mix Shades',
      description: 'Exquisite translucent copper gloss lacquer. Adds glowing amber depths over metallic frames.',
      colorClass: 'from-[#FF7F24] via-[#CD661D] to-[#8B4513]',
      textureType: 'Translucent Glossy',
      gloss: 'High Gloss',
      curing: '190°C for 12 Mins',
      image: '/images/finish_swatches/mix-shades_Copper-Transparent_HKS0309.png',
      specs: { 'Pencil Hardness': '2H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-mix-05',
      name: 'Milky white glossy',
      code: 'HGS 1339',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Mix Shades',
      description: 'Smooth ivory-milk porcelain glossy shade. Warm and resilient protective cover.',
      colorClass: 'from-[#FDFBF7] via-[#FFFDF9] to-[#F5F2EB]',
      textureType: 'Smooth Glossy',
      gloss: '90% Glossy',
      curing: '190°C for 12 Mins',
      image: '/images/finish_swatches/mix-shades_Milky-White-Glossy_HGS1339.png',
      specs: { 'Pencil Hardness': '2H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-mix-06',
      name: 'Candy Rose',
      code: 'HG 29',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Mix Shades',
      description: 'A glowing candy rose finish with deep gloss and spectacular wet-look reflections.',
      colorClass: 'from-[#FF6A6A] via-[#FF82AB] to-[#CD5555]',
      textureType: 'High Gloss Candy',
      gloss: 'High Gloss',
      curing: '190°C for 12 Mins',
      image: '/images/finish_swatches/mix-shades_Candy-Rose.png',
      specs: { 'Pencil Hardness': 'H', 'Salt Spray Resistance': '800 Hours' }
    },
    {
      id: 'shade-mix-07',
      name: 'Golden Mirror',
      code: 'HG 06',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Mix Shades',
      description: 'Reflective mirror gold finish simulating luxurious gold vacuum-plated PVD coatings.',
      colorClass: 'from-[#FFD700] via-[#FFF8DC] to-[#B8860B]',
      textureType: 'Super Reflective Mirror',
      gloss: 'Mirror Gloss',
      curing: '200°C for 15 Mins',
      image: '/images/finish_swatches/mix-shades_Golden-Mirror.png',
      specs: { 'Pencil Hardness': '2H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-mix-08',
      name: 'Silver Chrome',
      code: 'HG 04',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Mix Shades',
      description: 'Premium liquid silver chrome replica with intense reflectivity and ultra-smooth layer.',
      colorClass: 'from-[#E6E6E6] via-white to-[#CCCCCC]',
      textureType: 'Mirror Chrome',
      gloss: 'Mirror Gloss',
      curing: '190°C for 10 Mins',
      image: '/images/finish_swatches/mix-shades_Silver-Chrome.png',
      specs: { 'Pencil Hardness': 'H', 'Salt Spray Resistance': '1000 Hours' }
    },

    // === WOODEN SHADES ===
    {
      id: 'shade-wood-01',
      name: 'Chestnut',
      code: 'WS 101',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Wooden Shades',
      description: 'A warm reddish-brown wood grain pattern. Replicates natural chestnut logs with deep texture.',
      colorClass: 'from-[#8B4513] via-[#A0522D] to-[#5C2E0B]',
      textureType: 'Sublimation Wood Grain',
      gloss: 'Satin Matte',
      curing: '200°C for 15 Mins',
      image: '/images/finish_swatches/wooden-shades-1_Chestnut.png',
      specs: { 'Pencil Hardness': 'H-2H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-wood-02',
      name: 'Casuarina',
      code: 'WS 102',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Wooden Shades',
      description: 'Pleasant honey-yellow wood pattern representing Australian Casuarina wood texture.',
      colorClass: 'from-[#CD853F] via-[#DEB887] to-[#8B5A2B]',
      textureType: 'Sublimation Wood Grain',
      gloss: 'Satin Matte',
      curing: '200°C for 15 Mins',
      image: '/images/finish_swatches/wooden-shades-1_Casuarina.png',
      specs: { 'Pencil Hardness': '2H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-wood-03',
      name: 'Golden Oak',
      code: 'WS 914',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Wooden Shades',
      description: 'Bright golden honey oak grain detailing. Extremely high thermal and physical durability.',
      colorClass: 'from-[#CD853F] via-[#D2691E] to-[#8B4513]',
      textureType: 'Sublimation Wood Grain',
      gloss: 'Natural Wood Gloss',
      curing: '200°C for 15 Mins',
      image: '/images/finish_swatches/wooden-shades-1_Golden-Oak.png',
      specs: { 'Pencil Hardness': '2H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-wood-04',
      name: 'Western Red Cedar',
      code: 'WS 103',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Wooden Shades',
      description: 'Rich reddish-amber Western Red Cedar texture, bringing an organic premium rustic warmth.',
      colorClass: 'from-[#b25a38] via-[#d27d53] to-[#8b3d1b]',
      textureType: 'Sublimation Wood Grain',
      gloss: 'Satin Matte',
      curing: '200°C for 15 Mins',
      image: '/images/finish_swatches/wooden-shades-1_Western-Red-Cedar.png',
      specs: { 'Pencil Hardness': 'H-2H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-wood-05',
      name: 'Walnut Burl',
      code: 'WS 912',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Wooden Shades',
      description: 'Intricate deep brown and golden wood grain pattern. High fidelity polyurethane sublimation.',
      colorClass: 'from-[#5C4033] via-[#3D2314] to-[#704214]',
      textureType: 'Sublimation Wood Grain',
      gloss: 'Satin Matte',
      curing: '200°C for 15 Mins',
      image: '/images/finish_swatches/wooden-shades-1_Walnut-Burl.png',
      specs: { 'Pencil Hardness': '2H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-wood-06',
      name: 'Teak',
      code: 'WS 104',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Wooden Shades',
      description: 'Classic medium-brown teak timber grain pattern. Brings timeless elegance to structural metal.',
      colorClass: 'from-[#AF7030] via-[#C68B45] to-[#7B4E18]',
      textureType: 'Sublimation Wood Grain',
      gloss: 'Satin Matte',
      curing: '200°C for 15 Mins',
      image: '/images/finish_swatches/wooden-shades-1_Teak.png',
      specs: { 'Pencil Hardness': '2H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-wood-07',
      name: 'Snow Gum',
      code: 'WS 105',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Wooden Shades',
      description: 'Pale blonde-gold shade with soft eucalyptus silver grain accents.',
      colorClass: 'from-[#D2B48C] via-[#E6C280] to-[#A0522D]',
      textureType: 'Sublimation Wood Grain',
      gloss: 'Satin Matte',
      curing: '200°C for 15 Mins',
      image: '/images/finish_swatches/wooden-shades-1_Snow-Gum.png',
      specs: { 'Pencil Hardness': '2H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-wood-08',
      name: 'French Oak',
      code: 'WS 918',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Wooden Shades',
      description: 'Elegant, modern light-ash white wood shade with micro grain textures. Exceptional aesthetic.',
      colorClass: 'from-[#E5D3B3] via-[#C5A059] to-[#F5F2EB]',
      textureType: 'Sublimation Wood Grain',
      gloss: 'Deep Matt',
      curing: '200°C for 15 Mins',
      image: '/images/finish_swatches/wooden-shades-1_French-Oak.png',
      specs: { 'Pencil Hardness': '2H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-wood-09',
      name: 'Merlot',
      code: 'WS 106',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Wooden Shades',
      description: 'Deep red wine mahogany timber shade, creating elegant high-contrast profiles.',
      colorClass: 'from-[#5C1111] via-[#800000] to-[#3D0808]',
      textureType: 'Sublimation Wood Grain',
      gloss: 'Satin Matte',
      curing: '200°C for 15 Mins',
      image: '/images/finish_swatches/wooden-shades-1_Merlot.png',
      specs: { 'Pencil Hardness': 'H-2H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-wood-10',
      name: 'Black onyx',
      code: 'WS 405',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Wooden Shades',
      description: 'Charred Shou Sugi Ban look. Deep charcoal wood grain accents on deep black background.',
      colorClass: 'from-[#1E1E1E] via-[#0F0F0F] to-[#2B2B2B]',
      textureType: 'Sublimation Wood Grain',
      gloss: 'Satin / Matt',
      curing: '200°C for 15 Mins',
      image: '/images/finish_swatches/wooden-shades-1_Black-Onyx.png',
      specs: { 'Pencil Hardness': '2H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-wood-11',
      name: 'White Oak',
      code: 'WS 107',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Wooden Shades',
      description: 'Minimalist Scandinavian blonde white oak pattern with incredibly soft, modern grain lines.',
      colorClass: 'from-[#F5F5DC] via-[#E8DCC4] to-[#C2B280]',
      textureType: 'Sublimation Wood Grain',
      gloss: 'Deep Matt',
      curing: '200°C for 15 Mins',
      image: '/images/finish_swatches/wooden-shades-2_White-Oak.png',
      specs: { 'Pencil Hardness': '2H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-wood-12',
      name: 'Ebony',
      code: 'WS 108',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Wooden Shades',
      description: 'Sophisticated Gabon black wood grain. Highly structured deep waves on dark base coat.',
      colorClass: 'from-[#151515] via-[#2D2D2D] to-[#0A0A0A]',
      textureType: 'Sublimation Wood Grain',
      gloss: 'Satin Matte',
      curing: '200°C for 15 Mins',
      image: '/images/finish_swatches/wooden-shades-2_Ebony.png',
      specs: { 'Pencil Hardness': '2H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-wood-13',
      name: 'Antique white',
      code: 'WS 109',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Wooden Shades',
      description: 'Soft cream wood texture with subtle silver-tan veins for classical furniture aesthetics.',
      colorClass: 'from-[#FDFBF7] via-[#F4F0E6] to-[#E9DFCB]',
      textureType: 'Sublimation Wood Grain',
      gloss: 'Matt',
      curing: '200°C for 15 Mins',
      image: '/images/finish_swatches/wooden-shades-2_Antique-White.png',
      specs: { 'Pencil Hardness': '2H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-wood-14',
      name: 'Rose Mahogany',
      code: 'WS 110',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Wooden Shades',
      description: 'Radiant warm reddish mahogany grain with exquisite rose-toned timber details.',
      colorClass: 'from-[#8B3E2F] via-[#A0522D] to-[#5C241C]',
      textureType: 'Sublimation Wood Grain',
      gloss: 'Satin Matte',
      curing: '200°C for 15 Mins',
      image: '/images/finish_swatches/wooden-shades-2_Rose-Mahogany.png',
      specs: { 'Pencil Hardness': '2H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-wood-15',
      name: 'Curly Birch',
      code: 'WS 111',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Wooden Shades',
      description: 'Light curly figured wood pattern. Showcases beautiful birch ripples with high depth.',
      colorClass: 'from-[#F5DEB3] via-[#FFE4B5] to-[#D2B48C]',
      textureType: 'Sublimation Wood Grain',
      gloss: 'Satin Matte',
      curing: '200°C for 15 Mins',
      image: '/images/finish_swatches/wooden-shades-2_Curly-Birch.png',
      specs: { 'Pencil Hardness': '2H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-wood-16',
      name: 'Jarrah',
      code: 'WS 112',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Wooden Shades',
      description: 'Deep Australian eucalyptus burgundy red wood texture. Powerful visual impact.',
      colorClass: 'from-[#802211] via-[#A52A2A] to-[#4A1105]',
      textureType: 'Sublimation Wood Grain',
      gloss: 'Satin Matte',
      curing: '200°C for 15 Mins',
      image: '/images/finish_swatches/wooden-shades-2_Jarrah.png',
      specs: { 'Pencil Hardness': '2H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-wood-17',
      name: 'Dark mocha',
      code: 'WS 113',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Wooden Shades',
      description: 'Rich dark-roasted espresso wood pattern, popular for architectural framing.',
      colorClass: 'from-[#3D2314] via-[#4A2E1B] to-[#241103]',
      textureType: 'Sublimation Wood Grain',
      gloss: 'Deep Matt',
      curing: '200°C for 15 Mins',
      image: '/images/finish_swatches/wooden-shades-2_Dark-Mocha.png',
      specs: { 'Pencil Hardness': '2H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-wood-18',
      name: 'Charcoal',
      code: 'WS 114',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Wooden Shades',
      description: 'Contemporary cool neutral dark gray wood grain, providing highly modern architectural lines.',
      colorClass: 'from-[#4F4F4F] via-[#696969] to-[#333333]',
      textureType: 'Sublimation Wood Grain',
      gloss: 'Matt Finish',
      curing: '200°C for 15 Mins',
      image: '/images/finish_swatches/wooden-shades-2_Charcoal.png',
      specs: { 'Pencil Hardness': '2H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-wood-19',
      name: 'Cherry',
      code: 'WS 115',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Wooden Shades',
      description: 'American Black Cherry wood grain, offering high depth warm reddish-brown timber tones.',
      colorClass: 'from-[#9E4624] via-[#CD5B27] to-[#702C12]',
      textureType: 'Sublimation Wood Grain',
      gloss: 'Natural Wood Gloss',
      curing: '200°C for 15 Mins',
      image: '/images/finish_swatches/wooden-shades-2_Cherry.png',
      specs: { 'Pencil Hardness': '2H', 'Salt Spray Resistance': '1000 Hours' }
    },
    {
      id: 'shade-wood-20',
      name: 'Driftwood',
      code: 'WS 116',
      category: 'Powder Coating Powder' as const,
      subcategory: 'Wooden Shades',
      description: 'Weathered beach timber tone, featuring cool silver and soft-bleached beige grains.',
      colorClass: 'from-[#D3D3D3] via-[#E1E1E1] to-[#BEBEBE]',
      textureType: 'Sublimation Wood Grain',
      gloss: 'Deep Matt',
      curing: '200°C for 15 Mins',
      image: '/images/finish_swatches/wooden-shades-2_Driftwood.png',
      specs: { 'Pencil Hardness': '2H', 'Salt Spray Resistance': '1000 Hours' }
    }
  ];

  const tabs = ['All', 'Antiques', 'Metallics', 'Matt Finish', 'Mix Shades', 'Wooden Shades'];

  const filteredShades = shadesList.filter((shade) => {
    const matchesTab = activeTab === 'All' || shade.subcategory === activeTab;
    const matchesSearch = 
      shade.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shade.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shade.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Search & Filter bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 border border-gray-200">
        {/* Subcategory filters */}
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-[10px] uppercase tracking-wider font-bold transition-colors ${
                activeTab === tab
                  ? 'bg-editorial-orange text-white'
                  : 'bg-gray-50 border border-gray-200 text-stone-600 hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-stone-400">
            <Search size={14} />
          </span>
          <input
            type="text"
            placeholder="Search shades or codes (e.g. HKT)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-editorial-orange focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Official Colour Card Cover Banner */}
      <div className="relative overflow-hidden bg-white border border-gray-200 p-8 flex flex-col md:flex-row justify-between items-center gap-8 text-left">
        {/* Geometric Background Accent */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none hidden md:block">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-editorial-orange">
            <polygon points="50,10 90,90 10,90" fill="currentColor" />
            <polygon points="30,40 70,80 10,90" fill="currentColor" className="text-editorial-blue" />
          </svg>
        </div>

        <div className="space-y-4 max-w-2xl z-10">
          <div className="inline-flex items-center space-x-2 text-stone-500 font-mono text-[10px]">
            <span className="px-2.5 py-1 bg-gray-100 border border-gray-200 text-stone-700 font-bold uppercase tracking-widest rounded-full">Official Release</span>
            <span>•</span>
            <span className="font-bold">Established 2010</span>
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-black tracking-[0.25em] text-editorial-blue uppercase">
              Future India Powder Coating System
            </h3>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 leading-none">
              POWDER COATINGS <span className="text-editorial-orange block sm:inline">COLOUR CARD</span>
            </h2>
          </div>
          <p className="text-xs text-stone-500 leading-relaxed font-serif italic">
            Displaying the complete, state-of-the-art thermosetting powder coating spectrum. From heavy-duty protective Antiques and reflective Metallics to sophisticated Matt finishes, high-clarity Mix Shades, and polyurethane wood-grain sublimations. All certified for immediate industrial inquiry.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end justify-center text-center md:text-right shrink-0 z-10 space-y-2">
          <div className="px-6 py-4 bg-slate-900 text-white border border-slate-800 shadow-xs">
            <div className="text-[9px] font-mono tracking-widest uppercase text-editorial-orange">Total Shade Count</div>
            <div className="text-4xl font-black font-sans text-white">{shadesList.length}</div>
            <div className="text-[8px] text-gray-400 uppercase tracking-widest mt-1">B2B Certified Shades</div>
          </div>
        </div>
      </div>

      {/* Special note about PVD and powder technology */}
      <div className="p-8 bg-editorial-blue text-white border border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-editorial-orange">
            <Layers size={18} />
            <span className="text-[10px] font-black uppercase tracking-widest">Premium Vacuum Coating Highlight</span>
          </div>
          <h4 className="text-xl font-light tracking-tight pt-1">
            In-House PVD <span className="font-black italic">(Physical Vapor Deposition)</span> Technology
          </h4>
          <p className="text-xs text-gray-300 max-w-2xl leading-relaxed font-serif italic">
            In addition to our Advanced Dry Powder Coating systems, Future Furnishing Industry operates an in-house PVD coating plant. This allows us to plate stainless steel profiles with molecular-bonded, scratch-proof Mirror Gold, Rose Gold, and Mirror Chrome finishes which form the backbone of our luxury furniture line.
          </p>
        </div>
        <span className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest bg-editorial-orange text-white shrink-0">
          In-House Facility
        </span>
      </div>

      {/* Shades visual grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredShades.map((shade) => {
          const itemInBag = bagItemIds.includes(shade.id);
          
          return (
            <div key={shade.id} className="bg-white border border-gray-200 flex flex-col hover:border-editorial-orange transition-colors">
              {/* Textured Color Block */}
              <div 
                onClick={() => setSelectedShade(shade)}
                className="relative h-44 bg-gray-100 flex flex-col justify-end p-4 cursor-zoom-in group/shade overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-tr ${shade.colorClass} opacity-85 group-hover/shade:scale-105 transition-transform duration-500`}></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-black/20 mix-blend-overlay"></div>
                
                {shade.subcategory === 'Antiques' && (
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#000000_1px,transparent_1px)] bg-[size:4px_4px]"></div>
                )}
                {shade.subcategory === 'Wooden Shades' && (
                  <div className="absolute inset-0 opacity-15 bg-[repeating-linear-gradient(45deg,#000_0px,#000_2px,transparent_2px,transparent_10deg)]"></div>
                )}

                {/* Enlarge overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/shade:opacity-100 transition-opacity flex items-center justify-center z-10">
                  <span className="bg-black/75 border border-white/10 text-white font-mono text-[8px] uppercase tracking-widest font-black px-2.5 py-1.5 flex items-center gap-1.5 shadow-md">
                    <Maximize size={10} className="text-editorial-orange" />
                    <span>View Shade HD</span>
                  </span>
                </div>

                {/* Shading category labels */}
                <div className="relative z-10 flex justify-between items-start mb-auto">
                  <span className="px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest bg-black/60 text-white">
                    {shade.subcategory}
                  </span>
                  <span className="px-2 py-0.5 text-[9px] font-mono font-bold bg-white text-editorial-blue border border-gray-200">
                    {shade.code}
                  </span>
                </div>

                <div className="relative z-10 text-white text-left">
                  <h3 className="text-xs font-black tracking-widest uppercase drop-shadow-xs">
                    {shade.name}
                  </h3>
                  <p className="text-[9px] text-white/90 font-mono truncate pt-0.5">
                    {shade.textureType}
                  </p>
                </div>
              </div>

              {/* Shade Details */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-4 text-left">
                <div className="space-y-2">
                  <p className="text-xs text-stone-500 leading-relaxed font-serif italic min-h-[48px]">
                    {shade.description}
                  </p>

                  {/* Curing & Specs */}
                  <div className="bg-gray-50 p-3 border border-gray-200 text-[10px] font-mono grid grid-cols-2 gap-2 text-stone-500">
                    <div>
                      <span className="block font-sans text-[8px] font-bold uppercase tracking-wider text-stone-400">Gloss Level:</span>
                      <span className="font-bold text-editorial-blue">{shade.gloss}</span>
                    </div>
                    <div>
                      <span className="block font-sans text-[8px] font-bold uppercase tracking-wider text-stone-400">Curing Temp:</span>
                      <span className="font-bold text-editorial-blue">{shade.curing}</span>
                    </div>
                    <div>
                      <span className="block font-sans text-[8px] font-bold uppercase tracking-wider text-stone-400">Hardness:</span>
                      <span className="font-bold text-editorial-blue">{shade.specs['Pencil Hardness'] || '2H'}</span>
                    </div>
                    <div>
                      <span className="block font-sans text-[8px] font-bold uppercase tracking-wider text-stone-400">Salt Spray:</span>
                      <span className="font-bold text-editorial-blue">{shade.specs['Salt Spray Resistance'] || '1000 Hrs'}</span>
                    </div>
                  </div>
                </div>

                {/* Add shade to inquiry sheet */}
                <button
                  onClick={() => onAddToBag({
                    id: shade.id,
                    name: `${shade.name} Shade (${shade.code})`,
                    category: 'Powder Coating Powder',
                    subcategory: shade.subcategory,
                    description: shade.description,
                    image: shade.image,
                    specs: shade.specs,
                    code: shade.code
                  })}
                  className={`w-full py-2.5 text-[10px] font-bold uppercase tracking-widest transition-colors flex items-center justify-center space-x-1.5 ${
                    itemInBag
                      ? 'bg-emerald-600 border border-emerald-600 text-white cursor-default'
                      : 'bg-editorial-blue text-white hover:bg-editorial-orange'
                  }`}
                >
                  {itemInBag ? (
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
              </div>
            </div>
          );
        })}
      </div>

      {filteredShades.length === 0 && (
        <div className="text-center py-12 border border-gray-200 bg-white p-8">
          <RefreshCw className="mx-auto text-stone-300 animate-spin mb-3" size={32} />
          <h4 className="text-sm font-bold text-stone-800">No color shade matched</h4>
          <p className="text-xs text-stone-400 mt-1">Try resetting filters or adjusting search queries.</p>
        </div>
      )}

      {/* Interactive HD Lightbox for Color Shades */}
      <ImageZoomModal
        isOpen={selectedShade !== null}
        onClose={() => setSelectedShade(null)}
        imageUrl={selectedShade?.image || ''}
        imageName={`${selectedShade?.name} Shade (${selectedShade?.code})`}
        imageDescription={selectedShade?.description}
        colorClass={selectedShade?.colorClass}
        shadeSubcategory={selectedShade?.subcategory}
        specs={{
          'Gloss Level': selectedShade?.gloss || 'N/A',
          'Curing Temperature': selectedShade?.curing || 'N/A',
          'Pencil Hardness': selectedShade?.specs?.['Pencil Hardness'] || 'N/A',
          'Salt Spray Resistance': selectedShade?.specs?.['Salt Spray Resistance'] || 'N/A',
          'Subcategory': selectedShade?.subcategory || 'N/A',
          'Texture Finish Type': selectedShade?.textureType || 'N/A'
        }}
      />
    </div>
  );
}
