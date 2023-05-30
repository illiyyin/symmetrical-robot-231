import React from 'react'

export default function Storage() {

  const handleLocalStorage = (value) => {
    localStorage.setItem("terserah", JSON.stringify(value))
  }
  const getValue = () => {
    const valiable = localStorage.getItem("terserah")

    console.log(JSON.parse(valiable))
  }
  const hapus = () => {
    localStorage.removeItem("terserah")
  }
  const handleSessionStorgae = (value) => {
    sessionStorage.setItem("terserah", JSON.stringify(value))
  }

  React.useEffect(() => {
    fetch("https://fe-screening.onrender.com/orders",
      {
        headers: {
          Authorization: "450b151bbd76e249024b3bd797a45e8a"
        }
      }).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err))
  }, [])

  const addOrder = () => {
    const body = {
      "consigneeName": "Jon",
      "consigneeAddress": "Something something street 22",
      "consigneeCity": "Singapore",
      "consigneeCountry": "SG",
      "consigneePostalCode": "12345",
      "consigneeProvince": "Singapore",
      "consigneeNumber": "12345678",
      "height": 1.2,
      "weight": 2.2,
      "length": 4.5,
      "width": 1,
      "paymentType": "cod"
    }

    fetch("https://fe-screening.onrender.com/orders",
      {
        method: "POST",
        headers: {
          Authorization: "450b151bbd76e249024b3bd797a45e8a"
        },
        body: JSON.stringify(body)
      }).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err))
  }
  return (
    <div>Storage

      <button onClick={() => handleLocalStorage({ nama: "ayam" })}>Add local storage</button>
      <button onClick={() => getValue()}>Get</button>
      <button onClick={() => hapus()}>Hapus</button>
      <button onClick={() => handleSessionStorgae("nama session baru")}>Add session storage</button>
      <button onClick={() => addOrder()}>Add Order</button>
    </div>
  )
}
