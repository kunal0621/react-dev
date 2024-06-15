import React from "react";
import { Document, Page, Text, View, PDFViewer } from '@react-pdf/renderer';
import styles from "./styles";

export default HeaderSection = (headerData) => {
    <Document>
        <Page size="A4" style= {styles.Page}>
            <View style={styles.header_container}>
                <Text style={styles.name_text}>
                    JaiRam Travels
                </Text>
            </View>
        </Page>
    </Document>
}