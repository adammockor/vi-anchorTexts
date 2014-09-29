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
