// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).

  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  
  const inputRef = React.useRef(null)
  const [username, setUsername] = React.useState('')

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(username)
  }

  const handleChange = event => {
    const {value} = event.target
    setUsername(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          value={username}
          onChange={handleChange}
          ref={inputRef}
          id="usernameInput"
          type="text"
        />
      </div>
      <button id="submitButton" type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App

//   const inputRef = React.useRef(null)
//   const [error, setError] = React.useState(null)

//   const handleSubmit = event => {
//     event.preventDefault()
//     // const inputValue = event.target.elements.usernameInput.value;
//     const inputValue = inputRef.current.value
//     onSubmitUsername(inputValue)
//   }

//   const handleChange = event => {
//     const inputValue = event.target.value
//     const isValid = inputValue === inputValue.toLowerCase()
//     console.log(isValid)
//     setError(isValid ? null : 'Username must be lower case')
//   }

//   const ErrorMessage = () => {
//     return (
//       <p
//         className="errorMessage"
//         role="alert"
//         style={{color: 'red', fontSize: 12, marginTop: 5}}
//       >
//         {error}
//       </p>
//     )
//   }

//   const errorMessage2 = (
//     <p
//       className="errorMessage"
//       role="alert"
//       style={{color: 'red', fontSize: 12, marginTop: 5}}
//     >
//       {error}
//     </p>
//   )
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="usernameInput">Username:</label>
//         <input
//           onChange={handleChange}
//           ref={inputRef}
//           id="usernameInput"
//           type="text"
//         />
//         {error ? <ErrorMessage /> : null}
//         {error ? errorMessage2 : null}
//       </div>
//       <button disabled={Boolean(error)} id="submitButton" type="submit">
//         Submit
//       </button>
//     </form>
//   )
// }

// function App() {
//   const onSubmitUsername = username => alert(`You entered: ${username}`)
//   return <UsernameForm onSubmitUsername={onSubmitUsername} />
// }

// export default App
