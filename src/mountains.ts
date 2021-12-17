export interface Mountain {
  name: string;
  height: number;
}

let mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

export function findNameOfTallestMountain(mntn: Mountain[]): string {
  let tallest: number = 0;
  let name: string = "";
  mntn.forEach((element: any) => {
    if (element.height > tallest) {
      tallest = element.height;
      name = element.name;
    }
  });

  return name;
}

findNameOfTallestMountain(mountains);

let findTallest: string = findNameOfTallestMountain(mountains);

console.log(findTallest);
