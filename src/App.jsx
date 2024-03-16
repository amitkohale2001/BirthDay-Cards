import './Project Birthday/List.css'
import { useEffect, useState } from "react"
import User from "./Project Birthday/List"
const App = () => {
  const [data,setdata]= useState(User)
  return (
    <div className="outer">
      <div className='box'>
      <p className='p1'>{data.length} Birthday's are near</p>
      {
        data.map((item)=>{
          return(
            <div className='dtl'>
            <img className='img' src={item.Image} height={'80px'} width={'80px'} alt="" />
            <p>{item.name}</p>
            <br/>
            </div>
          )
        })
      }
      <button className='btn' onClick={()=>setdata([])}>CLEAR</button>
      </div>
    </div>

  )
}

export default App
