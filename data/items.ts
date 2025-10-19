import { Item } from '../types';

export const ITEMS: { [id: string]: Item } = {
  // Existing
  oak_log: { id: 'oak_log', name: 'Oak Log', color: 'bg-amber-900 border-amber-950' },
  oak_planks: { id: 'oak_planks', name: 'Oak Planks', color: 'bg-amber-700 border-amber-800' },
  stick: { id: 'stick', name: 'Stick', color: 'bg-amber-600 border-amber-700' },
  coal: { id: 'coal', name: 'Coal', color: 'bg-gray-800 border-black' },
  cobblestone: { id: 'cobblestone', name: 'Cobblestone', color: 'bg-stone-500 border-stone-600' },
  crafting_table: { id: 'crafting_table', name: 'Crafting Table', color: 'bg-amber-800 border-amber-900' },
  torch: { id: 'torch', name: 'Torch', color: 'bg-yellow-400 border-yellow-500' },
  chest: { id: 'chest', name: 'Chest', color: 'bg-orange-800 border-orange-900' },
  iron_ingot: { id: 'iron_ingot', name: 'Iron Ingot', color: 'bg-gray-300 border-gray-400' },

  // New Raw Materials
  diamond: { id: 'diamond', name: 'Diamond', color: 'bg-cyan-400 border-cyan-500' },
  leather: { id: 'leather', name: 'Leather', color: 'bg-orange-900 border-orange-950' },
  stone: { id: 'stone', name: 'Stone', color: 'bg-stone-400 border-stone-500' },
  glass: { id: 'glass', name: 'Glass', color: 'bg-gray-200/50 border-gray-300/60' },
  redstone_dust: { id: 'redstone_dust', name: 'Redstone Dust', color: 'bg-red-600 border-red-700' },
  wheat: { id: 'wheat', name: 'Wheat', color: 'bg-yellow-500 border-yellow-600' },
  sugar_cane: { id: 'sugar_cane', name: 'Sugar Cane', color: 'bg-green-500 border-green-600' },
  paper: { id: 'paper', name: 'Paper', color: 'bg-gray-100 border-gray-200' },
  sugar: { id: 'sugar', name: 'Sugar', color: 'bg-white border-gray-100' },
  egg: { id: 'egg', name: 'Egg', color: 'bg-stone-200 border-stone-300' },
  milk_bucket: { id: 'milk_bucket', name: 'Milk Bucket', color: 'bg-gray-300 border-gray-400' },
  flint: { id: 'flint', name: 'Flint', color: 'bg-gray-700 border-gray-800' },
  string: { id: 'string', name: 'String', color: 'bg-gray-200 border-gray-300' },
  feather: { id: 'feather', name: 'Feather', color: 'bg-white border-gray-100' },
  wool_white: { id: 'wool_white', name: 'White Wool', color: 'bg-gray-100 border-gray-200' },
  
  // Tools (Existing and New)
  wooden_pickaxe: { id: 'wooden_pickaxe', name: 'Wooden Pickaxe', color: 'bg-amber-600 border-amber-700' },
  wooden_axe: { id: 'wooden_axe', name: 'Wooden Axe', color: 'bg-amber-600 border-amber-700' },
  wooden_shovel: { id: 'wooden_shovel', name: 'Wooden Shovel', color: 'bg-amber-600 border-amber-700' },
  wooden_sword: { id: 'wooden_sword', name: 'Wooden Sword', color: 'bg-amber-600 border-amber-700' },
  wooden_hoe: { id: 'wooden_hoe', name: 'Wooden Hoe', color: 'bg-amber-600 border-amber-700' },
  
  stone_pickaxe: { id: 'stone_pickaxe', name: 'Stone Pickaxe', color: 'bg-stone-500 border-stone-600' },
  stone_axe: { id: 'stone_axe', name: 'Stone Axe', color: 'bg-stone-500 border-stone-600' },
  stone_shovel: { id: 'stone_shovel', name: 'Stone Shovel', color: 'bg-stone-500 border-stone-600' },
  stone_sword: { id: 'stone_sword', name: 'Stone Sword', color: 'bg-stone-500 border-stone-600' },
  stone_hoe: { id: 'stone_hoe', name: 'Stone Hoe', color: 'bg-stone-500 border-stone-600' },

  iron_pickaxe: { id: 'iron_pickaxe', name: 'Iron Pickaxe', color: 'bg-gray-300 border-gray-400' },
  iron_axe: { id: 'iron_axe', name: 'Iron Axe', color: 'bg-gray-300 border-gray-400' },
  iron_shovel: { id: 'iron_shovel', name: 'Iron Shovel', color: 'bg-gray-300 border-gray-400' },
  iron_sword: { id: 'iron_sword', name: 'Iron Sword', color: 'bg-gray-300 border-gray-400' },
  iron_hoe: { id: 'iron_hoe', name: 'Iron Hoe', color: 'bg-gray-300 border-gray-400' },
  
  diamond_pickaxe: { id: 'diamond_pickaxe', name: 'Diamond Pickaxe', color: 'bg-cyan-400 border-cyan-500' },
  diamond_axe: { id: 'diamond_axe', name: 'Diamond Axe', color: 'bg-cyan-400 border-cyan-500' },
  diamond_shovel: { id: 'diamond_shovel', name: 'Diamond Shovel', color: 'bg-cyan-400 border-cyan-500' },
  diamond_sword: { id: 'diamond_sword', name: 'Diamond Sword', color: 'bg-cyan-400 border-cyan-500' },
  diamond_hoe: { id: 'diamond_hoe', name: 'Diamond Hoe', color: 'bg-cyan-400 border-cyan-500' },

  // Armor
  iron_helmet: { id: 'iron_helmet', name: 'Iron Helmet', color: 'bg-gray-300 border-gray-400' },
  iron_chestplate: { id: 'iron_chestplate', name: 'Iron Chestplate', color: 'bg-gray-300 border-gray-400' },
  iron_leggings: { id: 'iron_leggings', name: 'Iron Leggings', color: 'bg-gray-300 border-gray-400' },
  iron_boots: { id: 'iron_boots', name: 'Iron Boots', color: 'bg-gray-300 border-gray-400' },

  // Blocks & Building
  furnace: { id: 'furnace', name: 'Furnace', color: 'bg-stone-600 border-stone-700' },
  glass_pane: { id: 'glass_pane', name: 'Glass Pane', color: 'bg-gray-200/50 border-gray-300/60' },
  ladder: { id: 'ladder', name: 'Ladder', color: 'bg-amber-600 border-amber-700' },
  oak_fence: { id: 'oak_fence', name: 'Oak Fence', color: 'bg-amber-700 border-amber-800' },
  oak_door: { id: 'oak_door', name: 'Oak Door', color: 'bg-amber-700 border-amber-800' },
  oak_trapdoor: { id: 'oak_trapdoor', name: 'Oak Trapdoor', color: 'bg-amber-700 border-amber-800' },
  oak_stairs: { id: 'oak_stairs', name: 'Oak Stairs', color: 'bg-amber-700 border-amber-800' },
  oak_slab: { id: 'oak_slab', name: 'Oak Slab', color: 'bg-amber-700 border-amber-800' },

  // Redstone
  redstone_torch: { id: 'redstone_torch', name: 'Redstone Torch', color: 'bg-red-600 border-red-700' },
  lever: { id: 'lever', name: 'Lever', color: 'bg-stone-500 border-stone-600' },

  // Other
  shears: { id: 'shears', name: 'Shears', color: 'bg-gray-300 border-gray-400' },
  bucket: { id: 'bucket', name: 'Bucket', color: 'bg-gray-300 border-gray-400' },
  flint_and_steel: { id: 'flint_and_steel', name: 'Flint and Steel', color: 'bg-gray-300 border-gray-400' },
  bowl: { id: 'bowl', name: 'Bowl', color: 'bg-amber-600 border-amber-700' },
  bread: { id: 'bread', name: 'Bread', color: 'bg-orange-400 border-orange-500' },
  cake: { id: 'cake', name: 'Cake', color: 'bg-pink-300 border-pink-400' },
  bow: { id: 'bow', name: 'Bow', color: 'bg-amber-600 border-amber-700' },
  arrow: { id: 'arrow', name: 'Arrow', color: 'bg-amber-600 border-amber-700' },
  book: { id: 'book', name: 'Book', color: 'bg-blue-600 border-blue-700' },
  bookshelf: { id: 'bookshelf', name: 'Bookshelf', color: 'bg-amber-700 border-amber-800' },
  painting: { id: 'painting', name: 'Painting', color: 'bg-amber-700 border-amber-800' },
  bed_white: { id: 'bed_white', name: 'White Bed', color: 'bg-red-600 border-red-700' },
};
