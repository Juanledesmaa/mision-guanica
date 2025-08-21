import '../styles/App.scss';
import { useState, useEffect } from 'react';

import Banner from './Banner/Banner';
import NavigationBar from './NavigationBar/NavigationBar';
import Introduction from './Introduction/Introduction';
import Services from './About/Services';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import JsonData from '../data/data.json';


const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div className="App">
      <div className="text-center">
        <NavigationBar />
        <Banner />
        <Introduction />
        <Services data={landingPageData.Services} />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;