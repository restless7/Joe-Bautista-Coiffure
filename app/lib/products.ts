export type ProductVariant = {
    color_code: string;
    stock_qty: number;
};

export type PricingTier = {
    length: string;
    price: number;
    stock_status: 'Low' | 'In Stock' | 'Pre-order';
};

export type Product = {
    id: string;
    category: 'Men' | 'Women';
    name: string;
    description: string;
    base_design: string;
    base_size: string;
    // Men's specific properties
    density?: string;
    price_retail?: number; // Base retail price for men's
    variants?: ProductVariant[];
    // Women's specific properties
    available_colors?: string[];
    pricing_tiers?: PricingTier[];
};

export const PRICE_MULTIPLIER = 2.5;

export const products: Product[] = [
    {
        id: "men-skin-001",
        category: "Men",
        name: "Ultra-Thin Skin V-Looped System",
        description: "Injected skin base with medium-light density. undetectable hairline.",
        base_design: "V-Looped Skin",
        base_size: "8x10",
        density: "Medium Light",
        price_retail: 120.00,
        variants: [
            { "color_code": "#1B", "stock_qty": 25 },
            { "color_code": "#2", "stock_qty": 10 },
            { "color_code": "#1B20", "stock_qty": 24 }
        ]
    },
    {
        id: "wmn-topper-ET12S101",
        category: "Women",
        name: "Silk Top with Wefted Back Topper (Code: ET12S101)",
        description: "Premium silk top offering realistic scalp appearance with wefted back for volume.",
        base_size: "6x6.5",
        base_design: "Silk Top / Wefted Back",
        available_colors: ["#NB", "#2", "#4", "#6/8/613"],
        pricing_tiers: [
            { "length": "12 inch", "price": 250.00, "stock_status": "Low" },
            { "length": "14 inch", "price": 260.00, "stock_status": "In Stock" },
            { "length": "16 inch", "price": 300.00, "stock_status": "In Stock" },
            { "length": "20 inch", "price": 355.00, "stock_status": "Pre-order" }
        ]
    }
];
