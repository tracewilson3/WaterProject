import { useState } from 'react'

import './App.css'
import ProjectList from './ProjectList'
import CookieConsent, { Cookies } from "react-cookie-consent";
import Fingerprint from './Fingerprint';

function App() {
  

  return (
    <>
      <ProjectList />
      <CookieConsent>This website uses cookies to enhance the user experience. </CookieConsent>
      <Fingerprint />
    </>
  )
}

export default App
