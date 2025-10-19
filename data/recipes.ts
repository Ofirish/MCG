
import { Recipe } from '../types';
import { ITEMS } from './items';

export const RECIPES: Recipe[] = [
  {
    id: 'oak_planks',
    output: { item: ITEMS.oak_planks, count: 4 },
    pattern: [
      ['oak_log', null, null],
      [null, null, null],
      [null, null, null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'crafting_table',
    output: { item: ITEMS.crafting_table, count: 1 },
    pattern: [
      ['oak_planks', 'oak_planks', null],
      ['oak_planks', 'oak_planks', null],
      [null, null, null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'stick',
    output: { item: ITEMS.stick, count: 4 },
    pattern: [
      ['oak_planks', null, null],
      ['oak_planks', null, null],
      [null, null, null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'torch',
    output: { item: ITEMS.torch, count: 4 },
    pattern: [
      ['coal', null, null],
      ['stick', null, null],
      [null, null, null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'chest',
    output: { item: ITEMS.chest, count: 1 },
    pattern: [
      ['oak_planks', 'oak_planks', 'oak_planks'],
      ['oak_planks', null, 'oak_planks'],
      ['oak_planks', 'oak_planks', 'oak_planks'],
    ],
    type: 'crafting_table',
  },
  {
    id: 'wooden_pickaxe',
    output: { item: ITEMS.wooden_pickaxe, count: 1 },
    pattern: [
      ['oak_planks', 'oak_planks', 'oak_planks'],
      [null, 'stick', null],
      [null, 'stick', null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'stone_pickaxe',
    output: { item: ITEMS.stone_pickaxe, count: 1 },
    pattern: [
      ['cobblestone', 'cobblestone', 'cobblestone'],
      [null, 'stick', null],
      [null, 'stick', null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'iron_pickaxe',
    output: { item: ITEMS.iron_pickaxe, count: 1 },
    pattern: [
      ['iron_ingot', 'iron_ingot', 'iron_ingot'],
      [null, 'stick', null],
      [null, 'stick', null],
    ],
    type: 'crafting_table',
  },
];
