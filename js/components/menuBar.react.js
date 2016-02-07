var React = require('react');
var Actions = require('../constants/actionsName')
var mainDispatcher = require('../store/dispatcher');

var MenuBar = React.createClass({
	getInitialState: function() {
		return {text: 'salut'};
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
	notify: function(action){
	    if(action.type == Actions["RefreshFightList"]){
	        this.setState({'test':'me'});
	    }
	},
	render : function(){
		var self = this;
		var fightsTitle = this.props.fightList.map(function(fight){
			return (
		        <li><a onClick={self.goToFight.bind(null,fight)}>{fight.state.title}</a></li>
      		);
		});
		return (
			<div>
				<p>{this.state.text}</p>
				<nav className="navbar navbar-default">
					<ul className="nav navbar-nav">
						{fightsTitle}
					</ul>
					<ul className="nav navbar-nav navbar-right navButtons">
						<li><a onClick={this.addFight}>Add Fight</a></li>
						<li><a>Rename fight</a></li>
						<li><a>Delete current fight</a></li>
					</ul>
		      	</nav>
			</div>
			);
	}

});

module.exports = MenuBar;
