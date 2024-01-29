import { useRef, useState } from "react";

export default function Login() {

  const [emailIsInValid , setEmailIsInValid] = useState(false);
  const email = useRef();
  const password = useRef();

  function handleChange(event){
    event.preventDefault();
    //console.log("form submitted");
    const currEmail = email.current.value;
    const currPassword = password.current.value;

    const emailIsValid = currEmail.includes('@');
    if(!emailIsValid){
      setEmailIsInValid(true);
      
      return;
    }
    setEmailIsInValid(false)
    console.log("http from submitted");
    
    
    
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
          ref={email}
          />
          <div className="control-error">
            {emailIsInValid && <p>Please enter a valid email address</p> }
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
          id="password" 
          type="password" 
          name="password" 
          ref={password}
          
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
