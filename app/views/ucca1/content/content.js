var data = [ {

  "to_do_page"    : [
    {
    "alert"       : ["This is your to-do list.","You have to work through the items below. If you don't you might not get paid.","Completed items appear in your <a href='/ucca1/no_page_exists'>journal.</a>"],
    "alert2"      : "Verify your identity",
    "alert3"      : "Attend your interview",
    "alert4"      : "Answer a few equality questions(optional)",
    "alert5"      : "Confirm your reference"
  },
],
  "how_verify"    : [
    {
      "heading"   : "Confirming your identity",
      "lede"      : "You haven't confirmed your identity using GOV.UK Verify. You need to do this by <strong class='addSeven'>a week from today</strong>.",
      "question"  : "How do you want to confirm your identity?",
      "radios"    : [{"value":"Try GOV.UK verify again"},{"value":"Use your bank account to verify"},{"value":"Attend a 45 minute appointment"}],
      "button"    : "Next"
  },
],
  "info_bank"     : [
    {
      "heading"   : "Use your bank account to verify",
      "lede"      : "We can verify your identity using your bank account. This process means you will not have to attend a face to face interview.",
      "heading2"  : "How the verification works",
      "info2"     : "We use your bank details to send you a deposit of 1p and along with this we add a unique reference word. This reference will appear in your transaction list alongside the 1p. You then confirm this reference word with us and the verification is complete.",
      "toggle"    : "Why do we use your bank",
      "heading3"  : "Why we use your bank",
      "info3"     : "When you first applied for an account your bank carried out a number of checks to verify your identity before they opened it. We use this previously completed identity verification as well as the account control test to satisfy ourselves that you are who you say you are.",
      "heading4"  : "How long it takes",
      "info4"     : "If your bank can carry out Faster Payments the 1p should be with you almost immediately. Alternatively you can use telephone banking or call in at your local branch to request the reference word,",
      "button"    : "Continue",
      "exitLink"  : "Cancel and choose another method",
      "addendum"  : "Already have your reference word",
      "addButton" : "Confirm your reference"
  },
],
  "bank_details"  : [
    {
      "heading"   : "Your bank account details",
      "lede"      : "Confirm that you’re happy for us to send the penny to the bank account that you want us to make Universal Credit payments to.",
      "additional": "If you want to change the details to another bank account that you also control you can edit the fields below",
      "question"  : "Name on account",
      "question2" : "Sort code",
      "fields"    : [{"name":"Sort code 1","value":"18"},{"name":"Sort code 2","value":"01"},{"name":"Sort code 3","value":"65"}],
      "question3" : "Account number",
      "question4" : "Is this a joint account",
      "radios"    : [{"value":"Yes"},{"value":"No","selected":"Yes"}],
      "exitLink"  : "< Back",
      "button"    : "Submit"
  },
],
"bank_submitted"  : [
  {
    "heading"     : "Bank details submitted",
    "lede"        : "We’ve sent the penny to your account. If your bank uses Faster Payments it should already be in your transactions list. Otherwise it may be a few hours before it appears.",
    "imageText"   : "You can find the reference number alongside the payment amount. It’s a seven letter word which is randomly generated.",
    "imageText2"  : "Here's an example of how the reference word may appear in your statement:",
    "altText"     : "An image of an online bank statement",
    "info"        : "If you use telephone banking or check in a branch the customer services represenative will be able to confirm the reference word for you.",
    "info2"       : "If you have immediate access to your banking transactions you can continue now or return later via your Universal Credit To-do list.",
    "exitLink"    : "Return to your To-do list and enter it later",
    "button"      : "Continue"
  },
],
 "enter_reference": [
  {
    "heading"     : "Enter reference word",
    "lede"        : "",
    "question"    : "Your reference word",
    "toggle"      : "Where to find the reference word",
    "exitLink"    : "Return to your To-do list and enter it later",
    "button"      : "Submit"
  },
],
  "success"       : [
    {
    "heading"     : "Your identity has been verified",
    "lede"        : "We’ve successfully verified your identity and you can now return to your To-do list and complete your application for Universal Credit",
    "button"      : "Return to your To-do list"
  },
],
  "failure"       : [
    {
      "heading"   : "Reference number not recognised",
      "lede"      : "Check that the number is correct",
      "info"      : "If it is, you may need to contact your bank",
      "button"    : "Try again"
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
    "lede"        : "No research conducted with this prototype"
  },
],
"changes_made"    : [
  {
    "heading"     : "Changes for this version",
    "lede"        : "Initial draft. No changes made"
  },
],


}];

exports.getTableData = function() {
  return data;
};
