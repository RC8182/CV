import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useContext } from 'react'
import { CvContext } from '../../context/ContextoProvider';
import { Button, Flex } from '@chakra-ui/react';

export const DescargarPdf = ({rootElementId }) => {
  
    const {data, idioma}= useContext(CvContext);
    const idiomaText=()=>{
        var i=''
        if(idioma === data.espanol){
            i='Español'
        }
        else{
            i= 'English'
        }
        return i
    }

    const downloadPdfDocument = () => {
        const input = document.getElementById(rootElementId);
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p','mm','a4',true);
                const pageHeight= pdf.internal.pageSize.height;
                const pageWidth= pdf.internal.pageSize.width
                pdf.addImage(imgData, 'JPEG', 0, 0, pageWidth, pageHeight);
                pdf.save(`CV-Javier Visconti -${idiomaText()}.pdf`);
            })
    }

    return <Flex>    
            {(idioma === data.ingles)?<Button variant='solid' colorScheme='blue' onClick={downloadPdfDocument}>Download CV</Button>:
              <Button variant='solid' colorScheme='blue' onClick={downloadPdfDocument}>Descargar CV</Button>}
            </Flex>
    
}
