import { useState } from 'react'
import '../App.css'
import PasswordInput from './PasswordInput'
import SubmitButton from './SubmitButton'

function App() {

  return (
    <div>
      <PasswordInput/>
      <SubmitButton/>
    </div>
  )
}

export default App
/*
  App Component
  ----------------
  Parent component of the application.

  Connected Components:
  - PasswordInput
  - SubmitButton

  Responsibilities:
  - Renders the overall application layout
  - Displays child components
*/