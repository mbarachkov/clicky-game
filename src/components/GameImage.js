import React from 'react'

function ChihuahuaImage(props) {
  return (
    <img src={props.url} alt="chihuahua" onClick={props.handleImageClick} />
  )
}

export default ChihuahuaImage