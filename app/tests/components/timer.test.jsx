var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jQuery");
var TestUtils = require("react-addons-test-utils");

var Timer = require("Timer");

describe("Timer", function(){

  it("Should exists", function(){
    expect(Timer).toExist();
  });

  describe("handleSetCountDown", function(){
    it("Should increase an score every second", function(done){
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleSetCountDown(0);

      expect(timer.state.count).toBe(0);
      expect(timer.state.timerStatus).toBe("started");

      setTimeout(function(){
        expect(timer.state.count).toBe(1);
        done();
      }, 1001);
    });

    it("Should pause the timer on paused status", function(done){
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleSetCountDown(3);
      timer.handleStatusChange("paused");

      setTimeout(() => {
        expect(timer.state.count).toBe(3);
        expect(timer.state.timerStatus).toBe("paused");
        done();
      }, 1001);
    });

    it("Should stop the timer on stopped status", function(done){
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleSetCountDown(3);
      timer.handleStatusChange("stopped");

      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe("stopped");
        done();
      }, 1001);
    });
  });

});
