// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

function Box({size, style, ...property}) {
  const sizeClass = size ? `box--${size}` : '';
  return (
    <div 
    className={`box ${sizeClass}`} 
    style={{fontStyle: 'italic', ...style}} 
    {...property} />
  )
}

// function Box({style, className='', ...property}) {
//   return (
//     <div 
//     className={`box ${className}`} 
//     style={{fontStyle: 'italic', ...style}} 
//     {...property} />
//   )
// }

const smallBox = (
  <div
    size="small"
    style={{backgroundColor: 'lightblue'}}
  >
    small lightblue box
  </div>
)
const mediumBox = (
  <div
    size="medium"
    style={{backgroundColor: 'pink'}}
  >
    medium pink box
  </div>
)
const largeBox = (
  <div
    size="large"
    style={{backgroundColor: 'orange'}}
  >
    large orange box
  </div>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      {/* {Box} */}
      <Box style={{backgroundColor: 'red'}}>
        default box
      </Box>
      {/* {Box className=box--small style={{backgroundColor: 'grey'}}} */}
    </div>
  )
}

export default App
