
import './App.css';
import DownloadSection from './components/DownloadSection';
import FeatureOne from './components/FeatureOne';
import FeatureTwo from './components/FeatureTwo';
import Footer from './components/Footer';
import Header from './components/Header';
import VideoSection from './components/VideoSection';

function App() {
  return (
    <>
   <div className="flex flex-col items-center justify-center">
      <Header/>
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
