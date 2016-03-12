var diceLib = require('../helper/diceLib');

var foeMixin = {

    handleShotChange: function(event) {
        this.setState({shot: event.target.value});
    },
    handleNameChange: function(event) {
        this.setState({name: event.target.value});
    },
    handleSpeedChange: function(event) {
        this.setState({speed: event.target.value});
    },
    handleAttackChange: function(event) {
        this.setState({attack: event.target.value});
    },
    handleDefChange: function(event) {
        this.setState({defense: event.target.value});
    },
    rollInit: function(){
        var newShot = diceLib.d6() + this.state.speed;
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
    }
}

module.exports = foeMixin;
