# JavaScript一行代码 - DOM

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