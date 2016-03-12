var React = require('react');
var Actions = require('../constants/actionsName')
var mainDispatcher = require('../store/dispatcher');
var diceLib = require('../helper/diceLib');
var carMixin = require('./carMixin');

var MookCar = React.createClass({
	mixins: [carMixin],
	getInitialState: function() {
		return {shot: 0, name:"New Car", number: 3, driving: 8, defense: 13,
		speed: 6, frame: 6, handling: 6, position: "far"};
	},
	componentDidMount: function() {
	},
	componentWillUnmount: function() {

	},
	handleNumberChange: function(){
		this.setState({number: Number(event.target.value)});
	},
	rollAttack: function(){
		var score = [];
		for(var i = 0; i < this.state.number; i++){
			score.push(diceLib.fsRoll()+Number(this.state.driving));
		}
		mainDispatcher.notify({
			type: Actions["SHOWRESULT"],
			foeType: "mook",
			score: score
		});
	},
	deleteFoe: function(){
		mainDispatcher.notify({
			type: Actions["DELETEFOE"],
			fightTag: this.props.fightTag,
			foeType: "mookCar",
			foeTag: this.props.foeTag
		});
	},
    render: function(){
        return <tr className={this.getShotClass()} >
    		  <td><input type="text" value={this.state.name} onChange={this.handleNameChange}/></td>
    		  <td>Shot:<input type="number" className="small" value={this.state.shot} onChange={this.handleShotChange}  /></td>
    		  <td>Number:<input type="number" className="small" value={this.state.number} onChange={this.handleNumberChange} /></td>
    		  <td>Driving:<input type="number" className="small" value={this.state.driving} onChange={this.handleDrivingChange}  /></td>
    		  <td>Acceleration:<input type="number" className="small" value={this.state.speed} onChange={this.handleSpeedChange}  /></td>
    		  <td>Handling:<input type="number" className="small" value={this.state.handling} onChange={this.handleHandlingChange}  /></td>
    		  <td>Frame:<input type="number" className="small" value={this.state.frame} onChange={this.handleFrameChange}/></td>
			  {this.paintPosition()}
    		  <td><button className="btn btn-sm" onClick={this.rollAttack}>Roll</button></td>
    		  <td><button className="btn btn-sm btn-default" onClick={this.deleteFoe}><i className="fa fa-trash"></i></button></td>
          </tr>;;
    }

});

module.exports = MookCar;
