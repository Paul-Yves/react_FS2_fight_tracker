var React = require('react');
var Actions = require('../constants/actionsName')
var mainDispatcher = require('../store/dispatcher');
var diceLib = require('../helper/diceLib');
var carMixin = require('./carMixin');

var CarFoe = React.createClass({
	mixins: [carMixin],
	getInitialState: function() {
		return {shot: 0, name:"New Car", chasePoint: 0, driving: 12, defense: 13,
		speed: 8, frame: 7, handling: 7, position: "far"};
	},
	componentDidMount: function() {
	},
	componentWillUnmount: function() {

	},
	handleChasePointChange: function(){
		this.setState({chasePoint: event.target.value});
	},
	rollAttack: function(){
		mainDispatcher.notify({
			type: Actions["SHOWRESULT"],
			foeType: "featFoe",
			score: [diceLib.fsRoll()+Number(this.state.driving)]
		});
	},
	deleteFoe: function(){
		mainDispatcher.notify({
			type: Actions["DELETEFOE"],
			fightTag: this.props.fightTag,
			foeType: "car",
			foeTag: this.props.foeTag
		});
	},
    render: function(){
        return <tr className={this.getShotClass()} >
    		  <td><input type="text" value={this.state.name} onChange={this.handleNameChange}/></td>
    		  <td>Shot:<input type="number" className="small" value={this.state.shot} onChange={this.handleShotChange}  /></td>
    		  <td>Chase points:<input type="number" className="small" value={this.state.chasePoint} onChange={this.handleChasePointChange} /></td>
    		  <td>Driving:<input type="number" className="small" value={this.state.driving} onChange={this.handleDrivingChange}  /></td>
    		  <td>Acceleration:<input type="number" className="small" value={this.state.speed} onChange={this.handleSpeedChange}  /></td>
    		  <td>Handling:<input type="number" className="small" value={this.state.handling} onChange={this.handleHandlingChange}  /></td>
    		  <td>Frame:<input type="number" className="small" value={this.state.frame} onChange={this.handleFrameChange}/></td>
			  {this.paintPosition()}
    		  <td><button className="btn btn-sm btn-default" onClick={this.rollAttack}>Roll</button></td>
    		  <td><button className="btn btn-sm btn-default" onClick={this.deleteFoe}><i className="fa fa-trash"></i></button></td>
          </tr>;;
    }

});

module.exports = CarFoe;
