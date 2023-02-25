## about

Essential math utils to help when drawing or animating.

## setup

Load via script tag:

```html
<!-- Just an IIFE namespaced `arithmetics` -->
<script src="https://thewhodidthis.github.io/arithmetics/arithmetics.js"></script>
```

Source from an import map:

```json
{
  "imports": {
    "@thewhodidthis/arithmetics": "https://thewhodidthis.github.io/arithmetics/main.js"
  }
}
```

Download from GitHub directly if using a package manager:

```sh
# Add to package.json
npm install thewhodidthis/arithmetics
```

## usage

Expect named exports for each helper,

```js
import * as math from "@thewhodidthis/arithmetics"

const stretch = math.mag(3, 4)
const percent = math.map(0.5, 0, 1, 0, 100)

console.assert(stretch, 5)
console.assert(percent, 50)
```

## see also

- [@thewhodidthis/geometrics](https://github.com/thewhodidthis/geometrics/)
- [p5.Math.js](https://github.com/trembl/p5.Math.js)
