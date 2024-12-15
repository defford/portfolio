import React from 'react'

const ButtonLink = ({ Text, Link }) => {
  return (
    <>
        <button className="heroButton">
            <a href={Link} target="_blank" rel="noopener noreferrer" className="buttonLink">
            {Text}</a>
        </button>
    </>
  )
}

export default ButtonLink