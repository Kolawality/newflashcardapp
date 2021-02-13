import React, { Component } from 'react';
import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';
import './App.css';

import { DB_CONFIG } from './Config/Firebase/db_config';

class App extends Component {

  constructor(props){
    super(props);

    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: [
        {id: 1, 
          question: "What is hardware" ,
          answer: "The physical components of a computer system"
        },
        {id: 2, 
          question: "What is software", 
          answer: "The digital components of a computer system"
        }
        
      ],
      currentCard: {}
    }
  }

  componentWillMount(){
    const currentCards = this.state.cards;

    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
  }

  getRandomCard(currentCards){
    var card = currentCards[Math.floor(Math.random() * currentCards.length)]
    return(card);
  }

  updateCard(){
    const currentCards = this.state.cards;    
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="cardRow">
          <Card 
            question={this.state.currentCard.question} 
            answer={this.state.currentCard.answer}
          />
        </div>
        <div classname="buttonRow">
          <DrawButton drawCard={this.updateCard}/>
        </div>
      </div>
    );  
  }
}

export default App;
