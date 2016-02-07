var React = require('react');
var ReactDOM = require('react-dom');
var Actions = require('./constants/actionsName')
var mainDispatcher = require('./store/dispatcher');
var MenuBar = require('./components/menuBar.react');
var Fight = require('./components/fight.react');

var App = React.createClass({
	getInitialState: function() {
		return {fights: [], currentFight: null};
	},
	componentDidMount: function() {
        mainDispatcher.register(this);
	},
	componentWillUnmount: function() {

	},
    addFight : function(){
        var newFight = new Fight();
        this.state.fights.push(newFight);
        this.setState({'currentFight': newFight}, function(){
            mainDispatcher.notify({
                type: "RefreshFightList",
                currentFight: this.state.currentFight
            });
        });
    },
    goToFight : function(fight){
        this.setState({'currentFight': fight}, function(){
            mainDispatcher.notify({
                type: "RefreshFightList",
                currentFight: this.state.currentFight
            });
        });
    },
    renameFight : function(){

        mainDispatcher.notify({
            type: "RefreshFightList",
            currentFight: this.state.currentFight
        });
    },
    notify : function(action){
        if(action.type == Actions["ADDFIGHT"]){
            this.addFight();
        }
        if(action.type == Actions["GOTOFIGHT"]){
            this.goToFight(action.fight);
        }
        if(action.type == Actions["RENAMEFIGHT"]){
            this.renameFight();
        }
    },
	render : function(){
        var currentFightStuff = this.state.currentFight ? this.state.currentFight.render() : <div />;
		return (
            <div>
                <h1>Everworld Fight Tracker</h1>
                <MenuBar fightList={this.state.fights}/>
                {currentFightStuff}
            </div>
			);
	}

});

ReactDOM.render(
    <App />,
  document.getElementById('main')
);
