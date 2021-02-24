import {loadExchangeRate} from './actions';

const ID = `d07b14ca2bfd4e14afe52d782af853ca`;

const BASE_RATE = 1;

export const getExchangeRate = (date, callback = () => {}) => (dispatch, _getState, api) => (
  api.get(`historical/${date}.json?app_id=${ID}`)
    .then(({data}) => {
      dispatch(loadExchangeRate({
        USD: BASE_RATE,
        RUB: data.rates.RUB,
        EUR: data.rates.EUR,
        GBP: data.rates.GBP,
        CNY: data.rates.CNY,
      }))
    })
    .then(() => {
      callback()
    })
);
