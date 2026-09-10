import { Product } from './types';
import { 
  AUTOMATIC_POWDER_COATING_PLANT_IMAGE, 
  AUTOMATIC_POWDER_COATING_PLANT_SVG_IMAGE,
  MANUAL_POWDER_COATING_BOOTH_IMAGE, 
  MANUAL_POWDER_COATING_BOOTH_SVG_IMAGE,
  INDUSTRIAL_CURING_OVEN_IMAGE,
  INDUSTRIAL_CURING_OVEN_SVG_IMAGE
} from './assets/images';

export const PRODUCTS: Product[] = [
  // --- Category 1: Powder Coating Machines ---
  
  {
  id: 'ifs-06',
  name: 'Rose Gold PVD Finish Sample',
  category: 'Powder Coating Machines',
  subcategory: 'Accessories',
  description: 'A demonstration sample of our in-house Rose Gold PVD (Physical Vapor Deposition) coating, applied to a metal rod profile. Showcases the warm, sparkling copper-rose tone achievable on furniture legs, hardware, and architectural profiles.',
  image: '/images/product_with_logo/accessories-1.jpg',
  specs: {
    'Finish Type': 'Rose Gold PVD (Vacuum Coated)',
    'Base Metal': 'Stainless Steel / Mild Steel Profiles',
    'Application Areas': 'Furniture legs, hardware, architectural trims',
    'Durability': 'Scratch-resistant, molecular-bonded coating',
    'Availability': 'Sample shown; custom profile sizes on request'
  },
  featured: false
},
{
  id: 'ifs-07',
  name: 'Rose Gold Glossy PVD Finish Sample',
  category: 'Powder Coating Machines',
  subcategory: 'Accessories',
  description: 'A glossy variant of our Rose Gold PVD coating, applied to a cylindrical metal pipe sample. Delivers a brighter, high-shine reflective finish compared to the standard rose gold tone, ideal for showcase furniture pieces and premium hardware.',
  image: '/images/product_with_logo/accessories-2.jpg',
  specs: {
    'Finish Type': 'Rose Gold Glossy PVD (Vacuum Coated)',
    'Base Metal': 'Stainless Steel / Mild Steel Profiles',
    'Application Areas': 'Furniture legs, decorative pipes, fittings',
    'Durability': 'Scratch-resistant, molecular-bonded coating',
    'Availability': 'Sample shown; custom profile sizes on request'
  },
  featured: false
},
{
  id: 'ifs-08',
  name: 'Mirror Gold PVD Finish Sample',
  category: 'Powder Coating Machines',
  subcategory: 'Accessories',
  description: 'A demonstration sample of our Mirror Gold PVD coating, applied to a metal rod profile. Achieves an intensely bright, mirror-polished gold finish, popular for luxury dining table bases and statement furniture hardware.',
  image: '/images/product_with_logo/accessories-3.jpg',
  specs: {
    'Finish Type': 'Mirror Gold PVD (Vacuum Coated)',
    'Base Metal': 'Stainless Steel / Mild Steel Profiles',
    'Application Areas': 'Dining table bases, chair legs, statement hardware',
    'Durability': 'Scratch-resistant, molecular-bonded coating',
    'Availability': 'Sample shown; custom profile sizes on request'
  },
  featured: false
},
{
  id: 'ifs-09',
  name: 'Automatic Powder Coating Spray Booth',
  category: 'Powder Coating Machines',
  subcategory: 'Machinery',
  description: 'A fully enclosed automatic powder coating spray booth designed for high-volume production lines. Features integrated cartridge filtration for efficient overspray recovery and a clean, controlled spraying environment.',
  image: '/images/product_with_logo/machine-1.jpeg',
  specs: {
    'Booth Type': 'Automatic, fully enclosed',
    'Filtration': 'Cartridge-based powder recovery system',
    'Recovery Rate': 'Up to 98% overspray reclamation',
    'Construction': 'Powder-coated steel panel body',
    'Application': 'High-volume automated production lines'
  },
  featured: false
},
{
  id: 'ifs-10',
  name: 'Automatic Powder Coating Booth with Cartridge Recovery (Variant)',
  category: 'Powder Coating Machines',
  subcategory: 'Machinery',
  description: 'An alternate configuration of our automatic spray booth line, featuring the same cartridge recovery filtration in a modified panel layout to suit varied factory floor plans.',
  image: '/images/product_with_logo/machine-2.jpeg',
  specs: {
    'Booth Type': 'Automatic, fully enclosed',
    'Filtration': 'Cartridge-based powder recovery system',
    'Recovery Rate': 'Up to 98% overspray reclamation',
    'Construction': 'Powder-coated steel panel body',
    'Application': 'High-volume automated production lines'
  },
  featured: false
},
{
  id: 'ifs-11',
  name: 'Multi-Gun Powder Coating Control Panel (8-Gun)',
  category: 'Powder Coating Machines',
  subcategory: 'Machinery',
  description: 'A centralized control cabinet for automatic powder coating lines running up to 8 spray guns simultaneously. Enables synchronized voltage, output, and timing control across the full gun array.',
  image: '/images/product_with_logo/machine-3.jpeg',
  specs: {
    'Gun Capacity': 'Up to 8 guns',
    'Control Type': 'Centralized cabinet, synchronized output',
    'Application': 'Automatic multi-gun coating lines',
    'Housing': 'Industrial control cabinet, wall or frame mounted'
  },
  featured: false
},
{
  id: 'ifs-12',
  name: 'Gema OptiStar Control Unit with Spray Gun',
  category: 'Powder Coating Machines',
  subcategory: 'Machinery',
  description: 'The Gema OptiStar control unit paired with its electrostatic spray gun, offering precise voltage and powder output control for consistent, high-quality coating results.',
  image: '/images/product_with_logo/machine-4.jpeg',
  specs: {
    'Brand': 'Gema',
    'Model': 'OptiStar Control Unit',
    'Gun Type': 'Electrostatic spray gun',
    'Application': 'Manual and semi-automatic coating lines'
  },
  featured: false
},
{
  id: 'ifs-13',
  name: 'Powder Feed Hopper (Fluidizing Hopper)',
  category: 'Powder Coating Machines',
  subcategory: 'Machinery',
  description: 'A fluidizing powder feed hopper that aerates powder for smooth, consistent delivery to the spray gun, reducing clumping and ensuring even coating application.',
  image: '/images/product_with_logo/machine-5.jpeg',
  specs: {
    'Function': 'Powder fluidization and feed delivery',
    'Compatibility': 'Standard electrostatic spray gun systems',
    'Construction': 'Stainless steel hopper body',
    'Application': 'Manual and automatic coating setups'
  },
  featured: false
},
{
  id: 'ifs-14',
  name: 'Gema OptiSelect Electrostatic Spray Gun',
  category: 'Powder Coating Machines',
  subcategory: 'Machinery',
  description: 'The Gema OptiSelect electrostatic powder coating spray gun, paired with its feed canister. Delivers precise electrostatic charge control for efficient powder transfer and coverage.',
  image: '/images/product_with_logo/machine-6.jpeg',
  specs: {
    'Brand': 'Gema',
    'Model': 'OptiSelect',
    'Gun Type': 'Electrostatic spray gun with feed canister',
    'Application': 'Manual and semi-automatic coating lines'
  },
  featured: false
},
{
  id: 'ifs-15',
  name: 'Manual Powder Coating Machine (Standard Unit)',
  category: 'Powder Coating Machines',
  subcategory: 'Machinery',
  description: 'A complete manual powder coating unit with integrated hopper and control panel, designed for small to mid-volume coating operations requiring operator-controlled application.',
  image: '/images/product_with_logo/machine-7.jpeg',
  specs: {
    'Machine Type': 'Manual powder coating unit',
    'Includes': 'Integrated hopper, spray gun, control panel',
    'Application': 'Small to mid-volume coating operations',
    'Operation': 'Operator-controlled manual spraying'
  },
  featured: false
},
{
  id: 'ifs-16',
  name: 'Dual-Gun Powder Coating Machine (Twin Manual Unit)',
  category: 'Powder Coating Machines',
  subcategory: 'Machinery',
  description: 'A twin manual powder coating unit designed to operate two spray guns simultaneously, increasing coating throughput for medium-volume production without moving to a fully automatic line.',
  image: '/images/product_with_logo/machine-8.jpeg',
  specs: {
    'Machine Type': 'Dual-gun manual powder coating unit',
    'Gun Capacity': '2 guns, simultaneous operation',
    'Application': 'Medium-volume coating operations',
    'Operation': 'Operator-controlled manual spraying'
  },
  featured: false
},
{
  id: 'ifs-17',
  name: 'Manual Powder Coating Machine (Variant B)',
  category: 'Powder Coating Machines',
  subcategory: 'Machinery',
  description: 'An additional configuration of our manual powder coating unit line, built for small to mid-volume coating operations with the same reliable hopper and gun integration.',
  image: '/images/product_with_logo/machine-9.jpeg',
  specs: {
    'Machine Type': 'Manual powder coating unit',
    'Includes': 'Integrated hopper, spray gun, control panel',
    'Application': 'Small to mid-volume coating operations',
    'Operation': 'Operator-controlled manual spraying'
  },
  featured: false
},
{
  id: 'ifs-18',
  name: 'Manual Powder Coating Machine (Variant C)',
  category: 'Powder Coating Machines',
  subcategory: 'Machinery',
  description: 'Another variant of our manual powder coating machine range, offering the same integrated hopper and control setup with a modified frame design.',
  image: '/images/product_with_logo/machine-10.jpeg',
  specs: {
    'Machine Type': 'Manual powder coating unit',
    'Includes': 'Integrated hopper, spray gun, control panel',
    'Application': 'Small to mid-volume coating operations',
    'Operation': 'Operator-controlled manual spraying'
  },
  featured: false
},
{
  id: 'ifs-19',
  name: 'Gema Electrostatic Powder Coating Spray Gun (Handheld)',
  category: 'Powder Coating Machines',
  subcategory: 'Machinery',
  description: 'A handheld Gema electrostatic powder coating spray gun, designed for precise manual application with reliable electrostatic charging for strong powder adhesion.',
  image: '/images/product_with_logo/machine-11.jpeg',
  specs: {
    'Brand': 'Gema',
    'Gun Type': 'Handheld electrostatic spray gun',
    'Application': 'Manual coating operations',
    'Charging': 'Electrostatic negative charge application'
  },
  featured: false
},
{
  id: 'ifs-20',
  name: 'Manual Powder Coating Machine (Variant D)',
  category: 'Powder Coating Machines',
  subcategory: 'Machinery',
  description: 'A further variant in our manual powder coating machine lineup, built with the same core hopper and gun integration for dependable small-batch coating work.',
  image: '/images/product_with_logo/machine-12.jpeg',
  specs: {
    'Machine Type': 'Manual powder coating unit',
    'Includes': 'Integrated hopper, spray gun, control panel',
    'Application': 'Small to mid-volume coating operations',
    'Operation': 'Operator-controlled manual spraying'
  },
  featured: false
},
{
  id: 'ifs-21',
  name: 'Electrostatic Spray Gun Set (Set of 4)',
  category: 'Powder Coating Machines',
  subcategory: 'Machinery',
  description: 'A set of four electrostatic powder coating spray guns from our Gema family lineup, suited for multi-operator coating lines or as replacement/spare units for existing automatic setups.',
  image: '/images/product_with_logo/machine-13.jpeg',
  specs: {
    'Set Size': '4 spray guns',
    'Brand Family': 'Gema',
    'Gun Type': 'Electrostatic spray guns',
    'Application': 'Multi-operator lines, spare unit sets'
  },
  featured: false
},
{
  id: 'ifs-22',
  name: 'Wagner Manual Powder Coating Machine',
  category: 'Powder Coating Machines',
  subcategory: 'Machinery',
  description: 'A Wagner-brand manual powder coating machine, featuring integrated hopper and gun controls for reliable, precise manual application in small to mid-volume operations.',
  image: '/images/product_with_logo/machine-14.jpeg',
  specs: {
    'Brand': 'Wagner',
    'Machine Type': 'Manual powder coating unit',
    'Includes': 'Integrated hopper, spray gun, control panel',
    'Application': 'Small to mid-volume coating operations'
  },
  featured: false
},

  // --- Category 2: Powder Coating Powder ---
  {
    id: 'acs-01',
    name: 'Copper Antique',
    category: 'Powder Coating Powder',
    subcategory: 'Antiques',
    code: 'HKT 0345',
    description: 'Premium copper vein textured powder coating, delivering an elegant antique relief pattern. High scratch resistance and exceptional weathering characteristics, popular for architectural hardware and furniture frames.',
    image: '/images/finish_swatches/powder-coating-swatches/swatches/antiques_Copper-A_HKT0345.png',
    specs: {
      'Gloss Level': 'Textured / Low Gloss',
      'Curing Schedule': '180°C for 10-12 Mins',
      'Salt Spray Resistance': '1000 Hours (ASTM B117)',
      'Outdoor Durability': 'Excellent (Super Durable Polyester TGIC-free)',
      'Pencil Hardness': '2H - 3H'
    },
    finishes: ['Texture Vein', 'Antique Relieve'],
    featured: true
  },
  {
    id: 'acs-02',
    name: 'Antique Gold',
    category: 'Powder Coating Powder',
    subcategory: 'Antiques',
    code: 'HKT 0301',
    description: 'Luxurious gold-veined antique finish offering high metallic relief. Provides a majestic, royal texture that is incredibly touch-friendly and masks underlying metal imperfections beautifully.',
    image: '/images/finish_swatches/powder-coating-swatches/swatches/antiques_Gold_HKT0301.png',
    specs: {
      'Gloss Level': 'Textured Gloss Accent',
      'Curing Schedule': '180°C for 15 Mins',
      'Specific Gravity': '1.4 - 1.7 g/cm³',
      'Adhesion': '5B (ASTM D3359)',
      'Application Areas': 'Wrought iron work, premium table bases, hardware'
    },
    finishes: ['Vein Finish', 'Metallic Relieve'],
    featured: false
  },
  {
    id: 'acs-03',
    name: 'Antique Silver',
    category: 'Powder Coating Powder',
    subcategory: 'Antiques',
    code: 'HKT 0302',
    description: 'Sophisticated silver metallic vein texture, evoking brushed pewter and historical silverware. Resilient against finger prints, UV exposure, and heavy detergent cleaning agents.',
    image: '/images/finish_swatches/powder-coating-swatches/swatches/antiques_Silver_HKT0302.png',
    specs: {
      'Gloss Level': 'Textured Satin',
      'Curing Schedule': '180°C for 10 Mins',
      'Impact Resistance': '80 in-lbs (Direct)',
      'Flexibility': 'Mandrel Bend Pass 1/4 inch',
      'Application Areas': 'Outdoor furniture, lighting, machine consoles'
    },
    finishes: ['Silver Pewter Vein'],
    featured: false
  },
  {
    id: 'acs-04',
    name: 'Champagne Gold (Matt Finish)',
    category: 'Powder Coating Powder',
    subcategory: 'Matt Finishes',
    code: 'VL 06',
    description: 'A smooth, ultra-sleek, matte metallic champagne gold shade. Emulates the sophisticated luster of vacuum-plated gold (PVD) at a fraction of the cost, with superb color consistency.',
    image: '/images/finish_swatches/powder-coating-swatches/swatches/matt-finish_Champagne-Gold_VL06.png',
    specs: {
      'Gloss Level': '15% - 25% (Semi-Matt)',
      'Curing Schedule': '200°C for 10 Mins',
      'Coating Thickness': '60 - 80 Microns',
      'Pencil Hardness': 'H',
      'UV Protection': 'UV-A and UV-B blockers integrated'
    },
    finishes: ['Smooth Matte', 'Metallic Suede'],
    featured: true
  },
  {
    id: 'acs-05',
    name: 'Rose Metallic (Matt Finish)',
    category: 'Powder Coating Powder',
    subcategory: 'Matt Finishes',
    code: 'VL 29',
    description: 'A delicate, premium matte rose gold metallic shade. Provides a warm, luxurious glow that is highly sought-after by designers for retail visual merchandising and premium home decor.',
    image: '/images/finish_swatches/powder-coating-swatches/swatches/matt-finish_Rose-Metallic_VL29.png',
    specs: {
      'Gloss Level': '10% - 20% (Deep Matt)',
      'Curing Schedule': '190°C for 12 Mins',
      'Corrosion Resistance': '800 Hours salt spray',
      'Adhesion': 'Cross-cut GT 0 / 100%'
    },
    finishes: ['Smooth Matte Rose', 'PVD Mimic'],
    featured: false
  },
  {
    id: 'acs-06',
    name: 'Walnut Burl (Wooden Shade)',
    category: 'Powder Coating Powder',
    subcategory: 'Wooden Shades',
    code: 'WS 912',
    description: 'High-definition heat-transfer wood sublimation powder, mimicking the rich grain pattern of natural walnut root burl. Unlocks the organic warmth of real hardwood on lightweight structural aluminum.',
    image: '/images/finish_swatches/powder-coating-swatches/swatches/wooden-shades-1_Walnut-Burl.png',
    specs: {
      'Base Powder': 'Special polyurethane sublimation receiver',
      'Curing Schedule': '200°C for 15 Mins',
      'Film Thickness': '75 - 90 Microns',
      'Sublimation Depth': 'Full cross-sectional sublimation'
    },
    finishes: ['Wood Sublimated Textured', 'Satin Polish Wood'],
    featured: false
  },
  {
    id: 'acs-07',
    name: 'Black Onyx (Wooden Shade)',
    category: 'Powder Coating Powder',
    subcategory: 'Wooden Shades',
    code: 'WS 405',
    description: 'Striking black charcoal wood grain finish. Features a charred, deep charcoal background with subtle, satin-reflecting black wire brush wood grain patterns.',
    image: '/images/finish_swatches/powder-coating-swatches/swatches/wooden-shades-1_Black-Onyx.png',
    specs: {
      'Base Powder': 'TGIC Polyurethane Matt Base',
      'Gloss Level': '5% (Super-Matt)',
      'Scratch Resistance': 'Outstanding Mar-Resistance',
      'Ideal For': 'Claddings, luxury facades, modern furniture'
    },
    finishes: ['Charred Shou Sugi Ban Texture'],
    featured: false
  },

  // --- Category 3: furniture manufacturing ---
  {
    id: 'thc-01',
    name: 'Bespoke PVD Coated Dining Table',
    category: 'furniture manufacturing',
    subcategory: 'PVD Coated Dining',
    description: 'A stately high-end dining table featuring a flawless white Italian Calacatta marble slab, seated on heavy-duty stainless steel base pillars finished with brilliant, wear-resistant gold PVD coating. Mirror-polished and robust.',
    image: '/images/client_photos_extracted/furniture_named/dining-table-pvd-coated-1.jpeg',
    specs: {
      'Frame Material': '304-Grade heavy steel frame profiles',
      'Table Top': '18mm polished Calacatta marble with resin guard',
      'Metal Finish': 'Vacuum-plated Gold PVD (Physical Vapor Deposition)',
      'Dimensions': '2100W x 1000D x 750H mm (Customizable size)',
      'Capacity': '6 to 8 chairs layout configurations',
      'Production': 'Laser profile cut, spot welding, multi-head buffing'
    },
    materials: ['304 Stainless Steel', 'Natural Calacatta Marble'],
    finishes: ['Mirror Gold PVD', 'Rose Gold PVD', 'Brushed Chrome'],
    featured: true
  },
  {
    id: 'thc-02',
    name: 'Sax Hexagonal Honeycomb Coffee Table (Set of 4)',
    category: 'furniture manufacturing',
    subcategory: 'Coffee Tables',
    description: 'Inspired by the organic structure of a honeycomb, this alluring set of four hexagonal Sax coffee tables makes your living room the place to be. Put all tables together to create one large centerpiece, divide them into pairs or use them separately as stylish side tables.',
    image: '/images/client_photos_extracted/furniture_named/coffee-table-1.jpeg',
    specs: {
      'Modular Concept': 'Set of 4 interlocking hexagonal cellular frames',
      'Frame Material': 'High-tensile laser cut steel lattices',
      'Table Top': '10mm Toughened beveled tinted glass top',
      'Metal Finish': 'Premium electrostatic Gold electroplating',
      'Arrangement': 'Single large centerpiece, double pairs, or individual side tables',
      'In-House Tech': 'Laser profiling, CNC hydraulic press, polishing'
    },
    materials: ['High-Strength Steel', 'Tempered Tinted Glass'],
    finishes: ['Champagne Gold VL-06', 'Velvet Gold', 'Satin Brass'],
    featured: true
  },
  {
    id: 'thc-03',
    name: 'Luxury Ring-Base Console & Side Tables',
    category: 'furniture manufacturing',
    subcategory: 'Side & Console Tables',
    description: 'A magnificent statement console featuring continuous golden C-shaped ring supports, paired with a white polished marble or obsidian quartz top. Features matching circular side tables for complete living room luxury.',
    image: '/images/client_photos_extracted/furniture_named/console-side-table-1.jpeg',
    specs: {
      'Table Structure': 'Console table with 2 interlocking side nesting tables',
      'Frame Design': 'Interlinked C-shape circular arches in solid steel',
      'Table Top': 'Polished natural quartz stone or Calacatta marble',
      'Metal Finish': 'Mirror Rose Gold PVD / Polished Brass lacquer',
      'Dimensions (Console)': '1300W x 400D x 820H mm',
      'Packaging': 'ISTA 3A Drop-Ship Certified Wood Crate Packaging'
    },
    materials: ['Solid Structural Steel', 'Polished Natural Quartz'],
    finishes: ['Rose Gold PVD', 'Polished Mirror Brass', 'Matt Black'],
    featured: false
  },
  {
  id: 'thc-28',
  name: 'Channel-Tufted Velvet Dining Chair (PVD Gold Legs)',
  category: 'furniture manufacturing',
  subcategory: 'Dining Chairs',
  description: 'A refined dining chair upholstered in rich teal velvet with vertical channel-tufted stitching for a tailored, tailored-jacket silhouette. Set on slender tapered legs finished in vacuum-plated gold PVD, this chair pairs elegantly with marble-top or glass dining tables. Available in a full range of upholstery colors and PVD finishes to match any dining collection.',
  image: '/images/client_photos_extracted/furniture_named/chair-with-pvd-legs-1.jpeg',
  specs: {
    'Upholstery': 'Channel-tufted velvet, vertical stitch detail',
    'Frame': 'Solid hardwood frame with high-density foam padding',
    'Leg Finish': 'Vacuum-plated Gold PVD (also available in Rose Gold, Chrome)',
    'Leg Style': 'Slender tapered metal legs with capped feet',
    'Seating': 'Deep bucket seat with wraparound backrest',
    'Customization': 'Upholstery color, leg finish, and quantity customizable per order'
  },
  materials: ['Solid Wood Frame', 'Velvet Upholstery', 'PVD-Coated Steel Legs'],
  finishes: ['Gold PVD', 'Rose Gold PVD', 'Chrome'],
  featured: false
},
  {
    id: 'thc-04',
    name: 'Ergonomic Royal Velvet Chair (PVD Legs)',
    category: 'furniture manufacturing',
    subcategory: 'Chairs with PVD Legs',
    description: 'Luxury dining or accent chair upholstered in ultra-plush, stain-resistant royal velvet. Features an ergonomic high-density foam shell supported by sleek tapered stainless steel legs finished in brilliant gold PVD.',
    image: '/images/client_photos_extracted/furniture_named/dining-pink-velvet-4.jpeg',
    specs: {
      'Leg Structure': 'Heavy-gauge tapered 304 Stainless Steel tubes',
      'Upholstery': 'Premium high-GSM polyester velvet (Water-repellent)',
      'Cushioning': '40-Density high-resilience memory foam',
      'Dimensions': '550W x 580D x 880H mm (Seat Height: 450mm)',
      'Load Testing': 'BIFMA Certified up to 180 kg',
      'Customization': 'Available in multiple upholstery shades with gold/rose-gold legs'
    },
    materials: ['304 Stainless Steel', 'Royal Velvet', 'High-Density Foam'],
    finishes: ['Mirror Gold PVD', 'Rose Gold PVD', 'Matte Black Electrostatic'],
    featured: true
  },
  {
  id: 'thc-13',
  name: 'Cognac Leather Dining Chair (Black Tapered Legs)',
  category: 'furniture manufacturing',
  subcategory: 'Dining Chairs',
  description: 'A contemporary dining chair upholstered in rich cognac faux leather with clean stitched panel detailing across the seat and backrest. Set on slim tapered legs finished in matte black, this chair offers a warm, versatile look that pairs well with both wood and stone dining tables. Available in a range of upholstery colors and leg finishes to suit any interior.',
  image: '/images/client_photos_extracted/furniture_named/dining-pink-velvet-2.jpeg',
  specs: {
    'Upholstery': 'Faux leather, stitched panel detailing',
    'Frame': 'Solid frame with high-density foam padding',
    'Leg Finish': 'Matte Black (also available in Brushed Gold, Chrome)',
    'Leg Style': 'Slim tapered metal legs',
    'Seating': 'Contoured seat with curved high backrest',
    'Customization': 'Upholstery color, leg finish, and quantity customizable per order'
  },
  materials: ['Metal Frame', 'Faux Leather Upholstery', 'Powder-Coated Steel Legs'],
  finishes: ['Matte Black', 'Brushed Gold', 'Chrome'],
  featured: false
},
{
  id: 'thc-14',
  name: 'Blush Velvet Dining Armchair (Patterned Back Panel)',
  category: 'furniture manufacturing',
  subcategory: 'Dining Chairs',
  description: 'A statement dining armchair upholstered in soft blush velvet, with a striking mixed-pattern panel accenting the outer backrest for a distinctive, gallery-like touch. Curved arms and a rounded silhouette add a soft, inviting presence, while slender legs finished in black with gold-tipped feet ground the piece in modern glamour. Pairs beautifully with marble or stone dining tables.',
  image: '/images/client_photos_extracted/furniture_named/dining-pink-velvet-4.jpeg',
  specs: {
    'Upholstery': 'Velvet seat and inner back, patterned fabric accent on outer back panel',
    'Frame': 'Solid frame with high-density foam padding',
    'Arms': 'Curved upholstered armrests',
    'Leg Finish': 'Black with gold-tipped feet',
    'Leg Style': 'Slender tapered legs',
    'Customization': 'Upholstery color, back panel pattern, and leg finish customizable per order'
  },
  materials: ['Solid Wood Frame', 'Velvet Upholstery', 'Patterned Fabric Accent', 'Metal Legs'],
  finishes: ['Black with Gold Tips', 'Brushed Gold', 'Matte Black'],
  featured: false
},
{
  id: 'thc-15',
  name: 'Woven Braid Dining Armchair (Gold Legs)',
  category: 'furniture manufacturing',
  subcategory: 'Dining Chairs',
  description: 'A sculptural dining armchair featuring an intricately woven, braid-like backrest and armrests in cream upholstery, creating a striking basket-weave texture. The rounded seat is finished in matching cream for a clean, cohesive look, while polished gold legs add a glamorous finishing touch. A true statement piece for elevated dining spaces.',
  image: '/images/client_photos_extracted/furniture_named/dining-table-chair-set-2.jpeg',
  specs: {
    'Backrest': 'Hand-woven braided design, back and arms',
    'Upholstery': 'Cream faux leather, padded seat',
    'Frame': 'Metal frame with woven upholstered shell',
    'Leg Finish': 'Polished Gold',
    'Leg Style': 'Slender tapered legs with protective foot caps',
    'Customization': 'Upholstery color and leg finish customizable per order'
  },
  materials: ['Metal Frame', 'Woven Faux Leather Upholstery', 'Polished Gold Legs'],
  finishes: ['Polished Gold', 'Brushed Gold', 'Chrome'],
  featured: true
},
  {
    id: 'thc-05',
    name: 'Bespoke Dining with Cognac Leather Chairs',
    category: 'furniture manufacturing',
    subcategory: 'Chairs with PVD Legs',
    description: 'Sophisticated dining setup featuring a round marble-topped table and premium cognac-tan leather chairs, available with custom legs in polished gold or rose gold finishes. Crafted to match high-end luxury specifications.',
    image: '/images/client_photos_extracted/furniture_named/dining-leather-chairs-7.jpeg',
    specs: {
      'Seat Upholstery': 'Cognac-brown genuine or top-grade PU leather',
      'Leg Base': 'PVD coated high-tensile steel frame with protective glide tips',
      'Dimensions': '540W x 560D x 860H mm (Seat Height: 450mm)',
      'Custom Options': 'Available in gold, rose gold, and deep matte black',
      'Manufacturer note': 'Directly fabricated in Noida factory to match bespoke heights'
    },
    materials: ['Cognac Leather', 'High-Tensile Steel', 'High-Resilience Foam'],
    finishes: ['Polished Gold PVD', 'Rose Gold PVD', 'Anodized Black'],
    featured: false
  },
  {
    id: 'thc-06',
    name: 'Premium Dual-Pedestal Dining Table (Most Selling 2023)',
    category: 'furniture manufacturing',
    subcategory: 'Trending Series',
    description: 'Our most selling luxury dining table in 2023. Features a heavy rectangular white Carrara marble top resting on double premium gold-finished geometric base pillars. Perfectly paired with grey velvet high-back chairs.',
    image: '/images/client_photos_extracted/furniture_named/dining-table-pvd-coated-6.jpeg',
    specs: {
      'Frame Concept': 'Dual heavy-duty geometric golden pedestal bases',
      'Slab Surface': '18mm polished Carrara marble with chamfered edges',
      'Metal Finish': 'Physical Vapor Deposition (PVD) Mirror Gold',
      'Dimensions': '2000W x 1000D x 750H mm (Custom sizes available)',
      'Popular Configuration': 'Comes as 6-chair or 8-chair package set'
    },
    materials: ['304 Stainless Steel', 'Carrara Marble'],
    finishes: ['Mirror Gold PVD', 'Brushed Brass', 'Chrome Polish'],
    featured: true
  },
  {
  id: 'thc-16',
  name: 'Marble-Top Dining Table Set with PVD-Coated Chairs (Set for 6)',
  category: 'furniture manufacturing',
  subcategory: 'Dining Sets',
  description: 'A sculptural dining set anchored by a rectangular white marble-top table with a bold angular black pedestal base. Paired with six curved-back upholstered dining chairs in soft white, each set on slender black legs finished with vacuum-plated gold tips. The mix of sharp architectural lines and soft rounded seating creates a striking, contemporary dining ensemble.',
  image: '/images/client_photos_extracted/furniture_named/dining-table-pvd-coated-2.jpeg',
  specs: {
    'Table Top': 'White marble-effect surface, rectangular with rounded corners',
    'Table Base': 'Angular black pedestal base',
    'Chair Upholstery': 'White fabric, curved wraparound backrest',
    'Chair Legs': 'Slender tapered legs finished in Black with Gold PVD tips',
    'Set Includes': 'Table + 6 chairs',
    'Customization': 'Table finish, chair upholstery color, and leg finish customizable per order'
  },
  materials: ['Marble-Effect Table Top', 'Metal Table Base', 'Upholstered Chair Shells', 'PVD-Coated Steel Chair Legs'],
  finishes: ['Black PVD Gold Tip', 'Full Chrome', 'Full Brushed Gold'],
  featured: true
},
{
  id: 'thc-17',
  name: 'Round Marble-Top Dining Table Set with Gold-Banded Pedestal (Set for 4)',
  category: 'furniture manufacturing',
  subcategory: 'Dining Sets',
  description: 'An elegant round dining set featuring a white marble-effect tabletop set on a sculptural black hourglass pedestal base, accented with a polished gold band at its center. Paired with four curved-back upholstered dining chairs — available in a mix of black and warm rust upholstery — each set on slim tapered legs with gold-tipped feet. A striking, versatile ensemble suited to both everyday dining and entertaining.',
  image: '/images/client_photos_extracted/furniture_named/dining-table-pvd-coated-3.jpeg',
  specs: {
    'Table Top': 'White marble-effect surface, round',
    'Table Base': 'Black hourglass pedestal with polished gold center band',
    'Chair Upholstery': 'Available in Black or Rust/Orange fabric, curved wraparound backrest',
    'Chair Legs': 'Slender tapered legs finished in Black with Gold tips',
    'Set Includes': 'Table + 4 chairs',
    'Customization': 'Table finish, chair upholstery color, and leg finish customizable per order'
  },
  materials: ['Marble-Effect Table Top', 'Metal Table Base with Gold Band', 'Upholstered Chair Shells', 'Gold-Tipped Steel Chair Legs'],
  finishes: ['Black PVD Gold Tip', 'Full Chrome', 'Full Brushed Gold'],
  featured: false
},
{
  id: 'thc-18',
  name: 'Round Marble-Top Dining Table Set with Angular Gold Legs (Set for 4)',
  category: 'furniture manufacturing',
  subcategory: 'Dining Sets',
  description: 'A modern dining set built around a round white marble-effect tabletop, supported by a striking angular gold pedestal base with splayed, faceted legs. Paired with four curved-back dining chairs upholstered in sleek black, each set on slim tapered gold legs. The bold geometric base makes this set a natural centerpiece for open-plan kitchen and dining spaces.',
  image: '/images/client_photos_extracted/furniture_named/dining-table-pvd-coated-5 .jpeg',
  specs: {
    'Table Top': 'White marble-effect surface, round',
    'Table Base': 'Angular faceted pedestal in Polished Gold',
    'Chair Upholstery': 'Black fabric, curved wraparound backrest',
    'Chair Legs': 'Slender tapered legs finished in Polished Gold',
    'Set Includes': 'Table + 4 chairs',
    'Customization': 'Table finish, chair upholstery color, and leg finish customizable per order'
  },
  materials: ['Marble-Effect Table Top', 'Faceted Metal Table Base', 'Upholstered Chair Shells', 'Polished Gold Steel Chair Legs'],
  finishes: ['Polished Gold', 'Brushed Gold', 'Chrome'],
  featured: false
},
  {
    id: 'thc-07',
    name: 'Triple Cylinder Pedestal Gold Dining Table',
    category: 'furniture manufacturing',
    subcategory: 'Trending Series',
    description: 'A spectacular, trending luxury dining table highlighted by three high-precision heavy cylindrical columns in polished gold, creating a majestic architectural pedestal for a pristine rectangular marble slab.',
    image: '/images/client_photos_extracted/furniture_named/trending-dining-table-1.jpeg',
    specs: {
      'Base Frame': 'Three heavy-gauge metal cylinder pedestal drums',
      'Table Top': 'Premium polished natural quartz or white marble top',
      'Metal Finish': 'High-fidelity vacuum-plated Mirror Gold PVD',
      'Dimensions': '2200W x 1100D x 750H mm (Customizable size)',
      'Production Method': 'CNC metal spinning, hydraulic forming, pristine buffing'
    },
    materials: ['Heavy-Gauge Steel', 'Polished Quartz Stone'],
    finishes: ['Mirror Gold PVD', 'Rose Gold PVD', 'S.S. Satin Finish'],
    featured: false
  },
  {
  id: 'thc-29',
  name: 'Blush Velvet Dining Chair (Set of 4)',
  category: 'furniture manufacturing',
  subcategory: 'Dining Chairs',
  description: 'A softly curved dining chair upholstered in plush blush pink velvet, featuring a wraparound shell back and cushioned seat for relaxed, all-day comfort. Set on slender tapered legs finished in brushed gold, this chair brings a warm, elegant accent to marble-top or glass dining tables alike. Sold as a set of four, with upholstery and leg finish customizable to match any dining collection.',
  image: '/images/client_photos_extracted/furniture_named/dining-pink-onyx-4-chairs-1.jpeg',
  specs: {
    'Upholstery': 'Plush velvet, wraparound shell-back design',
    'Frame': 'Solid hardwood frame with high-density foam padding',
    'Leg Finish': 'Brushed Gold (also available in Rose Gold, Matte Black)',
    'Leg Style': 'Slender tapered metal legs',
    'Set Size': 'Sold as a set of 4',
    'Customization': 'Upholstery color, leg finish, and quantity customizable per order'
  },
  materials: ['Solid Wood Frame', 'Velvet Upholstery', 'Metal Legs'],
  finishes: ['Brushed Gold', 'Rose Gold', 'Matte Black'],
  featured: false
},
{
  id: 'thc-19',
  name: 'Arch-Base Dining Table Set with Teal Velvet Chairs (Set for 6)',
  category: 'furniture manufacturing',
  subcategory: 'Dining Sets',
  description: 'A dramatic dining set built around a rectangular white tabletop supported by a sculptural arched pedestal base, creating a bold negative-space silhouette. Paired with six curved-back dining chairs upholstered in teal velvet, each featuring a botanical-patterned fabric accent on the outer backrest and set on slim black legs with gold-tipped feet. A statement ensemble for contemporary dining rooms.',
  image: '/images/client_photos_extracted/furniture_named/dining-table-pvd-coated-7.jpeg',
  specs: {
    'Table Top': 'White high-gloss rectangular surface',
    'Table Base': 'Sculptural arched pedestal in matte white',
    'Chair Upholstery': 'Teal velvet seat and inner back, botanical-patterned fabric accent on outer back panel',
    'Chair Legs': 'Slender tapered legs finished in Black with Gold-tipped feet',
    'Set Includes': 'Table + 6 chairs',
    'Customization': 'Table finish, chair upholstery color, and back panel pattern customizable per order'
  },
  materials: ['High-Gloss Table Top', 'Sculptural Metal/Composite Table Base', 'Velvet Upholstery', 'Patterned Fabric Accent', 'Gold-Tipped Steel Chair Legs'],
  finishes: ['Black with Gold Tips', 'Brushed Gold', 'Chrome'],
  featured: true
},
{
  id: 'thc-20',
  name: 'Round Marble-Top Dining Table with Lazy Susan and Cognac Leather Chairs (Set for 6)',
  category: 'furniture manufacturing',
  subcategory: 'Dining Sets',
  description: 'A functional yet elegant dining set featuring a round white-and-gold marble-effect tabletop with a built-in rotating lazy susan at its center, supported by an angular matte black pedestal base. Paired with six dining chairs upholstered in warm cognac faux leather with clean stitched detailing, each set on slim black metal legs. A practical, family-friendly set with a refined finish.',
  image: '/images/client_photos_extracted/furniture_named/dining-table-pvd-coated-8.jpeg',
  specs: {
    'Table Top': 'White and gold marble-effect surface, round, with built-in rotating lazy susan',
    'Table Base': 'Angular matte black pedestal, tripod-style legs',
    'Chair Upholstery': 'Cognac faux leather, stitched panel detailing',
    'Chair Legs': 'Slim tapered legs finished in Matte Black',
    'Set Includes': 'Table + 6 chairs',
    'Customization': 'Table finish, chair upholstery color, and leg finish customizable per order'
  },
  materials: ['Marble-Effect Table Top', 'Rotating Lazy Susan Insert', 'Metal Table Base', 'Faux Leather Upholstery', 'Metal Chair Legs'],
  finishes: ['Matte Black', 'Brushed Gold', 'Chrome'],
  featured: false
},
{
  id: 'thc-21',
  name: 'Double Gold-Ring Pedestal Dining Table Set with Blush Velvet Chairs (Set for 4)',
  category: 'furniture manufacturing',
  subcategory: 'Dining Sets',
  description: 'An elegant dining set featuring a white rectangular tabletop supported by a striking double gold-ring pedestal base, its sculptural circular forms adding a sense of lightness beneath the table. Paired with dining armchairs upholstered in soft blush velvet, each featuring a mixed-pattern fabric accent on the outer backrest, set on slim black legs with gold-tipped feet. A refined, romantic dining ensemble.',
  image: '/images/client_photos_extracted/furniture_named/dining-table-pvd-coated-9.jpeg',
  specs: {
    'Table Top': 'White high-gloss rectangular surface',
    'Table Base': 'Double gold-ring pedestal design',
    'Chair Upholstery': 'Blush velvet seat and inner back, patterned fabric accent on outer back panel',
    'Chair Legs': 'Slender tapered legs finished in Black with Gold-tipped feet',
    'Set Includes': 'Table + 4 chairs',
    'Customization': 'Table finish, chair upholstery color, and back panel pattern customizable per order'
  },
  materials: ['High-Gloss Table Top', 'Gold-Ring Metal Table Base', 'Velvet Upholstery', 'Patterned Fabric Accent', 'Gold-Tipped Steel Chair Legs'],
  finishes: ['Black with Gold Tips', 'Brushed Gold', 'Chrome'],
  featured: true
},
{
  id: 'thc-24',
  name: 'X-Base Marble Dining Table Set with Grey Channel-Tufted Armchairs (Set for 6)',
  category: 'furniture manufacturing',
  subcategory: 'Dining Sets',
  description: 'A striking dining set built around a rectangular marble-effect tabletop, supported by a sculptural X-shaped pedestal base finished in polished gold. Paired with six dining armchairs upholstered in grey velvet with vertical channel-tufted stitching, each set on slender gold legs. The bold geometric base and tailored chair detailing bring a refined, contemporary edge to open-plan dining spaces.',
  image: '/images/client_photos_extracted/furniture_named/luxury-dining-table-1.jpeg',
  specs: {
    'Table Top': 'Marble-effect surface, rectangular',
    'Table Base': 'Sculptural X-shaped pedestal in Polished Gold',
    'Chair Upholstery': 'Grey velvet, vertical channel-tufted stitching',
    'Chair Legs': 'Slender tapered legs finished in Polished Gold',
    'Set Includes': 'Table + 6 chairs',
    'Customization': 'Table finish, chair upholstery color, and leg finish customizable per order'
  },
  materials: ['Marble-Effect Table Top', 'Polished Gold Metal Table Base', 'Velvet Upholstery', 'Polished Gold Steel Chair Legs'],
  finishes: ['Polished Gold', 'Brushed Gold', 'Chrome'],
  featured: true
},
{
  id: 'thc-22',
  name: 'Gold-Rimmed Marble Dining Table Set with Cream Open-Frame Chairs (Set for 4)',
  category: 'furniture manufacturing',
  subcategory: 'Dining Sets',
  description: 'A luxe dining set anchored by a round marble-effect tabletop finished with a polished gold rim, set on a sculptural gold hourglass pedestal base. Paired with cream upholstered dining chairs featuring a bold open-frame gold base for a modern, architectural look. The mix of warm gold tones and soft cream upholstery creates a rich, upscale dining statement.',
  image: '/images/client_photos_extracted/furniture_named/dining-with-pvd-coated-1.jpeg',
  specs: {
    'Table Top': 'Marble-effect surface with polished gold rim, round',
    'Table Base': 'Sculptural gold hourglass pedestal',
    'Chair Upholstery': 'Cream fabric, straight tailored backrest',
    'Chair Base': 'Open-frame geometric base in Polished Gold',
    'Set Includes': 'Table + 4 chairs',
    'Customization': 'Table finish, chair upholstery color, and base finish customizable per order'
  },
  materials: ['Marble-Effect Table Top', 'Gold-Plated Table Base', 'Upholstered Chair Shells', 'Open-Frame Gold Steel Chair Base'],
  finishes: ['Polished Gold', 'Brushed Gold', 'Chrome'],
  featured: true
},
  {
    id: 'thc-08',
    name: 'Angled Quad-Tubular Dining Table',
    category: 'furniture manufacturing',
    subcategory: 'Trending Series',
    description: 'A highly contemporary, trending dining table featuring thick gold-plated angled tubular legs intersecting at the base. Completed with a luxurious natural marble top featuring brown and gold veins.',
    image: '/images/client_photos_extracted/furniture_named/trending-round-dining-table-variant-1.jpeg',
    specs: {
      'Leg Architecture': 'Quad-tubular angled intersecting support truss',
      'Table Top': 'Gold-veined natural Italian marble slab with gloss sealer',
      'Metal Finish': 'Premium high-durability Gold PVD coating',
      'Dimensions': '1800W x 900D x 750H mm (Customizable sizes)',
      'Transit Packaging': 'ISTA 6A standard drop-tested timber frame crate'
    },
    materials: ['Structural Tubular Steel', 'Gold-Veined Italian Marble'],
    finishes: ['Mirror Gold PVD', 'Rose Gold PVD', 'Matt Bronze'],
    featured: false
  },
  {
  id: 'thc-25',
  name: 'Rose Gold Pedestal Dining Table Set with Mixed Upholstery Chairs (Set for 6)',
  category: 'furniture manufacturing',
  subcategory: 'Dining Sets',
  description: 'A dramatic dining set featuring a rectangular marble-effect tabletop supported by a bold triangular pedestal base finished in rose gold. The set pairs cream diamond-quilted dining chairs with a striking mixed-finish variant featuring a rich striped wood-tone back panel and quilted cream seat, together creating a layered, gallery-style dining arrangement. Slim black legs with gold-tipped feet complete the look.',
  image: '/images/client_photos_extracted/furniture_named/trending-round-dining-table-variant-4.jpeg',
  specs: {
    'Table Top': 'Marble-effect surface, rectangular',
    'Table Base': 'Sculptural triangular pedestal in Rose Gold',
    'Chair Upholstery': 'Cream diamond-quilted (standard), striped wood-tone back panel with cream quilted seat (accent variant)',
    'Chair Legs': 'Slender tapered legs finished in Black with Gold-tipped feet',
    'Set Includes': 'Table + 6 chairs (mixed upholstery styles)',
    'Customization': 'Table finish, chair upholstery style, and leg finish customizable per order'
  },
  materials: ['Marble-Effect Table Top', 'Rose Gold Metal Table Base', 'Quilted Upholstery', 'Wood-Tone Fabric Accent', 'Gold-Tipped Steel Chair Legs'],
  finishes: ['Black with Gold Tips', 'Brushed Gold', 'Chrome'],
  featured: true
},
{
  id: 'thc-26',
  name: 'Black X-Base Oval Dining Table Set with Blue Channel-Tufted Chairs (Set for 6)',
  category: 'furniture manufacturing',
  subcategory: 'Dining Sets',
  description: 'A contemporary dining set featuring an oval marble-effect tabletop supported by a bold criss-cross X-shaped pedestal base finished in matte black. Paired with six dining armchairs upholstered in steel blue velvet with vertical channel-tufted stitching, each set on slender polished gold legs. The contrast of matte black and warm gold, paired with a rich jewel-toned upholstery, brings a sophisticated, modern edge to the dining space.',
  image: '/images/client_photos_extracted/furniture_named/trending-dining-table-3.jpeg',
  specs: {
    'Table Top': 'Marble-effect surface, oval',
    'Table Base': 'Criss-cross X-shaped pedestal in Matte Black',
    'Chair Upholstery': 'Steel blue velvet, vertical channel-tufted stitching',
    'Chair Legs': 'Slender tapered legs finished in Polished Gold',
    'Set Includes': 'Table + 6 chairs',
    'Customization': 'Table finish, chair upholstery color, and leg finish customizable per order'
  },
  materials: ['Marble-Effect Table Top', 'Matte Black Metal Table Base', 'Velvet Upholstery', 'Polished Gold Steel Chair Legs'],
  finishes: ['Polished Gold', 'Brushed Gold', 'Chrome'],
  featured: true
},
{
  id: 'thc-27',
  name: 'Fluted Twin-Column Dining Table Set with Woven Braid Armchairs (Set for 4)',
  category: 'furniture manufacturing',
  subcategory: 'Dining Sets',
  description: 'A refined dining set featuring an oval white tabletop supported by twin fluted column legs for a soft, architectural look. Paired with dining armchairs featuring an intricately woven, braid-like backrest and arms in cream upholstery with gold trim framing, set on slender gold legs. The combination of sculptural fluted columns and woven texture creates an elegant, textural dining ensemble.',
  image: '/images/client_photos_extracted/furniture_named/trending-dining-table-2.jpeg',
  specs: {
    'Table Top': 'White matte surface, oval',
    'Table Base': 'Twin fluted cylindrical column legs',
    'Chair Upholstery': 'Hand-woven braided design in cream faux leather, gold trim framing',
    'Chair Legs': 'Slender tapered legs finished in Polished Gold',
    'Set Includes': 'Table + 4 chairs',
    'Customization': 'Table finish, chair upholstery color, and leg finish customizable per order'
  },
  materials: ['Matte Table Top', 'Fluted Column Table Base', 'Woven Faux Leather Upholstery', 'Polished Gold Steel Chair Legs'],
  finishes: ['Polished Gold', 'Brushed Gold', 'Chrome'],
  featured: true
},
  {
    id: 'thc-09',
    name: 'Double Ribbon Loop Gold Dining Table',
    category: 'furniture manufacturing',
    subcategory: 'Trending Series',
    description: 'An artistic, trending masterpiece of high-precision furniture engineering. Utilizes continuous flowing gold-plated ribbon loops as load-bearing structural bases. Finished with white cantilevered square base chairs.',
    image: '/images/client_photos_extracted/furniture_named/trending-dining-gold-legs-1.jpeg',
    specs: {
      'Base Geometry': 'Continuous curved ribbon loop design',
      'Table Top': 'Pristine engineered white stone top',
      'Metal Finish': 'Mirror-polish premium Gold PVD vacuum coating',
      'Dimensions': '2000W x 1000D x 750H mm (Customizable size)',
      'Fabrication': 'Laser profile cut, specialized steel hydraulic bending'
    },
    materials: ['Formed Stainless Steel', 'Engineered White Stone'],
    finishes: ['Mirror Gold PVD', 'S.S. Polish', 'Rose Gold PVD'],
    featured: false
  },
  {
    id: 'thc-10',
    name: 'Onyx Round Dining Table (Interlocking Loop Base)',
    category: 'furniture manufacturing',
    subcategory: 'Dining Tables',
    description: 'A breathtaking round dining table featuring golden interlocking circle loops as a central pillar, topped with a gorgeous translucent natural onyx stone top. Also available in 4-chair or 6-chair layouts.',
    image: '/images/client_photos_extracted/furniture_named/trending-round-dining-table-6-chairs-b-1.jpeg',
    specs: {
      'Base Frame': 'Interlocking circular structural loops in heavy-gauge steel',
      'Table Top': 'Premium natural Onyx stone with protective sealant',
      'Metal Finish': 'Mirror Gold PVD / Rose Gold PVD vacuum plating',
      'Dimensions': 'Diameter: 1300mm, Height: 750mm (Bespoke heights available)',
      'Capacity': '4 to 6 chairs seating configurations'
    },
    materials: ['304 Stainless Steel', 'Natural Onyx Stone'],
    finishes: ['Mirror Gold PVD', 'Rose Gold PVD', 'Brushed Champagne'],
    featured: false
  },
  {
    id: 'thc-11',
    name: 'Spiral Cage Round Dining Table',
    category: 'furniture manufacturing',
    subcategory: 'Dining Tables',
    description: 'Round shape dining table with an intricate spiral-woven wire cage pedestal in mirror-finish Gold PVD. Beautifully paired with high-back charcoal grey chairs. Custom configurations available in 4 or 6 chairs.',
    image: '/images/client_photos_extracted/furniture_named/round-dining-table-6-chairs-1.jpeg',
    specs: {
      'Pedestal Design': 'Spiral-woven heavy wire cage profile pedestal',
      'Table Top': '18mm white natural marble top with chamfered edge profile',
      'Metal Finish': 'Brilliant Gold PVD Mirror Plated (Scratch resistant)',
      'Dimensions': 'Diameter: 1200 / 1400 / 1600 mm, Height: 750 mm',
      'Capacity': '4-chair or 6-chair sets (Custom ordered sizes)'
    },
    materials: ['Woven Steel Wireframe', 'Natural White Marble top'],
    finishes: ['Mirror Gold PVD', 'Brushed Brass', 'S.S. Mirror Finish'],
    featured: false
  },
  {
  id: 'thc-23',
  name: 'Matte Black Sideboard with Open Bar Shelf (Gold-Trimmed)',
  category: 'furniture manufacturing',
  subcategory: 'Sideboards & Cabinets',
  description: 'A sleek matte black sideboard combining closed cabinet storage with an open display shelf, ideal for showcasing glassware or bar essentials. Slim gold hardware and a floating gold-trimmed base add a refined contrast to the matte black finish, while integrated drawers with gold pulls offer additional concealed storage. A versatile piece for dining rooms, living rooms, or entryways.',
  image: '/images/client_photos_extracted/furniture_named/home-collection-intro-4.jpeg',
  specs: {
    'Body Finish': 'Matte Black',
    'Storage': 'Two-door cabinet, open display shelf, two drawers',
    'Hardware': 'Gold-finished handles and drawer pulls',
    'Base': 'Floating base with polished gold trim',
    'Customization': 'Body finish and hardware finish customizable per order'
  },
  materials: ['Engineered Wood', 'Tempered Glass Shelf Accent', 'Gold-Plated Metal Hardware'],
  finishes: ['Matte Black with Gold Trim', 'Matte White with Gold Trim', 'Walnut with Gold Trim'],
  featured: false
},
  {
    id: 'thc-12',
    name: 'The Home Collection Handicrafts & Kitchenware Set',
    category: 'furniture manufacturing',
    subcategory: 'Home Collection',
    description: 'Our premier collection of designer copper-lined bowls, gold-gilded serving salad servers, and hand-beaten brass kitchen canisters. Manufactured in our Noida Sector 63 facility, adding handcrafted organic warmth to hospitality and luxury tablescapes.',
    image: '/images/client_photos_extracted/furniture_named/home-collection-intro-2.jpeg',
    specs: {
      'Material Base': 'Food-Grade Pure Brass, Solid Copper, and SS',
      'Finish': 'Hammered Antique Finish / Food-safe lacquer coat',
      'Includes': 'Salad bowls, ice buckets, serving platters, condiment sets',
      'Safety': '100% Lead-Free & FDA Approved protective lacquer coat',
      'Location': 'Noida Sector 63, India (The Home Collection Division)'
    },
    materials: ['Pure Brass', 'Pure Copper', 'Lead-Free Lacquer'],
    finishes: ['Hammered Antique', 'Brushed Copper'],
    featured: false
  }
];

export const MANUFACTURING_STATS = {
  factoryArea: '20,000 SQFT',
  shippingCapacity: '20–25 Containers',
  maxShippingCapacity: '32 Containers',
  destinations: 'USA & European Union',
  inhouseMachinery: [
    { name: 'CNC Laser Cutting Machine', qty: '2 Units', use: 'High-precision metal sheets & pattern carving' },
    { name: 'Hydraulic Power Press', qty: '4 Units', use: 'Bending, stamping, and heavy structural forming' },
    { name: 'Wire Drawing Machine', qty: '1 Unit', use: 'In-house wire mesh and frame webbing fabrication' },
    { name: 'Electroplating & PVD Plants', qty: 'Full Suite', use: 'Flawless luxury gold and rose gold mirror coatings' },
    { name: 'Arc & Spot Welding Bays', qty: '12 Bays', use: 'Seamless metal joints and durable load-bearing bases' },
    { name: 'Buffing & Grinding Stations', qty: '16 Heads', use: 'Hand-polished, ultra-smooth premium surface prep' }
  ],
  packagingStandards: [
    { code: 'ISTA 1A', name: 'Vibration & Shock Safe', detail: 'Tested for single-package shipping protection.' },
    { code: 'ISTA 3A', name: 'Parcel Drop-Ship Certified', detail: 'Standard for parcel delivery shipment transit, ideal for e-commerce.' },
    { code: 'ISTA 6A', name: 'Corporate Standard Safe', detail: 'High-end retail supply-chain packaging standard, drop and stack resistant.' }
  ],
  globalClients: [
    'Hariz Hous',
    'Oliver Home Decor',
    'Kinwoven',
    'Primavera',
    'Riessambient',
    'Riviramasion'
  ]
};
