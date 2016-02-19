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
		mainDispatcher.register(this);
	},
	componentWillUnmount: function() {
		mainDispatcher.unregister(this);

	},
    render: function(){
        return <tr className={this.getShotClass()} >
    		  <td><input type="text" value={this.state.name} onChange={this.handleNameChange}/></td>
    		  <td>Shot:<input type="number" className="small" value={this.state.shot} onChange={this.handleShotChange}  /></td>
    		  <td>Wounds:<input type="number" className="small" /></td>
    		  <td>Attack:<input type="number" className="small" value={this.state.attack} onChange={this.handleAttackChange}  /></td>
    		  <td>Defense:<input type="number" className="small" value={this.state.defense} onChange={this.handleDefenseChange}  /></td>
    		  <td>Speed:<input type="number" className="small" value={this.state.speed} onChange={this.handleSpeedChange}  /></td>
    		  <td>Toughness:<input type="number" className="small" /></td>
    		  <td><button className="btn btn-sm">Roll</button></td>
    		  <td><button className="btn btn-sm btn-default"><i className="fa fa-trash"></i></button></td>
          </tr>;;
    }

});

module.exports = FeaturedFoe;
