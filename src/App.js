import ReactPDF, { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { useState, useEffect } from "react";
import ResumeGenerator from "./components/ResumeGenerator";

function App() {
  const [showPDF, setShowPDF] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [summary, setSummary] = useState("");
  
  const [personalData, setPersonalData] = useState({});
  const [academicData, setAcademicData] = useState([]);
  const [workData, setWorkData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);
  const [certificatesData, setCertificatesData] = useState([]);

  const [userId, setUserId] = useState(21);
  // const userId = sessionStorage.getItem("user_id");

  //**************************** APi Urls ********************************************//
  const BaseURL = `http://userprofileserviceelastic-env.eba-piepztun.ap-south-1.elasticbeanstalk.com`;
  const personalInfoUrl = `${BaseURL}/api/personal_information/users/${userId}`;
  const academicInfoUrl = `${BaseURL}/api/educational_information/user/${userId}`;
  const workInfoUrl = `${BaseURL}/api/work_experience/user/${userId}`;
  const skillsInfoUrl = `${BaseURL}/api/users/skills/${userId}`;
  const certificatesInfoUrl = `${BaseURL}/api/file/user/${userId}`;

  const fetchData = (url, setData) => {
    fetch(url)
      .then(async (response) => {
        const data = await response.json()
        console.log(data)
        setData(data)
      })
      .catch((error) => {
        console.log(error, "I caught this!")
      })
  }

  useEffect(() => {
    fetchData(personalInfoUrl, setPersonalData)
    fetchData(academicInfoUrl, setAcademicData)
    fetchData(workInfoUrl, setWorkData)
    fetchData(skillsInfoUrl, setSkillsData)
    fetchData(certificatesInfoUrl, setCertificatesData)

  }, []);
  console.log(personalData);

  const handleGeneratePDF = () => {
    setShowPDF(true);
  };
  return (
    <div className="App">
        {/* <div>
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
        {/* </div> */}
      {showPDF && (
        <PDFDownloadLink
          document={
            <ResumeGenerator
              personalData={personalData}
              academicData={academicData}
              workData={workData}
              certificatesData={certificatesData}
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
