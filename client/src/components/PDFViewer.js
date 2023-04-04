import React, { useState} from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

const PDFViewer = ({url}) => {
    const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	const goToPrevPage = () =>
		setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

	const goToNextPage = () =>
		setPageNumber(
			pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
	);

  return (
    <div className='mt-[30px]'>
        <div className='h-[500px] overflow-scroll'>
            <Document
                file={url}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
        </div>

        <nav className='flex flex-col items-center mt-[30px]'>
            <div>
                <button className='bg-black text-white px-3 py-2 hover:bg-slate-800 rounded-md' onClick={goToPrevPage}>Prev</button>
                <button className='bg-black text-white px-3 py-2 hover:bg-slate-800 rounded-md ml-4' onClick={goToNextPage}>Next</button>
            </div>
            <p className='mt-5'>
                Page {pageNumber} of {numPages}
            </p>
        </nav>
    </div>
  )
}

export default PDFViewer