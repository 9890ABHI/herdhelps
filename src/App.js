
import './App.css';
import DownloadSection from './components/DownloadSection';
import FeatureOne from './components/FeatureOne';
import FeatureTwo from './components/FeatureTwo';
import Footer from './components/Footer';
import Header from './components/Header';
import VideoSection from './components/VideoSection';
import Slider from './components/Slider';

function App() {
  return (
    <>
   <div className="flex flex-col items-center justify-center  pt-[60px] ">
      <Header/>
      <Slider/>
      <FeatureOne/>
      <FeatureTwo/>
      <VideoSection/>
      <DownloadSection/>
      <Footer/>
   </div>
    </>
  );
}

export default App;
