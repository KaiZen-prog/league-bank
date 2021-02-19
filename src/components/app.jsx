import React from 'react';
import Header from './header';
import Main from './main';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  );
};

App.displayName = `App`;

export default App;
