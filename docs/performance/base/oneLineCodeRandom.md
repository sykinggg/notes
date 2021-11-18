# JavaScript一行代码 - Random

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