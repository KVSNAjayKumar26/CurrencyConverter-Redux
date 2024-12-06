import React from 'react'
import CurrencySelect from './CurrencySelect';

const CurrencyInput = ({
  amount,
  onAmountChange,
  currency,
  onCurrencyChange,
  currencyOptions
}) => {
  return (
    <div className='currency-input'>
      <input
      type='number'
      value={amount}
      onChange={(e) => onAmountChange(e.target.value)}
      />
     <CurrencySelect
     currency={currency}
     onCurrencyChange={onCurrencyChange}
     currencyOptions={currencyOptions}
     />
    </div>
  );
};

export default CurrencyInput;