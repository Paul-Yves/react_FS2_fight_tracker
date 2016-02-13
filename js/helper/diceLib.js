var diceLib = {
    dice : function(face){
        return Math.floor((Math.random() * face) + 1);
    },
    d6 : function(){
        return this.dice(6);
    },
    explodingDice: function(){
        var result = this.d6();
        while(result % 6 == 0){
            result += this.d6();
        }
    },
    fsRoll: function(){
        return this.explodingDice() - this.explodingDice();
    }
}
module.exports = diceLib;
