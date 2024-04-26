import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/public/images/video-1.mp4' autoPlay loop muted /> */}
      <h1>ADVENTURE NEVER AWAITS</h1>
      <p>What are you doing here?</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Get not started</Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Don't watch trailer <i className='fa fa-play-circle'/></Button>
        </div>
    </div>
  )
}

export default HeroSection
