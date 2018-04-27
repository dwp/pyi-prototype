const { check, validationResult } = require('express-validator/check');
const customValidators = require('../helpers/validators')

module.exports = function (app) {
  var content = require('../content/content');
  var routeSettings = routeSettings === undefined ? "default" : routeSettings;
const version = 'pyi17a';

/********
 Entry point
 ********/

  app.get('/' + version, (req, res) => {
    res.redirect('/' + version + '/settings')
  })

/********
 UCFS Task list
 ********/
  app.get('/' + version + '/ucfs_task_list', (req, res) => {
    res.render(version + '/ucfs_task_list', {
      data : content.getTableData(),
      version: version,
      task: req.query.task
    })
  })

  app.get('/' + version + '/go_to_task', (req, res) => {
    if (req.query.task === '4') {
      res.redirect('/' + version + '/bank_details')
    }
  })

/*****
bank_details
******/

app.get('/' + version + '/bank_details', function(req,res) {
    res.render(version + '/bank_details', {
      data    : content.getTableData(),
      version: version
    });
});
app.post('/' + version + '/bank_details', function(req,res) {
  if (req.cookies.claimantJourneyOption === 'User time-out') {
    res.redirect('/' + version + '/session_expired');
  } else {
    req.session[version + '-bank_details'] = req.body;
    res.redirect('/' + version + '/make_payment');
  }
});

/*****
make_payment
******/

app.get('/' + version + '/make_payment', function(req,res) {
  res.render(version + '/make_payment', {
    data    : content.getTableData(),
    version: version
  });
});
app.post('/' + version + '/make_payment', function (req, res) {
  if(req.cookies.claimantJourneyOption === 'Payment failed') {
    res.redirect('/' + version + '/payment_failed');
  } else {
    res.redirect('/' + version + '/bank_submitted');
  }
});


/*****
bank_submitted
******/

app.get('/' + version + '/bank_submitted', function(req,res) {
    res.render(version + '/bank_submitted', {
      data    : content.getTableData(),
      twoPayments : false,
      version: version
    });
});
app.post('/' + version + '/bank_submitted', function(req,res) {
  res.redirect('/' + version + '/enter_reference');
});


/*****
reminder
******/

app.get('/' + version + '/reminder', function(req,res) {
    res.render(version + '/reminder', {
     data     :   content.getTableData(),
     version: version
    });
});
app.post('/' + version + '/reminder', function(req,res) {
    if(req.body.submit === 'Book interview') {
        res.redirect('/' + version + '/404');
    } else {
        res.redirect('/' + version + '/uc_login');
    }
});

/********
Enter Reference
*********/

app.get('/' + version + '/enter_reference', function(req,res) {
  res.cookie('attempts', '0')
  res.render(version + '/enter_reference', {
    data     :   content.getTableData(),
    version: version
  });
});

app.post('/' + version + '/enter_reference', [
  check('codeTestInput')
    .isLength({min: 1})
    .withMessage('Enter the 6-digit code from Universal Credit on your bank statement')
    .custom(value => {
      if (!customValidators.isDigitsOrSpaces(value)) {
        throw new Error('Enter a reference that only contains 6 numbers')
      }
      if (!customValidators.isNotTooFewDigits(value, 6)) {
        throw new Error('Enter a reference that contains 6 numbers')
      }
      if (!customValidators.isNotTooManyDigits(value, 6)) {
        throw new Error('Enter a reference that only contains 6 numbers')
      }
      return true
    })
  ],
  function(req,res,next) {
    const errors = validationResult(req);
    const parsedErrors = parseErrors(errors.array({ onlyFirstError: true }))
    if (!errors.isEmpty()) {
      res.render(version + '/enter_reference', {
        data     :   content.getTableData(),
        version: version,
        errors: parsedErrors,
        values: req.body
        });
    } else {
      next()
    }
  },
  function(req,res) {
    if (req.body.codeTestInput.replace(/\s+/g, '') === '123456') {
    switch(req.cookies.claimantJourneyOption) {
      case 'System failure':
        res.redirect('/' + version + '/system_failure');
        break;
      case 'Expired reference':
        res.redirect('/' + version + '/expired');
        break;
      default:
      res.redirect('/' + version + '/success');
    }
  } else {
    if(req.cookies.claimantJourneyOption === "System failure") {
      res.redirect('/' + version + '/system_failure');
    } else {
      let attempts = parseInt(req.cookies.attempts)
      attempts++
      if (attempts < 3) {
        const remainingAttempts = 3 - attempts
        res.cookie('attempts', attempts)
        res.render(version + '/enter_reference', {
          data        :   content.getTableData(),
          version: version,
          errors: {
            'codeTestInput':
            'Enter a correct reference. You have ' + remainingAttempts + ' more attempt' + (remainingAttempts === 1 ? '' : 's')
          }
        })
      } else {
        res.redirect('/' + version + '/failure');
      }
    }
  }
});

/********
No page exists
*********/

app.get('/' + version + '/no_page_exists', function(req,res) {
    res.render(version + '/no_page_exists', {
    data     :   content.getTableData(),
    version: version
    });
});
app.post('/' + version + '/no_page_exists', function(req,res) {
  res.redirect('/' + version + '/bank_details');
});

/********
Success
*********/

app.get('/' + version + '/success', function(req,res) {
    res.render(version + '/success', {
    data     :   content.getTableData(),
    version: version
    });
});
app.post('/' + version + '/success', function(req,res) {
  req.session[version + '-success'] = req.body;
  if(req.body.submit === "Book my interview") {
      res.redirect('/' + version + '/404');
  } else {
     res.redirect('/' + version + '/uc_login');
  }
});

/********
Failure
*********/

app.get('/' + version + '/failure', function(req,res) {
    res.render(version + '/failure', {
      data        :   content.getTableData(),
      version: version
    });
});
app.post('/' + version + '/failure', function(req,res) {
    req.session[version + '-failure'] = req.body;
    if (req.body.verifyAgain == 'Try GOV.UK Verify again') {
      res.redirect('/' + version + '/404');
    } else if (req.body.verifyAgain == 'Try using your bank account again') {
      res.redirect('/' + version + '/bank_details');
    } else if (req.body.verifyAgain == 'Attend a face to face interview') {
      res.redirect('/' + version + '/404');
    } else {
  res.redirect('/' + version + '/enter_reference');
}
});

/********
Book Interview (success)
*********/

app.get('/' + version + '/book_interview', (req, res) => {
  res.render(version + '/book_interview', {
    data        :   content.getTableData(),
    version: version
  })
})

/********
Book Interview (failure - documents required)
*********/

app.get('/' + version + '/get_documents', (req, res) => {
  res.render(version + '/get_documents', {
    data        :   content.getTableData(),
    version: version
  })
})

/********
Second Entry
*********/

app.get('/' + version + '/second_entry', function(req,res) {
    res.render(version + '/second_entry', {
    data     : content.getTableData(),
    version: version
    });
});
app.post('/' + version + '/second_entry', function(req,res) {
  req.session[version + '-second_entry'] = req.body;
    res.redirect('/' + version + '/enter_reference');
});

/******
Reset
*******/

app.get('/' + version + '/reset', function(req,res) {
    res.render(version + '/reset', {
    data       :   content.getTableData(),
    version: version
  });
});

app.post('/' + version + '/reset', function(req,res) {
  res.cookie('claimantJourneyOption', 'default');
  req.session.destroy();
  res.redirect('/' + version + '/bank_details');
});

/**************
Settings
***************/
app.get('/' + version + '/settings', function(req, res) {
  res.render(version + '/settings', {
    data    : content.getTableData(),
    version: version
  });
});

app.post('/' + version + '/settings', function(req, res) {
  if (req.body.settings.toLowerCase() === 'claimant') {
    res.cookie('claimantJourneyOption', req.body.settings_1)
    res.redirect('/' + version + '/ucfs_task_list?task=4');
  } else if (req.body.settings.toLowerCase() === 'agent search') {
    res.cookie('agentJourneyOption', req.body.settings_2)
    res.redirect('/' + version + '/agent_search');
  } else {
    res.redirect('/' + version + '/no_page_exists');
  }
});

/**************
404
***************/
app.get('/' + version + '/404', function(req,res) {
    res.render(version + '/404', {
    data     : content.getTableData(),
    version: version
    });
});
app.post('/' + version + '/404', function(req,res) {
  res.redirect('/' + version + '/bank_details');
});

/*****
Expired
******/

app.get('/' + version + '/expired', function(req,res) {
    res.render(version + '/expired', {
     data     :   content.getTableData(),
     version: version
    });
});
app.post('/' + version + '/expired', function(req,res) {
  req.session[version + '-expired'] = req.body;
  res.redirect('/' + version + '/uc_login');
});

/*****
Payment Failed
******/

app.get('/' + version + '/payment_failed', function(req,res) {
    res.render(version + '/payment_failed', {
     rollNumber  : req.session[version + '-has_roll_number'],
     data     :   content.getTableData(),
     version: version
    });
});
app.post('/' + version + '/payment_failed', function(req,res) {
  req.session[version + '-payment_failed'] = req.body;
  res.redirect('/' + version + '/uc_login');
});

/*****
System failure
******/

app.get('/' + version + '/system_failure', function(req,res) {
    res.render(version + '/system_failure', {
     data     :   content.getTableData(),
     version: version
    });
});
app.post('/' + version + '/system_failure', function(req,res) {
  res.redirect('/' + version + '/uc_login');
});

/*****
Session expired
******/

app.get('/' + version + '/session_expired', function(req,res) {
  res.render(version + '/session_expired', {
   data     :   content.getTableData(),
   version: version
  });
});
app.post('/' + version + '/session_expired', function(req,res) {
res.redirect('/' + version + '/uc_login');
});


/*****
 Agent screens
 *****/
app.get('/' + version + '/agent_search', function(req,res) {
  res.render(version + '/agent_search', {
    data     :   content.getTableData(),
    version: version
  });
});

app.post('/' + version + '/agent_search', [
  check('claimantId')
    .isLength({min: 1})
    .withMessage('Enter the claimant url')
  ,
  check('partialBankAccountNumber')
    .isLength({min: 1})
    .withMessage('Enter last 4 digits of the account number')
    .custom(value => {
      if (!customValidators.isDigitsOrSpaces(value)) {
        throw new Error('Enter last 4 digits of the account number')
      }
      if (!customValidators.isNotTooFewDigits(value, 4)) {
        throw new Error('Enter last 4 digits of the account number')
      }
      if (!customValidators.isNotTooManyDigits(value, 4)) {
        throw new Error('Enter last 4 digits of the account number')
      }
      return true
    })
  ,
  check('sortCode')
    .isLength({min: 1})
    .withMessage('Enter the sort code')
    .custom(value => {
      if (!customValidators.isDigitsSpacesOrDashes(value)) {
        throw new Error('Enter the sort code')
      }
      if (!customValidators.isNotTooFewDigits(value, 6)) {
        throw new Error('Enter the sort code')
      }
      if (!customValidators.isNotTooManyDigits(value, 6)) {
        throw new Error('Enter the sort code')
      }
      return true
    })
  ], function(req,res,next) {
    const errors = validationResult(req);
    const parsedErrors = parseErrors(errors.array({ onlyFirstError: true }))
    if (!errors.isEmpty()) {
      res.render(version + '/agent_search', {
        data     :   content.getTableData(),
        version: version,
        errors: parsedErrors,
        values: req.body
      });
    } else {
      next()
    }

  }, function(req, res) {
    let nextView

    if (req.cookies.agentJourneyOption === 'Claimant verified') {
      nextView = '/agent_result_success'
    } else if (req.cookies.agentJourneyOption === 'Claimant not verified') {
      nextView = '/agent_result_failure'
    } else {
      nextView = '/system_failure'
    }

    res.render(version + nextView, {
      data: content.getTableData(),
      version: version
    });
  });

app.get('/' + version + '/agent_result_success', function(req,res) {
  res.render(version + '/agent_result_success', {
    data     :   content.getTableData(),
    version: version
  });
});

app.get('/' + version + '/agent_result_failure', function(req,res) {
  res.render(version + '/agent_result_failure', {
    data     :   content.getTableData(),
    version: version
  });
});

};

function parseErrors(errors) {
  let parsedErrors = {}
  let propertyName, propertyValue
  for (error in errors) {
    propertyName = errors[error].param
    propertyValue = errors[error].msg
    parsedErrors[propertyName] = propertyValue
  }
  return parsedErrors
}