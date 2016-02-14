var React = require('react');
var Actions = require('../constants/actionsName')
var mainDispatcher = require('../store/dispatcher');
var diceLib = require('../helper/diceLib');

var Mook = React.createClass({
	getInitialState: function() {
		return {shot: 0};
	},
	componentDidMount: function() {
		mainDispatcher.register(this);
	},
	componentWillUnmount: function() {
		mainDispatcher.unregister(this);

	},
    render: function(){
        return <tr>
    		  <td><input type="text" /></td>
    		  <td>Shot:<input type="number" className="small" /></td>
    		  <td>Number:<input type="number" className="small" /></td>
    		  <td>Attack:<input type="number" className="small" /></td>
    		  <td>Defense:<input type="number" className="small" /></td>
    		  <td>Speed:<input type="number" className="small" /></td>
    		  <td>Group roll:<input type="checkbox" className="small" /></td>
    		  <td><button className="btn btn-sm">Roll</button></td>
    		  <td><button className="btn btn-sm btn-default"><i className="fa fa-trash"></i></button></td>
          </tr>;
    }

});

module.exports = Mook;
