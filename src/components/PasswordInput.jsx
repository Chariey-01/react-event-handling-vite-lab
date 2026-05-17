// Code PasswordInput Component Here

function PasswordInput (){

    function handleChange(event){
        console.log("Entered password: ", event.target.value);
    }
    return(
       <input type="password" 
       onChange={handleChange}
        placeholder="Enter your password" />  
    )
}

export default PasswordInput;
/*
  PasswordInput Component
  ------------------------
  Handles password user input.

  Connected To:
  - App Component

  Responsibilities:
  - Render password input field
  - Detect typing activity
  - Trigger security-related logging
*/
