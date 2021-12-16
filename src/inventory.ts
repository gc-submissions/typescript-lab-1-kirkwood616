import { Product } from "./products";

interface InventoryItem {
  product: Product;
  quantity: number;
}

let inventory: InventoryItem[] = [
  { product: { name: "motor", price: 10 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1.0 }, quantity: 20 },
];

export function calcInventoryValue(item: InventoryItem[]): number {
  let total: number = 0;

  item.forEach((element: any) => {
    total += element.product.price * element.quantity;
  });

  return total;
}

calcInventoryValue(inventory);

let calc = calcInventoryValue(inventory);

console.log(calc);
