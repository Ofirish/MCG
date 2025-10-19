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
  {
    id: 'wooden_axe',
    output: { item: ITEMS.wooden_axe, count: 1 },
    pattern: [
      ['oak_planks', 'oak_planks', null],
      ['oak_planks', 'stick', null],
      [null, 'stick', null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'wooden_shovel',
    output: { item: ITEMS.wooden_shovel, count: 1 },
    pattern: [
      ['oak_planks', null, null],
      ['stick', null, null],
      ['stick', null, null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'wooden_sword',
    output: { item: ITEMS.wooden_sword, count: 1 },
    pattern: [
      ['oak_planks', null, null],
      ['oak_planks', null, null],
      ['stick', null, null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'wooden_hoe',
    output: { item: ITEMS.wooden_hoe, count: 1 },
    pattern: [
      ['oak_planks', 'oak_planks', null],
      [null, 'stick', null],
      [null, 'stick', null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'stone_axe',
    output: { item: ITEMS.stone_axe, count: 1 },
    pattern: [
      ['cobblestone', 'cobblestone', null],
      ['cobblestone', 'stick', null],
      [null, 'stick', null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'stone_shovel',
    output: { item: ITEMS.stone_shovel, count: 1 },
    pattern: [
      ['cobblestone', null, null],
      ['stick', null, null],
      ['stick', null, null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'stone_sword',
    output: { item: ITEMS.stone_sword, count: 1 },
    pattern: [
      ['cobblestone', null, null],
      ['cobblestone', null, null],
      ['stick', null, null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'stone_hoe',
    output: { item: ITEMS.stone_hoe, count: 1 },
    pattern: [
      ['cobblestone', 'cobblestone', null],
      [null, 'stick', null],
      [null, 'stick', null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'iron_axe',
    output: { item: ITEMS.iron_axe, count: 1 },
    pattern: [
      ['iron_ingot', 'iron_ingot', null],
      ['iron_ingot', 'stick', null],
      [null, 'stick', null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'iron_shovel',
    output: { item: ITEMS.iron_shovel, count: 1 },
    pattern: [
      ['iron_ingot', null, null],
      ['stick', null, null],
      ['stick', null, null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'iron_sword',
    output: { item: ITEMS.iron_sword, count: 1 },
    pattern: [
      ['iron_ingot', null, null],
      ['iron_ingot', null, null],
      ['stick', null, null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'iron_hoe',
    output: { item: ITEMS.iron_hoe, count: 1 },
    pattern: [
      ['iron_ingot', 'iron_ingot', null],
      [null, 'stick', null],
      [null, 'stick', null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'diamond_pickaxe',
    output: { item: ITEMS.diamond_pickaxe, count: 1 },
    pattern: [
      ['diamond', 'diamond', 'diamond'],
      [null, 'stick', null],
      [null, 'stick', null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'diamond_axe',
    output: { item: ITEMS.diamond_axe, count: 1 },
    pattern: [
      ['diamond', 'diamond', null],
      ['diamond', 'stick', null],
      [null, 'stick', null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'diamond_shovel',
    output: { item: ITEMS.diamond_shovel, count: 1 },
    pattern: [
      ['diamond', null, null],
      ['stick', null, null],
      ['stick', null, null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'diamond_sword',
    output: { item: ITEMS.diamond_sword, count: 1 },
    pattern: [
      ['diamond', null, null],
      ['diamond', null, null],
      ['stick', null, null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'diamond_hoe',
    output: { item: ITEMS.diamond_hoe, count: 1 },
    pattern: [
      ['diamond', 'diamond', null],
      [null, 'stick', null],
      [null, 'stick', null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'furnace',
    output: { item: ITEMS.furnace, count: 1 },
    pattern: [
      ['cobblestone', 'cobblestone', 'cobblestone'],
      ['cobblestone', null, 'cobblestone'],
      ['cobblestone', 'cobblestone', 'cobblestone'],
    ],
    type: 'crafting_table',
  },
  {
    id: 'iron_helmet',
    output: { item: ITEMS.iron_helmet, count: 1 },
    pattern: [
      ['iron_ingot', 'iron_ingot', 'iron_ingot'],
      ['iron_ingot', null, 'iron_ingot'],
      [null, null, null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'iron_chestplate',
    output: { item: ITEMS.iron_chestplate, count: 1 },
    pattern: [
      ['iron_ingot', null, 'iron_ingot'],
      ['iron_ingot', 'iron_ingot', 'iron_ingot'],
      ['iron_ingot', 'iron_ingot', 'iron_ingot'],
    ],
    type: 'crafting_table',
  },
  {
    id: 'iron_leggings',
    output: { item: ITEMS.iron_leggings, count: 1 },
    pattern: [
      ['iron_ingot', 'iron_ingot', 'iron_ingot'],
      ['iron_ingot', null, 'iron_ingot'],
      ['iron_ingot', null, 'iron_ingot'],
    ],
    type: 'crafting_table',
  },
  {
    id: 'iron_boots',
    output: { item: ITEMS.iron_boots, count: 1 },
    pattern: [
      [null, null, null],
      ['iron_ingot', null, 'iron_ingot'],
      ['iron_ingot', null, 'iron_ingot'],
    ],
    type: 'crafting_table',
  },
  {
    id: 'bucket',
    output: { item: ITEMS.bucket, count: 1 },
    pattern: [
      ['iron_ingot', null, 'iron_ingot'],
      [null, 'iron_ingot', null],
      [null, null, null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'shears',
    output: { item: ITEMS.shears, count: 1 },
    pattern: [
      [null, 'iron_ingot', null],
      ['iron_ingot', null, null],
      [null, null, null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'flint_and_steel',
    output: { item: ITEMS.flint_and_steel, count: 1 },
    pattern: [
      ['iron_ingot', 'flint', null],
      [null, null, null],
      [null, null, null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'glass_pane',
    output: { item: ITEMS.glass_pane, count: 16 },
    pattern: [
      ['glass', 'glass', 'glass'],
      ['glass', 'glass', 'glass'],
      [null, null, null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'ladder',
    output: { item: ITEMS.ladder, count: 3 },
    pattern: [
      ['stick', null, 'stick'],
      ['stick', 'stick', 'stick'],
      ['stick', null, 'stick'],
    ],
    type: 'crafting_table',
  },
  {
    id: 'oak_fence',
    output: { item: ITEMS.oak_fence, count: 3 },
    pattern: [
      ['oak_planks', 'stick', 'oak_planks'],
      ['oak_planks', 'stick', 'oak_planks'],
      [null, null, null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'oak_door',
    output: { item: ITEMS.oak_door, count: 3 },
    pattern: [
      ['oak_planks', 'oak_planks', null],
      ['oak_planks', 'oak_planks', null],
      ['oak_planks', 'oak_planks', null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'oak_trapdoor',
    output: { item: ITEMS.oak_trapdoor, count: 2 },
    pattern: [
      ['oak_planks', 'oak_planks', 'oak_planks'],
      ['oak_planks', 'oak_planks', 'oak_planks'],
      [null, null, null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'oak_stairs',
    output: { item: ITEMS.oak_stairs, count: 4 },
    pattern: [
      ['oak_planks', null, null],
      ['oak_planks', 'oak_planks', null],
      ['oak_planks', 'oak_planks', 'oak_planks'],
    ],
    type: 'crafting_table',
  },
  {
    id: 'oak_slab',
    output: { item: ITEMS.oak_slab, count: 6 },
    pattern: [
      [null, null, null],
      [null, null, null],
      ['oak_planks', 'oak_planks', 'oak_planks'],
    ],
    type: 'crafting_table',
  },
  {
    id: 'redstone_torch',
    output: { item: ITEMS.redstone_torch, count: 1 },
    pattern: [
      ['redstone_dust', null, null],
      ['stick', null, null],
      [null, null, null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'lever',
    output: { item: ITEMS.lever, count: 1 },
    pattern: [
      ['stick', null, null],
      ['cobblestone', null, null],
      [null, null, null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'bowl',
    output: { item: ITEMS.bowl, count: 4 },
    pattern: [
      ['oak_planks', null, 'oak_planks'],
      [null, 'oak_planks', null],
      [null, null, null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'bread',
    output: { item: ITEMS.bread, count: 1 },
    pattern: [
      ['wheat', 'wheat', 'wheat'],
      [null, null, null],
      [null, null, null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'paper',
    output: { item: ITEMS.paper, count: 3 },
    pattern: [
      [null, null, null],
      ['sugar_cane', 'sugar_cane', 'sugar_cane'],
      [null, null, null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'sugar',
    output: { item: ITEMS.sugar, count: 1 },
    pattern: [
      ['sugar_cane', null, null],
      [null, null, null],
      [null, null, null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'book',
    output: { item: ITEMS.book, count: 1 },
    pattern: [
      ['paper', null, null],
      ['paper', 'leather', null],
      ['paper', null, null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'bookshelf',
    output: { item: ITEMS.bookshelf, count: 1 },
    pattern: [
      ['oak_planks', 'oak_planks', 'oak_planks'],
      ['book', 'book', 'book'],
      ['oak_planks', 'oak_planks', 'oak_planks'],
    ],
    type: 'crafting_table',
  },
  {
    id: 'bed_white',
    output: { item: ITEMS.bed_white, count: 1 },
    pattern: [
      ['wool_white', 'wool_white', 'wool_white'],
      ['oak_planks', 'oak_planks', 'oak_planks'],
      [null, null, null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'bow',
    output: { item: ITEMS.bow, count: 1 },
    pattern: [
      [null, 'stick', 'string'],
      ['stick', null, 'string'],
      [null, 'stick', 'string'],
    ],
    type: 'crafting_table',
  },
  {
    id: 'arrow',
    output: { item: ITEMS.arrow, count: 4 },
    pattern: [
      ['flint', null, null],
      ['stick', null, null],
      ['feather', null, null],
    ],
    type: 'crafting_table',
  },
  {
    id: 'painting',
    output: { item: ITEMS.painting, count: 1 },
    pattern: [
      ['stick', 'stick', 'stick'],
      ['stick', 'wool_white', 'stick'],
      ['stick', 'stick', 'stick'],
    ],
    type: 'crafting_table',
  },
  {
    id: 'cake',
    output: { item: ITEMS.cake, count: 1 },
    pattern: [
      ['milk_bucket', 'milk_bucket', 'milk_bucket'],
      ['sugar', 'egg', 'sugar'],
      ['wheat', 'wheat', 'wheat'],
    ],
    type: 'crafting_table',
  },
];