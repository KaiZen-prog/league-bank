import React from "react";
import Header from "./header";
import Promo from "./promo";
import Converter from "./converter";
import ConversionHistory from "./conversion-history";
import Footer from "./footer";

const App = () => {
  return (
    <>
      <Header/>
      <main>
        <Promo/>
        <Converter/>
        <ConversionHistory/>
      </main>
      <Footer/>
    </>
  );
};

App.displayName = `App`;

export default App;
