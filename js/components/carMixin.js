var React = require('react');
var diceLib = require('../helper/diceLib');

var carMixin = {

    handleShotChange: function(event) {
        this.setState({shot: event.target.value});
    },
    handleNameChange: function(event) {
        this.setState({name: event.target.value});
    },
    handleSpeedChange: function(event) {
        this.setState({speed: event.target.value});
    },
    handleDrivingChange: function(event) {
        this.setState({driving: event.target.value});
    },
    handleHandlingChange: function(event) {
        this.setState({handling: event.target.value});
    },
    handleFrameChange: function(event) {
        this.setState({frame: event.target.value});
    },
    rollInit: function(){
        var newShot = diceLib.d6() + Number(this.state.speed);
        this.setState({shot: newShot});
        return newShot;
    },
    reduceShot: function(reduction){
        if(reduction === undefined){
            reduction = 3;
        }
        var newVal = Math.max(0, this.state.shot - reduction);
        this.setState({shot: newVal});
    },
    getShotClass: function(){
		var shotClass = "";
		if(this.props.currentShot == this.state.shot){
			shotClass = "actNow";
		} else if(this.props.currentShot < this.state.shot){
			shotClass = "shouldAct";
		}
        return shotClass;
    },
	handlePosChange: function(event){
		this.setState({position: event.target.value});
	},
	posButtonClass: function(pos){
		if(pos == this.state.position){
			return "btn btn-primary";
		}
		return "btn btn-default";
	},
	paintPosition: function(){
		return (
			<td>
			  <div className="btn-group" >
				<label className={this.posButtonClass("far")}>
				  <input type="radio" name="position" className="hidden" id="far"
				  value="far" onChange={this.handlePosChange}
					  checked={this.state.position=="far"}/> Far
				</label>
				<label className={this.posButtonClass("near")} >
				  <input type="radio" name="position" className="hidden" id="near"
				  value="near" onChange={this.handlePosChange}
					  checked={this.state.position=="near"} /> Near
				</label>
				<label className={this.posButtonClass("evader")} >
				  <input type="radio" name="position" className="hidden" id="evader"
				  value="evader" onChange={this.handlePosChange}
					  checked={this.state.position=="evader"} /> Evader
				</label>
			  </div>
			</td>
		);
	}
}

module.exports = carMixin;
