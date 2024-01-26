import {useState} from 'react'

function Button() {

    const [temperature, setTemperature] = useState(0)

    function handleClick(){
      console.log("1 celcius eklendi");
      setTemperature(temperature+1)
      console.log(temperature);
    }

  return (
    <>
    <h1>SICAKLIK DÖNÜŞTÜRÜCÜ</h1>
      <br />
      <h3>Değer giriniz: {temperature} 'C</h3>
      <br />
      <button onClick={handleClick}>Celsius</button>
      <hr />
      <button onClick={()=>setTemperature(temperature +34)}>Fahrenheit</button>
      <hr />
      <button onClick={()=>setTemperature(temperature +273)}>Kelvin</button>
      <hr />
      <button onClick={()=>setTemperature(temperature -temperature)}>SIFIRLA</button>
      </>
  )
}

export default Button
