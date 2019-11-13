// UI
function createDetectedCard(prefill, result){
  var card = CardService.newCardBuilder();
  card.setHeader(CardService.newCardHeader()); //.setTitle('Result'));
  
  var resultTest = 6;
  var stringTest = 'This email has been received by ' + resultTest + ' others on our system.';  
  var errorString = 'Mass email detector encountered an error.';
  var massEmailString = 'High likelihood of mass email when more than 5 people have received it.';
  
  var resultSection = CardService.newCardSection();
  resultSection.addWidget(CardService.newKeyValue()
     .setTopLabel('Detection Result')
     .setIconUrl("https://cdn3.iconfinder.com/data/icons/green-business-1/750/5-512.png")
     .setContent('<b>' + stringTest + '</b>')
     .setMultiline(true));
  
  var errorSection = CardService.newCardSection();
  errorSection.addWidget(CardService.newKeyValue()
     .setTopLabel('Detection Error')
     .setIconUrl("https://www.iconsdb.com/icons/preview/red/error-4-xxl.png")
     .setContent('<b>' + errorString + '</b>')
     .setMultiline(true));
  
  
  var massEmailInfoSection = CardService.newCardSection();
  massEmailInfoSection.addWidget(CardService.newKeyValue()
      .setTopLabel('Mass Email Likelhood')
      .setIconUrl("https://icon-library.net/images/fyi-icon/fyi-icon-7.jpg")
      .setContent('<b>' + massEmailString + '</b>')
      .setMultiline(true));
  
  
  var senderSection = CardService.newCardSection();
  senderSection.addWidget(CardService.newKeyValue()
    .setTopLabel('Email Sender')
    .setIconUrl("http://ichef.bbci.co.uk/news/976/cpsprodpb/12787/production/_95455657_3312a880-230e-474c-b1d9-bb7c94f8b00e.jpg")
    .setContent('<b>' + result + '</b>')
    .setMultiline(true));
  
  var emailBodySection = CardService.newCardSection();
  emailBodySection.addWidget(CardService.newKeyValue()
    .setTopLabel('Email Body')
    .setIconUrl("https://www.clipartwiki.com/clipimg/detail/203-2038008_email-icons-website-mail-icon-png-pink.png")
    .setContent('<b>' + prefill + '</b>')
    .setMultiline(true));
  
  
  card.addSection(senderSection);
  card.addSection(resultSection);
  card.addSection(massEmailInfoSection);
  //card.addSection(emailBodySection);
  card.addSection(errorSection);
  
  return card;
  
}