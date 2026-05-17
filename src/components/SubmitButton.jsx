// Code SubmitButton Component Here

function SubmitButton (){
    function handleEnter(){
        console.log("Mouse Entering");
    }
    function handleLeave(){
        console.log("Mouse Exiting");
    }
    return(
        <button onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
        >
            Submit Password
        </button>
    )
}

export default SubmitButton;
/*
  SubmitButton Component
  -----------------------
  Handles mouse interaction events.

  Connected To:
  - App Component

  Responsibilities:
  - Render submit button
  - Detect mouse hover activity
  - Detect mouse exit activity
*/