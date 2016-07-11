//creates the game board	
	var buildBoard = function(){
		$('.gameArea').append('<div class="gameBoard"></div>');
//adds 9 squares, for loops seem like the best way to render a table
		var placeId = 1;	
		for(var j = 1; j<=3; j++){
			$('.gameBoard').append('<div class="boardRow' + j + ' row"></div>');	
				for(var i = 1; i<=3; i++){			
					$('.boardRow' + j).append('<div id="' + placeId + '" class="sq' + placeId + ' square playable" onclick="playGame(' + placeId +')"></div>');
					placeId++; 
				//creates better CSS to eliminate the outside border
				}
		}	
	}
	buildBoard();	
	//control variables
	var player = 1;
	var turn = 0;
	var winningObj = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
	var weHaveAWinner;
//Resets board after someone wins.
	var resetBoard = function(){
		$('.gameBoard').remove();//removes current game board
		$('.gameArea').append(buildBoard());//appends a new board to the dom
		//below resets the control variables.
		winningObj = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
		player = 1;
		turn = 0;
	}
//alerts the winner, the changes the middle square the a play again prompt	
	var someOneWon = function(who){
		alert(who + ' Won!');
		$('.square').removeAttr('onclick');
		$('.square').empty();
		$('#5').append('<a>Play Again?</a>');
		$('#5 a').click(function(){
			resetBoard();
		})
	}
//runs through the winningObj and replaces the number that was played with 
//a string identifying who is on that spot. If all the spots in the sub array 
//are occupied it calls the someoneWon function. 
	var checkForWinner = function(who, id){
		//runs through the winningObj(should be changed to winningArr)
		_.each(winningObj, (miniArray)=>{
			//runs through the subarrays replacing the numbers that match the
			//current id with a string to identify the player on that spot. 
			_.each(miniArray, (value, index)=>{
				if(miniArray[index] === Number(id)){
					miniArray[index] = who;
				}	
			})
			//here we iterate over the sub array one more time to check if all the
			//indexes match the current player, if they do we will run the someonWon funciton
			//and send it the string of who won.
			weHaveAWinner = _.every(miniArray, (index)=>{
				return index === who;
			})
			if(weHaveAWinner)return someOneWon(who);
		})
	}
//this function is the control panel for the program. It enters the players
//symbol and switches whos turn it is.
	var controlStuff = function(id, who){
		//Appends the square with the player symbol
		document.getElementById(id).innerHTML = who;
		//keeps track of how many times the players have gone, this is to control
		//ties, ***which is not implemented yet******
		turn++;
		//runs checkforWinner funciton
		checkForWinner(who, id);
		//removes the onclick attribute from the current square
		document.getElementById(id).removeAttribute('onclick');
	}
//this is the funciton from the onclick attribute
	var playGame = function(id){
		if(player === 1){
			controlStuff(id, 'X');
			player = 2;
		}else{
			controlStuff(id, 'O');
			player = 1;
		}	
	}





























	