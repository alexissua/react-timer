var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jQuery");
var TestUtils = require("react-addons-test-utils");

var Clock = require("Clock");

describe('Clock', function(){
  it("Should exists", function(){
    //Probamos de que el componente efectivamente exista::
    expect(Clock).toExist();
  });
});

describe("Format Seconds: ", function(){
  it("Should format a number of seconds", function(){
    var clock = TestUtils.renderIntoDocument(<Clock/>);
    var seconds = 615;
    var expected = '10:15';
    var actual = clock.formatSeconds(seconds);

    expect(actual).toBe(expected);
  });

  it("Should format a number of seconds when min/sec are less than 10", function(){
    var clock = TestUtils.renderIntoDocument(<Clock/>);
    var seconds = 61;
    var expected = '01:01';
    var actual = clock.formatSeconds(seconds);

    expect(actual).toBe(expected);
  });
});
