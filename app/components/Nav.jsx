var React = require("react");
var {Link, IndexLink} = require("react-router");

var Timer = require("Timer");
var Countdown = require("Countdown");

var Nav = React.createClass({
  render: function(){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Timer App
            </li>
            <li>
              <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
            </li>
            <li>
              <IndexLink to="/countdown" activeClassName="active-link">Countdown</IndexLink>
            </li>
          </ul>
        </div>

        <div className="top-bar-right">
          <div className="menu">
            <div className="menu-text">
              Created by <a href="https://github.com/alexissua" target="_blank">Alexis Suarez</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
