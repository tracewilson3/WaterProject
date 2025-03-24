import { useState } from 'react'

import './App.css'
import ProjectList from './ProjectList'
import CookieConsent, { Cookies } from "react-cookie-consent";
import Fingerprint from './Fingerprint';
import CategoryFilter from './CategoryFilter';
import WelcomeBand from './WelcomeBand';

function App() {
  
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  return (
    <>
    <div className="container">
      <div className='row bg-primary text-white'>
        <WelcomeBand />
      </div>
      <div className="row">
        <div className="col-md-3"></div>
        <CategoryFilter 
        selectedCategories= {selectedCategories} 
        onCheckboxChange={setSelectedCategories} 
        />
      </div>
      <div className="col-md-9"></div>
      <ProjectList selectedCategories={selectedCategories}/>
    </div>
      
      
      
      {/* <CookieConsent>This website uses cookies to enhance the user experience. </CookieConsent> */}
      {/* <Fingerprint /> */}
    </>
  )
}

export default App
