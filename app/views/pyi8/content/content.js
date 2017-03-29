var data = [ {

  "UC_login"      : [
    {
    "heading"     : "Sign in to your Universal Credit account",
    "question"    : "Username",
    "question2"   : "Password",
    "toggleText"  : "Problems signing in?",
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
      "revealContent" : "You can prove your identity online. You'll need to check the bank account you use for Universal Credit for a reference that we'll send",
      "question"  : "How do you want to prove your identity?",
      "radios"    : [{"value":"Get a reference sent to your bank account"},{"value":"Try GOV.UK Verify again"}],
      "button"    : "Next"
  },
],
  "bank_details"  : [
    {
      "heading"   : "Use your bank account to prove your identity",
      "heading2"  : "How it works",
      "lede"      : "",
      "text"      : "Check your bank account using online, mobile or telephone banking to find the reference.",
      "text2"     : "Tell us the reference and you've proved your identity.",
      "exitLink"  : "< Back",
      "button"    : "OK - send the reference"
  },
],
"bank_submitted"  : [
  {
    "heading"     : "Find your reference",
    "lede"        : "We've sent a reference to your bank account. It might take a couple of hours to appear.",
    "altText"     : "An image of an online bank statement",
    "exitLink"    : "Go back to to-do list",
    "button"      : "Enter your reference"
  },
],
"reminder"      : [
  {
    "heading"   : "You have until <strong class='addSeven'>a week from today</strong> to enter your reference to prove your identity.",
    "lede"      : "If you don’t you won't get paid.",
    "button"    : "Continue to your to-do list"
  },
],
 "enter_reference": [
  {
    "heading"     : "Enter your reference",
    "lede"        : "",
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
    "button"    : "Next"
},
],
"second_entry"    : [
  {
    "heading"   : "Prove your identity",
    "lede"      : "You need to prove who you are by <strong class='addSeven'>a week from today</strong>. If you don’t you might not get paid.",
    "question"  : "You've already requested a reference number",
    "radios"    : [{"value":"Continue using your bank account"},{"value":"Try GOV.UK verify again"}],
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
