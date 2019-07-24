import React from 'react'

function BobaImage(props) {
  return (
    <img src={props.url} alt="fett" onClick={props.handleImageClick} />
  )
}

export default BobaImage