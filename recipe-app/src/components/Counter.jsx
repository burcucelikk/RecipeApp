import React, { useState } from 'react'

const Counter = () => {
  
  const [counter,setCounter]=useState(0)
  
  return (
    <div>
      <h2>Counter</h2>
      <p>Butona {counter} kez tıklandı</p>
      <button onClick={()=>setCounter((prevCount)=> prevCount+1)}>Tıkla</button>
    </div>
  )
}

export default Counter