var data = [ {

  "to_do_page"    : [
    {
    "alert"       : ["This is your to-do list.","You have to work through the items below. If you don't you might not get paid.","Completed items appear in your <a href='/pyi4/no_page_exists'>journal.</a>"],
    "alert2"      : "Prove your identity",
    "alert3"      : "Attend your interview",
    "alert4"      : "Answer a few equality questions(optional)",
    "alert5"      : "Enter your bank account reference to prove your identity"
  },
],
  "how_verify"    : [
    {
      "heading"   : "Prove your identity",
      "lede"      : "You need to prove who you are by <strong class='addSeven'>a week from today</strong>. If you don’t you might not get paid.",
      "additional": "This is to stop the wrong person getting your Universal Credit.",
      "question"  : "How do you want to prove your identity?",
      "radios"    : [{"value":"Use your bank account"},{"value":"Try GOV.UK Verify again"}],
      "toggleText": "What does this mean?",
      "revealContent" : "You can prove your identity online using the bank account you’ve already told us about for Universal Credit. A penny is paid into your account. You find the penny on your statement and the reference next it. You enter that reference and your identity is proved.",
      "button"    : "Next"
  },
],
  "bank_details"  : [
    {
      "heading"   : "Approve the payment",
      "lede"      : "You’ll get a payment of 1 penny from Universal Credit into your bank account.",
      "tabContent": [["Account name","Adam Jones"],["Sort code","09-01-45"],["Account number","****5645"]],
      "exitLink"  : "< Back",
      "button"    : "OK - pay me 1 penny"
  },
],
"bank_submitted"  : [
  {
    "heading"     : "Find your reference",
    "lede"        : "A penny has been sent to your bank account. It might take a couple of hours to appear in your list of bank transactions.",
    "additional"  : "Look for a 1 penny payment from UC and the reference next to it.",
    "listIntro"   : "To find your reference:",
    "listItems"   : ["log into your online account and check your latest transactions","phone your bank and ask for the reference","go into a branch of your bank and ask for the reference"],
    "imageText2"  : "<strong>The reference will start with UC. It will look something like this in your list of transactions:</strong>",
    "altText"     : "An image of an online bank statement",
    "info"        : "If you use telephone banking or check in a branch the customer services represenative will be able to confirm the reference word for you.",
    "info2"       : "If you have immediate access to your banking transactions you can continue now or return later via your Universal Credit To-do list.",
    "exitLink"    : "Save and go back to to-do list",
    "button"      : "Next"
  },
],
"reminder"      : [
  {
    "heading"   : "You have until 25 January to enter your reference to prove your identity. If you don’t you might not get paid",
    "button"    : "Continue to your to-do list"
  },
],
 "enter_reference": [
  {
    "heading"     : "Enter your reference",
    "lede"        : "",
    "question"    : "Enter your reference to prove your identity",
    "extra"       : "The reference will start with UC.",
    "toggle"      : "Where to find the reference word",
    "toggleContent" : "<strong>Here is an example of how it will appear in your list of bank transactions</strong>",
    "altText"     : "An image of a bank statement",
    "exitLink"    : "Save and enter the reference later",
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
    "lede2"         : "You have entered the reference incorrectly 3 times.",
    "additional2"   : "You still need to prove your identity before you can be paid Universal Credit",
    "attemptsText"  : ["once","twice"],
    "question"      : "How do you want to prove your identity?",
    "radioOptions"  : [{"value":"Try GOV.UK Verify again"},{"value":"Try using your bank account again"},{"value":"Attend a face to face interview"}],
      "button"      : "Try again",
      "exitLink"    : "Return to your To-do list and enter the reference later",
      "button2"     : "Try again",
      "exitLink2"   : "",
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
"second_attempt"    : [
  {
    "heading"   : "Prove your identity",
    "lede"      : "You need to prove who you are by <strong class='addSeven'>a week from today</strong>. If you don’t you might not get paid.",
    "question"  : "How do you want to prove your identity?",
    "radios"    : [{"value":"Use your bank account"},{"value":"Try GOV.UK Verify again","showOr":"Or"},{"value":"Bring your identity documents to a face to face interview"}],
    "toggleText": "What does this mean?",
    "revealContent" : "You can prove your identity online using the bank account you’ve already told us about for Universal Credit. A penny is paid into your account. You find the penny on your statement and the reference next it. You enter that reference and your identity is proved.",
    "button"    : "Next"
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
    "changeOne"   : "Changes made for next UR session. 18/01/2017",
    "listOne"     : ["Content ammendments to Prove your identity page.","Revealed text placed above radio buttons as plain text instead of hidden content","Bank details removed from the Approve the Payment screen","Minor content changes made to Find your Reference page","Text for exit link shortened","Each exit link moved below the main page button","Enter your reference label changed from 'Reference' to 'Enter your reference to prove your identity'","Removed radio buttons from third failed attepmpt page","Added second attempt page that restarts the journey with additional option for booking an appointment","'Or' added bewtween second and third radio buttons on Second Attempt page"]
  }
]


}];

exports.getTableData = function() {
  return data;
};
