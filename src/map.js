var Config = require("../config")

class Map {
    Rows = {};
    Wide = 40;
    Tall = 40;
    constructor( Wide, Tall ){
        this.Wide = Wide;
        this.Tall = Tall;
        this.Init( )
    }
    Init( ){
        this.Rows = {}
        for (let row = 0; row <= this.Tall; row++) {
            this.Rows[ row ] = {}
            for (let column = 0; column <= this.Wide; column++) {
                this.Rows[ row ][ column ] = false
            }
        }
    }
    GetChar( x, y ){
        if( x < 0 | y < 0 ){
            return false
        }
        if( !(x in this.Rows) | !(y in this.Rows[ x ]) ){
            return false;
        }
        return this.Rows[ x ][ y ];
    }
    SetChar( x, y, char ){
        this.Rows[ x ][ y ] = char;
    }
}

module.exports = Map;