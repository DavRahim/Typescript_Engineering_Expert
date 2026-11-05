console.log(7 + 4);

type TStudent = {
  readonly name: string;
  id: number;
  age: number;
  roll: number;
  className?: string;
};

const student1: TStudent = {
  id: 30,
  name: "Mohammad",
  age: 50,
  roll: 50,
  className: "Class L-2",
};
const student2: TStudent = {
  id: 30,
  name: "Mohammad",
  age: 50,
  roll: 50,
};

console.log(student1.name);
console.log(student2.className);

type THasName = { name: string };
type THasRole = { roll: number };
type THasFee = { fee: number };

type FullStudent = THasName & THasRole & { grade: TStudent };

const fulls: FullStudent = {
  name: "mohammad",
  roll: 5,
  grade: {
    age: 23,
    id: 3,
    name: "sd",
    roll: 3,
  },
};

type BkashPay = { method: "bkash"; number: number };
type CardPay = { method: "card"; cardNo: number; expDate: string; cvc: number };
type CashPay = { method: "cash" };

type Payment = BkashPay | CardPay | CashPay;

function pay(p: Payment) {
  if (p.method === "bkash") {
    console.log(`Send to bkash number ${p.number}`);
  }
  if (p.method === "card") {
    console.log(`Send to card number ${p.cardNo}`);
  }
  console.log("pay cash taka");
}

pay({ method: "bkash", number: 2303232 });

function greed(name: string, mood?: string, emoji = "?") {
  console.log(`${emoji} ${name} is mood ${mood ?? "Okay"}`);
}

greed("Rahim", "Happy", "**");
