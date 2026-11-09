# TypeScript-এ Type Narrowing: `typeof`, `instanceof` ও `in` অপারেটর

## ভূমিকা

TypeScript-এ একটি ভ্যারিয়েবলের type অনেক সময় একাধিক হতে পারে, যেমন `string | number`। Type Narrowing হলো এমন একটি কৌশল, যার মাধ্যমে আমরা শর্ত যাচাই করে type-কে একটি নির্দিষ্ট ও সংকীর্ণ type-এ নামিয়ে আনি। এতে ভুল method কল করার ঝুঁকি কমে যায়।

## `typeof` দিয়ে Narrowing

Primitive type যাচাই করতে `typeof` ব্যবহার করা হয়।

```typescript
const format = (value: string | number) => {
  if (typeof value === "string") {
    return value.toUpperCase(); // এখানে value হলো string
  }
  return value.toFixed(2); // এখানে value হলো number
};
```

## `instanceof` দিয়ে Narrowing

কোনো value একটি class-এর instance কি না, তা জানতে `instanceof` কাজে লাগে।

```typescript
const showError = (err: Error | string) => {
  if (err instanceof Error) {
    return err.message;
  }
  return err;
};
```

## `in` অপারেটর দিয়ে Narrowing

কোনো object-এ নির্দিষ্ট property আছে কি না, তা দেখে type আলাদা করা যায়।

```typescript
type Bird = { fly: () => void };
type Fish = { swim: () => void };

const move = (animal: Bird | Fish) => {
  if ("fly" in animal) {
    animal.fly();
    return;
  }

  animal.swim();
};
```

## উপসংহার

Type Narrowing আমাদের union type নিরাপদভাবে ব্যবহার করতে সাহায্য করে। Primitive-এর জন্য `typeof`, class-এর জন্য `instanceof` এবং object-এর property দেখে আলাদা করতে `in` ব্যবহার করলে কোড হয় আরও নির্ভরযোগ্য।
