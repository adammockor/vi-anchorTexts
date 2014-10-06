var chai = require('chai');
var expect = chai.expect;

chai.config.includeStack = false;

var app = require('./../app.js').tests;

var file = 'data/fiit.xml';

describe("Title", function() {
   it("title shoud be: Fakulta informatiky a informačných technológií Slovenskej technickej univerzity", function(done){
      app.titleTest(file, function(text) {
        expect(text).to.equal('Fakulta informatiky a informačných technológií Slovenskej technickej univerzity');
        done();
      });
   });
});

describe("Anchors", function() {
  var anchors;
  app.anchorsTest(file, function(arr) {
    anchors = arr;
  });
  it("First should be: STU", function(done){
    expect(anchors[0]).to.equal('STU');
    done();
  });
  it("Second should be: Fakulta elektrotechniky a informatiky Slovenskej technickej univerzity|FEI", function(done){
    expect(anchors[1]).to.equal('Fakulta elektrotechniky a informatiky Slovenskej technickej univerzity|FEI');
    done();
  });
  it("Third should be: bakalárske štúdium", function(done){
    expect(anchors[2]).to.equal('bakalárske štúdium');
    done();
  });
  it("Fourth should be inžinierske štúdium", function(done){
    expect(anchors[3]).to.equal('inžinierske štúdium');
    done();
  });
  it("Fifth should be doktorandské štúdium", function(done){
    expect(anchors[4]).to.equal('doktorandské štúdium');
    done();
  });
});
