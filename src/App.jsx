import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState('inr');
  const [to, setTo] = useState('eur');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  return (
   <div 
   className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
   style={{backgroundImage : 'linear-gradient(to bottom,#071952,black)'}}
   >
   <div className='w-full'>
    <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/20'>
      <form
          onSubmit={(e) => {
            e.preventDefault();                   //you dont want the form to be submitted anyhere.
            convert();
          }}
      >
        <div className='w-full mb-1'>
          <InputBox
          label = "From"
          amount = {amount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setFrom(currency)}
          selectCurrency={from}
          onAmountChange={(amount) => setAmount(amount)}
           />
        </div>
        <div className='relative w-full h-0.5'>
          <button
          type = "button"
          className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
          onClick={swap}>
          swap
          </button>
        </div>
        <div className='w-full mb-4 mt-1'>
          <InputBox
            label = "To"
            amount = {convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisable
          />
        </div>
        <button type ="submit"
        className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
          Convert {from} to {to} 
        </button>
      </form>    
    </div>
   </div>

   </div>
  );
}


export default App
