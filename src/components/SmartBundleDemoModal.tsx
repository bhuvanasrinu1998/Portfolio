import React, { useState } from 'react';
import { X, Sparkles, ShoppingBag, ArrowRight, CheckCircle2, Layers } from 'lucide-react';

interface SmartBundleDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

interface DemoItem {
  id: string;
  name: string;
  category: string;
  price: number;
  reason: string;
}

export const SmartBundleDemoModal: React.FC<SmartBundleDemoModalProps> = ({
  isOpen,
  onClose,
  isDark,
}) => {
  const [activeCartItem, setActiveCartItem] = useState<'laptop_bag' | 'mechanical_keyboard' | 'fitness_tracker'>('laptop_bag');
  const [bundleAdded, setBundleAdded] = useState<boolean>(false);

  if (!isOpen) return null;

  const catalog = {
    laptop_bag: {
      name: 'Water-Resistant Technical Laptop Backpack (15.6")',
      category: 'Electronics & Bags',
      cartPrice: 42,
      bundleTitle: 'Commuter Tech Accessory Bundle',
      recommendations: [
        { id: '1', name: 'Shockproof Cable Organizer Pouch', category: 'Accessories', price: 14, reason: 'High purchase co-occurrence with laptop backpacks' },
        { id: '2', name: 'Slim 65W GaN Fast Charger & Type-C Cable', category: 'Power', price: 24, reason: 'Frequently paired with daily digital commuters' },
      ],
      discountPercent: 12,
    },
    mechanical_keyboard: {
      name: 'Tenkeyless Wireless Mechanical Keyboard',
      category: 'Computer Peripherals',
      cartPrice: 65,
      bundleTitle: 'Ergonomic Desk Pairing',
      recommendations: [
        { id: '1', name: 'High-Density Memory Foam Wrist Rest', category: 'Ergonomics', price: 18, reason: 'Commonly selected alongside tenkeyless keyboards' },
        { id: '2', name: 'Microfiber Waterproof Desk Mat (800x300mm)', category: 'Deskware', price: 16, reason: 'Desk ecosystem complement' },
      ],
      discountPercent: 10,
    },
    fitness_tracker: {
      name: 'Health & Activity Smart Band',
      category: 'Wearables',
      cartPrice: 38,
      bundleTitle: 'Activity & Recovery Bundle',
      recommendations: [
        { id: '1', name: 'Breathable Silicone Sport Bands (2-Pack)', category: 'Straps', price: 12, reason: 'High replacement strap affinity' },
        { id: '2', name: 'Magnetic Fast-Charging Dock', category: 'Accessories', price: 10, reason: 'Convenience accessory bundle' },
      ],
      discountPercent: 15,
    }
  };

  const current = catalog[activeCartItem];
  const bundleAddonSum = current.recommendations.reduce((sum, item) => sum + item.price, 0);
  const rawTotal = current.cartPrice + bundleAddonSum;
  const savings = Math.round(bundleAddonSum * (current.discountPercent / 100));
  const finalPrice = rawTotal - savings;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border ${
          isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        } shadow-2xl p-6 sm:p-7`}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SmartBundle AI Interactive Concept</span>
            </div>
            <h3 className="text-lg font-display font-bold tracking-tight mt-0.5">
              Cart-Aware Bundle Recommendation Flow
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/60"
            aria-label="Close interactive modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Concept Description */}
        <p className="text-xs text-slate-400 mt-4 leading-relaxed">
          This interactive preview illustrates how SmartBundle AI inspects an active shopping cart item and dynamically synthesizes complementary product combinations based on purchase context.
        </p>

        {/* Step 1: Active Cart Item Selection */}
        <div className="mt-5">
          <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
            1. Select Simulated In-Cart Item:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {[
              { id: 'laptop_bag', label: 'Laptop Backpack', price: '$42' },
              { id: 'mechanical_keyboard', label: 'Mechanical Keyboard', price: '$65' },
              { id: 'fitness_tracker', label: 'Activity Smart Band', price: '$38' },
            ].map((prod) => (
              <button
                key={prod.id}
                onClick={() => {
                  setActiveCartItem(prod.id as any);
                  setBundleAdded(false);
                }}
                className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                  activeCartItem === prod.id
                    ? 'border-cyan-500 bg-cyan-500/10 text-cyan-300 font-medium'
                    : isDark
                    ? 'border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    : 'border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                <div className="font-semibold truncate">{prod.label}</div>
                <div className="font-mono text-[11px] text-slate-400 mt-0.5">{prod.price} in cart</div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Algorithmic Output */}
        <div
          className={`mt-6 p-4 rounded-xl border ${
            isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-cyan-400 font-semibold">
              2. Dynamically Generated Bundle:
            </span>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              Save ${savings} ({current.discountPercent}% Off Add-ons)
            </span>
          </div>

          <div className="text-sm font-semibold text-slate-200 mb-3">{current.bundleTitle}</div>

          <div className="space-y-2">
            {current.recommendations.map((item) => (
              <div
                key={item.id}
                className={`p-2.5 rounded-lg border text-xs flex items-center justify-between ${
                  isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
                }`}
              >
                <div>
                  <div className="font-medium text-slate-200">{item.name}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{item.reason}</div>
                </div>
                <span className="font-mono text-slate-300 ml-3 shrink-0">${item.price}</span>
              </div>
            ))}
          </div>

          {/* Pricing Summary */}
          <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
            <div>
              <span className="text-slate-400">Regular combined: </span>
              <span className="line-through text-slate-400 font-mono">${rawTotal}</span>
              <span className="ml-2 font-semibold text-slate-200">
                Bundle Total: <span className="text-emerald-400 font-mono">${finalPrice}</span>
              </span>
            </div>

            <button
              onClick={() => setBundleAdded(!bundleAdded)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                bundleAdded
                  ? 'bg-emerald-600 text-white'
                  : 'bg-cyan-600 hover:bg-cyan-500 text-white'
              }`}
            >
              {bundleAdded ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Bundle Added</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Simulate Add Bundle</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-4 text-center text-[11px] font-mono text-slate-400">
          SmartBundle AI · DEMUX 3.0 Hackathon Team Project
        </div>
      </div>
    </div>
  );
};
