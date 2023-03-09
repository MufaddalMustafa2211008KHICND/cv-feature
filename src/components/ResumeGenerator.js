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

const ResumeGenerator = ({ name, email, phone, summary }) => {
  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.title}>Resume</Text>
        <Text style={styles.section}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{name}</Text>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{email}</Text>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{phone}</Text>
          </Text>
        <Text style={styles.section}>
          <Text style={styles.label}>Summary:</Text>
          <Text style={styles.value}>{summary}</Text>
        </Text>
      </Page>
    </Document>
  );
};

export default ResumeGenerator;
