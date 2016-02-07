var React = require('react');
var Actions = require('../constants/actionsName')
var mainDispatcher = require('../store/dispatcher');

var MenuBar = React.createClass({
	getInitialState: function() {
		return {currentFight: null};
	},
	componentDidMount: function() {
		mainDispatcher.register(this);

	},
	componentWillUnmount: function() {

	},
	addFight: function(){
		mainDispatcher.notify({
			type: Actions["ADDFIGHT"]
		});
	},
	goToFight: function(fight){
		mainDispatcher.notify({
			type: Actions["GOTOFIGHT"],
			fight: fight
		});
	},
	renameFight: function(){
		mainDispatcher.notify({
			type: Actions["RENAMEFIGHT"]
		});
	},
	notify: function(action){
	    if(action.type == Actions["RefreshFightList"]){
			this.state.currentFight = action.currentFight;
	        this.setState({'refresh':'do'});
	    }
	},
	render : function(){
		var self = this;
		var fightsTitle = this.props.fightList.map(function(fight){
			var isActiveClass = fight == self.state.currentFight ? 'active' : '';
			return (
		        <li className={isActiveClass}><a onClick={self.goToFight.bind(null,fight)}>{fight.state.title}</a></li>
      		);
		});
		return (
			<div>
				<nav className="navbar navbar-default">
					<ul className="nav navbar-nav">
						{fightsTitle}
					</ul>
					<ul className="nav navbar-nav navbar-right navButtons">
						<li><a onClick={this.addFight}>Add Fight</a></li>
						<li><a onClick={this.renameFight}>Rename fight</a></li>
						<li><a>Delete current fight</a></li>
					</ul>
		      	</nav>
			</div>
			);
	}

});

module.exports = MenuBar;
