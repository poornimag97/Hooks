import React, { useState} from 'react'
const App =()=>{
  let[username,setUsername]=React.useState("sam")
  let[count,setCount]=React.useState(0)
  let handleChange=()=>{
    setUsername("pari")
  }
  let handleCountChange=()=>{
    setCount(1)
  }
  return(
    <>
    <h1>{username}</h1>
    <h2>{count}</h2>
    <button onClick={handleChange}>Change Name</button>
    <button onClick={handleCountChange}>Change count</button>
    </>
  )
}
export default App;