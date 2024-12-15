import React from 'react'
import ButtonLink from './ButtonLink'

const Hero = () => {
  return (
    <div className='heroText'>
        <h1> My Name is <span className="fullName">Daniel Efford</span> </h1>
        <h3 className='subHeroText'>I am a <strong>Software Developer</strong> with a Passion for <strong>Data</strong> and <strong>AI</strong></h3>
        <br />
        <ButtonLink Link="https://github.com/defford" Text="GitHub" />
        <ButtonLink Link="src/deresume.pdf" Text="Resume" />
        <ButtonLink Link="https://www.linkedin.com/in/daniel-efford/" Text="LinkedIn" />
        <br /><br /><br /><hr />
    </div>
  )
}

export default Hero