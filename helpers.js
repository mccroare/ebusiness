function getEmailBody(message){
  var emailBody = message.getBody();
  return emailBody;
}

//Simple check function - gets the email sender
function checkEmail(message){
  var sender = message.getFrom();
  return sender;
}
