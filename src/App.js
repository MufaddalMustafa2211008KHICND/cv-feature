import logo from './logo.svg';
import './App.css';
import PdfComponent from './components/PdfComponent';
import PdfFile from './components/PdfFile';
import { PDFDownloadLink } from '@react-pdf/renderer';

function App() {
  return (
    <div className="App">
      <PDFDownloadLink document={<PdfFile />} filename="FORM">
      {({loading}) => (loading ? <button>Loading Document...</button> : <button>Download</button> )}
      </PDFDownloadLink>
      {/* <div>
        <PdfFile/>
      </div> */}
    </div>
  );
}

export default App;
