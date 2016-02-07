var React = require('react');
var ReactDOM = require('react-dom');
var Actions = require('./constants/actionsName')
var mainDispatcher = require('./store/dispatcher');
var MenuBar = require('./components/menuBar.react');
var Fight = require('./components/fight.react');

console.log(mainDispatcher);
function MainApp(){
    this.fights = [];
    this.currentFight = null;
}
MainApp.prototype.addFight = function(){
    var newFight = new Fight();
    this.fights.push(newFight);
    this.currentFight = newFight;
    mainDispatcher.notify({
        type: "RefreshFightList"
    })
}
MainApp.prototype.goToFight = function(fight){
    this.currentFight = fight;
}
MainApp.prototype.notify = function(action){
    if(action.type == Actions["ADDFIGHT"]){
        this.addFight();
    }
    if(action.type == Actions["GOTOFIGHT"]){
        this.goToFight();
    }
}
var myApp = new MainApp();
mainDispatcher.register(myApp);

ReactDOM.render(
    <div>
        <h1>Everworld Fight Tracker</h1>
        <MenuBar fightList={myApp.fights}/>
    </div>,
  document.getElementById('main')
);
