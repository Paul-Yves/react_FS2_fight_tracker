var React = require('react');
var Actions = require('../constants/actionsName')
var mainDispatcher = require('../store/dispatcher');

var Fight = React.createClass({
	getInitialState: function() {
		return {sequence: 0, shot: 0, foeList: [], namedList: []};
	},
	componentDidMount: function() {

	},
	componentWillUnmount: function() {

	},
	addFoe: function(){

	},
	addMook: function(){

	},
	rollInit: function(){

	},
	render : function(){
		return (
			<div className={this.props.className}>
				<h1>{this.props.title}</h1>
				<button onClick={this.addFoe} className="btn btn-primary">Add Featured foe</button>
				<button onClick={this.addMook} className="btn btn-primary">Add Mook</button>
				<label>Sequence:<input type="number" value={this.state.sequence} /></label>
				<label>Shot:<input type="number" value={this.state.shot} /></label>
				<button onClick={this.rollInit} className={"btn {this.state.shot>0?'btn-info':'btn-success'}"}>Roll initiative</button>
				<p>"I am fight"</p>
			</div>
			);
	}

});

module.exports = Fight;
