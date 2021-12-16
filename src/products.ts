export interface Product {
  name: string;
  price: number;
}

let products: Product[] = [
  { name: "Duct Tape", price: 6 },
  { name: "Zip Ties", price: 2 },
  { name: "Shovel", price: 15 },
];

export function calcAverageProductPrice(input: Product[]): number {
  let total: number = 0;

  input.forEach((element: any) => {
    total += element.price;
  });

  let average = total / input.length;

  if (input.length === 0) {
    return total;
  }
  return Math.round(average * 100) / 100;
}

calcAverageProductPrice(products);

let calculate: number = calcAverageProductPrice(products);

console.log(calculate);
