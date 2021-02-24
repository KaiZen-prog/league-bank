import React from 'react';

const ConversionHistoryItem = ({date, inputAmount, inputCurrency, outputAmount, outputCurrency}) => {
  return (
    <>
      <li className="conversion-history__item">
        <p className="conversion-history__date">{date}</p>
        <div className="conversion-history__container">
          <p className="conversion-history__before">{inputAmount} {inputCurrency}</p>
          <p className="conversion-history__after">{outputAmount} {outputCurrency}</p>
        </div>
      </li>
    </>
  );
};

ConversionHistoryItem.displayName = `ConversionHistoryItem`;

export default ConversionHistoryItem;
