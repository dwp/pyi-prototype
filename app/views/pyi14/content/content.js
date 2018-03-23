var data = [ {

  "uc_login"      : [
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
    "alert"       : ["This is your to-do list.","You have to work through the items below. If you don't you might not get paid.","Completed items appear in your <a href='/pyi13/no_page_exists'>journal.</a>"],
    "alert2"      : "Verify your identity",
    "alert3"      : "Attend your interview",
    "alert4"      : "Answer a few equality questions(optional)",
    "alert5"      : "Verify your identity",
    "alert7"      : "Book your interview"
  },
],
"verify_identity"    : [
  {
    "heading"   : "Verify your identity",
    "lede"      : "How do you want to prove your identity",
    "radios"    : [{"value": "Try GOV.UK Verify again"}, {"value": "Try another option - GOV.UK Verify didn’t work for me"}],
    "toDoTask"  : "To do",
    "panelText" : "You'll need to <a href='/pyi13/to_do_page'>book an ID interview</a> at a jobcentre.",
    "button"    : "Next"
},
],
  "how_verify"    : [
    {
      "heading"   : "Verify your identity",
      "lede"      : "Use your bank account to help prove your identity - this could save you time in the jobcentre.",
      "toDoTask"  : "To do",
      "panelText" : "You'll need to <a href='/pyi13/to_do_page'>book an ID interview</a> at a jobcentre.",
      "button"    : "Next"
  },
],
  "bank_details"  : [
    {
      "heading"   : "Use your bank account to prove your identity",
      "text"      : "This is a secure government service to prove your identity.",
      "exitLink"  : "Go to Universal Credit sign in",
      "button"    : "Next"
  },
],
"has_roll_number"  : [
  {
    "heading"   : "Bank account details: roll number",
    "lede"      : "Some accounts need a roll or reference number for payments",
    "summary"   : "What is this?",
    "details"   : "Most standard bank accounts have an account number and a sort code. But some building society accounts also have a roll number - a reference code with letters and numbers. If you have one, you’ll have used it to make payments.",
    "radios"    : [{"value": "Yes"}, {"value": "No"}],
    "exitLink"  : "Go to Universal Credit sign in",
    "button"    : "Next"
},
],
"enter_bank_details"  : [
  {
    "heading"   : "Your bank details",
    "text"      : "Enter the details of the bank account are using for your Universal Credit payment.",
    "text4"      : "Make sure the details look exactly the same as they do on your bank statement.",
    "exitLink"  : "Go to Universal Credit sign in",
    "button"    : "Send the reference"
},
],
"bank_submitted"  : [
  {
    "heading"     : "Find your reference",
    "lede"        : "A reference has been sent to your bank account. It might take up to 2 hours to appear.",
    "heading2"    : "A reference has already been sent to your bank account",
    "lede2"       : "The reference  might take a couple of hours to appear.",
    "altText"     : "#",
    "description" : "It will be a 6-digit code, for example 12 34 56.",
    "exitLink"    : "Enter the reference later",
    "button"      : "Enter your reference"
  },
],
"reminder"      : [
  {
    "heading"   : "You have until Wednesday 20 September to confirm your identity",
    "lede"      : "You also need to sign back in to Universal Credit to book an interview at a job centre. Book as soon as you can or you might have to claim again.",
    "button"    : "",
    "exitLink"    : "Go to Universal Credit sign in",

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
    "heading"     : "You have correctly entered the reference number",
    "lede"        : "Sign in to Universal Credit to book an appointment at a job centre, if you haven’t already. You’ll need to bring your identity documents with you.",
    "button"      : "",
    "exitLink"    : "Go to Universal Credit sign in"
  },
],
  "failure"       : [
    {
    "heading"       : "Reference not recognised",
    "heading2"      : "You have not been able to give the correct reference",
    "lede"          : "Check the reference and try again.",
    "lede2"         : "Sign in to Universal Credit to book an appointment at a job centre, if you haven’t already.",
    "attemptsText"  : ["once","twice"],
      "button"      : "Try again",
      "exitLink"    : "Return to your To-do list and enter the reference later",
      "button2"     : "",
      "exitLink2"   : "Go to Universal Credit sign in",
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
    "additional"  : "Or go back to the <a href='/pyi13/uc_login'>Universal Credit sign in page.</a>"
    }
],
"expired"    : [
  {
    "heading"   : "Sorry, you can't use this service",
    "lede"      : "Your 7 days to link your bank account has run out.",
    "additional"  : "You need to <a href='#'>book an ID interview</a> at a jobcentre.",
    "button"    : "Go back to Universal Credit"
},
],
"payment_failed"    : [
  {
    "heading"   : "Something’s gone wrong",
    "lede"      : "Sorry, you can’t use this service. You need to <a href='#'>book an ID interview</a> at a jobcentre.",
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
