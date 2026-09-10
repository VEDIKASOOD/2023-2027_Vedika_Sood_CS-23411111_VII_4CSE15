// Interactive high-fidelity SVG illustration of the Gema Automatic Powder Coating Plant
const SVG_CODE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 650" width="100%" height="100%">
  <!-- Definitions for gradients and patterns -->
  <defs>
    <!-- Background wall panel gradient -->
    <linearGradient id="wallGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc" />
      <stop offset="100%" stop-color="#e2e8f0" />
    </linearGradient>
    
    <!-- Floor gradient -->
    <linearGradient id="floorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#cbd5e1" />
      <stop offset="100%" stop-color="#94a3b8" />
    </linearGradient>
    
    <!-- Oven metal texture gradient -->
    <linearGradient id="ovenMetal" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#e2e8f0" />
      <stop offset="30%" stop-color="#ffffff" />
      <stop offset="70%" stop-color="#cbd5e1" />
      <stop offset="100%" stop-color="#94a3b8" />
    </linearGradient>
    
    <!-- Yellow cabin panel gradient -->
    <linearGradient id="gemaYellow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#fbbf24" />
      <stop offset="40%" stop-color="#fcd34d" />
      <stop offset="100%" stop-color="#d97706" />
    </linearGradient>
    
    <!-- Dark metal/iron gradient -->
    <linearGradient id="darkMetal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4b5563" />
      <stop offset="100%" stop-color="#1f2937" />
    </linearGradient>
    
    <!-- Powder spray radial gradient -->
    <radialGradient id="powderSpray" cx="100%" cy="50%" r="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9" />
      <stop offset="40%" stop-color="#bfdbfe" stop-opacity="0.6" />
      <stop offset="80%" stop-color="#60a5fa" stop-opacity="0.2" />
      <stop offset="100%" stop-color="#3b82f6" stop-opacity="0" />
    </radialGradient>
    
    <!-- Subtle drop shadow -->
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="2" dy="5" stdDeviation="4" flood-opacity="0.25"/>
    </filter>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Cleanroom Wall Background -->
  <rect width="1000" height="480" fill="url(#wallGrad)" />
  
  <!-- Cleanroom Wall panel lines (vertical seams) -->
  <line x1="150" y1="0" x2="150" y2="480" stroke="#cbd5e1" stroke-width="1.5" />
  <line x1="350" y1="0" x2="350" y2="480" stroke="#cbd5e1" stroke-width="1.5" />
  <line x1="550" y1="0" x2="550" y2="480" stroke="#cbd5e1" stroke-width="1.5" />
  <line x1="750" y1="0" x2="750" y2="480" stroke="#cbd5e1" stroke-width="1.5" />
  <line x1="950" y1="0" x2="950" y2="480" stroke="#cbd5e1" stroke-width="1.5" />
  
  <!-- Cleanroom Wall baseboard seam -->
  <line x1="0" y1="480" x2="1000" y2="480" stroke="#94a3b8" stroke-width="3" />

  <!-- Concrete floor -->
  <rect y="480" width="1000" height="170" fill="url(#floorGrad)" />

  <!-- Bright square ceiling LED light panels -->
  <g opacity="0.9">
    <rect x="200" y="15" width="100" height="25" fill="#ffffff" rx="3" filter="url(#glow)" />
    <rect x="500" y="15" width="100" height="25" fill="#ffffff" rx="3" filter="url(#glow)" />
    <rect x="800" y="15" width="100" height="25" fill="#ffffff" rx="3" filter="url(#glow)" />
  </g>

  <!-- Overhead Truss Structure (Yellow/Grey Steel Gantry) -->
  <g stroke="#64748b" stroke-width="4" fill="none" stroke-linejoin="round">
    <!-- Main horizontal beams of the gantry truss -->
    <line x1="350" y1="110" x2="900" y2="110" />
    <line x1="350" y1="70" x2="900" y2="70" />
    <!-- Vertical columns supporting gantry -->
    <line x1="380" y1="70" x2="380" y2="520" stroke="#475569" stroke-width="6" />
    <line x1="880" y1="70" x2="880" y2="520" stroke="#475569" stroke-width="6" />
    <!-- Truss internal triangulation webs -->
    <path d="M380,110 L420,70 L460,110 L500,70 L540,110 L580,70 L620,110 L660,70 L700,110 L740,70 L780,110 L820,70 L860,110 L880,70" stroke-width="2.5" />
  </g>

  <!-- Massive Central Powder-Coating Oven and Spray Tunnel -->
  <!-- Back Oven wall / Continuous chamber -->
  <rect x="400" y="150" width="450" height="350" fill="url(#ovenMetal)" stroke="#475569" stroke-width="4" filter="url(#shadow)" />
  
  <!-- Oven panel line vertical dividers -->
  <line x1="470" y1="150" x2="470" y2="500" stroke="#94a3b8" stroke-width="2" />
  <line x1="540" y1="150" x2="540" y2="500" stroke="#94a3b8" stroke-width="2" />
  <line x1="610" y1="150" x2="610" y2="500" stroke="#94a3b8" stroke-width="2" />
  <line x1="680" y1="150" x2="680" y2="500" stroke="#94a3b8" stroke-width="2" />
  <line x1="750" y1="150" x2="750" y2="500" stroke="#94a3b8" stroke-width="2" />

  <!-- Distinct safety yellow vertical columns & framing panels (Gema color) -->
  <rect x="480" y="150" width="50" height="350" fill="url(#gemaYellow)" filter="url(#shadow)" />
  <rect x="740" y="150" width="50" height="350" fill="url(#gemaYellow)" filter="url(#shadow)" />
  <!-- Horizontal yellow crown element -->
  <rect x="400" y="135" width="450" height="20" fill="url(#gemaYellow)" filter="url(#shadow)" />

  <!-- Inside tunnel opening shadows (dark depth inside the chamber) -->
  <rect x="420" y="200" width="50" height="280" fill="#1e293b" />
  <rect x="540" y="200" width="190" height="280" fill="#0f172a" />

  <!-- Reciprocator & Spray Guns on the right (yellow columns, spray arms, etc.) -->
  <!-- Main vertical carriage track column -->
  <rect x="760" y="170" width="30" height="310" fill="#334155" rx="3" />
  <rect x="750" y="230" width="50" height="190" fill="url(#gemaYellow)" rx="4" filter="url(#shadow)" />
  
  <!-- "Gema" Logo branding text on the reciprocator panel -->
  <text x="754" y="325" fill="#e11d48" font-size="13" font-weight="900" font-family="sans-serif" letter-spacing="0.5">Gema</text>
  
  <!-- Automatic Horizontal Spray Gun Arms -->
  <g stroke="#64748b" stroke-width="6" fill="none">
    <!-- Top Gun -->
    <line x1="650" y1="270" x2="755" y2="270" />
    <!-- Middle Gun -->
    <line x1="650" y1="310" x2="755" y2="310" />
    <!-- Bottom Gun -->
    <line x1="650" y1="350" x2="755" y2="350" />
  </g>
  
  <!-- Red spray nozzles at ends -->
  <rect x="640" y="265" width="12" height="10" fill="#e11d48" rx="1" />
  <rect x="640" y="305" width="12" height="10" fill="#e11d48" rx="1" />
  <rect x="640" y="345" width="12" height="10" fill="#e11d48" rx="1" />

  <!-- Black hoses/feed cables trailing beautifully -->
  <path d="M755,270 C790,280 825,300 810,390" stroke="#0f172a" stroke-width="3" fill="none" opacity="0.8" />
  <path d="M755,310 C790,320 825,340 810,400" stroke="#0f172a" stroke-width="3" fill="none" opacity="0.8" />
  <path d="M755,350 C790,360 825,380 810,410" stroke="#0f172a" stroke-width="3" fill="none" opacity="0.8" />

  <!-- Electrostatic Powder Spray clouds blowing into the booth -->
  <path d="M640,270 L520,240 A 45,45 0 0,0 520,300 Z" fill="url(#powderSpray)" opacity="0.65" />
  <path d="M640,310 L520,280 A 45,45 0 0,0 520,340 Z" fill="url(#powderSpray)" opacity="0.65" />
  <path d="M640,350 L520,320 A 45,45 0 0,0 520,380 Z" fill="url(#powderSpray)" opacity="0.65" />

  <!-- Overhead Conveyor Rail Loop on the left -->
  <g filter="url(#shadow)">
    <!-- Yellow track suspension brackets -->
    <rect x="80" y="90" width="15" height="130" fill="url(#gemaYellow)" />
    <rect x="220" y="90" width="15" height="130" fill="url(#gemaYellow)" />
    <rect x="360" y="90" width="15" height="130" fill="url(#gemaYellow)" />
    
    <!-- Main I-Beam Conveyor rail -->
    <rect x="0" y="200" width="450" height="20" fill="url(#darkMetal)" />
    <rect x="0" y="203" width="450" height="4" fill="#94a3b8" />
  </g>

  <!-- Trolleys, Hooks, and Hanging Metal Coiled Springs (matching user photo) -->
  <!-- Trolley 1 -->
  <g transform="translate(60, 210)">
    <circle cx="0" cy="0" r="4" fill="#1e293b" />
    <line x1="0" y1="0" x2="0" y2="45" stroke="#475569" stroke-width="3" />
    <path d="M-6,45 L6,45 L0,55 Z" fill="#334155" />
    <!-- Hanging Hooks -->
    <path d="M0,55 Q -12,80 0,110" stroke="#94a3b8" stroke-width="2" fill="none" />
    <!-- Coiled springs (the products being coated) -->
    <path d="M0,110 C-15,120 -15,130 0,140 C15,150 15,160 0,170 C-15,180 -15,190 0,200 C15,210 15,220 0,230" stroke="#475569" stroke-width="4" fill="none" />
    <path d="M0,110 C-15,120 -15,130 0,140 C15,150 15,160 0,170 C-15,180 -15,190 0,200 C15,210 15,220 0,230" stroke="#cbd5e1" stroke-width="2" fill="none" />
  </g>

  <!-- Trolley 2 -->
  <g transform="translate(140, 210)">
    <circle cx="0" cy="0" r="4" fill="#1e293b" />
    <line x1="0" y1="0" x2="0" y2="45" stroke="#475569" stroke-width="3" />
    <path d="M-6,45 L6,45 L0,55 Z" fill="#334155" />
    <!-- Hanging Hooks -->
    <path d="M0,55 Q -12,80 0,110" stroke="#94a3b8" stroke-width="2" fill="none" />
    <!-- Coiled springs -->
    <path d="M0,110 C-15,120 -15,130 0,140 C15,150 15,160 0,170 C-15,180 -15,190 0,200 C15,210 15,220 0,230" stroke="#475569" stroke-width="4" fill="none" />
    <path d="M0,110 C-15,120 -15,130 0,140 C15,150 15,160 0,170 C-15,180 -15,190 0,200 C15,210 15,220 0,230" stroke="#cbd5e1" stroke-width="2" fill="none" />
  </g>

  <!-- Trolley 3 -->
  <g transform="translate(220, 210)">
    <circle cx="0" cy="0" r="4" fill="#1e293b" />
    <line x1="0" y1="0" x2="0" y2="45" stroke="#475569" stroke-width="3" />
    <path d="M-6,45 L6,45 L0,55 Z" fill="#334155" />
    <!-- Hanging Hooks -->
    <path d="M0,55 Q -12,80 0,110" stroke="#94a3b8" stroke-width="2" fill="none" />
    <!-- Coiled springs -->
    <path d="M0,110 C-15,120 -15,130 0,140 C15,150 15,160 0,170 C-15,180 -15,190 0,200 C15,210 15,220 0,230" stroke="#475569" stroke-width="4" fill="none" />
    <path d="M0,110 C-15,120 -15,130 0,140 C15,150 15,160 0,170 C-15,180 -15,190 0,200 C15,210 15,220 0,230" stroke="#cbd5e1" stroke-width="2" fill="none" />
  </g>

  <!-- Trolley 4 -->
  <g transform="translate(300, 210)">
    <circle cx="0" cy="0" r="4" fill="#1e293b" />
    <line x1="0" y1="0" x2="0" y2="45" stroke="#475569" stroke-width="3" />
    <path d="M-6,45 L6,45 L0,55 Z" fill="#334155" />
    <!-- Hanging Hooks -->
    <path d="M0,55 Q -12,80 0,110" stroke="#94a3b8" stroke-width="2" fill="none" />
    <!-- Coiled springs -->
    <path d="M0,110 C-15,120 -15,130 0,140 C15,150 15,160 0,170 C-15,180 -15,190 0,200 C15,210 15,220 0,230" stroke="#475569" stroke-width="4" fill="none" />
    <path d="M0,110 C-15,120 -15,130 0,140 C15,150 15,160 0,170 C-15,180 -15,190 0,200 C15,210 15,220 0,230" stroke="#cbd5e1" stroke-width="2" fill="none" />
  </g>

  <!-- Auxiliary Mobile Gun Stand on the floor (left foreground) -->
  <g transform="translate(230, 420)">
    <!-- Main base cart -->
    <rect x="-25" y="80" width="50" height="15" fill="#334155" rx="2" />
    <!-- Cart wheels -->
    <circle cx="-18" cy="95" r="8" fill="#0f172a" />
    <circle cx="18" cy="95" r="8" fill="#0f172a" />
    <!-- Vertical stand pole -->
    <rect x="-4" y="0" width="8" height="80" fill="#94a3b8" />
    <!-- Mobile unit spray gun -->
    <rect x="-30" y="10" width="26" height="8" fill="#e11d48" rx="1" />
    <!-- Flexible black cable to stand -->
    <path d="M-30,14 C-50,20 -60,60 -25,80" stroke="#0f172a" stroke-width="2.5" fill="none" />
  </g>

  <!-- Yellow-and-Black Hazard Floor Warning Stripe Line -->
  <g transform="translate(50, 570)">
    <rect x="0" y="0" width="900" height="20" fill="#fbbf24" />
    <!-- Stripe pattern of black diagonal marks -->
    <path d="M0,20 L20,0 M40,20 L60,0 M80,20 L100,0 M120,20 L140,0 M160,20 L180,0 M200,20 L220,0 M240,20 L260,0 M280,20 L300,0 M320,20 L340,0 M360,20 L380,0 M400,20 L420,0 M440,20 L460,0 M480,20 L500,0 M520,20 L540,0 M560,20 L580,0 M600,20 L620,0 M640,20 L660,0 M680,20 L700,0 M720,20 L740,0 M760,20 L780,0 M800,20 L820,0 M840,20 L860,0 M880,20 L900,0" stroke="#0f172a" stroke-width="12" />
  </g>

  <!-- Clean, professional watermark text -->
  <text x="50" y="620" fill="#475569" font-family="monospace" font-size="12" font-weight="bold" opacity="0.6" letter-spacing="1">FUTURE FURNISHING INDUSTRY | AUTOMATIC POWDER COATING PLANT</text>
</svg>`;

export const AUTOMATIC_POWDER_COATING_PLANT_IMAGE = '/automatic-powder-coating-plant.jpg';
export const AUTOMATIC_POWDER_COATING_PLANT_SVG_IMAGE = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(SVG_CODE)));

// Interactive high-fidelity SVG illustration of the Electron Manual Powder Coating Booth with Platform, Stairs, and Cyclone
const MANUAL_BOOTH_SVG_CODE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 650" width="100%" height="100%">
  <!-- Definitions for gradients and filters -->
  <defs>
    <!-- Background wall panel gradient -->
    <linearGradient id="wallGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f1f5f9" />
      <stop offset="100%" stop-color="#cbd5e1" />
    </linearGradient>
    
    <!-- Floor gradient -->
    <linearGradient id="floorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#94a3b8" />
      <stop offset="100%" stop-color="#475569" />
    </linearGradient>
    
    <!-- Metal texture gradient -->
    <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#cbd5e1" />
      <stop offset="35%" stop-color="#f8fafc" />
      <stop offset="75%" stop-color="#94a3b8" />
      <stop offset="100%" stop-color="#475569" />
    </linearGradient>

    <!-- Dark steel gradient -->
    <linearGradient id="darkSteel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#475569" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>

    <!-- Electron brand Orange gradient -->
    <linearGradient id="electronOrange" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f97316" />
      <stop offset="100%" stop-color="#c2410c" />
    </linearGradient>

    <!-- Powder spray cloud radial gradient -->
    <radialGradient id="sprayMist" cx="0%" cy="50%" r="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9" />
      <stop offset="30%" stop-color="#fdba74" stop-opacity="0.6" />
      <stop offset="70%" stop-color="#38bdf8" stop-opacity="0.2" />
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0" />
    </radialGradient>
    
    <!-- Soft shadow filter -->
    <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="3" dy="6" stdDeviation="5" flood-color="#0f172a" flood-opacity="0.35"/>
    </filter>
    <filter id="lightGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Cleanroom Wall Background -->
  <rect width="1000" height="460" fill="url(#wallGrad)" />
  
  <!-- Wall panel seams -->
  <line x1="200" y1="0" x2="200" y2="460" stroke="#94a3b8" stroke-width="1" />
  <line x1="400" y1="0" x2="400" y2="460" stroke="#94a3b8" stroke-width="1" />
  <line x1="600" y1="0" x2="600" y2="460" stroke="#94a3b8" stroke-width="1" />
  <line x1="800" y1="0" x2="800" y2="460" stroke="#94a3b8" stroke-width="1" />

  <!-- Polished concrete floor -->
  <rect y="460" width="1000" height="190" fill="url(#floorGrad)" />

  <!-- Overhead structural trusses & orange gantry -->
  <g stroke="url(#electronOrange)" stroke-width="4.5" fill="none" stroke-linejoin="round">
    <line x1="100" y1="60" x2="900" y2="60" />
    <line x1="100" y1="95" x2="900" y2="95" />
    <path d="M100,95 L140,60 L180,95 L220,60 L260,95 L300,60 L340,95 L380,60 L420,95 L460,60 L500,95 L540,60 L580,95 L620,60 L660,95 L700,60 L740,95 L780,60 L820,95 L860,60 L900,95" stroke-width="2.5" />
  </g>
  <line x1="150" y1="60" x2="150" y2="460" stroke="#475569" stroke-width="5" />
  <line x1="850" y1="60" x2="850" y2="460" stroke="#475569" stroke-width="5" />

  <!-- Linear LED lighting strips -->
  <rect x="250" y="15" width="150" height="15" fill="#ffffff" rx="2" filter="url(#lightGlow)" />
  <rect x="600" y="15" width="150" height="15" fill="#ffffff" rx="2" filter="url(#lightGlow)" />

  <!-- 1. The Powder Coating Spray Booth (Left/Center) -->
  <rect x="150" y="140" width="450" height="320" fill="#f8fafc" stroke="#64748b" stroke-width="3" filter="url(#softShadow)" />
  
  <!-- Outer Booth details & vertical panel lines -->
  <line x1="262" y1="140" x2="262" y2="460" stroke="#cbd5e1" stroke-width="1.5" />
  <line x1="375" y1="140" x2="375" y2="460" stroke="#cbd5e1" stroke-width="1.5" />
  <line x1="487" y1="140" x2="487" y2="460" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Inside Booth Cut-out (Open front) -->
  <rect x="180" y="170" width="390" height="290" fill="#1e293b" />
  
  <!-- Overspray color mist inside (simulating active powder coating environment) -->
  <ellipse cx="375" cy="300" rx="140" ry="90" fill="url(#sprayMist)" opacity="0.4" />
  
  <!-- Conveyor rail running through the booth -->
  <rect x="120" y="195" width="510" height="15" fill="url(#darkSteel)" />
  <rect x="120" y="199" width="510" height="3" fill="#cbd5e1" />
  
  <!-- Hanger hooks inside -->
  <path d="M220,210 L220,240 Q 215,250 220,260" stroke="#94a3b8" stroke-width="2.5" fill="none" />
  <path d="M340,210 L340,240 Q 335,250 340,260" stroke="#94a3b8" stroke-width="2.5" fill="none" />
  <path d="M460,210 L460,240 Q 455,250 460,260" stroke="#94a3b8" stroke-width="2.5" fill="none" />

  <!-- 2. Large Cyclone Powder Recovery System (Far Right) -->
  <g filter="url(#softShadow)">
    <!-- Cyclone Main Cylinder Body -->
    <rect x="730" y="180" width="160" height="150" fill="url(#metalGrad)" stroke="#475569" stroke-width="2" />
    <!-- Cyclone Cone Section (Tapers down) -->
    <polygon points="730,330 890,330 840,430 780,430" fill="url(#metalGrad)" stroke="#475569" stroke-width="2" />
    <!-- Cyclone Bottom Collector Bin -->
    <rect x="770" y="430" width="80" height="40" fill="url(#darkSteel)" stroke="#334155" stroke-width="2" />
    <rect x="765" y="470" width="90" height="10" fill="#0f172a" rx="2" />
    <!-- Support Legs for Cyclone -->
    <line x1="740" y1="330" x2="740" y2="480" stroke="#334155" stroke-width="5" />
    <line x1="880" y1="330" x2="880" y2="480" stroke="#334155" stroke-width="5" />
  </g>

  <!-- Massive Overhead Recovery Duct Work (Booth to Cyclone) -->
  <g fill="none" stroke="url(#metalGrad)" stroke-width="28" stroke-linejoin="round" stroke-linecap="round" filter="url(#softShadow)">
    <path d="M520,150 L520,110 L810,110 L810,180" />
  </g>
  <g fill="none" stroke="#475569" stroke-width="30" stroke-linejoin="round" stroke-linecap="round" opacity="0.15">
    <path d="M520,150 L520,110 L810,110 L810,180" />
  </g>

  <!-- 3. Raised Operator Platform and Stairs (Center/Left) -->
  <g filter="url(#softShadow)">
    <!-- Platform deck -->
    <rect x="200" y="400" width="180" height="20" fill="url(#metalGrad)" stroke="#475569" stroke-width="1.5" />
    <!-- Platform steel support pillars -->
    <rect x="210" y="420" width="10" height="60" fill="#334155" />
    <rect x="360" y="420" width="10" height="60" fill="#334155" />
    
    <!-- Safety Handrails around the platform -->
    <g stroke="url(#electronOrange)" stroke-width="4" fill="none">
      <path d="M200,400 L200,340 L380,340 L380,400" />
      <line x1="200" y1="370" x2="380" y2="370" />
    </g>

    <!-- Diamond Plate Steel Stairs leading up to the platform -->
    <!-- Stair Stringers (Side frames) -->
    <line x1="200" y1="400" x2="140" y2="480" stroke="#334155" stroke-width="8" />
    
    <!-- Steps with diamond tread details -->
    <!-- Step 1 -->
    <g transform="translate(180, 420)">
      <rect x="-10" y="0" width="30" height="6" fill="#cbd5e1" stroke="#475569" stroke-width="1" />
      <line x1="-5" y1="3" x2="15" y2="3" stroke="#94a3b8" stroke-dasharray="2,2" stroke-width="1" />
    </g>
    <!-- Step 2 -->
    <g transform="translate(160, 445)">
      <rect x="-10" y="0" width="30" height="6" fill="#cbd5e1" stroke="#475569" stroke-width="1" />
      <line x1="-5" y1="3" x2="15" y2="3" stroke="#94a3b8" stroke-dasharray="2,2" stroke-width="1" />
    </g>
    <!-- Step 3 (Floor landing) -->
    <g transform="translate(140, 470)">
      <rect x="-10" y="0" width="30" height="6" fill="#cbd5e1" stroke="#475569" stroke-width="1" />
      <line x1="-5" y1="3" x2="15" y2="3" stroke="#94a3b8" stroke-dasharray="2,2" stroke-width="1" />
    </g>

    <!-- Stair handrails -->
    <line x1="200" y1="340" x2="140" y2="420" stroke="url(#electronOrange)" stroke-width="4" />
  </g>

  <!-- 4. "Electron" Professional Control Column (Right of Booth) -->
  <g filter="url(#softShadow)">
    <!-- Column Frame -->
    <rect x="630" y="180" width="70" height="280" fill="url(#darkSteel)" stroke="#334155" stroke-width="2" rx="4" />
    
    <!-- Branding Header on Control Column -->
    <rect x="635" y="190" width="60" height="45" fill="#0f172a" rx="2" />
    
    <!-- Styled Orange "Electron" Logo Element -->
    <polygon points="665,195 675,210 655,210" fill="url(#electronOrange)" />
    <text x="665" y="227" fill="#ffffff" font-family="sans-serif" font-size="9" font-weight="900" text-anchor="middle" letter-spacing="0.5">ELECTRON</text>

    <!-- Dials and Meters -->
    <!-- Pressure gauge 1 -->
    <circle cx="650" cy="260" r="10" fill="#f8fafc" stroke="#334155" stroke-width="1.5" />
    <line x1="650" y1="260" x2="655" y2="255" stroke="#e11d48" stroke-width="1.5" />
    <!-- Pressure gauge 2 -->
    <circle cx="680" cy="260" r="10" fill="#f8fafc" stroke="#334155" stroke-width="1.5" />
    <line x1="680" y1="260" x2="676" y2="253" stroke="#e11d48" stroke-width="1.5" />

    <!-- Digital touchscreen and control dials -->
    <rect x="640" y="285" width="50" height="30" fill="#0284c7" rx="1" stroke="#0369a1" stroke-width="1" />
    <!-- Simulated stats -->
    <rect x="645" y="290" width="40" height="4" fill="#38bdf8" />
    <rect x="645" y="298" width="25" height="4" fill="#38bdf8" />
    <rect x="645" y="306" width="35" height="4" fill="#38bdf8" />

    <!-- Green Running indicator light -->
    <circle cx="665" cy="335" r="5" fill="#22c55e" filter="url(#lightGlow)" />
    
    <!-- Manual Spray Gun resting on side bracket -->
    <g transform="translate(615, 340)">
      <!-- Gun Body (Metallic and orange) -->
      <path d="M0,0 L20,5 L20,12 L5,15 L0,5 Z" fill="#475569" />
      <rect x="18" y="2" width="10" height="5" fill="url(#electronOrange)" />
      <!-- Handle -->
      <rect x="5" y="10" width="6" height="20" fill="#0f172a" rx="1" transform="rotate(-15)" />
      <!-- Nozzle -->
      <circle cx="30" cy="4" r="3.5" fill="#ef4444" />
      <!-- Coiled feed hose extending to the floor -->
      <path d="M9,28 Q -10,60 15,100" stroke="#0284c7" stroke-width="3" fill="none" stroke-dasharray="100" />
    </g>
  </g>

  <!-- 5. Safety Floor Markings and Environment -->
  <!-- Yellow and black safety border lines on floor -->
  <g transform="translate(100, 560)">
    <rect x="0" y="0" width="800" height="15" fill="#fbbf24" />
    <path d="M0,15 L15,0 M30,15 L45,0 M60,15 L75,0 M90,15 L105,0 M120,15 L135,0 M150,15 L165,0 M180,15 L195,0 M210,15 L225,0 M240,15 L255,0 M270,15 L285,0 M300,15 L315,0 M330,15 L345,0 M360,15 L375,0 M390,15 L405,0 M420,15 L435,0 M450,15 L465,0 M480,15 L495,0 M510,15 L525,0 M540,15 L555,0 M570,15 L585,0 M600,15 L615,0 M630,15 L645,0 M660,15 L675,0 M690,15 L705,0 M720,15 L735,0 M750,15 L765,0 M780,15 L795,0" stroke="#0f172a" stroke-width="8" />
  </g>

  <!-- Watermark text in monospace -->
  <text x="50" y="615" fill="#e2e8f0" font-family="monospace" font-size="12" font-weight="black" opacity="0.4" letter-spacing="1.5">FUTURE FURNISHING | ELECTRON MANUAL COATING BOOTH | DUAL CYCLONE RECOVERY</text>
</svg>`;

export const MANUAL_POWDER_COATING_BOOTH_IMAGE = '/manual-powder-coating-booth.webp';
export const MANUAL_POWDER_COATING_BOOTH_SVG_IMAGE = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(MANUAL_BOOTH_SVG_CODE)));

// High-fidelity SVG illustration of the Blue Industrial Batch Curing Oven (Multi-Fuel)
const INDUSTRIAL_OVEN_SVG_CODE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 750" width="100%" height="100%">
  <!-- Definitions for gradients, patterns and filters -->
  <defs>
    <!-- Background wall/ceiling ambient gradient -->
    <linearGradient id="factoryBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#2c2d30" />
      <stop offset="40%" stop-color="#45474d" />
      <stop offset="100%" stop-color="#737680" />
    </linearGradient>
    
    <!-- Realistic Concrete floor gradient -->
    <linearGradient id="concreteFloor" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#8a8d94" />
      <stop offset="30%" stop-color="#71737a" />
      <stop offset="100%" stop-color="#4e5054" />
    </linearGradient>

    <!-- Deep Blue Oven Metal Shell -->
    <linearGradient id="ovenBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2b66af" />
      <stop offset="40%" stop-color="#1f5194" />
      <stop offset="100%" stop-color="#0e346b" />
    </linearGradient>
    
    <linearGradient id="ovenBlueHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#4785db" />
      <stop offset="100%" stop-color="#1f5194" />
    </linearGradient>

    <!-- Interior Galvanized Steel Wall (warm metallic) -->
    <linearGradient id="galvanizedWall" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#eaebeb" />
      <stop offset="50%" stop-color="#cfd1d4" />
      <stop offset="100%" stop-color="#9ea1a6" />
    </linearGradient>

    <!-- Interior floor steel plate -->
    <linearGradient id="interiorSteelFloor" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#d4d6db" />
      <stop offset="100%" stop-color="#929499" />
    </linearGradient>

    <!-- Motor yellow paint -->
    <linearGradient id="motorYellow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fad02c" />
      <stop offset="60%" stop-color="#e2b107" />
      <stop offset="100%" stop-color="#a07d03" />
    </linearGradient>

    <!-- Silver conduits and metal piping -->
    <linearGradient id="conduitSilver" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="40%" stop-color="#b0b4ba" />
      <stop offset="100%" stop-color="#676a70" />
    </linearGradient>

    <!-- Exhaust blower grey metal -->
    <linearGradient id="blowerGrey" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#9a9da3" />
      <stop offset="50%" stop-color="#76787d" />
      <stop offset="100%" stop-color="#45464a" />
    </linearGradient>

    <!-- Gas cylinder copper/brown gradient -->
    <linearGradient id="cylinderBrown" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#7c4e32" />
      <stop offset="30%" stop-color="#925d3d" />
      <stop offset="70%" stop-color="#5a3721" />
      <stop offset="100%" stop-color="#382112" />
    </linearGradient>

    <!-- Warm radial light glow from high bay bulbs -->
    <radialGradient id="lightGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fffae6" stop-opacity="1" />
      <stop offset="25%" stop-color="#ffe699" stop-opacity="0.8" />
      <stop offset="60%" stop-color="#ffcc33" stop-opacity="0.2" />
      <stop offset="100%" stop-color="#ffcc33" stop-opacity="0" />
    </radialGradient>

    <!-- Soft drop shadow -->
    <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="2" dy="8" stdDeviation="6" flood-color="#000" flood-opacity="0.3" />
    </filter>
    <filter id="ovenShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="15" stdDeviation="15" flood-color="#000" flood-opacity="0.45" />
    </filter>
  </defs>

  <!-- BACKGROUND: FACTORY CEILING AND TRUSSES (Upper 1/3) -->
  <rect width="1000" height="750" fill="url(#factoryBg)" />

  <!-- Ceiling Steel Roof Girders & Framing (Trusses) -->
  <g stroke="#202124" stroke-width="3" opacity="0.8" fill="none">
    <!-- Horizontal beams -->
    <line x1="0" y1="20" x2="1000" y2="20" stroke-width="6" />
    <line x1="0" y1="75" x2="1000" y2="75" stroke-width="5" />
    <line x1="0" y1="125" x2="1000" y2="125" stroke-width="4" />
    
    <!-- Vertical columns in distance -->
    <line x1="50" y1="20" x2="50" y2="480" stroke-width="12" stroke="#252629" />
    <line x1="900" y1="20" x2="900" y2="480" stroke-width="12" stroke="#252629" />
    
    <!-- Diagonal truss patterns -->
    <path d="M 0,20 L 100,75 L 200,20 L 300,75 L 400,20 L 500,75 L 600,20 L 700,75 L 800,20 L 900,75 L 1000,20" />
    <path d="M 0,75 L 100,125 L 200,75 L 300,125 L 400,75 L 500,125 L 600,75 L 700,125 L 800,75 L 900,125 L 1000,75" />
    <path d="M 50,20 L 50,125 M 150,20 L 150,125 M 250,20 L 250,125 M 350,20 L 350,125 M 450,20 L 450,125 M 550,20 L 550,125 M 650,20 L 650,125 M 750,20 L 750,125 M 850,20 L 850,125 M 950,20 L 950,125" />
  </g>

  <!-- Industrial High-Bay Lamps (Warm light bulb glows matching photo) -->
  <g>
    <!-- Light 1 (Left) -->
    <circle cx="180" cy="70" r="45" fill="url(#lightGlow)" />
    <ellipse cx="180" cy="70" rx="15" ry="8" fill="#ffffff" />
    <!-- Light 2 (Middle Left) -->
    <circle cx="220" cy="190" r="30" fill="url(#lightGlow)" opacity="0.6" />
    <ellipse cx="220" cy="190" rx="10" ry="5" fill="#ffffff" opacity="0.8" />
    <!-- Light 3 (Right Top) -->
    <circle cx="750" cy="15" r="40" fill="url(#lightGlow)" />
    <ellipse cx="750" cy="15" rx="12" ry="6" fill="#ffffff" />
  </g>

  <!-- CONCRETE FLOOR OF WORKSHOP (Lower 2/3) -->
  <rect y="420" width="1000" height="330" fill="url(#concreteFloor)" />
  
  <!-- Subtle floor lines/cracks for realism -->
  <path d="M 0,550 L 1000,580 M 300,420 L 120,750 M 800,420 L 950,750" stroke="#3d3e42" stroke-width="1.5" opacity="0.4" fill="none" />

  <!-- BACKGROUND MACHINERY (Faded to give depth) -->
  <!-- Green drill press/milling machine on the far left background -->
  <g fill="#435e51" stroke="#25362e" opacity="0.4">
    <rect x="5" y="380" width="40" height="120" rx="2" />
    <rect x="-10" y="440" width="30" height="60" />
    <path d="M 10,380 L 15,320 L 35,325 L 30,380 Z" />
    <rect x="0" y="490" width="55" height="15" rx="3" fill="#25362e" />
  </g>

  <!-- Green storage cabinet on the far right background -->
  <g fill="#5c806e" stroke="#2c3d34" opacity="0.45">
    <rect x="825" y="375" width="60" height="165" rx="1" />
    <!-- Louver vents & doors -->
    <line x1="835" y1="390" x2="875" y2="390" stroke="#2c3d34" stroke-width="2" />
    <line x1="835" y1="400" x2="875" y2="400" stroke="#2c3d34" stroke-width="2" />
    <line x1="835" y1="410" x2="875" y2="410" stroke="#2c3d34" stroke-width="2" />
    <line x1="855" y1="375" x2="855" y2="540" stroke="#2c3d34" stroke-width="1.5" />
    <!-- Base -->
    <rect x="820" y="535" width="70" height="10" fill="#2c3d34" />
  </g>

  <!-- FOREGROUND METAL RAILS (Iron stock lying on floor, matching photo bottom left) -->
  <g fill="#232426" stroke="#000" stroke-width="1" filter="url(#softShadow)" opacity="0.85">
    <!-- Bar 1 diagonal -->
    <polygon points="105,620 265,910 250,915 90,625" />
    <!-- Bar 2 horizontal angle iron -->
    <polygon points="105,620 255,680 252,692 100,632" />
    <polygon points="100,632 252,692 250,696 95,635" fill="#3a3c40" />
  </g>

  <!-- LPG FUEL GAS CYLINDER & TROLLEY STAND (Right of Oven) -->
  <g filter="url(#softShadow)">
    <!-- Trolley Dolly (Black pipe frame) -->
    <rect x="838" y="605" width="48" height="15" fill="#202124" rx="2" />
    <circle cx="842" cy="615" r="8" fill="#111" />
    <circle cx="842" cy="615" r="3" fill="#666" />
    <circle cx="882" cy="615" r="8" fill="#111" />
    <circle cx="882" cy="615" r="3" fill="#666" />
    <line x1="846" y1="585" x2="846" y2="615" stroke="#333" stroke-width="4" />
    <line x1="878" y1="585" x2="878" y2="615" stroke="#333" stroke-width="4" />

    <!-- Gas Cylinder (Tall brown tank) -->
    <!-- Tank base -->
    <rect x="848" y="465" width="28" height="135" fill="url(#cylinderBrown)" stroke="#27170c" stroke-width="1" rx="4" />
    <!-- Tank collar/neck -->
    <path d="M 852,465 Q 862,450 872,465" fill="url(#cylinderBrown)" stroke="#27170c" stroke-width="1" />
    <rect x="856" y="452" width="20" height="10" fill="#4d2f1c" rx="1" />
    <!-- Top Valve assembly and regulator gauge -->
    <path d="M 863,452 L 869,452 L 866,442 Z" fill="#9e9ba1" stroke="#333" stroke-width="1" />
    <!-- Black mesh protector sleeve wrapped around cylinder body -->
    <g opacity="0.3" stroke="#000" stroke-width="0.75" fill="none">
      <path d="M 848,485 L 876,495 M 848,505 L 876,515 M 848,525 L 876,535 M 848,545 L 876,555 M 848,565 L 876,575 M 848,585 L 876,595" />
      <path d="M 876,485 L 848,495 M 876,505 L 848,515 M 876,525 L 848,535 M 876,545 L 848,555 M 876,565 L 848,575 M 876,585 L 848,595" />
      <line x1="855" y1="465" x2="855" y2="600" stroke="#000" stroke-width="0.5" />
      <line x1="862" y1="465" x2="862" y2="600" stroke="#000" stroke-width="0.5" />
      <line x1="869" y1="465" x2="869" y2="600" stroke="#000" stroke-width="0.5" />
    </g>
    <!-- Gas hoses looping back to the oven burner -->
    <path d="M 866,448 Q 830,480 812,500" stroke="#222" stroke-width="2.5" fill="none" />
  </g>

  <!-- MAIN ASSEMBLY: BATCH CURING OVEN (Strict 3D projection from photo) -->
  <g filter="url(#ovenShadow)">
    
    <!-- GROUND STEEL CHASSIS/SKIDS (Bottom Support Beams) -->
    <g fill="#181a1c" stroke="#000" stroke-width="1.5">
      <!-- Front base skid -->
      <polygon points="90,622 550,695 550,715 90,642" />
      <!-- Support columns/jacks under skids -->
      <rect x="92" y="635" width="24" height="15" fill="#313336" />
      <rect x="388" y="680" width="24" height="15" fill="#313336" />
      <rect x="522" y="700" width="24" height="15" fill="#313336" />
    </g>

    <!-- 1. Left Blue Panel Wall (Side panel of oven facing viewer) -->
    <polygon points="95,250 465,200 465,682 95,630" fill="url(#ovenBlue)" stroke="#0e2345" stroke-width="2" />
    
    <!-- Vertical joints and seams on the left blue wall -->
    <g stroke="#08152b" stroke-width="2" opacity="0.8">
      <line x1="187" y1="237" x2="187" y2="640" />
      <line x1="280" y1="225" x2="280" y2="652" stroke-width="1.5" />
      <line x1="373" y1="212" x2="373" y2="665" />
    </g>
    <!-- Panels highlight reflections -->
    <g stroke="#4f8ee6" stroke-width="1.5" opacity="0.3">
      <line x1="189" y1="237" x2="189" y2="640" />
      <line x1="282" y1="225" x2="282" y2="652" />
      <line x1="381" y1="211" x2="381" y2="665" />
    </g>

    <!-- Circular ventilation grills (silver with black radial lines, matching photo) -->
    <g stroke="#1a1c1f" stroke-width="1">
      <!-- Grill 1 (Upper Left) -->
      <circle cx="187" cy="375" r="10" fill="url(#conduitSilver)" />
      <circle cx="187" cy="375" r="6" fill="#1a1c1f" />
      <!-- Grill 2 (Lower Left) -->
      <circle cx="187" cy="525" r="10" fill="url(#conduitSilver)" />
      <circle cx="187" cy="525" r="6" fill="#1a1c1f" />
      <!-- Grill 3 (Upper Right) -->
      <circle cx="300" cy="360" r="10" fill="url(#conduitSilver)" />
      <circle cx="300" cy="360" r="6" fill="#1a1c1f" />
      <!-- Grill 4 (Lower Right) -->
      <circle cx="300" cy="510" r="10" fill="url(#conduitSilver)" />
      <circle cx="300" cy="510" r="6" fill="#1a1c1f" />
      <!-- Grill 5 (Far Right) -->
      <circle cx="410" cy="345" r="10" fill="url(#conduitSilver)" />
      <circle cx="410" cy="345" r="6" fill="#1a1c1f" />
      <!-- Grill 6 (Far Right Bottom) -->
      <circle cx="410" cy="495" r="10" fill="url(#conduitSilver)" />
      <circle cx="410" cy="495" r="6" fill="#1a1c1f" />
    </g>

    <!-- High-voltage electrostatic warning stickers (Yellow triangles) -->
    <g transform="translate(300, 410) skewY(6.5)">
      <polygon points="0,-12 12,10 -12,10" fill="#fbbf24" stroke="#000" stroke-width="0.75" />
      <path d="M -1,-4 L 3,-4 L -1,2 L 3,2 L -2,8" stroke="#000" stroke-width="1.5" fill="none" />
    </g>

    <!-- 2. Inside Heating Chamber (Visible through wide open front, projected correctly) -->
    <!-- Inside floor plate (grey plate with 3D depth) -->
    <polygon points="465,682 810,610 735,550 465,612" fill="url(#interiorSteelFloor)" stroke="#676a70" stroke-width="1" />
    
    <!-- Inside Rear/Back Wall (galvanized panels) -->
    <polygon points="465,300 735,260 735,550 465,612" fill="url(#galvanizedWall)" />
    <!-- Panel lines on the galvanized back wall -->
    <g stroke="#919499" stroke-width="1.5">
      <line x1="532" y1="290" x2="532" y2="596" />
      <line x1="600" y1="280" x2="600" y2="581" />
      <line x1="668" y1="270" x2="668" y2="565" />
    </g>
    <!-- Holes/Air Distribution Nozzles (Patterns of circular punches on back wall) -->
    <g fill="#242529">
      <!-- Grid pattern of small punches -->
      <circle cx="500" cy="350" r="3" /><circle cx="500" cy="390" r="3" /><circle cx="500" cy="430" r="3" /><circle cx="500" cy="470" r="3" /><circle cx="500" cy="510" r="3" /><circle cx="500" cy="550" r="3" />
      <circle cx="566" cy="340" r="3" /><circle cx="566" cy="380" r="3" /><circle cx="566" cy="420" r="3" /><circle cx="566" cy="460" r="3" /><circle cx="566" cy="500" r="3" /><circle cx="566" cy="540" r="3" />
      <circle cx="634" cy="330" r="3" /><circle cx="634" cy="370" r="3" /><circle cx="634" cy="410" r="3" /><circle cx="634" cy="450" r="3" /><circle cx="634" cy="490" r="3" /><circle cx="634" cy="530" r="3" />
      <circle cx="700" cy="320" r="3" /><circle cx="700" cy="360" r="3" /><circle cx="700" cy="400" r="3" /><circle cx="700" cy="440" r="3" /><circle cx="700" cy="480" r="3" /><circle cx="700" cy="520" r="3" />
    </g>

    <!-- Inside Left Wall Panel -->
    <polygon points="465,300 465,612 465,612 465,300" stroke="#76787d" stroke-width="1" />

    <!-- Inside Right Receding Wall Panel -->
    <polygon points="735,260 810,240 810,610 735,550" fill="#cfd1d4" />
    
    <!-- Internal support struts/racks on right interior wall (horizontal ribs, matching photo) -->
    <g stroke="#919499" stroke-width="2.5">
      <line x1="745" y1="285" x2="800" y2="270" />
      <line x1="745" y1="315" x2="800" y2="300" />
      <line x1="745" y1="345" x2="800" y2="330" />
      <line x1="745" y1="375" x2="800" y2="360" />
      <line x1="745" y1="405" x2="800" y2="390" />
      <line x1="745" y1="435" x2="800" y2="420" />
      <line x1="745" y1="465" x2="800" y2="450" />
      <line x1="745" y1="495" x2="800" y2="480" />
      <line x1="745" y1="525" x2="800" y2="510" />
      <line x1="745" y1="555" x2="800" y2="540" />
    </g>

    <!-- White vertical insulation plenum columns (inside the door frame, left and right) -->
    <polygon points="475,315 500,311 500,600 475,604" fill="#fafafa" stroke="#d4d6db" stroke-width="1" />
    <polygon points="775,270 800,263 800,590 775,597" fill="#fafafa" stroke="#d4d6db" stroke-width="1" />
    <!-- Holes on white columns -->
    <g fill="#333" opacity="0.7">
      <circle cx="487" cy="340" r="2.5" /><circle cx="487" cy="400" r="2.5" /><circle cx="487" cy="460" r="2.5" /><circle cx="487" cy="520" r="2.5" /><circle cx="487" cy="580" r="2.5" />
      <circle cx="787" cy="310" r="2.5" /><circle cx="787" cy="370" r="2.5" /><circle cx="787" cy="430" r="2.5" /><circle cx="787" cy="490" r="2.5" /><circle cx="787" cy="550" r="2.5" />
    </g>

    <!-- 3. Front Open Door Frame Border Pillars (Blue structural steel columns) -->
    <!-- Front Left Column -->
    <polygon points="465,240 510,234 510,676 465,682" fill="url(#ovenBlueHighlight)" stroke="#0e2345" stroke-width="1.5" />
    <!-- Front Right Column -->
    <polygon points="810,195 835,191 835,605 810,610" fill="url(#ovenBlueHighlight)" stroke="#0e2345" stroke-width="1.5" />
    <!-- Front Top Header / Valance panel -->
    <polygon points="465,240 835,191 835,245 465,290" fill="url(#ovenBlue)" stroke="#0e2345" stroke-width="1.5" />
    <!-- Top bevel lip reflection -->
    <polygon points="465,240 835,191 835,198 465,247" fill="#69a5fc" opacity="0.4" />

    <!-- 4. Top Roof Assembly (Receding blue steel surface) -->
    <polygon points="95,250 465,200 810,195 465,240" fill="#152845" stroke="#08152b" stroke-width="1.5" />

    <!-- 5. Top Mounted Machinery System (Gears, motors and blowers, matching photo) -->
    <!-- Component A: Left Yellow Circulation Motor and Mounting Bracket -->
    <g transform="translate(255, 120)">
      <!-- Mounting frame/pedestal (Grey steel box with support arms) -->
      <polygon points="-10,65 50,71 35,90 -25,84" fill="#313336" stroke="#111" stroke-width="1" />
      <!-- Steel frame highlights -->
      <line x1="-10" y1="65" x2="-25" y2="84" stroke="#676a70" stroke-width="1" />
      <!-- Vertical yellow motor cowling (cylinder) -->
      <rect x="-10" y="20" width="35" height="50" fill="url(#motorYellow)" stroke="#6d4c06" stroke-width="1.5" rx="3" />
      <!-- Top motor cover yellow cap -->
      <ellipse cx="7.5" cy="20" rx="17.5" ry="6" fill="#fce170" stroke="#6d4c06" stroke-width="1" />
      <!-- Motor fan vents (vertical black lines on yellow case) -->
      <line x1="-3" y1="28" x2="-3" y2="60" stroke="#4a3304" stroke-width="1.5" />
      <line x1="2" y1="28" x2="2" y2="60" stroke="#4a3304" stroke-width="1.5" />
      <line x1="7" y1="28" x2="7" y2="60" stroke="#4a3304" stroke-width="1.5" />
      <line x1="12" y1="28" x2="12" y2="60" stroke="#4a3304" stroke-width="1.5" />
      <line x1="17" y1="28" x2="17" y2="60" stroke="#4a3304" stroke-width="1.5" />
      <!-- Silver coupling shaft under motor -->
      <rect x="2" y="70" width="10" height="12" fill="url(#conduitSilver)" />
    </g>

    <!-- Component B: Center Yellow Circulation Motor -->
    <g transform="translate(485, 105)">
      <!-- Mounting base frame -->
      <polygon points="-10,65 50,71 35,90 -25,84" fill="#313336" stroke="#111" stroke-width="1" />
      <!-- Yellow cylinder motor casing -->
      <rect x="-10" y="25" width="32" height="45" fill="url(#motorYellow)" stroke="#6d4c06" stroke-width="1.5" rx="3" />
      <!-- Cap -->
      <ellipse cx="6" cy="25" rx="16" ry="5.5" fill="#fce170" stroke="#6d4c06" stroke-width="1" />
      <!-- Finned cooling vents -->
      <line x1="-3" y1="32" x2="-3" y2="60" stroke="#4a3304" stroke-width="1.25" />
      <line x1="1" y1="32" x2="1" y2="60" stroke="#4a3304" stroke-width="1.25" />
      <line x1="5" y1="32" x2="5" y2="60" stroke="#4a3304" stroke-width="1.25" />
      <line x1="9" y1="32" x2="9" y2="60" stroke="#4a3304" stroke-width="1.25" />
      <line x1="13" y1="32" x2="13" y2="60" stroke="#4a3304" stroke-width="1.25" />
    </g>

    <!-- Component C: Large Grey Exhaust Blower/Scroll Fan Housing (Right) -->
    <g transform="translate(585, 80)" filter="url(#softShadow)">
      <!-- Large grey fan scroll casing -->
      <path d="M 0,55 C 0,10 40,0 80,15 C 110,25 125,55 120,85 L 120,110 L 0,110 Z" fill="url(#blowerGrey)" stroke="#2f3033" stroke-width="1.5" />
      <!-- Blower output scroll rim highlight -->
      <path d="M 120,85 L 155,75 L 155,102 L 120,110 Z" fill="#606266" stroke="#2f3033" stroke-width="1" />
      <!-- Circular side inlet plate -->
      <circle cx="55" cy="65" r="28" fill="#434447" stroke="#232426" stroke-width="1" />
      <!-- Reinforcement ribs/spokes on side inlet plate -->
      <circle cx="55" cy="65" r="5" fill="#111" />
      <line x1="55" y1="37" x2="55" y2="93" stroke="#222" stroke-width="1" />
      <line x1="27" y1="65" x2="83" y2="65" stroke="#222" stroke-width="1" />
      <line x1="35" y1="45" x2="75" y2="85" stroke="#222" stroke-width="1" />
      <line x1="35" y1="85" x2="75" y2="45" stroke="#222" stroke-width="1" />
      <!-- Duct connection collar at top of scroll -->
      <path d="M 120,40 L 140,30 L 140,55 L 120,62 Z" fill="#434447" stroke="#2f3033" />
    </g>

    <!-- 6. Grey Control Panel and Shiny Conduit Lines (Left blue wall, matching photo) -->
    <!-- Grey Electrical Junction/Control Box -->
    <g transform="translate(190, 395) skewY(6.5)" filter="url(#softShadow)">
      <!-- Box shadow/3D effect -->
      <rect x="-4" y="4" width="76" height="106" fill="#111" opacity="0.4" rx="2" />
      <!-- Outer steel frame -->
      <rect x="0" y="0" width="72" height="102" fill="url(#conduitSilver)" stroke="#4d5054" stroke-width="2.5" rx="3" />
      <!-- Door latch handle -->
      <rect x="62" y="45" width="4" height="15" fill="#222" rx="1" />
      <!-- Status Lights on Panel Door -->
      <circle cx="15" cy="20" r="3.5" fill="#22c55e" /> <!-- Ready (Green) -->
      <circle cx="27" cy="20" r="3.5" fill="#eab308" /> <!-- Heating (Amber) -->
      <circle cx="39" cy="20" r="3.5" fill="#ef4444" /> <!-- Fault (Red) -->
      
      <!-- Inside digital temp display screen -->
      <rect x="12" y="32" width="48" height="20" fill="#000" rx="1" stroke="#333" stroke-width="1" />
      <text x="16" y="46" fill="#f59e0b" font-family="monospace" font-size="11" font-weight="black">210 C</text>
      
      <!-- Rotary Selector knobs -->
      <circle cx="20" cy="70" r="5" fill="#2a2c30" stroke="#111" stroke-width="1.5" />
      <line x1="20" y1="70" x2="20" y2="66" stroke="#fff" stroke-width="1.25" />
      
      <circle cx="52" cy="70" r="5" fill="#2a2c30" stroke="#111" stroke-width="1.5" />
      <line x1="52" y1="70" x2="56" y2="70" stroke="#fff" stroke-width="1.25" />
    </g>

    <!-- Shiny Metal Conduit Piping Running Along Side Panel (Horizontal pipe, matching photo) -->
    <!-- Upper Horizontal conduit running complete length -->
    <path d="M 98,623 L 460,676" stroke="url(#conduitSilver)" stroke-width="6.5" fill="none" stroke-linejoin="round" />
    <path d="M 98,623 L 460,676" stroke="#fff" stroke-width="1.5" fill="none" stroke-linejoin="round" opacity="0.6" />

    <!-- Conduit holding clamps -->
    <rect x="130" y="618" width="6" height="16" fill="#222" transform="rotate(6.5, 130, 618)" />
    <rect x="235" y="630" width="6" height="16" fill="#222" transform="rotate(6.5, 235, 630)" />
    <rect x="330" y="641" width="6" height="16" fill="#222" transform="rotate(6.5, 330, 641)" />
    <rect x="425" y="652" width="6" height="16" fill="#222" transform="rotate(6.5, 425, 652)" />

    <!-- Vertical Conduit running up from control box to the top deck -->
    <path d="M 226,396 L 226,220" stroke="url(#conduitSilver)" stroke-width="4.5" fill="none" />
    <path d="M 226,396 L 226,220" stroke="#fff" stroke-width="1" fill="none" opacity="0.5" />
    
    <!-- Vertical Conduit running down from control box to bottom horizontal line -->
    <path d="M 226,504 L 226,638" stroke="url(#conduitSilver)" stroke-width="4.5" fill="none" />
    <path d="M 226,504 L 226,638" stroke="#fff" stroke-width="1" fill="none" opacity="0.5" />

    <!-- Component D: Red Emergency Stop mushroom push button (On front left structural pillar) -->
    <g transform="translate(442, 420)" filter="url(#softShadow)">
      <!-- Yellow enclosure box -->
      <rect x="-10" y="-12" width="20" height="24" fill="#fbbf24" stroke="#a16207" stroke-width="1" rx="2" />
      <!-- Red circular push button -->
      <circle cx="0" cy="0" r="7" fill="#dc2626" stroke="#7f1d1d" stroke-width="1" />
      <circle cx="-1.5" cy="-1.5" r="2.5" fill="#f87171" opacity="0.6" /> <!-- Highlight -->
    </g>

    <!-- Corner metal hinges/brackets for doors -->
    <rect x="460" y="270" width="10" height="15" fill="#2f3033" stroke="#111" stroke-width="1" />
    <rect x="460" y="610" width="10" height="15" fill="#2f3033" stroke="#111" stroke-width="1" />
  </g>

  <!-- Title & Specs Watermark block (matching other image styles) -->
  <text x="50" y="720" fill="#2d2d30" font-family="monospace" font-size="12" font-weight="black" opacity="0.6" letter-spacing="1.5">FUTURE FURNISHING | FORCED AIR BATCH CURING OVEN | MULTI-FUEL BURNER SYSTEM</text>
</svg>`;;

export const INDUSTRIAL_CURING_OVEN_IMAGE = '/industrial-curing-oven.jpg';
export const INDUSTRIAL_CURING_OVEN_SVG_IMAGE = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(INDUSTRIAL_OVEN_SVG_CODE)));


