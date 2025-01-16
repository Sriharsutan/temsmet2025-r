import React, { useState } from 'react';
import { PDFViewer, Document, Page, Text, StyleSheet } from '@react-pdf/renderer';
import { HeadingBar } from './SmallComps';

// Create styles for the PDF content
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#F3F4F6',
    padding: 20,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'center',
    color: '#1F2937',
  },
});

const Sponsorship = () => {
  return (
    <div className="sm:ml-32 sm:mr-32 sm:mt-10 sm:mb-10 p-6">
      <div className="text-left mb-6">
        <h1 className="font-bold sm:text-3xl text-2xl text-sky-700">Sponsorship Details:</h1>
        <HeadingBar/>
      </div>

      <iframe
        src="/Temsmet2025_Sponsorship_Brochure.pdf"
        className="w-full h-[800px] border border-gray-300 shadow-lg"
        title="Sponsorship Invitation PDF"
      />
    </div>
  );
};

export default Sponsorship;
