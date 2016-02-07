var React = require('react');

function Dispatcher() {
    this.listeners = [];
}
Dispatcher.prototype.register = function(listener){
    this.listeners.push(listener);
}
Dispatcher.prototype.unregister = function(listener){
    var index = this.listeners.indexOf(listener);
    if(index >= 0){
        this.listeners.splice(index, 1);
    }
}
Dispatcher.prototype.notify = function(action){
    this.listeners.forEach(function(listener){
        listener.notify(action);
    });
}

var mainDispatcher = new Dispatcher();
module.exports = mainDispatcher;
