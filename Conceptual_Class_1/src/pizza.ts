type Topping = "cheese" | "olive" | "corn";

export type Pizza = {
  name: string;
  toppings: Topping[];
};

const menu: Pizza[] = [
  {
    name: "pizza1",
    toppings: ["cheese"],
  },
  {
    name: "pizza2",
    toppings: ["corn", "corn"],
  },
  {
    name: "pizza3",
    toppings: ["corn", "cheese"],
  },
];


const makePizza = (name: string, toppings:[]){
    
}