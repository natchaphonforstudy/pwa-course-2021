import './App.css';
import { useState } from 'react';

function App() 
{
  const [text,setText] = useState("");

  //show array lines
  const [lines, setlines] = useState(["ต้า","ติด","เมด"]);
  
  //can type text
  const onTextChange = (event) => {setText(event.target.value);};

  //Onsend
  const Onsend = (event) => {
    setlines(lines => [...lines, text]);
    setText("")
  }
  
  return (
    <div className="App">
      <div className="App-header">
      </div>
      <div className="App-chatroom">
        {
          lines.map(x => { 
            return <div className="App-chatroom-text">
                   {x}
                   </div>
          })
        }
          
        <div className="App-chatroom-text">
          {text}
        </div>
       </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input" value={text} onChange={onTextChange}/>
        <div className="App-textbox-send"onClick={Onsend}>Send!</div>
      </div>
    </div>
  );
}

export default App;
