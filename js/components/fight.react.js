var React = require('react');
var Actions = require('../constants/actionsName')
var mainDispatcher = require('../store/dispatcher');
var diceLib = require('../helper/diceLib');
var Mook = require('./mook.react');
var FeaturedFoe = require('./featFoe.react');

var Fight = React.createClass({
	getInitialState: function() {
		return {sequence: 0, shot: 0, foeList: [], mookList: []};
	},
	componentDidMount: function() {
		mainDispatcher.register(this);
	},
	componentWillUnmount: function() {
		mainDispatcher.unregister(this);

	},
	addFoe: function(){
		var key = 1;
		if(this.state.foeList.length>0){
			key = this.state.foeList[this.state.foeList.length - 1].key + 1;
		}
		this.state.foeList.push({key: key});
        this.setState({'foeList': this.state.foeList});
	},
	addMook: function(){
		var key = 1;
		if(this.state.mookList.length>0){
			key = this.state.mookList[this.state.mookList.length - 1].key + 1;
		}
		this.state.mookList.push({key: key});
        this.setState({'mookList': this.state.mookList});

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
		var self = this;
		var featFoeCompo = this.state.foeList.map(function(foe){
			return <FeaturedFoe foeTag={foe.key} key={'foe'+foe.key} fightTag={self.props.fightTag}/>;
		});
		var mookCompo = this.state.mookList.map(function(foe){
			return <Mook foeTag={foe.key} key={'mook'+foe.key} fightTag={self.props.fightTag}/>;
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
					<tbody>
						{featFoeCompo}
						{mookCompo}
					</tbody>
				</table>
			</div>
			);
	}

});

module.exports = Fight;
