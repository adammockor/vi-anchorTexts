var fs = require('fs');
var Xml = require('xml-stream');

var file = process.argv[2];

if (typeof file === 'undefined') {
  console.error('No file specified!');
  return;
}

function titleTest(file, callback) {
  if (typeof file === 'undefined') {
    console.error('No file specified!');
    return;
  }
  var stream = fs.createReadStream(file);
  var xml = new Xml(stream);
  xml.on('endElement: title', function(item) {
    callback(item.$text);
  });
}

titleTest(file, function(text) {
  console.log(text);
});

exports.tests = {
  titleTest : titleTest
};
