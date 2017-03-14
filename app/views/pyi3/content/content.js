var data = [ {

  "to_do_page"    : [
    {
    "alert"       : ["This is your to-do list.","You have to work through the items below. If you don't you might not get paid.","Completed items appear in your <a href='/pyi3/no_page_exists'>journal.</a>"],
    "alert2"      : "Prove your identity",
    "alert3"      : "Attend your interview",
    "alert4"      : "Answer a few equality questions(optional)",
    "alert5"      : "Enter your bank account reference to prove your identity"
  },
],
  "how_verify"    : [
    {
      "heading"   : "Prove your identity",
      "lede"      : "You need to prove who you are by <strong class='addSeven'>a week from today</strong>. This is to stop the wrong person getting your Universal Credit.",
      "question"  : "How do you want to prove your identity?",
      "radios"    : [{"value":"Try GOV.UK Verify again"},{"value":"Use your bank account"}],
      "toggleText": "What does this mean?",
      "revealContent" : "You can prove your identity online using the bank account you’ve already told us about for Universal Credit. A penny is paid into your account. You find the penny on your statement and the reference next it. You enter that reference and your identity is proved.",
      "button"    : "Next"
  },
],
  "bank_details"  : [
    {
      "heading"   : "Approve the payment",
      "lede"      : "You’ll get a payment of 1p from Universal Credit into this bank account:",
      "tabContent": [["Account name","Adam Jones"],["Sort code","09-01-45"],["Account number","****5645"]],
      "exitLink"  : "< Back",
      "button"    : "Make the 1p payment"
  },
],
"bank_submitted"  : [
  {
    "heading"     : "Find your reference",
    "lede"        : "A penny has been sent to your bank account. It might take up to 2 hours to appear in your list of bank transactions.",
    "additional"  : "Find the 1p payment and enter the reference next to it on the next page. The reference will start with UC.",
    "listIntro"   : "To find your reference:",
    "listItems"   : ["log into your online account and check your latest transactions","phone your bank and ask for the reference","go into a branch of your bank and ask for the reference"],
    "imageText2"  : "<strong>Here is an example of how it will appear in your list of bank transactions</strong>",
    "altText"     : "An image of an online bank statement",
    "info"        : "If you use telephone banking or check in a branch the customer services represenative will be able to confirm the reference word for you.",
    "info2"       : "If you have immediate access to your banking transactions you can continue now or return later via your Universal Credit To-do list.",
    "exitLink"    : "Return to your to-do list and enter the reference later",
    "button"      : "Next"
  },
],
"reminder"      : [
  {
    "heading"   : "You have until 25 January to enter your reference to prove your identity",
    "button"    : "Continue to your to-do list"
  },
],
 "enter_reference": [
  {
    "heading"     : "Enter your reference",
    "lede"        : "",
    "question"    : "Reference",
    "extra"       : "The reference will start with UC.",
    "toggle"      : "Where to find the reference word",
    "toggleContent" : "<strong>Here is an example of how it will appear in your list of bank transactions</strong>",
    "altText"     : "An image of a bank statement",
    "exitLink"    : "Return to your to-do list and enter the reference later",
    "button"      : "Submit"
  },
],
  "success"       : [
    {
    "heading"     : "You've proved your identity",
    "lede"        : "",
    "button"      : "Return to your to-do list"
  },
],
  "failure"       : [
    {
    "heading"       : "Reference not recognised",
    "heading2"      : "Reference not recognised",
    "lede"          : "Check the reference and try again.",
    "lede2"         : "You can try to prove your identity using Verify again or you can attend a face to face interview.",
    "attemptsText"  : ["once","twice"],
    "question"      : "How do you want to prove your identity?",
    "radioOptions"  : [{"value":"Try GOV.UK Verify again"},{"value":"Try using your bank account again"},{"value":"Attend a face to face interview"}],
      "button"      : "Try again",
      "exitLink"    : "Return to your To-do list and enter the reference later",
      "button2"     : "Next",
      "exitLink2"   : "Return to your To-do list",
  },
],
"three_fails"       : [
  {
    "heading"      : "Reference not recognised",
    "lede"         : "You can try to prove your identity using Verify again or you can attend a face to face interview.",
    "question"     : "How do you want to prove your identity?",
    "radioOptions" : [{"value":"Try GOV.UK Verify again"},{"value":"Try using your bank account again"},{"value":"Attend a face to face interview"}],
    "button"       : "Next",
    "exitLink"     : "Return to your To-do list"
  },
],
"no_page_exists"  : [
  {
    "heading"     : "Oops",
    "lede"        : "Unfortunately, the option you selected is unavailable"
  },
],
  "reset"         : [
    {
  "heading"       : "Reset session",
  "lede"          : "Click the button to clear session information",
  "button"        : "Reset"
  },
],
"research_findings": [
  {
    "heading"     : "Research findings",
    "lede"        : "No research conducted with this prototype yet"
  },
],
"changes_made"    : [
  {
    "heading"     : "Changes for this version",
    "lede"        : "These are the changes made to version three of the prototype",
    "changeOne"   : "Changes made for next UR session. 10/01/2017",
    "listOne"     : ["Content change to Prove your identity page. Reveal text addeed under bank account radio button","Information page about the service removed","Confirm the payment heading changed to 'Approve the payment'","All references to DWP changed to UC","Send payment button changed to 'Make 1p payment'","Content shortened on find your reference page","Reminder of timescales page added when a user selects return to todo page","Blue alert box removed from todo page once 1p has been issued","Bank statement image added back to Enter Your Reference page","Content on failure page changed after 3 failed attempts. Verify options provided again for user to repeat the PYI or Verify journeys, or make appointment"]
  }
]


}];

exports.getTableData = function() {
  return data;
};
