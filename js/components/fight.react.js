var React = require('react');
var Actions = require('../constants/actionsName')
var mainDispatcher = require('../store/dispatcher');

var Fight = React.createClass({
	getInitialState: function() {
		return {};
	},
	componentDidMount: function() {

	},
	componentWillUnmount: function() {

	},
	render : function(){
		return (
			<div className={this.props.className}>
				<h1>{this.props.title}</h1>
				<p>"I am fight"</p>
			</div>
			);
	}

});

module.exports = Fight;
