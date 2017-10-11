# custom_property_definer
synthetic sugar for Object.defineProperty. So i don't really like Object.defineProperty usage implementation then i create this.

## Installation

```javascript
  npm install --save-dev custom_property_definer
```

## USAGE
#### Native Object.defineProperty

```javascript
  var bValue = 38;
  
  Object.defineProperty(o, 'b', {
    get: function() { return bValue; },
    set: function(newValue) { bValue = newValue; },
    enumerable: true,
    configurable: true
  });
  
  o.b; // 38
```

I don't really like where 'bValue' is placed outside the scope.

#### custom_property_definer

```javascript
  var customPropertyDefiner = require('custom_property_definer');
  
  var obj = {};
  
  customPropertyDefiner( obj, 'b', {
    configurable: true,
    enumerable: true,
    initialValue: function() {
      return 38;
    },
    getter: function( currentValue ) {
      return currentValue
    },
    setter: function( newValue, setValue, currentValue ) {
      setValue( newValue )
    }
  });
  
  obj.b; // 38
```

