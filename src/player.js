var blessed = require('blessed');
var program = blessed.program();

var Config = require("../config")

class Player {
    x = 0;
    y = 0;
    Name = "Unnamed"; // Default name

    constructor( Name, Char ){
        this.Name = Name;
        this.Char = Char;
    }
    
    // Focus cursor on player
    focus() {
        program.move( this.x + Config.BoxOffset.x, this.y + Config.BoxOffset.y );
    }
}

module.exports = Player;