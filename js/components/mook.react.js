var React = require('react');
var Actions = require('../constants/actionsName')
var mainDispatcher = require('../store/dispatcher');
var foeMixin = require('./foeMixin');
var diceLib = require('../helper/diceLib');

var Mook = React.createClass({
	mixins: [foeMixin],
	getInitialState: function() {
		return {shot: 0, name:"New Mooks", number: 5, attack: 8, defense: 13,
		speed: 5, groupRoll: false};
	},
	componentDidMount: function() {
		mainDispatcher.register(this);
	},
	componentWillUnmount: function() {
		mainDispatcher.unregister(this);

	},
    handleNumberChange: function(event) {
        this.setState({attack: event.target.value});
    },
    render: function(){
        return <tr className={this.getShotClass()} >
    		  <td><input type="text" value={this.state.name} onChange={this.handleNameChange} /></td>
    		  <td>Shot:<input type="number" className="small"  value={this.state.shot} onChange={this.handleShotChange} /></td>
    		  <td>Number:<input type="number" className="small" value={this.state.number} onChange={this.handleNumberChange} /></td>
    		  <td>Attack:<input type="number" className="small" value={this.state.attack} onChange={this.handleAttackChange}  /></td>
    		  <td>Defense:<input type="number" className="small" value={this.state.defense} onChange={this.handleDefenseChange}  /></td>
    		  <td>Speed:<input type="number" className="small" value={this.state.speed} onChange={this.handleSpeedChange}  /></td>
    		  <td>Group roll:<input type="checkbox" className="small" /></td>
    		  <td><button className="btn btn-sm">Roll</button></td>
    		  <td><button className="btn btn-sm btn-default"><i className="fa fa-trash"></i></button></td>
          </tr>;
    }

});

module.exports = Mook;
