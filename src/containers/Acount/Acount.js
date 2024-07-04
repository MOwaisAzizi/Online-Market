import React from 'react'
import './Account.css'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import axios from 'axios'

class Acount extends React.Component {

state={
  form :{
    name:{
      elementType:'input',
    elementConfig:{
      type:'text',
      placeholder:'Name'
    },
    value:'',
    validation:{
      required:true
    },
    valid:false,
    isUsed : false
    },
    email:{
      elementType:'input',
    elementConfig:{
      type:'text',
      placeholder:'email'
    },
    value:'',
    validation:{
      required:true
    },
    valid:false,
    isUsed : false
    },
    password:{
      elementType:'input',
    elementConfig:{
      type:'password',
      placeholder:'password....'
    },
    value:'',
    validation:{
      required:true
    },
    valid:false,
    isUsed : false
    },
  },
  isboldInput :false
}

validationHandler (value,rules){
    let isvalid = ''
    if(rules.required){
      isvalid = value.trim() !==''
    }
    return isvalid
}

changeInputHandler(event,inputEl){
   const updatedForm = {
    ...this.state.form
   }
    let updateEl = updatedForm[inputEl]
     updateEl.value = event.target.value

   updateEl.valid = this.validationHandler(updateEl.value,updateEl.validation)//validation
    updateEl.isUsed = true

     updatedForm[inputEl] = updateEl
     this.setState({form:updatedForm})
}

sumbitHandler(event){
  event.preventDefault()
let formdata = {}
for (let item in this.state.form){
  formdata[item] = this.state.form[item].value
}

  axios.post('/',formdata).then(response=>{
    console.log(response);
    alert('Data Send')
  })
  .catch(err=>{
   alert(err)
  })
}

fakesubmit(){
  alert('submited!')
}

render(){
  const elementArray = []
  for(let item in this.state.form){
    elementArray.push({
      id:item,
      config: this.state.form[item]
    })
  }

  return (
<div className='form'>
  <h2>Account</h2>
    {/* <form onSubmit={this.sumbitHandler}> */}
    <form onSubmit={this.fakesubmit}>
  {    elementArray.map((item)=>{
         return (
        <Input key ={item.id}
        elementType ={item.config.elementType}
        elementConfig = {item.config.elementConfig}
        value={item.config.value}
        change={(event)=>this.changeInputHandler(event,item.id)}
        invalid={!item.config.valid}
        used = {item.config.isUsed}
        
        />
         )
      })}
      <Button btnType="success">Submite</Button>
    </form>
</div>
  )
}
}
export default Acount
