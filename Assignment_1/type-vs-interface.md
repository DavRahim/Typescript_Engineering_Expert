# TypeScript-এ `type` বনাম `interface`: কোনটি কখন ব্যবহার করবেন?

## ভূমিকা

TypeScript-এ ডেটার আকৃতি বর্ণনা করতে আমরা `type` এবং `interface` দুটোই ব্যবহার করি। দেখতে অনেকটা একই মনে হলেও দুটোর মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য আছে। সঠিক জায়গায় সঠিকটি বেছে নিলে কোড আরও পরিষ্কার ও নিরাপদ হয়।

## মূল পার্থক্য

প্রথমত, `interface` শুধু object-এর shape বর্ণনা করতে পারে। অন্যদিকে `type` দিয়ে union, tuple ও primitive-এর নামও দেওয়া যায়।

```typescript
type ID = string | number;
type Point = [number, number];

interface User {
  name: string;
  id: number;
  role: "admin" | "member";
}
```

দ্বিতীয়ত, একই নামে দুটি `interface` লিখলে TypeScript সেগুলোকে জুড়ে দেয়, একে declaration merging বলে। কিন্তু `type`-এ একই নাম দুইবার লিখলে error হয়।

```typescript
interface Employee {
  name: string;
}

interface Employee {
  id: number;
} // দুটো মিলে একটি হবে
```

তৃতীয়ত, `interface` বাড়াতে `extends` ব্যবহার করা হয়, আর `type` বাড়াতে ব্যবহার করা হয় `&` (intersection)।

```typescript
interface Animal {
  name: string;
}
interface Dog extends Animal {
  breed: string;
}

type Cat = Animal & { color: string };
```

## কখন কোনটি ব্যবহার করবেন

Object-এর shape বা class `implements` করার ক্ষেত্রে `interface` ভালো পছন্দ। আর union, tuple বা mapped type দরকার হলে `type`-ই একমাত্র উপায়।

## উপসংহার

সংক্ষেপে, object-এর জন্য `interface` এবং বাকি সবকিছুর জন্য `type` ব্যবহার করা একটি ভালো নিয়ম। তবে প্রজেক্টে একই ধরনের কাজে সামঞ্জস্য বজায় রাখাটাই সবচেয়ে গুরুত্বপূর্ণ।
