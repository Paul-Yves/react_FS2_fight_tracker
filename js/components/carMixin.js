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
        var newShot = diceLib.d6() + this.state.speed;
        this.setState({shot: newShot});
        return newShot;
    },
    getShotClass: function(){
		var shotClass = "";
		if(this.props.currentShot == this.state.shot){
			shotClass = "actNow";
		} else if(this.props.currentShot < this.state.shot){
			shotClass = "shouldAct";
		}
        return shotClass;
    }
}

module.exports = carMixin;
