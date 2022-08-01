import pdf from 'html-pdf';

class PDFwriter{
    static writerPDF(filename, html){
        pdf.create(html, {}).toFile(filename,(erro) => {})
    }
}

export default PDFwriter;