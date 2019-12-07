import React, { useState } from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<A/>, document.getElementById('root'));
function A() {
    const [n, setN] = useState(0);
    return (
        <>
           <button onClick={()=> {
               setN(n - 1)
           }}>-</button>
           <span style={{width:40,color:'red',display:'inline-block',textAlign:'center'}}>{n}</span>
           <button onClick={()=> {
               setN(n + 1)
           }}>+</button> 
        </>
    )
}