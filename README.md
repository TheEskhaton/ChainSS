## ChainSS ##

### Installation ###

npm install chainss

A chainable CSS creation module for nodejs.

### Example ###

```javascript
var ChainSS = require('chainss');
var ss = new ChainSS('span.test');
var css = ss.fontSize('14px').lineHeight('1.4em').getCSS();
```

Produces

```css
span.test { 
    font-size : "14px";
    line-height: "1.4em";
}
```


