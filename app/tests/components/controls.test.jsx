var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jQuery");
var TestUtils = require("react-addons-test-utils");

var Controls = require("Controls");

describe("Controls", function(){
  it("Should exists", function(){
    expect(Controls).toExist();
  });

  describe("Render", function(){
    it("Should render pause when started", function(){
      var controls = TestUtils.renderIntoDocument(<Controls countDownStatus="started" />)
      var $el = $(ReactDOM.findDOMNode(controls));
      // pauseButton retorna un arreglo con los elementos encontrados, debería solo encontrar uno::
      var $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
    });

    it("Should render start when paused", function(){
      var controls = TestUtils.renderIntoDocument(<Controls countDownStatus="paused" />)
      var $el = $(ReactDOM.findDOMNode(controls));
      // pauseButton retorna un arreglo con los elementos encontrados, debería solo encontrar uno::
      var $startButton = $el.find('button:contains(Start)');

      expect($startButton.length).toBe(1);
    });
  });
});
