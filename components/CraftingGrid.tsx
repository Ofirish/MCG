
import React from 'react';
import { ITEMS } from '../data/items';
import ItemSquare from './ItemSquare';

interface CraftingGridProps {
  pattern: (string | null)[][];
}

const CraftingGrid: React.FC<CraftingGridProps> = ({ pattern }) => {
  return (
    <div className="grid grid-cols-3 gap-1 bg-stone-900/50 p-1 border-2 border-stone-600 rounded-md">
      {Array.from({ length: 9 }).map((_, index) => {
        const row = Math.floor(index / 3);
        const col = index % 3;
        const itemId = pattern[row]?.[col] || null;
        const item = itemId ? ITEMS[itemId] : null;
        return <ItemSquare key={index} item={item} />;
      })}
    </div>
  );
};

export default CraftingGrid;
