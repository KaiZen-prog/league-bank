import React from 'react';

const ConversionHistoryItem = () => {
  return (
    <>
      <li className="conversion-history__item">
        <p className="conversion-history__date">25.11.2020</p>
        <div className="conversion-history__container">
          <p className="conversion-history__before">1000 RUB</p>
          <p className="conversion-history__after">13,1234 USD</p>
        </div>
      </li>
    </>
  );
};

ConversionHistoryItem.displayName = `ConversionHistoryItem`;

export default ConversionHistoryItem;
