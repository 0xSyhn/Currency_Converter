import {useId} from 'react'

function InputBox({
    label,                             //When creating multiple input box, it determines whether it's FROM or TO.
    amount,                            //Take the amount displayed to convert.
    onAmountChange,                    //To change the value of amount to check for any amount.
    onCurrencyChange,                  //Changing currency from the dropdown which will be displayed.
    currencyOptions = [],              //List of currencies in the dropdown.
    selectCurrency="inr",                    //Default currency and the currency name that will show up.
    amountDisable = false,             //required for production level application.
    currencyDisable = false,           //required for production level application.
    className = "",}) {
  
        const amountInputId = useId()
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className="w-1/2">
            <label className="text-black/40 mb-2 inline-block" htmlFor={amountInputId}>
                {label}
            </label>
            <input
               id = {amountInputId}
               className="outline-none w-full bg-transparent py-1.5"
               type="text"
               placeholder='Amount'
               disabled = {amountDisable}
               value={amount}
               onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
            <p className='text-black/40 mb-2 w-full'>Currency Type</p>
            <select
               className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
               value={selectCurrency}
               onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
               disabled = {currencyDisable}>
                {currencyOptions.map((currency) =>(
                    <option 
                    key = {currency}
                    value ={currency}>
                        {currency}
                    </option>
                ))}
               </select>
        </div>
    </div>
  )
}

export default InputBox