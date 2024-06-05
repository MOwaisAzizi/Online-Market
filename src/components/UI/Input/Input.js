import React from 'react'
import './Input.css'

const Input = (props) => {

let inputClass = ['input-element']

if(props.invalid && props.used){
    inputClass.push('invalid')
}
let inputelement = null;
switch(props.inputtype){
    case 'input': inputelement =(
     <input className = {inputClass.join(' ')} {...props.elementConfig} value={props.value} onChange={props.change}/>)
    break;
    default:
    case 'input': inputelement = (
    <input className={inputClass.join(' ')} {...props.elementConfig} value={props.value} onChange={props.change}/>)
}

return <div className='input'>{inputelement}</div>
}

export default Input
