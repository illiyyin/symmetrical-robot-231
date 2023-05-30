import React, { useState,useEffect } from 'react'

export default function InputColumn({ mahasiswa,finalVal,setFinalVal }) {
  const [inputVal1,setInputVal1]=useState("")
  const [inputVal2,setInputVal2]=useState("")
  const [inputVal3,setInputVal3]=useState("")
  const [inputVal4, setInputVal4] = useState("")
  
  useEffect(() => {
    setFinalVal({
      ...finalVal, [`mahasiswa_${mahasiswa}`]: {
      aspek_penilaian_1:inputVal1,
      aspek_penilaian_2:inputVal2,
      aspek_penilaian_3:inputVal3,
      aspek_penilaian_4:inputVal4,
    }})
  },[inputVal1,inputVal2,inputVal3,inputVal4])
  return (
    <div style={{display:'flex'}}>
      <p>mahasiswa {mahasiswa}</p>
      <input value={inputVal1} onChange={(e)=>setInputVal1(e.target.value)}/>
      <input value={inputVal2} onChange={(e)=>setInputVal2(e.target.value)}/>
      <input value={inputVal3} onChange={(e)=>setInputVal3(e.target.value)}/>
      <input value={inputVal4} onChange={(e)=>setInputVal4(e.target.value)}/>
    </div>
  )
}
