import React from 'react'
import colors from '../utils/color'


const NextButton = ({getRandomElement, randomColorInddex}) => {
    
  return (
    <div className='button_next'>
        <button onClick={getRandomElement} style={{background: colors[randomColorInddex]}}>&#62;</button>
    </div>
  )
}

export default NextButton