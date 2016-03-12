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
	},
	componentWillUnmount: function() {

	},
    handleNumberChange: function(event) {
        this.setState({number: event.target.value});
    },
	handleGroupRoll: function(event) {
        this.setState({groupRoll: event.target.checked});
    },
	rollAttack: function(){
		var score = [];
		if(this.state.groupRoll){
			score.push(diceLib.fsRoll()+Number(this.state.attack)+Number(this.state.number)-1);
		} else {
			for(var i = 0; i < this.state.number; i++){
				score.push(diceLib.fsRoll()+Number(this.state.attack));
			}
		}
		mainDispatcher.notify({
			type: Actions["SHOWRESULT"],
			foeType: "mook",
			score: score
		});
		this.reduceShot();
	},
	deleteFoe: function(){
		mainDispatcher.notify({
			type: Actions["DELETEFOE"],
			fightTag: this.props.fightTag,
			foeType: "mook",
			foeTag: this.props.foeTag
		});
	},
    render: function(){
        return <tr className={this.getShotClass()} >
    		  <td><input type="text" value={this.state.name} onChange={this.handleNameChange} /></td>
    		  <td>Shot:<input type="number" className="small"  value={this.state.shot} onChange={this.handleShotChange} /></td>
    		  <td>Number:<input type="number" className="small" value={this.state.number} onChange={this.handleNumberChange} /></td>
    		  <td>Attack:<input type="number" className="small" value={this.state.attack} onChange={this.handleAttackChange}  /></td>
    		  <td>Defense:<input type="number" className="small" value={this.state.defense} onChange={this.handleDefenseChange}  /></td>
    		  <td>Speed:<input type="number" className="small" value={this.state.speed} onChange={this.handleSpeedChange}  /></td>
    		  <td>Group roll:<input type="checkbox" className="small" checked={this.state.groupRoll} onChange={this.handleGroupRoll}/></td>
    		  <td><button className="btn btn-sm btn-default" onClick={this.rollAttack}>Roll</button></td>
    		  <td><button className="btn btn-sm btn-default" onClick={this.deleteFoe}><i className="fa fa-trash"></i></button></td>
          </tr>;
    }

});

module.exports = Mook;
