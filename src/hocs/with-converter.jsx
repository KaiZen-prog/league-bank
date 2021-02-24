import {connect} from 'react-redux';
import {addConversion, changeDate} from '../store/actions';
import moment from 'moment';
import React from 'react';
import DatePicker from 'react-datepicker';
import {loadExchangeRate} from '../store/api-actions';
import '../../node_modules/react-datepicker/dist/react-datepicker.css';
import {FormFields, Currencies, FLOAT_COEFFICIENT} from "../const";
import Calendar from "../components/calendar";

export const withConverter = (Component) => {
  class WithCurrencyConverter extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        exchangeRate: props.exchangeRate,
        currencyInput: {
          type: Currencies.RUB,
          amount: ``,
        },
        currencyOutput: {
          type: Currencies.USD,
          amount: ``,
        },
      }

      this.submitHandler = this.submitHandler.bind(this);
      this.typeChangeHandler = this.typeChangeHandler.bind(this);
      this.valueConversion = this.valueConversion.bind(this);
      this.USDconversion = this.USDconversion.bind(this);
      this.conversionToUSD = this.conversionToUSD.bind(this);
      this.valueChangeHandler = this.valueChangeHandler.bind(this);
      this.dateChangeHandler = this.dateChangeHandler.bind(this);
      this.exchangeRateUpdate = this.exchangeRateUpdate.bind(this);
    }

    submitHandler(evt) {
      evt.preventDefault();
      this.props.addTransaction({
        date: moment(this.props.date).format(`DD.MM.YYYY`),
        currencyInput: this.state.currencyInput,
        currencyOutput: this.state.currencyOutput,
      });
    }

    typeChangeHandler(evt) {
      const {name, value} = evt.target;

      if (value === this.state.currencyInput.type || value === this.state.currencyOutput.type) {
        let inputAmount = this.state.currencyInput.amount;

        switch (name) {
          case FormFields.INPUT: {
            this.setState({
              currencyInput: {
                type: value,
                amount: inputAmount
              },
              currencyOutput: {
                type: value,
                amount: inputAmount
              },
            });
            return;
          }

          case FormFields.OUTPUT: {
            this.setState({
              currencyOutput: {
                type: value,
                amount: this.state.currencyInput.amount
              },
            });
            return;
          }
        }
      }

      this.setState({
          [name]: Object.assign(
            {},
            this.state[name],
            {type: value}
          )
        },
        () => {
          this.valueConversion(FormFields.INPUT, this.state[FormFields.INPUT].amount);
        }
      );
    }

    USDconversion(name, value) {
      return Math.floor((value * this.state.exchangeRate[this.state[name].type]) * FLOAT_COEFFICIENT) / FLOAT_COEFFICIENT;
    }

    conversionToUSD(name, value) {
      return Math.floor((value / this.state.exchangeRate[this.state[name].type]) * FLOAT_COEFFICIENT) / FLOAT_COEFFICIENT;
    }

    valueConversion(name, value) {
      if (name === FormFields.INPUT) {
        this.entryField = FormFields.INPUT;
        this.outputField = FormFields.OUTPUT;
      } else {
        this.entryField = FormFields.OUTPUT;
        this.outputField = FormFields.INPUT;
      }

      if (this.state[this.entryField].type === Currencies.USD) {
        this.setState({[this.outputField]: Object.assign(
            {},
            this.state[this.outputField],
            {amount: this.USDconversion(this.outputField, value)}
          )});
        return;
      } else if (this.state[this.outputField].type === Currencies.USD) {
        this.setState({[this.outputField]: Object.assign(
            {},
            this.state[this.outputField],
            {amount: this.conversionToUSD(this.entryField, value)}
          )});
        return;
      }

      const intermediate = this.conversionToUSD(this.entryField, value);
      const result = this.USDconversion(this.outputField, intermediate);

      this.setState({[this.outputField]: Object.assign(
          {},
          this.state[this.outputField],
          {amount: result}
        )});
    }

    valueChangeHandler(evt) {
      const {name, value} = evt.target;

      this.setState({[name]: Object.assign(
          {},
          this.state[name],
          {amount: Math.floor(value * FLOAT_COEFFICIENT) / FLOAT_COEFFICIENT}
        )});

      this.valueConversion(name, value);
    }

    exchangeRateUpdate() {
      this.setState({exchangeRate: this.props.exchangeRate}, () => {
        this.valueConversion(FormFields.INPUT, this.state[FormFields.INPUT].amount);
      })
    }

    dateChangeHandler(date) {
      const formatDate = moment(date).format(`YYYY-MM-DD`);
      this.props.changeDate(formatDate);
      this.props.loadExchangeRate(formatDate, () => {
        this.exchangeRateUpdate();
      });
    }

    render() {
      const state = this.state;

      return (
        <Component
          {...this.props}
          state={state}
          submitHandler={this.submitHandler}
          typeChangeHandler={this.typeChangeHandler}
          valueChangeHandler={this.valueChangeHandler}>
          <DatePicker
            selected={new Date(this.props.date)}
            minDate={new Date(moment().subtract(1, `week`))}
            maxDate={new Date()}
            onChange={date => this.dateChangeHandler(date)}
            dateFormat={`d.MM.yyyy`}
            customInput={<Calendar/>}
          />
        </Component>
      );
    }
  }

  const mapStateToProps = (state) => ({
    date: state.CONVERTER.date,
    exchangeRate: state.CONVERTER.exchangeRate,
  });

  const mapDispatchToProps = (dispatch) => ({
    addTransaction(transaction) {
      dispatch(addConversion(transaction));
    },

    changeDate(date) {
      dispatch(changeDate(date));
    },

    loadExchangeRate(date, callback) {
      dispatch(loadExchangeRate(date, callback));
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithCurrencyConverter);
}