import { useState } from "react";

export default function StateLogin() {

  //const [email,setEmail] = useState('');
  //const [password,setPassword] = useState('');

  const [enteredValues,setEnteredValues] = useState({
    email:'',
    password:''
  });
  const [didedit , setDidEdit] = useState({
    email : false,
    password : false
  })

  const emailIsInvalid = didedit.email && !enteredValues.email.includes('@');

  function handleChange(event){
    event.preventDefault();
    console.log("from submitted");
    console.log(enteredValues);
  }
  function handleInputChange(identifier , event){
    event.preventDefault();
    setEnteredValues((prevEnteredValues)=>(
        {...prevEnteredValues,
        [identifier] : event.target.value}
        ))
    setDidEdit(prevDidEdit=>{
      return {
        ...prevDidEdit,
        [identifier] : false
      }
    })

  }
  function handleInputBlur(identifier){
    setDidEdit(prevDidEdit=>{
      return {
        ...prevDidEdit,
        [identifier] : true
      }
    })
  }
  return (
    <form onSubmit={handleChange}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
          id="email" 
          type="email" 
          name="email" 
          onBlur={()=>handleInputBlur('email')}
          onChange={(event)=>handleInputChange('email',event)}
          value={enteredValues.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
          id="password" 
          type="password" 
          name="password" 
          onBlur={()=>handleInputBlur('email')}
          onChange={(event)=>handleInputChange('password',event)}
          value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
