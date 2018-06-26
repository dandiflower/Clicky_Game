import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import friends from "./friends.json";
import "./App.css";

let shuffleArr = require('shuffle-array');

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    currentScore: 0,
    highScore: 0
  };

  shuffle = () => {
    let friends = this.state.friends;
    shuffleArr(friends);
    this.setState({ friends });
  }

  clicked = (id) => {
    let friends = this.state.friends;
    friends.forEach( elem => {
      if (elem.id === id) {
        
        if (elem.clicked === false) {
          
          elem.clicked = true;
          console.log(elem);
          this.state.currentScore += 1;
          if (this.state.highScore < this.state.currentScore) {
            this.state.highScore = this.state.currentScore;
          }
        } 
        else {
          this.endGame();
        }
    };
  });
    console.log(this.state.currentScore);
    this.shuffle();
  }

  endGame = () => {
    this.state.currentScore = 0;
    this.shuffle();
    friends.forEach( creature => {
    creature.clicked = false; 
    })
    console.log(this.state.currentScore);
    console.log(friends);
  }

// store a  
// write a function that shuffles the array, defining a method within the class....

  storeFriend = id => {
    // Filter this.state.friends for friends with an id equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Navbar currentScore={this.state.currentScore} highScore={this.state.highScore}/>

      
        <Wrapper>
          <Title>Try to beat the highest score by selecting the most images without selecting the same image twice!</Title>
          {this.state.friends.map(friend => (
            <FriendCard
              storeFriend={this.storeFriend}
              id={friend.id}
              key={friend.id}
              clicked={this.clicked}
              image={friend.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
