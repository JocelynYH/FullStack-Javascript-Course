// YOUR CODE BELOW
let ticTacToe = {
    board: [ 
        [null,null,null],
        [null,null,null],
        [null,null,null] 
    ],

    move: function(character, rowNum, colNum) {
        if (this.board[rowNum][colNum] === null ) {
            this.board[rowNum][colNum] = character;
            return this.board;
        }

        else {
            return "This spot is already filled!" + this.board;
        }
    },

    clear: function() {
        this.board = [ 
        [null,null,null],
        [null,null,null],
        [null,null,null] 
        ]
        return this.board;
    }

}

