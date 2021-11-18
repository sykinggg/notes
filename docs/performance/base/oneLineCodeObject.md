# JavaScript一行代码 - Object

### Check if multiple objects are equal

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