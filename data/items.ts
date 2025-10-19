
import { Item } from '../types';

export const ITEMS: { [id: string]: Item } = {
  oak_log: { id: 'oak_log', name: 'Oak Log', color: 'bg-amber-900 border-amber-950' },
  oak_planks: { id: 'oak_planks', name: 'Oak Planks', color: 'bg-amber-700 border-amber-800' },
  stick: { id: 'stick', name: 'Stick', color: 'bg-amber-600 border-amber-700' },
  coal: { id: 'coal', name: 'Coal', color: 'bg-gray-800 border-black' },
  cobblestone: { id: 'cobblestone', name: 'Cobblestone', color: 'bg-stone-500 border-stone-600' },
  crafting_table: { id: 'crafting_table', name: 'Crafting Table', color: 'bg-amber-800 border-amber-900' },
  torch: { id: 'torch', name: 'Torch', color: 'bg-yellow-400 border-yellow-500' },
  wooden_pickaxe: { id: 'wooden_pickaxe', name: 'Wooden Pickaxe', color: 'bg-amber-600 border-amber-700' },
  stone_pickaxe: { id: 'stone_pickaxe', name: 'Stone Pickaxe', color: 'bg-stone-500 border-stone-600' },
  chest: { id: 'chest', name: 'Chest', color: 'bg-orange-800 border-orange-900' },
  iron_ingot: { id: 'iron_ingot', name: 'Iron Ingot', color: 'bg-gray-300 border-gray-400' },
  iron_pickaxe: { id: 'iron_pickaxe', name: 'Iron Pickaxe', color: 'bg-gray-300 border-gray-400' },
};
