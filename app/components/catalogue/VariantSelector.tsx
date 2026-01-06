import { PricingTier } from '@/app/lib/products';
import { cn } from '@/app/lib/utils';

interface VariantSelectorProps {
    tiers: PricingTier[];
    selectedTier: PricingTier | null;
    onSelect: (tier: PricingTier) => void;
}

export function VariantSelector({ tiers, selectedTier, onSelect }: VariantSelectorProps) {
    return (
        <div className="flex flex-wrap gap-2">
            {tiers.map((tier) => (
                <button
                    key={tier.length}
                    onClick={() => onSelect(tier)}
                    disabled={tier.stock_status === 'Pre-order'} // Optional: disable pre-order? Prompt says just different price.
                    // Let's keep pre-order selectable but maybe style it differently
                    className={cn(
                        "px-3 py-1.5 text-sm border rounded-md transition-all duration-200",
                        selectedTier?.length === tier.length
                            ? "border-stone-800 bg-stone-800 text-white"
                            : "border-gray-200 text-stone-600 hover:border-stone-400",
                        tier.stock_status === 'Low' && "border-amber-200 bg-amber-50/50",
                        tier.stock_status === 'Pre-order' && "opacity-75"
                    )}
                >
                    {tier.length}
                </button>
            ))}
        </div>
    );
}
