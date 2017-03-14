var data = [ {

  "UC_login"      : [
    {
    "heading"     : "Sign in to your Universal Credit account",
    "question"    : "Username",
    "question2"   : "Password",
    "toggleText"  : "Promblems signing in?",
    "revealHead"  : "Don't have an online account?",
    "revealCont" : "You may be able to use the <a href='#'>Universal Credit online service</a> to:",
    "button"      : "Sign In"
  },
],
  "to_do_page"    : [
    {
    "alert"       : ["This is your to-do list.","You have to work through the items below. If you don't you might not get paid.","Completed items appear in your <a href='/pyi8/no_page_exists'>journal.</a>"],
    "alert2"      : "Prove your identity",
    "alert3"      : "Attend your interview",
    "alert4"      : "Answer a few equality questions(optional)",
    "alert5"      : "Prove your identity"
  },
],
  "how_verify"    : [
    {
      "heading"   : "Prove your identity",
      "lede"      : "You need to prove who you are by <strong class='addSeven'>a week from today</strong>. If you don’t you won't get paid.",
      "additional": "",
      "question"  : "How do you want to prove your identity?",
      "radios"    : [{"value":"Get a reference sent to your bank account"},{"value":"Try GOV.UK Verify again"}],
      "toggleText": "What does this mean?",
      "revealContent" : "You can prove your identity online. You'll need to check the bank account you use for Universal Credit for a reference that we'll send",
      "button"    : "Next"
  },
],
  "bank_details"  : [
    {
      "heading"   : "Use your bank account to prove your identity",
      "lede"      : "",
      "tabContent": [["Account name","Adam Jones"],["Sort code","09-01-45"],["Account number","****5645"]],
      "listHeading" : "How it works",
      "listItems" : ["<strong>1.</strong> Get a penny paid into your bank account", "<strong>2.</strong> Find the reference next to it by checking your bank statement online, on your mobile, at your branch, at the cashpoint, by phoning your bank.", "<strong>3.</strong>Enter your reference in your Universal Credit Account and your identity is proved."],
      "exitLink"  : "< Back",
      "button"    : "OK - send the reference"
  },
],
"bank_submitted"  : [
  {
    "heading"     : "Find your reference",
    "lede"        : "We've sent a reference to your bank account. It might take a couple of hours to appear.",
    "additional"  : "",
    "listIntro"   : "",
    "listItems"   : ["log into your online account and check your latest transactions","phone your bank and ask for the reference","go into a branch of your bank and ask for the reference"],
    "imageText2"  : "",
    "altText"     : "An image of an online bank statement",
    "info"        : "If you use telephone banking or check in a branch the customer services represenative will be able to confirm the reference word for you.",
    "info2"       : "If you have immediate access to your banking transactions you can continue now or return later via your Universal Credit To-do list.",
    "exitLink"    : "Go back to to-do list",
    "button"      : "Enter your reference"
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
    "heading2"      : "You haven't been able to prove your identity this time",
    "lede"          : "Check the reference and try again.",
    "lede2"         : "You have entered the reference 3 times but it hasn't worked",
    "additional2"   : "You still need to prove your identity before you can be paid Universal Credit",
    "attemptsText"  : ["once","twice"],
    "question"      : "How do you want to prove your identity?",
    "radioOptions"  : [{"value":"Try GOV.UK Verify again"},{"value":"Try using your bank account again"},{"value":"Attend a face to face interview"}],
      "button"      : "Try again",
      "exitLink"    : "Return to your To-do list and enter the reference later",
      "button2"     : "Try another option",
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
    "lede"      : "You need to prove who you are by <strong class='addSeven'>a week from today</strong>. If you don’t you won't get paid.",
    "question"  : "How do you want to prove your identity?",
    "radios"    : [{"value":"Make an appointment in person"},{"value":"Get another reference sent to your bank account"},{"value":"Try GOV.UK Verify again"}],
    "toggleText": "What does this mean?",
    "revealContent" : "You can prove your identity online using the bank account you’ve already told us about for Universal Credit. A penny is paid into your account. You find the penny on your statement and the reference next it. You enter that reference and your identity is proved.",
    "button"    : "Next"
},
],
"second_entry"    : [
  {
    "heading"   : "Prove your identity",
    "lede"      : "You need to prove who you are by <strong class='addSeven'>a week from today</strong>. If you don’t you might not get paid.",
    "question"  : "You've already requested a reference number",
    "radios"    : [{"value":"Continue using your bank account"},{"value":"Try GOV.UK verify again"}],
    "toggleText": "What does this mean?",
    "revealContent" : "You can prove your identity online using the bank account you’ve already told us about for Universal Credit. A penny is paid into your account. You find the penny on your statement and the reference next it. You enter that reference and your identity is proved.",
    "button"    : "Continue"
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
    "lede"        : "These are the changes made to version four of the prototype",
    "changeOne"   : "Changes made for next UR session. 24/01/2017",
    "listOne"     : ["Moved exit links from beneath the main button to the side", "Corrected links for mobile views", "Removed alternate button on to-do page", "Added new page for users tht exit and re-enter the application after requesting a reference number"]
  }
]


}];

exports.getTableData = function() {
  return data;
};
