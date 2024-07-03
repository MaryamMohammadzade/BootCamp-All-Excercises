import React, {useState} from 'react';


function Button(props){
   var [count, setCount]=useState(0)
   
   function increase(){
      setCount(count+1)
      console.log(count)
   }

return (
 <div className='box'>
    <h2>clicks: {count}</h2>
    <button className ={props.color} onClick={increase}>{props.name}</button>
 </div>

);
}

export default Button;