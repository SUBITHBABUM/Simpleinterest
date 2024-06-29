import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() 
{
const[principle,setprinciple] = useState(0)
const[rate,setrate]=useState(0)
const[year,setyear]=useState(0)
const[interest,setinterest]=useState(0)
const[pr,spr]=useState(true)
const[r,sr]=useState(true)
const[y,sy]=useState(true)

function validate(e) {
const nam =e.target.name
const value=e.target.value  
console.log(nam,value);
if(!!value.match(/^[0-9]*$/)){
  if(nam=='pee'){
    spr(true)
    setprinciple(value)
  }else if(nam=='ree'){
    sr(true)
setrate(value)
  }else if(nam=='yee') {
    sy(true)
    setyear(value)
  }
  }else{
    if(nam=='pee'){
      spr(false)
      setprinciple(value)
      
    }else if(nam=='ree'){
      sr(false)
      setrate(value)
    
    }else if(nam=='yee'){
      sy(false)
      setyear(value)
  }
}
}
const rese=()=>{
  setprinciple(0),
  setrate(0),
  setyear(0),
spr(true),
sy(true),
sr(true)
}

function Calculate(e){
e.preventDefault()
if(principle=='' || rate=='' || year==''){
  alert('please fill the form completely')
}else{
  setinterest(((principle*rate*year)/100))
}

}

  return( 
    <>
<div style={{backgroundColor:'black',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
<div style={{backgroundColor:'white',width:'500px',borderRadius:'30px',height:'auto'}} className='p-4'>
<h1>Simple Interest</h1>
<p>Caluculate your simple interest Easily</p>
<div style={{backgroundColor:'orange',height:'150px',borderRadius:'20px',display:'flex',justifyContent:'center',alignItems:'center'}} className='p-4 mt-5 shadow flex-column '>
<h1>{interest}</h1>
<p>Total Simple Interest</p>
</div>
<form onSubmit={Calculate} className='mt-5'>
  
    <div className="mb-3 ">
    <TextField id="outlined-basic"value={principle||""} label="Principle Amount" variant="outlined" className='w-100' onChange={(e)=>validate(e)}  name='pee'/>
  {!pr &&
    <p>*invalid</p>
    }                                          
  </div>
  <div className="mb-3 ">
    <TextField id="outlined-basic" value={rate||""} label="rate" variant="outlined" className='w-100' onChange={(e)=>validate(e)} name='ree' />
  {!r &&
    <p>*invalid</p>
    }
  </div>
    <div className="mb-3">
    
    <TextField id="outlined-basic" value={year||""} label="Year" variant="outlined" className='w-100' onChange={(e)=>validate(e)} name='yee'  />
    {!y &&
    <p>*invalid</p>}
    </div>
 
  <div style={{padding:'0px',display:'flex',justifyContent:'distance-between'}}  className='justify-content-between' >
  <Button variant="contained" color='success' style={{width:'200px' , padding:'15px'}} disabled={pr && r && y ?false:true} type='submit'>CALCULATE</Button>
  <Button variant="outlined" color='primary' style={{width:'200px' , padding:'15px'}} onClick={rese}>RESET</Button>
  </div>
  </form>
</div>

</div>

    </>
  )
}
export default App
