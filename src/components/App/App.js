import React from "react";
import Header from '../Header/Header';
import Main from "../Main/Main";

function App() {

  return (
    <div className="bg-grayish-blue max-h-screen ">
      <div className="px-4 lg:px-0 xl:w-1440 min-h-screen bg-off-white mx-auto">
        <div className="py-8 lg:py-0 lg:pt-20 lg:px-60">
          <Header />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;