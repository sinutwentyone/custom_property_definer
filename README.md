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

### Syntax

```javascript
  var customPropertyDefiner = require('custom_property_definer');
  
  customPropertyDefiner( containerObj, propertyName, descriptor );
```

### Parameters

#### containerObj
types: Object

The object on which to define the property.

#### propertyName
types: String

Property name for the value.

#### descriptor
types: Object

Object value descriptor

##### properties

**enumerable**
---
types: boolean

true if and only if this property shows up during enumeration of the properties on the corresponding object.

Defaults: false

**configurable**
---

types: boolean

'true' if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.

Defaults: false

**initialValue**
---

types: function

The returned value of the function will be taken as property initial value.

Defaults: undefined

**getter**
--

types: function

getter function for property's value

Defaults: function returning current value


**setter**
--

types: function

setter function for property's value

Defaults: function asigning value to property




