import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [isClicked, setIsClicked] = useState(false)
  const handleDoubleClick = (event) =>{
      setIsClicked(!isClicked);
      if(isClicked){
        console.log("I was double clicked");
      }else{
        console.log("I was not double clicked")
      }
  }
  return (
    <div id="main">
      <button id="dblclick-btn">Double click me</button>
    </div>
  )
}


export default App;
