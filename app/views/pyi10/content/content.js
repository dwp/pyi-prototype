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
    "alert"       : ["This is your to-do list.","You have to work through the items below. If you don't you might not get paid.","Completed items appear in your <a href='/pyi10/no_page_exists'>journal.</a>"],
    "alert2"      : "Link your bank account",
    "alert3"      : "Attend your interview",
    "alert4"      : "Answer a few equality questions(optional)",
    "alert5"      : "Link your bank account",
    "alert6"      : "Verify your identity online",
    "alert7"      : "Book your interview"
  },
],
  "how_verify"    : [
    {
      "heading"   : "Link your bank account",
      "lede"      : "Linking your bank account to your Universal Credit account will help verify your identity.",
    //  "lede"      : "Do this online with GOV.UK Verify - it'll save you spending extratime in the jobcentre",
      "toDoTask"  : "To do",
      "panelText" : "You'll need to <a href='/pyi10/to_do_page'>book an ID interview</a> at a jobcentre.",
      // "revealContent" : "You can prove your identity online. You'll need to check the bank account you use for Universal Credit for a reference that we'll send.",
      // "question"  : "How do you want to prove your identity?",
      // "radios"    : [{"value":"Get a reference sent to your bank account"},{"value":"Try GOV.UK Verify again"}],
      "button"    : "Next"
  },
],
  "bank_details"  : [
    {
      "heading"   : "Link your bank account - how it works",
    //  "heading2"  : "How it works",
      "lede"      : "Enter the details of the bank account you want to use for Universal Credit on the next page.",
      "text"      : "Check your bank account for a reference from Universal Credit online, on your mobile app or using telephone banking. Or get a statement printed at a cash machine or in your branch.",
    //  "text2"     : "Find the reference and tell us what it is to prove your identity.",
      "exitLink"  : "Go back to to-do list",
      "button"    : "Enter bank details"
  },
],
"has_roll_number"  : [
  {
    "heading"   : "Does your bank account have a roll or reference number?",
    "radios"    : [{"value": "Yes"}, {"value": "No"}],
    "exitLink"  : "Go back to to-do list",
    "button"    : "Continue"
},
],
"enter_bank_details"  : [
  {
    "heading"   : "Your bank details",
  //  "heading2"  : "How it works",
//    "lede"      : "Enter the details of the bank account you will use for your Universal Credit payment.",
    "text"      : "Enter the details of the bank account you will use for your Universal Credit payment.",
    "text4"      : "Make sure the details look exactly the same as they do on your bank card.",
  //  "text2"     : "Find the reference and tell us what it is to prove your identity.",
    "exitLink"  : "Go back to to-do list",
    "button"    : "Send the reference"
},
],
"bank_submitted"  : [
  {
    "heading"     : "Find your reference",
    "lede"        : "A reference has been sent to your bank account.",
    "heading2"    : "A reference has already been sent to your bank account",
    "lede2"       : "The reference might take a couple of hours to appear.",
    "altText"     : "#",
    "description" : "It will be a 7-digit code starting with P, for example P1234567.",
    "exitLink"    : "Enter the reference later",
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
    "exitLink"    : "Enter the reference later",
    "button"      : "Submit"
  },
],
  "success"       : [
    {
    "heading"     : "You've linked your bank account",
    "lede"        : "Now you need to book an ID interview at a job centre.",
    "button"      : "Book my interview"
  },
],
  "failure"       : [
    {
    "heading"       : "Reference not recognised",
    "heading2"      : "You have not been able to link your bank account",
    "lede"          : "Check the reference and try again.",
    "lede2"         : "You have entered the reference 3 times but it hasn't worked.",
    "additional2"   : "You need to book an ID interview at a job centre.",
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
],
"settings"        : [
  {
    "heading"     : "Settings page",
    "lede"        : "You can change the settings here",
    "label"       : "Select the user journey path you wish to use",
    "radios"      : [{"value":"Default"}, {"value":"Expired reference"}, {"value":"Payment failed"}, {"value":"System failure"}],
    "button"      : "Change settings"
  }
],
"404"        : [
  {
    "heading"     : "Something’s gone wrong",
    "lede"        : "This page can’t be found. Check the link you’re using and try again.",
    "additional"  : "Or go back to the <a href='/pyi10/to_do_page'>Universal Credit sign in page.</a>"
    }
],
"expired"    : [
  {
    "heading"   : "Sorry, you can't use this service",
    "lede"      : "Your 7 days to prove your identity online has run out.",
    "additional"  : "You’ll need to book an appointment in person.",
    "button"    : "Go back to Universal Credit"
},
],
"payment_failed"    : [
  {
    "heading"   : "Something’s gone wrong",
    "lede"      : "Sorry, you can’t use this service. You’ll need to book an appointment in person.",
    "button"    : "Go back to Universal Credit"
},
],
"system_failure": [
  {
    "heading"   : "Something’s gone wrong",
    "lede"      : "You can’t use this service just now. The problem will be fixed as soon as possible.",
    "additional": "Please try again later."
},
]


}];

exports.getTableData = function() {
  return data;
};
