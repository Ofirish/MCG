
import React from 'react';
import { Item } from '../types';

interface ItemSquareProps {
  item: Item | null;
  size?: 'small' | 'large';
  count?: number;
}

const ItemSquare: React.FC<ItemSquareProps> = ({ item, size = 'small', count }) => {
  const sizeClasses = size === 'small' ? 'w-10 h-10 md:w-12 md:h-12' : 'w-16 h-16 md:w-20 md:h-20';
  const textClasses = size === 'small' ? 'text-xs' : 'text-lg';
  
  const abbreviation = item ? item.name.split(' ').map(word => word[0]).join('') : '';

  return (
    <div className={`relative flex items-center justify-center rounded-md border-2 ${item ? item.color : 'bg-stone-800/50 border-stone-700'} ${sizeClasses}`} title={item?.name}>
      {item && (
        <span className={`font-bold text-white ${textClasses}`} style={{textShadow: '1px 1px 2px black'}}>
          {abbreviation}
        </span>
      )}
      {count && count > 1 && (
        <span className="absolute -bottom-1 -right-1 bg-stone-900 text-white text-xs font-bold rounded-full px-1.5 py-0.5 border border-stone-600">
          {count}
        </span>
      )}
    </div>
  );
};

export default ItemSquare;
