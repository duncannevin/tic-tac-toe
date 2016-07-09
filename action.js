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

	var player = 1;
	var winningObj = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
	var weHaveAWinner;
//runs through each player to control whos turn it is...
	var resetBoard = function(){
		$('.gameBoard').remove();
		$('.gameArea').append(buildBoard());
		winningObj = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
		player = 1;
		turn = 1;
	}

	var someOneWon = function(who){
		alert(who + ' Won!');
		$('.square').empty();
		$('#5').append('<a>Play Again?</a>');
		$('#5 a').click(function(){
			resetBoard();
		})
	}

	var checkForWinner = function(who, id){
		_.each(winningObj, (miniArray)=>{
			_.each(miniArray, (value, index)=>{
				if(miniArray[index] === Number(id)){
					miniArray[index] = who;
				}	
			})
			weHaveAWinner = _.every(miniArray, (index)=>{
				return index === who;
			})
			if(weHaveAWinner)someOneWon(who);
		})
	}

	var playGame = function(id){
		console.log(id);
		if(player === 1){
			document.getElementById(id).innerHTML = 'X';
			player = 2;
			checkForWinner('X', id);
			console.log(winningObj);
			document.getElementById(id).removeAttribute('onclick');
		}else{
			document.getElementById(id).innerHTML = 'O';
			player = 1;
			checkForWinner('O', id);
			console.log(winningObj);
			document.getElementById(id).removeAttribute('onclick');
		}	
	}





























	