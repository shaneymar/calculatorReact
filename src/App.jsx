import { useState } from 'react'
import './App.css';
import {evaluate} from 'mathjs'

function App() {
  const [input,setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick =(value) => {
    setInput((prev) => prev + value)
  }

  const handleClear =() =>{
    setInput('');
    setResult('');
  }

  const handleCalculate = () => {
    try{
      if(input.trim === ''){
        setResult('Error');
        return;
      }

      const output = evaluate(input);

      if(isNaN(output)){
        setResult('NaN')
      }
      else if(!isFinite(output)){
        setResult('Infinity')
      }
      else{
        setResult(output.toString());
      }

    }
    catch(err){
      console.log(err);
      setResult('Error');
    }
  }
  return (
    <div style={{backgroundColor:'tomato', padding:'20px',borderRadius:'12px'}}>
      <h1 style={{fontSize:'28px'}}>React Calculator</h1>
      <input type="text" 
      value={input}
      style={{
        marginBottom:'4px',
        width:'280px',
        height:'56px',
        fontSize:'20px',
        padding:'4px',
        borderRadius:'12px'
      }}
      />
      <div>{result}</div>

      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(4,60px)',
        gap:'10px',
        justifyContent:'center',
        marginTop:'20px',
      }}>
      <button onClick={()=> handleClick('7')}>7</button>
      <button onClick={()=> handleClick('8')}>8</button>
      <button onClick={()=> handleClick('9')}>9</button>
      <button onClick={()=> handleClick('+')}>+</button>

      <button onClick={()=> handleClick('4')}>4</button>
      <button onClick={()=> handleClick('5')}>5</button>
      <button onClick={()=> handleClick('6')}>6</button>
      <button onClick={()=> handleClick('-')}>-</button>

      <button onClick={()=> handleClick('1')}>1</button>
      <button onClick={()=> handleClick('2')}>2</button>
      <button onClick={()=> handleClick('3')}>3</button>
      <button onClick={()=> handleClick('*')}>*</button>

      <button onClick={handleClear}>C</button>
      <button onClick={()=> handleClick('0')}>0</button>
      <button onClick={handleCalculate}>=</button>
      <button onClick={()=> handleClick('/')}>/</button>
      </div>
    </div>
  )
}

export default App
