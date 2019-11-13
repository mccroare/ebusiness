function getContextualAddOn(event) {
  var message = getCurrentMessage(event);
  var prefill = [getEmailBody(message)];
  var result = checkEmail(message);
  
  var card = createDetectedCard(prefill, result);

  return [card.build()];
}


// Take in the email
function getCurrentMessage(event) {
  var accessToken = event.messageMetadata.accessToken;
  var messageId = event.messageMetadata.messageId;
  GmailApp.setCurrentMessageAccessToken(accessToken);
  return GmailApp.getMessageById(messageId);
  
}
