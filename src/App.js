import React, { Component } from 'react';
import Card from './Card/Card';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

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

  render() {
    return (
      <div className="App">
        <Card 
          question={this.state.currentCard.question} 
          answer={this.state.currentCard.answer}
        />
      </div>
    );  
  }
}

export default App;
