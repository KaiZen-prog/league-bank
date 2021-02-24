import React from 'react';
import {connect} from 'react-redux';
import ConversionHistoryItem from "./conversion-history-item";
import {clearHistory} from "../store/actions";

const ConversionHistory = ({history, clearHistory}) => {
  return (
    <section className="conversion-history">
      <h2 className="conversion-history__header">История конвертации</h2>
      <ul className="conversion-history__list">
        {history.map((elem, i) => (
          <ConversionHistoryItem
            key = {i}
            date = {elem.date}
            inputAmount = {elem.currencyInput.amount}
            inputCurrency = {elem.currencyInput.type}
            outputAmount = {elem.currencyOutput.amount}
            outputCurrency = {elem.currencyOutput.type}
          />
        ))}
      </ul>
      <button className="conversion-history__button" onClick={clearHistory}>Очистить историю</button>
    </section>
  );
};

ConversionHistory.displayName = `ConversionHistory`;

const mapStateToProps = (state) => ({
  history: state.CONVERSION_HISTORY.history,
});

const mapDispatchToProps = (dispatch) => ({
  clearHistory() {
    dispatch(clearHistory());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ConversionHistory);
