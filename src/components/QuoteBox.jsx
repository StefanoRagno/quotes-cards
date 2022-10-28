import React from 'react'
import quotes from './../quotes.json'


const QuoteBox = ({ indexRandom }) => {
  return (
    <div>
      <h2>{quotes[indexRandom].quote}</h2>
      <div className='quote'><em className='quote'>{quotes[indexRandom].author}</em></div>
    </div>
  )
}

export default QuoteBox