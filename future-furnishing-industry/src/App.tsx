import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProductCarousel from './components/ProductCarousel';
import InquiryBag from './components/InquiryBag';
import ProductCard from './components/ProductCard';
import ColorGrid from './components/ColorGrid';
import StatsSection from './components/StatsSection';
import WhatsAppButton from './components/WhatsAppButton';
import { ContactForm, DealerRegistrationForm, CareerForm } from './components/Forms';
import { PRODUCTS, MANUFACTURING_STATS } from './data';
import { POWDER_SHADES, WOODEN_PLANK_PHOTOS } from './shadesData';
import { AUTOMATIC_POWDER_COATING_PLANT_SVG_IMAGE } from './assets/images';
import { Product } from './types';
import { 
  CheckCircle, 
  ChevronRight, 
  MapPin, 
  Compass, 
  Factory, 
  Package, 
  PenTool, 
  Layers,
  Search
} from 'lucide-react';

// Converts an image URL into a self-contained embedded format for offline catalogs
async function embedImage(url: string): Promise<string> {
  try {
    const response = await fetch(url, { cache: 'no-store' });
    const blob = await response.blob();
    if (!blob.type.startsWith('image/')) {
      console.error('Fetch did not return an image (got ' + blob.type + '), skipping embed for:', url);
      return url;
    }
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (err) {
    console.error('Could not embed image, falling back to original path:', url, err);
    return url;
  }
}
export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [themeMode, setThemeMode] = useState<'industrial' | 'luxury'>('industrial');
  const [bagItems, setBagItems] = useState<Product[]>([]);
  const [isInquiryBagOpen, setIsInquiryBagOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('All');
  const [downloadNotification, setDownloadNotification] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<'candy-rose' | 'mirror-silver'>('candy-rose');
  // Sync theme mode and reset filters on page change
  useEffect(() => {
    if (currentPage === 'homecollection') {
      setThemeMode('luxury');
    } else if (currentPage === 'finishing' || currentPage === 'coating') {
      setThemeMode('industrial');
    }
    // Clean filters and search inputs
    setSelectedSubcategory('All');
    setSearchQuery('');
  }, [currentPage]);

  // Handle addition of items to the Inquiry Cart/Sheet
  const handleAddToBag = (product: Product) => {
    if (bagItems.some((item) => item.id === product.id)) return;
    setBagItems((prev) => [...prev, product]);
  };

  // Handle removal of items from the sheet
  const handleRemoveItem = (id: string) => {
    setBagItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear sheet upon successful submission
  const handleClearBag = () => {
    setBagItems([]);
  };

  // Quick direct quote trigger (switches to contact page and sets interest)
  const handleQuickInquiry = (product: Product) => {
    setCurrentPage('inquiry');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dynamic B2B Standalone Digital Catalog generator and downloader
  const handleDownloadCatalog = async (catalogName: string) => {
  setDownloadNotification(`Preparing ${catalogName}...`);
    // Filter relevant products
    const isHome = catalogName.toLowerCase().includes('home') || catalogName.toLowerCase().includes('furniture');
    const relevantProducts = PRODUCTS.filter((p) => {
      if (isHome) return p.category === 'furniture manufacturing';
      return p.category === 'Powder Coating Machines' || p.category === 'Powder Coating Powder';
    });

    const coverImageRaw = isHome 
  ? 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&q=80&w=800' 
  : '/images/product_with_logo/machine-1.jpeg';
const coverImage = await embedImage(coverImageRaw);

const embeddedProducts = await Promise.all(
  relevantProducts.map(async (p) => ({ ...p, embeddedImage: await embedImage(p.image) }))
);


let colorsHtml = '';
let woodenPlanksHtml = '';

if (!isHome) {
    const embeddedShades = [];
  for (const s of POWDER_SHADES) {
    embeddedShades.push({ ...s, embeddedImage: await embedImage(s.image) });
  }
  embeddedShades.forEach((s) => {
    colorsHtml += `
  <div class="border border-gray-100 bg-white p-3 text-center space-y-2">
    <div class="w-full h-24 bg-stone-50 overflow-hidden">
      <img src="${s.embeddedImage}" class="w-full h-full object-cover" alt="${s.name}">
    </div>
    <div>
      <p class="text-[10px] font-bold uppercase text-[#0A192F]">${s.name}</p>
      <p class="text-[9px] text-stone-400 font-mono">${s.code} &middot; ${s.subcategory}</p>
    </div>
  </div>
`;
  });

  const embeddedPlanks = [];
  for (const w of WOODEN_PLANK_PHOTOS) {
    embeddedPlanks.push({ ...w, embeddedImage: await embedImage(`/images/product_with_logo/${w.file}`) });
  }
  embeddedPlanks.forEach((w) => {
    woodenPlanksHtml += `
  <div class="border border-gray-100 bg-white p-3 text-center space-y-2">
    <div class="w-full h-32 bg-stone-50 overflow-hidden">
      <img src="${w.embeddedImage}" class="w-full h-full object-contain" alt="${w.name}">
    </div>
    <p class="text-[10px] font-bold uppercase text-[#0A192F]">${w.name}</p>
  </div>
`;
  });
}

    let productsHtml = '';
    embeddedProducts.forEach((p, idx) => {
      let specsRows = '';
      Object.entries(p.specs).forEach(([k, v]) => {
        specsRows += `
          <tr class="border-b border-gray-100 last:border-0 text-xs">
            <td class="py-2.5 pr-4 font-bold text-[#0A192F] w-1/3 align-top">${k}</td>
            <td class="py-2.5 text-stone-600 font-serif italic">${v}</td>
          </tr>
        `;
      });

      let materialsSection = '';
      if (p.materials && p.materials.length > 0) {
        materialsSection += `
          <div class="space-y-1.5">
            <span class="text-[9px] font-bold uppercase tracking-widest text-stone-400 block">Structural Materials:</span>
            <div class="flex flex-wrap gap-1.5">
              ${p.materials.map(m => `<span class="bg-stone-100 text-stone-700 text-[10px] font-bold px-2.5 py-1 border border-stone-200">${m}</span>`).join('')}
            </div>
          </div>
        `;
      }

      let finishesSection = '';
      if (p.finishes && p.finishes.length > 0) {
        finishesSection += `
          <div class="space-y-1.5">
            <span class="text-[9px] font-bold uppercase tracking-widest text-stone-400 block">Available Coatings / Finishes:</span>
            <div class="flex flex-wrap gap-1.5">
              ${p.finishes.map(f => `<span class="bg-[#f68b1e]/10 text-[#f68b1e] text-[10px] font-bold px-2.5 py-1 border border-[#f68b1e]/20">${f}</span>`).join('')}
            </div>
          </div>
        `;
      }

      const modelBadge = p.code ? `<span class="bg-[#0A192F] text-white text-[10px] font-mono font-bold px-2.5 py-1 uppercase tracking-wider">${p.code}</span>` : '';

      productsHtml += `
        <div class="page-break-avoid border border-gray-200 bg-white p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start shadow-sm">
          <!-- Product Info (Left 7 Columns) -->
          <div class="md:col-span-7 space-y-4">
            <div class="flex flex-wrap items-center gap-2">
              <span class="text-[10px] uppercase tracking-wider font-extrabold text-[#718096]">${p.category} (${p.subcategory})</span>
              ${modelBadge}
            </div>
            <h3 class="text-xl md:text-2xl font-light text-[#0A192F] tracking-tight leading-snug">
              <span class="font-extrabold italic text-[#f68b1e]">${idx + 1}.</span> ${p.name}
            </h3>
            <p class="text-xs text-stone-500 font-serif italic leading-relaxed">
              ${p.description}
            </p>
            
            <div class="border-t border-gray-100 pt-4 mt-4 space-y-4">
              <table class="w-full text-left border-collapse">
                <tbody>
                  ${specsRows}
                </tbody>
              </table>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-gray-100 pt-4">
                ${materialsSection}
                ${finishesSection}
              </div>
            </div>
          </div>

          <!-- Product Image (Right 5 Columns) -->
          <div class="md:col-span-5 space-y-2">
            <div class="w-full h-64 bg-stone-50 border border-gray-100 overflow-hidden relative shadow-sm">
              <img src="${p.embeddedImage}" class="w-full h-full object-cover" alt="${p.name}">
            </div>
            <div class="bg-stone-50 border border-gray-100 p-3.5 text-center">
              <span class="text-[10px] uppercase font-mono tracking-wider text-stone-400 block">Item reference: ${p.id}</span>
            </div>
          </div>
        </div>
      `;
    });

    let standardsHtml = '';
    MANUFACTURING_STATS.packagingStandards.forEach((s) => {
      standardsHtml += `
        <div class="bg-stone-50 border border-gray-100 p-5 space-y-2">
          <div class="flex items-center space-x-2">
            <span class="bg-[#f68b1e] text-white text-[10px] font-mono font-black px-2 py-0.5">${s.code}</span>
            <span class="text-xs font-bold text-[#0A192F] uppercase tracking-wider">${s.name}</span>
          </div>
          <p class="text-xs text-stone-500 font-serif italic">${s.detail}</p>
        </div>
      `;
    });

    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Future Furnishing Industry - ${catalogName}</title>
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <!-- Tailwind CSS Play CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            display: ['Montserrat', 'sans-serif'],
            serif: ['Playfair Display', 'serif'],
            mono: ['JetBrains Mono', 'monospace'],
          },
          colors: {
            editorial: {
              blue: '#0A192F',
              orange: '#f68b1e',
              bg: '#F8F9FA',
              gray: '#718096',
            }
          }
        }
      }
    }
  </script>
  <style>
    @media print {
      body {
        background-color: #ffffff !important;
        color: #000000 !important;
      }
      .no-print {
        display: none !important;
      }
      .page-break-avoid {
        page-break-inside: avoid;
        break-inside: avoid;
      }
      .page-break-after {
        page-break-after: always;
        break-after: always;
      }
    }
    .fade-in {
      animation: fadeIn 0.8s ease-out forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  </style>
</head>
<body class="bg-editorial-bg text-stone-800 font-sans min-h-screen selection:bg-editorial-orange/10 selection:text-editorial-orange">

  <!-- Interactive Floating Header for Browser View -->
  <div class="no-print bg-editorial-blue text-white sticky top-0 z-50 border-b border-editorial-orange/20 shadow-lg">
    <div class="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
      <div class="flex items-center space-x-3">
        <div class="w-8 h-8 bg-editorial-orange flex items-center justify-center font-display font-black text-white text-lg">F</div>
        <div>
          <span class="text-xs uppercase tracking-[0.25em] font-bold text-editorial-gray block">B2B Digital Brochure</span>
          <h1 class="text-sm font-display font-extrabold text-white">Future Furnishing Industry</h1>
        </div>
      </div>
      <div class="flex items-center space-x-3">
        <button onclick="window.print()" class="bg-editorial-orange hover:bg-white hover:text-editorial-blue text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 transition-all flex items-center space-x-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
          <span>Save as PDF / Print Spec Sheet</span>
        </button>
      </div>
    </div>
  </div>

  <div class="max-w-5xl mx-auto px-6 md:px-12 py-12 fade-in space-y-16">

    <!-- 1. COVER PAGE / HERO -->
    <div class="page-break-after border border-gray-200 bg-white p-8 md:p-16 flex flex-col justify-between min-h-[85vh] relative overflow-hidden shadow-sm">
      <div class="absolute top-0 left-0 right-0 h-1.5 bg-editorial-orange"></div>
      
      <div class="flex justify-between items-start">
        <div>
          <span class="text-[11px] font-bold uppercase tracking-[0.3em] text-editorial-orange block">B2B Specifications Portfolio</span>
          <h2 class="text-xl font-display font-extrabold text-editorial-blue tracking-tight mt-1">FUTURE FURNISHING INDUSTRY</h2>
        </div>
        <div class="text-right">
          <span class="text-xs text-stone-400 font-mono block">DATE: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          <span class="text-[9px] uppercase tracking-wider text-editorial-gray block">Noida Factory Unit</span>
        </div>
      </div>

      <div class="my-12 space-y-6">
        <h1 class="text-4xl md:text-6xl font-light text-editorial-blue tracking-tight leading-none">
          ${catalogName.split(' - ')[0]}<br/>
          <span class="font-extrabold italic text-editorial-orange">${catalogName.split(' - ')[1] || 'Specification Catalogue'}</span>
        </h1>
        <div class="h-0.5 w-24 bg-editorial-blue"></div>
        <p class="max-w-xl text-sm text-stone-500 font-serif italic leading-relaxed">
          An elite compilation of bespoke engineering solutions, fabricated utilizing in-house CNC laser cutting, hydraulic presses, and finished with superior electrostatic coatings. Optimized for international shipping with full ISTA safety compliance.
        </p>
      </div>

      <div class="w-full h-80 bg-stone-100 overflow-hidden relative border border-gray-100 my-4 shadow-inner">
        <img src="${coverImage}" class="w-full h-full object-cover" alt="Cover Image" referrerpolicy="no-referrer">
        <div class="absolute inset-0 bg-gradient-to-t from-editorial-blue/40 to-transparent"></div>
      </div>

      <div class="border-t border-gray-100 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs">
        <div class="space-y-1 text-stone-500">
          <p class="font-bold text-editorial-blue uppercase tracking-wider text-[10px]">Corporate Unit & Assembly Plant</p>
          <p>D-329, Sector 63, Noida, Uttar Pradesh - 201301, India</p>
        </div>
        <div class="text-left sm:text-right space-y-1 text-stone-500">
          <p class="font-bold text-editorial-blue uppercase tracking-wider text-[10px]">Commercial & Engineering Office</p>
          <p>Email: info@futurefurnishingindustry.com</p>
        </div>
      </div>
    </div>

    <!-- 2. PRODUCT SPECIFICATION PAGES -->
    <div class="space-y-12">
      <div class="border-b border-gray-200 pb-4">
        <h2 class="text-2xl font-display font-extrabold text-editorial-blue uppercase tracking-wider">Product Specifications</h2>
        <p class="text-xs text-stone-400 font-serif italic mt-1">Detailed technical data, structural profiles, and finishing choices</p>
      </div>

      <div class="grid grid-cols-1 gap-12">
        ${productsHtml}
      </div>
    </div>

    ${!isHome ? `
    <!-- 2b. POWDER COATING COLOR CARD -->
    <div class="space-y-8">
      <div class="border-b border-gray-200 pb-4">
        <h2 class="text-2xl font-display font-extrabold text-editorial-blue uppercase tracking-wider">Powder Coating Color Card</h2>
        <p class="text-xs text-stone-400 font-serif italic mt-1">Complete range of ${POWDER_SHADES.length} certified shades</p>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        ${colorsHtml}
      </div>
    </div>

    <!-- 2c. WOODEN PLANKS -->
    <div class="space-y-8">
      <div class="border-b border-gray-200 pb-4">
        <h2 class="text-2xl font-display font-extrabold text-editorial-blue uppercase tracking-wider">Wooden Plank Shades</h2>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        ${woodenPlanksHtml}
      </div>
    </div>
    ` : ''}
    <!-- 3. PACKAGING STANDARDS & SAFETY -->
    <div class="page-break-avoid border border-gray-200 bg-white p-8 md:p-12 space-y-6 shadow-sm">
      <div class="border-b border-gray-100 pb-4">
        <span class="text-[10px] font-bold uppercase tracking-widest text-editorial-orange">Quality Control</span>
        <h2 class="text-xl font-display font-extrabold text-editorial-blue mt-1">Export Packaging & Safe-Transit Certification</h2>
      </div>
      <p class="text-xs text-stone-500 leading-relaxed font-serif italic">
        Future Furnishing Industry maintains a zero-damage transport commitment. All machinery panels, oven blocks, and luxury furniture pieces undergo certified impact and vibration assessments before cargo containment.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${standardsHtml}
      </div>
    </div>

    <!-- 4. SIGN-OFF / CALL TO ACTION -->
    <div class="page-break-avoid bg-editorial-blue text-white p-8 md:p-12 space-y-6 text-center border border-editorial-orange/20 relative overflow-hidden">
      <div class="relative z-10 max-w-2xl mx-auto space-y-4">
        <span class="text-[10px] font-bold uppercase tracking-[0.3em] text-editorial-orange block">B2B Consultation</span>
        <h2 class="text-2xl font-light">Ready to Initiate a <span class="font-extrabold italic text-editorial-orange">B2B RFQ Sheet?</span></h2>
        <p class="text-xs text-gray-300 font-serif italic leading-relaxed">
          Whether you require customized physical dimensions, custom mild/stainless steel gauges, specific electrical specifications, or continuous assembly conveyor loop plans, our engineering team led by Product Owner Amit Tyagi is ready to draft your blueprint and container shipping schedule.
        </p>
        <div class="pt-4 border-t border-white/10 flex flex-col sm:flex-row justify-center items-center gap-6 text-xs text-stone-400 font-mono">
          <div>
            <span class="text-white block font-sans font-bold uppercase text-[9px] tracking-wider text-editorial-orange">PRIMARY CONTACT</span>
            <span>info@futurefurnishingindustry.com</span>
          </div>
          <div class="hidden sm:block h-8 w-px bg-white/10"></div>
          <div>
            <span class="text-white block font-sans font-bold uppercase text-[9px] tracking-wider text-editorial-orange">PRODUCTION SITE</span>
            <span class="font-sans">D-329, Sector 63, Noida, Uttar Pradesh - 201301, India</span>
          </div>
        </div>
      </div>
    </div>

  </div>

</body>
</html>`;

    // Initiate file download
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${catalogName.replace(/[^a-zA-Z0-9]/g, '_')}_B2B_Catalogue.html`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show top indicator
    setDownloadNotification(catalogName);
    setTimeout(() => {
      setDownloadNotification(null);
    }, 4500);
  };

  // Products filtering helpers
  const industrialProducts = PRODUCTS.filter((p) => p.category === 'Powder Coating Machines');
  const homeProducts = PRODUCTS.filter((p) => p.category === 'furniture manufacturing');

  const filteredFinishing = industrialProducts.filter((p) => {
    const matchesTab = selectedSubcategory === 'All' || p.subcategory === selectedSubcategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const filteredHome = homeProducts.filter((p) => {
    const matchesTab = selectedSubcategory === 'All' || p.subcategory === selectedSubcategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const featuredProducts = PRODUCTS.filter((p) => p.featured);
  const woodenPlanksSection = (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
    {WOODEN_PLANK_PHOTOS.map(({ name, file }) => (
      <div key={name} className="border border-gray-200 bg-white overflow-hidden">
      <img src={`/images/${file.startsWith('color-') || file.startsWith('Color-') ? 'product_with_logo' : 'finish_swatches'}/${file}`} alt={name} className="w-full h-48 object-contain bg-gray-50 cursor-zoom-in" onClick={() => setSelectedShadeImage({ url: `/images/${file.startsWith('color-') || file.startsWith('Color-') ? 'product_with_logo' : 'finish_swatches'}/${file}`, name })} />
        <div className="p-2 text-center">
          <span className="text-[10px] font-bold uppercase tracking-wide text-stone-700">{name}</span>
        </div>
      </div>
    ))}
  </div>
);

const videosSection = (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="border border-gray-200 bg-white overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-editorial-blue">
        <span className="text-white text-[9px] font-black uppercase tracking-widest">Candy Rose Gold</span>
        <span className="bg-editorial-orange text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5">Video</span>
      </div>
      <div className="w-full aspect-video bg-black">
        <video controls className="w-full h-full object-cover">
          <source src="/videos/ffi-videos/candy-rose-gold-coating.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <div className="border border-gray-200 bg-white overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-editorial-blue">
        <span className="text-white text-[9px] font-black uppercase tracking-widest">Mirror Silver</span>
        <span className="bg-editorial-orange text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5">Video</span>
      </div>
      <div className="w-full aspect-video bg-black">
        <video controls className="w-full h-full object-cover">
          <source src="/videos/ffi-videos/mirror-silver-coating.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <div className="border border-gray-200 bg-white overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-editorial-blue">
        <span className="text-white text-[9px] font-black uppercase tracking-widest">Candy Green</span>
        <span className="bg-editorial-orange text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5">Video</span>
      </div>
      <div className="w-full aspect-video bg-black">
        <video controls className="w-full h-full object-cover">
          <source src="/videos/ffi-videos/candy-green.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <div className="border border-gray-200 bg-white overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-editorial-blue">
        <span className="text-white text-[9px] font-black uppercase tracking-widest">Candy Lime Green Powder</span>
        <span className="bg-editorial-orange text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5">Video</span>
      </div>
      <div className="w-full aspect-video bg-black">
        <video controls className="w-full h-full object-cover">
          <source src="/videos/ffi-videos/candy-lime-green-powder.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <div className="border border-gray-200 bg-white overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-editorial-blue">
        <span className="text-white text-[9px] font-black uppercase tracking-widest">Candy Pink</span>
        <span className="bg-editorial-orange text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5">Video</span>
      </div>
      <div className="w-full aspect-video bg-black">
        <video controls className="w-full h-full object-cover">
          <source src="/videos/ffi-videos/candy-pink.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <div className="border border-gray-200 bg-white overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-editorial-blue">
        <span className="text-white text-[9px] font-black uppercase tracking-widest">Candy Teal Metallic Powder</span>
        <span className="bg-editorial-orange text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5">Video</span>
      </div>
      <div className="w-full aspect-video bg-black">
        <video controls className="w-full h-full object-cover">
          <source src="/videos/ffi-videos/candy-teal-mettalic-powder.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <div className="border border-gray-200 bg-white overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-editorial-blue">
        <span className="text-white text-[9px] font-black uppercase tracking-widest">Gold Metallic</span>
        <span className="bg-editorial-orange text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5">Video</span>
      </div>
      <div className="w-full aspect-video bg-black">
        <video controls className="w-full h-full object-cover">
          <source src="/videos/ffi-videos/gold-metallic.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <div className="border border-gray-200 bg-white overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-editorial-blue">
        <span className="text-white text-[9px] font-black uppercase tracking-widest">Rose Gold Metallic</span>
        <span className="bg-editorial-orange text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5">Video</span>
      </div>
      <div className="w-full aspect-video bg-black">
        <video controls className="w-full h-full object-cover">
          <source src="/videos/ffi-videos/rosegold-matellic.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <div className="border border-gray-200 bg-white overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-editorial-blue">
        <span className="text-white text-[9px] font-black uppercase tracking-widest">Mirror Gold</span>
        <span className="bg-editorial-orange text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5">Video</span>
      </div>
      <div className="w-full aspect-video bg-black">
        <video controls className="w-full h-full object-cover">
          <source src="/videos/ffi-videos/mirror-gold.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <div className="border border-gray-200 bg-white overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-editorial-blue">
        <span className="text-white text-[9px] font-black uppercase tracking-widest">Silver</span>
        <span className="bg-editorial-orange text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5">Video</span>
      </div>
      <div className="w-full aspect-video bg-black">
        <video controls className="w-full h-full object-cover">
          <source src="/videos/ffi-videos/silver.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <div className="border border-gray-200 bg-white overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-editorial-blue">
        <span className="text-white text-[9px] font-black uppercase tracking-widest">Machine Demo 1</span>
        <span className="bg-editorial-orange text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5">Video</span>
      </div>
      <div className="w-full aspect-video bg-black">
        <video controls className="w-full h-full object-cover">
          <source src="/videos/ffi-videos/machine.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <div className="border border-gray-200 bg-white overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-editorial-blue">
        <span className="text-white text-[9px] font-black uppercase tracking-widest">Machine Demo 2</span>
        <span className="bg-editorial-orange text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5">Video</span>
      </div>
      <div className="w-full aspect-video bg-black">
        <video controls className="w-full h-full object-cover">
          <source src="/videos/ffi-videos/machine-2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <div className="border border-gray-200 bg-white overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-editorial-blue">
        <span className="text-white text-[9px] font-black uppercase tracking-widest">Color Demo</span>
        <span className="bg-editorial-orange text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5">Video</span>
      </div>
      <div className="w-full aspect-video bg-black">
        <video controls className="w-full h-full object-cover">
          <source src="/videos/ffi-videos/color.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
);

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-editorial-orange/10 selection:text-editorial-orange bg-editorial-bg text-stone-800 font-sans">
      {/* Top Floating Download Notification Banner */}
      {downloadNotification && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 max-w-md w-full px-4 animate-bounce">
          <div className="bg-editorial-blue border border-editorial-orange text-white p-5 rounded-none shadow-xl flex items-start space-x-3">
            <CheckCircle className="text-editorial-orange shrink-0 mt-0.5" size={18} />
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider">B2B Catalog Download Initiated</h4>
              <p className="text-[11px] text-gray-300 mt-1 font-serif italic">
                Your customized spec sheet for <span className="font-semibold text-white">{downloadNotification}</span> has been built on-the-fly.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Corporate sticky header */}
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        themeMode={themeMode}
        setThemeMode={setThemeMode}
        inquiryBagCount={bagItems.length}
        setIsInquiryBagOpen={setIsInquiryBagOpen}
      />

      {/* Main Body */}
      <main className="flex-grow">
        {/* 1. HOME PAGE */}
        {currentPage === 'home' && (
          <div className="space-y-20 pb-20 animate-fadeIn">
            {/* Hero banner */}
            <Hero
              themeMode={themeMode}
              setThemeMode={setThemeMode}
              setCurrentPage={setCurrentPage}
              onDownloadCatalog={handleDownloadCatalog}
            />

            {/* Section 2: Division Navigation Gates (Clean Categorization Grid) */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 text-left">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-4 space-y-4">
                  <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-editorial-gray block">
                    Our Capabilities
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-editorial-blue leading-[1.1]">
                    Industrial <br />
                    <span className="font-black italic text-editorial-orange">Core Divisions</span>
                  </h2>
                  <p className="text-xs text-stone-500 font-serif italic leading-relaxed">
                    Explore our specialized high-precision manufacturing segments. Select a division to view deep technical specs and download B2B brochures.
                  </p>
                </div>

                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: 'Powder Coating Machines',
                      page: 'finishing',
                      desc: 'Booths, multi-fuel curing ovens, conveyor tracks and turnkey automatic paint shops.',
                      icon: <Factory size={20} className="text-white" />,
                      color: 'bg-editorial-blue text-white'
                    },
                    {
                      title: 'Powder Coating Powder',
                      page: 'coating',
                      desc: 'Thermosetting powders, including antique vein patterns, matte metallics & wood grains.',
                      icon: <Layers size={20} className="text-white" />,
                      color: 'bg-editorial-orange text-white'
                    },
                    {
                      title: 'Furniture Manufacturing',
                      page: 'homecollection',
                      desc: 'Luxury marble dining consoles, hexagonal tables & velvet chairs with gold PVD legs.',
                      icon: <Compass size={20} className="text-editorial-blue" />,
                      color: 'bg-white text-editorial-blue border border-gray-200'
                    }
                  ].map((cat, idx) => (
                    <div 
                      key={idx}
                      onClick={() => { setCurrentPage(cat.page); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className={`p-6 cursor-pointer border border-transparent transition-all duration-300 hover:border-editorial-orange hover:-translate-y-1 flex flex-col justify-between text-left h-44 shadow-sm ${cat.color}`}
                    >
                      <div className="flex justify-between items-start">
                        <h4 className="text-xs font-black uppercase tracking-tight">{cat.title}</h4>
                        <div className="p-2 bg-black/10 inline-block">
                          {cat.icon}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-[11px] opacity-90 font-serif italic leading-normal">{cat.desc}</p>
                        <span className="text-[9px] font-bold uppercase tracking-wider flex items-center space-x-1 text-editorial-orange hover:underline">
                          <span>Explore Division →</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 3: Animated Best Sellers Sliding Carousel */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 text-left space-y-6">
              <div className="space-y-1">
                <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-editorial-gray block">
                  Best Seller Selection
                </span>
                <h3 className="text-2xl sm:text-3xl font-light text-editorial-blue tracking-tight">
                  Premium B2B <span className="font-black italic text-editorial-orange">Product Slider</span>
                </h3>
              </div>
              
              <ProductCarousel
                onAddToBag={handleAddToBag}
                isInBag={(id) => bagItems.some((item) => item.id === id)}
                onQuickInquiry={handleQuickInquiry}
              />
            </section>

            {/* Section 4: Why Choose Us (B2B Highlights) */}
            <section className="bg-white py-12 border-y border-gray-200 text-left">
              <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10">
                <div className="max-w-3xl space-y-2">
                  <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-editorial-gray block">
                    Precision Advantage
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-editorial-blue">
                    Why Global Wholesalers & OEM Partners <br />
                    <span className="font-black italic text-editorial-orange">Trust Future Furnishing Industry</span>
                  </h3>
                  <p className="text-sm text-stone-600 font-serif italic leading-relaxed">
                    Buying directly from our manufacturing facility guarantees structural integrity, compliant material sourcing (such as Grade 304 anti-magnetic stainless steel), and high-efficiency thermal curing systems.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { 
                      title: 'Bespoke Sizes & Finishes', 
                      detail: 'We customize table diameters, console depths, and curing oven sizes directly from CAD drawings. You are never locked into standard specifications.' 
                    },
                    { 
                      title: 'ISTA Drop-Ship Certified', 
                      detail: 'We build customized heavy-duty export crates and perform pre-shipment drop testing to guarantee damage-free delivery of marble slabs and glass panels.' 
                    },
                    { 
                      title: 'Supervised Export Quality', 
                      detail: 'All materials, weld seams, and PVD layers undergo double-stage quality audits to meet strict standards for volume shipments to the USA and European Union.' 
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gray-50 border border-gray-200 p-6 space-y-3 hover:border-editorial-orange transition-colors">
                      <div className="w-7 h-7 bg-editorial-blue/5 border border-editorial-blue/10 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-editorial-orange font-mono">0{idx + 1}</span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xs font-black uppercase text-editorial-blue tracking-wider">{item.title}</h4>
                        <p className="text-xs text-stone-500 leading-relaxed font-serif italic">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>


            {/* Section 6: Inline B2B Inquiry Contact Form */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 text-left space-y-5">
                <div className="inline-block bg-editorial-orange text-white px-3 py-1 text-[9px] uppercase font-black tracking-widest">
                  Immediate Quotation
                </div>
                <h3 className="text-3xl font-light text-editorial-blue leading-tight">
                  Initiate a B2B <br />
                  <span className="font-black italic text-editorial-orange">RFQ Sheet</span>
                </h3>
                <p className="text-xs text-stone-500 leading-relaxed font-serif italic">
                  Have a custom manufacturing requirement or need a price quote on a conveyor plant or metallic powder batch? Fill out our corporate inquiry sheet. Product Owner Amit Tyagi will draft a preliminary estimation and shipping schedule.
                </p>

                <div className="space-y-4 border-t border-gray-200 pt-6">
                  <div className="flex items-start space-x-3 text-xs text-stone-500">
                    <MapPin className="text-editorial-orange shrink-0 mt-0.5" size={16} />
                    <div>
                      <strong className="text-editorial-blue font-black uppercase text-[10px] tracking-widest block">Corporate Unit:</strong>
                      <span className="mt-1 block leading-normal">D-329, Sector 63, Noida, Uttar Pradesh - 201301, India</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <ContactForm themeMode={themeMode} />
              </div>
            </section>
          </div>
        )}

        {/* 2. COMPANY PAGE (ABOUT US) */}
        {currentPage === 'company' && (
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 text-left space-y-16 animate-fadeIn">
            {/* Page Header */}
            <div className="space-y-2 border-b border-gray-200 pb-8">
              <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-editorial-gray block">Manufacturing Authority</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-editorial-blue leading-tight">
                Corporate Profile <br />
                <span className="font-black italic">& Facility Overview</span>
              </h2>
              <p className="text-sm text-stone-500 font-serif italic max-w-2xl pt-1">
                Operating a state-of-the-art 20,000 SQFT plant with automated electroplating, welding, and CNC profiling bays.
              </p>
            </div>

            {/* Story & History Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-5">
                <h3 className="text-lg font-black uppercase text-editorial-blue tracking-tight">Our Manufacturing Story</h3>
                <p className="text-xs text-stone-500 leading-relaxed font-serif italic">
                  Future Furnishing Industry was established to address the gap in direct, high-quality, customized industrial machinery and luxury metal furniture. Guided by a core leadership team, we have evolved from a regional welding plant into a premium certified exporter supplying custom products to the United States and the European Union.
                </p>
                <p className="text-xs text-stone-500 leading-relaxed font-serif italic">
                  By nesting our CNC metal engineering center and dry powder coatings lab inside a single unified facility, we minimize freight overheads and control precision tolerances. Whether you require standard colors or specialty antiques (like Golden Pink or Sparkling Silver), our plant is equipped to manufacture it to exact specifications.
                </p>

                {/* Mission & Vision cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="bg-white p-5 border border-gray-200 space-y-2">
                    <h4 className="text-[10px] font-bold text-editorial-orange uppercase tracking-widest font-mono">Our Mission</h4>
                    <p className="text-xs text-stone-500 font-serif italic leading-relaxed">
                      To engineer robust and energy-efficient finishing systems and construct luxury lifestyle elements that surpass global aesthetic and drop-ship safety criteria.
                    </p>
                  </div>
                  <div className="bg-white p-5 border border-gray-200 space-y-2">
                    <h4 className="text-[10px] font-bold text-editorial-orange uppercase tracking-widest font-mono">Our Vision</h4>
                    <p className="text-xs text-stone-500 font-serif italic leading-relaxed">
                      To be a premier, highly reliable B2B supplier of industrial plant assets and vacuum-plated designer furniture across the Americas and European Union.
                    </p>
                  </div>
                </div>
              </div>

              {/* Large Factory Image Card */}
              <div className="lg:col-span-6 relative border border-gray-200 overflow-hidden aspect-16/9 bg-editorial-blue">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" 
                  alt="Industrial robotic welding" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-40 scale-102 hover:scale-100 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-editorial-blue/90 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white space-y-1">
                  <span className="bg-editorial-orange text-white px-2.5 py-1 text-[9px] uppercase font-black tracking-widest">
                    In-House Plant
                  </span>
                  <h4 className="text-xs font-black uppercase tracking-widest pt-1.5">20,000 SQFT Factory Area</h4>
                </div>
              </div>
            </div>

            {/* Facility Specs & Capacity Section */}
            <StatsSection themeMode={themeMode} />

            {/* Strategic Validation / B2B Client Testimonials */}
            <div className="space-y-12 border-t border-gray-200 pt-16">
              <div className="max-w-3xl space-y-3">
                <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-editorial-gray block">
                  Strategic Validation
                </span>
                <h3 className="text-3xl font-light tracking-tight text-editorial-blue">
                  What Our Wholesale <span className="font-black italic text-editorial-orange font-bold">Partners Say</span>
                </h3>
                <p className="text-xs text-stone-500 leading-relaxed">
                  We maintain lifelong corporate relationships with international importers, retail furniture chains, and industrial spray shops. Here is how we deliver value:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    quote: "The automated powder coating plant manufactured by Future Furnishing Industry has significantly optimized our paint line. Their engineering team customized the overhead conveyor layout to perfectly fit our factory footprint.",
                    author: "Senior Procurement Director",
                    company: "Hariz Hous Ltd (USA)",
                    highlight: "Custom Oven Customization"
                  },
                  {
                    quote: "We import multiple containers of the PVD Gold and Rose Gold nesting consoles monthly. The Physical Vapor Deposition mirror plating is completely scratch-proof, and their custom ISTA-3A drop-ship packaging is absolutely brilliant.",
                    author: "Head Sourcing Specialist",
                    company: "Oliver Home Decor (EU)",
                    highlight: "100% Transit Protection"
                  },
                  {
                    quote: "Amit Tyagi and the engineering team managed our design requirements with flawless precision. They matched our strict custom dimensions and finish requests on-the-fly, serving as a highly responsive B2B supplier.",
                    author: "Lead Architect",
                    company: "Primavara Interiors",
                    highlight: "Direct Manufacturer Support"
                  }
                ].map((testimonial, idx) => (
                  <div key={idx} className="bg-gray-50 border border-gray-200 p-8 flex flex-col justify-between space-y-6 hover:border-editorial-orange transition-colors">
                    <p className="text-xs text-stone-600 leading-relaxed font-serif italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="space-y-2 border-t border-gray-200 pt-4">
                      <span className="px-2 py-0.5 bg-editorial-orange/15 text-editorial-orange text-[8px] font-bold font-mono uppercase tracking-wider inline-block">
                        {testimonial.highlight}
                      </span>
                      <div>
                        <h4 className="text-xs font-black uppercase text-editorial-blue">{testimonial.author}</h4>
                        <p className="text-[10px] text-stone-400 font-bold">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* HR Note */}
            <div className="p-8 bg-white border border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <div className="text-left space-y-1">
                <h4 className="text-xs font-black uppercase text-editorial-blue tracking-widest">Interested in Joining Future Furnishing Industry?</h4>
                <p className="text-xs text-stone-500 font-serif italic">We are actively seeking experienced CNC operators, powder-baking technicians, and furniture upholstery masters.</p>
              </div>
              <button
                onClick={() => { setCurrentPage('inquiry'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="px-6 py-3 bg-editorial-blue hover:bg-editorial-orange text-white font-bold uppercase text-[10px] tracking-widest transition-colors shrink-0"
              >
                Apply for Careers
              </button>
            </div>
          </div>
        )}

        {/* 3. FINISHING SYSTEMS PAGE */}
        {currentPage === 'finishing' && (
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 text-left space-y-12 animate-fadeIn">
            {/* Page Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-gray-200 pb-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-editorial-gray block font-mono">Division I</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-editorial-blue leading-none">
                  Powder Coating <span className="font-black italic text-editorial-orange">Machines</span>
                </h2>
                <p className="text-sm text-stone-600 font-serif italic leading-relaxed">
                  Heavy-duty manual & automatic powder coating booths, forced air curing ovens, automated reciprocators, and continuous conveyor plant lines. Engineered and manufactured inside our Noida Sector 63 facility.
                </p>
                <div className="flex flex-wrap gap-2.5 pt-1">
                  <span className="bg-editorial-blue/5 text-editorial-blue text-[10px] font-bold font-mono px-3 py-1 border border-editorial-blue/10">
                    Noida Unit: 20,000 SQFT
                  </span>
                  <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold font-mono px-3 py-1 border border-emerald-100">
                    Export Standard (USA/EU)
                  </span>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="border border-gray-200 p-2 bg-white shadow-sm hover:border-editorial-orange transition-all duration-300 group relative">
                  <div className="aspect-16/10 bg-stone-100 overflow-hidden relative">
                    <img 
                      src="/images/product_with_logo/machine-1.jpeg"
                      alt="Gema Automatic Powder Coating Plant" 
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <span className="absolute bottom-3 left-3 bg-editorial-orange text-white text-[9px] uppercase font-black tracking-widest px-2.5 py-1">
                      Noida Factory Live Unit
                    </span>
                  </div>
                  <div className="pt-2.5 px-1.5 flex justify-between items-center text-[10px] text-stone-500">
                    <span className="font-mono">Gema Automatic Plant Line</span>
                    <span className="text-editorial-orange font-bold font-mono uppercase tracking-wider">Unit-I Active</span>
                  </div>
                </div>
              </div>
            </div>


            {/* Search and Filters Bar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 border border-gray-200">
              <div className="flex flex-wrap gap-2">
                {['All', 'Machinery', 'Accessories', 'Wooden Planks', 'Videos'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedSubcategory(tab)}
                    className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all ${
                      selectedSubcategory === tab
                        ? 'bg-editorial-orange text-white'
                        : 'bg-white border border-gray-200 text-stone-600 hover:bg-gray-100'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Search input field */}
              <div className="relative w-full md:w-72">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-stone-400">
                  <Search size={14} />
                </span>
                <input
                  type="text"
                  placeholder="Search machinery & specs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-editorial-orange focus:outline-none transition-colors"
                />
              </div>
            </div>

          {/* Products grid */}
{selectedSubcategory === 'All' ? (
  <div className="space-y-14">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredFinishing.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToBag={handleAddToBag}
          isInBag={bagItems.some((item) => item.id === product.id)}
          themeMode={themeMode}
          onQuickInquiry={handleQuickInquiry}
        />
      ))}
    </div>
    
  </div>
) : selectedSubcategory === 'Videos' ? (
  videosSection
) : selectedSubcategory === 'Wooden Planks' ? (
  woodenPlanksSection
) : filteredFinishing.length === 0 ? (
  <div className="text-center py-20 bg-white border border-gray-200">
    <Package size={28} className="text-stone-300 mx-auto mb-3" />
    <h4 className="text-sm font-bold text-stone-700">No items matching current filters</h4>
    <p className="text-xs text-stone-400 mt-1">Try selecting another filter category or resetting search query.</p>
  </div>
) : (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {filteredFinishing.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
        onAddToBag={handleAddToBag}
        isInBag={bagItems.some((item) => item.id === product.id)}
        themeMode={themeMode}
        onQuickInquiry={handleQuickInquiry}
      />
    ))}
  </div>
)}

            {/* Custom order guidance */}
            <div className="bg-editorial-blue text-white p-8 lg:p-12 relative overflow-hidden border border-gray-200">
              <div className="relative z-10 max-w-3xl space-y-4">
                <span className="text-[10px] uppercase tracking-widest font-black text-editorial-orange">Custom Engineering Request</span>
                <h3 className="text-2xl sm:text-3xl font-light leading-tight">Need a Fully Customized <br /><span className="font-black italic text-white">Turnkey Coating Facility?</span></h3>
                <p className="text-xs text-gray-300 leading-relaxed font-serif italic">
                  Every manufacturing line has unique workspace layouts, overhead clearances, and electrical limits. Future Furnishing Industry specializes in engineering custom tunnel structures, choosing specific heating sources (diesel burner vs electric elements), and programming customized reciprocator stroke profiles.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <button
                    onClick={() => { setCurrentPage('inquiry'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="bg-editorial-orange text-white px-5 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-editorial-blue transition-colors shadow-md"
                  >
                    Request Custom Engineering Consultation
                  </button>
                  <button
                    onClick={() => handleDownloadCatalog('Industrial Finishing & Advanced Coating Solutions')}
                    className="border border-white/20 bg-white/10 text-white px-5 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-editorial-orange transition-colors"
                  >
                    Download PDF Specs Catalogue
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. COATING GALLERY PAGE */}
        {currentPage === 'coating' && (
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 text-left space-y-12 animate-fadeIn">
            {/* Page Header */}
            <div className="space-y-2 border-b border-gray-200 pb-8">
              <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-editorial-gray block">Division II</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-editorial-blue leading-none pt-1">
                Powder Coating <span className="font-black italic">Powder</span>
              </h2>
              <p className="text-sm text-stone-500 font-serif italic max-w-2xl pt-2">
                Displaying our premium dry powder color cards, custom antiques, heavy metallics, and heat-sublimated wooden grain solutions.
              </p>
            </div>

            {/* Interactive shades display */}
            <ColorGrid
              products={PRODUCTS}
              onAddToBag={handleAddToBag}
              bagItemIds={bagItems.map((item) => item.id)}
              themeMode={themeMode}
            />
          </div>
        )}

        {/* 5. THE HOME COLLECTION PAGE */}
        {currentPage === 'homecollection' && (
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 text-left space-y-12 animate-fadeIn">
            {/* Page Header */}
            <div className="space-y-4 border-b border-gray-200 pb-8">
              <div>
                <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-editorial-gray block">Division III</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-editorial-blue leading-none pt-1">
                  Furniture <span className="font-black italic">Manufacturing</span>
                </h2>
                <p className="text-sm text-stone-700 font-serif italic max-w-3xl pt-2 leading-relaxed">
                  We are very happy to introduce you our company, <strong className="text-stone-900 not-italic uppercase font-sans tracking-wider text-[11px] px-1.5 py-0.5 bg-stone-100 border border-stone-200">The Home Collection</strong> located in <strong className="text-stone-900 not-italic font-sans">Noida Sector 63, India</strong>, specialized in manufacturing of high-end Handicrafts, Tableware, Kitchenware, Furniture, Home Decor, and PVD vacuum-coated luxury hardware.
                </p>
              </div>
            </div>

            {/* Search and Filters Bar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 border border-gray-200">
              <div className="flex flex-wrap gap-2">
                {[
                  'All',
                  'Dining Tables',
                  'PVD Coated Dining',
                  'Coffee Tables',
                  'Side & Console Tables',
                  'Chairs with PVD Legs',
                  'Trending Series',
                  'Home Collection'
                ].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedSubcategory(tab)}
                    className={`px-3 py-2 text-[10px] font-bold uppercase tracking-widest transition-all ${
                      selectedSubcategory === tab
                        ? 'bg-editorial-orange text-white'
                        : 'bg-white border border-gray-200 text-stone-600 hover:bg-gray-100'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Search input field */}
              <div className="relative w-full md:w-72">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-stone-400">
                  <Search size={14} />
                </span>
                <input
                  type="text"
                  placeholder="Search furniture & materials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-editorial-orange focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Customization Tagline notice */}
            <div className="p-6 bg-white border-l-4 border-editorial-orange space-y-1 text-left border-y border-r border-gray-200">
              <h4 className="text-xs font-black uppercase text-editorial-blue tracking-widest">Bespoke OEM Customization Guarantee</h4>
              <p className="text-sm text-stone-700 font-serif italic mt-1 leading-relaxed">
                "Sizes and finishes (Gold/Rose Gold) customized to customer demand as a direct manufacturer."
              </p>
              <p className="text-xs text-stone-500 mt-1">
                Because we manufacture all bases in-house using CNC laser profiles, spot welding, and buffing stations, you are not locked into standard heights or diameters. Request any custom specification.
              </p>
            </div>

            {/* Products grid */}
            {filteredHome.length === 0 ? (
              <div className="text-center py-20 bg-white border border-gray-200">
                <Package size={28} className="text-stone-300 mx-auto mb-3" />
                <h4 className="text-sm font-bold text-stone-700">No furniture pieces matching current filters</h4>
                <p className="text-xs text-stone-400 mt-1">Try selecting another filter category or resetting search query.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredHome.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToBag={handleAddToBag}
                    isInBag={bagItems.some((item) => item.id === product.id)}
                    themeMode={themeMode}
                    onQuickInquiry={handleQuickInquiry}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* 6. INQUIRY & PORTAL PAGE */}
        {currentPage === 'inquiry' && (
          <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 text-left space-y-12 animate-fadeIn">
            {/* Page Header */}
            <div className="space-y-2 border-b border-gray-200 pb-8 text-center sm:text-left">
              <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-editorial-gray block">Trade Portal</span>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-editorial-blue leading-tight pt-1">
                Corporate B2B Trade <br />
                <span className="font-black italic">& Careers Portal</span>
              </h2>
              <p className="text-sm text-stone-500 font-serif italic pt-1 max-w-2xl">
                Submit bulk price inquiries, apply to become a registered hardware dealer, or upload your resume for active engineering vacancies.
              </p>
            </div>

            {/* Multi-Tab inquiry selectors */}
            <div className="flex flex-col sm:flex-row border-b border-gray-200">
              {[
                { id: 'rfq', label: 'Submit Corporate RFQ' },
                { id: 'dealer', label: 'Dealer Registration Program' },
                { id: 'career', label: 'Careers Page' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedSubcategory(tab.id)}
                  className={`py-4 px-6 text-[10px] font-bold uppercase tracking-widest border-b-2 transition-all ${
                    (selectedSubcategory === tab.id || (selectedSubcategory === 'All' && tab.id === 'rfq'))
                      ? 'border-editorial-orange text-editorial-blue font-black bg-white'
                      : 'border-transparent text-stone-400 hover:text-stone-600'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Active Forms */}
            {(selectedSubcategory === 'rfq' || selectedSubcategory === 'All') && (
              <div className="space-y-6">
                <div className="text-left">
                  <h3 className="text-base font-black uppercase text-editorial-blue tracking-tight">Request Technical Bid & Quotation</h3>
                  <p className="text-xs text-stone-500 mt-1 font-serif italic">Our sales desk will evaluate your sheet details and issue formal corporate quotes with custom container lead-times.</p>
                </div>
                <ContactForm themeMode={themeMode} />
              </div>
            )}

            {selectedSubcategory === 'dealer' && (
              <div className="space-y-6">
                <div className="text-left">
                  <h3 className="text-base font-black uppercase text-editorial-blue tracking-tight">Become an Authorized Future Furnishing Dealer</h3>
                  <p className="text-xs text-stone-500 mt-1 font-serif italic">Expand your business catalog with certified dry powder coatings and PVD-coated luxury hardware elements.</p>
                </div>
                <DealerRegistrationForm themeMode={themeMode} />
              </div>
            )}

            {selectedSubcategory === 'career' && (
              <div className="space-y-6">
                <div className="text-left">
                  <h3 className="text-base font-black uppercase text-editorial-blue tracking-tight">Join Our High-Precision Manufacturing Team</h3>
                  <p className="text-xs text-stone-500 mt-1 font-serif italic">Specify your metalworking experience, TIG welding qualifications, or drafting competencies and upload your resume file.</p>
                </div>
                <CareerForm themeMode={themeMode} />
              </div>
            )}
          </div>
        )}
      </main>

      {/* Inquiry bag drawer */}
      <InquiryBag
        isOpen={isInquiryBagOpen}
        onClose={() => setIsInquiryBagOpen(false)}
        bagItems={bagItems}
        onRemoveItem={handleRemoveItem}
        onClearBag={handleClearBag}
        themeMode={themeMode}
      />

      {/* Corporate footer */}
      <Footer
        setCurrentPage={setCurrentPage}
        themeMode={themeMode}
        onDownloadCatalog={handleDownloadCatalog}
      />
      <WhatsAppButton />
    </div>
  );
}
