# How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

### Generics হলো TypeScript-এর একটি শক্তিশালী feature, যেটা দিয়ে আমরা এমন reusable function, class বা component তৈরি করতে পারি যা বিভিন্ন ধরনের data type-এর সাথে কাজ করতে পারে, কিন্তু type safety নষ্ট করে না।

এখানে একটি placeholder type (যেমন T) ব্যবহার করা হয়। এই T আসলে কোনো fixed type না, বরং পরে যখন function বা component ব্যবহার করা হয়, তখন সেটার জায়গায় আসল type বসে যায় (যেমন number, string, object ইত্যাদি)।

এর ফলে একই কোড বারবার লিখতে হয় না, কোড reusable হয় এবং সবসময় strict type checking বজায় থাকে, তাই ভুল type ব্যবহার করলে compile time-এই error দেখায়।

👉 সহজভাবে বললে: Generics এমন একটা system যা code কে flexible করে, কিন্তু type safety ঠিক রাখে।
