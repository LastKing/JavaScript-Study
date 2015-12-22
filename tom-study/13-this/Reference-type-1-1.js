/**
 * Created by toonew on 2015/12/22.
 */

var foo = 10;
function bar() {}

var fooReference = {
  base: global,
  propertyName: 'foo'
};

var barReference = {
  base: global,
  propertyName: 'bar'
};

function GetValue(value) {

  if (Type(value) != Reference) {
    return value;
  }

  var base = GetBase(value);

  if (base === null) {
    throw new ReferenceError;
  }

  return base[[Get]](GetPropertyName(value));

}


GetValue(fooReference); // 10
GetValue(barReference); // function object "bar"







