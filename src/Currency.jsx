import React,{useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

const BASE_URL = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_YuVedYyG59LEyaJcClOFTVbaA5vdPuAkirsxP6tr&currencies=EUR%2CUSD%2CTRY&base_currency=";


function Currency() {

    const [amount, setAmount] = useState();
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("TRY");
    const [result, setResult] = useState(0);

    const change = async() => {
        const response = await axios.get(BASE_URL+fromCurrency);
        const result= setResult((response.data.data[toCurrency] * amount).toFixed(4));
    }

    

  return (
    <div className='currency'>
        <div className="doviz">
            <input id='deneme' value={amount} onChange={(e) => setAmount(e.target.value)} type="number"/>
            <select onChange={(e) => setFromCurrency(e.target.value)} name="doviz">
                <option>USD</option>
                <option>EUR</option>
                <option>TRY</option>
            </select>
        </div>
        <div className="doviz">
            <input value={result} onChange={(e) => setResult(e.target.value)} type="number"/>
            <select onChange={(e) => setToCurrency(e.target.value)} name="doviz">
                <option>TRY</option>
                <option>USD</option>
                <option>EUR</option>
            </select>
        </div>

        <button onClick={change}>Çevir</button>
    </div>
  )
}

export default Currency