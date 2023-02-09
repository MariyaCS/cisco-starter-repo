import './App.css';
import Banner from './components/Banner';
import Gallery from './components/Gallery'

function App() {
  return (
    <div>
      <Banner />
      <div class="gallery">
        <Gallery title='Public IP' metricData='000.00.000.000'/>
        <Gallery title='Latency metrics'/>
        <Gallery title='Metric 1'/>
        <Gallery title='Metric 2'/>
        <Gallery title='Metric 3'/>
        <Gallery title='Metric 4'/>
      </div>
    </div>
  );
}

export default App;
