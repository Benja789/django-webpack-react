import React, {useState} from 'react';

const Contador = () => {
    const [numero, setNumero] = useState(0);
    const aumentar =()=>{
        setNumero(numero +1)
    }
    return (  
        <div>
            <h1>Valor de contador</h1>
            <p>Numero = {numero}</p>
            <button onClick = {aumentar}>Aumentar </button>
        </div>
    );

}
 
export default Contador;