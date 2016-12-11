var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jQuery");
var TestUtils = require("react-addons-test-utils");

var Countdown = require("Countdown");

describe("Countdown", function(){

  it("Should exists", function(){
    expect(Countdown).toExist();
  });

  describe("handleSetCountDown", function(){
    it("Should decrise an score every second", function(done){
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountDown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countDownStatus).toBe("started");

      setTimeout(function(){
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);
    });

    it("Should be zero and not a negative a number", function(done){
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountDown(1);

      setTimeout(function(){
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001);
    });

    it("Should pause countdown on paused status", function(done){
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountDown(3);
      countdown.handleStatusChange("paused");

      setTimeout(() => {
        expect(countdown.state.count).toBe(3);
        expect(countdown.state.countDownStatus).toBe("paused");
        done();
      }, 1001);
    });

    it("Should stop countdown on stopped status", function(done){
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountDown(3);
      countdown.handleStatusChange("stopped");

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.countDownStatus).toBe("stopped");
        done();
      }, 1001);
    });
  });

});
