var React = require('react');
var Actions = require('../constants/actionsName')
var mainDispatcher = require('../store/dispatcher');

var Fight = React.createClass({
	getInitialState: function() {
		return {sequence: 0, shot: 0, foeList: [], mookList: []};
	},
	componentDidMount: function() {
		mainDispatcher.register(this);
	},
	componentWillUnmount: function() {

	},
	addFoe: function(){

	},
	addMook: function(){

	},
	rollInit: function(){

	},
	handleChangeSeq: function(event){
        this.setState({sequence: event.target.value});
	},
	handleChangeSeg: function(event){
        this.setState({shot: event.target.value});
	},
	render : function(){
		var featFoeCompo = this.state.foeList.map(function(foe){
			return <tr></tr>;
		});
		var mookCompo = this.state.mookList.map(function(foe){
			return <tr></tr>;
		});
		return (
			<div className={this.props.className}>
				<h1>{this.props.title}</h1>
				<button onClick={this.addFoe} className="btn btn-primary">Add Featured foe</button>
				<button onClick={this.addMook} className="btn btn-primary">Add Mook</button>
				<label>Sequence:<input type="number" value={this.state.sequence} onChange={this.handleChangeSeq} /></label>
				<label>Shot:<input type="number" value={this.state.shot} onChange={this.handleChangeSeg} /></label>
				<button onClick={this.rollInit} className={this.state.shot>0?'btn btn-info':'btn btn-success'}>Roll initiative</button>
				<table className="table">
					{featFoeCompo}
					{mookCompo}
				</table>
			</div>
			);
	}

});

module.exports = Fight;
