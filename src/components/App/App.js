import React from "react";
import Header from '../Header/Header';
import Main from "../Main/Main";

function App() {

  return (
    <div className="bg-grayish-blue min-h-screen ">
      <div className="px-4 lg:px-0 w-full lg:w-1440 min-h-screen bg-off-white mx-auto">
        <div className="py-8 lg:px-48 lg:py-16">
          <Header />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;