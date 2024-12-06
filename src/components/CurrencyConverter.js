import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExchangeRates } from '../redux/reducers/CurrencySlice';
import CurrencyInput from './CurrencyInput';

const CurrencyConverter = () => {
  const dispatch = useDispatch();
  const { rates, status, error } = useSelector((state) => state.currency);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchExchangeRates());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (rates && fromCurrency && toCurrency) {
      const rate = rates[toCurrency] / rates[fromCurrency];
      setConvertedAmount((amount * rate).toFixed(2));
    }
  }, [amount, fromCurrency, toCurrency, rates])

  if (status === "loading") return <div>Loading exchange rates...</div>;
  if (status === "failed") return <div>Error: {error}</div>;
  return (
    <div className='currency-converter'>
      <h1>Currency Converter</h1>
      <CurrencyInput
      amount={amount}
      onAmountChange={setAmount}
      currency={fromCurrency}
      onCurrencyChange={setFromCurrency}
      currencyOptions={Object.keys(rates)}
      />
      <div>
        <span>To</span>
      </div>
      <CurrencyInput
      amount={convertedAmount}
      onAmountChange={setConvertedAmount}
      currency={toCurrency}
      onCurrencyChange={setToCurrency}
      currencyOptions={Object.keys(rates)}
      />
      <h2>
        {amount} {fromCurrency} = {convertedAmount} {toCurrency}
      </h2>
    </div>
  );
};

export default CurrencyConverter;