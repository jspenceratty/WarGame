//classes.js


//the Card class
//we'll use the settings here to keep track of the suit and value of the card
class Card {
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
    }
}


//the Deck class
//we'll use this class to deal with the deck of cards, including building the initial deck,
//shuffling the deck, and also in divying it out into two 'piles' of cards
class Deck  {
    constructor(){
        this.cards = [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];  //everything gets a number for ease
            //the higher number wins (e.g., Ace = 14; King=13; Queen=12; Jack=11)    
        this.suits = ["Hearts", "Spades","Clubs", "Diamonds" ]; //all four suits possible
            //no order to suits; same number in different suits results in tie
        this.deck = []; //this will be the built deck of cards
        this.shuffledDeck = []; //this will be the shuffled deck
    }

    buildTheDeck(){
        for (var eachSuit = 0; eachSuit < this.suits.length; eachSuit++){ //iterate through each suit
            //within each suit, add each possible card from this.cards
            for (var eachCard = 0; eachCard < this.cards.length; eachCard++){
                //add each variation to the initial deck of cards (this.deck)
                this.deck.push(new Card(this.suits[eachSuit],this.cards[eachCard]));
            }
        }
        //console.log(this.deck);
    }

    //introduce random numbers to effectively shuffle and choose different cards from the unshuffledDeck
    //and then put them into another 'deck'
    //this is like shuffling a real deck that was newly opened and getting new stack in a random order
    shuffleTheDeck(){
        this.buildTheDeck()
        let  unshuffledDeck = this.deck;
        let shuffledDeck = this.shuffledDeck;
        while(unshuffledDeck.length) {
            //run this while there is still something in the unshuffledDeck
            
            let chosenCardIndex = Math.floor(Math.random() * unshuffledDeck.length);
            //randomly choose a card from the unshuffledDeck

            shuffledDeck.push(unshuffledDeck.splice(chosenCardIndex,1)[0]);
            //take the chosen card "unshuffledDeck.splice(chosenCardIndex,1)"
        }
        //console.log(this.shuffledDeck);
    }

    //deal the cards out into two 'piles'
    //every other card goes to the same player, just as if you were dealing a real stack
    //unless you cheat and pull from the bottom, in which case, shame on you
    dealCards() {
        this.shuffleTheDeck();
        let firstSet = [];
        let secondSet = [];
        this.shuffledDeck.forEach(function(el,index){
            //if this is an even card (e.g., the second card from the top), it will go to the second set
            if (index % 2 == 0 ){
                secondSet.push(el);
            } else {
                //otherwise, even cards go to the first set
                firstSet.push(el);
            }
        })
        //return both sets together
        return [firstSet, secondSet];
    }

}


//this is our player class
//here we keep track of name, the cards dealt to the player, and the score
//for fun, we include the ability to addScore and returnScore
//note: some items are not utilized here
class Player {
    constructor(name,playersCards){
        this.name = name;
        this.playersCards = playersCards;
        this.playersScore = 0;
        
    }

    playCard(){
        //choose and remove card from deck
        return this.cards.splice(0,1);
        //return the card to be played
    }

    addScore(){
        this.playersScore++

    }

    returnScore(){
        return this.playersScore;
    }
   
}

