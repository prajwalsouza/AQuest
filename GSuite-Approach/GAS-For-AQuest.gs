function randomizeSheetValues() {
  var codeDetailsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('CodeDetails');
  var cell = codeDetailsSheet.getRange("B2");
  cell.setFormula("=RAND()");
}

function generateStudentQuestions() {
  var startTime = new Date();
  var genQuestionsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('GeneratedQs');

  var sNameSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('StudentNames');
  var sheetData = sNameSheet.getDataRange().getValues();
 
  var qGenSoFar = 0
  
  for (row_number = 1; row_number < sheetData.length; row_number++) {
    var endTime = new Date();
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Progress').getRange("E2").setValue((endTime - startTime)/1000);
    
    var rowData = sheetData[row_number]
    genQuestionsSheet.getRange(row_number + 1, 1).setValue(rowData[0])
    genQuestionsSheet.getRange(row_number + 1, 2).setValue(rowData[1])
    
    var welcome_Message = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('BasicInfo').getRange("C3").getValue();
    
    genQuestionsSheet.getRange(row_number + 1, 3).setValue("Hi " + rowData[1] + ". " + welcome_Message)
    genQuestionsSheet.getRange(row_number + 1, 4).setValue(rowData[2])

    randomizeSheetValues()
    
    var qSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('QSheet');
    var qSheetData = qSheet.getDataRange().getValues();
    
    var qStartPoint = 5
    
    var loopSpacer = 0
    
    var qrowArray = []
    for (qrow_number = 3; qrow_number < qSheetData.length; qrow_number++) {
      qrowArray.push(qrow_number)
    }
    
    var shouldShuffle = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('BasicInfo').getRange("C5").getValue();
    
    if (shouldShuffle == 'Yes') { 
      var qrowArray = shuffle(qrowArray)
    }
   
    for (qArrayN = 0; qArrayN < qrowArray.length; qArrayN++) {
      qrow_number = qrowArray[qArrayN]
      
      genQuestionsSheet.getRange(row_number + 1, qStartPoint + loopSpacer).setValue('questionStart')
      loopSpacer = loopSpacer + 1
      genQuestionsSheet.getRange(row_number + 1, qStartPoint + loopSpacer).setValue(qSheetData[qrow_number][5])
      loopSpacer = loopSpacer + 1
      genQuestionsSheet.getRange(row_number + 1, qStartPoint + loopSpacer).setValue(qSheetData[qrow_number][6])
      loopSpacer = loopSpacer + 1
      genQuestionsSheet.getRange(row_number + 1, qStartPoint + loopSpacer).setValue(qSheetData[qrow_number][10])
      loopSpacer = loopSpacer + 1
      genQuestionsSheet.getRange(row_number + 1, qStartPoint + loopSpacer).setValue(qSheetData[qrow_number][11])
      loopSpacer = loopSpacer + 1
      genQuestionsSheet.getRange(row_number + 1, qStartPoint + loopSpacer).setValue(qSheetData[qrow_number][12])
      loopSpacer = loopSpacer + 1
      genQuestionsSheet.getRange(row_number + 1, qStartPoint + loopSpacer).setValue(qSheetData[qrow_number][13])
      loopSpacer = loopSpacer + 1
      genQuestionsSheet.getRange(row_number + 1, qStartPoint + loopSpacer).setValue(qSheetData[qrow_number][15])
      loopSpacer = loopSpacer + 1
      genQuestionsSheet.getRange(row_number + 1, qStartPoint + loopSpacer).setValue(qSheetData[qrow_number][16])
      loopSpacer = loopSpacer + 1
      genQuestionsSheet.getRange(row_number + 1, qStartPoint + loopSpacer).setValue(qSheetData[qrow_number][0])
      loopSpacer = loopSpacer + 1
      genQuestionsSheet.getRange(row_number + 1, qStartPoint + loopSpacer).setValue(qSheetData[qrow_number][1])
      loopSpacer = loopSpacer + 1
      genQuestionsSheet.getRange(row_number + 1, qStartPoint + loopSpacer).setValue(qSheetData[qrow_number][17])
      loopSpacer = loopSpacer + 1
      genQuestionsSheet.getRange(row_number + 1, qStartPoint + loopSpacer).setValue("")
      loopSpacer = loopSpacer + 1
      genQuestionsSheet.getRange(row_number + 1, qStartPoint + loopSpacer).setValue('questionEnd')
      loopSpacer = loopSpacer + 4
    }
    
    qGenSoFar = qGenSoFar + 1
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Progress').getRange("B2").setValue(qGenSoFar)
  }
  
  var progressSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Progress')
  progressSheet.getRange("F2").setValue(progressSheet.getRange("E2").getValue() + progressSheet.getRange("F2").getValue());
  
}


function generateStudentForm(studentNumber) {
  var testName = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('BasicInfo').getRange("C1").getValue();
  var testDescription = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('BasicInfo').getRange("C2").getValue();
  var formsFolderID = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('BasicInfo').getRange("C6").getValue();
  
  var finalMessage = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('BasicInfo').getRange("C5").getValue();
  
  var instructions = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('BasicInfo').getRange("C4").getValue();
  

  var formsFolder = DriveApp.getFolderById(formsFolderID);
  
  var studentSerial = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('StudentNames').getRange(studentNumber, 1).getValue();
  var studentName = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('StudentNames').getRange(studentNumber, 2).getValue();
      
  var form_Created = FormApp.create(testName + " - " + studentSerial);
  var form_Created_ID = form_Created.getId();
  var formOpen = FormApp.openById(form_Created_ID);
  
  var blankImageID = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('CodeDetails').getRange("B1").getValue();
  
  formOpen.setDescription(testDescription);
  formOpen.setIsQuiz(true);
  formOpen.setTitle(testName + " - " + studentName)
  
  var publicURL = formOpen.getPublishedUrl();
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName('StudentNames').getRange(studentNumber, 4).setValue(publicURL);
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName('StudentNames').getRange(studentNumber, 5).setValue(form_Created_ID);
  
  var file = DriveApp.getFileById(form_Created_ID);
  formsFolder.addFile(file);
  DriveApp.getRootFolder().removeFile(file);
  
  var welcomeM = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('GeneratedQs').getRange(studentNumber, 3).getValue();
  
  var messagesSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Messages')
  messagesSheet.getRange(studentNumber, 1).setValue(studentSerial)
  messagesSheet.getRange(studentNumber, 2).setValue(studentName)
  messagesSheet.getRange(studentNumber, 3).setValue(SpreadsheetApp.getActiveSpreadsheet().getSheetByName('StudentNames').getRange(studentNumber, 3).getValue())
  messagesSheet.getRange(studentNumber, 4).setValue(SpreadsheetApp.getActiveSpreadsheet().getSheetByName('BasicInfo').getRange("C8").getValue())
  
  var sendQMessage = "Hey " + studentName + ", " + SpreadsheetApp.getActiveSpreadsheet().getSheetByName('BasicInfo').getRange("C9").getValue();
  sendQMessage = sendQMessage + ". The form link :  " + publicURL
  messagesSheet.getRange(studentNumber, 5).setValue(sendQMessage)
  
  formOpen.addSectionHeaderItem().setTitle('Welcome ' + studentName).setHelpText(welcomeM);
  
  var showProgress = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('BasicInfo').getRange("C12").getValue();
  var limitSingleResponse = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('BasicInfo').getRange("C13").getValue();

  formOpen.setLimitOneResponsePerUser(limitSingleResponse)
  formOpen.setRequireLogin(true)
  formOpen.setCollectEmail(true)
  formOpen.setProgressBar(showProgress)
  formOpen.setConfirmationMessage(finalMessage)
  
  if (instructions != "") {
    var addedSection = formOpen.addPageBreakItem().setTitle("Instructions")
    var imageFile = DriveApp.getFileById(blankImageID);
    var formImage = formOpen.addImageItem().setImage(imageFile)
    formImage.setTitle(instructions)
  }
  
  var genQuestionsSheetValues = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('GeneratedQs').getDataRange().getValues()
  
  studentColmn = genQuestionsSheetValues[studentNumber - 1]
  
  
  for (colN = 0; colN < studentColmn.length; colN++) {
    if (studentColmn[colN] == 'questionStart') {
      var addedSection = formOpen.addPageBreakItem().setTitle(studentColmn[colN + 4].toString())
      addedSection.setHelpText(studentColmn[colN + 6].toString())
      
      if (studentColmn[colN + 8] == "GoogleDrive") {
        var imageFile = DriveApp.getFileById(studentColmn[colN + 7])
        var formImage = formOpen.addImageItem().setImage(imageFile)
        formImage.setTitle(studentColmn[colN + 11].toString())
      }
      else if (studentColmn[colN + 8] == "URL") {
        var imageFile = UrlFetchApp.fetch(studentColmn[colN + 7].toString());
        var formImage = formOpen.addImageItem().setImage(imageFile)
        formImage.setTitle(studentColmn[colN + 11].toString())
      }
      
      if (studentColmn[colN + 9] == 'Text') {
        var questionBox = formOpen.addTextItem();
        questionBox.setTitle(studentColmn[colN + 1].toString());
      
        if (studentColmn[colN + 5] != "") {
          eval("var textValidation = FormApp.createTextValidation()." + studentColmn[colN + 5].toString() + ".build()")
          questionBox.setValidation(textValidation);
        }
      }
      else if (studentColmn[colN + 9] == 'None'){
        var imageFile = DriveApp.getFileById(blankImageID);
        var formImage = formOpen.addImageItem().setImage(imageFile)
        formImage.setTitle(studentColmn[colN + 1].toString())
      }
  
    }
  }
  
}


function generateStudentForms() {
  var sNameSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('StudentNames');
  var sheetData = sNameSheet.getDataRange().getValues();
  
  var startTime = new Date();
  
  var startRow = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Progress').getRange("B3").getValue();
  if (startRow == '') {
    startRow = 0
  }
  
  var maxTime = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Progress').getRange("H1").getValue();
  
  startRow = startRow + 2
  
  for (row_number = startRow; row_number <= sheetData.length; row_number++) {
    var endTime = new Date();
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Progress').getRange("E3").setValue((endTime - startTime)/1000);
    
    generateStudentForm(row_number)
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Progress').getRange("B3").setValue(row_number - 1)
    
    var endTime = new Date();
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Progress').getRange("E3").setValue((endTime - startTime)/1000);
    
    var timeInMin = ((endTime - startTime)/1000)/60
    if (timeInMin > maxTime) {
      SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Progress').getRange("D3").setValue("Ended at " + (row_number - 1) + ", to prevent Max Execution Time Limit Error.");
      break;
    }
    
  }
  
  var progressSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Progress')
  progressSheet.getRange("F3").setValue(progressSheet.getRange("E3").getValue() + progressSheet.getRange("F3").getValue());
  
}

function resetQuestionGeneration() {
  var generatedQSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('GeneratedQs')
  generatedQSheet.deleteRows(2, generatedQSheet.getDataRange().getNumRows() - 1)
}


function sendEmails() {
  var sNamesSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('StudentNames')
  var fullSheetValues = sNamesSheet.getDataRange().getValues()
  
  var messagesSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Messages')
  
  var progressSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Progress')
  
  
  for (emailN = 1; emailN < fullSheetValues.length; emailN++) {
    var emailAddress = messagesSheet.getRange(emailN + 1, 3).getValue()
    var message = messagesSheet.getRange(emailN + 1, 5).getValue()
    var subject = messagesSheet.getRange(emailN + 1, 4).getValue()
    MailApp.sendEmail(emailAddress, subject, message);
    messagesSheet.getRange(emailN + 1, 6).setValue("Sent")
    
    progressSheet.getRange("B4").setValue(emailN);
  }
}


function disableAcceptResponse() {
  var sNamesSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('StudentNames')
  var fullSheetValues = sNamesSheet.getDataRange().getValues()
  var progressSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Progress')
  
  for (emailN = 1; emailN < fullSheetValues.length; emailN++) {
    var existingForm = FormApp.openById(fullSheetValues[emailN][6]);
    existingForm.setAcceptingResponses(false)
  }
  
  progressSheet.getRange("B9").setValue("Not Accepting Responses");
}

function enableAcceptResponse() {
  var sNamesSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('StudentNames')
  var fullSheetValues = sNamesSheet.getDataRange().getValues()
  var progressSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Progress')
  
  for (emailN = 1; emailN < fullSheetValues.length; emailN++) {
    var existingForm = FormApp.openById(fullSheetValues[emailN][6]);
    existingForm.setAcceptingResponses(true)
  }
  
  progressSheet.getRange("B9").setValue("Accepting Responses");
}


function readAnswers() {
  var sNamesSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('StudentNames')
  var fullSheetValues = sNamesSheet.getDataRange().getValues()
  
  var responsesRead = 0

  for (studentN = 1; studentN < fullSheetValues.length; studentN++) {
    var existingForm = FormApp.openById(fullSheetValues[studentN][4]);
    var allResponses = existingForm.getResponses()
    
    var genQuestionsSheetValues = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('GeneratedQs').getDataRange().getValues();
    var genQuestionsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('GeneratedQs');
    
    studentColmn = genQuestionsSheetValues[studentN]
  
    if (allResponses.length >= 1) {
      var formResponse = allResponses[allResponses.length - 1];
      var itemResponses = formResponse.getItemResponses();
      
      var formQuestionsSeenSoFar = 0
      for (colN = 0; colN < studentColmn.length; colN++) {
        if (studentColmn[colN] == 'questionStart') {
          if (studentColmn[colN + 9] != 'None') {
            genQuestionsSheet.getRange(studentN + 1, colN + 13).setValue(itemResponses[formQuestionsSeenSoFar].getResponse())
            formQuestionsSeenSoFar = formQuestionsSeenSoFar + 1
          }
        }
      }
      
      responsesRead = responsesRead + 1
      
      var progressSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Progress')
      progressSheet.getRange("B6").setValue(responsesRead);
    }
    
    
  }
}


function evaluateAnswers() {
  var sNamesSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('StudentNames')
  var fullSheetValues = sNamesSheet.getDataRange().getValues()
  
  var evalSoFar = 0

  for (studentN = 1; studentN < fullSheetValues.length; studentN++) {

    var existingForm = FormApp.openById(fullSheetValues[studentN][4]);
    var allResponses = existingForm.getResponses()
    
    var genQuestionsSheetValues = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('GeneratedQs').getDataRange().getValues();
    var genQuestionsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('GeneratedQs');
    
    var evaluationSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Evaluation');
    
    studentColmn = genQuestionsSheetValues[studentN]
    
    var evalPrintIndex = (studentN - 1)*7
    evaluationSheet.getRange(1, evalPrintIndex + 1).setValue("Serial Number")
    evaluationSheet.getRange(1, evalPrintIndex + 2).setValue(genQuestionsSheet.getRange(studentN + 1, 1).getValue())
    evaluationSheet.getRange(1, evalPrintIndex + 4).setValue("Your Total Score")
    evaluationSheet.getRange(1, evalPrintIndex + 5).setFormulaR1C1('=SUM(R[3]C[0]:C[0])')
    
    
    evaluationSheet.getRange(2, evalPrintIndex + 1).setValue("Form URL")
    evaluationSheet.getRange(2, evalPrintIndex + 2).setValue(sNamesSheet.getRange(studentN + 1, 4).getValue())
    evaluationSheet.getRange(2, evalPrintIndex + 4).setValue("out of")
    evaluationSheet.getRange(2, evalPrintIndex + 5).setFormulaR1C1('=SUM(R[2]C[-4]:C[-4])')
    
    evaluationSheet.getRange(3, evalPrintIndex + 1).setValue("Points for this question")
    evaluationSheet.getRange(3, evalPrintIndex + 2).setValue("Question")
    evaluationSheet.getRange(3, evalPrintIndex + 3).setValue("Student Response")
    evaluationSheet.getRange(3, evalPrintIndex + 4).setValue("Correct Answer")
    evaluationSheet.getRange(3, evalPrintIndex + 5).setValue("Points Scored")
    
    var studentName = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('StudentNames').getRange(studentN + 1, 2).getValue()
    
    var messagesSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Messages')
    messagesSheet.getRange(studentN + 1, 8).setValue("Hey " + studentName + ", " +  SpreadsheetApp.getActiveSpreadsheet().getSheetByName('BasicInfo').getRange("C11").getValue())
    messagesSheet.getRange(studentN + 1, 7).setValue(SpreadsheetApp.getActiveSpreadsheet().getSheetByName('BasicInfo').getRange("C10").getValue())
    
    
    if (allResponses.length == 1) {
      var formResponse = allResponses[0];
      var itemResponses = formResponse.getItemResponses();
      
      var formQuestionsSeenSoFar = 0
      
      var startAnswerPrint = 4
      var answerPrintCount = 0
   
      
      for (colN = 0; colN < studentColmn.length; colN++) {
        if (studentColmn[colN] == 'questionStart') {
          if (studentColmn[colN + 9] == 'Text') {
            var studentAnswer = genQuestionsSheet.getRange(studentN + 1, colN + 13).getValue()
            var actualAnswer = genQuestionsSheet.getRange(studentN + 1, colN + 3).getValue()
            var qscore = genQuestionsSheet.getRange(studentN + 1, colN + 4).getValue()
            
            if (studentAnswer == actualAnswer) {

              evaluationSheet.getRange(startAnswerPrint + answerPrintCount, evalPrintIndex + 1).setValue(qscore)
              evaluationSheet.getRange(startAnswerPrint + answerPrintCount, evalPrintIndex + 2).setValue(genQuestionsSheet.getRange(studentN + 1, colN + 2).getValue())
              evaluationSheet.getRange(startAnswerPrint + answerPrintCount, evalPrintIndex + 3).setValue(studentAnswer)
              evaluationSheet.getRange(startAnswerPrint + answerPrintCount, evalPrintIndex + 4).setValue(actualAnswer)
              evaluationSheet.getRange(startAnswerPrint + answerPrintCount, evalPrintIndex + 5).setValue(qscore)
              answerPrintCount = answerPrintCount + 1
              
              
            }
            else {
              evaluationSheet.getRange(startAnswerPrint + answerPrintCount, evalPrintIndex + 1).setValue(qscore)
              evaluationSheet.getRange(startAnswerPrint + answerPrintCount, evalPrintIndex + 2).setValue(genQuestionsSheet.getRange(studentN + 1, colN + 2).getValue())
              evaluationSheet.getRange(startAnswerPrint + answerPrintCount, evalPrintIndex + 3).setValue(studentAnswer)
              evaluationSheet.getRange(startAnswerPrint + answerPrintCount, evalPrintIndex + 4).setValue(actualAnswer)
              evaluationSheet.getRange(startAnswerPrint + answerPrintCount, evalPrintIndex + 5).setValue(0)
              
              answerPrintCount = answerPrintCount + 1

            }

            formQuestionsSeenSoFar = formQuestionsSeenSoFar + 1
          }
        }
      }
      
      evalSoFar = evalSoFar + 1
    
      var progressSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Progress')
      progressSheet.getRange("B7").setValue(evalSoFar);
    }
    
    
  }
}



function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    var randomIndex = Math.floor(Math.random() * currentIndex);
    var currentIndex = currentIndex - 1;

    // And swap it with the current element.
    var temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


function getResponseStatus() {
  
  var sNamesSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('StudentNames')
  var fullSheetValues = sNamesSheet.getDataRange().getValues()
  
  var responsesNumber = 0

  for (studentN = 1; studentN < fullSheetValues.length; studentN++) {
    var existingForm = FormApp.openById(fullSheetValues[studentN][4]);
    var allResponses = existingForm.getResponses()
    
    var genQuestionsSheetValues = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('GeneratedQs').getDataRange().getValues();
    var genQuestionsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('GeneratedQs');
    
    var resultSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Results');
    
    studentColmn = genQuestionsSheetValues[studentN]
    
    resultSheet.getRange(studentN + 1, 1).setValue(sNamesSheet.getRange(studentN + 1, 1).getValue())
    resultSheet.getRange(studentN + 1, 2).setValue(sNamesSheet.getRange(studentN + 1, 2).getValue())
    resultSheet.getRange(studentN + 1, 3).setValue(sNamesSheet.getRange(studentN + 1, 3).getValue())
    resultSheet.getRange(studentN + 1, 4).setValue(sNamesSheet.getRange(studentN + 1, 4).getValue())
  
    if (allResponses.length >= 1) {
      resultSheet.getRange(studentN + 1, 5).setValue('Recieved')
      resultSheet.getRange(studentN + 1, 6).setValue(allResponses.length)
      responsesNumber = responsesNumber + 1
      
      var progressSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Progress')
      progressSheet.getRange("B5").setValue(responsesNumber);
    }
  }
}


function updateTotalMarks() {
  var sNamesSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('StudentNames')
  var fullSheetValues = sNamesSheet.getDataRange().getValues()
  
  var markUpdatesSoFar = 0

  for (studentN = 1; studentN < fullSheetValues.length; studentN++) {
    var existingForm = FormApp.openById(fullSheetValues[studentN][4]);
    var allResponses = existingForm.getResponses()
    
    var genQuestionsSheetValues = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('GeneratedQs').getDataRange().getValues();
    var genQuestionsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('GeneratedQs');
    
    var evaluationSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Evaluation');

    var resultSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Results');
    
    studentColmn = genQuestionsSheetValues[studentN]

    if (allResponses.length >= 1) {
      resultSheet.getRange(studentN + 1, 7).setValue(evaluationSheet.getRange(1, (studentN - 1)*7 + 5).getValue())
      resultSheet.getRange(studentN + 1, 8).setValue(SpreadsheetApp.getActiveSpreadsheet().getSheetByName('QSheet').getRange("E1").getValue())
      markUpdatesSoFar = markUpdatesSoFar + 1
      
      var progressSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Progress')
      progressSheet.getRange("B8").setValue(markUpdatesSoFar);
    }
  }
}


function sendEvaluationResultsViaEmail() {
  var evaluationSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Evaluation')
  var messagesSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Messages')
  
  var resultSentSoFar = 0

  var numOfRows = evaluationSheet.getDataRange().getNumRows()
  
  
  var sNamesSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('StudentNames')
  var fullSheetValues = sNamesSheet.getDataRange().getValues()

  for (studentN = 1; studentN < fullSheetValues.length; studentN++) {
    var studentName = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('StudentNames').getRange(studentN + 1, 2).getValue()
    var studentEmail = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('StudentNames').getRange(studentN + 1, 3).getValue()
    var newSpreadsheet = SpreadsheetApp.create("Spreadsheet to export");
    
    var valuesToCopy = evaluationSheet.getRange(1, 1 + (studentN - 1)*7, numOfRows, 5).getValues()
    
    newSpreadsheet.getActiveSheet().getRange(1, 1, numOfRows, 5).setValues(valuesToCopy)
    
    newSpreadsheet.getActiveSheet().getRange(1, 1, 3, 5).setFontWeight("bold");
    
    newSpreadsheet.getActiveSheet().getRange(1, 1, numOfRows, 5).setVerticalAlignment("middle")
    newSpreadsheet.getActiveSheet().getRange(1, 1, numOfRows, 5).setHorizontalAlignment("center")
    
    newSpreadsheet.getActiveSheet().getRange(1, 1, numOfRows, 5).setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP);
    newSpreadsheet.getActiveSheet().setColumnWidths(1, 5, 200)
    newSpreadsheet.getActiveSheet().setColumnWidth(2, 600)
    
    
    SpreadsheetApp.flush();
    var ssDoc = DriveApp.getFileById(newSpreadsheet.getId());
    var pdf = DriveApp.createFile(ssDoc.getAs(MimeType.PDF));
    var attachpdf = pdf.getBlob().getBytes();
    
    var attach = {fileName:'Results.pdf',content:attachpdf, mimeType:'application/pdf'};
    
    var emailAddress = messagesSheet.getRange(studentN + 1, 3).getValue()
    var message = messagesSheet.getRange(studentN + 1, 8).getValue()
    var subject = messagesSheet.getRange(studentN + 1, 7).getValue()

    MailApp.sendEmail(emailAddress, subject, message, {attachments:[attach]});
    
    messagesSheet.getRange(studentN + 1, 9).setValue("Sent")
    
    DriveApp.getFileById(newSpreadsheet.getId()).setTrashed(true); 
    DriveApp.getFileById(pdf.getId()).setTrashed(true);
    
    resultSentSoFar = resultSentSoFar + 1
    
    var progressSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Progress')
    progressSheet.getRange("B9").setValue(resultSentSoFar);
    
  }

  
}



function onOpen() {
  var menu = SpreadsheetApp.getUi().createMenu('Forms and Questions');
  menu.addItem('Generate Questions', 'generateStudentQuestions').addToUi();
  menu.addItem('Generate Student Forms', 'generateStudentForms').addToUi();
  menu.addItem('Send Emails to Students', 'sendEmails').addToUi();
  menu.addItem('Enable Responses', 'enableAcceptResponse').addToUi();
  menu.addItem('Disable Responses', 'disableAcceptResponse').addToUi();
  menu.addItem('Check Response Status', 'getResponseStatus').addToUi();
  menu.addItem('Read Answers from Forms', 'readAnswers').addToUi();
  menu.addItem('Evaluate Answers', 'evaluateAnswers').addToUi();
  menu.addItem('Update Totals', 'updateTotalMarks').addToUi();
  menu.addItem('Send Results via Email', 'sendEvaluationResultsViaEmail').addToUi();
  
}




