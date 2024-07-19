
import { useMemo, useState } from 'react';
import './App.css';

function App() {
  const [weight,setWeight]=useState(70);
  const [height,setHeight]=useState(180);

  function onWeightChange(event){
     setWeight(event.target.value)
  }

  function onHeightChange(event){
    setHeight(event.target.value)

  }
 const output=useMemo(()=>{
  const calculateheight=height/100;
  return  (weight/(calculateheight*calculateheight)).toFixed(1)
  

 },[weight,height])

  return (
    <>
    <main>
      <h1>BMI CALCULATOR</h1>

      <div className='input-section'>
        <p className='slider-output'>Weight: {weight} kg</p>
        <input type="range" step="1" onChange={onWeightChange} max="200" min="40" className='input-slider'/>

        <p className='slider-output'>Height: {height} cm</p>
        <input type="range" onChange={onHeightChange} step="1" max="220" min="140" className='input-slider'/>
      </div>
      <div className='output-section'>
        <p>Your BMI is </p>
        <p className='output'>
          {output}

        </p>
      </div>
    </main>
    
    
    </>
  );
}

export default App;
