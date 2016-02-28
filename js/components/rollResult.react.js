var React = require('react');
var Actions = require('../constants/actionsName')
var mainDispatcher = require('../store/dispatcher');
var _ = require('lodash');

var RollResult = React.createClass({
	getInitialState: function() {
		return {rollResults: []};
	},
	componentDidMount: function() {
		mainDispatcher.register(this);
	},
	componentWillUnmount: function() {
		mainDispatcher.unregister(this);

	},
    notify : function(action){
        var self = this;
        if(action.type == Actions["SHOWRESULT"]){
            this.setState({rollResults : action.score}, function(){
                $('#RollResult').modal('show');
            });
        }
    },
	collectRoll: function(){
		var collectedRolls = _.countBy(this.state.rollResults);
		var sortedRolls = [];
		_.forIn(collectedRolls, function(value, key) {
			sortedRolls.push(<tr><td>{key}</td><td>{value}</td></tr>);
		});
		_.reverse(sortedRolls);
		return sortedRolls;
	},
	render : function(){
        var result = <div></div>;
        if (this.state.rollResults.length == 1){
            result = <div className="singleResult">{this.state.rollResults[0]}</div>
        } else if (this.state.rollResults.length > 1){
            result = <div>
                <div> Results : {this.state.rollResults.join(", ")}</div>
                <div> Sorted : {this.state.rollResults.sort(function(a,b){
                    return a-b;
                }).join(", ")}</div>
                <table className="table table-bordered">
                    <thead>
                        <tr><th>Score</th><th>Occurence</th></tr>
                    </thead>
                    <tbody>
						{this.collectRoll()}
                    </tbody>
                </table>
            </div>;
        }
        return(
            <div className="modal fade" id="RollResult" tabindex="-1" role="dialog"
                aria-labelledby="renameModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal"
                        aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 className="modal-title" id="renameModalLabel">Roll result</h4>
                  </div>
                  <div className="modal-body">
                    {result}
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-dismiss="modal">Ok</button>
                  </div>
                </div>
              </div>
            </div>
        )
    }
});

module.exports = RollResult;
