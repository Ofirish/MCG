
export interface Item {
  id: string;
  name: string;
  color: string;
}

export interface Recipe {
  id: string;
  output: {
    item: Item;
    count: number;
  };
  pattern: (string | null)[][];
  type: 'crafting_table';
}
