function customPropertyDefiner( containerObj, propertyNameStr, definerObj ) {
  var obj = {};

  obj._init = function( containerObj, propertyNameStr, definerObj ) {
    obj._container = containerObj;
    obj._propName = propertyNameStr;
    obj._writable = definerObj.writable;
    obj._enumerable = definerObj.enumerable;
    obj._configurable = definerObj.configurable;
    obj._currentValue = undefined;

    obj._setInitialValue( definerObj.initialValue );
    obj._setupGetter( definerObj.getter );
    obj._setupSetter( definerObj.setter );

    obj._setup();

    return obj;
  };

  obj._setInitialValue = function( value ) {
    if ( typeof value === 'function' ) {
      obj._setValue( value() );
    }
  };

  obj._setupSetter = function( setter ) {
    obj._setter = function( inputValue ) {
      if ( typeof setter === 'function' ) {
        setter( inputValue, obj._setValue, obj._currentValue );
      } else {
        obj.setValue( inputValue );
      }
    }
  };

  obj._setupGetter = function( getter ) {
    var currentValue = obj._currentValue;

    obj._getter = function() {
      return typeof getter === 'function' ? getter( currentValue ) : currentValue;
    };
  };

  obj._setup = function() {
    Object.defineProperty( obj._container, obj._propName, {
      writable: obj._writable,
      enumerable: obj._enumerable,
      configurable: obj._configurable,
      value: obj._currentValue,
      getter: obj._getter,
      setter: obj._setter
    });
  };

  obj._setValue = function( value ) {
    obj._currentValue = value;
  };

  return obj._init( containerObj, propertyNameStr, definerObj );
}

module.exports = customPropertyDefiner;
