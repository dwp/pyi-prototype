var data = [{
  "uc_login"      : [{
    "heading"     : "Sign in to your Universal Credit account",
    "question"    : "Username",
    "question2"   : "Password",
    "toggleText"  : "Problems signing in?",
    "revealHead"  : "Don't have an online account?",
    "revealCont" : "You may be able to use the <a href='#'>Universal Credit online service</a> to:",
    "button"      : "Sign In"
  }],
  "to_do_page"    : [{
    "alert"       : ["This is your to-do list.","You have to work through the items below. If you don't you might not get paid.","Completed items appear in your <a href='/pyi13/no_page_exists'>journal.</a>"],
    "alert2"      : "Verify your identity",
    "alert3"      : "Attend your interview",
    "alert4"      : "Answer a few equality questions(optional)",
    "alert5"      : "Verify your identity",
    "alert7"      : "Book your interview"
  }],
  "verify_identity"    : [{
    "heading"   : "Verify your identity",
    "lede"      : "How do you want to prove your identity",
    "radios"    : [{"value": "Try GOV.UK Verify again"}, {"value": "Try another option - GOV.UK Verify didn’t work for me"}],
    "toDoTask"  : "To do",
    "panelText" : "You'll need to <a href='/pyi13/to_do_page'>book an ID interview</a> at a jobcentre.",
    "button"    : "Next"
  }],
  "how_verify"    : [{
    "heading"   : "Verify your identity",
    "lede"      : "Use your bank account to help prove your identity - this could save you time in the jobcentre.",
    "toDoTask"  : "To do",
    "panelText" : "You'll need to <a href='/pyi13/to_do_page'>book an ID interview</a> at a jobcentre.",
    "button"    : "Next"
  }],
  "bank_details"  : [{
      "heading"   : "Use your bank account to prove your identity",
      "text"      : "This is a secure government service to prove your identity.",
      "exitLink"  : "Go to Universal Credit sign in",
      "button"    : "Next"
  }],
  "has_roll_number"  : [{
    "heading"   : "Bank account details: roll number",
    "lede"      : "Some accounts need a roll or reference number for payments",
    "text"      : "You’ll find this on your card, statement or passbook.",
    "summary"   : "What is this?",
    "details"   : "Most standard bank accounts have an account number and a sort code. But some building society accounts also have a roll number - a reference code with letters and numbers. If you have one, you’ll have used it to make payments.",
    "radios"    : [{"value": "Yes"}, {"value": "No"}],
    "exitLink"  : "Go to Universal Credit sign in",
    "button"    : "Next"
  }],
  "enter_bank_details"  : [{
    "heading"   : "Confirm your bank details",
    "text"      : "Enter the details of the bank account are using for your Universal Credit payment.",
    "text4"      : "Make sure the details look exactly the same as they do on your bank statement.",
    "exitLink"  : "Go to Universal Credit sign in",
    "button"    : "Next"
  }],
  "make_payment"  : [{
    "heading"   : "Get a reference sent to your bank account",
    "text"      : "To find the reference you’ll need to check your bank statement.",
    "text2"     : "You can use online, mobile or telephone banking. Or go to a cash machine or your branch to get a statement printout.",
    "exitLink"  : "Go to Universal Credit sign in",
    "button"    : "OK - send the reference"
  }],
  "bank_submitted"  : [{
    "heading"     : "Find your reference",
    "lede"        : "A reference from Universal Credit has been sent to your bank account. It might take up to 2 hours to appear.",
    "heading2"    : "A reference has already been sent to your bank account",
    "lede2"       : "It might take up to 2 hours to appear.",
    "altText"     : "#",
    "description" : "It will be a 6-digit code on your bank statement, for example 12 34 56.",
    "exitLink"    : "Enter your reference later",
    "button"      : "Enter your reference"
  }],
  "reminder"      : [{
      "heading"   : "You still need to confirm your identity",
      "lede"      : "Check your bank statement for a reference from Universal Credit. Then sign back into your Universal Credit account as soon as you can to enter the reference.",
      "text"      : "You also need to sign back in to Universal Credit to book an interview at a job centre.",
      "text2"     : "Book as soon as you can or you might have to claim again.",
      "button"    : "",
      "exitLink"    : "Go to Universal Credit sign in"
    }],
 "enter_reference": [{
    "heading"     : "Enter your reference",
    "lede"        : "",
    "text"        : "It will be a 6-digit code from Universal Credit on your bank statement, for example 12 34 56.",
    "exitLink"    : "Enter your reference later",
    "button"      : "Submit"
  }],
  "success"       : [{
    "heading"     : "You have correctly entered the reference number",
    "lede"        : "",
    "text"        : "Sign in to Universal Credit to book an appointment at a job centre, if you haven’t already.",
    "text2"       : "You’ll need to bring your identity documents with you.",
    "button"      : "",
    "exitLink"    : "Go to Universal Credit sign in"
  }],
  "failure"       : [{
    "heading"       : "Reference not recognised",
    "heading2"      : "You have not been able to give the correct reference",
    "lede"          : "Check the reference and try again.",
    "lede2"         : "Sign in to Universal Credit to book an appointment at a job centre, if you haven’t already.",
    "text2"         : "You’ll need to bring your identity documents with you.",
    "attemptsText"  : ["once","twice"],
      "button"      : "Try again",
      "exitLink"    : "Return to your To-do list and enter the reference later",
      "button2"     : "",
      "exitLink2"   : "Go to Universal Credit sign in",
  }],
  "three_fails"       : [{
    "heading"      : "Reference not recognised",
    "lede"         : "You can try to prove your identity using Verify again or you can attend a face to face interview.",
    "question"     : "How do you want to prove your identity?",
    "radioOptions" : [{"value":"Try GOV.UK Verify again"},{"value":"Try using your bank account again"},{"value":"Attend a face to face interview"}],
    "button"       : "Next",
    "exitLink"     : "Return to your To-do list"
  }],
  "second_entry"    : [{
    "heading"   : "Prove your identity",
    "lede"      : "You need to prove who you are by <strong class='addSeven'>a week from today</strong>. If you don’t you might not get paid.",
    "question"  : "You've already requested a reference number",
    "radios"    : [{"value":"Continue using your bank account"},{"value":"Try GOV.UK verify again"}],
    "button"    : "Continue"
  }],
  "no_page_exists"  : [{
    "heading"     : "Oops",
    "lede"        : "Unfortunately, the option you selected is unavailable"
  }],
  "reset"         : [{
    "heading"       : "Reset session",
    "lede"          : "Click the button to clear session information",
    "button"        : "Reset"
  }],
  "research_findings": [{
    "heading"     : "Research findings",
    "lede"        : "No research conducted with this prototype yet"
  }],
  "settings"        : [{
    "heading"     : "Prototype Options",
    "lede"        : "",
    "label"       : "Select the user journey you wish to use",
    "radios"      : [{
      "radioWithConditionalContent": {
        "value": "Claimant",
        "radios": [{
          "value":"Default"
        }, {
          "value":"Expired reference"
        }, {
          "value":"Payment failed"
        }, {
          "value":"System failure"
        }]
      }
    }, {
      "radioWithConditionalContent": {
        "value": "Agent search",
        "radios": [
          {
            "value": "Claimant verified",
          }, {
            "value": "Claimant not verified"
          }, {
            "value": "System failure"
          }]
        }
    }],
    "button"      : "Start journey"
  }],
  "404"        : [{
    "heading"     : "Something’s gone wrong",
    "lede"        : "This page can’t be found. Check the link you’re using and try again.",
    "additional"  : "Or go back to the <a href='/pyi13/uc_login'>Universal Credit sign in page.</a>"
  }],
  "expired"    : [{
    "heading"   : "Sorry, you can't use this service",
    "lede"      : "Your 7 days to link your bank account has run out.",
    "additional"  : "Sign in to Universal Credit to book an appointment at a job centre.",
    "exitLink"  : "Go to Universal Credit sign in"
  }],
  "payment_failed"    : [{
    "heading"   : "Something’s gone wrong",
    "lede"      : "Sorry, you can’t use this service. You need to <a href='#'>book an ID interview</a> at a jobcentre.",
    "button"    : "Go back to Universal Credit"
  }],
  "system_failure": [{
    "heading"   : "Something’s gone wrong",
    "text1"      : "You cannot use this service just now. The problem will be fixed as soon as possible.",
    "text2": "Sign in to Universal Credit to book an appointment at a job centre.",
    "exitLink"  : "Go to Universal Credit sign in"
  }],
  "agent_search"  : [{
    "heading"   : "Find claimant",
    "text"      : "Enter the details of the bank account are using for your Universal Credit payment.",
    "text4"      : "Make sure the details look exactly the same as they do on your bank statement.",
    "exitLink"  : "Clear information and start again",
    "button"    : "Search"
  }],
  "agent_result_success"  : [{
    "heading"   : "The claimant’s identity has been verified online",
    "heading2_1" : "What you need to do next",
    "orderedList": [
      "Complete the identity ALP (agent-led process).",
      "Clear the Verify claimant identity to do."
    ],
    "heading2_2": "What you can tell the claimant",
    "text"      : "Their identity has been verified online and there is no need to see any further documents.",
    "exitLink"  : "Go back to search"
  }],
  "agent_result_failure"  : [{
    "heading"   : "The claimant’s identity has not been verified online",
    "heading2_1" : "What you need to do next",
    "orderedList": [
      "Continue with the standard identity interview using documents or biographical questions.",
      "Complete the identity ALP (agent-led process)."
    ],
    "heading2_2": "What you can tell the claimant",
    "text1"      : "It has not been possible to verify the claimant’s identity online.",
    "text2"      : "This is because the claimant did not use the Prove your Identity service.",
    "exitLink"  : "Go back to search"
  }]
}];

exports.getTableData = function() {
  return data;
};
