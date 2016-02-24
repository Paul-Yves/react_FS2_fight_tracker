var React = require('react');
var Actions = require('../constants/actionsName')
var mainDispatcher = require('../store/dispatcher');
var diceLib = require('../helper/diceLib');
var foeMixin = require('./foeMixin');

var FeaturedFoe = React.createClass({
	mixins: [foeMixin],
	getInitialState: function() {
		return {shot: 0, name:"New Foe", wounds: 0, attack: 13, defense: 13,
		speed: 7, toughness: 7};
	},
	componentDidMount: function() {
	},
	componentWillUnmount: function() {

	},
	handleToughnessChange: function(){
		this.setState({toughness: event.target.value});
	},
	rollAttack: function(){
		mainDispatcher.notify({
			type: Actions["SHOWRESULT"],
			foeType: "featFoe",
			score: [diceLib.fsRoll()+Number(this.state.attack)]
		});
	},
	deleteFoe: function(){
		mainDispatcher.notify({
			type: Actions["DELETEFOE"],
			fightTag: this.props.fightTag,
			foeType: "featFoe",
			foeTag: this.props.foeTag
		});
	},
    render: function(){
        return <tr className={this.getShotClass()} >
    		  <td><input type="text" value={this.state.name} onChange={this.handleNameChange}/></td>
    		  <td>Shot:<input type="number" className="small" value={this.state.shot} onChange={this.handleShotChange}  /></td>
    		  <td>Wounds:<input type="number" className="small" /></td>
    		  <td>Attack:<input type="number" className="small" value={this.state.attack} onChange={this.handleAttackChange}  /></td>
    		  <td>Defense:<input type="number" className="small" value={this.state.defense} onChange={this.handleDefenseChange}  /></td>
    		  <td>Speed:<input type="number" className="small" value={this.state.speed} onChange={this.handleSpeedChange}  /></td>
    		  <td>Toughness:<input type="number" className="small" value={this.state.toughness} onChange={this.handleToughnessChange}/></td>
    		  <td><button className="btn btn-sm" onClick={this.rollAttack}>Roll</button></td>
    		  <td><button className="btn btn-sm btn-default" onClick={this.deleteFoe}><i className="fa fa-trash"></i></button></td>
          </tr>;;
    }

});

module.exports = FeaturedFoe;
