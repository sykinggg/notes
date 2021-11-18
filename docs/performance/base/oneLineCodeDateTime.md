# JavaScript一行代码 - Date Time

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