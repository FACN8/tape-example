var test = require('tape');
var { subtract } = require('./subtract');

test('simple addition', function (t) {
  var actual = subtract(5, 3)
  var expected = 2
  t.equal(actual, expected, '5 minus 3 should be 2');  
  t.end();
});