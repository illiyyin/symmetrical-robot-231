import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputColumn from "./component/InputColumn"
import Form from "./component/form"
import Storage from "./component/Storage"

function App() {
  const [val, setVal] = useState({
    mahasiswa_1: {
      aspek_penilaian_1: "",
      aspek_penilaian_2: "",
      aspek_penilaian_3: "",
      aspek_penilaian_4: "",
    },
    mahasiswa_2: {
      aspek_penilaian_1: "",
      aspek_penilaian_2: "",
      aspek_penilaian_3: "",
      aspek_penilaian_4: "",
    },
    mahasiswa_3: {
      aspek_penilaian_1: "",
      aspek_penilaian_2: "",
      aspek_penilaian_3: "",
      aspek_penilaian_4: "",
    },
    mahasiswa_4: {
      aspek_penilaian_1: "",
      aspek_penilaian_2: "",
      aspek_penilaian_3: "",
      aspek_penilaian_4: "",
    },
  })

  const changeVal = (rawData) => {
    const finalVal = {}
    console.log(rawData)
    for (const itemMahasiswa in rawData) {
      var i = Object.keys(rawData).indexOf(itemMahasiswa);
      finalVal.aspek_penilaian_1 = {
        ...finalVal.aspek_penilaian_1,
        [`nilai_mahasiswa_${i + 1}`]: rawData[itemMahasiswa].aspek_penilaian_1
      }
      finalVal.aspek_penilaian_2 = {
        ...finalVal.aspek_penilaian_2,
        [`nilai_mahasiswa_${i + 1}`]: rawData[itemMahasiswa].aspek_penilaian_2
      }
      finalVal.aspek_penilaian_3 = {
        ...finalVal.aspek_penilaian_3,
        [`nilai_mahasiswa_${i + 1}`]: rawData[itemMahasiswa].aspek_penilaian_3
      }
      finalVal.aspek_penilaian_4 = {
        ...finalVal.aspek_penilaian_4,
        [`nilai_mahasiswa_${i + 1}`]: rawData[itemMahasiswa].aspek_penilaian_4
      }
    }
    console.log(finalVal)
  }

  const testSpred = () => {
    const obj1 = {
      nama: "raihan",
      umur:23
    }
    const obj2 = {
      kaki: 'pendel',
      rambut:'hitam'
    }

    const baru = { ...obj1, ...obj2, propertyBaru: "ya ini datanya" }

    baru.hobi="data hobi"
    baru.nested={baruLagi:"data nested"}
    
    console.log(baru)
  }
  const testSpred2 = () => {
    const obj1 = [1,2,3]
    const obj2 = [9,4,7]

    const baru = [...obj1, { obj: "var obj" },...obj2]
    console.log(baru)
  }

  return (
    <>
      {/* {[1, 2, 3, 4].map(item => <InputColumn mahasiswa={item} key={item} setFinalVal={setVal} finalVal={val} />)}
      <button onClick={() => console.log(val)}>Save</button>
      <button onClick={() => changeVal(val)}>Change Val</button>
      <button onClick={testSpred}>Test Spred</button>
      <button onClick={testSpred2}>Test Spred2</button> */}
      {/* <pre>{JSON.stringify(val)}</pre> */}
      {/* <Form/> */}
      <Storage/>
    </>
  )
}

export default App
