import React from 'react';
import { Page, Text, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 12,
    marginBottom: 10,
  },
});

const ResumeGenerator = ({ personalData, academicData, workData, certificatesData }) => {
  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.title}>personal Information</Text>
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
        <Text style={styles.section}>
          <Text style={styles.label}>Summary:</Text>
          <Text style={styles.value}>{}</Text>
        </Text>
      </Page>
    </Document>
  );
};

export default ResumeGenerator;
