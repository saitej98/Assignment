import React from "react";
import "./App.css";
import Main from "./components/Main";
import FileUpload from "./components/fileUpload";
function App() {
  return (
    <div>
      <div className="App"></div>
      <div className="plain"></div>
      <div className="Content">
        <div className="borders">
          <Main />
          {/* <FileUpload/> */}
        </div>
      </div>
    </div>
  );
}

export default App;
