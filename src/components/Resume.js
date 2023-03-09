import React from "react";
import styles from "./resume.module.css";
// import styles from "../CandidateAcademicInfo/CandidateAcademicInfo.module.css";
export default function Resume() {
  const resumeData = {
    // PERSONAL INFO
    firstName: "Samara",
    lastName: "Mohsin",
    gender: "Female",
    birthDate: "2000-01-01",
    CNIC: 776765654,
    maritalStatus: "Single",
    email: "samara@example.com",
    city: "KHI",
    contactNumber: "555-555-5555",
    address: "123 Main St, Anytown USA",
    linkedIn: "DFBSBFSB",
    //EDUCATIONA INFO
    education: [
      {
        id: 1,
        Qualification: "Bechlors",
        degreeTitle: "Bachelor of Science in Computer Science",
        Institute: "University of Anytown",
        DegreeInProgress: "No",
        CommpletionDate: "September 2011",
        cgpa: 3.5,
        finaYearProject: "AR Based Android App",
      },
    ],
    // WORK EXPERIENCE
    workExperience: [
      {
        id: 1,
        company: "Acme Corp",
        startDate: "January 2018",
        currentlyWorking: "Yes",
        endDate: "Present",
        jobTitle: "Full Stack Developer",
        jobType: "Full time",
      },
      {
        id: 1,
        company: "Beta Inc",
        startDate: "January 2018",
        currentlyWorking: "Yes",
        endDate: "Present",
        jobTitle: "Front-end Developer",
        jobType: "Full time",
      },
    ],
    // SKILLS
    skills: [
      {
        id: 1,
        name: "JavaScript",
        level: "Advanced",
      },
      {
        id: 2,
        name: "React",
        level: "Intermediate",
      },
      {
        id: 3,
        name: "Node.js",
        level: "Intermediate",
      },
      {
        id: 4,
        name: "HTML",
        level: "Expert",
      },
      {
        id: 5,
        name: "CSS",
        level: "Expert",
      },
    ],
  };
  console.log(resumeData.skills);
  return (
    <div className="cv">
      <h1>
        {resumeData.firstName} {resumeData.lastName}
      </h1>
      <div className={styles.header}>
        <p>
          {resumeData.gender} {resumeData.maritalStatus}
        </p>
        {/* <p>Date Of Birth: {resumeData.birthDate} </p> */}
        <p>
          {resumeData.email} | {resumeData.contactNumber}
        </p>
        <p>
          {resumeData.address} {resumeData.linkedIn}
        </p>
      </div>

      <hr />

      <h2>EDUCATION</h2>
      {resumeData.education.map((edu, index) => (
        <div key={index}>
          <h3>{edu.degreeTitle}</h3>
          <h4>{edu.Institute}</h4>
          <p>{edu.DegreeInProgress}</p>
          <p>{edu.CommpletionDate}</p>
        </div>
      ))}

      <hr />
      <h2>Experience</h2>
      {resumeData.workExperience.map((exp, index) => (
        <div key={index}>
          <h3>{exp.company}</h3>
          <p>
            {exp.jobTitle} | {exp.jobType}
          </p>
          <p>{exp.startDate}</p>
          <p>{exp.currentlyWorking}</p>
          <p>{exp.endDate}</p>
        </div>
      ))}

      <h2>Skills</h2>
      {resumeData.skills.map((skill, index) => (
        <li key={index}>
          <p>
            {skill.name} {skill.level}
          </p>
        </li>
      ))}
    </div>
  );
}
