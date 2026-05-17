// Code PasswordInput Component Here

function PasswordInput (){

    function handleChange(event){
        console.log("Entering password...");
    }
    return(
       <input type="password" 
       onChange={handleChange}
        />  
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
