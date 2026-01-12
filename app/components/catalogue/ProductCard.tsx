"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Product, PricingTier, PRICE_MULTIPLIER } from '@/app/lib/products';
import { VariantSelector } from './VariantSelector';
import { ColorSwatch } from './ColorSwatch';


interface ProductCardProps {
    product: Product;
}

// Map category to default image
const getCategoryImage = (category: 'Men' | 'Women') => {
    return category === 'Men'
        ? '/images/catalogue/product-men-skin.jpg'
        : '/images/catalogue/product-women-topper.jpg';
};

export function ProductCard({ product }: ProductCardProps) {
    const [selectedVariant, setSelectedVariant] = useState<PricingTier | null>(
        product.pricing_tiers ? product.pricing_tiers[0] : null // Default to first tier for women
    );

    // For men's products, we might track selected color
    const [selectedColor, setSelectedColor] = useState<string | null>(
        product.variants ? product.variants[0].color_code : (product.available_colors ? product.available_colors[0] : null)
    );

    // Calculate Price
    const getPrice = () => {
        let basePrice = 0;
        if (product.category === 'Men') {
            basePrice = product.price_retail || 0;
        } else if (product.category === 'Women' && selectedVariant) {
            basePrice = selectedVariant.price;
        }

        return (basePrice * PRICE_MULTIPLIER).toFixed(2);
    };

    return (
        <div className="group relative flex flex-col bg-white overflow-hidden transition-all duration-300 hover:shadow-lg">
            {/* Product Image */}
            <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
                <Image
                    src={getCategoryImage(product.category)}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover overlay/effect */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="p-4 flex flex-col flex-grow gap-2">
                <div className="flex justify-between items-start">
                    <h3 className="font-medium text-stone-900 leading-tight">
                        {product.name}
                    </h3>
                </div>

                <p className="text-sm text-stone-500 line-clamp-2">
                    {product.description}
                </p>

                <div className="mt-auto space-y-3 pt-4">
                    {/* Specifics based on Category */}
                    {product.category === 'Men' && (
                        <div className="text-xs text-stone-500 space-y-1">
                            <p><span className="font-semibold text-stone-700">Base:</span> {product.base_design}</p>
                            <p><span className="font-semibold text-stone-700">Thickness:</span> {product.base_size}</p>
                            {/* Prompt said Base Thickness, but JSON has base_size (8x10). 
                            Looking at JSON: "base_design": "V-Looped Skin", "description" mentions thickness.
                            Let's just show base size and design.
                        */}
                        </div>
                    )}

                    {product.category === 'Women' && product.pricing_tiers && (
                        <div className="space-y-2">
                            <span className="text-xs font-semibold text-stone-700">Select Length:</span>
                            <VariantSelector
                                tiers={product.pricing_tiers}
                                selectedTier={selectedVariant}
                                onSelect={setSelectedVariant}
                            />
                        </div>
                    )}

                    {/* Colors */}
                    {(product.variants || product.available_colors) && (
                        <div className="flex gap-1 flex-wrap">
                            {(product.variants?.map(v => v.color_code) || product.available_colors)?.slice(0, 5).map(color => (
                                <ColorSwatch
                                    key={color}
                                    colorCode={color}
                                    isSelected={selectedColor === color}
                                    onClick={() => setSelectedColor(color)}
                                />
                            ))}
                            {((product.variants?.length || 0) > 5 || (product.available_colors?.length || 0) > 5) && (
                                <div className="text-xs text-stone-400 flex items-center pl-1">+more</div>
                            )}
                        </div>
                    )}

                    <div className="pt-2 border-t border-gray-100 flex justify-between items-center">
                        <span className="text-lg font-light text-stone-900">
                            CHF {getPrice()}
                        </span>
                        <button className="text-xs uppercase tracking-wider font-medium text-stone-800 border-b border-transparent hover:border-stone-800 transition-colors">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
