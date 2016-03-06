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
			type: Actions["DELETECAR"],
			fightTag: this.props.fightTag,
			foeType: "car",
			foeTag: this.props.foeTag
		});
	},
	handlePosChange: function(event){
		console.log(event.target.value);
		this.setState({position: event.target.value});
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
			  <td>
			  	<div class="btn-group" data-toggle="buttons">
                  <label class="btn btn-default" >
                    <input type="radio" name="position" id="far" value="far" onChange={this.handlePosChange}
						checked={this.state.position=="far"}/> Far
                  </label>
                  <label class="btn btn-default" >
                    <input type="radio" name="position" id="near" value="near" onChange={this.handlePosChange}
						checked={this.state.position=="near"} /> Near
                  </label>
                  <label class="btn btn-default" value="evader" onClick={this.handlePosChange} >
                    <input type="radio" name="position" id="evader" value="evader" onChange={this.handlePosChange}
						checked={this.state.position=="evader"} /> Evader
                  </label>
                </div>
			  </td>
    		  <td><button className="btn btn-sm" onClick={this.rollAttack}>Roll</button></td>
    		  <td><button className="btn btn-sm btn-default" onClick={this.deleteFoe}><i className="fa fa-trash"></i></button></td>
          </tr>;;
    }

});

module.exports = CarFoe;
