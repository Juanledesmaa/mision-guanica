import '../styles/App.scss';
import { useState, useEffect } from 'react';

import Banner from './Banner/Banner';
import NavigationBar from './NavigationBar/NavigationBar';
import Introduction from './Introduction/Introduction';
import Churches from './About/Churches';
import Contact from './Contact/Contact';
import Colaboradores from './Colaboradores/Colaboradores';
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
        <Churches data={landingPageData.Churches} />
        <Contact />
        <Colaboradores />
        <Footer />
      </div>
    </div>
  );
};

export default App;