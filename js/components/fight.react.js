var React = require('react');
var Actions = require('../constants/actionsName')
var mainDispatcher = require('../store/dispatcher');

var Fight = React.createClass({
	getInitialState: function() {
		return {title: 'New fight'};
	},
	componentDidMount: function() {

	},
	componentWillUnmount: function() {

	},
	render : function(){
		return (
			<div>
				<h1>{this.state.title}</h1>
				<p>"I am fight"</p>
			</div>
			);
	}

});

module.exports = Fight;
