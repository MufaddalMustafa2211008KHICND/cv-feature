import React from "react";
import img from './images/image.png'
import { Page, Text, Document, StyleSheet, Image } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
  },
  value: {
    fontSize: 12,
    marginBottom: 10,
  },
  image: {
    width: '30%',
    height:"20%",
    padding: 10,
  },
});

const ResumeGenerator = ({
  personalData,
  academicData,
  workData,
  skillsData,
  certificatesData,
}) => {
  return (
    <Document>
      <Page style={styles.page}>
        {/* ***********************Personal Information******************/}
        <Text style={styles.title}>personal Information</Text>
        <Image style={styles.image} src={img} />
        <Text style={styles.section}>
          <Text style={styles.label}>First Name:</Text>
          <Text style={styles.value}>{personalData.firstName}</Text>
          <Text style={styles.label}>LastName:</Text>
          <Text style={styles.value}>{personalData.lastName}</Text>
          <Text style={styles.label}>Date Of Birth:</Text>
          <Text style={styles.value}>{personalData.dateOfBirth}</Text>
          <Text style={styles.label}>Gender:</Text>
          <Text style={styles.value}>{personalData.gender}</Text>
        </Text>

                {/* ***********************Academic Information******************/}
        <Text style={styles.title}>Academic Information</Text>
        <Text style={styles.section}>
          {academicData.map((data) => {
            return <>
              <Text style={styles.label}>Degree Title:</Text>
              <Text style={styles.value}>{data.title}</Text>
              <Text style={styles.label}>Current Degree:</Text>
              <Text style={styles.value}>{data.currentDegree}</Text>
            </>;
          })}
        </Text>
        {/* ***********************Work Information******************/}
        <Text style={styles.title}>Work Information</Text>
        <Text style={styles.section}>
          {workData.map((data) => {
            return <>
              <Text style={styles.label}>Company:</Text>
              <Text style={styles.value}>{data.company}</Text>
              <Text style={styles.label}>Job Title:</Text>
              <Text style={styles.value}>{data.jobTitle}</Text>
            </>;
          })}
        </Text>
        {/* ***********************Skills Information******************/}

        <Text style={styles.title}>Skills Information</Text>
        <Text style={styles.section}>
          {skillsData.map((data) => {
            return <>
              <Text style={styles.label}>skill:</Text>
              <Text style={styles.value}>{data.skill}</Text>
              <Text style={styles.label}>proficiency:</Text>
              <Text style={styles.value}>{data.proficiency}</Text>
            </>;
          })}
        </Text>

        {/* ***********************Certificate Information******************/}

        {/* <Text style={styles.title}>Certificate Information</Text>
        <Text style={styles.section}>
          {skillsData.map((data) => {
            return <>
              <Text style={styles.label}>certificate Title:</Text>
              <Text style={styles.value}>{data.title}</Text>
              <Text style={styles.label}>Category:</Text>
              <Text style={styles.value}>{data.category}</Text>
            </>;
          })}
        </Text> */}
      </Page>
    </Document>
  );
};

export default ResumeGenerator;
