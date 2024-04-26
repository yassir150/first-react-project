import React from 'react'
import Carditem from './Carditem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>don't check those EPIC Destination!</h1>
      <div className='cards__container'>
        <div className='cards__card'>
            <ul className='cards__items'>
            <Carditem src="/images/img-2.jpg" text="explore this beach in the picture i want to visit it some time" label='Adventure' path='/services' />
            <Carditem src="/images/img-3.jpg" text="i love the ocean do you love it too ?" label='Adventure' path='/services' />
            <Carditem src="/images/img-4.jpg" text="i don't like footbal but i really want to play a match there" label='Adventure' path='/services' />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
