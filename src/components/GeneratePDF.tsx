import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const GeneratePDF = ({ formData, formDataStep2 }) => {
  return (
    <PDFViewer width="1000" height="600">
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>{`Option 1: ${formData.option1}`}</Text>
            {/* Add more data */}
          </View>
          <View style={styles.section}>
            <Text>{`Option 11: ${formDataStep2.option11}`}</Text>
            {/* Add more data */}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default GeneratePDF;