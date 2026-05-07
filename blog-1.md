# Why any is a Type Safety Hole and Why unknown is Safer

#TypeScript এ any ব্যবহার করলে type checking বন্ধ হয়ে যায়। এর ফলে যেকোনো ধরনের operation করা যায়, যা runtime error ঘটাতে পারে।

***Example:  let data: any = "Hello";
data.toFixed(); // Error at runtimelet data: any = "Hello";
data.toFixed(); // Error at runtime

#তাই any কে বলা হয় type safety hole, কারণ এটি TypeScript এর safety system bypass করে।

অন্যদিকে, unknown হলো safer type। এতে সরাসরি কোনো operation করা যায় না। আগে type check করতে হয়।


*** Example:
let data: unknown = "Hello";
data.toUpperCase(); // Error


##any unsafe কারণ এটি type checking বন্ধ করে দেয়, কিন্তু unknown safe কারণ এটি type check করতে বাধ্য করে। TypeScript এ ভালো practice হলো any এড়িয়ে unknown ব্যবহার করা এবং type narrowing করা।
