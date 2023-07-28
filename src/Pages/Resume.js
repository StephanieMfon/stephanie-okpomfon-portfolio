import React from "react";
import {pdfjs,Document,Page} from 'react-pdf'
import {useState, useEffect,useRef} from 'react'
import pdf from '../assets/pdf/Resume.pdf'
import "react-pdf/dist/esm/Page/TextLayer.css";
import { StyleSheet } from "@react-pdf/renderer";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const pdfWrapper = useRef(null);
  const [pdfPageWidth, setPdfPageWidth] = useState(2000 );

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(()=>{
      setPdfPageWidth(
          pdfWrapper.current?.getBoundingClientRect().width || null,
      );
  },[]);

  const onDocumentLoadSuccess=({numPages})=>{
      setNumPages(numPages);
      setPageNumber(1);
  }

  
// set to a different page
const changePage = (offset) => {
  setPageNumber((prevPageNumber) => prevPageNumber + offset);
};

// go to the previous page
const previousPage = () => {
  changePage(-1);
};

// go to the next page
const nextPage = () => {
  changePage(1);
};
 

  return (
    <>
        <main className="container mx-auto max-width pt-10">

   <div className="flex justify-center items-center flex-col">
   <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess} >
      <Page
      width={985} 
      className="pdf-page" // Add a class name to the Page component
      pageNumber={pageNumber} 
      renderTextLayer={false}
      height={700}
      />
    </Document>
    <div>
    <p>
      {/* Page {pageNumber} of {numPages} */}
    </p>
    <button  
         className="resume-button rounded mr-2 mt-6"
 type="button" disabled={pageNumber <= 1} onClick={previousPage}>
        Previous
      </button>
      <button
      className="resume-button rounded"
        type="button"
        disabled={pageNumber >= numPages}
        onClick={nextPage}
      >
        Next
      </button>

    </div>
    <button className="flex items-center download-button mt-2 mb-3 rounded">
    <svg stroke="currentColor" fill="#fff" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path></svg>
    <a href={pdf} className="ml-2" download>Download Resume.pdf</a>
    </button>
   </div>
      </main>
    </>
  );
}

export default Resume;




{/* <main className="container mx-auto max-width section"> */}
    //   <h1 className="text-center text-2xl md:text-3xl lg:text-5xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
    //     For any questions please drop a mail
    //   </h1>
    //   <h3 className="text-center text-3xl md:text-4xl lg:text-4xl text-gradient font-semibold md:font-bold pt-5 md:pt-10 md:pb-6">
    //     <a href={`mailto:${email}`}>{email}</a>
    //   </h3>
    //   <span className="text-center text-content text-xl font-light block">
    //     or
    //   </span>
    //   <h3 className="text-center text-3xl md:text-4xl lg:text-4xl text-gradient font-semibold md:font-bold pt-2 md:py-6">
    //     <a href={`tel:${phone}`}>{phone}</a>
    //   </h3>
    // </main>