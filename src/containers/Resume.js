import { useState } from 'react';
import ResumeWord from '../Resume/Christian_Pinto_Resume.docx'
import ResumePdf from '../Resume/Christian_Pinto_Resume.pdf'
import { Document, Page, pdfjs   } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = ({setViewResume}) => {

    const [download, setDownload] = useState(false)

    const onDocumentLoadSuccess = () => {
        console.log('loaded')
    }

    const handleDownloadPopup = (event) => {
        if(!event.target.classList.contains('resume-download')){
            setDownload(false)
        }
    }

    const handleDownload = (event) => {
        
    }
    
    return(
        <div className="resume-modal" onClick={handleDownloadPopup}>
            <div className="buttons">
                <button onClick={() => {setViewResume(false);document.body.style.overflow = "auto";}}>Close</button>
                <button className="resume-download" onClick={() => setDownload(!download)}>Download</button>
                {
                    download &&
                        <div className="download-options">
                            <a href={ResumeWord} className="resume-download" name="docx" onClick={handleDownload}>Docx</a>
                            <a href={ResumePdf} download="Christian_Pinto_Resume.pdf" className="resume-download" name="pdf" onClick={handleDownload}>Pdf</a>
                        </div>
                }
            </div>
            <Document
                file={ResumePdf}
                onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={1} />
            </Document>
        </div>
    )
}

export default Resume