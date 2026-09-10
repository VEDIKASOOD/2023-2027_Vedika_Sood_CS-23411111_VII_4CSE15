export interface PowderShade {
  name: string;
  code: string;
  subcategory: string;
  image: string;
}

export const POWDER_SHADES: PowderShade[] = [
  // Antiques
  { name: 'Red', code: 'HKT 0315', subcategory: 'Antiques', image: '/images/finish_swatches/powder-coating-swatches/swatches/antiques_Red_HKT0315.png' },
  { name: 'Copper A', code: 'HKT 0345', subcategory: 'Antiques', image: '/images/finish_swatches/powder-coating-swatches/swatches/antiques_Copper-A_HKT0345.png' },
  { name: 'Gold', code: 'HKT 0301', subcategory: 'Antiques', image: '/images/finish_swatches/powder-coating-swatches/swatches/antiques_Gold_HKT0301.png' },
  { name: 'Copper S', code: 'HKT 0314', subcategory: 'Antiques', image: '/images/finish_swatches/powder-coating-swatches/swatches/antiques_Copper-S_HKT0314.png' },
  { name: 'Silver', code: 'HKT 0302', subcategory: 'Antiques', image: '/images/finish_swatches/powder-coating-swatches/swatches/antiques_Silver_HKT0302.png' },
  // Metallics
  { name: 'Golden Pink', code: 'HNS 0316', subcategory: 'Metallics', image: '/images/finish_swatches/powder-coating-swatches/swatches/metallics_Golden-Pink_HNS0316.png' },
  { name: 'Rusty Brown', code: 'HNS 0272', subcategory: 'Metallics', image: '/images/finish_swatches/powder-coating-swatches/swatches/metallics_Rusty-Brown_HNS0272.png' },
  { name: 'Gold LM', code: 'HNS 0245', subcategory: 'Metallics', image: '/images/finish_swatches/powder-coating-swatches/swatches/metallics_Gold-LM_HNS0245.png' },
  { name: 'Bright Gold', code: 'HNS 0236', subcategory: 'Metallics', image: '/images/finish_swatches/powder-coating-swatches/swatches/metallics_Bright-Gold_HNS0236.png' },
  { name: 'Sparkle Silver', code: 'PNS 0301', subcategory: 'Metallics', image: '/images/finish_swatches/powder-coating-swatches/swatches/metallics_Sparkle-Silver_PNS0301.png' },
  { name: 'Copper SC', code: 'HNS 0306', subcategory: 'Metallics', image: '/images/finish_swatches/powder-coating-swatches/swatches/metallics_Copper-SC_HNS0306.png' },
  { name: 'Brass', code: 'HNS 0214', subcategory: 'Metallics', image: '/images/finish_swatches/powder-coating-swatches/swatches/metallics_Brass_HNS0214.png' },
  { name: 'Black Sparkle', code: 'HNS 0904', subcategory: 'Metallics', image: '/images/finish_swatches/powder-coating-swatches/swatches/metallics_Black-Sparkle_HNS0904.png' },
  // Matt Finish
  { name: 'Bright silver', code: 'VL 04', subcategory: 'Matt Finish', image: '/images/finish_swatches/powder-coating-swatches/swatches/matt-finish_Bright-Silver_VL04.png' },
  { name: 'Champagne Gold', code: 'VL 06', subcategory: 'Matt Finish', image: '/images/finish_swatches/powder-coating-swatches/swatches/matt-finish_Champagne-Gold_VL06.png' },
  { name: 'Copper Metallic', code: 'VL 15', subcategory: 'Matt Finish', image: '/images/finish_swatches/powder-coating-swatches/swatches/matt-finish_Copper-Metallic_VL15.png' },
  { name: 'Super Gold', code: 'VL 22', subcategory: 'Matt Finish', image: '/images/finish_swatches/powder-coating-swatches/swatches/matt-finish_Super-Gold_VL22.png' },
  { name: 'Magic Gold', code: 'VL 24', subcategory: 'Matt Finish', image: '/images/finish_swatches/powder-coating-swatches/swatches/matt-finish_Magic-Gold_VL24.png' },
  { name: 'Black silver', code: 'VL 14', subcategory: 'Matt Finish', image: '/images/finish_swatches/powder-coating-swatches/swatches/matt-finish_Black-Silver_VL14.png' },
  { name: 'Rose metallic', code: 'VL 29', subcategory: 'Matt Finish', image: '/images/finish_swatches/powder-coating-swatches/swatches/matt-finish_Rose-Metallic_VL29.png' },
  { name: 'S.S Finish', code: 'VL 32', subcategory: 'Matt Finish', image: '/images/finish_swatches/powder-coating-swatches/swatches/matt-finish_SS-Finish_VL32.png' },
  { name: 'Brush silver', code: 'VL 15', subcategory: 'Matt Finish', image: '/images/finish_swatches/powder-coating-swatches/swatches/matt-finish_Brush-Silver_VL15.png' },
  { name: 'Bright white', code: 'VL 08', subcategory: 'Matt Finish', image: '/images/finish_swatches/powder-coating-swatches/swatches/matt-finish_Bright-White_VL08.png' },
  // Mix Shades
  { name: 'Black', code: 'HG 9100', subcategory: 'Mix Shades', image: '/images/finish_swatches/powder-coating-swatches/swatches/mix-shades_Black_HG9100.png' },
  { name: 'Clear', code: 'HG 1130', subcategory: 'Mix Shades', image: '/images/finish_swatches/powder-coating-swatches/swatches/mix-shades_Clear_HG1130.png' },
  { name: 'Light brown', code: 'HGS 8304', subcategory: 'Mix Shades', image: '/images/finish_swatches/powder-coating-swatches/swatches/mix-shades_Light-Brown_HGS8304.png' },
  { name: 'Copper transparent', code: 'HKS 0309', subcategory: 'Mix Shades', image: '/images/finish_swatches/powder-coating-swatches/swatches/mix-shades_Copper-Transparent_HKS0309.png' },
  { name: 'Milky white glossy', code: 'HGS 1339', subcategory: 'Mix Shades', image: '/images/finish_swatches/powder-coating-swatches/swatches/mix-shades_Milky-White-Glossy_HGS1339.png' },
  { name: 'Candy Rose', code: 'HG 29', subcategory: 'Mix Shades', image: '/images/finish_swatches/powder-coating-swatches/swatches/mix-shades_Candy-Rose.png' },
  { name: 'Golden Mirror', code: 'HG 06', subcategory: 'Mix Shades', image: '/images/finish_swatches/powder-coating-swatches/swatches/mix-shades_Golden-Mirror.png' },
  { name: 'Silver Chrome', code: 'HG 04', subcategory: 'Mix Shades', image: '/images/finish_swatches/powder-coating-swatches/swatches/mix-shades_Silver-Chrome.png' },
  // Wooden Shades
  { name: 'Chestnut', code: 'WS 101', subcategory: 'Wooden Shades', image: '/images/finish_swatches/powder-coating-swatches/swatches/wooden-shades-1_Chestnut.png' },
  { name: 'Casuarina', code: 'WS 102', subcategory: 'Wooden Shades', image: '/images/finish_swatches/powder-coating-swatches/swatches/wooden-shades-1_Casuarina.png' },
  { name: 'Golden Oak', code: 'WS 914', subcategory: 'Wooden Shades', image: '/images/finish_swatches/powder-coating-swatches/swatches/wooden-shades-1_Golden-Oak.png' },
  { name: 'Western Red Cedar', code: 'WS 103', subcategory: 'Wooden Shades', image: '/images/finish_swatches/powder-coating-swatches/swatches/wooden-shades-1_Western-Red-Cedar.png' },
  { name: 'Walnut Burl', code: 'WS 912', subcategory: 'Wooden Shades', image: '/images/finish_swatches/powder-coating-swatches/swatches/wooden-shades-1_Walnut-Burl.png' },
  { name: 'Teak', code: 'WS 104', subcategory: 'Wooden Shades', image: '/images/finish_swatches/powder-coating-swatches/swatches/wooden-shades-1_Teak.png' },
  { name: 'Snow Gum', code: 'WS 105', subcategory: 'Wooden Shades', image: '/images/finish_swatches/powder-coating-swatches/swatches/wooden-shades-1_Snow-Gum.png' },
  { name: 'French Oak', code: 'WS 918', subcategory: 'Wooden Shades', image: '/images/finish_swatches/powder-coating-swatches/swatches/wooden-shades-1_French-Oak.png' },
  { name: 'Merlot', code: 'WS 106', subcategory: 'Wooden Shades', image: '/images/finish_swatches/powder-coating-swatches/swatches/wooden-shades-1_Merlot.png' },
  { name: 'Black onyx', code: 'WS 405', subcategory: 'Wooden Shades', image: '/images/finish_swatches/powder-coating-swatches/swatches/wooden-shades-1_Black-Onyx.png' },
  { name: 'White Oak', code: 'WS 107', subcategory: 'Wooden Shades', image: '/images/finish_swatches/powder-coating-swatches/swatches/wooden-shades-2_White-Oak.png' },
  { name: 'Ebony', code: 'WS 108', subcategory: 'Wooden Shades', image: '/images/finish_swatches/powder-coating-swatches/swatches/wooden-shades-2_Ebony.png' },
  { name: 'Antique white', code: 'WS 109', subcategory: 'Wooden Shades', image: '/images/finish_swatches/powder-coating-swatches/swatches/wooden-shades-2_Antique-White.png' },
  { name: 'Rose Mahogany', code: 'WS 110', subcategory: 'Wooden Shades', image: '/images/finish_swatches/powder-coating-swatches/swatches/wooden-shades-2_Rose-Mahogany.png' },
  { name: 'Curly Birch', code: 'WS 111', subcategory: 'Wooden Shades', image: '/images/finish_swatches/powder-coating-swatches/swatches/wooden-shades-2_Curly-Birch.png' },
  { name: 'Jarrah', code: 'WS 112', subcategory: 'Wooden Shades', image: '/images/finish_swatches/powder-coating-swatches/swatches/wooden-shades-2_Jarrah.png' },
  { name: 'Dark mocha', code: 'WS 113', subcategory: 'Wooden Shades', image: '/images/finish_swatches/powder-coating-swatches/swatches/wooden-shades-2_Dark-Mocha.png' },
  { name: 'Charcoal', code: 'WS 114', subcategory: 'Wooden Shades', image: '/images/finish_swatches/powder-coating-swatches/swatches/wooden-shades-2_Charcoal.png' },
  { name: 'Cherry', code: 'WS 115', subcategory: 'Wooden Shades', image: '/images/finish_swatches/powder-coating-swatches/swatches/wooden-shades-2_Cherry.png' },
  { name: 'Driftwood', code: 'WS 116', subcategory: 'Wooden Shades', image: '/images/finish_swatches/powder-coating-swatches/swatches/wooden-shades-2_Driftwood.png' },
];

export const WOODEN_PLANK_PHOTOS = [
  { name: 'Wood Plank Shade 03', file: 'color-3.jpg' },
  { name: 'Wood Plank Shade 04', file: 'color-4.jpg' },
  { name: 'Wood Plank Shade 05', file: 'Color-5.jpg' },
  { name: 'Wood Plank Shade 06', file: 'color-6.jpg' },
  { name: 'Wood Plank Shade 07', file: 'color-7.jpg' },
  { name: 'Wood Plank Shade 08', file: 'color-8.jpg' },
  { name: 'Wood Plank Shade 09', file: 'color-9.jpg' },
];