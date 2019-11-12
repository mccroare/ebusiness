function getContextualAddOn(event) {
  var card = CardService.newCardBuilder();
  card.setHeader(CardService.newCardHeader().setTitle('Mass Email Detector'));

  var section = CardService.newCardSection();
  section.addWidget(CardService.newKeyValue()
    .setContent("Turn on detector")
    .setSwitch(CardService.newSwitch()
        .setFieldName("form_input_switch_key")
        .setValue("form_input_switch_value")
        .setOnChangeAction(CardService.newAction()
            .setFunctionName("handleSwitchChange"))));
  
  section.addWidget(CardService.newKeyValue()
    .setTopLabel("Message")
    .setContent("Email found."));
  

  card.addSection(section);

  return [card.build()];
}
