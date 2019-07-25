import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import BobaImage from "./components/BobaImage/BobaImage";
import images from "./images.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    images,
    clickedimages: [],
    score: 0
  };

//when you click on a card ... the images is taken out of the array
  imageClick = event => {
    const currentimages = event.target.alt;
    const imagesAlreadyClicked =
      this.state.clickedimages.indexOf(currentimages) > -1;

//if you click on a images that has already been selected, the game is reset and cards reordered
    if (imagesAlreadyClicked) {
      this.setState({
        images: this.state.images.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedimages: [],
        score: 0
      });
        alert("You lose. Play again?");

//if you click on an available images, your score is increased and cards reordered
    } else {
      this.setState(
        {
          images: this.state.images.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedimages: this.state.clickedimages.concat(
            currentimages
          ),
          score: this.state.score + 1
        },
//if you get all 12 images corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              images: this.state.images.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedimages: [],
              score: 0
            });
          }
        }
      );
    }
  };
 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.images.map(image => (
            <BobaImage
              imageClick={this.imageClick}
              id={image.id}
              key={image.id}
              fileName={image.fileName}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;