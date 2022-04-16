'use strict';

const async = require('async');
const fs = require('fs');
const https = require('https');
const path = require("path");
const createReadStream = require('fs').createReadStream
const sleep = require('util').promisify(setTimeout);
const ComputerVisionClient = require('@azure/cognitiveservices-computervision').ComputerVisionClient;
const ApiKeyCredentials = require('@azure/ms-rest-js').ApiKeyCredentials;

const key = '2a3fb38024184f2e9cccdf6a207454a6';
const endpoint = 'https://computer-vision-api-write-right-go.cognitiveservices.azure.com/';

const computerVisionClient = new ComputerVisionClient(
  new ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } }), endpoint);

function computerVision() {
  async.series([
    async function () {
  
      const STATUS_SUCCEEDED = "succeeded";
      const STATUS_FAILED = "failed"


      const handwrittenImagePath = __dirname + '\\handwritten_text.jpg';

      console.log('\Reading local image for text in ...', path.basename(handwrittenImagePath));

      const streamResponse = await computerVisionClient.readInStream(() => createReadStream(handwrittenImagePath))
        .then((response) => {
          return response;
        });

      console.log();
      // Get operation location from response, so you can get the operation ID.
      const operationLocationLocal = streamResponse.operationLocation
      // Get the operation ID at the end of the URL
      const operationIdLocal = operationLocationLocal.substring(operationLocationLocal.lastIndexOf('/') + 1);

      // Wait for the read operation to finish, use the operationId to get the result.
      while (true) {
        const readOpResult = await computerVisionClient.getReadResult(operationIdLocal)
          .then((result) => {
            return result;
          })
        console.log('Read status: ' + readOpResult.status)
        if (readOpResult.status === STATUS_FAILED) {
          console.log('The Read File operation has failed.')
          break;
        }
        if (readOpResult.status === STATUS_SUCCEEDED) {
          console.log('The Read File operation was a success.');
          console.log();
          console.log('Read File local image result:');
          // Print the text captured

          // Looping through: pages of result from readResults[], then Line[]
          for (const textRecResult of readOpResult.analyzeResult.readResults) {
            for (const line of textRecResult.lines) {
              console.log(line.text)
            }
          }
          break;
        }
        await sleep(1000);
      }
      console.log();
 

      //PDF LOGIC
      
    //   const mixedMultiPagePDFURL = 'https://raw.githubusercontent.com/Azure-Samples/cognitive-services-sample-data-files/master/ComputerVision/Images/MultiPageHandwrittenForm.pdf';



      // Recognize printed text and handwritten text in a PDF from a URL
    //   console.log('\nRead printed and handwritten text from a PDF from URL...', mixedMultiPagePDFURL.split('/').pop());
    //   const mixedPdfResult = await readTextFromURL(computerVisionClient, mixedMultiPagePDFURL);
    //   printRecText(mixedPdfResult);
 
      //PDF LOGIC END

      // Perform read and await the result from URL
      async function readTextFromURL(client, url) {
        // To recognize text in a local image, replace client.read() with readTextInStream() as shown:
        let result = await client.read(url);
        // Operation ID is last path segment of operationLocation (a URL)
        let operation = result.operationLocation.split('/').slice(-1)[0];

        // result.status is initially undefined, since it's the result of read
        while (result.status !== STATUS_SUCCEEDED) { await sleep(1000); result = await client.getReadResult(operation); }
        return result.analyzeResult.readResults; // Return the first page of result. Replace [0] with the desired page if this is a multi-page file such as .pdf or .tiff.
      }
    
      function printRecText(readResults) {
        console.log('Recognized text:');
        for (const page in readResults) {
          if (readResults.length > 1) {
            console.log(`==== Page: ${page}`);
          }
          const result = readResults[page];
          if (result.lines.length) {
            for (const line of result.lines) {
              console.log(line.words.map(w => w.text).join(' '));
            }
          }
          else { console.log('No recognized text.'); }
        }
      }


    },
    function () {
      return new Promise((resolve) => {
        resolve();
      })
    }
  ], (err) => {
    throw (err);
  });
}

computerVision();