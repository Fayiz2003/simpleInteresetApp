import { TextField,Stack,Button } from '@mui/material';
import './App.css'
import { useState } from 'react';

function App() {

  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const [intrest,setIntrest] = useState(0)

  const [isPrincipleInvalid,setIsprincipleInvalid] = useState(false)
  const [isRateInvalid,setIsRateInvalid] = useState(false)
  const [isYearInvalid,setIsYearInvalid] = useState(false)

  //input validation function
  const validInput = (inputTag) =>{
  //object destructuring , const {key1,key2...} = object-name    // used to avoid object.key method
    const {name,value} = inputTag
    console.log(name,value);
    // console.log(!!value.match(/^[0-9]*?[0-9]+$/));             or
    console.log(!!value.match(/^\d*\.?\d+$/));
    if(name=="principle"){
      setPrinciple(value)
      !!value.match(/^\d*\.?\d+$/) ? setIsprincipleInvalid(false) : setIsprincipleInvalid(true)
    }else if(name=="rate"){
      setRate(value)
      !!value.match(/^\d*\.?\d+$/) ? setIsRateInvalid(false) : setIsRateInvalid(true)
    }else if(name=="year"){
      setYear(value)
      !!value.match(/^\d*?\d+$/) ? setIsYearInvalid(false) : setIsYearInvalid(true)
    }
  }

  const handleCalculate = (e) =>{
    e.preventDefault()
    console.log("inside handleCalculate function");
    if(principle && rate && year){
      //calculate
      setIntrest(principle*rate*year/100)
    }else{
      alert("please fill the form completely!!!")
    }
  }

  const resetCalculate = ()=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setIntrest(0)
    setIsprincipleInvalid(false)
    setIsRateInvalid(false)
    setIsYearInvalid(false)
  }

  return (
    <div style={{height:'100vh',width:'100%'}} className='d-flex justify-content-center align-items-center bg-dark'>
       <div style={{width:'600px'}} className='bg-light rounded p-5'>
       <h3>Simple Interest Calculator</h3>
       <p>Calculate youe simple intrest easier</p>
       <div className='d-flex flex-column text-light justify-content-center align-items-center bg-warning shadow p-3'>
        <h1>$ {intrest}</h1>
        <p className='fw-bolder'>Total simple intrest</p>
       </div>
       <form className="mt-5">
        <div className="mb-3">
        <TextField value={principle || ""} onChange={e=>validInput(e.target)} name='principle' id="outlined-basic" className='w-100' label="$ Principle Amount" variant="outlined" />
        </div>
        {
          isPrincipleInvalid &&
           <div className='text-danger fw-bolder mb-3'>Invalid Principle Amount</div>
        }
        <div className="mb-3">
        <TextField value={rate || ""} onChange={e=>validInput(e.target)} name='rate' id="outlined-basic1" className='w-100' label="Rate of intrest (p.a) %" variant="outlined" />
        </div>
        {
          isRateInvalid &&
          <div className='text-danger fw-bolder mb-3'>Invalid Rate</div>
        }
        <div className="mb-3">
        <TextField value={year || ""} onChange={e=>validInput(e.target)} name='year' id="outlined-basic2" className='w-100' label="Time period (Yr)" variant="outlined" />
        </div>
        {
          isYearInvalid &&
          <div className='text-danger fw-bolder mb-3'>Invalid Year</div>
        }
       </form>
       <Stack direction="row" spacing={2}>
          <Button disabled={isPrincipleInvalid || isRateInvalid || isYearInvalid} type='submit'  onClick={handleCalculate} style={{width:"50%",height:"70px"}} className='bg-dark' variant="contained">Calculate</Button>
          <Button onClick={resetCalculate} style={{width:"50%",height:"70px"}} variant="outlined">Reset</Button>
       </Stack>
       </div>
    </div>
  )
}


export default App
