## ChainSS ##

### Installation ###

`npm install chainss --save`

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

### Creating CSS for multiple selectors ###

```javascript
var ChainSS = require('chainss');
var list = new ChainSS.SelectorList();
list = list.add('span.test')
        .add('.selector')
        .style('span.test', { fontSize: '14px'})
        .style('.selector', { display: 'block'})
var css = list.getCSS();
```

Produces

```css
span.test {
    font-size : "14px";
}

.selector {
    display : "block";
}
```

