import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, ZoomOut, RefreshCw, Download, ArrowLeft, ArrowRight, Maximize } from 'lucide-react';

interface ImageZoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  imageName: string;
  imageDescription?: string;
  specs?: Record<string, string>;
  gallery?: { url: string; name: string }[];
  currentGalleryIndex?: number;
  onNavigateGallery?: (index: number) => void;
  colorClass?: string;
  shadeSubcategory?: string;
  fallbackUrl?: string;
}

export default function ImageZoomModal({
  isOpen,
  onClose,
  imageUrl,
  imageName,
  imageDescription,
  specs,
  gallery,
  currentGalleryIndex = 0,
  onNavigateGallery,
  colorClass,
  shadeSubcategory,
  fallbackUrl,
}: ImageZoomModalProps) {
  const [scale, setScale] = useState<number>(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Reset zoom on open or change of image
  useEffect(() => {
    if (isOpen) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, imageUrl]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && gallery && onNavigateGallery) {
        const nextIdx = (currentGalleryIndex + 1) % gallery.length;
        onNavigateGallery(nextIdx);
      }
      if (e.key === 'ArrowLeft' && gallery && onNavigateGallery) {
        const prevIdx = (currentGalleryIndex - 1 + gallery.length) % gallery.length;
        onNavigateGallery(prevIdx);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, gallery, currentGalleryIndex, onNavigateGallery, onClose]);

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = () => {
    setScale((prev) => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) {
        setPosition({ x: 0, y: 0 });
      }
      return next;
    });
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // Drag to pan logic
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (scale <= 1) return;
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || scale <= 1) return;
    e.preventDefault();
    
    // Bounds checking
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;

    // Calculate maximum drag offset based on container vs image scale
    const maxDragX = (container.clientWidth * (scale - 1)) / 2;
    const maxDragY = (container.clientHeight * (scale - 1)) / 2;

    const boundedX = Math.max(-maxDragX, Math.min(maxDragX, newX));
    const boundedY = Math.max(-maxDragY, Math.min(maxDragY, newY));

    setPosition({ x: boundedX, y: boundedY });
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const zoomIntensity = 0.1;
    setScale((prev) => {
      const next = Math.max(1, Math.min(prev - e.deltaY * zoomIntensity * 0.01, 4));
      if (next === 1) {
        setPosition({ x: 0, y: 0 });
      }
      return next;
    });
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `${imageName.replace(/\s+/g, '_').toLowerCase()}_hd.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      // Fallback if CORS prevents fetch
      window.open(imageUrl, '_blank');
    }
  };

  const handleToggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  // Append highest quality settings to Unsplash url
  const hdImageUrl = imageUrl.includes('unsplash.com') 
    ? imageUrl.replace(/w=\d+/, 'w=3000').replace(/q=\d+/, 'q=100').replace(/fit=crop/, 'fit=max') 
    : imageUrl;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-md select-none"
        >
          {/* Top Panel controls */}
          <div className="p-4 md:px-8 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between z-10">
            <div className="text-left max-w-lg">
              <h2 className="text-base md:text-xl font-light text-white tracking-wide uppercase font-sans">
                {imageName}
              </h2>
              <span className="text-[10px] font-mono tracking-widest text-editorial-orange uppercase font-bold">
                Ultra-High-Definition Inspection (100% Zoom Quality)
              </span>
            </div>
            
            <div className="flex items-center gap-2 md:gap-3">
              <button
                onClick={handleZoomIn}
                className="p-2 bg-white/10 hover:bg-editorial-orange text-white rounded-xs transition-colors"
                title="Zoom In"
              >
                <ZoomIn size={16} />
              </button>
              <button
                onClick={handleZoomOut}
                disabled={scale <= 1}
                className="p-2 bg-white/10 hover:bg-editorial-orange text-white rounded-xs transition-colors disabled:opacity-50"
                title="Zoom Out"
              >
                <ZoomOut size={16} />
              </button>
              <button
                onClick={handleReset}
                disabled={scale === 1 && position.x === 0 && position.y === 0}
                className="p-2 bg-white/10 hover:bg-editorial-orange text-white rounded-xs transition-colors disabled:opacity-50"
                title="Reset Zoom"
              >
                <RefreshCw size={16} />
              </button>
              <button
                onClick={handleToggleFullscreen}
                className="p-2 bg-white/10 hover:bg-editorial-orange text-white rounded-xs transition-colors hidden sm:block"
                title="Toggle Fullscreen"
              >
                <Maximize size={16} />
              </button>
              {!colorClass && (
                <button
                  onClick={handleDownload}
                  className="p-2 bg-white/10 hover:bg-editorial-orange text-white rounded-xs transition-colors"
                  title="Download HD Image"
                >
                  <Download size={16} />
                </button>
              )}
              <div className="h-6 w-[1px] bg-white/20 mx-1"></div>
              <button
                onClick={onClose}
                className="p-2 bg-editorial-orange hover:bg-white hover:text-black text-white rounded-xs transition-all duration-300 flex items-center justify-center cursor-pointer"
                title="Close Lightbox"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Core Interactive stage */}
          <div
            ref={containerRef}
            className="flex-1 relative flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            onWheel={handleWheel}
          >
            {/* Gallery Navigation: Left Arrow */}
            {gallery && onNavigateGallery && (
              <button
                onClick={() => onNavigateGallery((currentGalleryIndex - 1 + gallery.length) % gallery.length)}
                className="absolute left-6 z-20 w-12 h-12 rounded-full bg-black/60 border border-white/10 text-white hover:bg-editorial-orange hover:border-editorial-orange flex items-center justify-center transition-all shadow-lg cursor-pointer"
              >
                <ArrowLeft size={20} />
              </button>
            )}

            {/* Main high-resolution image */}
            <motion.div
              style={{
                x: position.x,
                y: position.y,
                scale: scale,
              }}
              transition={isDragging ? { type: 'just' } : { type: 'spring', stiffness: 300, damping: 30 }}
              className="max-h-[75vh] max-w-[90vw] flex items-center justify-center"
            >
              {colorClass ? (
                <div className="w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] md:w-[480px] md:h-[480px] relative overflow-hidden shadow-2xl border border-white/20 rounded-xs select-none pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-tr ${colorClass}`}></div>
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-black/20 mix-blend-overlay"></div>
                  
                  {shadeSubcategory === 'Antiques' && (
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#000000_1px,transparent_1px)] bg-[size:4px_4px]"></div>
                  )}
                  {shadeSubcategory === 'Wooden Shades' && (
                    <div className="absolute inset-0 opacity-15 bg-[repeating-linear-gradient(45deg,#000_0px,#000_2px,transparent_2px,transparent_10deg)]"></div>
                  )}
                </div>
              ) : (
                <img
                  ref={imageRef}
                  src={hdImageUrl}
                  alt={imageName}
                  referrerPolicy="no-referrer"
                  className="object-contain max-h-[75vh] max-w-[90vw] shadow-2xl pointer-events-none select-none"
                  onLoad={() => {
                    // Preload / cache confirmation
                  }}
                  onError={(e) => {
                    if (fallbackUrl && hdImageUrl !== fallbackUrl) {
                      e.currentTarget.src = fallbackUrl;
                    }
                  }}
                />
              )}
            </motion.div>

            {/* Gallery Navigation: Right Arrow */}
            {gallery && onNavigateGallery && (
              <button
                onClick={() => onNavigateGallery((currentGalleryIndex + 1) % gallery.length)}
                className="absolute right-6 z-20 w-12 h-12 rounded-full bg-black/60 border border-white/10 text-white hover:bg-editorial-orange hover:border-editorial-orange flex items-center justify-center transition-all shadow-lg cursor-pointer"
              >
                <ArrowRight size={20} />
              </button>
            )}

            {/* Scale indicator */}
            <div className="absolute bottom-6 bg-black/70 border border-white/10 text-white font-mono text-[10px] px-3 py-1.5 backdrop-blur-md rounded-full pointer-events-none tracking-widest z-10">
              ZOOM: {Math.round(scale * 100)}% {scale > 1 && '• (DRAG IMAGE TO PAN)'}
            </div>
          </div>

          {/* Bottom Info Panels */}
          <div className="p-6 md:px-12 bg-gradient-to-t from-black via-black/90 to-transparent flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-left border-t border-white/5 z-10">
            <div className="max-w-3xl space-y-2">
              {imageDescription && (
                <p className="text-sm text-gray-300 font-serif italic leading-relaxed">
                  {imageDescription}
                </p>
              )}
              {gallery && (
                <div className="text-[10px] font-mono text-gray-400">
                  Item {currentGalleryIndex + 1} of {gallery.length} in gallery
                </div>
              )}
            </div>

            {/* Specifications panel */}
            {specs && Object.keys(specs).length > 0 && (
              <div className="shrink-0 min-w-[250px] bg-white/5 border border-white/10 p-4 max-w-md">
                <span className="text-[9px] uppercase font-mono tracking-widest text-editorial-orange font-bold block mb-2 border-b border-white/10 pb-1">
                  Product Technical Specs
                </span>
                <div className="space-y-1.5 font-mono text-[10px] text-gray-300">
                  {Object.entries(specs).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="flex justify-between gap-4">
                      <span className="text-gray-500 uppercase text-[8px] tracking-wider shrink-0">{key}:</span>
                      <span className="text-white text-right truncate font-bold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
