# custom_property_definer
synthetic sugar for Object.defineProperty

## I Was Facing This Problem
So i don't really like Object.defineProperty usage implementation. So i build this guy.

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

