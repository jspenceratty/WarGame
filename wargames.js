//wargames.js

//Note: classes are removed to a classes.js file just to deal with multiple javascript files


//after the initial setup from the index.html page, this is where the real magic happens
//here we plug in the two players that were set up and dealt cards
//we determine after each round who won, and give a final result at the end

function playWar(player1,player2){
    //here each round is limited to the cards dealt
    document.write('<table>');
    document.write('<tr>');
    document.write('<th>' + player1.name + '</th><th>' + player2.name + '</th><th>Winner</th>');
    document.write('</tr>');
    for (let i = 0; i < player1.playersCards.length; i++){
        document.write('<tr>');
        //we get face value for the card being played by player1 (e.g., Queen, His Majesty The King)
        if (player1.playersCards[i].value < 11){
            cardValue1 = player1.playersCards[i].value
        } else {
            switch (player1.playersCards[i].value){
                case 11: 
                    cardValue1='Jack';
                    break;
                case 12:
                    cardValue1='Queen';
                    break;
                case 13:
                    cardValue1 = 'King';
                    break;
                case 14:
                    cardValue1 = 'Ace';
                    break;
            }

        }

        //we get face value for the card being played by player2 (e.g., Queen, His Majesty The King)
        if (player2.playersCards[i].value < 11){
            cardValue2 = player2.playersCards[i].value
        } else {
            switch (player2.playersCards[i].value){
                case 11: 
                    cardValue2='Jack';
                    break;
                case 12:
                    cardValue2='Queen';
                    break;
                case 13:
                    cardValue2 = 'King';
                    break;
                case 14:
                    cardValue2 = 'Ace';
                    break;
            }

        }
        
        //here we set a string of what cards are being played by each player
        //let startString = player1.name + ' plays ' + cardValue1 + ' of ' + player1.playersCards[i].suit + ' - ' +
        //    player2.name + ' plays ' + cardValue2 + ' of ' + player2.playersCards[i].suit + '.    ';
        //let endString = '';

        //here we evaluate who win's that particular round
        if (player1.playersCards[i].value > player2.playersCards[i].value){
            player1.addScore();
            endString =player1.name + ' wins!';
        } else if (player2.playersCards[i].value > player1.playersCards[i].value){
            player2.addScore();
            endString =player2.name + ' wins!';
        } else {
            endString ='Tie - no points awarded.';
        }
        document.write('<td>' + cardValue1 + ' of ' + player1.playersCards[i].suit + '</td><td>' +
        cardValue2 + ' of ' + player2.playersCards[i].suit + '</td><td>' + endString + '</td>');
        
    }

    //here we figure up the results and give some personal commentary
    let personalCommentary = '';
    if (parseInt(player1.playersScore) > parseInt(player2.playersScore)){
        personalCommentary = '  ' + player1.name + ' wins!!!  As it should be.';
    } else if (parseInt(player2.playersScore) > parseInt(player1.playersScore)){
        personalCommentary = '  ' + player2.name + ' wins.    That\'s a crying shame, isn\'t it?!';
    } else {
        personalCommentary = '  ' + '  A bloody tie?  Nope.  Try again.';
    }

    document.write('</table>');
    //finally we put all those pieces together and output to the console
    document.write('<h2>Final Score: ' + player1.name + ': ' + player1.playersScore + ' - ' + player2.name + ': ' 
    + player2.playersScore + '<br />' +  personalCommentary + '</h2>');
}

function whoDoWeLike(name) {
    if (name == 'James'){
        return 'We like him.';
    } else if (name == 'Tyler'){
        return 'He\'s okay, we guess.';
    } else {
        throw new Error('You have to give me a name of someone I know.');
    }
}