import React from 'react';
import ConversionHistoryList from "./conversion-history-list";

const ConversionHistory = () => {
  return (
    <section className="conversion-history">
      <h1 className="conversion-history__header">История конвертации</h1>
      <ConversionHistoryList/>
      <button className="conversion-history__button">Очистить историю</button>
    </section>
  );
};

ConversionHistory.displayName = `ConversionHistory`;

export default ConversionHistory;
