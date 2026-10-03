import React, { useState } from 'react';
import { PRICING_PACKAGES, PRICING_CATEGORIES } from '../data/content';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Check, MessageCircle, Sparkles } from 'lucide-react';

interface PricingProps {
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({
  selectedCategory = 'all',
  onCategoryChange,
}) => {
  const [activeTab, setActiveTab] = useState<string>(selectedCategory);

  const handleTabClick = (categoryId: string) => {
    setActiveTab(categoryId);
    if (onCategoryChange) {
      onCategoryChange(categoryId);
    }
  };

  // Sync if parent updates selectedCategory
  React.useEffect(() => {
    if (selectedCategory) {
      setActiveTab(selectedCategory);
    }
  }, [selectedCategory]);

  const filteredPackages =
    activeTab === 'all'
      ? PRICING_PACKAGES
      : PRICING_PACKAGES.filter((pkg) => pkg.categoryId === activeTab);

  return (
    <section id="pricing" className="py-20 md:py-28 bg-white border-t border-[#E0E5EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#0D1B3D] uppercase">
            TRANSPARENT INVESTMENT
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D1B3D] tracking-tight [text-wrap:balance]">
            Complete Service & Pricing Catalog.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#647084] leading-relaxed [text-wrap:pretty]">
            All prices are stated clearly in Indian Rupees (INR). Retain transparent deliverables
            and get an instant quotation for your exact requirements.
          </p>
        </div>

        {/* Category Navigation Tabs (Zero Pill Rule: functional segmented controls) */}
        <div className="mt-10 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1.5 bg-[#F5F7FA] border border-[#E0E5EC] rounded-xl">
            {PRICING_CATEGORIES.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleTabClick(cat.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all duration-150 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400] ${
                    isActive
                      ? 'bg-[#0D1B3D] text-white shadow-xs'
                      : 'text-[#647084] hover:text-[#0D1B3D] hover:bg-white/60'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredPackages.map((pkg) => {
            const isPopular = pkg.popular;

            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between p-6 sm:p-8 rounded-xl transition-all duration-200 ${
                  isPopular
                    ? 'bg-[#F5F7FA] border-2 border-[#0D1B3D] shadow-md'
                    : 'bg-white border border-[#E0E5EC] hover:border-slate-400/60 shadow-xs'
                }`}
              >
                {/* Popular Marker */}
                {isPopular && (
                  <div className="absolute -top-3 left-6 inline-flex items-center gap-1 px-3 py-1 bg-[#F4B400] text-[#0D1B3D] text-[11px] font-extrabold uppercase tracking-wider rounded-md shadow-xs">
                    <Sparkles className="w-3 h-3" />
                    <span>Popular Choice</span>
                  </div>
                )}

                <div>
                  {/* Title & Tagline */}
                  <div className="pt-1">
                    <h3 className="text-xl font-bold text-[#0D1B3D] tracking-tight">
                      {pkg.title}
                    </h3>
                    {pkg.tagline && (
                      <p className="mt-1.5 text-xs text-[#647084] min-h-[32px] [text-wrap:pretty]">
                        {pkg.tagline}
                      </p>
                    )}
                  </div>

                  {/* Price Display */}
                  <div className="mt-5 pb-5 border-b border-[#E0E5EC] flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#0D1B3D] tabular-nums tracking-tight">
                      {pkg.price}
                    </span>
                    {pkg.isStartingPrice && (
                      <span className="text-base font-bold text-[#F4B400] ml-0.5">+</span>
                    )}
                    <span className="text-xs text-[#647084] ml-2 font-medium">
                      {pkg.isStartingPrice ? 'starting price' : 'fixed package'}
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="mt-6 space-y-3" aria-label="Included features">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#263247]">
                        <div className="w-4 h-4 rounded-full bg-[#0D1B3D]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#0D1B3D]">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Package Specific Disclaimer / Note if any */}
                  {pkg.disclaimer && (
                    <div className="mt-5 p-3 rounded-lg bg-white/80 border border-[#E0E5EC] text-[11px] leading-relaxed text-[#647084]">
                      <span className="font-semibold text-[#0D1B3D]">Note: </span>
                      {pkg.disclaimer}
                    </div>
                  )}
                </div>

                {/* Bottom CTA Action Button */}
                <div className="mt-8 pt-4">
                  <a
                    href={getWhatsAppUrl(pkg.quoteMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold rounded-lg transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400] whitespace-nowrap shadow-xs ${
                      isPopular
                        ? 'bg-[#0D1B3D] hover:bg-[#152857] text-white'
                        : 'bg-white hover:bg-slate-50 text-[#0D1B3D] border border-[#0D1B3D]/30 hover:border-[#0D1B3D]'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 text-[#F4B400]" />
                    <span>Get a Quote</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Catalog Disclaimer Note */}
        <div className="mt-12 p-4 sm:p-5 rounded-xl bg-[#F5F7FA] border border-[#E0E5EC] text-xs text-[#647084] leading-relaxed">
          <p>
            <strong className="text-[#0D1B3D]">Pricing presentation rules: </strong>
            All package quotes are provided transparently based on agreed scope. Deliverables,
            milestones, and integrations are documented in written quotations prior to project
            commencement.
          </p>
        </div>
      </div>
    </section>
  );
};
