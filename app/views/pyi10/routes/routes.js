
module.exports = function (app) {
  var content = require('../content/content');
  var routeSettings = routeSettings === undefined ? "default" : routeSettings;

/*********
UC Login Page
**********/

app.get('/pyi10/uc_login', function(req, res) {
  res.render('pyi10/uc_login', {
    data : content.getTableData()
  });
});
app.post('/pyi10/uc_login', function(req, res) {
  req.session['pyi10-uc_login'] = req.body;
  res.redirect('/pyi10/to_do_page');
});

/********
To-do Page
*********/

app.get('/pyi10/to_do_page', function(req,res) {
    res.render('pyi10/to_do_page', {
      data          : content.getTableData(),
      bank_details  : req.session['pyi10-bank_details'],
      success       : req.session['pyi10-success'],
      returning     : req.session['pyi10-uc_login'],
      payment_failed: req.session['pyi10-payment_failed'],
      expired       : req.session['pyi10-expired']
    });
});
app.post('/pyi10/to_do_page', function (req, res) {
  res.redirect('/pyi10/how_verify');
});

/********
How verify
*********/

app.get('/pyi10/how_verify', function(req,res) {
    res.render('pyi10/how_verify', {
    data     : content.getTableData()
    });
});
app.post('/pyi10/how_verify', function(req,res) {
//   if (req.body.howVerify == 'Get a reference sent to your bank account' ){
//   res.redirect('/pyi10/bank_details');
// } else {
// res.redirect('/pyi10/404');
// }
if (req.body.submit == 'Link my bank account' ){
res.redirect('/pyi10/bank_details');
} else {
res.redirect('/pyi10/404');
}
});

/*****
bank_details
******/

app.get('/pyi10/bank_details', function(req,res) {
    res.render('pyi10/bank_details', {
      data    : content.getTableData()
    });
});
app.post('/pyi10/bank_details', function(req,res) {
  req.session['pyi10-bank_details'] = req.body;
  if(routeSettings === "failedPayment") {
    res.redirect('/pyi10/payment_failed');
  } else {
  res.redirect('/pyi10/has_roll_number');
}
});

/*****
has_roll_number
******/

app.get('/pyi10/has_roll_number', function(req,res) {
    res.render('pyi10/has_roll_number', {
      data    : content.getTableData()
    });
});
app.post('/pyi10/has_roll_number', function(req,res) {
  req.session['pyi10-has_roll_number'] = req.body;
  if(req.body.rollNumber === "Yes") {
    res.redirect('/pyi10/payment_failed');
  } else {
  res.redirect('/pyi10/enter_bank_details');
}
});

/*****
enter_bank_details
******/

app.get('/pyi10/enter_bank_details', function(req,res) {
    res.render('pyi10/enter_bank_details', {
      data    : content.getTableData()
    });
});
app.post('/pyi10/enter_bank_details', function(req,res) {
  res.redirect('/pyi10/bank_submitted');
});

/*****
bank_submitted
******/

app.get('/pyi10/bank_submitted', function(req,res) {
    res.render('pyi10/bank_submitted', {
      data    : content.getTableData(),
      twoPayments : false
    });
});
app.post('/pyi10/bank_submitted', function(req,res) {
  if(routeSettings === "failedPayment") {
    res.redirect('/pyi10/payment_failed');
  } else {
    res.redirect('/pyi10/enter_reference');
}
});


/*****
reminder
******/

app.get('/pyi10/reminder', function(req,res) {
    res.render('pyi10/reminder', {
     data     :   content.getTableData()
    });
});
app.post('/pyi10/reminder', function(req,res) {
  res.redirect('/pyi10/to_do_page');
});

/********
Enter Reference
*********/

app.get('/pyi10/enter_reference', function(req,res) {
    res.render('pyi10/enter_reference', {
    data     :   content.getTableData(),
    second_entry  : req.session['pyi10-second_entry']
    });
});
app.post('/pyi10/enter_reference', function(req,res) {
  if (req.body.codeTestInput.toLowerCase() == 'p9979630') {
    switch(routeSettings) {
      case "failedSystem":
        res.redirect('/pyi10/system_failure');
        break;
      case "expiredReference":
        res.redirect('/pyi10/expired');
        break;
      default:
      res.redirect('/pyi10/success');
    }
  } else {
    if(routeSettings === "failedSystem") {
      res.redirect('/pyi10/system_failure');
    } else {
      res.redirect('/pyi10/failure');
    }
  }
});

/********
No page exists
*********/

app.get('/pyi10/no_page_exists', function(req,res) {
    res.render('pyi10/no_page_exists', {
    data     :   content.getTableData()
    });
});
app.post('/pyi10/no_page_exists', function(req,res) {
  res.redirect('/pyi10/to_do_page');
});

/********
Success
*********/

app.get('/pyi10/success', function(req,res) {
    res.render('pyi10/success', {
    data     :   content.getTableData()
    });
});
app.post('/pyi10/success', function(req,res) {
  req.session['pyi10-success'] = req.body;
  res.redirect('/pyi10/to_do_page');
});

/********
Failure
*********/

app.get('/pyi10/failure', function(req,res) {
    req.session.attempts ++;
    res.render('pyi10/failure', {
      attempts    :   (req.session.attempts || 0) + 1,
      data        :   content.getTableData()
    });
    if (req.session.attempts === 2) {
      req.session.destroy();
    }
});
app.post('/pyi10/failure', function(req,res) {
    req.session['pyi10-failure'] = req.body;
    if (req.body.verifyAgain == 'Try GOV.UK Verify again') {
      res.redirect('/pyi10/404');
    } else if (req.body.verifyAgain == 'Try using your bank account again') {
      res.redirect('/pyi10/second_attempt');
    } else if (req.body.verifyAgain == 'Attend a face to face interview') {
      res.redirect('/pyi10/404');
    } else {
  res.redirect('/pyi10/enter_reference');
}
});

/********
Second Attempt
*********/

app.get('/pyi10/second_attempt', function(req,res) {
    res.render('pyi10/second_attempt', {
    data     : content.getTableData()
    });
});
app.post('/pyi10/second_attempt', function(req,res) {
  if (req.body.howVerify == 'Get another reference sent to your bank account' ){
  res.redirect('/pyi10/bank_details');
} else {
res.redirect('/pyi10/404');
}
});

/********
Second Entry
*********/

app.get('/pyi10/second_entry', function(req,res) {
    res.render('pyi10/second_entry', {
    data     : content.getTableData()
    });
});
app.post('/pyi10/second_entry', function(req,res) {
  req.session['pyi10-second_entry'] = req.body;
    res.redirect('/pyi10/enter_reference');
});

/******
Reset
*******/

app.get('/pyi10/reset', function(req,res) {
    res.render('pyi10/reset', {
    data       :   content.getTableData()
  });
});

app.post('/pyi10/reset', function(req,res) {
  routeSettings = "default";
  req.session.destroy();
  res.redirect('/pyi10/to_do_page');
});

/**************
Research findings
***************/
app.get('/pyi10/research_findings', function(req,res) {
    res.render('pyi10/research_findings', {
    data     : content.getTableData()
    });
});

/**************
Changes made
***************/
app.get('/pyi10/changes_made', function(req,res) {
    res.render('pyi10/changes_made', {
    data     : content.getTableData()
    });
});

/**************
Settings
***************/
app.get('/pyi10/settings', function(req, res) {
  res.render('pyi10/settings', {
    data    : content.getTableData()
  });
});

app.post('/pyi10/settings', function(req, res) {
  switch(req.body.settings.toLowerCase()) {
    case "payment failed":
      routeSettings = "failedPayment";
      break;
    case "expired reference":
      routeSettings = "expiredReference";
      break;
    case "system failure":
      routeSettings = "failedSystem";
      break;
    default:
      routeSettings = "default";
      break;
  }
  res.redirect('/pyi10/to_do_page');
});

/**************
404
***************/
app.get('/pyi10/404', function(req,res) {
    res.render('pyi10/404', {
    data     : content.getTableData()
    });
});
app.post('/pyi10/404', function(req,res) {
  res.redirect('/pyi10/to_do_page');
});

/*****
Expired
******/

app.get('/pyi10/expired', function(req,res) {
    res.render('pyi10/expired', {
     data     :   content.getTableData()
    });
});
app.post('/pyi10/expired', function(req,res) {
  req.session['pyi10-expired'] = req.body;
  res.redirect('/pyi10/to_do_page');
});

/*****
Payment Failed
******/

app.get('/pyi10/payment_failed', function(req,res) {
    res.render('pyi10/payment_failed', {
     rollNumber  : req.session['pyi10-has_roll_number'],
     data     :   content.getTableData()
    });
});
app.post('/pyi10/payment_failed', function(req,res) {
  req.session['pyi10-payment_failed'] = req.body;
  res.redirect('/pyi10/to_do_page');
});

/*****
System failure
******/

app.get('/pyi10/system_failure', function(req,res) {
    res.render('pyi10/system_failure', {
     data     :   content.getTableData()
    });
});
app.post('/pyi10/system_failure', function(req,res) {
  res.redirect('/pyi10/to_do_page');
});

};
