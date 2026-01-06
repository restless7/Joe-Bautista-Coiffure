import { cn } from '@/app/lib/utils';

interface ColorSwatchProps {
    colorCode: string; // e.g., "#1B", "#613", or "multi"
    isSelected?: boolean;
    onClick?: () => void;
    className?: string;
}

export function ColorSwatch({ colorCode, isSelected, onClick, className }: ColorSwatchProps) {
    // Simple logic to handle multi-colors or regular hex codes
    // If it starts with #, treat as hex. If not, maybe handle differently or use a mapping.
    // For the prompt's examples: "#1B", "#2", "#1B20" (mix), "#6/8/613" (mix)

    // For complex codes like 1B20 or 6/8/613, we might need a mapping or a gradient.
    // For now, let's use a simple background logic.

    const getBackgroundStyle = (code: string) => {
        if (code.startsWith('#') && !code.includes('/')) {
            return { backgroundColor: code };
        }
        // Very basic fallback for mixed colors specific to this domain if we don't have images
        if (code.includes('/')) {
            // Create a linear gradient for mixed colors
            const colors = code.split('/').map(c => c.startsWith('#') ? c : `#${c}`);
            // If they are not hex, this won't work perfectly without a mapping, 
            // but let's assume valid hex or basic fallback for now.
            // In a real app we'd have a color map.
            return { background: `linear-gradient(45deg, ${colors.join(', ')})` };
        }

        // Fallback for codes like "1B20" if they aren't standard hex
        // Ideally we would map "1B" to black, "2" to dark brown, etc.
        // For this dummy implementation, let's try to interpret or default to gray.
        return { backgroundColor: '#cccccc' };
    };

    return (
        <button
            onClick={onClick}
            className={cn(
                "w-6 h-6 rounded-full border border-gray-200 transition-all duration-300 relative",
                isSelected && "ring-2 ring-offset-2 ring-stone-800 scale-110",
                className
            )}
            style={getBackgroundStyle(colorCode)}
            title={colorCode}
            aria-label={`Select color ${colorCode}`}
        />
    );
}
