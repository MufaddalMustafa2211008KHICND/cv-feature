// import React, { useState } from 'react';
// import { PDFDownloadLink } from '@react-pdf/renderer';
// import ResumeGenerator from './components/ResumeGenerator';

// const App = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [summary, setSummary] = useState('');

//   const handleGenerate = () => {
//     const pdf = (
//       <ResumeGenerator
//         name={name}
//         email={email}
//         phone={phone}
//         summary={summary}
//       />
//     );
//     console.log(pdf);
//     return (
//       <PDFDownloadLink document={pdf} fileName='ResumeGenerator.pdf'>
//         {({ blob, url, loading, error }) =>
//           loading ? 'Loading document...' : 'Download now!'
//         }
//       </PDFDownloadLink>
//     );
//   };

//   return (
//     <div>
//       <input
//         type='text'
//         placeholder='Name'
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type='email'
//         placeholder='Email'
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
import ReactPDF, { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { useState } from "react";
import ResumeGenerator from "./components/ResumeGenerator";

function App() {
  const [showPDF, setShowPDF] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [summary, setSummary] = useState("");
  const [resumeData, setResumeData] = useState({});

  const handleGeneratePDF = () => {
    setResumeData({ name, email, phone, summary });
    setShowPDF(true);
  };
  return (
    <div className="App">
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <textarea
            placeholder="Summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          ></textarea>
          <br />
          {/* <button onClick={handleGeneratePDF}>Generate PDF</button> */}
        </div>
      {showPDF && (
        <PDFDownloadLink
          document={
            <ResumeGenerator
              name={name}
              email={email}
              phone={phone}
              summary={summary}
            />
          }
          fileName="MyResume.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink>
      )}
    </div>
  );
}
export default App;
