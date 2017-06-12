module.exports = {
  ucca1: {
    version: 1,
    release: "01 Dec 2016",
    changes: "Initial draft. No changes made for this version",
    researchFindings: ["Some people were familiar with the concept of sending a payment to your bank account from other services", "Some people were comfortable with the idea of using their bank account but others were suspicious and worried about security"]
  },
  ucca2: {
    version: 2,
    release: "12 Dec 2016",
    changes: ["Service name changed to Prove your identity.","Multiple gramatical errors fixed.","Task on to-do page changed to mirror service name change","Option removed to book an appointment on first pass.","Date format changed to adhere to GOV.UK standard format.","Content greatly reduced on information page about service.","Information page presented in list format.","Bank details obscured.","Option to edit bank details removed for the time being.","Content reduced for information about finding reference number.","Information about reference number presented in list format.","Image of reference word location enlarged.","Toggled help removed from enter your reference page.","Content on failure page amended.","All text except success banner(?) removed from success page."],
    researchFindings: ["Outlining the entire process on 1 page results in low comprehension and suspicion that the process isn’t safe", "People thought that the content explaining it would only take around 10 minutes of time actually meant they only had 10 minutes to complete it", "It is not clear what will happen if the to-do is not completed in time", "'Fraud' terminology was not clearly grasped", "Users expect the transaction to go through instantly", "Users enter the reference number from the example on the bank statement", "Users don’t necessarily see the link between DWP and UC", "Reference number is long - users have to write it down", "Return to your to-do list and enter the reference later isn’t very apparent to the user"]
  },
  pyi3: {
    version: 3,
    release: "10 Jan 2017",
    changes: ["Bank statement image changed to make it more obvious the reference was an example only [UR]", "Reference to 10 minutes removed [UR]", "Explanatory text shortened and added as reveal text under 'Use your bank account' radio button","Separate explanatory page about the service removed","Confirm the payment heading changed to 'Approve the payment'", "All references to DWP changed to Universal Credit", "Send payment button changed to 'Make 1p payment'", "Content shortened on find your reference page","Reminder of timescales page added when a user selects return to todo page","Blue alert box removed from todo page once 1p has been issued","Bank statement image added back to Enter Your Reference page","Content on failure page changed after 3 failed attempts. Verify options provided again for user to repeat the PYI or Verify journeys, or make appointment"],
    researchFindings: ["Users did not understand the deadline given (for example 18 January) for completing the to do", " All users were comfortable with the idea of using their bank account to prove their identity", "No one clicked on the toggle link  ‘What does this mean?’ to reveal the content explaining the process"]
  },
  pyi4: {
    version: 4,
    release: "18 Jan 2017",
    changes: ["Revealed text placed above radio buttons as plain text instead of hidden content [UR]", "Enter your reference label changed from 'Reference' to 'Enter your reference to prove your identity'[UR]", "Bank details removed from the Approve the Payment screen (to test whether users needed reminding which bank account to check).",
"Removed radio buttons from third failed attempt page", "Added second attempt page that restarts the journey with additional option for booking an appointment to provide complete journey for users unable to verify their identity using the service."]
  },
  pyi5: {
    version: 5,
    release: "24 Jan 2017",
    changes: ["Added new page for users to exit and re-enter the application after requesting a reference number to remind them of the deadline. [UR]", "Style changes: moved exit links from beneath the main button to the side, corrected links for mobile views, removed alternate button on to-do page"]
  },
  pyi6: {
    version: 6,
    release: "31 Jan 2017",
    changes: "Added graphics to explain process"
  },
  pyi7: {
    version: 7,
    release: "14 Feb 2017",
    changes: ["Replaced graphics with written content [UR]", "Updated design of index page"]
  },
  pyi8: {
    version: 8,
    release: "07 March 2017",
    changes: ["Removed references to the penny transaction, instead referring to the reference number [UR]",
"Reduced content significantly on most pages [UR]", "Reference changed to TNXXXXX (needed to work on CPS)", "Changed all references to not completing the journey in time from 'You might not get paid' to 'You won't get paid' as a result of advice from OED"],
  researchFindings: ["The '1 penny' language is confusing people: some people think they are requesting their benefit payments or verifying their bank account for future payments", "People don't fully understand what will be happening", "Many users don't read lengthy text and therefore don't understand the process", "A few people thought they couldn't use the system as their preferred method of banking wasn't listed", "People were able to successfully locate and enter the reference with support", "People weren't sure what format the reference should be entered in or how to return to the screen to enter the reference"
]
  },
  pyi9: {
    version: 9,
    release: "15 May 2017",
    changes: ["Added sentence about going to a cashpoint or your bank branch to check statement", "Added ability to configure prototype settings to route users to failure and expiry pages", "Added payment failure page", "Added reference expiry page",
"Added 404 page (system failure)", "Updated bank statement image to match image likely to appear in the live build"]
  }
};
