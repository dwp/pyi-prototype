var data = [ {

  "to_do_page"    : [
    {
    "alert"       : ["This is your to-do list.","You have to work through the items below. If you don't you might not get paid.","Completed items appear in your <a href='/ucca2/no_page_exists'>journal.</a>"],
    "alert2"      : "Prove your identity",
    "alert3"      : "Attend your interview",
    "alert4"      : "Answer a few equality questions(optional)",
    "alert5"      : "Confirm your reference"
  },
],
  "how_verify"    : [
    {
      "heading"   : "Prove your identity",
      "lede"      : "You need to prove who you are by <strong class='addSeven'>a week from today</strong>. This is a security step to help prevent fraud.",
      "additional": "Proving your identity online means you'll be paid your Universal Credit without any delays.",
      "question"  : "How do you want to prove your identity?",
      "radios"    : [{"value":"Try GOV.UK Verify again"},{"value":"Use your bank account"}],
      "button"    : "Next"
  },
],
  "info_bank"     : [
    {
      "heading"   : "Use your bank account",
      "lede"      : "Proving your identity using your bank account usually takes about 10 minutes. It means you won't need a 45-minute interview at a Jobcentre.",
      "listIntro" : "How it works",
      "listItems" : ["On the next page, you confirm the bank account details you entered to receive Universal Credit.","You receive 1p in your bank account from Department for Work and Pensions.","You find the unique reference for this payment by logging into your online bank account, phoning your bank or visiting a branch.","You enter the reference here in your Universal Credit account.","Your identity is proved and you continue with your Universal Credit application."],
      "button"    : "Next",
      "exitLink"  : "Choose another option"
  },
],
  "bank_details"  : [
    {
      "heading"   : "Confirm the payment",
      "lede"      : "You'll get a payment of 1p from Department of Work and Pensions in this bank account.",
      "tabContent": [["Account name","Adam Jones"],["Sort code","09-01-45"],["Account number","****5645"]],
      "exitLink"  : "< Back",
      "button"    : "Confirm 1p payment"
  },
],
"bank_submitted"  : [
  {
    "heading"     : "Find your reference",
    "lede"        : "A penny has been sent to your bank account. The payment will show in your account with a reference. You need to enter the reference to prove your identity.",
    "listIntro"   : "To find your reference:",
    "listItems"   : ["log into your online account and check your latest transactions","phone your bank and ask for the reference","go into a branch of your bank and ask for the reference"],
    "imageText2"  : "The reference will look something like this in your list of transactions:",
    "altText"     : "An image of an online bank statement",
    "info"        : "If you use telephone banking or check in a branch the customer services represenative will be able to confirm the reference word for you.",
    "info2"       : "If you have immediate access to your banking transactions you can continue now or return later via your Universal Credit To-do list.",
    "exitLink"    : "Return to your to-do list and enter the reference later",
    "button"      : "Next"
  },
],
 "enter_reference": [
  {
    "heading"     : "Enter your reference",
    "lede"        : "",
    "question"    : "Reference",
    "toggle"      : "Where to find the reference word",
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
      "heading"   : "Reference not recognised",
      "lede"      : "Check the reference and try again.",
  "attemptsText"  : ["once","twice"],
      "button"    : "Try again",
      "exitLink"    : "Return to your To-do list and enter the reference later"
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
    "lede"        : "These are the changes made to version two of the prototype",
    "changeOne"   : "Changes made following content and interaction review",
    "listOne"     : ["Service name changed to Prove your identity.","Multiple gramatical errors fixed.","Task on to-do page changed to mirror service name change","Option removed to book an appointment on first pass.","Date format changed to adhere to GOV.UK standard format.","Content greatly reduced on information page about service.","Information page presented in list format.","Bank details obscured.","Option to edit bank details removed for the time being.","Content reduced for information about finding reference number.","Information about reference number presented in list format.","Image of reference word location enlarged.","Toggled help removed from enter your reference page.","Content on failure page amended.","All text except success banner(?) removed from success page."]
    }
]


}];

exports.getTableData = function() {
  return data;
};
