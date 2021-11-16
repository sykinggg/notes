# JavaScript一行代码

## Array

### Cast a value as an array

<CodeGroup>

<CodeGroupItem title="js">

```js
const castArray = (value) => (Array.isArray(value) ? value : [value]);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const castArray = <T,_>(value: T | T[]): T[] => (Array.isArray(value) ? value : [value]);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
castArray(1); // [1]
castArray([1, 2, 3]); // [1, 2, 3]
```

### Check if an array is empty

<CodeGroup>

<CodeGroupItem title="js">

```js
const isEmpty = (arr) => !Array.isArray(arr) || arr.length === 0;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isEmpty = <T,_>(arr: T[]): boolean => !Array.isArray(arr) || arr.length === 0;
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
isEmpty([]); // true
isEmpty([1, 2, 3]); // false
```

### Clone an array

<CodeGroup>

<CodeGroupItem title="js">

```js
// `arr` is an array
const clone = (arr) => arr.slice(0);

// Or
const clone = (arr) => [...arr];

// Or
const clone = (arr) => Array.from(arr);

// Or
const clone = (arr) => arr.map((x) => x);

// Or
const clone = (arr) => JSON.parse(JSON.stringify(arr));

// Or
const clone = (arr) => arr.concat([]);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
// `arr` is an array
const clone = <T,_>(arr: T[]): T[] => arr.slice(0);

// Or
const clone = <T,_>(arr: T[]): T[] => [...arr];

// Or
const clone = <T,_>(arr: T[]): T[] => Array.from(arr);

// Or
const clone = <T,_>(arr: T[]): T[] => arr.map((x) => x);

// Or
const clone = <T,_>(arr: T[]): T[] => JSON.parse(JSON.stringify(arr));

// Or
const clone = <T,_>(arr: T[]): T[] => arr.concat([]);
```

</CodeGroupItem>

</CodeGroup>

### Compare two arrays regardless of order

<CodeGroup>

<CodeGroupItem title="js">

```js
// `a` and `b` are arrays
const isEqual = (a, b) => JSON.stringify(a.sort()) === JSON.stringify(b.sort());
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isEqual = <T,_>(a: T[], b: T[]): boolean => JSON.stringify(a.sort()) === JSON.stringify(b.sort());
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
isEqual([1, 2, 3], [1, 2, 3]); // true
isEqual([1, 2, 3], [1, 3, 2]); // true
isEqual([1, 2, 3], [1, '2', 3]); // false
```

### Compare two arrays

<CodeGroup>

<CodeGroupItem title="js">

```js
// `a` and `b` are arrays
const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// Or
const isEqual = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isEqual = <T,_>(a: T[], b: T[]): boolean => JSON.stringify(a) === JSON.stringify(b);

// Or
const isEqual = <T,_>(a: T[], b: T[]): boolean => a.length === b.length && a.every((v, i) => v === b[i]);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
isEqual([1, 2, 3], [1, 2, 3]); // true
isEqual([1, 2, 3], [1, '2', 3]); // false
```

### Convert an array of objects to a single object

<CodeGroup>

<CodeGroupItem title="js">

```js
const toObject = (arr, key) => arr.reduce((a, b) => ({ ...a, [b[key]]: b }), {});

// Or
const toObject = (arr, key) => Object.fromEntries(arr.map((it) => [it[key], it]));
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const toObject = <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K): Record<string, T> => (
    arr.reduce((a, b) => ({ ...a, [b[key]]: b }), {})
);

const toObject = <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K): Record<string, T> => (
    Object.fromEntries(arr.map((it) => [it[key], it]))
);
```

</CodeGroupItem>

</CodeGroup>

> Example

```ts
toObject(
    [
        { id: '1', name: 'Alpha', gender: 'Male' },
        { id: '2', name: 'Bravo', gender: 'Male' },
        { id: '3', name: 'Charlie', gender: 'Female' },
    ],
    'id'
);
/* 
{
    '1': { id: '1', name: 'Alpha', gender: 'Male' },
    '2': { id: '2', name: 'Bravo', gender: 'Male' },
    '3': { id: '3', name: 'Charlie', gender: 'Female' },
}
*/
```

### Convert an array of strings to numbers

<CodeGroup>

<CodeGroupItem title="js">

```js
const toNumbers = (arr) => arr.map(Number);

// Or
const toNumbers = (arr) => arr.map((x) => +x);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const toNumbers = (arr: string[]): number[] => arr.map(Number);

// Or
const toNumbers = (arr: string[]): number[] => arr.map((x) => +x);
```

</CodeGroupItem>

</CodeGroup>

> Example

```ts
toNumbers(['2', '3', '4']); // [2, 3, 4]
```

### Count by the properties of an array of objects

<CodeGroup>

<CodeGroupItem title="js">

```js
const countBy = (arr, prop) => arr.reduce((prev, curr) => ((prev[curr[prop]] = ++prev[curr[prop]] || 1), prev), {});
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const countBy = <T extends Record<string, string>, K extends keyof T>(arr: T[], prop: K): Record<string, number> => (
    arr.reduce((prev, curr) => ((prev[curr[prop]] = ++prev[curr[prop]] || 1), prev), {} as Record<string, number>)
);
```

</CodeGroupItem>

</CodeGroup>

> Example

```ts
countBy(
    [
        { branch: 'audi', model: 'q8', year: '2019' },
        { branch: 'audi', model: 'rs7', year: '2020' },
        { branch: 'ford', model: 'mustang', year: '2019' },
        { branch: 'ford', model: 'explorer', year: '2020' },
        { branch: 'bmw', model: 'x7', year: '2020' },
    ],
    'branch'
);

// { 'audi': 2, 'ford': 2, 'bmw': 1 }
```

### Count the occurrences of a value in an array

<CodeGroup>

<CodeGroupItem title="js">

```js
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

// Or
const countOccurrences = (arr, val) => arr.filter((item) => item === val).length;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const countOccurrences = <T,_>(arr: T[], val: T): number => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

// Or
const countOccurrences = <T,_>(arr: T[], val: T): number => arr.filter((item) => item === val).length;
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
countOccurrences([2, 1, 3, 3, 2, 3], 2); // 2
countOccurrences(['a', 'b', 'a', 'c', 'a', 'b'], 'a'); // 3
```

### Count the occurrences of array elements

<CodeGroup>

<CodeGroupItem title="js">

```js
const countOccurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const countOccurrences = <T extends string | number,>(arr: T[]): Record<T, number> => (
    arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {}as Record<T, number>)
);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
countOccurrences([2, 1, 3, 3, 2, 3]); // { '1': 1, '2': 2, '3': 3 }
countOccurrences(['a', 'b', 'a', 'c', 'a', 'b']); // { 'a': 3, 'b': 2, 'c': 1 }
```

### Create an array of cumulative sum

<CodeGroup>

<CodeGroupItem title="js">

```js
const accumulate = (arr) =>
    arr.map(
        (
            (sum) => (value) =>
                (sum += value)
        )(0)
    );

// Or
const accumulate = (arr) => arr.reduce((a, b, i) => (i === 0 ? [b] : [...a, b + a[i - 1]]), [0]);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const accumulate = (arr: number[]): number[] =>
    arr.map(
        (
            (sum) => (value: number) =>
                (sum += value)
        )(0)
    );

// Or
const accumulate = (arr: number[]): number[] => arr.reduce((a, b, i) => (i === 0 ? [b] : [...a, b + a[i - 1]]), [0]);
```

</CodeGroupItem>

</CodeGroup>

> Example

```ts
accumulate([1, 2, 3, 4]); // [1, 3, 6, 10]
// 1             = 1
// 1 + 2         = 3
// 1 + 2 + 3     = 6
// 1 + 2 + 3 + 4 = 10
```

### Create an array of numbers in the given range

<CodeGroup>

<CodeGroupItem title="js">

```js
const range = (min, max) => [...Array(max - min + 1).keys()].map((i) => i + min);

// Or
const range = (min, max) =>
    Array(max - min + 1)
        .fill(0)
        .map((_, i) => min + i);

// Or
const range = (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const range = (min: number, max: number): number[] => [...Array(max - min + 1).keys()].map((i) => i + min);

// Or
const range = (min: number, max: number): number[] =>
    Array(max - min + 1)
        .fill(0)
        .map((_, i) => min + i);

// Or
const range = (min: number, max: number): number[] => Array.from({ length: max - min + 1 }, (_, i) => min + i);
```

</CodeGroupItem>

</CodeGroup>

> Example

```ts
range(5, 10); // [5, 6, 7, 8, 9, 10]
```

### Create cartesian product

<CodeGroup>

<CodeGroupItem title="js">

```js
const cartesian = (...sets) => sets.reduce((acc, set) => acc.flatMap((x) => set.map((y) => [...x, y])), [[]]);
```

</CodeGroupItem>

</CodeGroup>

> Example

```js
cartesian([1, 2], [3, 4]); // [ [1, 3], [1, 4], [2, 3], [2, 4] ]

/*
       3       4
   ---------------
1 | [1, 3]  [1, 4]
  |
2 | [2, 3]  [2, 4]

*/
```

### Empty an array

<CodeGroup>

<CodeGroupItem title="js">

```js
const empty = (arr) => (arr.length = 0);

// Or
arr = [];
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const empty = <T,_>(arr: T[]) => (arr.length = 0);

// Or
arr = [];
```

</CodeGroupItem>

</CodeGroup>

### Find the closest number from an array

<CodeGroup>

<CodeGroupItem title="js">

```js
// Find the number from `arr` which is closest to `n`
const closest = (arr, n) => arr.reduce((prev, curr) => (Math.abs(curr - n) < Math.abs(prev - n) ? curr : prev));

// Or
const closest = (arr, n) => arr.sort((a, b) => Math.abs(a - n) - Math.abs(b - n))[0];
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const closest = (arr: number[], n: number): number => arr.reduce((prev, curr) => (Math.abs(curr - n) < Math.abs(prev - n) ? curr : prev));

// Or
const closest = (arr: number[], n: number): number => arr.sort((a, b) => Math.abs(a - n) - Math.abs(b - n))[0];
```

</CodeGroupItem>

</CodeGroup>

> Example

```ts
closest([29, 87, 8, 78, 97, 20, 75, 33, 24, 17], 50); // 33
```

### Find the index of the last matching item of an array

<CodeGroup>

<CodeGroupItem title="js">

```js
const lastIndex = (arr, predicate) => arr.reduce((prev, curr, index) => (predicate(curr) ? index : prev), -1);

// Or
const lastIndex = (arr, predicate) => arr.map((item) => predicate(item)).lastIndexOf(true);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const lastIndex = <T,_>(arr: T[], predicate: (a: T) => boolean): number => arr.reduce((prev, curr, index) => (predicate(curr) ? index : prev), -1);

// Or
const lastIndex = <T,_>(arr: T[], predicate: (a: T) => boolean): number => arr.map((item) => predicate(item)).lastIndexOf(true);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
lastIndex([1, 3, 5, 7, 9, 2, 4, 6, 8], (i) => i % 2 === 1); // 4
lastIndex([1, 3, 5, 7, 9, 8, 6, 4, 2], (i) => i > 6); // 5
```

### Find the index of the maximum item of an array

<CodeGroup>

<CodeGroupItem title="js">

```js
const indexOfMax = (arr) => arr.reduce((prev, curr, i, a) => (curr > a[prev] ? i : prev), 0);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const indexOfMax = (arr: number[]): number => arr.reduce((prev, curr, i, a) => (curr > a[prev] ? i : prev), 0);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
indexOfMax([1, 3, 9, 7, 5]); // 2
indexOfMax([1, 3, 7, 7, 5]); // 2
```

### Find the index of the minimum item of an array

<CodeGroup>

<CodeGroupItem title="js">

```js
const indexOfMin = (arr) => arr.reduce((prev, curr, i, a) => (curr < a[prev] ? i : prev), 0);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const indexOfMin = (arr: number[]): number => arr.reduce((prev, curr, i, a) => (curr < a[prev] ? i : prev), 0);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
indexOfMin([6, 4, 8, 2, 10]); // 3
indexOfMin([6, 4, 2, 2, 10]); // 2
```

### Find the length of the longest string in an array

<CodeGroup>

<CodeGroupItem title="js">

```js
const findLongest = (words) => Math.max(...words.map((el) => el.length));
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const findLongest = (words: string[]): number => Math.max(...words.map((el) => el.length));
```

</CodeGroupItem>

</CodeGroup>

> Example

```ts
findLongest(['always', 'look', 'on', 'the', 'bright', 'side', 'of', 'life']); // 6
```

### Find the maximum item of an array by given key

<CodeGroup>

<CodeGroupItem title="js">

```js
const maxBy = (arr, key) => arr.reduce((a, b) => (a[key] >= b[key] ? a : b), {});
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const maxBy = <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K): T => (
    arr.reduce((a, b) => (a[key] >= b[key] ? a : b), {} as T)
);
```

</CodeGroupItem>

</CodeGroup>

> Example

```ts
const people = [
    { name: 'Bar', age: 24 },
    { name: 'Baz', age: 32 },
    { name: 'Foo', age: 42 },
    { name: 'Fuzz', age: 36 },
];
maxBy(people, 'age'); // { name: 'Foo', age: 42 }
```

### Find the maximum item of an array

<CodeGroup>

<CodeGroupItem title="js">

```js
const max = (arr) => Math.max(...arr);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const max = (arr: number[]): number => Math.max(...arr);
```

</CodeGroupItem>

</CodeGroup>

### Find the minimum item of an array by given key

<CodeGroup>

<CodeGroupItem title="js">

```js
const minBy = (arr, key) => arr.reduce((a, b) => (a[key] < b[key] ? a : b), {});
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const minBy = <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K): T => (
    arr.reduce((a, b) => (a[key] < b[key] ? a : b), {} as T)
);
```

</CodeGroupItem>

</CodeGroup>

> Example

```ts
const people = [
    { name: 'Bar', age: 24 },
    { name: 'Baz', age: 32 },
    { name: 'Foo', age: 42 },
    { name: 'Fuzz', age: 36 },
];
minBy(people, 'age'); // { name: 'Bar', age: 24 }
```

### Find the minimum item of an array

<CodeGroup>

<CodeGroupItem title="js">

```js
const min = (arr) => Math.min(...arr);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const min = (arr: number[]): number => Math.min(...arr);
```

</CodeGroupItem>

</CodeGroup>

### Flatten an array

<CodeGroup>

<CodeGroupItem title="js">

```js
const flat = (arr) =>
    [].concat.apply(
        [],
        arr.map((a) => (Array.isArray(a) ? flat(a) : a))
    );

// Or
const flat = (arr) => arr.reduce((a, b) => (Array.isArray(b) ? [...a, ...flat(b)] : [...a, b]), []);

// Or
// See the browser compatibility at https://caniuse.com/#feat=array-flat
const flat = (arr) => arr.flat();
```

</CodeGroupItem>

</CodeGroup>

> Example

```ts
flat(['cat', ['lion', 'tiger']]); // ['cat', 'lion', 'tiger']
```

### Generate an array of alphabet characters

<CodeGroup>

<CodeGroupItem title="js">

```js
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

// Or
const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

// Or
const alphabet = Array(26)
    .fill(0)
    .map((_, i) => String.fromCharCode(i + 97));

// Or
const alphabet = [...Array(26).keys()].map((i) => String.fromCharCode(i + 97));

// Or
const alphabet = [...Array(26)].map((_, i) => (i + 10).toString(36));

// Or
const alphabet = String.fromCharCode(
    ...' '
        .repeat(26)
        .split('')
        .map((_, i) => i + 97)
).split('');
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');

// Or
const alphabet: string[] = [...'abcdefghijklmnopqrstuvwxyz'];

// Or
const alphabet: string[] = Array(26)
    .fill(0)
    .map((_, i) => String.fromCharCode(i + 97));

// Or
const alphabet: string[] = [...Array(26).keys()].map((i) => String.fromCharCode(i + 97));

// Or
const alphabet: string[] = [...Array(26)].map((_, i) => (i + 10).toString(36));

// Or
const alphabet: string[] = String.fromCharCode(
    ...' '
        .repeat(26)
        .split('')
        .map((_, i) => i + 97)
).split('');
```

</CodeGroupItem>

</CodeGroup>

### Get all arrays of consecutive elements

<CodeGroup>

<CodeGroupItem title="js">

```js
const getConsecutiveArrays = (arr, size) => (size > arr.length ? [] : arr.slice(size - 1).map((_, i) => arr.slice(i, size + i)));
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const getConsecutiveArrays = <T,_>(arr: T[], size: number): T[][] => (size > arr.length ? [] : arr.slice(size - 1).map((_, i) => arr.slice(i, size + i)));
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
getConsecutiveArrays([1, 2, 3, 4, 5], 2); // [[1, 2], [2, 3], [3, 4], [4, 5]]
getConsecutiveArrays([1, 2, 3, 4, 5], 3); // [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
getConsecutiveArrays([1, 2, 3, 4, 5], 6); // []
```

### Get all n-th items of an array

<CodeGroup>

<CodeGroupItem title="js">

```js
const getNthItems = (arr, nth) => arr.filter((_, i) => i % nth === nth - 1);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const getNthItems = <T,_>(arr: T[], nth: number): T[] => arr.filter((_, i) => i % nth === nth - 1);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
getNthItems([1, 2, 3, 4, 5, 6, 7, 8, 9], 2); // [2, 4, 6, 8]
getNthItems([1, 2, 3, 4, 5, 6, 7, 8, 9], 3); // [3, 6, 9]
```

### Get all subsets of an array

<CodeGroup>

<CodeGroupItem title="js">

```js
const getSubsets = (arr) => arr.reduce((prev, curr) => prev.concat(prev.map((k) => k.concat(curr))), [[]]);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const getSubsets = <T,>(arr: T[]): T[][] => (
    arr.reduce((prev, curr) => prev.concat(prev.map((k) => k.concat(curr))), [[]] as T[][])
);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
getSubsets([1, 2]); // [[], [1], [2], [1, 2]]
getSubsets([1, 2, 3]); // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
```

### Get indices of a value in an array

<CodeGroup>

<CodeGroupItem title="js">

```js
const indices = (arr, value) => arr.reduce((acc, v, i) => (v === value ? [...acc, i] : acc), []);

// Or
const indices = (arr, value) => arr.map((v, i) => (v === value ? i : false)).filter(Boolean);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const indices = <T,>(arr: T[], value: T): number[] => (
    arr.reduce((acc, v, i) => (v === value ? [...acc, i] : acc), [] as number[])
);

// Or
const indices = <T,>(arr: T[], value: T): number[] => (
    arr.map((v, i) => (v === value ? i : false)).filter(Boolean) as number[]
);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
indices(['h', 'e', 'l', 'l', 'o'], 'l'); // [2, 3]
indices(['h', 'e', 'l', 'l', 'o'], 'w'); // []
```

### Get the average of an array

<CodeGroup>

<CodeGroupItem title="js">

```js
const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const average = (arr: number[]): number => arr.reduce((a, b) => a + b, 0) / arr.length;
```

</CodeGroupItem>

</CodeGroup>

### Get the intersection of arrays

<CodeGroup>

<CodeGroupItem title="js">

```js
const getIntersection = (a, ...arr) => [...new Set(a)].filter((v) => arr.every((b) => b.includes(v)));
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const getIntersection = <T,_>(a: T[], ...arr: T[][]): T[] => [...new Set(a)].filter((v) => arr.every((b) => b.includes(v)));
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
getIntersection([1, 2, 3], [2, 3, 4, 5]); // [2, 3]
getIntersection([1, 2, 3], [2, 3, 4, 5], [1, 3, 5]); // [3]
```

### Get the rank of an array of numbers

<CodeGroup>

<CodeGroupItem title="js">

```js
const ranking = (arr) => arr.map((x, y, z) => z.filter((w) => w > x).length + 1);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const ranking = (arr: number[]): number[] => arr.map((x, y, z) => z.filter((w) => w > x).length + 1);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
ranking([80, 65, 90, 50]); // [2, 3, 1, 4]
ranking([80, 80, 70, 50]); // [1, 1, 3, 4]
ranking([80, 80, 80, 50]); // [1, 1, 1, 4]
```

### Get the sum of an array of numbers

<CodeGroup>

<CodeGroupItem title="js">

```js
const sum = (arr) => arr.reduce((a, b) => a + b, 0);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const sum = (arr: number[]): number => arr.reduce((a, b) => a + b, 0);
```

</CodeGroupItem>

</CodeGroup>

### Get the unique values of an array

<CodeGroup>

<CodeGroupItem title="js">

```js
const unique = (arr) => [...new Set(arr)];

// Or
const unique = (arr) => arr.filter((el, i, array) => array.indexOf(el) === i);

// Or
const unique = (arr) => arr.reduce((acc, el) => (acc.includes(el) ? acc : [...acc, el]), []);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const unique = <T,>(arr: T[]): T[] => [...new Set(arr)];

// Or
const unique = <T,>(arr: T[]): T[] => arr.filter((el, i, array) => array.indexOf(el) === i);

// Or
const unique = <T,>(arr: T[]): T[] => arr.reduce((acc, el) => (acc.includes(el) ? acc : [...acc, el]), [] as T[]);
```

</CodeGroupItem>

</CodeGroup>

### Get union of arrays

<CodeGroup>

<CodeGroupItem title="js">

```js
const union = (...arr) => [...new Set(arr.flat())];
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const union = <T,_>(...arr: T[][]): T[] => [...new Set(arr.flat())];
```

</CodeGroupItem>

</CodeGroup>

> Example

```ts
union([1, 2], [2, 3], [3]); // [1, 2, 3]
```

### Group an array of objects by a key

<CodeGroup>

<CodeGroupItem title="js">

```js
const groupBy = (arr, key) => arr.reduce((acc, item) => ((acc[item[key]] = [...(acc[item[key]] || []), item]), acc), {});
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const groupBy = <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K): Record<string, T[]> => (
    arr.reduce((acc, item) => ((acc[item[key]] = [...(acc[item[key]] || []), item]), acc), {} as Record<string, T[]>)
);
```

</CodeGroupItem>

</CodeGroup>

> Example

```ts
groupBy(
    [
        { branch: 'audi', model: 'q8', year: '2019' },
        { branch: 'audi', model: 'rs7', year: '2020' },
        { branch: 'ford', model: 'mustang', year: '2019' },
        { branch: 'ford', model: 'explorer', year: '2020' },
        { branch: 'bmw', model: 'x7', year: '2020' },
    ],
    'branch'
);

/*
{
    audi: [
        { branch: 'audi', model: 'q8', year: '2019' },
        { branch: 'audi', model: 'rs7', year: '2020' }
    ],
    bmw: [
        { branch: 'bmw', model: 'x7', year: '2020' }
    ],
    ford: [
        { branch: 'ford', model: 'mustang', year: '2019' },
        { branch: 'ford', model: 'explorer', year: '2020' }
    ],
}
*/
```

### Merge two arrays

<CodeGroup>

<CodeGroupItem title="js">

```js
// Merge but don't remove the duplications
const merge = (a, b) => a.concat(b);
// Or
const merge = (a, b) => [...a, ...b];

// Merge and remove the duplications
const merge = (a, b) => [...new Set(a.concat(b))];
// Or
const merge = (a, b) => [...new Set([...a, ...b])];
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
// Merge but don't remove the duplications
const merge = <T,_>(a: T[], b: T[]): T[] => a.concat(b);
// Or
const merge = <T,_>(a: T[], b: T[]): T[] => [...a, ...b];

// Merge and remove the duplications
const merge = <T,_>(a: T[], b: T[]): T[] => [...new Set(a.concat(b))];
// Or
const merge = <T,_>(a: T[], b: T[]): T[] => [...new Set([...a, ...b])];
```

</CodeGroupItem>

</CodeGroup>

### Partition an array based on a condition

<CodeGroup>

<CodeGroupItem title="js">

```js
const partition = (arr, criteria) => arr.reduce((acc, i) => (acc[criteria(i) ? 0 : 1].push(i), acc), [[], []]);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const partition = <T,_>(arr: T[], criteria: (a: T) => boolean): T[][] => arr.reduce((acc, i) => (acc[criteria(i) ? 0 : 1].push(i), acc), [[], []]);
```

</CodeGroupItem>

</CodeGroup>

> Example

```ts
partition([1, 2, 3, 4, 5], (n) => n % 2); // [[1, 3, 5], [2, 4]]
```

### Remove duplicate values in an array

<CodeGroup>

<CodeGroupItem title="js">

```js
const removeDuplicate = (arr) => arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const removeDuplicate = <T,_>(arr: T[]): T[] => arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));
```

</CodeGroupItem>

</CodeGroup>

> Example

```ts
removeDuplicate(['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']); //  ['h', 'e', 'w', 'r', 'd']
```

### Remove falsy values from array

<CodeGroup>

<CodeGroupItem title="js">

```js
const removeFalsy = (arr) => arr.filter(Boolean);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const removeFalsy = <T,_>(arr: T[]): T[] => arr.filter(Boolean);
```

</CodeGroupItem>

</CodeGroup>

> Example

```ts
removeFalsy([0, 'a string', '', NaN, true, 5, undefined, 'another string', false]);
// ['a string', true, 5, 'another string']
```

### Repeat an array

<CodeGroup>

<CodeGroupItem title="js">

```js
// `arr` is an array
const repeat = (arr, n) => [].concat(...Array(n).fill(arr));

// Or
const repeat = (arr, n) => Array(n).fill(arr).flat();

// Or
const repeat = (arr, n) =>
    Array(arr.length * n)
        .fill(0)
        .map((_, i) => arr[i % arr.length]);

// Or
const repeat = (arr, n) => Array.from({ length: arr.length * n }, (_, i) => arr[i % arr.length]);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const repeat = <T,_>(arr: T[], n: number): T[] => [].concat(...Array(n).fill(arr));

// Or
const repeat = <T,_>(arr: T[], n: number): T[] => Array(n).fill(arr).flat();

// Or
const repeat = <T,_>(arr: T[], n: number): T[] =>
    Array(arr.length * n)
        .fill(0)
        .map((_, i) => arr[i % arr.length]);

// Or
const repeat = <T,_>(arr: T[], n: number): T[] => Array.from({ length: arr.length * n }, (_, i) => arr[i % arr.length]);
```

</CodeGroupItem>

</CodeGroup>

> Example

```ts
repeat([1, 2, 3], 3); // [1, 2, 3, 1, 2, 3, 1, 2, 3]
```

### Shuffle an array

<CodeGroup>

<CodeGroupItem title="js">

```js
const shuffle = (arr) =>
    arr
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);

// Or
const shuffle = (arr) => arr.sort(() => 0.5 - Math.random());
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const shuffle = <T,_>(arr: T[]): T[] =>
    arr
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);

// Or
const shuffle = <T,_>(arr: T[]): T[] => arr.sort(() => 0.5 - Math.random());
```

</CodeGroupItem>

</CodeGroup>

> Example

```ts
shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // [9, 1, 10, 6, 8, 5, 2, 3, 7, 4]
```

### Sort an array of items by given key

<CodeGroup>

<CodeGroupItem title="js">

```js
const sortBy = (arr, k) => arr.concat().sort((a, b) => (a[k] > b[k] ? 1 : a[k] < b[k] ? -1 : 0));
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const sortBy = <T extends Record<string, any>, K extends keyof T>(arr: T[], k: K): T[] => (
    arr.concat().sort((a, b) => (a[k] > b[k] ? 1 : a[k] < b[k] ? -1 : 0))
);
```

</CodeGroupItem>

</CodeGroup>

> Example

```ts
const people = [
    { name: 'Foo', age: 42 },
    { name: 'Bar', age: 24 },
    { name: 'Fuzz', age: 36 },
    { name: 'Baz', age: 32 },
];
sortBy(people, 'age');

//  [
//      { name: 'Bar', age: 24 },
//      { name: 'Baz', age: 32 },
//      { name: 'Fuzz', age: 36 },
//      { name: 'Foo', age: 42 },
//  ]
```

### Sort an array of numbers

<CodeGroup>

<CodeGroupItem title="js">

```js
const sort = (arr) => arr.sort((a, b) => a - b);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const sort = (arr: number[]): number[] => arr.sort((a, b) => a - b);
```

</CodeGroupItem>

</CodeGroup>

> Example

```ts
sort([1, 5, 2, 4, 3]); // [1, 2, 3, 4, 5]
```

### Split an array into chunks

<CodeGroup>

<CodeGroupItem title="js">

```js
const chunk = (arr, size) => arr.reduce((acc, e, i) => (i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc), []);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const chunk = <T,>(arr: T[], size: number): T[][] => (
    arr.reduce((acc, e, i) => (i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc), [] as T[][])
);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3); // [[1, 2, 3], [4, 5, 6], [7, 8]]
chunk([1, 2, 3, 4, 5, 6, 7, 8], 4); // [[1, 2, 3, 4], [5, 6, 7, 8]]
```

### Swap the rows and columns of a matrix

<CodeGroup>

<CodeGroupItem title="js">

```js
const transpose = (matrix) => matrix[0].map((col, i) => matrix.map((row) => row[i]));

// Or
const transpose = (matrix) => matrix[0].map((col, c) => matrix.map((row, r) => matrix[r][c]));

// Or
const transpose = (matrix) => matrix.reduce((prev, next) => next.map((item, i) => (prev[i] || []).concat(next[i])), []);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const transpose = <T,>(matrix: T[][]): T[][] => matrix[0].map((col, i) => matrix.map((row) => row[i]));

// Or
const transpose = <T,>(matrix: T[][]): T[][] => matrix[0].map((col, c) => matrix.map((row, r) => matrix[r][c]));

// Or
const transpose = <T,>(matrix: T[][]): T[][] => (
    matrix.reduce((prev, next) => next.map((item, i) => (prev[i] || []).concat(next[i])), [] as T[][])
);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
transpose([
    // [
    [1, 2, 3], //      [1, 4, 7],
    [4, 5, 6], //      [2, 5, 8],
    [7, 8, 9], //      [3, 6, 9],
]); //  ]
```

### Swap two array items

<CodeGroup>

<CodeGroupItem title="js">

```js
// `i` must be less than `j`
const swapItems = (a, i, j) => (a[i] && a[j] && [...a.slice(0, i), a[j], ...a.slice(i + 1, j), a[i], ...a.slice(j + 1)]) || a;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const swapItems = <T,_>(a: T[], i: number, j: number): T[] => (a[i] && a[j] && [...a.slice(0, i), a[j], ...a.slice(i + 1, j), a[i], ...a.slice(j + 1)]) || a;
```

</CodeGroupItem>

</CodeGroup>

> Example

```ts
swapItems([1, 2, 3, 4, 5], 1, 4); // [1, 5, 3, 4, 2]
```

### Unzip an array of arrays

<CodeGroup>

<CodeGroupItem title="js">

```js
const unzip = (arr) =>
    arr.reduce(
        (acc, c) => (c.forEach((v, i) => acc[i].push(v)), acc),
        Array.from({ length: Math.max(...arr.map((a) => a.length)) }, (_) => [])
    );
```

</CodeGroupItem>

</CodeGroup>

> Example

```js
unzip([
    ['a', 1],
    ['b', 2],
    ['c', 3],
    ['d', 4],
    ['e', 5],
]); // [['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]]

/*
    a     1
     b   2
      c 3
      d 4
      e 5
*/
```

### Zip multiple arrays

<CodeGroup>

<CodeGroupItem title="js">

```js
const zip = (...arr) => Array.from({ length: Math.max(...arr.map((a) => a.length)) }, (_, i) => arr.map((a) => a[i]));
```

</CodeGroupItem>

</CodeGroup>

> Example

```js
zip(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]); // [['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]]

/*
Does it look like a zipper?
        a 1
        b 2
       c   3
      d     4
     e       5
*/
```

## Date Time

### Add AM PM suffix to an hour

<CodeGroup>

<CodeGroupItem title="js">

```js
// `h` is an hour number between 0 and 23
const suffixAmPm = (h) => `${h % 12 === 0 ? 12 : h % 12}${h < 12 ? 'am' : 'pm'}`;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const suffixAmPm = (h: number): string => `${h % 12 === 0 ? 12 : h % 12}${h < 12 ? 'am' : 'pm'}`;
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
suffixAmPm(0); // '12am'
suffixAmPm(5); // '5am'
suffixAmPm(12); // '12pm'
suffixAmPm(15); // '3pm'
suffixAmPm(23); // '11pm'
```

### Calculate the number of difference days between two dates

<CodeGroup>

<CodeGroupItem title="js">

```js
const diffDays = (date, otherDate) => Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24));
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const diffDays = (date: Date, otherDate: Date): number => Math.ceil(Math.abs(date.valueOf() - otherDate.valueOf()) / (1000 * 60 * 60 * 24));
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
diffDays(new Date('2014-12-19'), new Date('2020-01-01')); // 1839
```

### Calculate the number of months between two dates

<CodeGroup>

<CodeGroupItem title="js">

```js
const monthDiff = (startDate, endDate) => Math.max(0, (endDate.getFullYear() - startDate.getFullYear()) * 12 - startDate.getMonth() + endDate.getMonth());
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const monthDiff = (startDate: Date, endDate: Date): number => Math.max(0, (endDate.getFullYear() - startDate.getFullYear()) * 12 - startDate.getMonth() + endDate.getMonth());
```

</CodeGroupItem>

</CodeGroup>

> Example

```ts
monthDiff(new Date('2020-01-01'), new Date('2021-01-01')); // 12
```

### Compare two dates

<CodeGroup>

<CodeGroupItem title="js">

```js
// `a` and `b` are `Date` instances
const compare = (a, b) => a.getTime() > b.getTime();
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const compare = (a: Date, b: Date): boolean => a.getTime() > b.getTime();
```

</CodeGroupItem>

</CodeGroup>

> Example

```ts
compare(new Date('2020-03-30'), new Date('2020-01-01')); // true
```

### Convert a date to YYYY-MM-DD format

<CodeGroup>

<CodeGroupItem title="js">

```js
// `date` is a `Date` object
const formatYmd = (date) => date.toISOString().slice(0, 10);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const formatYmd = (date: Date): string => date.toISOString().slice(0, 10);
```

</CodeGroupItem>

</CodeGroup>

> Example

```ts
formatYmd(new Date()); // 2020-05-06
```

### Convert seconds to hh:mm:ss format

<CodeGroup>

<CodeGroupItem title="js">

```js
// `s` is number of seconds
const formatSeconds = (s) => new Date(s * 1000).toISOString().substr(11, 8);

// Or
const formatSeconds = (s) => new Date(s * 1000).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];

// Or
const formatSeconds = (s) => [parseInt(s / 60 / 60), parseInt((s / 60) % 60), parseInt(s % 60)].join(':').replace(/\b(\d)\b/g, '0$1');
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const formatSeconds = (s: number): string => new Date(s * 1000).toISOString().substr(11, 8);

// Or
const formatSeconds = (s: number): string => (new Date(s * 1000).toUTCString().match(/(\d\d:\d\d:\d\d)/) as string[])[0];

// Or
const formatSeconds = (s: number): string => (
    [parseInt(`${s / 3600}`), parseInt(`${(s / 60) % 60}`), parseInt(`${s % 60}`)].join(':').replace(/\b(\d)\b/g, '0$1')
);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
formatSeconds(200); // 00:03:20
formatSeconds(500); // 00:08:20
```

### Extract year, month, day, hour, minute, second and millisecond from a date

<CodeGroup>

<CodeGroupItem title="js">

```js
// `date` is a `Date` object
const extract = (date) =>
    date
        .toISOString()
        .split(/[^0-9]/)
        .slice(0, -1);

// `extract` is an array of [year, month, day, hour, minute, second, millisecond]
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const extract = (date: Date): string[] =>
    date
        .toISOString()
        .split(/[^0-9]/)
        .slice(0, -1);
```

</CodeGroupItem>

</CodeGroup>

### Format a date for the given locale

<CodeGroup>

<CodeGroupItem title="js">

```js
// `date` is a `Date` object
// `locale` is a locale (en-US, pt-BR, for example)
const format = (date, locale) => new Intl.DateTimeFormat(locale).format(date);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const format = (date: Date, locale: string): string => new Intl.DateTimeFormat(locale).format(date);
```

</CodeGroupItem>

</CodeGroup>

> Example

```ts
format(new Date(), 'pt-BR'); // 06/05/2020
```

### Get the current quarter of a date

<CodeGroup>

<CodeGroupItem title="js">

```js
const getQuarter = (d = new Date()) => Math.ceil((d.getMonth() + 1) / 3);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const getQuarter = (d = new Date()): number => Math.ceil((d.getMonth() + 1) / 3);
```

</CodeGroupItem>

</CodeGroup>

### Get the current timestamp in seconds

<CodeGroup>

<CodeGroupItem title="js">

```js
const ts = () => Math.floor(new Date().getTime() / 1000);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const ts = (): number => Math.floor(new Date().getTime() / 1000);
```

</CodeGroupItem>

</CodeGroup>

### Get the day of the year from a date

<CodeGroup>

<CodeGroupItem title="js">

```js
// `date` is a Date object
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const dayOfYear = (date: Date): number => Math.floor((date.valueOf() - new Date(date.getFullYear(), 0, 0).valueOf()) / (1000 * 60 * 60 * 24));
```

</CodeGroupItem>

</CodeGroup>

> Example

```ts
dayOfYear(new Date(2020, 04, 16)); // 137
```

### Get the first date in the month of a date

<CodeGroup>

<CodeGroupItem title="js">

```js
const getFirstDate = (d = new Date()) => new Date(d.getFullYear(), d.getMonth(), 1);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const getFirstDate = (d = new Date()): Date => new Date(d.getFullYear(), d.getMonth(), 1);
```

</CodeGroupItem>

</CodeGroup>

### Get the last date in the month of a date

<CodeGroup>

<CodeGroupItem title="js">

```js
const getLastDate = (d = new Date()) => new Date(d.getFullYear(), d.getMonth() + 1, 0);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const getLastDate = (d = new Date()): Date => new Date(d.getFullYear(), d.getMonth() + 1, 0);
```

</CodeGroupItem>

</CodeGroup>

### Get the month name of a date

<CodeGroup>

<CodeGroupItem title="js">

```js
// `date` is a Date object
const getMonthName = (date) => ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', ' November', 'December'][date.getMonth()];
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const getMonthName = (date: Date): string => ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', ' November', 'December'][date.getMonth()];
```

</CodeGroupItem>

</CodeGroup>

### Get the number of days in given month

<CodeGroup>

<CodeGroupItem title="js">

```js
// `month` is zero-based index
const daysInMonth = (month, year) => new Date(year, month, 0).getDate();
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const daysInMonth = (month: number, year: number): number => new Date(year, month, 0).getDate();
```

</CodeGroupItem>

</CodeGroup>

### Get the timezone string

<CodeGroup>

<CodeGroupItem title="js">

```js
const getTimezone = () => Intl.DateTimeFormat().resolvedOptions().timeZone;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const getTimezone = (): string => Intl.DateTimeFormat().resolvedOptions().timeZone;
```

</CodeGroupItem>

</CodeGroup>

> Example

```ts
getTimezone(); // 'Asia/Saigon'
```

### Get the tomorrow date

<CodeGroup>

<CodeGroupItem title="js">

```js
const tomorrow = ((d) => new Date(d.setDate(d.getDate() + 1)))(new Date());

// Or
const tomorrow = new Date(new Date().valueOf() + 1000 * 60 * 60 * 24);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const tomorrow: Date = ((d) => new Date(d.setDate(d.getDate() + 1)))(new Date());

// Or
const tomorrow: Date = new Date(new Date().valueOf() + 1000 * 60 * 60 * 24);
```

</CodeGroupItem>

</CodeGroup>

### Get the total number of days in a year

<CodeGroup>

<CodeGroupItem title="js">

```js
const numberOfDays = (year) => ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 366 : 365);

// Or
const numberOfDays = (year) => (new Date(year, 1, 29).getDate() === 29 ? 366 : 365);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const numberOfDays = (year: number): number => ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 366 : 365);

// Or
const numberOfDays = (year: number): number => (new Date(year, 1, 29).getDate() === 29 ? 366 : 365);
```

</CodeGroupItem>

</CodeGroup>

### Get the weekday of a date

<CodeGroup>

<CodeGroupItem title="js">

```js
// `date` is a Date object
const getWeekday = (date) => ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const getWeekday = (date: Date): string => ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];
```

</CodeGroupItem>

</CodeGroup>

### Get the yesterday date

<CodeGroup>

<CodeGroupItem title="js">

```js
const yesterday = ((d) => new Date(d.setDate(d.getDate() - 1)))(new Date());

// Or
const yesterday = new Date(new Date().valueOf() - 1000 * 60 * 60 * 24);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const yesterday: Date = ((d) => new Date(d.setDate(d.getDate() - 1)))(new Date());

// Or
const yesterday: Date = new Date(new Date().valueOf() - 1000 * 60 * 60 * 24);
```

</CodeGroupItem>

</CodeGroup>

### Initialize the current date but set time to midnight

<CodeGroup>

<CodeGroupItem title="js">

```js
const midnightOfToday = () => new Date(new Date().setHours(0, 0, 0, 0));
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const midnightOfToday = (): Date => new Date(new Date().setHours(0, 0, 0, 0));
```

</CodeGroupItem>

</CodeGroup>

### Sort an array of dates

<CodeGroup>

<CodeGroupItem title="js">

```js
// `arr` is an array of `Date` items
const sortDescending = (arr) => arr.sort((a, b) => a.getTime() > b.getTime());

const sortAscending = (arr) => arr.sort((a, b) => a.getTime() < b.getTime());
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const sortDescending = (arr: Date[]): Date[] => arr.sort((a, b) => a.getTime() - b.getTime());

const sortAscending = (arr: Date[]): Date[] => arr.sort((a, b) => b.getTime() - a.getTime());
```

</CodeGroupItem>

</CodeGroup>

## DOM

### Check if an element is a descendant of another

<CodeGroup>

<CodeGroupItem title="js">

```js
const isDescendant = (child, parent) => parent.contains(child);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isDescendant = (child: Node, parent: Node): boolean => parent.contains(child);
```

</CodeGroupItem>

</CodeGroup>

### Check if an element is focused

<CodeGroup>

<CodeGroupItem title="js">

```js
const hasFocus = (ele) => ele === document.activeElement;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const hasFocus = (ele: Node): boolean => ele === document.activeElement;
```

</CodeGroupItem>

</CodeGroup>

### Check if the touch events are supported

<CodeGroup>

<CodeGroupItem title="js">

```js
const touchSupported = () => 'ontouchstart' in window || (window.DocumentTouch && document instanceof window.DocumentTouch);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const touchSupported = (): boolean => (
    'ontouchstart' in window || (window as any)['DocumentTouch'] && document instanceof (window as any)['DocumentTouch']
);
```

</CodeGroupItem>

</CodeGroup>

### Check if user scrolls to the bottom of the page

<CodeGroup>

<CodeGroupItem title="js">

```js
const isAtBottom = () => document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isAtBottom = (): boolean => document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight;
```

</CodeGroupItem>

</CodeGroup>

### Detect Internet Explorer browser

<CodeGroup>

<CodeGroupItem title="js">

```js
const isIE = !!document.documentMode;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isIE = !!(document as any).documentMode;
```

</CodeGroupItem>

</CodeGroup>

### Detect macOS browser

<CodeGroup>

<CodeGroupItem title="js">

```js
const isMacBrowser = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isMacBrowser: boolean = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
```

</CodeGroupItem>

</CodeGroup>

### Get all siblings of an element

<CodeGroup>

<CodeGroupItem title="js">

```js
const siblings = (ele) => [].slice.call(ele.parentNode.children).filter((child) => child !== ele);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const siblings = (ele: Node): Node[] => (ele.parentNode ? [].slice.call(ele.parentNode.children).filter((child) => child !== ele) : []);
```

</CodeGroupItem>

</CodeGroup>

### Get the position of an element relative to the document

<CodeGroup>

<CodeGroupItem title="js">

```js
const getPosition = (ele) => ((r = ele.getBoundingClientRect()), { left: r.left + window.scrollX, top: r.top + window.scrollY });
```

</CodeGroupItem>

</CodeGroup>

> Example

```js
getPosition(document.body); // { left: 0, top: 0 }
```

### Get the selected text

<CodeGroup>

<CodeGroupItem title="js">

```js
const getSelectedText = () => window.getSelection().toString();
```

</CodeGroupItem>

</CodeGroup>

### Go back to the previous page

<CodeGroup>

<CodeGroupItem title="js">

```js
history.back();

// Or
history.go(-1);
```

</CodeGroupItem>

</CodeGroup>

### Hide an element

<CodeGroup>

<CodeGroupItem title="js">

```js
// Pick the method that is suitable for your use case
const hide = (ele) => (ele.style.display = 'none');

// Or
const hide = (ele) => (ele.style.visibility = 'hidden');

// Or
const hide = (ele) => (ele.hidden = true);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const hide = (ele: HTMLElement): string => (ele.style.display = 'none');

// Or
const hide = (ele: HTMLElement): string => (ele.style.visibility = 'hidden');

// Or
const hide = (ele: HTMLElement): boolean => (ele.hidden = true);
```

</CodeGroupItem>

</CodeGroup>

### Insert an element after other one

<CodeGroup>

<CodeGroupItem title="js">

```js
const insertAfter = (ele, anotherEle) => anotherEle.parentNode.insertBefore(ele, anotherEle.nextSibling);

// Or
const insertAfter = (ele, anotherEle) => anotherEle.insertAdjacentElement('afterend', ele);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const insertAfter = (ele: Element, anotherEle: Element): Element | null => (anotherEle.parentNode ? anotherEle.parentNode.insertBefore(ele, anotherEle.nextSibling) : null);

// Or
const insertAfter = (ele: Element, anotherEle: Element): Element | null => anotherEle.insertAdjacentElement('afterend', ele);
```

</CodeGroupItem>

</CodeGroup>

### Insert given HTML after an element

<CodeGroup>

<CodeGroupItem title="js">

```js
const insertHtmlAfter = (html, ele) => ele.insertAdjacentHTML('afterend', html);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const insertHtmlAfter = (html: string, ele: Element): void => ele.insertAdjacentHTML('afterend', html);
```

</CodeGroupItem>

</CodeGroup>

### Insert given HTML before an element

<CodeGroup>

<CodeGroupItem title="js">

```js
const insertHtmlBefore = (html, ele) => ele.insertAdjacentHTML('beforebegin', html);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const insertHtmlBefore = (html: string, ele: Element): void => ele.insertAdjacentHTML('beforebegin', html);
```

</CodeGroupItem>

</CodeGroup>

### Redirect to another page

<CodeGroup>

<CodeGroupItem title="js">

```js
const goTo = (url) => (location.href = url);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const goTo = (url: string): string => (location.href = url);
```

</CodeGroupItem>

</CodeGroup>

### Reload the current page

<CodeGroup>

<CodeGroupItem title="js">

```js
const reload = () => location.reload();

// Or
const reload = () => (location.href = location.href);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const reload = (): void => location.reload();

// Or
const reload = (): string => (location.href = location.href);
```

</CodeGroupItem>

</CodeGroup>

### Replace an element

<CodeGroup>

<CodeGroupItem title="js">

```js
const replace = (ele, newEle) => ele.parentNode.replaceChild(newEle, ele);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const replace = (ele: Element, newEle: Element): Element | null => (ele.parentNode ? ele.parentNode.replaceChild(newEle, ele) : null);
```

</CodeGroupItem>

</CodeGroup>

### Scroll to top of the page

<CodeGroup>

<CodeGroupItem title="js">

```js
const goToTop = () => window.scrollTo(0, 0);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const goToTop = (): void => window.scrollTo(0, 0);
```

</CodeGroupItem>

</CodeGroup>

### Serialize form data

<CodeGroup>

<CodeGroupItem title="js">

```js
const serialize = (formEle) => Array.from(new FormData(formEle)).reduce((p, [k, v]) => Object.assign({}, p, { [k]: p[k] ? (Array.isArray(p[k]) ? p[k] : [p[k]]).concat(v) : v }), {});
```

</CodeGroupItem>

</CodeGroup>

### Show an element

<CodeGroup>

<CodeGroupItem title="js">

```js
const show = (ele) => (ele.style.display = '');
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const show = (ele: HTMLElement): string => (ele.style.display = '');
```

</CodeGroupItem>

</CodeGroup>

### Strip HTML from a given text

<CodeGroup>

<CodeGroupItem title="js">

```js
const stripHtml = (html) => new DOMParser().parseFromString(html, 'text/html').body.textContent || '';
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const stripHtml = (html: string): string => new DOMParser().parseFromString(html, 'text/html').body.textContent || '';
```

</CodeGroupItem>

</CodeGroup>

### Toggle an element

<CodeGroup>

<CodeGroupItem title="js">

```js
const toggle = (ele) => (ele.style.display = ele.style.display === 'none' ? 'block' : 'none');

// Or
const toggle = (ele) => (ele.hidden = !ele.hidden);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const toggle = (ele: HTMLElement): string => (ele.style.display = ele.style.display === 'none' ? 'block' : 'none');

// Or
const toggle = (ele: HTMLElement): boolean => (ele.hidden = !ele.hidden);
```

</CodeGroupItem>

</CodeGroup>

## Function

### Box handler

<CodeGroup>

<CodeGroupItem title="js">

```js
const boxHandler = (x) => ({ next: (f) => boxHandler(f(x)), done: (f) => f(x) });
```

</CodeGroupItem>

</CodeGroup>

> Examples

```js
// First example
const getPercentNumber = (str) =>
    boxHandler(str)
        .next((str) => str.replace(/\%/, ''))
        .next((str) => parseFloat(str))
        .done((res) => res * 0.01);

getPercentNumber('50%'); // 0.5

// Second example
const getMoney = (price) => Number.parseFloat(price.replace(/\$/, ''));
const getPercent = (percent) => Number.parseFloat(percent.replace(/\%/)) * 0.01;

const getDiscountPrice = (price, discount) =>
    boxHandler(getMoney(price))
        .done((cents) => boxHandler(getPercent(discount)).next((save) => cents - cents * save))
        .done((res) => res);

getDiscountPrice('$6.00', '20%'); // 4.8
```

### Check if a value is a function

<CodeGroup>

<CodeGroupItem title="js">

```js
const isFunction = (v) => ['[object Function]', '[object GeneratorFunction]', '[object AsyncFunction]', '[object Promise]'].includes(Object.prototype.toString.call(v));
```

</CodeGroupItem>

</CodeGroup>

> Examples

```js
isFunction(function () {}); // true
isFunction(function* () {}); // true
isFunction(async function () {}); // true
```

### Check if a value is a generator function

<CodeGroup>

<CodeGroupItem title="js">

```js
const isGeneratorFunction = (v) => Object.prototype.toString.call(v) === '[object GeneratorFunction]';
```

</CodeGroupItem>

</CodeGroup>

> Examples

```js
isGeneratorFunction(function () {}); // false
isGeneratorFunction(function* () {}); // true
```

### Check if a value is an async function

<CodeGroup>

<CodeGroupItem title="js">

```js
const isAsyncFunction = (v) => Object.prototype.toString.call(v) === '[object AsyncFunction]';
```

</CodeGroupItem>

</CodeGroup>

> Examples

```js
isAsyncFunction(function () {}); // false
isAsyncFunction(function* () {}); // false
isAsyncFunction(async function () {}); // true
```

### Compose functions from left to right

<CodeGroup>

<CodeGroupItem title="js">

```js
// Compose functions from left to right
const pipe =
    (...fns) =>
    (x) =>
        fns.reduce((y, f) => f(y), x);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```js
const lowercase = (str) => str.toLowerCase();
const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
const reverse = (str) => str.split('').reverse().join('');

const fn = pipe(lowercase, capitalize, reverse);

// We will execute `lowercase`, `capitalize` and `reverse` in order
fn('Hello World') === 'dlrow olleH';
```

### Compose functions

<CodeGroup>

<CodeGroupItem title="js">

```js
// Compose functions from right to left
const compose =
    (...fns) =>
    (x) =>
        fns.reduceRight((y, f) => f(y), x);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```js
const lowercase = (str) => str.toLowerCase();
const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
const reverse = (str) => str.split('').reverse().join('');

const fn = compose(reverse, capitalize, lowercase);

// We will execute `lowercase`, `capitalize` and `reverse` in order
fn('Hello World') === 'dlrow olleH';
```

### Create a function that accepts a single argument

<CodeGroup>

<CodeGroupItem title="js">

```js
const unary = (fn) => (arg) => fn(arg);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```js
['1', '2', '3', '4', '5'].map(unary(parseInt)); // [1, 2, 3, 4, 5]
```

### Create an empty function

<CodeGroup>

<CodeGroupItem title="js">

```js
const noop = () => {};

// Or
const noop = Function();
// calling Function() might be detected as using eval by some security tools
```

</CodeGroupItem>

</CodeGroup>

### Curry a function

<CodeGroup>

<CodeGroupItem title="js">

```js
const curry = (fn, ...args) => (fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args));
```

</CodeGroupItem>

</CodeGroup>

> Examples

```js
const sum = (a, b, c) => a + b + c;
curry(sum)(1)(2)(3); // 6
curry(sum)(1, 2, 3); // 6
curry(sum, 1)(2, 3); // 6
curry(sum, 1)(2)(3); // 6
curry(sum, 1, 2)(3); // 6
curry(sum, 1, 2, 3); // 6
```

### Delay the evaluation of a function

<CodeGroup>

<CodeGroupItem title="js">

```js
// returns a new version of `fn` that returns values as lazy evaluable
const thunkfy =
    (fn) =>
    (...args) =>
    () =>
        fn(...args);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```js
const heavyComputation = (x) => doStuff(x);
const unnecessarySlow = manyThings.map(heavyComputation).find((result) => result.criteria);
const probablyFaster = manyThings.map(thunkfy(heavyComputation)).find((thunk) => thunk().criteria);
```

### Execute a function once

<CodeGroup>

<CodeGroupItem title="js">

```js
const once = (fn) =>
    (
        (ran = false) =>
        () =>
            ran ? fn : ((ran = !ran), (fn = fn()))
    )();
```

</CodeGroupItem>

</CodeGroup>

> Examples

```js
let n = 0;
const incOnce = once(() => ++n);
incOnce(); // n = 1
incOnce(); // n = 1
incOnce(); // n = 1
```

### Flip the arguments of a function

<CodeGroup>

<CodeGroupItem title="js">

```js
// Reverse the order of arguments
const flip =
    (fn) =>
    (...args) =>
        fn(...args.reverse());

// For binary functions
const flip = (fn) => (b, a) => fn(a, b);

// Or for curried functions
const flip = (fn) => (b) => (a) => fn(a)(b);
```

</CodeGroupItem>

</CodeGroup>

### Examples

```js
const isParent = (parent, child) => parent.children.includes(child);
const isChild = flip(isParent);
```

### Identity function

<CodeGroup>

<CodeGroupItem title="js">

```js
const identity = (x) => x;
```

</CodeGroupItem>

</CodeGroup>

### Logical xor operator

<CodeGroup>

<CodeGroupItem title="js">

```js
// returns `true` if one of the arguments is truthy and the other is falsy

const xor = (a, b) => (a && !b) || (!a && b);

// Or
const xor = (a, b) => !(!a && !b) && !(a && b);

// Or
const xor = (a, b) => Boolean(!a ^ !b);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```js
xor(true, true); // false
xor(false, false); // false
xor(true, false); // true
xor(false, true); // true
```

### Memoize a function

<CodeGroup>

<CodeGroupItem title="js">

```js
const memoize = (fn) =>
    (
        (cache = Object.create(null)) =>
        (arg) =>
            cache[arg] || (cache[arg] = fn(arg))
    )();
```

</CodeGroupItem>

</CodeGroup>

> Examples

```js
// Calculate Fibonacci numbers
const fibo = memoize((n) => (n <= 2 ? 1 : fibo(n - 1) + fibo(n - 2)));

fibo(1); // 1
fibo(2); // 1
fibo(3); // 2
fibo(4); // 3
fibo(5); // 5
fibo(6); // 8
```

### Partially apply a function

<CodeGroup>

<CodeGroupItem title="js">

```js
const partial =
    (fn, ...a) =>
    (...b) =>
        fn(...a, ...b);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```js
const sum = (x, y) => x + y;
const inc = partial(sum, 1);
inc(9); // 10
```

### Uncurry a function

<CodeGroup>

<CodeGroupItem title="js">

```js
// `fn` is a curried function
// `n` is the depth of parameters
const uncurry =
    (fn, n = 1) =>
    (...args) =>
        (
            (acc) => (args) =>
                args.reduce((x, y) => x(y), acc)
        )(fn)(args.slice(0, n));
```

</CodeGroupItem>

</CodeGroup>

> Examples

```js
const sum = (a) => (b) => (c) => a + b + c;
uncurry(sum, 1)(1)(2)(3); // 6
uncurry(sum, 2)(1, 2)(3); // 6
uncurry(sum, 3)(1, 2, 3); // 6
```

## Math

### Calculate the angle of a line defined by two points

<CodeGroup>

<CodeGroupItem title="js">

```js
// In radians
const radiansAngle = (p1, p2) => Math.atan2(p2.y - p1.y, p2.x - p1.x);

// In degrees
const degreesAngle = (p1, p2) => (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
interface Point {
    x: number;
    y: number;
}

const radiansAngle = (p1: Point, p2: Point): number => Math.atan2(p2.y - p1.y, p2.x - p1.x);

const degreesAngle = (p1: Point, p2: Point): number => (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI;
```

</CodeGroupItem>

</CodeGroup>

### Calculate the distance between two points

<CodeGroup>

<CodeGroupItem title="js">

```js
const distance = (p1, p2) => Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
interface Point {
    x: number;
    y: number;
}

const distance = (p1: Point, p2: Point): number => Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
```

</CodeGroupItem>

</CodeGroup>

### Calculate the linear interpolation between two numbers

<CodeGroup>

<CodeGroupItem title="js">

```js
const lerp = (a, b, amount) => (1 - amount) * a + amount * b;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const lerp = (a: number, b: number, amount: number): number => (1 - amount) * a + amount * b;
```

</CodeGroupItem>

</CodeGroup>

### Calculate the midpoint between two points

<CodeGroup>

<CodeGroupItem title="js">

```js
const midpoint = (p1, p2) => [(p1.x + p2.x) / 2, (p1.y + p2.y) / 2];
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
interface Point {
    x: number;
    y: number;
}

const midpoint = (p1: Point, p2: Point): number[] => [(p1.x + p2.x) / 2, (p1.y + p2.y) / 2];
```

</CodeGroupItem>

</CodeGroup>

### Check if a point is inside a rectangle

<CodeGroup>

<CodeGroupItem title="js">

```js
const isInside = (point, rect) => point.x > rect.left && point.x < rect.right && point.y > rect.top && point.y < rect.bottom;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
interface Point {
    x: number;
    y: number;
}

interface Rect {
    bottom: number;
    left: number;
    top: number;
    right: number;
}

const isInside = (point: Point, rect: Rect): boolean => point.x > rect.left && point.x < rect.right && point.y > rect.top && point.y < rect.bottom;
```

</CodeGroupItem>

</CodeGroup>

### Check if a rectangle contains other one

<CodeGroup>

<CodeGroupItem title="js">

```js
// Returns true if `a` contains `b`
// (x1, y1) and (x2, y2) are top-left and bottom-right corners
const contains = (a, b) => a.x1 <= b.x1 && a.y1 <= b.y1 && a.x2 >= b.x2 && a.y2 >= b.y2;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
interface Rect {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
}

const contains = (a: Rect, b: Rect): boolean => a.x1 <= b.x1 && a.y1 <= b.y1 && a.x2 >= b.x2 && a.y2 >= b.y2;
```

</CodeGroupItem>

</CodeGroup>

### Check if a rectangle overlaps other one

<CodeGroup>

<CodeGroupItem title="js">

```js
// Returns true if `a` overlaps `b`
// (x1, y1) and (x2, y2) are top-left and bottom-right corners
const overlaps = (a, b) => (a.x1 < b.x2 && b.x1 < a.x2) || (a.y1 < b.y2 && b.y1 < a.y2);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
interface Rect {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
}

const contains = (a: Rect, b: Rect): boolean => (a.x1 < b.x2 && b.x1 < a.x2) || (a.y1 < b.y2 && b.y1 < a.y2);
```

</CodeGroupItem>

</CodeGroup>

### Convert degrees to radians

<CodeGroup>

<CodeGroupItem title="js">

```js
const degsToRads = (deg) => (deg * Math.PI) / 180.0;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const degsToRads = (deg: number): number => (deg * Math.PI) / 180.0;
```

</CodeGroupItem>

</CodeGroup>

### Convert radians to degrees

<CodeGroup>

<CodeGroupItem title="js">

```js
const radsToDegs = (rad) => (rad * 180) / Math.PI;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const radsToDegs = (rad: number): number => (rad * 180) / Math.PI;
```

</CodeGroupItem>

</CodeGroup>

### Normalize the ratio of a number in a range

<CodeGroup>

<CodeGroupItem title="js">

```js
const normalizeRatio = (value, min, max) => (value - min) / (max - min);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const normalizeRatio = (value: number, min: number, max: number): number => (value - min) / (max - min);
```

</CodeGroupItem>

</CodeGroup>

### Round a number to the nearest multiple of a given value

<CodeGroup>

<CodeGroupItem title="js">

```js
const roundNearest = (value, nearest) => Math.round(value / nearest) * nearest;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const roundNearest = (value: number, nearest: number): number => Math.round(value / nearest) * nearest;
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
roundNearest(100, 30); // 90
roundNearest(200, 30); // 210
roundNearest(200, 40); // 200
```

## Misc

### Check if the code is running in NodeJS

<CodeGroup>

<CodeGroupItem title="js">

```js
const isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isNode: boolean = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
```

</CodeGroupItem>

</CodeGroup>

### Check if the code is running in the browser

<CodeGroup>

<CodeGroupItem title="js">

```js
const isBrowser = typeof window === 'object' && typeof document === 'object';
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isBrowser: boolean = typeof window === 'object' && typeof document === 'object';
```

</CodeGroupItem>

</CodeGroup>

### Clear all cookies

<CodeGroup>

<CodeGroupItem title="js">

```js
const clearCookies = () => document.cookie.split(';').forEach((c) => (document.cookie = c.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`)));
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const clearCookies = (): void => document.cookie.split(';').forEach((c) => (document.cookie = c.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`)));
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
clearCookies();
```

### Convert 3 digits color to 6 digits color

<CodeGroup>

<CodeGroupItem title="js">

```js
const toFullHexColor = (color) =>
    `#${(color.startsWith('#') ? color.slice(1) : color)
        .split('')
        .map((c) => `${c}${c}`)
        .join('')}`;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const toFullHexColor = (color: string): string =>
    `#${(color.startsWith('#') ? color.slice(1) : color)
        .split('')
        .map((c) => `${c}${c}`)
        .join('')}`;
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
toFullHexColor('123'); // '#112233'
toFullHexColor('#123'); // '#112233'
toFullHexColor('#abc'); // '#aabbcc'
```

### Convert Celsius to Fahrenheit

<CodeGroup>

<CodeGroupItem title="js">

```js
const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const celsiusToFahrenheit = (celsius: number): number => (celsius * 9) / 5 + 32;
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
celsiusToFahrenheit(15); // 59
celsiusToFahrenheit(0); // 32
celsiusToFahrenheit(-20); // -4
```

### Convert cookie to object

<CodeGroup>

<CodeGroupItem title="js">

```js
const cookies = document.cookie
    .split(';')
    .map((item) => item.split('='))
    .reduce((acc, [k, v]) => (acc[k.trim().replace('"', '')] = v) && acc, {});
```

</CodeGroupItem>

</CodeGroup>

### Convert Fahrenheit to Celsius

<CodeGroup>

<CodeGroupItem title="js">

```js
const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const fahrenheitToCelsius = (fahrenheit: number): number => ((fahrenheit - 32) * 5) / 9;
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
fahrenheitToCelsius(59); // 15
fahrenheitToCelsius(32); // 0
```

### Convert hex to rgb

<CodeGroup>

<CodeGroupItem title="js">

```js
const hexToRgb = (hex) =>
    hex
        .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_, r, g, b) => `#${r}${r}${g}${g}${b}${b}`)
        .substring(1)
        .match(/.{2}/g)
        .map((x) => parseInt(x, 16));
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const hexToRgb = (hex: string): string =>
    hex
        .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_, r, g, b) => `#${r}${r}${g}${g}${b}${b}`)
        .substring(1)
        .match(/.{2}/g)
        .map((x) => parseInt(x, 16));
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
hexToRgb('#00ffff'); // [0, 255, 255]
hexToRgb('#0ff'); // [0, 255, 255]
```

### Convert rgb color to hex

<CodeGroup>

<CodeGroupItem title="js">

```js
const rgbToHex = (red, green, blue) => `#${((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)}`;

// Or
const rgbToHex = (red, green, blue) => `#${[red, green, blue].map((v) => v.toString(16).padStart(2, '0')).join('')}`;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const rgbToHex = (red: number, green: number, blue: number): string => `#${((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)}`;

// Or
const rgbToHex = (red: number, green: number, blue: number): string => `#${[red, green, blue].map((v) => v.toString(16).padStart(2, '0')).join('')}`;
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
rgbToHex(0, 255, 255); // '#00ffff'
```

### Convert URL parameters to object

<CodeGroup>

<CodeGroupItem title="js">

```js
const getUrlParams = (query) => Array.from(new URLSearchParams(query)).reduce((p, [k, v]) => Object.assign({}, p, { [k]: p[k] ? (Array.isArray(p[k]) ? p[k] : [p[k]]).concat(v) : v }), {});
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const getUrlParams = (query: string): Record<string, string> => (
    Array.from(new URLSearchParams(query)).reduce((p, [k, v]) => Object.assign({}, p, { [k]: p[k] ? (Array.isArray(p[k]) ? p[k] : [p[k]]).concat(v) : v }), {} as Record<string, string>)
);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
getUrlParams(location.search); // Get the parameters of the current URL

getUrlParams('foo=Foo&bar=Bar'); // { foo: "Foo", bar: "Bar" }

// Duplicate key
getUrlParams('foo=Foo&foo=Fuzz&bar=Bar'); // { foo: ["Foo", "Fuzz"], bar: "Bar" }
```

### Decode a JWT token

<CodeGroup>

<CodeGroupItem title="js">

```js
const decode = (token) =>
    decodeURIComponent(
        atob(token.split('.')[1].replace('-', '+').replace('_', '/'))
            .split('')
            .map((c) => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
            .join('')
    );
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const decode = (token: string): string =>
    decodeURIComponent(
        atob(token.split('.')[1].replace('-', '+').replace('_', '/'))
            .split('')
            .map((c) => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
            .join('')
    );
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
decode(`
    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0I
    joxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
`);

// { "sub": "1234567890", "name": "John Doe", "iat": 1516239022 }
```

### Detect dark mode

<CodeGroup>

<CodeGroupItem title="js">

```js
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isDarkMode: boolean = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
```

</CodeGroupItem>

</CodeGroup>

### Easing functions

<CodeGroup>

<CodeGroupItem title="js">

```js
// Some easing functions
// See https://gist.github.com/gre/1650294 and https://easings.net

const linear = (t) => t;

const easeInQuad = (t) => t * t;
const easeOutQuad = (t) => t * (2 - t);
const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

const easeInCubic = (t) => t * t * t;
const easeOutCubic = (t) => --t * t * t + 1;
const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1);

const easeInQuart = (t) => t * t * t * t;
const easeOutQuart = (t) => 1 - --t * t * t * t;
const easeInOutQuart = (t) => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t);

const easeInQuint = (t) => t * t * t * t * t;
const easeOutQuint = (t) => 1 + --t * t * t * t * t;
const easeInOutQuint = (t) => (t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t);

const easeInSine = (t) => 1 + Math.sin((Math.PI / 2) * t - Math.PI / 2);
const easeOutSine = (t) => Math.sin((Math.PI / 2) * t);
const easeInOutSine = (t) => (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2;

const easeInElastic = (t) => (0.04 - 0.04 / t) * Math.sin(25 * t) + 1;
const easeOutElastic = (t) => ((0.04 * t) / --t) * Math.sin(25 * t);
const easeInOutElastic = (t) => ((t -= 0.5) < 0 ? (0.02 + 0.01 / t) * Math.sin(50 * t) : (0.02 - 0.01 / t) * Math.sin(50 * t) + 1);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const linear = (t: number): number => t;

const easeInQuad = (t: number): number => t * t;
const easeOutQuad = (t: number): number => t * (2 - t);
const easeInOutQuad = (t: number): number => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

const easeInCubic = (t: number): number => t * t * t;
const easeOutCubic = (t: number): number => --t * t * t + 1;
const easeInOutCubic = (t: number): number => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1);

const easeInQuart = (t: number): number => t * t * t * t;
const easeOutQuart = (t: number): number => 1 - --t * t * t * t;
const easeInOutQuart = (t: number): number => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t);

const easeInQuint = (t: number): number => t * t * t * t * t;
const easeOutQuint = (t: number): number => 1 + --t * t * t * t * t;
const easeInOutQuint = (t: number): number => (t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t);

const easeInSine = (t: number): number => 1 + Math.sin((Math.PI / 2) * t - Math.PI / 2);
const easeOutSine = (t: number): number => Math.sin((Math.PI / 2) * t);
const easeInOutSine = (t: number): number => (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2;

const easeInElastic = (t: number): number => (0.04 - 0.04 / t) * Math.sin(25 * t) + 1;
const easeOutElastic = (t: number): number => ((0.04 * t) / --t) * Math.sin(25 * t);
const easeInOutElastic = (t: number): number => ((t -= 0.5) < 0 ? (0.02 + 0.01 / t) * Math.sin(50 * t) : (0.02 - 0.01 / t) * Math.sin(50 * t) + 1);
```

</CodeGroupItem>

</CodeGroup>

### Emulate a dice throw

<CodeGroup>

<CodeGroupItem title="js">

```js
const throwdice = () => ~~(Math.random() * 6) + 1;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const throwdice = (): number => ~~(Math.random() * 6) + 1;
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
throwdice(); // 4
throwdice(); // 1
throwdice(); // 6
```

### Encode a URL

<CodeGroup>

<CodeGroupItem title="js">

```js
// `encodeURIComponent` doesn't encode -_.!~*'()
const encode = (url) => encodeURIComponent(url).replace(/!/g, '%21').replace(/~/g, '%7E').replace(/\*/g, '%2A').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/%20/g, '+');
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const encode = (url: string): string =>
    encodeURIComponent(url).replace(/!/g, '%21').replace(/~/g, '%7E').replace(/\*/g, '%2A').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/%20/g, '+');
```

</CodeGroupItem>

</CodeGroup>

### Generate an unique and increment id

<CodeGroup>

<CodeGroupItem title="js">

```js
const uid = (() => ((id = 0), () => id++))();
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
uid(); // 0
uid(); // 1
uid(); // 2
uid(); // 3
```

### Get the first defined and non null argument

<CodeGroup>

<CodeGroupItem title="js">

```js
const coalesce = (...args) => args.find((item) => item !== undefined && item !== null);

// Or
const coalesce = (...args) => args.find((item) => ![undefined, null].includes(item));
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const coalesce = (...args: any[]): any[] => args.find((item) => item !== undefined && item !== null);

// Or
const coalesce = (...args: any[]): any[] => args.find((item) => ![undefined, null].includes(item));
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
coalesce(undefined, null, 'helloworld', NaN); // 'helloworld'
```

### Get the value of a cookie

<CodeGroup>

<CodeGroupItem title="js">

```js
const cookie = (name) => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
```

</CodeGroupItem>

</CodeGroup>

> Examples

```js
cookie('_ga'); // GA1.2.825309271.1581874719
```

### Get the value of a param from a URL

<CodeGroup>

<CodeGroupItem title="js">

```js
const getParam = (url, param) => new URLSearchParams(new URL(url).search).get(param);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const getParam = (url: string, param: string): string | null => new URLSearchParams(new URL(url).search).get(param);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
getParam('http://domain.com?message=hello', 'message'); // 'hello'
```

### Get type of a variable in string

<CodeGroup>

<CodeGroupItem title="js">

```js
const getTypeOf = (obj) => Object.prototype.toString.call(obj).match(/\[object (.*)\]/)[1];
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const getTypeOf = (obj: any): string => (Object.prototype.toString.call(obj).match(/\[object (.*)\]/) as string[])[1];
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
getTypeOf('hello world'); // String
getTypeOf(1000); // Number
getTypeOf(Infinity); // Number
getTypeOf(true); // Boolean
getTypeOf(Symbol()); // Symbol
getTypeOf(null); // Null
getTypeOf(undefined); // Undefined
getTypeOf({}); // Object
getTypeOf([]); // Array
getTypeOf(/[a-z]/g); // RegExp
getTypeOf(new Date(2021)); // Date
getTypeOf(new Error()); // Error
getTypeOf(function () {}); // Function
getTypeOf((a, b) => a + b); // Function
getTypeOf(async () => {}); // AsyncFunction
getTypeOf(document); // HTMLDocument
```

### Redirect the page to HTTPS if it is in HTTP

<CodeGroup>

<CodeGroupItem title="js">

```js
const redirectHttps = () => (location.protocol === 'https:' ? {} : location.replace(`https://${location.href.split('//')[1]}`));

// Or
const redirectHttps = () => (location.protocol === 'https:' ? {} : (location.protocol = 'https:'));
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const redirectHttps = (): void => (location.protocol === 'https:' ? void 0 : location.replace(`https://${location.href.split('//')[1]}`));

// Or
const redirectHttps = (): string => (location.protocol === 'https:' ? '' : (location.protocol = 'https:'));
```

</CodeGroupItem>

</CodeGroup>

### Run Promises in sequence

<CodeGroup>

<CodeGroupItem title="js">

```js
// `promises` is an array of `Promise`
const run = (promises) => promises.reduce((p, c) => p.then((rp) => c.then((rc) => [...rp, rc])), Promise.resolve([]));
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const run = (promises: Promise<any>[]): Promise<any> => promises.reduce((p, c) => p.then((rp) => c.then((rc) => [...rp, rc])), Promise.resolve([]));
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
run(promises).then((results) => {
    // `results` is an array of promise results in the same order
});
```

### Swap two variables

<CodeGroup>

<CodeGroupItem title="js">

```js
[a, b] = [b, a];

// Or
a = [b, (b = a)][0];

// Or
a = ((x) => x)(b, (b = a));

// Or
// (only works with numbers)
a = b + ((b = a), 0);

a = b * ((b = a), 1);
```

</CodeGroupItem>

</CodeGroup>

### Wait for an amount of time

<CodeGroup>

<CodeGroupItem title="js">

```js
const wait = async (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const wait = async (milliseconds: number) => new Promise((resolve) => setTimeout(resolve, milliseconds));
```

</CodeGroupItem>

</CodeGroup>

## Number

### Add an ordinal suffix to a number

<CodeGroup>

<CodeGroupItem title="js">

```js
// `n` is a position number
const addOrdinal = (n) => `${n}${['st', 'nd', 'rd'][((((n + 90) % 100) - 10) % 10) - 1] || 'th'}`;

// Or
const addOrdinal = (n) => `${n}${[, 'st', 'nd', 'rd'][/1?.$/.exec(n)] || 'th'}`;

// Or
const addOrdinal = (n) => `${n}${[, 'st', 'nd', 'rd'][(n % 100 >> 3) ^ 1 && n % 10] || 'th'}`;

// Or
const addOrdinal = (n) => `${n}${{ one: 'st', two: 'nd', few: 'rd', other: 'th' }[new Intl.PluralRules('en', { type: 'ordinal' }).select(n)]}`;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const addOrdinal = (n: number): string => `${n}${['st', 'nd', 'rd'][((((n + 90) % 100) - 10) % 10) - 1] || 'th'}`;

// Or
const addOrdinal = (n: number): string => `${n}${[, 'st', 'nd', 'rd'][/1?.$/.exec(n)] || 'th'}`;

// Or
const addOrdinal = (n: number): string => `${n}${[, 'st', 'nd', 'rd'][(n % 100 >> 3) ^ 1 && n % 10] || 'th'}`;

// Or
const addOrdinal = (n: number): string => `${n}${{ one: 'st', two: 'nd', few: 'rd', other: 'th' }[new Intl.PluralRules('en', { type: 'ordinal' }).select(n)]}`;
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
addOrdinal(1); // '1st'
addOrdinal(2); // '2nd'
addOrdinal(3); // '3rd'
addOrdinal(11); // '11th'
addOrdinal(12); // '13th'
addOrdinal(13); // '13th'
```

### Calculate Fibonacci numbers

<CodeGroup>

<CodeGroupItem title="js">

```js
const fibo = (n, memo = {}) => memo[n] || (n <= 2 ? 1 : (memo[n] = fibo(n - 1, memo) + fibo(n - 2, memo)));
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const fibo = (n: number, memo: Record<string, number> = {}): number => memo[n] || (n <= 2 ? 1 : (memo[n] = fibo(n - 1, memo) + fibo(n - 2, memo)));
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
fibo(1); // 1
fibo(2); // 1
fibo(3); // 2
fibo(4); // 3
fibo(5); // 5
fibo(6); // 8
```

### Calculate the average of arguments

<CodeGroup>

<CodeGroupItem title="js">

```js
const average = (...args) => args.reduce((a, b) => a + b) / args.length;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const average = (...args: number[]): number => args.reduce((a, b) => a + b) / args.length;
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
average(1, 2, 3, 4); // 2.5
```

### Calculate the division of arguments

<CodeGroup>

<CodeGroupItem title="js">

```js
const division = (...args) => args.reduce((a, b) => a / b);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const division = (...args: number): number => args.reduce((a, b) => a / b);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
division(1, 2, 3, 4); // 0.04166666666666666
```

### Calculate the factorial of a number

<CodeGroup>

<CodeGroupItem title="js">

```js
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const factorial = (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1));
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
factorial(2); // 2
factorial(3); // 6
factorial(4); // 24
factorial(5); // 120
factorial(6); // 720
```

### Calculate the mod of collection index

<CodeGroup>

<CodeGroupItem title="js">

```js
const mod = (a, b) => ((a % b) + b) % b;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const mod = (a: number, b: number): number => ((a % b) + b) % b;
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
mod(-1, 5); // 4
mod(3, 5); // 3
mod(6, 5); // 1
```

### Calculate the remainder of division of arguments

<CodeGroup>

<CodeGroupItem title="js">

```js
const remainder = (...args) => args.reduce((a, b) => a % b);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const remainder = (...args: number[]): number => args.reduce((a, b) => a % b);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
remainder(1, 2, 3, 4); // 1
```

### Calculate the sum of arguments

<CodeGroup>

<CodeGroupItem title="js">

```js
const sum = (...args) => args.reduce((a, b) => a + b);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const sum = (...args: number[]): number => args.reduce((a, b) => a + b);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
sum(1, 2, 3, 4); // 10
```

### Clamp a number between two values

<CodeGroup>

<CodeGroupItem title="js">

```js
const clamp = (val, min = 0, max = 1) => Math.max(min, Math.min(max, val));
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const clamp = (val: number, min: number = 0, max: number = 1): number => Math.max(min, Math.min(max, val));
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
clamp(199, 10, 25); // 25
```

### Compute the greatest common divisor between two numbers

<CodeGroup>

<CodeGroupItem title="js">

```js
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
gcd(10, 15); // 5
```

### Convert a number to equivalent characters

<CodeGroup>

<CodeGroupItem title="js">

```js
const toChars = (n) => `${n >= 26 ? toChars(Math.floor(n / 26) - 1) : ''}${'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[n % 26]}`;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const toChars = (n: number): string => `${n >= 26 ? toChars(Math.floor(n / 26) - 1) : ''}${'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[n % 26]}`;
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
toChars(0); // A
toChars(1); // B
toChars(25); // Z

toChars(26); // AA
toChars(27); // AB
toChars(51); // AZ

toChars(701); // ZZ
toChars(702); // AAA
toChars(703); // AAB
```

### Convert a string to number

<CodeGroup>

<CodeGroupItem title="js">

```js
const toNumber = (str) => +str;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const toNumber = (str: string): number => +str;
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
toNumber('42'); // 42
```

### Convert decimal to binary recursively

<CodeGroup>

<CodeGroupItem title="js">

```js
const decToBi = (num) => (num === 0 ? 0 : (num % 2) + 10 * decToBi(~~(num / 2)));
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const decToBi = (num: number): number => (num === 0 ? 0 : (num % 2) + 10 * decToBi(~~(num / 2)));
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
decToBi(10); //1010
```

### Get the arrays of digits from a number

<CodeGroup>

<CodeGroupItem title="js">

```js
const digitize = (n) => `${n}`.split('').map((v) => parseInt(v, 10));

// Or
const digitize = (n) => [...`${n}`].map((v) => parseInt(v, 10));
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const digitize = (n: number): number[] => `${n}`.split('').map((v) => parseInt(v, 10));

// Or
const digitize = (n: number): number[] => [...`${n}`].map((v) => parseInt(v, 10));
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
digitize(123); // [1, 2, 3]
```

### Multiply arguments

<CodeGroup>

<CodeGroupItem title="js">

```js
const mul = (...args) => args.reduce((a, b) => a * b);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const mul = (...args: number[]): number => args.reduce((a, b) => a * b);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
mul(1, 2, 3, 4); // 24
```

### Prefix an integer with zeros

<CodeGroup>

<CodeGroupItem title="js">

```js
const prefixWithZeros = (n, length) => (n / Math.pow(10, length)).toFixed(length).substr(2);

// Or
const prefixWithZeros = (n, length) => `${Array(length).join('0')}${n}`.slice(-length);

// Or
const prefixWithZeros = (n, length) => String(n).padStart(length, '0');
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const prefixWithZeros = (n: number, length: number): string => (n / Math.pow(10, length)).toFixed(length).substr(2);

// Or
const prefixWithZeros = (n: number, length: number): string => `${Array(length).join('0')}${n}`.slice(-length);

// Or
const prefixWithZeros = (n: number, length: number): string => String(n).padStart(length, '0');
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
prefixWithZeros(42, 5); // '00042'
```

### Round a number to a given number of digits

<CodeGroup>

<CodeGroupItem title="js">

```js
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const round = (n: number, decimals: number = 0): number => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
round(1.234567, 3); // 1.235
round(1.234567, 4); // 1.2346
```

### Subtract arguments

<CodeGroup>

<CodeGroupItem title="js">

```js
const subtract = (...args) => args.reduce((a, b) => a - b);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const subtract = (...args: number[]): number => args.reduce((a, b) => a - b);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
subtract(1, 2, 3, 4); // -8
```

### Truncate a number at decimal

<CodeGroup>

<CodeGroupItem title="js">

```js
const truncate = (n) => ~~n;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const truncate = (n: number): number => ~~n;
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
truncate(25.198726354); // 25
truncate(-25.198726354); // -25
```

### Truncate a number to a given number of decimal places without rounding

<CodeGroup>

<CodeGroupItem title="js">

```js
const toFixed = (n, fixed) => `${n}`.match(new RegExp(`^-?\\d+(?:\.\\d{0,${fixed}})?`))[0];

// Or
const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const toFixed = (n: number, fixed: number): number => +(`${n}`.match(new RegExp(`^-?\\d+(?:\.\\d{0,${fixed}})?`)) as string[])[0];

// Or
const toFixed = (n: number, fixed: number): number => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
toFixed(25.198726354, 1); // 25.1
toFixed(25.198726354, 2); // 25.19
toFixed(25.198726354, 3); // 25.198
toFixed(25.198726354, 4); // 25.1987
toFixed(25.198726354, 5); // 25.19872
toFixed(25.198726354, 6); // 25.198726
```

## Object

<CodeGroup>

<CodeGroupItem title="js">

```js
const isEqual = (...objects) => objects.every((obj) => JSON.stringify(obj) === JSON.stringify(objects[0]));
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isEqual = (...objects: object[]): boolean => objects.every((obj) => JSON.stringify(obj) === JSON.stringify(objects[0]));
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
isEqual({ foo: 'bar' }, { foo: 'bar' }); // true
isEqual({ foo: 'bar' }, { bar: 'foo' }); // false
```

### Create an empty map that does not have properties

<CodeGroup>

<CodeGroupItem title="js">

```js
// `map` doesn't have any properties
const map = Object.create(null);

// The following `map` has `__proto__` property
// const map = {};
```

</CodeGroupItem>

</CodeGroup>

### Create an object from the pairs of key and value

<CodeGroup>

<CodeGroupItem title="js">

```js
const toObj = (arr) => Object.fromEntries(arr);

// Or
const toObj = (arr) => arr.reduce((a, c) => ((a[c[0]] = c[1]), a), {});
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
toObj([
    ['a', 1],
    ['b', 2],
    ['c', 3],
]); // { a: 1, b: 2, c: 3 }
```

### Extract values of a property from an array of objects

<CodeGroup>

<CodeGroupItem title="js">

```js
const pluck = (objs, property) => objs.map((obj) => obj[property]);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
pluck(
    [
        { name: 'John', age: 20 },
        { name: 'Smith', age: 25 },
        { name: 'Peter', age: 30 },
    ],
    'name'
); // ['John', 'Smith', 'Peter']
```

### Get the value at given path of an object

<CodeGroup>

<CodeGroupItem title="js">

```js
const getValue = (path, obj) => path.split('.').reduce((acc, c) => acc && acc[c], obj);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```js
getValue('a.b', { a: { b: 'Hello World' } }); // 'Hello World';
```

### Immutably rename object keys

<CodeGroup>

<CodeGroupItem title="js">

```js
const renameKeys = (keysMap, obj) => Object.keys(obj).reduce((acc, key) => ({ ...acc, ...{ [keysMap[key] || key]: obj[key] } }), {});
```

</CodeGroupItem>

</CodeGroup>

> Examples

```js
const obj = { a: 1, b: 2, c: 3 };
const keysMap = { a: 'd', b: 'e', c: 'f' };
renameKeys(keysMap, obj); // { d: 1, e: 2, f: 3 }
```

### Invert keys and values of an object

<CodeGroup>

<CodeGroupItem title="js">

```js
const invert = (obj) => Object.keys(obj).reduce((res, k) => Object.assign(res, { [obj[k]]: k }), {});

// Or
const invert = (obj) => Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
```

</CodeGroupItem>

</CodeGroup>

> Examples

```js
invert({ a: '1', b: '2', c: '3' }); // { 1: 'a', 2: 'b', 3: 'c' }
```

### Omit a subset of properties from an object

<CodeGroup>

<CodeGroupItem title="js">

```js
const omit = (obj, keys) =>
    Object.keys(obj)
        .filter((k) => !keys.includes(k))
        .reduce((res, k) => Object.assign(res, { [k]: obj[k] }), {});
```

</CodeGroupItem>

</CodeGroup>

> Examples

```js
omit({ a: '1', b: '2', c: '3' }, ['a', 'b']); // { c: '3' }
```

### Pick a subset of properties of an object

<CodeGroup>

<CodeGroupItem title="js">

```js
const pick = (obj, keys) =>
    Object.keys(obj)
        .filter((k) => keys.includes(k))
        .reduce((res, k) => Object.assign(res, { [k]: obj[k] }), {});
```

</CodeGroupItem>

</CodeGroup>

> Examples

```js
pick({ a: '1', b: '2', c: '3' }, ['a', 'b']); // { a: '1', b: '2' }
```

### Remove all null and undefined properties from an object

<CodeGroup>

<CodeGroupItem title="js">

```js
const removeNullUndefined = (obj) => Object.entries(obj).reduce((a, [k, v]) => (v == null ? a : ((a[k] = v), a)), {});

// Or
const removeNullUndefined = (obj) =>
    Object.entries(obj)
        .filter(([_, v]) => v != null)
        .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});

// Or
const removeNullUndefined = (obj) => Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
```

</CodeGroupItem>

</CodeGroup>

> Examples

```js
removeNullUndefined({
    foo: null,
    bar: undefined,
    fuzz: 42,
}); // { fuzz: 42 }
```

### Shallow copy an object

<CodeGroup>

<CodeGroupItem title="js">

```js
const shallowCopy = obj => Object.assign({}, obj);

// or
const shallowCopy = obj => {...obj};
```

</CodeGroupItem>

</CodeGroup>

### Sort an object by its properties

<CodeGroup>

<CodeGroupItem title="js">

```js
const sort = (obj) =>
    Object.keys(obj)
        .sort()
        .reduce((p, c) => ((p[c] = obj[c]), p), {});
```

</CodeGroupItem>

</CodeGroup>

> Examples

```js
const colors = {
    white: '#ffffff',
    black: '#000000',
    red: '#ff0000',
    green: '#008000',
    blue: '#0000ff',
};
sort(colors);
/*
{
    black: '#000000',
    blue: '#0000ff',
    green: '#008000',
    red: '#ff0000',
    white: '#ffffff',
}
*/
```

## Random

### Generate a random boolean

<CodeGroup>

<CodeGroupItem title="js">

```js
const randomBoolean = () => Math.random() >= 0.5;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const randomBoolean = (): boolean => Math.random() >= 0.5;
```

</CodeGroupItem>

</CodeGroup>

### Generate a random floating point number in given range

<CodeGroup>

<CodeGroupItem title="js">

```js
const randomFloat = (min, max) => Math.random() * (max - min) + min;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const randomFloat = (min: number, max: number): number => Math.random() * (max - min) + min;
```

</CodeGroupItem>

</CodeGroup>

### Generate a random hex color

<CodeGroup>

<CodeGroupItem title="js">

```js
const randomColor = () => `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`;

// Or
const randomColor = () => `#${(~~(Math.random() * (1 << 24))).toString(16)}`;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const randomColor = (): string => `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`;

// Or
const randomColor = (): string => `#${(~~(Math.random() * (1 << 24))).toString(16)}`;
```

</CodeGroupItem>

</CodeGroup>

### Generate a random integer in given range

<CodeGroup>

<CodeGroupItem title="js">

```js
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const randomInteger = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;
```

</CodeGroupItem>

</CodeGroup>

### Generate a random IP address

<CodeGroup>

<CodeGroupItem title="js">

```js
const randomIp = () =>
    Array(4)
        .fill(0)
        .map((_, i) => Math.floor(Math.random() * 255) + (i === 0 ? 1 : 0))
        .join('.');
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const randomIp = (): number =>
    Array(4)
        .fill(0)
        .map((_, i) => Math.floor(Math.random() * 255) + (i === 0 ? 1 : 0))
        .join('.');
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
randomIp(); // 175.89.174.131
```

### Generate a random sign

<CodeGroup>

<CodeGroupItem title="js">

```js
const randomSign = () => (Math.random() >= 0.5 ? 1 : -1);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const randomSign = (): number => (Math.random() >= 0.5 ? 1 : -1);
```

</CodeGroupItem>

</CodeGroup>

### Generate a random string from given characters

<CodeGroup>

<CodeGroupItem title="js">

```js
const generateString = (length, chars) =>
    Array(length)
        .fill('')
        .map((v) => chars[Math.floor(Math.random() * chars.length)])
        .join('');
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const generateString = (length: number, chars: string) =>
    Array(length)
        .fill('')
        .map((v) => chars[Math.floor(Math.random() * chars.length)])
        .join('');
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
generateString(10, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
```

### Generate a random string using Node crypto module

<CodeGroup>

<CodeGroupItem title="js">

```js
const randomStr = () => require('crypto').randomBytes(32).toString('hex');
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const randomStr = (): string => require('crypto').randomBytes(32).toString('hex');
```

</CodeGroupItem>

</CodeGroup>

### Generate a random string with given length

<CodeGroup>

<CodeGroupItem title="js">

```js
const generateString = (length) =>
    Array(length)
        .fill('')
        .map((v) => Math.random().toString(36).charAt(2))
        .join('');
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const generateString = (length: number): string =>
    Array(length)
        .fill('')
        .map((v) => Math.random().toString(36).charAt(2))
        .join('');
```

</CodeGroupItem>

</CodeGroup>

### Generate a random UUID

<CodeGroup>

<CodeGroupItem title="js">

```js
const uuid = (a) => (a ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid));
```

</CodeGroupItem>

</CodeGroup>

### Generate an array of random integers in a given range

<CodeGroup>

<CodeGroupItem title="js">

```js
const randomArrayInRange = (min, max, n) => Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const randomArrayInRange = (min: number, max: number, n: number): number[] => Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
randomArrayInRange(1, 100, 10); // [11, 82, 41, 35, 76, 83, 43, 15, 60, 54]
```

### Get a random item and remove it from an array

<CodeGroup>

<CodeGroupItem title="js">

```js
const randomItem = (arr) => arr.splice((Math.random() * arr.length) | 0, 1);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const randomItem = <T,>(arr: T[]): T => arr.splice((Math.random() * arr.length) | 0, 1) as unknown as T;
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
const arr = [1, 3, 5, 7, 9];
randomItem(arr); // 7
// arr = [1, 3, 5, 9]
```

### Get a random item from an array

<CodeGroup>

<CodeGroupItem title="js">

```js
const randomItems = (arr, count) => arr.concat().reduce((p, _, __, arr) => (p[0] < count ? [p[0] + 1, p[1].concat(arr.splice((Math.random() * arr.length) | 0, 1))] : p), [0, []])[1];
```

</CodeGroupItem>

</CodeGroup>

> Examples

```js
randomItems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3); // [4, 8, 5]
randomItems(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'], 4); // ['e', 'c', 'h', 'j']
```

### Pick a random property of an object

<CodeGroup>

<CodeGroupItem title="js">

```js
const randomProp = (obj) => Object.keys(obj)[(Math.random() * Object.keys(obj).length) | 0];
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const randomProp = (obj: object): any => Object.keys(obj)[(Math.random() * Object.keys(obj).length) | 0];
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
const colors = {
    aqua: '#00ffff',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    black: '#000000',
    blue: '#0000ff',
    brown: '#a52a2a',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgrey: '#a9a9a9',
    darkgreen: '#006400',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkviolet: '#9400d3',
    fuchsia: '#ff00ff',
    gold: '#ffd700',
    green: '#008000',
    indigo: '#4b0082',
    khaki: '#f0e68c',
    lightblue: '#add8e6',
    lightcyan: '#e0ffff',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    magenta: '#ff00ff',
    maroon: '#800000',
    navy: '#000080',
    olive: '#808000',
    orange: '#ffa500',
    pink: '#ffc0cb',
    purple: '#800080',
    violet: '#800080',
    red: '#ff0000',
    silver: '#c0c0c0',
    white: '#ffffff',
    yellow: '#ffff00',
};
randomProp(colors); // 'red'
```

### Pick random lines from a text document

<CodeGroup>

<CodeGroupItem title="js">

```js
const randomLines = (str, count) => str.split(/\r?\n/).reduce((p, _, __, arr) => (p[0] < count ? [p[0] + 1, p[1].concat(arr.splice((Math.random() * arr.length) | 0, 1))] : p), [0, []])[1];
```

</CodeGroupItem>

</CodeGroup>

> Examples

```js
randomLines(
    `one
two
three
four
five`,
    2
);

// ['one', 'four']
```

## String

### Capitalize a string

<CodeGroup>

<CodeGroupItem title="js">

```js
const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

// Or
const capitalize = ([first, ...rest]) => `${first.toUpperCase()}${rest.join('')}`;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const capitalize = (str: string): string => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

// Or
const capitalize = ([first, ...rest]: string): string => `${first.toUpperCase()}${rest.join('')}`;
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
capitalize('hello world'); // 'Hello world'
```

### Check if a path is relative

<CodeGroup>

<CodeGroupItem title="js">

```js
const isRelative = (path) => !/^([a-z]+:)?[\\/]/i.test(path);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isRelative = (path: string): boolean => !/^([a-z]+:)?[\\/]/i.test(path);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
isRelative('/foo/bar/baz'); // false
isRelative('C:\\foo\\bar\\baz'); // false
isRelative('foo/bar/baz.txt'); // true
isRelative('foo.md'); // true
```

### Check if a string consists of a repeated character sequence

<CodeGroup>

<CodeGroupItem title="js">

```js
const consistsRepeatedSubstring = (str) => `${str}${str}`.indexOf(str, 1) !== str.length;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const consistsRepeatedSubstring = (str: string): boolean => `${str}${str}`.indexOf(str, 1) !== str.length;
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
consistsRepeatedSubstring('aa'); // true
consistsRepeatedSubstring('aaa'); // true
consistsRepeatedSubstring('ababab'); // true
consistsRepeatedSubstring('abc'); // false
```

### Check if a string is a palindrome

<CodeGroup>

<CodeGroupItem title="js">

```js
const isPalindrome = (str) => str === str.split('').reverse().join('');
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isPalindrome = (str: string): boolean => str === str.split('').reverse().join('');
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
isPalindrome('abc'); // false
isPalindrom('abcba'); // true
```

### Check if a URL is absolute

<CodeGroup>

<CodeGroupItem title="js">

```js
const isAbsoluteUrl = (url) => /^[a-z][a-z0-9+.-]*:/.test(url);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isAbsoluteUrl = (url: string): boolean => /^[a-z][a-z0-9+.-]*:/.test(url);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
isAbsoluteUrl('https://1loc.dev'); // true
isAbsoluteUrl('https://1loc.dev/foo/bar'); // true
isAbsoluteUrl('1loc.dev'); // false
isAbsoluteUrl('//1loc.dev'); // false
```

### Check if two strings are anagram

<CodeGroup>

<CodeGroupItem title="js">

```js
const areAnagram = (str1, str2) => str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const areAnagram = (str1: string, str2: string): boolean => str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
areAnagram('listen', 'silent'); // true
areAnagram('they see', 'the eyes'); // true
areAnagram('node', 'deno'); // true
```

### Convert a base64 encoded string to an uint8 array

<CodeGroup>

<CodeGroupItem title="js">

```js
const base64ToUint8 = (str) => Uint8Array.from(atob(str), (c) => c.charCodeAt(0));
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const base64ToUint8 = (str: string): Uint8Array => Uint8Array.from(atob(str), (c) => c.charCodeAt(0));
```

</CodeGroupItem>

</CodeGroup>

### Convert a letter to associate emoji

<CodeGroup>

<CodeGroupItem title="js">

```js
const letterToEmoji = (c) => String.fromCodePoint(c.toLowerCase().charCodeAt(0) + 127365);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const letterToEmoji = (c: string): string => String.fromCodePoint(c.toLowerCase().charCodeAt(0) + 127365);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
letterToEmoji('a'); // 🇦
letterToEmoji('b'); // 🇧
```

### Convert a string to camelCase

<CodeGroup>

<CodeGroupItem title="js">

```js
const toCamelCase = (str) => str.trim().replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const toCamelCase = (str: string): string => str.trim().replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
toCamelCase('background-color'); // backgroundColor
toCamelCase('-webkit-scrollbar-thumb'); // WebkitScrollbarThumb
toCamelCase('_hello_world'); // HelloWorld
toCamelCase('hello_world'); // helloWorld
```

### Convert a string to PascalCase

<CodeGroup>

<CodeGroupItem title="js">

```js
const toPascalCase = (str) => (str.match(/[a-zA-Z0-9]+/g) || []).map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join('');
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const toPascalCase = (str: string): string => (str.match(/[a-zA-Z0-9]+/g) || []).map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join('');
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
toPascalCase('hello world'); // 'HelloWorld'
toPascalCase('hello.world'); // 'HelloWorld'
toPascalCase('foo_bar-baz'); // FooBarBaz
```

### Convert a string to URL slug

<CodeGroup>

<CodeGroupItem title="js">

```js
const slugify = (str) =>
    str
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '');
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const slugify = (str: string): string =>
    str
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '');
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
slugify('Chapter One: Once upon a time...'); // 'chapter-one-once-upon-a-time'
```

### Convert a Windows file path to Unix path

<CodeGroup>

<CodeGroupItem title="js">

```js
const toUnixPath = (path) => path.replace(/[\\/]+/g, '/').replace(/^([a-zA-Z]+:|\.\/)/, '');
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const toUnixPath = (path: string): string => path.replace(/[\\/]+/g, '/').replace(/^([a-zA-Z]+:|\.\/)/, '');
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
toUnixPath('./foo/bar/baz'); // foo/bar/baz
toUnixPath('C:\\foo\\bar\\baz'); // /foo/bar/baz
```

### Convert an uint8 array to a base64 encoded string

<CodeGroup>

<CodeGroupItem title="js">

```js
const uint8ToBase64 = (arr) =>
    btoa(
        Array(arr.length)
            .fill('')
            .map((_, i) => String.fromCharCode(arr[i]))
            .join('')
    );

// For Node.js
const uint8ToBase64 = (arr) => Buffer.from(arr).toString('base64');
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const uint8ToBase64 = (arr: Uint8Array): string =>
    btoa(
        Array(arr.length)
            .fill('')
            .map((_, i) => String.fromCharCode(arr[i]))
            .join('')
    );

// For Node.js
const uint8ToBase64 = (arr: Uint8Array): string => Buffer.from(arr).toString('base64');
```

</CodeGroupItem>

</CodeGroup>

### Convert camelCase to kebab-case and vice versa

<CodeGroup>

<CodeGroupItem title="js">

```js
const kebabToCamel = (str) => str.replace(/-./g, (m) => m.toUpperCase()[1]);

const camelToKebab = (str) => str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const kebabToCamel = (str: string): string => str.replace(/-./g, (m) => m.toUpperCase()[1]);

const camelToKebab = (str: string): string => str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
kebabToCamel('background-color'); // 'backgroundColor'
camelToKebab('backgroundColor'); // 'background-color'
```

### Convert snake_case to camelCase

<CodeGroup>

<CodeGroupItem title="js">

```js
const snakeToCamel = (str) => str.toLowerCase().replace(/(_\w)/g, (m) => m.toUpperCase().substr(1));
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const snakeToCamel = (str: string): string => str.toLowerCase().replace(/(_\w)/g, (m) => m.toUpperCase().substr(1));
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
snakeToCamel('HELLO_world'); // 'helloWorld'
```

### Convert the name of an Excel column to number

<CodeGroup>

<CodeGroupItem title="js">

```js
const getIndex = (col) => col.split('').reduce((prev, next) => prev * 26 + parseInt(next, 36) - 9, 0);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const getIndex = (col: string): number => col.split('').reduce((prev, next) => prev * 26 + parseInt(next, 36) - 9, 0);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
getIndex('A'); // 1
getIndex('B'); // 2
getIndex('C'); // 3
getIndex('Z'); // 26

getIndex('AA'); // 27
getIndex('AB'); // 28
getIndex('AC'); // 29
getIndex('AZ'); // 52

getIndex('AAA'); // 703
getIndex('AAB'); // 704
```

### Count the number of words in a string

<CodeGroup>

<CodeGroupItem title="js">

```js
const countWords = (str) => str.trim().split(/\s+/).length;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const countWords = (str: string): number => str.trim().split(/\s+/).length;
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
countWords('Hello World'); // 2
countWords('Hello    World'); // 2
countWords('  Hello  World  '); // 2
```