import React, { useState } from 'react';
import './App.css';


function App() {

const [text,setText] = useState("Type Ready to start!");

const [lines, setLines] = useState(["Welcome to my Lobby"]);

const onTextChange = (event) => {
    setText(event.target.value);
};

const onSend = () => {
  setLines(line => [...lines,text]);
    setText("")
}

    

  return (
    <div className="App col-12">
     
      <div className="App-header">
          <div className="RoomName">Room123</div>
          <div className="Status">Online - Tar,Pruek,Phai</div>
          <div className="Ju-on"></div>
          <div className="profile-read-tar"></div>
          <div className="profile-read-pruek"></div>
          <div className="profile-read-phai"></div>
      </div>
        <div className="App-chatroom">
        {
          lines.map(x=>{
          return <div className="App-chatroom-text">
              {x}
          </div>
          })
        }
      </div>
     
      <div className="App-textbox">
          <div className="App-Botton col-1"></div>
        <input type="text" className="App-textbox-input col-10" value = {text} onChange={onTextChange}/>
        <div className="App-textbox-send col-2" onClick={onSend}>Send!</div>
      </div>
        <div class={"move-me"}>
        </div>
    </div>
  );
}

export default App;
