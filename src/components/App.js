import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  //const [isClicked, setIsClicked] = useState(true)
  const handleDoubleClick = (event) =>{
      //setIsClicked(!isClicked);
      console.log("I was double clicked");
      
  }
  const handleSingleClick = (event) =>{
    console.log("I was not double clicked");
}
  return (
    <div id="main">
      <button id="dblclick-btn" onClick={handleSingleClick} onDoubleClick={handleDoubleClick}>Double click me</button>
    </div>
  )
}


export default App;
