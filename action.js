//creates the game board
	var buildBoard = function(){
		$('.gameArea').append('<div class="gameBoard"></div>');
	//adds 9 squares, for loops seem like the best way to render a table
		var placeId = 1;	
		for(var j = 1; j<=3; j++){
			$('.gameBoard').append('<div class="boardRow' + j + ' row"></div>');	
				for(var i = 1; i<=3; i++){			
					$('.boardRow' + j).append('<div id="' + placeId + '" class="square playable" onclick="playGame('+ placeId +')">' + placeId + '</div>');
					placeId++; 
				}
		}
	}
	buildBoard();	

	var player = 1;
	var winningObj = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
	var weHaveAWinner;
//runs through each player to control whos turn it is...
	var someOneWon = function(who){
		alert(who + ' won!');
	}

	var playGame = function(id){

		if(player === 1){
			document.getElementById(id).innerHTML = 'X';
			player = 2;
			_.each(winningObj, (miniArray)=>{
				_.each(miniArray, (value, index)=>{
					if(miniArray[index] === Number(id)){
						miniArray[index] = 'X';
					}	
				})
				weHaveAWinner = _.every(miniArray, (index)=>{
					return index === 'X';
				})
				if(weHaveAWinner)someOneWon('X');
			})
				
			console.log(winningObj);
			document.getElementById(id).removeAttribute('onclick');
		}else{
			document.getElementById(id).innerHTML = 'O';
			player = 1;
			_.each(winningObj, (miniArray)=>{
				_.each(miniArray, (value, index)=>{
					if(miniArray[index] === Number(id)){
						miniArray[index] = 'O';
					}	
				})
				weHaveAWinner = _.every(miniArray, (index)=>{
					return index === 'O';
				})
				if(weHaveAWinner)someOneWon('O');
			})

			console.log(winningObj);
			document.getElementById(id).removeAttribute('onclick');
		}	
	}





























	