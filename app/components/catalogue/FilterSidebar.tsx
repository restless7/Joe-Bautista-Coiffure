"use client";

import { cn } from '@/app/lib/utils';
import { Product } from '@/app/lib/products';

interface FilterState {
    category: string | null;
    baseMaterial: string | null;
    baseSize: string | null;
}

interface FilterSidebarProps {
    products: Product[];
    filters: FilterState;
    onFilterChange: (filters: FilterState) => void;
    className?: string;
}

export function FilterSidebar({ products, filters, onFilterChange, className }: FilterSidebarProps) {
    // Extract unique values for filters
    const categories = Array.from(new Set(products.map(p => p.category)));
    const baseMaterials = Array.from(new Set(products.map(p => p.base_design))); // Approximating base material from design
    const baseSizes = Array.from(new Set(products.map(p => p.base_size)));

    const handleCategoryChange = (cat: string) => {
        onFilterChange({
            ...filters,
            category: filters.category === cat ? null : cat
        });
    };

    const handleMaterialChange = (mat: string) => {
        onFilterChange({
            ...filters,
            baseMaterial: filters.baseMaterial === mat ? null : mat
        });
    };

    const handleSizeChange = (size: string) => {
        onFilterChange({
            ...filters,
            baseSize: filters.baseSize === size ? null : size
        });
    };

    return (
        <aside className={cn("w-full md:w-64 space-y-8", className)}>
            <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-900 mb-4">Category</h3>
                <div className="space-y-2">
                    {categories.map(cat => (
                        <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                            <div className={cn(
                                "w-4 h-4 border border-stone-300 rounded-sm flex items-center justify-center transition-colors",
                                filters.category === cat ? "bg-stone-800 border-stone-800" : "group-hover:border-stone-500"
                            )}>
                                {filters.category === cat && <div className="w-2 h-2 bg-white rounded-[1px]" />}
                            </div>
                            <span className={cn("text-sm transition-colors", filters.category === cat ? "text-stone-900 font-medium" : "text-stone-600")}>
                                {cat}
                            </span>
                            <input
                                type="checkbox"
                                className="hidden"
                                checked={filters.category === cat}
                                onChange={() => handleCategoryChange(cat)}
                            />
                        </label>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-900 mb-4">Base Design</h3>
                <div className="space-y-2">
                    {baseMaterials.map(mat => (
                        <label key={mat} className="flex items-center gap-2 cursor-pointer group">
                            <div className={cn(
                                "w-4 h-4 border border-stone-300 rounded-sm flex items-center justify-center transition-colors",
                                filters.baseMaterial === mat ? "bg-stone-800 border-stone-800" : "group-hover:border-stone-500"
                            )}>
                                {filters.baseMaterial === mat && <div className="w-2 h-2 bg-white rounded-[1px]" />}
                            </div>
                            <span className={cn("text-sm transition-colors", filters.baseMaterial === mat ? "text-stone-900 font-medium" : "text-stone-600")}>
                                {mat}
                            </span>
                            <input
                                type="checkbox"
                                className="hidden"
                                checked={filters.baseMaterial === mat}
                                onChange={() => handleMaterialChange(mat)}
                            />
                        </label>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-900 mb-4">Base Size</h3>
                <div className="space-y-2">
                    {baseSizes.map(size => (
                        <label key={size} className="flex items-center gap-2 cursor-pointer group">
                            <div className={cn(
                                "w-4 h-4 border border-stone-300 rounded-sm flex items-center justify-center transition-colors",
                                filters.baseSize === size ? "bg-stone-800 border-stone-800" : "group-hover:border-stone-500"
                            )}>
                                {filters.baseSize === size && <div className="w-2 h-2 bg-white rounded-[1px]" />}
                            </div>
                            <span className={cn("text-sm transition-colors", filters.baseSize === size ? "text-stone-900 font-medium" : "text-stone-600")}>
                                {size}
                            </span>
                            <input
                                type="checkbox"
                                className="hidden"
                                checked={filters.baseSize === size}
                                onChange={() => handleSizeChange(size)}
                            />
                        </label>
                    ))}
                </div>
            </div>
        </aside>
    );
}
