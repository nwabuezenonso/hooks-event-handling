//use state hooks allow us to create state
import React, { useState } from 'react'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showpasswords, setshowpasswords] = useState(true)
  //making use of hooks in value and onchange event
  return (
    <div className="container">

      {/* adding input to the application and setting an onchange event */}
      <input 
        type= "text"
        placeholder="Enter username"
        value= { username}
        onChange={(e)=>  setUsername(e.target.value) }
      />
      <input 
        type= "password"
        placeholder="Enter password"
        value= { password }
        onChange={(e)=>  setPassword(e.target.value) }
      />

      {/* section for displaying the data */}
      <h2>{username}</h2>
      {/* if the showpass is true display the password else show the * as many times as the password number */}
      <h2>{showpasswords ? password: '*'.repeat(password.length) }</h2>

      {/* onclick handler tp set the password */}
      <button onClick={(e)=> setshowpasswords(!showpasswords)}>Show/Hide password</button>
    </div>
  );
}

export default App;
