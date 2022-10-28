import { useState } from 'react'
import './App.css'
import quotes from './quotes.json'
import QuoteBox from './components/QuoteBox'
import NextButton from './components/NextButton'
import colors from './utils/color'

function App() {

  const [indexRandom, setIndexRandom] = useState(0)

  const getRandomElement = () => {
    setIndexRandom(Math.floor(Math.random() * quotes.length))
  }

  //const colors = ['#845EC2', '#D65DB1', '#FF6F91', '#FF9671', '#FFC75F', '#F9F871']
  const randomColorInddex = Math.floor(Math.random() * colors.length)
  document.body.style=`background: ${colors[randomColorInddex]}`

  return (
    <div className="App" style={{color: colors[randomColorInddex]}}>
      <div className='card'>
        <QuoteBox indexRandom={indexRandom}/>
        <NextButton getRandomElement={getRandomElement} randomColorInddex={randomColorInddex}/>
      </div>
    </div>
  )
}

export default App
