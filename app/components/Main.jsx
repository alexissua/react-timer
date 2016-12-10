var React = require("react");
var Nav = require("Nav");

var Main = function(props){
	return (
	    <div>
				<Nav/>
	      <div className="row">
	      	<div className="column small-centered medium-4 large-3">	
	      		{props.children}
	      	</div>
	      </div>
	    </div>
	  )
};

module.exports = Main;
