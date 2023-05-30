import React, { useState } from 'react'

export default function Form() {

  const [form, setForm] = useState({})
  
  const handler = (e) => {
    
    setForm(prev => ({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }

  return (
    <div>
      {JSON.stringify(form)}
      <input name="nama" value={form.nama} onChange={handler}/>
      <input name="alamat" value={form.alamat} onChange={handler}/>
      <input name="hobi" value={form.hobi} onChange={handler}/>
    </div>
  )
}
