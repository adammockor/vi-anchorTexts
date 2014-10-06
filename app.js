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

function anchors(file, callback) {
  if (typeof file === 'undefined') {
    console.error('No file specified!');
    return;
  }
  var stream = fs.createReadStream(file);
  var xml = new Xml(stream);
  xml.on('endElement: text', function(item) {
    var anchors = item.$text.match(/\[\[(.*?)\]\]/gm);
    for ( var i=0; i < anchors.length; i++ ) {
      if ( anchors[i].match(/\[\[Kategória(.*?)\]\]/) ) anchors.splice(i,1);
      else anchors[i] = anchors[i].slice(2,anchors[i].length - 2);
    }
    callback(anchors);
  });
}

anchors(file, function(arr) {
  arr.forEach(function(entry) {
    console.log(entry);
  });
});

exports.tests = {
  titleTest : titleTest,
  anchorsTest: anchors
};
