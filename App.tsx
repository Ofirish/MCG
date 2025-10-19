
import React, { useState, useMemo } from 'react';
import { RECIPES } from './data/recipes';
import { Recipe } from './types';
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes = useMemo(() => {
    const lowercasedFilter = searchTerm.toLowerCase();
    if (!lowercasedFilter) {
      return RECIPES;
    }
    return RECIPES.filter(recipe =>
      recipe.output.item.name.toLowerCase().includes(lowercasedFilter)
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-stone-800 text-white p-4 sm:p-6 lg:p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-green-400 tracking-wider" style={{ textShadow: '2px 2px #222' }}>
          Minecraft Crafting Guide
        </h1>
        <p className="text-stone-400 mt-2 text-sm">Your one-stop destination for all crafting recipes!</p>
      </header>
      
      <main className="max-w-6xl mx-auto">
        <div className="mb-8 sticky top-4 z-10">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe: Recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-2xl text-stone-500">No recipes found for "{searchTerm}"</p>
            <p className="text-stone-400 mt-2">Try searching for something else!</p>
          </div>
        )}
      </main>

      <footer className="text-center mt-12 py-4 border-t border-stone-700">
          <p className="text-stone-500 text-xs">&copy; 2024 CraftBook. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
