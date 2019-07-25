import React from 'react'

import BobaImage from './components/BobaImage'
import images from './images.json'

import './App.css'

const pickRandom = max => Math.floor(Math.random() * max)

const randomImageId = () => images[pickRandom(images.length)].id
class App extends React.Component {
  state = {
    clicks: 0,
    score: 0,
    currentBobaId: randomImageId()
  }

  handleImageClick = id => {
    const newState = { clicks: this.state.clicks + 1 }
    if (id === this.state.currentBobaId) {
      newState.score = this.state.score + 1
      newState.currentBobaId = randomImageId()
    }

    this.setState(newState)
  }

  render() {
    return (
      <div className="container">
        <h1>Boba Face</h1>
        <h2>Click on an image to earn points, but don't click on any more than once!</h2>
        <div>Score: {this.state.score}</div>
        <div>Clicks: {this.state.clicks}</div>
        {/* reference images in the public folder */}
        {images.map(image => (
          <BobaImage
            key={image.id}
            handleImageClick={() => this.handleImageClick(image.id)}
            url={process.env.PUBLIC_URL + '/img/' + image.fileName}
          />
        ))}
      </div>
    )
  }
}

export default App