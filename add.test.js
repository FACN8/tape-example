var test = require('tape');
var { add } = require('./add');

test('simple addition', function (t) {
  var actual = add(1, 1)
  var expected = 2
  t.equal(actual, expected, '1 plus 1 should be 2');  
  t.end();
});