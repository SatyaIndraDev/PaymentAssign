import React from 'react';
import sid from './sid.pdf'; 

const PdfView = () => {
  return (
    <div>
      <h2>PDF View</h2>
      <iframe src={sid} width="100%" height="600px"></iframe>
    </div>
  );
};
export default PdfView;