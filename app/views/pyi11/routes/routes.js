
module.exports = function (app) {
  var content = require('../content/content');
  var routeSettings = routeSettings === undefined ? "default" : routeSettings;

/*********
UC Login Page
**********/

app.get('/pyi11/uc_login', function(req, res) {
  res.render('pyi11/uc_login', {
    data : content.getTableData()
  });
});
app.post('/pyi11/uc_login', function(req, res) {
  req.session['pyi11-uc_login'] = req.body;
  res.redirect('/pyi11/to_do_page');
});

/********
To-do Page
*********/

app.get('/pyi11/to_do_page', function(req,res) {
    res.render('pyi11/to_do_page', {
      data          : content.getTableData(),
      bank_details  : req.session['pyi11-bank_details'],
      enter_bank_details: req.session['pyi11-enter_bank_details'],
      success       : req.session['pyi11-success'],
      failure       : req.session['pyi11-failure'],
      returning     : req.session['pyi11-uc_login'],
      payment_failed: req.session['pyi11-payment_failed'],
      expired       : req.session['pyi11-expired']
    });
});
app.post('/pyi11/to_do_page', function (req, res) {
  res.redirect('/pyi11/verify_identity');
});

/*********
verify_identity
**********/

app.get('/pyi11/verify_identity', function(req, res) {
  res.render('pyi11/verify_identity', {
    data : content.getTableData()
  });
});
app.post('/pyi11/verify_identity', function(req, res) {
    if (req.body.howVerify == 'Try another option - GOV.UK Verify didn’t work for me' ){
        res.redirect('/pyi11/how_verify');
    } else {
        res.redirect('/pyi11/404');
    }
});

/********
How verify
*********/

app.get('/pyi11/how_verify', function(req,res) {
    res.render('pyi11/how_verify', {
    data     : content.getTableData()
    });
});
app.post('/pyi11/how_verify', function(req,res) {
    if (req.body.howVerify == 'Use your bank account to help prove your identity - this could save you time in the job centre' ){
    res.redirect('/pyi11/bank_details');
    } else {
    res.redirect('/pyi11/404');
    }
});

/*****
bank_details
******/

app.get('/pyi11/bank_details', function(req,res) {
    res.render('pyi11/bank_details', {
      data    : content.getTableData()
    });
});
app.post('/pyi11/bank_details', function(req,res) {
  req.session['pyi11-bank_details'] = req.body;
  res.redirect('/pyi11/has_roll_number');
});

/*****
has_roll_number
******/

app.get('/pyi11/has_roll_number', function(req,res) {
    res.render('pyi11/has_roll_number', {
      data    : content.getTableData()
    });
});
app.post('/pyi11/has_roll_number', function(req,res) {
  req.session['pyi11-has_roll_number'] = req.body;
  if(req.body.rollNumber === "Yes") {
    res.redirect('/pyi11/payment_failed');
  } else {
  res.redirect('/pyi11/enter_bank_details');
}
});

/*****
enter_bank_details
******/

app.get('/pyi11/enter_bank_details', function(req,res) {
    res.render('pyi11/enter_bank_details', {
      data    : content.getTableData()
    });
});
app.post('/pyi11/enter_bank_details', function(req,res) {
  req.session['pyi11-enter_bank_details'] = req.body;
  if(routeSettings === "failedPayment") {
    res.redirect('/pyi11/payment_failed');
  } else {
  res.redirect('/pyi11/bank_submitted');
}
});

/*****
bank_submitted
******/

app.get('/pyi11/bank_submitted', function(req,res) {
    res.render('pyi11/bank_submitted', {
      data    : content.getTableData(),
      twoPayments : false
    });
});
app.post('/pyi11/bank_submitted', function(req,res) {
  if(routeSettings === "failedPayment") {
    res.redirect('/pyi11/payment_failed');
  } else {
    res.redirect('/pyi11/enter_reference');
}
});


/*****
reminder
******/

app.get('/pyi11/reminder', function(req,res) {
    res.render('pyi11/reminder', {
     data     :   content.getTableData()
    });
});
app.post('/pyi11/reminder', function(req,res) {
    if(req.body.submit === 'Book interview') {
        res.redirect('/pyi11/404');
    } else {
        res.redirect('/pyi11/to_do_page');
    }
});

/********
Enter Reference
*********/

app.get('/pyi11/enter_reference', function(req,res) {
    res.render('pyi11/enter_reference', {
    data     :   content.getTableData(),
    second_entry  : req.session['pyi11-second_entry']
    });
});
app.post('/pyi11/enter_reference', function(req,res) {
  if (req.body.codeTestInput.toLowerCase() == 'p9979630') {
    switch(routeSettings) {
      case "failedSystem":
        res.redirect('/pyi11/system_failure');
        break;
      case "expiredReference":
        res.redirect('/pyi11/expired');
        break;
      default:
      res.redirect('/pyi11/success');
    }
  } else {
    if(routeSettings === "failedSystem") {
      res.redirect('/pyi11/system_failure');
    } else {
      res.redirect('/pyi11/failure');
    }
  }
});

/********
No page exists
*********/

app.get('/pyi11/no_page_exists', function(req,res) {
    res.render('pyi11/no_page_exists', {
    data     :   content.getTableData()
    });
});
app.post('/pyi11/no_page_exists', function(req,res) {
  res.redirect('/pyi11/to_do_page');
});

/********
Success
*********/

app.get('/pyi11/success', function(req,res) {
    res.render('pyi11/success', {
    data     :   content.getTableData()
    });
});
app.post('/pyi11/success', function(req,res) {
  req.session['pyi11-success'] = req.body;
  if(req.body.submit === "Book my interview") {
      res.redirect('/pyi11/404');
  } else {
     res.redirect('/pyi11/to_do_page');
  }
});

/********
Failure
*********/

app.get('/pyi11/failure', function(req,res) {
    req.session.attempts ++;
    res.render('pyi11/failure', {
      attempts    :   (req.session.attempts || 0) + 1,
      data        :   content.getTableData()
    });
    if (req.session.attempts === 2) {
      req.session.destroy();
    }
});
app.post('/pyi11/failure', function(req,res) {
    console.log(req.body);
    req.session['pyi11-failure'] = req.body;
    if (req.body.verifyAgain == 'Try GOV.UK Verify again') {
      res.redirect('/pyi11/404');
    } else if (req.body.verifyAgain == 'Try using your bank account again') {
      res.redirect('/pyi11/to_do_page');
    } else if (req.body.verifyAgain == 'Attend a face to face interview') {
      res.redirect('/pyi11/404');
    } else {
  res.redirect('/pyi11/enter_reference');
}
});

/********
Second Entry
*********/

app.get('/pyi11/second_entry', function(req,res) {
    res.render('pyi11/second_entry', {
    data     : content.getTableData()
    });
});
app.post('/pyi11/second_entry', function(req,res) {
  req.session['pyi11-second_entry'] = req.body;
    res.redirect('/pyi11/enter_reference');
});

/******
Reset
*******/

app.get('/pyi11/reset', function(req,res) {
    res.render('pyi11/reset', {
    data       :   content.getTableData()
  });
});

app.post('/pyi11/reset', function(req,res) {
  routeSettings = "default";
  req.session.destroy();
  res.redirect('/pyi11/to_do_page');
});

/**************
Settings
***************/
app.get('/pyi11/settings', function(req, res) {
  res.render('pyi11/settings', {
    data    : content.getTableData()
  });
});

app.post('/pyi11/settings', function(req, res) {
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
  res.redirect('/pyi11/to_do_page');
});

/**************
404
***************/
app.get('/pyi11/404', function(req,res) {
    res.render('pyi11/404', {
    data     : content.getTableData()
    });
});
app.post('/pyi11/404', function(req,res) {
  res.redirect('/pyi11/to_do_page');
});

/*****
Expired
******/

app.get('/pyi11/expired', function(req,res) {
    res.render('pyi11/expired', {
     data     :   content.getTableData()
    });
});
app.post('/pyi11/expired', function(req,res) {
  req.session['pyi11-expired'] = req.body;
  res.redirect('/pyi11/to_do_page');
});

/*****
Payment Failed
******/

app.get('/pyi11/payment_failed', function(req,res) {
    res.render('pyi11/payment_failed', {
     rollNumber  : req.session['pyi11-has_roll_number'],
     data     :   content.getTableData()
    });
});
app.post('/pyi11/payment_failed', function(req,res) {
  req.session['pyi11-payment_failed'] = req.body;
  res.redirect('/pyi11/to_do_page');
});

/*****
System failure
******/

app.get('/pyi11/system_failure', function(req,res) {
    res.render('pyi11/system_failure', {
     data     :   content.getTableData()
    });
});
app.post('/pyi11/system_failure', function(req,res) {
  res.redirect('/pyi11/to_do_page');
});

};
