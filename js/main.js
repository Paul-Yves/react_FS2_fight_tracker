var React = require('react');
var ReactDOM = require('react-dom');
var Actions = require('./constants/actionsName')
var mainDispatcher = require('./store/dispatcher');
var MenuBar = require('./components/menuBar.react');
var Fight = require('./components/fight.react');

var App = React.createClass({
	getInitialState: function() {
		return {fights: [], currentFight: null, titleValue:''};
	},
	componentDidMount: function() {
        mainDispatcher.register(this);
	},
	componentWillUnmount: function() {

	},
    addFight : function(){
		var lastIdx = this.state.fights.length > 0 ? this.state.fights[this.state.fights.length - 1].id : 0;
        var newFight = {title: 'New Fight', id: lastIdx + 1}
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
        this.setState({"titleValue": ''}, function(){
            $('#renameDialogModal').modal('show');
        });
    },
	deleteFight : function(){
		if(this.state.currentFight == null){
			return;
		}
		var idx = this.state.fights.indexOf(this.state.currentFight);
		this.state.fights.splice(idx, 1);
		idx = idx > 0 ? idx - 1 : 0;
		this.setState({'currentFight': this.state.fights[idx]}, function(){
            mainDispatcher.notify({
                type: "RefreshFightList",
                currentFight: this.state.currentFight
            });
		});
	},
    handleTitleChange: function(event){
        this.setState({titleValue: event.target.value});
    },
    doRename : function(name){
        console.log("renaming to ", this.state.titleValue);
        this.state.currentFight.title = this.state.titleValue;

        this.setState({currentFight: this.state.currentFight});
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
        if(action.type == Actions["DELETEFIGHT"]){
            this.deleteFight();
        }
    },
	render : function(){
		var self = this;
        var currentFightStuff = this.state.fights.map(function(fightInfo){
			var hiddenClass = self.state.currentFight == fightInfo ? '':'hidden';
			return <Fight title={fightInfo.title} key={'fight'+fightInfo.id} className={hiddenClass} />;
		});
        var fightTitle = this.state.currentFight ? this.state.currentFight.title : "";
		return (
            <div>
                <h1>Feng Shui 2 Fight Tracker</h1>
                <MenuBar fightList={this.state.fights}/>
                {currentFightStuff}
                <div className="modal fade" id="renameDialogModal" tabindex="-1" role="dialog" aria-labelledby="renameModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 className="modal-title" id="renameModalLabel">Rename {fightTitle}</h4>
                      </div>
                      <div className="modal-body">
                          <input id="fightRenameField" type="text" placeholder={fightTitle} value={this.state.titleValue} onChange={this.handleTitleChange} />
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-primary" onClick={this.doRename}>Rename</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
			);
	}

});

ReactDOM.render(
    <App />,
  document.getElementById('main')
);
