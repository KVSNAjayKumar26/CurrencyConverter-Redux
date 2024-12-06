import React from 'react'

const CurrencySelect = ({ currency, onCurrencyChange, currencyOptions }) => {
  return (
    <select
    value={currency}
    onChange={(e) => onCurrencyChange(e.target.value)}
    className='currency-select'
    >
      {currencyOptions.map((currencyCode) => (
        <option key={currencyCode} value={currencyCode}>
          {currencyCode}
        </option>
      ))}
    </select>
  );
};

export default CurrencySelect;