import React, { useState, useRef } from 'react';
import { Send, CheckCircle, Upload, FileText, Star, Building, Briefcase } from 'lucide-react';

interface ContactFormProps {
  initialProduct?: string;
  themeMode: 'industrial' | 'luxury';
}

export function ContactForm({ initialProduct = '', themeMode }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productInterestedIn: initialProduct || 'Industrial Finishing Systems',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = 'INQ-' + Math.floor(100000 + Math.random() * 900000);
    
    const existing = JSON.parse(localStorage.getItem('future_furnishing_inquiries') || '[]');
    existing.push({ id, ...formData, timestamp: new Date().toISOString() });
    localStorage.setItem('future_furnishing_inquiries', JSON.stringify(existing));

    setInquiryId(id);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      productInterestedIn: 'Industrial Finishing Systems',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <div className="bg-white border border-gray-200 p-6 md:p-8 text-left">
      {submitted ? (
        <div className="text-center py-8">
          <div className="w-12 h-12 bg-emerald-600 text-white flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={22} />
          </div>
          <h3 className="text-lg font-light tracking-tight text-editorial-blue mb-1.5">
            Corporate Inquiry <span className="font-black italic">Submitted</span>
          </h3>
          <p className="text-xs text-stone-500 max-w-sm mx-auto mb-4 font-serif italic">
            We have registered your B2B RFQ with Reference Code <span className="font-mono font-bold text-editorial-orange">{inquiryId}</span>.
          </p>
          <p className="text-xs text-stone-400 max-w-xs mx-auto mb-6 leading-relaxed">
            Amit Tyagi (Product Owner) and our export desk have been notified. A detailed pro-forma estimation sheet will be sent to <span className="font-semibold text-stone-700">{formData.email}</span> within 4 hours.
          </p>
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-editorial-blue hover:bg-editorial-orange text-white font-bold uppercase text-[10px] tracking-widest transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1.5">Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Amit Tyagi"
                className="w-full text-xs px-3.5 py-2.5 bg-gray-50 border border-gray-200 focus:border-editorial-orange focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1.5">Corporate Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="buyer@vesseldecor.com"
                className="w-full text-xs px-3.5 py-2.5 bg-gray-50 border border-gray-200 focus:border-editorial-orange focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1.5">Phone Number *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 XXXXX XXXXX"
                className="w-full text-xs px-3.5 py-2.5 bg-gray-50 border border-gray-200 focus:border-editorial-orange focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1.5">Firm / Company Name *</label>
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g. Hariz Hous Ltd"
                className="w-full text-xs px-3.5 py-2.5 bg-gray-50 border border-gray-200 focus:border-editorial-orange focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1.5">Product Segment of Interest *</label>
            <select
              required
              value={formData.productInterestedIn}
              onChange={(e) => setFormData({ ...formData, productInterestedIn: e.target.value })}
              className="w-full text-xs px-3.5 py-2.5 bg-gray-50 border border-gray-200 focus:border-editorial-orange focus:outline-none transition-colors"
            >
              <option value="Industrial Finishing Systems">Industrial Finishing Systems (Machinery / Plants)</option>
              <option value="Advanced Coating Solutions">Advanced Coating Solutions (Color / Shades)</option>
              <option value="The Home Collection">The Home Collection (Luxury PVD Furniture)</option>
              <option value="Global Export Volume Contract">Global Export Volume Contract (Bulk Shipping)</option>
              <option value="Custom Bespoke Production">Custom Bespoke OEM Manufacturing</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1.5">Your Message / RFQ Specifications</label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Provide exact product quantities, custom size/height demands for tables, steel gauge preferences (304 vs 202), or preferred curing energy source..."
              className="w-full text-xs px-3.5 py-2.5 bg-gray-50 border border-gray-200 focus:border-editorial-orange focus:outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-editorial-blue hover:bg-editorial-orange text-white font-bold uppercase text-[10px] tracking-widest transition-colors flex items-center justify-center space-x-2"
          >
            <Send size={12} />
            <span>Submit B2B Quotation Request</span>
          </button>
        </form>
      )}
    </div>
  );
}

export function DealerRegistrationForm({ themeMode }: { themeMode: 'industrial' | 'luxury' }) {
  const [formData, setFormData] = useState({
    firmName: '',
    contactPerson: '',
    email: '',
    phone: '',
    gstNumber: '',
    address: '',
    state: '',
    experienceYears: '3',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem('future_furnishing_dealers') || '[]');
    existing.push({
      id: 'DLR-' + Math.floor(10000 + Math.random() * 90000),
      ...formData,
      experienceYears: parseInt(formData.experienceYears, 10),
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem('future_furnishing_dealers', JSON.stringify(existing));
    setSubmitted(true);
  };

  return (
    <div className="bg-white border border-gray-200 p-6 md:p-8 text-left">
      {submitted ? (
        <div className="text-center py-8">
          <div className="w-12 h-12 bg-emerald-600 text-white flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={22} />
          </div>
          <h3 className="text-lg font-light tracking-tight text-editorial-blue mb-1.5">
            Application Lodged <span className="font-black italic">Successfully</span>
          </h3>
          <p className="text-xs text-stone-500 max-w-sm mx-auto mb-4 font-serif italic">
            Our corporate expansion bureau has registered your firm, <span className="font-bold text-stone-800">{formData.firmName}</span>.
          </p>
          <p className="text-xs text-stone-400 max-w-xs mx-auto mb-6 leading-relaxed">
            Our Regional Territory Manager will contact you via <span className="font-semibold text-stone-700">{formData.phone}</span> to request financial credentials and discuss dealership margin structures.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-3 bg-editorial-blue hover:bg-editorial-orange text-white font-bold uppercase text-[10px] tracking-widest transition-colors"
          >
            Apply for Another Region
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="p-4 bg-editorial-orange/10 border border-editorial-orange/20 flex items-start space-x-3 mb-2">
            <Star size={16} className="text-editorial-orange shrink-0 mt-0.5" />
            <div className="text-[11px] text-stone-600 leading-relaxed font-serif italic text-left">
              <span className="font-bold text-stone-800">Dealer Benefits:</span> Selected dealers receive high profit-margin margins, lead sharing, direct factory catalogs, and customized physical displays for our powder finish shade cards.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1.5">Registered Firm Name *</label>
              <input
                type="text"
                required
                value={formData.firmName}
                onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
                placeholder="e.g. Tyagi Hardware and Coating Ltd"
                className="w-full text-xs px-3.5 py-2.5 bg-gray-50 border border-gray-200 focus:border-editorial-orange focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1.5">Contact Person *</label>
              <input
                type="text"
                required
                value={formData.contactPerson}
                onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                placeholder="Name of proprietor"
                className="w-full text-xs px-3.5 py-2.5 bg-gray-50 border border-gray-200 focus:border-editorial-orange focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1.5">Official Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="contact@firmname.com"
                className="w-full text-xs px-3.5 py-2.5 bg-gray-50 border border-gray-200 focus:border-editorial-orange focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1.5">Direct Mobile *</label>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1.5">GSTIN / Tax Number (Optional)</label>
              <input
                type="text"
                value={formData.gstNumber}
                onChange={(e) => setFormData({ ...formData, gstNumber: e.target.value })}
                placeholder="06AAAAA0000A1Z1"
                className="w-full text-xs px-3.5 py-2.5 bg-gray-50 border border-gray-200 focus:border-editorial-orange focus:outline-none font-mono text-left"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1.5">Experience in Industry *</label>
              <select
                required
                value={formData.experienceYears}
                onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                className="w-full text-xs px-3.5 py-2.5 bg-gray-50 border border-gray-200 focus:border-editorial-orange focus:outline-none transition-colors"
              >
                <option value="1">Less than 1 Year</option>
                <option value="3">1 to 3 Years</option>
                <option value="5">3 to 5 Years</option>
                <option value="10">More than 5 Years</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1.5">Business Location State *</label>
              <input
                type="text"
                required
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                placeholder="e.g. Haryana / Delhi / Maharashtra"
                className="w-full text-xs px-3.5 py-2.5 bg-gray-50 border border-gray-200 focus:border-editorial-orange focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1.5">Full Warehouse Address *</label>
              <input
                type="text"
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Specify street address, town, pincode"
                className="w-full text-xs px-3.5 py-2.5 bg-gray-50 border border-gray-200 focus:border-editorial-orange focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1.5">Sales Infrastructure Details</label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your client base, current monthly sales turn-over, or product storage facility size..."
              className="w-full text-xs px-3.5 py-2.5 bg-gray-50 border border-gray-200 focus:border-editorial-orange focus:outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-editorial-blue hover:bg-editorial-orange text-white font-bold uppercase text-[10px] tracking-widest transition-colors flex items-center justify-center space-x-2"
          >
            <Building size={12} />
            <span>Apply for Dealership License</span>
          </button>
        </form>
      )}
    </div>
  );
}

export function CareerForm({ themeMode }: { themeMode: 'industrial' | 'luxury' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: 'CNC Operator / Program Specialist',
    experience: '2-5 Years',
    coverLetter: '',
  });
  const [uploadedFile, setUploadedFile] = useState<{ name: string; size: string } | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setUploadedFile({
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2) + ' MB'
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFile({
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2) + ' MB'
      });
    }
  };

  const onButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem('future_furnishing_careers') || '[]');
    existing.push({
      id: 'APP-' + Math.floor(1000 + Math.random() * 9000),
      ...formData,
      resumeName: uploadedFile?.name || 'Simulated_Resume.pdf',
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem('future_furnishing_careers', JSON.stringify(existing));
    setSubmitted(true);
  };

  return (
    <div className="bg-white border border-gray-200 p-6 md:p-8 text-left">
      {submitted ? (
        <div className="text-center py-8">
          <div className="w-12 h-12 bg-emerald-600 text-white flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={22} />
          </div>
          <h3 className="text-lg font-light tracking-tight text-editorial-blue mb-1.5">
            Application <span className="font-black italic">Submitted</span>
          </h3>
          <p className="text-xs text-stone-500 max-w-sm mx-auto mb-4 font-serif italic">
            Thank you, <span className="font-bold text-stone-800">{formData.fullName}</span>. Your employment application has been received.
          </p>
          <p className="text-xs text-stone-400 max-w-xs mx-auto mb-6 leading-relaxed">
            Our Human Resources department will evaluate your experience profile against active engineering/welding criteria. We will contact you at <span className="font-semibold text-stone-700">{formData.phone}</span>.
          </p>
          <button
            onClick={() => { setSubmitted(false); setUploadedFile(null); }}
            className="px-6 py-3 bg-editorial-blue hover:bg-editorial-orange text-white font-bold uppercase text-[10px] tracking-widest transition-colors"
          >
            Apply for Another Position
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1.5">Full Name *</label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Rajesh Kumar"
                className="w-full text-xs px-3.5 py-2.5 bg-gray-50 border border-gray-200 focus:border-editorial-orange focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1.5">Personal Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="rajesh@gmail.com"
                className="w-full text-xs px-3.5 py-2.5 bg-gray-50 border border-gray-200 focus:border-editorial-orange focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1.5">Phone Number *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 XXXXX XXXXX"
                className="w-full text-xs px-3.5 py-2.5 bg-gray-50 border border-gray-200 focus:border-editorial-orange focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1.5">Target Position *</label>
              <select
                required
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                className="w-full text-xs px-3.5 py-2.5 bg-gray-50 border border-gray-200 focus:border-editorial-orange focus:outline-none transition-colors"
              >
                <option value="CNC Operator / Program Specialist">CNC Operator / Program Specialist</option>
                <option value="Lead TIG/MIG Spot Welder">Lead TIG/MIG Spot Welder</option>
                <option value="PVD Plating Chamber Technician">PVD Plating Chamber Technician</option>
                <option value="Industrial Oven Design Engineer">Industrial Oven Design Engineer</option>
                <option value="B2B Regional Marketing Executive">B2B Regional Marketing Executive</option>
                <option value="Furniture Upholstery Master Artisan">Furniture Upholstery Master Artisan</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1.5">Relevant Experience *</label>
            <div className="flex space-x-6">
              {['1-2 Years', '2-5 Years', '5-8 Years', '8+ Years'].map((exp) => (
                <label key={exp} className="flex items-center space-x-2 text-xs text-stone-700 cursor-pointer">
                  <input
                    type="radio"
                    name="experience"
                    value={exp}
                    checked={formData.experience === exp}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="text-editorial-orange focus:ring-editorial-orange"
                  />
                  <span>{exp}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1.5">Upload Resume / CV *</label>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
            
            {/* Drag & Drop Area */}
            <div
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onDrop={handleDrop}
              onClick={onButtonClick}
              className={`border-2 border-dashed p-6 text-center cursor-pointer transition-colors ${
                dragActive 
                  ? 'border-editorial-orange bg-editorial-orange/5' 
                  : uploadedFile 
                    ? 'border-emerald-600 bg-emerald-50/10' 
                    : 'border-gray-300 hover:border-editorial-orange bg-gray-50'
              }`}
            >
              {uploadedFile ? (
                <div className="space-y-1">
                  <FileText className="mx-auto text-emerald-600" size={28} />
                  <p className="text-xs font-bold text-stone-800">{uploadedFile.name}</p>
                  <p className="text-[10px] text-stone-400">{uploadedFile.size}</p>
                  <p className="text-[10px] text-emerald-600 font-bold">Resume Loaded - Click to change</p>
                </div>
              ) : (
                <div className="space-y-1">
                  <Upload className="mx-auto text-stone-400" size={28} />
                  <p className="text-xs font-bold text-stone-700">Drag & Drop Resume File</p>
                  <p className="text-[10px] text-stone-400">PDF, Word Document up to 5MB (Click to browse)</p>
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1.5">Cover Letter / Technical Background</label>
            <textarea
              rows={3}
              value={formData.coverLetter}
              onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
              placeholder="Detail your experience operating laser machinery, managing high-voltage spray systems, or handcrafting luxury furniture..."
              className="w-full text-xs px-3.5 py-2.5 bg-gray-50 border border-gray-200 focus:border-editorial-orange focus:outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-editorial-blue hover:bg-editorial-orange text-white font-bold uppercase text-[10px] tracking-widest transition-colors flex items-center justify-center space-x-2"
          >
            <Briefcase size={12} />
            <span>Submit Employment Application</span>
          </button>
        </form>
      )}
    </div>
  );
}
