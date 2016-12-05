// Importamos las librerías::
var React = require("react");
var ReactDOM = require("react-dom");
var Timer = require("Timer");
var Countdown = require("Countdown");

//Route, Router, IndexRoute, hashHistory son variables que acceden a la propiedad de react-router::
//EJ: var Route = require("react-router").Route;
var {Route, Router, IndexRoute, hashHistory} = require("react-router");
var Main = require("./components/Main");


// Load Foundation
require("style!css!foundation-sites/dist/foundation.min.css");
$(document).foundation();

// Load CSS File::
require("style!css!sass!applicationStyles");

ReactDOM.render(
    <Router history={hashHistory} >
      <Route path="/" component={Main}>
        <IndexRoute component={Timer} />
        <Route path="countdown" component={Countdown} />
      </Route>

    </Router>,
    document.getElementById("app")
);
