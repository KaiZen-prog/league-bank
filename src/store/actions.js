export const ActionType = {
  CHANGE_DATE: `CHANGE_DATE`,
  LOAD_EXCHANGE_RATE: `LOAD_EXCHANGE_RATE`,
  ADD_TRANSACTION: `ADD_CONVERSION`,
  CLEAR_HISTORY: `CLEAR_HISTORY`,
};

export const changeDate = (date) => ({
  type: ActionType.CHANGE_DATE,
  payload: (date),
});

export const loadExchangeRate = (exchangeRate) => ({
  type: ActionType.LOAD_EXCHANGE_RATE,
  payload: exchangeRate,
});

export const addConversion = (transaction) => ({
  type: ActionType.ADD_TRANSACTION,
  payload: transaction,
});

export const clearHistory = () => ({
  type: ActionType.CLEAR_HISTORY,
  payload: [],
});
