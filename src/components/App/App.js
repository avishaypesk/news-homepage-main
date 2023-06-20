import React from "react";
import Header from '../Header/Header';
import Main from "../Main/Main";

function App() {

  return (
    <div className="bg-grayish-blue min-h-screen">
      <div className="w-375 sm:w-1440 h-screen bg-off-white mx-auto">
        <div className="px-48 py-24">
          <Header />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;