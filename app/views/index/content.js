module.exports = {
    ucca1: {
        version: 1,
        release: "01 Dec 2016",
        changes: ["Reference: widgets","Initial draft. No changes made for this version"],
        researchFindings: ["Some people were familiar with the concept of sending a payment to your bank account from other services", "Some people were comfortable with the idea of using their bank account but others were suspicious and worried about security"]
    },
    ucca2: {
        version: 2,
        release: "12 Dec 2016",
        changes: ["Reference: uc1617899","Service name changed to Prove your identity.","Multiple gramatical errors fixed.","Task on to-do page changed to mirror service name change","Option removed to book an appointment on first pass.","Date format changed to adhere to GOV.UK standard format.","Content greatly reduced on information page about service.","Information page presented in list format.","Bank details obscured.","Option to edit bank details removed for the time being.","Content reduced for information about finding reference number.","Information about reference number presented in list format.","Image of reference word location enlarged.","Toggled help removed from enter your reference page.","Content on failure page amended.","All text except success banner(?) removed from success page."],
        researchFindings: ["Outlining the entire process on 1 page results in low comprehension and suspicion that the process isn’t safe", "People thought that the content explaining it would only take around 10 minutes of time actually meant they only had 10 minutes to complete it", "It is not clear what will happen if the to-do is not completed in time", "'Fraud' terminology was not clearly grasped", "Users expect the transaction to go through instantly", "Users enter the reference number from the example on the bank statement", "Users don’t necessarily see the link between DWP and UC", "Reference number is long - users have to write it down", "Return to your to-do list and enter the reference later isn’t very apparent to the user"]
    },
    pyi3: {
        version: 3,
        release: "10 Jan 2017",
        changes: ["Reference: 16178","Bank statement image changed to make it more obvious the reference was an example only [UR]", "Reference to 10 minutes removed [UR]", "Explanatory text shortened and added as reveal text under 'Use your bank account' radio button","Separate explanatory page about the service removed","Confirm the payment heading changed to 'Approve the payment'", "All references to DWP changed to Universal Credit", "Send payment button changed to 'Make 1p payment'", "Content shortened on find your reference page","Reminder of timescales page added when a user selects return to todo page","Blue alert box removed from todo page once 1p has been issued","Bank statement image added back to Enter Your Reference page","Content on failure page changed after 3 failed attempts. Verify options provided again for user to repeat the PYI or Verify journeys, or make appointment"],
        researchFindings: ["Users did not understand the deadline given (for example 18 January) for completing the to do", " All users were comfortable with the idea of using their bank account to prove their identity", "No one clicked on the toggle link  ‘What does this mean?’ to reveal the content explaining the process"]
    },
    pyi4: {
        version: 4,
        release: "18 Jan 2017",
        changes: ["Reference: 16178","Revealed text placed above radio buttons as plain text instead of hidden content [UR]", "Enter your reference label changed from 'Reference' to 'Enter your reference to prove your identity'[UR]", "Bank details removed from the Approve the Payment screen (to test whether users needed reminding which bank account to check)",
        "Removed radio buttons from third failed attempt page", "Added second attempt page that restarts the journey with additional option for booking an appointment to provide complete journey for users unable to verify their identity using the service"],
        researchFindings: ["Users said they wouldn’t read all of the information, that it should just get to the point","The action on the approve the payment page was clear to all users","One user said they'd be really annoyed if they had to go to their bank to find the reference in the middle of their application", "Entering the reference on the example vs. the statement was still 50/50"]
    },
    pyi5: {
        version: 5,
        release: "24 Jan 2017",
        changes: ["Reference: 16178","Further changes to bank statement example to make it more obvious that it's an example","Added new page for users to exit and re-enter the application after requesting a reference number to remind them of the deadline. [UR]", "Style changes: moved exit links from beneath the main button to the side, corrected links for mobile views, removed alternate button on to-do page"],
        researchFindings: ["Four out of five user understand when they need to complete the to-do", "One user didn’t read the text on this page the first 'prove your identity' page", "The couple understood what the process would entail", "One user expected to be asked for her bank details", "One user said 'All I understand is that it’s proving my identity'","One user said he needs more information","Approve the payment page: The couple understood that they were going to be paid 1p into their bank account","One user didn’t read the text","One user thinks she is requesting her benefit payment","One user thinks it’s to make sure future transactions of benefit payments will be successful","All users could find the reference on the bank statement","All users entered the correct reference number","2 users did not see the link to save and enter the reference later"]
    },
    pyi6: {
        version: 6,
        release: "31 Jan 2017",
        changes: ["Reference: 16178","Added graphics to explain process"],
        researchFindings: ["Users didn't understand the process and said they wouldn't read all the text","Users were happy to use their bank account","Users could see the deadline for the task","Users thought the penny payment was to do with a benefit payment. One said she would stop at this point because she 'wants more than a penny'","Users knew what bank account to check","Both users would go to the bank to get their paper statement","Users could find the reference number on the statement and entered it correctly","Users didn't understand the graphics","Some users did not scroll down to see the content at the bottom of the page"]
    },
    pyi7: {
        version: 7,
        release: "14 Feb 2017",
        changes: ["Reference: 16178","Replaced graphics with written content [UR]", "Updated design of index page"],
        researchFindings: ["The '1 penny' language is confusing people: some people think they are requesting their benefit payments or verifying their bank account for future payments","One user said: 'Take out the '1 penny paid into your bank account' wording or change it to mention a reference on your bank statement. Just say you can prove your identity online. It's clear when it needs to be done","Users wanted more clarity on how long the process was likely to take and what it meant for them explained in a simple way","Users were split 50/50 on whether they were comfortable with the idea of using their bank account to prove their identity","Some users would expect the penny to appear straight away and would expect a text or other notification: 'If it didn't appear right away, I'd get nervous'","All users found the reference on the statement","Users entered the correct reference number (one on the second attempt)",
        "One user initially entered the number from the example, which he remembered from the previous page","Reminder is helpful. Not sure about the wording ‘might not get paid'; You ‘will not get paid’"]
    },
    pyi8: {
        version: 8,
        release: "07 March 2017",
        changes: ["Reference: p9979630","Removed references to the penny transaction, instead referring to the reference number [UR]","Changed 'Use your bank account' on initial radio buttons to 'Get a reference sent to your bank account' [UR]",
        "Reduced content significantly on most pages [UR]", "Changed all references to not completing the journey in time from 'You might not get paid' to 'You won't get paid' as a result of advice from OED"],
        researchFindings: ["https://confluence.burbank.working-age.digital/confluence/display/PYID/1p+Phase+One+Pilot", "People don't fully understand what will be happening", "Many users don't read lengthy text and therefore don't understand the process", "A few people thought they couldn't use the system as their preferred method of banking wasn't listed", "People were able to successfully locate and enter the reference with support", "People weren't sure what format the reference should be entered or how to return to the screen to enter the reference", "Of the 15 participants sent a reference: 10 successfully found and entered the reference into the prototype; 4 did not return to enter their reference number and couldn't be reached by telephone; 1 hadn't had time to find their reference number when we called"]
    },
    pyi9: {
        version: 9,
        release: "15 May 2017",
        changes: ["Reference: p9979630","Added sentence about going to a cashpoint or your bank branch to check statement [UR]", "Added bank statement image to 'enter your reference page' for people who choose the save and return option [UR]", "Added text explaining bank statement image for people who may not understand image", "Added ability to configure prototype settings to route users to failure and expiry pages", "Added payment failure page", "Added reference expiry page",
        "Added 404 page (system failure)"],
        researchFindings: ["https://confluence.burbank.working-age.digital/confluence/display/PYID/Swindon+Jobcentre+and+Library+-+Phase+Two", "Issues with reference: penny coming through but reference showing as 'DWPGB - FB FUNDING' (Nationwide)"]
    },
    pyi10: {
        version: 10,
        release: "13 July 2017",
        changes: ["Reference: p9979630", "Changes to take account of new user journey with added manual bank checking because of less integration with Universal Credit full service", "Changed all references to proving identity to 'link your bank account' (as identity will not be proved in service - will only be proved after DWP employee has checked bank details)", "Added bank details gather screen", "Added question about roll number to exclude people with building society accounts", "Added instruction to book an ID interview after successfully completing service"],
        researchFindings: ["https://confluence.burbank.working-age.digital/confluence/display/PYID/Southampton+Jobcentre+-+Prototype+testing", "Issues with reference: penny coming through but reference showing as 'DWPGB - FB FUNDING' (Barclays, Co-op)", "People didn't know that 'link your bank account' was to do with identity, most thought that it was about receiving their benefit payment",
        "Most people would chose the 'Verify your identity online' to-do first", "Most people were unsure about what a roll or reference number was or how to find out if they had one", "If people could find this out, some thought they would return, but others would drop out at this point", "Some of the people we spoke to were wary about entering bank details into a website because of negative past experiences (online scams), whereas others had no problem with this", "Of the people concerned about this, some did it anyway because they felt they had to or everything else they'd done would become a waste of time", "If there was something wrong, some people would follow the instructions on the error pages and some would seek support from offline sources (phone or in jobcentre)"]
    },
    pyi11: {
        version: 11,
        release: "28 July 2017",
        changes: ["Reference: p9979630", "New content making it clearer that the service is to do with verifying identity and is an alternative to Verify", "Added option to come for face to face ID interview", "'Link your bank account' wording taken out","Content added to ensure people still book ID interview"],
        researchFindings: ["A large number of the people we spoke to were concerned about using their bank details online. For some of these people, they would not continue using the service. Others would consider continuing but would be wary.", "From all of the error pages, people wanted to call or visit the jobcentre to either book an appointment or ask for help.",
        "Some people are still struggling to understand the reference."]
    },
    pyi12a: {
        version: '12a',
        release: "18 August 2017",
        changes: ["We’ve seen: a substantial increase in people too uneasy about using their bank account to continue to the Prove your Identity service", "We believe this is because: they could see that they did not have to because the option to bring documents in person was explicit", "So if we: make it less explicit by changing 'Bring your documents into a jobcentre' to 'I can't do this online' on the Verify your identity to do (pyi12a/how_verify)", "We’ll see: more people choose to use the service" ],
        researchFindings: ["Lowestoft 7-8 September 2017"]
    },
    pyi12b: {
        version: '12b',
        release: "18 August 2017",
        changes: ["We’ve seen: a substantial increase in people too uneasy about using their bank account to continue to the Prove your Identity service", "We believe this is because: the content did not explain the service well enough - and perhaps made it sound more intrusive than it is", "So if we:  Change ‘Use your bank account to help prove your identity - this could save you time in the job centre’ to ‘Get a reference sent to the bank account you use for Universal Credit’ on the Verify your identity to do (pyi12b/how_verify)", "We’ll see: more people choose to use the service" ],
        researchFindings: ["Lowestoft 7-8 September 2017"]
    },
    pyi13: {
        version: 13,
        release: "12 September 2017",
        changes: ["Delete UC full service screens", "Added explanation text to roll number page"],
        researchFindings: [""]
    },
    pyi14: {
        version: 14,
        release: "26 March 2018",
        changes: [
            "Bring Prototype up to date with current development version",
            "Note: use 123456 as 'correct' reference number"
        ],
        researchFindings: [""]
    },
    pyi15: {
        version: 15,
        release: "3 April 2018",
        changes: [
            "On 'Enter Bank Details' view: Account Name removed, and Sort Code changed to one field"
        ],
        researchFindings: [""]
    },
    pyi16: {
        version: 16,
        release: "20 April 2018",
        changes: [
            "Add agent screens",
            "Add new Prototype Options screen to select different user journeys",
            "Correct 'Something's gone wrong' screens",
            "Add user error messages"
        ],
        researchFindings: [""]
    },
    pyi17a: {
        version: '17a',
        release: "27 April 2018",
        changes: [
            "Full integration with UC assumed (user no longer has to sign in and out of UC)",
            "User no longer has to enter bank details or say if they have a roll number",
            "Various content changes based on the above assumptions"
        ],
        researchFindings: [""]
    },
    pyi17b: {
        version: '17b',
        release: "27 April 2018",
        changes: [
            "Same as 17a, except 1p is sent to user's bank account automatically",
            "Therefore the entry point from the to-do list is later in the journey"
        ],
        researchFindings: [""]
    },
    pyi18a: {
        version: '18a',
        release: "TBC",
        changes: [""],
        researchFindings: [""]
    },
    pyi18b: {
        version: '18b',
        release: "TBC",
        changes: [
            ""
        ],
        researchFindings: [""]
    }
};
