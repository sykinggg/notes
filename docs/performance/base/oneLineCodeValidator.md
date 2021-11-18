# JavaScript一行代码 - Validator

### Check if a character is a digit

<CodeGroup>

<CodeGroupItem title="js">

```js
const isDigit = (char) => char < 10;

// Or
const isDigit = (char) => char.length === 1 && c >= '0' && c <= '9';

// Or
const isDigit = (char) => Boolean([true, true, true, true, true, true, true, true, true, true][char]);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isDigit = (char: string): boolean => char < 10;

// Or
const isDigit = (char: string): boolean => char.length === 1 && c >= '0' && c <= '9';

// Or
const isDigit = (char: string): boolean => Boolean([true, true, true, true, true, true, true, true, true, true][char]);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
isDigit('a'); // false
isDigit('abc'); // false
isDigit(10); // false
isDigit('10'); // false

isDigit('2'); // true
isDigit(2); // true
```

### Check if a date is a weekday

<CodeGroup>

<CodeGroupItem title="js">

```js
// `date` is a Date object
const isWeekday = (date = new Date()) => date.getDay() % 6 !== 0;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isWeekday = (date = new Date()): boolean => date.getDay() % 6 !== 0;
```

</CodeGroupItem>

</CodeGroup>

### Check if a date is between two dates

<CodeGroup>

<CodeGroupItem title="js">

```js
// `min`, `max` and `date` are `Date` instances
const isBetween = (date, min, max) => date.getTime() >= min.getTime() && date.getTime() <= max.getTime();
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isBetween = (date: Date, min: Date, max: Date): boolean => date.getTime() >= min.getTime() && date.getTime() <= max.getTime();
```

</CodeGroupItem>

</CodeGroup>

### Check if a date is today

<CodeGroup>

<CodeGroupItem title="js">

```js
// `date` is a Date object
const isToday = (date) => date.toISOString().slice(0, 10) === new Date().toISOString().slice(0, 10);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isToday = (date: Date): boolean => date.toISOString().slice(0, 10) === new Date().toISOString().slice(0, 10);
```

</CodeGroupItem>

</CodeGroup>

### Check if a date occurs in the current year

<CodeGroup>

<CodeGroupItem title="js">

```js
// `date` is a Date object
const isCurrentYear = (date) => date.getUTCFullYear() === new Date().getUTCFullYear();
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isCurrentYear = (date: Date): boolean => date.getUTCFullYear() === new Date().getUTCFullYear();
```

</CodeGroupItem>

</CodeGroup>

### Check if a flat array has duplicate values

<CodeGroup>

<CodeGroupItem title="js">

```js
const hasDuplicateValues = (arr) => new Set(arr).size !== arr.length;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const hasDuplicateValues = <T,_>(arr: T[]): boolean => new Set(arr).size !== arr.length;
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
hasDuplicateValues(['h', 'e', 'l', 'l', 'o']); // true
hasDuplicateValues(['w', 'o', 'r', 'd']); // false
```

### Check if a given integer is a prime number

<CodeGroup>

<CodeGroupItem title="js">

```js
const isPrime = (n) =>
    n > 1 &&
    Array(Math.floor(Math.sqrt(n)) - 1)
        .fill(0)
        .map((_, i) => i + 2)
        .every((i) => n % i !== 0);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isPrime = (n: number): boolean =>
    n > 1 &&
    Array(Math.floor(Math.sqrt(n)) - 1)
        .fill(0)
        .map((_, i) => i + 2)
        .every((i) => n % i !== 0);
```

</CodeGroupItem>

</CodeGroup>

### Check if a number is a power of 2

<CodeGroup>

<CodeGroupItem title="js">

```js
const isPowerOfTwo = (n) => (n & (n - 1)) === 0;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isPowerOfTwo = (n: number): boolean => (n & (n - 1)) === 0;
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
isPowerOfTwo(256); // true
isPowerOfTwo(129); // false
```

### Check if a number is even

<CodeGroup>

<CodeGroupItem title="js">

```js
const isEven = (n) => n % 2 === 0;

// Or
const isEven = (n) => (n & 1) === 0;

// Or
const isEven = (n) => !(n & 1);

// Or
const isEven = (n) => Number.isInteger(n / 2);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isEven = (n: number): boolean => n % 2 === 0;

// Or
const isEven = (n: number): boolean => (n & 1) === 0;

// Or
const isEven = (n: number): boolean => !(n & 1);

// Or
const isEven = (n: number): boolean => Number.isInteger(n / 2);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
isEven(1); // false
isEven(2); // true
```

### Check if a number is in a given range

<CodeGroup>

<CodeGroupItem title="js">

```js
const inRange = (num, a, b, threshold = 0) => Math.min(a, b) - threshold <= num && num <= Math.max(a, b) + threshold;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const inRange = (num: number, a: number, b: number, threshold: number = 0): boolean => Math.min(a, b) - threshold <= num && num <= Math.max(a, b) + threshold;
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
inRange(10, 5, 15); // true
inRange(10, 5, 6); // false
inRange(10, 15, 5); // true
inRange(-10, -5, -15); // true
```

### Check if a number is negative

<CodeGroup>

<CodeGroupItem title="js">

```js
const isNegative = (n) => Math.sign(n) === -1;

// Or
const isNegative = (n) => n < 0;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isNegative = (n: number): boolean => Math.sign(n) === -1;

// Or
const isNegative = (n: number): boolean => n < 0;
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
isNegative(-3); // true
isNegative(8); // false
```

### Check if a number is odd

<CodeGroup>

<CodeGroupItem title="js">

```js
const isOdd = (n) => n % 2 !== 0;

// Or
const isOdd = (n) => !!(n & 1);

// Or
const isOdd = (n) => !Number.isInteger(n / 2);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isOdd = (n: number): boolean => n % 2 !== 0;

// Or
const isOdd = (n: number): boolean => !!(n & 1);

// Or
const isOdd = (n: number): boolean => !Number.isInteger(n / 2);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
isOdd(1); // true
isOdd(2); // false
```

### Check if a number is positive

<CodeGroup>

<CodeGroupItem title="js">

```js
const isPositive = (n) => Math.sign(n) === 1;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isPositive = (n: number): boolean => Math.sign(n) === 1;
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
isPositive(3); // true
isPositive(-8); // false
```

### Check if a string contains lower case characters

<CodeGroup>

<CodeGroupItem title="js">

```js
const containsLowerCase = (str) => str !== str.toUpperCase();
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const containsLowerCase = (str: string): boolean => str !== str.toUpperCase();
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
containsLowerCase('Hello World'); // true
containsLowerCase('HELLO WORLD'); // false
```

### Check if a string contains only ASCII characters

<CodeGroup>

<CodeGroupItem title="js">

```js
const isAscii = (str) => /^[\x00-\x7F]+$/.test(str);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isAscii = (str: string): boolean => /^[\x00-\x7F]+$/.test(str);
```

</CodeGroupItem>

</CodeGroup>

### Check if a string contains only digits

<CodeGroup>

<CodeGroupItem title="js">

```js
const isNumeric = (str) => !/[^0-9]/.test(str);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isNumeric = (str: string): boolean => !/[^0-9]/.test(str);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
isNumeric(2); // true
isNumeric('23'); // true
isNumeric('00123'); // true

isNumeric('1.23'); // false
isNumeric('-Infinity'); // false
isNumeric('Infinity'); // false
isNumeric('NaN'); // false
```

### Check if a string contains only letters and numbers

<CodeGroup>

<CodeGroupItem title="js">

```js
const isAlphanumeric = (str) => /^[0-9A-Z]+$/i.test(str);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isAlphanumeric = (str: string): boolean => /^[0-9A-Z]+$/i.test(str);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
isAlphanumeric('helloworld'); // true
isAlphanumeric('HelloWorld'); // true
isAlphanumeric('hello world'); // false
isAlphanumeric('hello123'); // true
isAlphanumeric('hello 123'); // false
```

### Check if a string contains only letters

<CodeGroup>

<CodeGroupItem title="js">

```js
const isAlpha = (str) => /^[A-Z]+$/i.test(str);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isAlpha = (str: string): boolean => /^[A-Z]+$/i.test(str);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
isAlpha('helloworld'); // true
isAlpha('HelloWorld'); // true
isAlpha('hello world'); // false
isAlpha('0123456789'); // false
```

### Check if a string contains upper case characters

<CodeGroup>

<CodeGroupItem title="js">

```js
const containsUpperCase = (str) => str !== str.toLowerCase();
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const containsUpperCase = (str: string): boolean => str !== str.toLowerCase();
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
containsUpperCase('Hello World'); // true
containsUpperCase('hello world'); // false
```

### Check if a string contains whitespace

<CodeGroup>

<CodeGroupItem title="js">

```js
const containsWhitespace = (str) => (str) => /\s/.test(str);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const containsWhitespace =
    (str: string): boolean =>
    (str) =>
        /\s/.test(str);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
containsWhitespace('hello world'); // true
```

### Check if a string is a hexadecimal color

<CodeGroup>

<CodeGroupItem title="js">

```js
const isHexColor = (color) => /^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(color);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isHexColor = (color: string): boolean => /^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(color);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
isHexColor('#012'); // true
isHexColor('#A1B2C3'); // true
isHexColor('012'); // false
isHexColor('#GHIJKL'); // false
```

### Check if a string is a hexadecimal number

<CodeGroup>

<CodeGroupItem title="js">

```js
const isHexadecimal = (str) => /^[A-F0-9]+$/i.test(str);

// Or
const isHexadecimal = (str) => str.split('').every((c) => '0123456789ABCDEFabcdef'.indexOf(c) !== -1);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isHexadecimal = (str: string): boolean => /^[A-F0-9]+$/i.test(str);

// Or
const isHexadecimal = (str: string): boolean => str.split('').every((c) => '0123456789ABCDEFabcdef'.indexOf(c) !== -1);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
isHexadecimal('123'); // true
isHexadecimal('A1B2C3'); // true
isHexadecimal('#123'); // false
```

### Check if a string is a MongoDB ObjectId

<CodeGroup>

<CodeGroupItem title="js">

```js
const isMongoId = (str) => str.length === 24 && /^[A-F0-9]+$/i.test(str);

// Or
const isMongoId = (str) => str.length === 24 && str.split('').every((c) => '0123456789ABCDEFabcdef'.indexOf(c) !== -1);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isMongoId = (str: string): boolean => str.length === 24 && /^[A-F0-9]+$/i.test(str);

// Or
const isMongoId = (str: string): boolean => str.length === 24 && str.split('').every((c) => '0123456789ABCDEFabcdef'.indexOf(c) !== -1);
```

</CodeGroupItem>

</CodeGroup>

### Check if a string is an octal number

<CodeGroup>

<CodeGroupItem title="js">

```js
const isOctal = (str) => /^(0o)?[0-7]+$/i.test(str);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isOctal = (str: string): boolean => /^(0o)?[0-7]+$/i.test(str);
```

</CodeGroupItem>

</CodeGroup>

### Check if a string is lower case

<CodeGroup>

<CodeGroupItem title="js">

```js
const isLowerCase = (str) => str === str.toLowerCase();
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isLowerCase = (str: string): boolean => str === str.toLowerCase();
```

</CodeGroupItem>

</CodeGroup>

### Check if a string is upper case

<CodeGroup>

<CodeGroupItem title="js">

```js
const isUpperCase = (str) => str === str.toUpperCase();
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isUpperCase = (str: string): boolean => str === str.toUpperCase();
```

</CodeGroupItem>

</CodeGroup>

### Check if a value is a business identifier code

<CodeGroup>

<CodeGroupItem title="js">

```js
const isBIC = (value) => /^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/.test(value);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isBIC = (value: string): boolean => /^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/.test(value);
```

</CodeGroupItem>

</CodeGroup>

### Check if a value is a number

<CodeGroup>

<CodeGroupItem title="js">

```js
const isNumber = (value) => !isNaN(parseFloat(value)) && isFinite(value);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isNumber = (value: any): number => !isNaN(parseFloat(value)) && isFinite(value);
```

</CodeGroupItem>

</CodeGroup>

### Check if a value is a plain object

<CodeGroup>

<CodeGroupItem title="js">

```js
const isPlainObject = (v) => !!v && typeof v === 'object' && (v.__proto__ === null || v.__proto__ === Object.prototype);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isPlainObject = (v: any): boolean => !!v && typeof v === 'object' && (v.__proto__ === null || v.__proto__ === Object.prototype);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
isPlainObject(null); // false
isPlainObject('hello world'); // false
isPlainObject([]); // false
isPlainObject(Object.create(null)); // false
isPlainObject(function () {}); // false

isPlainObject({}); // true
isPlainObject({ a: '1', b: '2' }); // true
```

### Check if a value is a regular expression

<CodeGroup>

<CodeGroupItem title="js">

```js
const isRegExp = (value) => Object.prototype.toString.call(value) === '[object RegExp]';
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isRegExp = (value: any): boolean => Object.prototype.toString.call(value) === '[object RegExp]';
```

</CodeGroupItem>

</CodeGroup>

### Check if a value is a string

<CodeGroup>

<CodeGroupItem title="js">

```js
const isString = (value) => Object.prototype.toString.call(value) === '[object String]';
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isString = (value: any): boolean => Object.prototype.toString.call(value) === '[object String]';
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
isString('hello world'); // true
isString(new String('hello world')); // true
isString(10); // false
```

### Check if a value is an object

<CodeGroup>

<CodeGroupItem title="js">

```js
const isObject = (v) => v !== null && typeof v === 'object';
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isObject = (v: any): boolean => v !== null && typeof v === 'object';
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
isObject(null); // false
isObject('hello world'); // false

isObject({}); // true
isObject([]); // true
```

### Check if a value is base32 encoded

<CodeGroup>

<CodeGroupItem title="js">

```js
const isBase32 = (value) => value.length % 8 === 0 && /^[A-Z2-7]+=*$/.test(value);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isBase32 = (value: string): boolean => value.length % 8 === 0 && /^[A-Z2-7]+=*$/.test(value);
```

</CodeGroupItem>

</CodeGroup>

### Check if a value is base58 encoded

<CodeGroup>

<CodeGroupItem title="js">

```js
// It doesn't accept the I, O, l characters
const isBase58 = (value) => /^[A-HJ-NP-Za-km-z1-9]*$/.test(value);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isBase58 = (value: string): boolean => /^[A-HJ-NP-Za-km-z1-9]*$/.test(value);
```

</CodeGroupItem>

</CodeGroup>

### Check if a value is base64 encoded

<CodeGroup>

<CodeGroupItem title="js">

```js
const isBase64 = (value) => /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(value);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isBase64 = (value: string): boolean => /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(value);
```

</CodeGroupItem>

</CodeGroup>

### Check if a value is null

<CodeGroup>

<CodeGroupItem title="js">

```js
const isNil = (value) => value == null;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isNil = (value: any): boolean => value == null;
```

</CodeGroupItem>

</CodeGroup>

### Check if a year is leap year

<CodeGroup>

<CodeGroupItem title="js">

```js
const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

// Or
// Get the number of days in February
const isLeapYear = (year) => new Date(year, 1, 29).getDate() === 29;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isLeapYear = (year: number): boolean => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

// Or
const isLeapYear = (year: number): boolean => new Date(year, 1, 29).getDate() === 29;
```

</CodeGroupItem>

</CodeGroup>

### Check if all array elements are equal to a given value

<CodeGroup>

<CodeGroupItem title="js">

```js
const isEqual = (arr, value) => arr.every((item) => item === value);

// Or
// Ends earlier for false arrays
const isEqual = (arr, value) => !arr.some((item) => item !== value);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isEqual = <T,_>(arr: T[], value: T): boolean => arr.every((item) => item === value);

// Or
const isEqual = <T,_>(arr: T[], value: T): boolean => !arr.some((item) => item !== value);
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
isEqual(['foo', 'foo'], 'foo'); // true
isEqual(['foo', 'bar'], 'foo'); // false
isEqual(['bar', 'bar'], 'foo'); // false
```

### Check if all items in an array are equal

<CodeGroup>

<CodeGroupItem title="js">

```js
const areEqual = (arr) => arr.length > 0 && arr.every((item) => item === arr[0]);

// Or
const areEqual = (arr) => new Set(arr).size === 1;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const areEqual = <T,_>(arr: T[]): boolean => arr.length > 0 && arr.every((item) => item === arr[0]);

// Or
const areEqual = <T,_>(arr: T[]): boolean => new Set(arr).size === 1;
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
areEqual([1, 2, 3, 4]); // false
areEqual(['hello', 'hello', 'hello']); // true
```

### Check if an array contains a value matching some criterias

<CodeGroup>

<CodeGroupItem title="js">

```js
const contains = (arr, criteria) => arr.some((v) => criteria(v));

// Or
const contains = (arr, criteria) => arr.some(criteria);

// Or
const contains = (arr, criteria) => arr.filter(criteria).length > 0;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const contains = <T,_>(arr: T[], criteria: (a: T) => boolean): boolean => arr.some((v) => criteria(v));

// Or
const contains = <T,_>(arr: T[], criteria: (a: T) => boolean): boolean => arr.some(criteria);

// Or
const contains = <T,_>(arr: T[], criteria: (a: T) => boolean): boolean => arr.filter(criteria).length > 0;
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
contains([10, 20, 30], (v) => v > 25); // true
contains([10, 20, 30], (v) => v > 100 || v < 15); // true
contains([10, 20, 30], (v) => v > 100); // false
```

### Check if an array is not empty

<CodeGroup>

<CodeGroupItem title="js">

```js
const isNotEmpty = (arr) => Array.isArray(arr) && Object.keys(arr).length > 0;
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isNotEmpty = (arr: any): boolean => Array.isArray(arr) && Object.keys(arr).length > 0;
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
isNotEmpty([]); // false
isNotEmpty([1, 2, 3]); // true
```

### Check if an array is subset of other array

<CodeGroup>

<CodeGroupItem title="js">

```js
// Check if `b` is subset of `a`
const isSubset = (a, b) => new Set(b).size === new Set(b.concat(a)).size;

// Or
const isSubset = (a, b) => b.join('|').includes(a.join('|'));
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isSubset = <T,_>(a: T[], b: T[]): boolean => new Set(b).size === new Set(b.concat(a)).size;

// Or
const isSubset = <T,_>(a: T[], b: T[]): boolean => b.join('|').includes(a.join('|'));
```

</CodeGroupItem>

</CodeGroup>

> Examples

```ts
isSubset([1, 2], [1, 2, 3, 4]); // true
isSubset([1, 2, 5], [1, 2, 3, 4]); // false
isSubset([6], [1, 2, 3, 4]); // false
```

### Check if an object is a Promise

<CodeGroup>

<CodeGroupItem title="js">

```js
const isPromise = (obj) => !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isPromise = (obj: any): boolean => !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
```

</CodeGroupItem>

</CodeGroup>

### Check if an object is an array

<CodeGroup>

<CodeGroupItem title="js">

```js
const isArray = (obj) => Array.isArray(obj);
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isArray = (obj: any): boolean => Array.isArray(obj);
```

</CodeGroupItem>

</CodeGroup>

### Check if an object is empty

<CodeGroup>

<CodeGroupItem title="js">

```js
const isEmpty = (obj) => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;

// Or for enumerable property names only
const isEmpty = (obj) => JSON.stringify(obj) === '{}';
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isEmpty = (obj: object): boolean => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;

const isEmpty = (obj: object): boolean => JSON.stringify(obj) === '{}';
```

</CodeGroupItem>

</CodeGroup>

### Validate a Gregorian date

<CodeGroup>

<CodeGroupItem title="js">

```js
// `m`: the month (zero-based index)
// `d`: the day
// `y`: the year
const isValidDate = (m, d, y) => 0 <= m && m <= 11 && 0 < y && y < 32768 && 0 < d && d <= new Date(y, m, 0).getDate();
```

</CodeGroupItem>

<CodeGroupItem title="ts">

```ts
const isValidDate = (m: number, d: number, y: number): boolean => 0 <= m && m <= 11 && 0 < y && y < 32768 && 0 < d && d <= new Date(y, m, 0).getDate();
```

</CodeGroupItem>

</CodeGroup>