window.onload = function(){
    this.getBoard()
    document.getElementsByClassName("btn")[0].onclick = function(){
        for(let i = 0; i < squares.length; i++){
            squares[i].innerHTML = ("")
        } 
    document.getElementById("status").classList.remove("you-won")
    document.getElementById("status").innerHTML = "Move your mouse over a square and click to play an X or an O."
    noCheating(document.getElementById("status"))
}};

function getBoard(){
	board = document.getElementById("board");
	squares = board.getElementsByTagName("div");  
    for(let i = 0; i < squares.length; i++){
        squares[i].setAttribute("class", "square")
        squares[i].onmouseover = function(){squares[i].classList.add("hover")};
        squares[i].onmouseout = function(){squares[i].classList.remove("hover")};
        squares[i].onclick = function(){
            console.log("getting into switch")
            switch(moves.length < 10){
                case (moves.length === 0):
                    squares[i].innerHTML = "X"
                    squares[i].classList.add("X")
                    moves[0] = 1
                    //winningConditions(squares)
                    break;
                case (moves.length === 1):
                    squares[i].innerHTML = "O"
                    squares[i].classList.add("O")
                    moves[1] = 2
                    //winningConditions(squares)
                    break;
                case (moves.length === 2):
                    squares[i].innerHTML = "X"
                    squares[i].classList.add("X")
                    moves[2] = 3
                    winningConditions(squares)
                    break;
                case (moves.length === 3):
                    squares[i].innerHTML = "O"
                    squares[i].classList.add("O")
                    moves[3] = 4
                    winningConditions(squares)
                    break;
                case (moves.length === 4):
                    squares[i].innerHTML = "X"
                    squares[i].classList.add("X")
                    moves[4] = 5
                    winningConditions(squares)
                    break;
                case (moves.length === 5):
                    squares[i].innerHTML = "O"
                    squares[i].classList.add("O")
                    moves[5] = 6
                    winningConditions(squares)
                    break;
                case (moves.length === 6):
                    squares[i].innerHTML = "X"
                    squares[i].classList.add("X")
                    moves[6] = 7
                    winningConditions(squares)
                    break;
                case (moves.length === 7):
                    squares[i].innerHTML = "O"
                    squares[i].classList.add("O")
                    moves[7] = 8
                    winningConditions(squares)
                    break;
                case (moves.length === 8):
                    squares[i].innerHTML = "X"
                    squares[i].classList.add("X")
                    moves[8] = 9
                    winningConditions(squares)
            }        
        };
        noCheating(squares[i]);
    }
}

var moves = [];

//Stores all the possible winning combinations
//possible winning conditions : [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

function winningConditions(plays){
    switch(plays.length < 10){
    	case (plays[0].innerHTML === plays[1].innerHTML && plays[2].innerHTML === plays[0].innerHTML && plays[1].innerHTML === plays[2].innerHTML):
    		document.getElementById('status').className = "you-won";
            document.getElementById('status').innerHTML =   "Congratulations! "+ plays[0].innerHTML + " is the Winner!";
    	   break;
        case (plays[3].innerHTML === plays[4].innerHTML && plays[5].innerHTML === plays[3].innerHTML && plays[4].innerHTML === plays[5].innerHTML):
            document.getElementById('status').className = "you-won";
            document.getElementById('status').innerHTML =   "Congratulations! "+ plays[3].innerHTML + " is the Winner!";
           break;
        case (plays[6].innerHTML === plays[7].innerHTML && plays[8].innerHTML === plays[6].innerHTMl && plays[7].innerHTML === plays[8].innerHTML):
            document.getElementById('status').className = "you-won";
            document.getElementById('status').innerHTML =   "Congratulations! "+ plays[6].innerHTML + " is the Winner!";
           break;
        case (plays[0].innerHTML === plays[3].innerHTML && plays[6].innerHTML === plays[0].innerHTML && plays[3].innerHTML === plays[6].innerHTML):
            document.getElementById('status').className = "you-won";
            document.getElementById('status').innerHTML =   "Congratulations! "+ plays[0].innerHTML + " is the Winner!";
           break;
        case (plays[1].innerHTML === plays[4].innerHTML && plays[7].innerHTML === plays[1].innerHTML && plays[4].innerHTML === plays[7].innerHTML):
            document.getElementById('status').className = "you-won";
            document.getElementById('status').innerHTML =   "Congratulations! "+ plays[1].innerHTML + " is the Winner!";
           break;
        case (plays[2].innerHTML === plays[5].innerHTML && plays[8].innerHTML === plays[2].innerHTML && plays[5].innerHTML === plays[8].innerHTML):
            document.getElementById('status').className = "you-won";
            document.getElementById('status').innerHTML =   "Congratulations! "+ plays[2].innerHTML + " is the Winner!";
           break;
        case (plays[0].innerHTML === plays[4].innerHTML && plays[8].innerHTML === plays[0].innerHTML && plays[4].innerHTML === plays[8].innerHTML):
            document.getElementById('status').className = "you-won";
            document.getElementById('status').innerHTML =   "Congratulations! "+ plays[0].innerHTML + " is the Winner!";
           break;
        case(plays[2].innerHTML === plays[4].innerHTML && plays[6].innerHTML === plays[2].innerHTML && plays[4].innerHTML === plays[6].innerHTML):
            document.getElementById('status').className = "you-won";
            document.getElementById('status').innerHTML =   "Congratulations! "+ plays[2].innerHTML + " is the Winner!";
           break;
    }

}

function noCheating(node) {
    if (node.nodeType == 1) {
        node.setAttribute("unselectable", "on");
    }
    var child = node.firstChild;
    while (child) {
        noCheating(child);
        child = child.nextSibling;
    }
}

