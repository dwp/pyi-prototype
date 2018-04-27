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
  "ucfs_task_list"      : [{
    "heading"     : "Apply for Universal Credit",
    "text": "You must complete the remaining 2 sections or your application will not be processed.",
    "text2": "The information you have given us so far will be saved if you need to come back later to finish your application.",
    "taskList" : {
      '1': 'Create a Universal Credit account',
      '2': 'Start claim',
      '3': 'Check your details',
      '4': 'Confirm your identity',
      '5': 'Book a Jobcentre Plus appointment'
    }
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
      "heading"   : "Confirm your identity using your bank account",
      "text"      : "This is a secure government service to confirm your identity, using the bank account details you gave us during your Universal Credit application.",
      "summary": "How does this work?",
      "details1"     : "We use your Universal Credit bank details to send 1p to your bank account. You enter the 6 digit reference number from the 1p payment.",
      "details2": " This proves you have access to that bank account and confirms your identity. This is quicker than confirming your identity in the Jobcentre.",
      "exitLink"  : "Or confirm your identity in a Jobcentre",
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
    "text"      : "These are the bank details you gave us during your Universal Credit application:",
    "checkYourAnswersList": [{
      "question": "Bank Name",
      "answer": "National Westminster"
    }, {
      "question": "Account Name",
      "answer": "Mrs A Person"
    }, {
      "question": "Account Number",
      "answer": "89898989"
    }, {
      "question": "Sort Code",
      "answer": "12-12-12"
    }],
    "text2" : "We'll send the reference number to this bank account. It will be a 6-digit code, for example 12 34 56.",
    "text3"     : "You'll find it on your bank statement, using online, mobile or telephone banking. Or go to a cash machine or your branch to get a statement printout.",
    "button"    : "Send the reference"
  }],
  "bank_submitted"  : [{
    "heading"     : "Find your reference",
    "lede"        : "A reference from Universal Credit has been sent to your bank account.",
    "text1"       : "It might take up to 2 hours to appear. You have 7 days to use it before it expires.",
    "text2" : "It will be a 6-digit code on your bank statement, for example 12 34 56.",
    "exitLink"    : "Enter your reference later",
    "button"      : "Enter your reference"
  }],
  "reminder"      : [{
      "heading"   : "You'll need to enter your reference within 7 days",
      "lede"      : "When you've found your reference, sign back in to Universal Credit to enter the reference and confirm your identity.",
      "button"    : "Sign out of Universal Credit",
      "exitLink"    : "Go back to to-do list"
    }],
 "enter_reference": [{
    "heading"     : "Enter your reference",
    "lede"        : "",
    "hint"        : "It will be a 6-digit code from Universal Credit on your bank statement, for example 12 34 56.",
    "button"      : "Submit"
  }],
  "success"       : [{
    "heading"     : "You have successfully confirmed your identity",
    "heading2"    : "What happens next",
    "listItems": [
      "book your interview at a Jobcentre",
      "bring some identity documents with you "
    ],
    "text2": "We'll tell you what you can bring when you book",
    "button"     : "Book your interview"
  }],
  "book_interview": [{
    "heading"   : "Book your interview",
    "text1"      : "To complete your claim, you'll need to book and attend an interview",
    "phoneText1": "Call to book",
    "phoneText2": "0800 328 5644 (Textphone: 0800 328 1344)",
    "phoneText3": "Monday to Friday, 8am to 6pm",
    "text2": "You'll be asked for your National Insurance Number when you call",
    "text3": "Book as soon as you can or you might have to start again",
    "exitLink"  : "Go to Task List"
  }],
  "get_documents": [{
    "heading"   : "Get your identity documents ready",
    "text1"      : "You need to attend an evidence interview. You'll need to book your interview once you've completed this to-do.",
    "heading2": "Can you bring 1 of these documents to your interview?",
    "hint": "It must be the original document. Any photos must look like you.",
    "listItems": [
      "UK passport",
      "EEA passport",
      "UK photo driving license",
      "national identity card",
      "residence permit or card",
      "immigration status document",
      "registration or naturalisation certificate",
      "bank card for the account where you want your Universal Credit to be paid"
    ],
    "text2": "If you use a bank card, it must show your name, the account number and sort code",
    "button"  : "Next"
  }],
  "failure"       : [{
    "heading"      : "You have entered an incorrect reference",
    "text"         : "To complete your Universal Credit claim, you'll need to:",
    "listItems": [
      "book your interview at a Jobcentre",
      "bring some identity documents with you "
    ],
    "text2": "We'll tell you what you can bring when you book",
    "button"     : "Book your interview"
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
    "heading"     : "Something's gone wrong",
    "text"        : "This page can’t be found. Check the link you’re using and try again."
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
    "lede"        : "Select the user journey you wish to use",
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
        }, {
          "value": "User time-out"
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
    }, {
      "value": "Page not found"
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
    "lede"      : "Sorry, you can’t use this service.",
    "text"  : "Sign in to Universal Credit to book an appointment at a job centre.",
    "exitLink"  : "Go to Universal Credit sign in"
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
  }],
  "session_expired"  : [{
    "heading"   : "Sorry, you’ll have to start again",
    "lede": "You have not entered any details for 20 minutes, so we have cleared your information to keep it secure.", 
    "exitLink"  : "Go to Universal Credit sign in"
  }]
}];

exports.getTableData = function() {
  return data;
};
