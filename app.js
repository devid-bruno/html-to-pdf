import Reader from './Reader.js';
import Processor from './Processor.js';
import Table from './Table.js';
import htmlParser from './htmlParser.js';
import Writer from './Writer.js';
import PDFwriter from './pdfWriter.js';

var leitor = new Reader();
var escritor = new Writer();


async function main(){
    var dados = await leitor.Read("./users.csv");
    var dataProcess = Processor.Process(dados);

    var usuarios = new Table(dataProcess);


  var html = await htmlParser.Parse(usuarios)

  escritor.Write(Date.now() + ".html", html);
  PDFwriter.writerPDF(Date.now() + ".pdf", html);
}

main();