import React from 'react';
import Converter from "./converter";
import ConversionHistory from "./conversion-history";
import Promo from "./promo";

const Main = () => {
  return (
    <main>
      <Promo/>
      <Converter/>
      <ConversionHistory/>
    </main>
  );
};

Main.displayName = `Main`;

export default Main;
