import React from 'react';
import Header from './header';
import Main from './main';
import Footer from "./footer";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
};

App.displayName = `App`;

export default App;
