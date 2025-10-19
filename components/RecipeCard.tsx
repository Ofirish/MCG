
import React from 'react';
import { Recipe } from '../types';
import CraftingGrid from './CraftingGrid';
import ItemSquare from './ItemSquare';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="bg-stone-700/50 border-2 border-stone-600 rounded-lg p-4 flex flex-col items-center gap-4 hover:border-green-500 hover:bg-stone-700 transition-all duration-300">
      <h2 className="text-xl text-center text-green-300 h-14 flex items-center">{recipe.output.item.name}</h2>
      <div className="flex items-center justify-center gap-2 sm:gap-4 w-full">
        <CraftingGrid pattern={recipe.pattern} />
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
        <div className="flex flex-col items-center">
          <ItemSquare item={recipe.output.item} size="large" count={recipe.output.count} />
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
