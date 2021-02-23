import React from 'react';
import ConversionHistoryItem from './conversion-history-item';

const ConversionHistoryList = () => {
  return (
    <ul className="conversion-history__list">
      <ConversionHistoryItem/>
      <ConversionHistoryItem/>
      <ConversionHistoryItem/>
      <ConversionHistoryItem/>
      <ConversionHistoryItem/>
      <ConversionHistoryItem/>
      <ConversionHistoryItem/>
      <ConversionHistoryItem/>
      <ConversionHistoryItem/>
      <ConversionHistoryItem/>
    </ul>
  );
};

ConversionHistoryList.displayName = `ConversionHistoryList`;

export default ConversionHistoryList;
