
module.exports = function (app) {
  var content = require('../content/content');
  var routeSettings = routeSettings === undefined ? "default" : routeSettings;

/*********
UC Login Page
**********/

app.get('/pyi12b/uc_login', function(req, res) {
  res.render('pyi12b/uc_login', {
    data : content.getTableData()
  });
});
app.post('/pyi12b/uc_login', function(req, res) {
  req.session['pyi12b-uc_login'] = req.body;
  res.redirect('/pyi12b/to_do_page');
});

/********
To-do Page
*********/

app.get('/pyi12b/to_do_page', function(req,res) {
    res.render('pyi12b/to_do_page', {
      data          : content.getTableData(),
      bank_details  : req.session['pyi12b-bank_details'],
      enter_bank_details: req.session['pyi12b-enter_bank_details'],
      success       : req.session['pyi12b-success'],
      failure       : req.session['pyi12b-failure'],
      returning     : req.session['pyi12b-uc_login'],
      payment_failed: req.session['pyi12b-payment_failed'],
      expired       : req.session['pyi12b-expired']
    });
});
app.post('/pyi12b/to_do_page', function (req, res) {
  res.redirect('/pyi12b/verify_identity');
});

/*********
verify_identity
**********/

app.get('/pyi12b/verify_identity', function(req, res) {
  res.render('pyi12b/verify_identity', {
    data : content.getTableData()
  });
});
app.post('/pyi12b/verify_identity', function(req, res) {
    if (req.body.howVerify == 'Try another option - GOV.UK Verify didn’t work for me' ){
        res.redirect('/pyi12b/how_verify');
    } else {
        res.redirect('/pyi12b/404');
    }
});

/********
How verify
*********/

app.get('/pyi12b/how_verify', function(req,res) {
    res.render('pyi12b/how_verify', {
    data     : content.getTableData()
    });
});
app.post('/pyi12b/how_verify', function(req,res) {
    if (req.body.howVerify == 'Get a reference sent to the bank account you use for Universal Credit' ){
    res.redirect('/pyi12b/bank_details');
    } else {
    res.redirect('/pyi12b/404');
    }
});

/*****
bank_details
******/

app.get('/pyi12b/bank_details', function(req,res) {
    res.render('pyi12b/bank_details', {
      data    : content.getTableData()
    });
});
app.post('/pyi12b/bank_details', function(req,res) {
  req.session['pyi12b-bank_details'] = req.body;
  res.redirect('/pyi12b/has_roll_number');
});

/*****
has_roll_number
******/

app.get('/pyi12b/has_roll_number', function(req,res) {
    res.render('pyi12b/has_roll_number', {
      data    : content.getTableData()
    });
});
app.post('/pyi12b/has_roll_number', function(req,res) {
  req.session['pyi12b-has_roll_number'] = req.body;
  if(req.body.rollNumber === "Yes") {
    res.redirect('/pyi12b/payment_failed');
  } else {
  res.redirect('/pyi12b/enter_bank_details');
}
});

/*****
enter_bank_details
******/

app.get('/pyi12b/enter_bank_details', function(req,res) {
    res.render('pyi12b/enter_bank_details', {
      data    : content.getTableData()
    });
});
app.post('/pyi12b/enter_bank_details', function(req,res) {
  req.session['pyi12b-enter_bank_details'] = req.body;
  if(routeSettings === "failedPayment") {
    res.redirect('/pyi12b/payment_failed');
  } else {
  res.redirect('/pyi12b/bank_submitted');
}
});

/*****
bank_submitted
******/

app.get('/pyi12b/bank_submitted', function(req,res) {
    res.render('pyi12b/bank_submitted', {
      data    : content.getTableData(),
      twoPayments : false
    });
});
app.post('/pyi12b/bank_submitted', function(req,res) {
  if(routeSettings === "failedPayment") {
    res.redirect('/pyi12b/payment_failed');
  } else {
    res.redirect('/pyi12b/enter_reference');
}
});


/*****
reminder
******/

app.get('/pyi12b/reminder', function(req,res) {
    res.render('pyi12b/reminder', {
     data     :   content.getTableData()
    });
});
app.post('/pyi12b/reminder', function(req,res) {
    if(req.body.submit === 'Book interview') {
        res.redirect('/pyi12b/404');
    } else {
        res.redirect('/pyi12b/to_do_page');
    }
});

/********
Enter Reference
*********/

app.get('/pyi12b/enter_reference', function(req,res) {
    res.render('pyi12b/enter_reference', {
    data     :   content.getTableData(),
    second_entry  : req.session['pyi12b-second_entry']
    });
});
app.post('/pyi12b/enter_reference', function(req,res) {
  if (req.body.codeTestInput.replace(/\s+/g, '') === '997963') {
    switch(routeSettings) {
      case "failedSystem":
        res.redirect('/pyi12b/system_failure');
        break;
      case "expiredReference":
        res.redirect('/pyi12b/expired');
        break;
      default:
      res.redirect('/pyi12b/success');
    }
  } else {
    if(routeSettings === "failedSystem") {
      res.redirect('/pyi12b/system_failure');
    } else {
      res.redirect('/pyi12b/failure');
    }
  }
});

/********
No page exists
*********/

app.get('/pyi12b/no_page_exists', function(req,res) {
    res.render('pyi12b/no_page_exists', {
    data     :   content.getTableData()
    });
});
app.post('/pyi12b/no_page_exists', function(req,res) {
  res.redirect('/pyi12b/to_do_page');
});

/********
Success
*********/

app.get('/pyi12b/success', function(req,res) {
    res.render('pyi12b/success', {
    data     :   content.getTableData()
    });
});
app.post('/pyi12b/success', function(req,res) {
  req.session['pyi12b-success'] = req.body;
  if(req.body.submit === "Book my interview") {
      res.redirect('/pyi12b/404');
  } else {
     res.redirect('/pyi12b/to_do_page');
  }
});

/********
Failure
*********/

app.get('/pyi12b/failure', function(req,res) {
    req.session.attempts ++;
    res.render('pyi12b/failure', {
      attempts    :   (req.session.attempts || 0) + 1,
      data        :   content.getTableData()
    });
    if (req.session.attempts === 2) {
      req.session.destroy();
    }
});
app.post('/pyi12b/failure', function(req,res) {
    console.log(req.body);
    req.session['pyi12b-failure'] = req.body;
    if (req.body.verifyAgain == 'Try GOV.UK Verify again') {
      res.redirect('/pyi12b/404');
    } else if (req.body.verifyAgain == 'Try using your bank account again') {
      res.redirect('/pyi12b/to_do_page');
    } else if (req.body.verifyAgain == 'Attend a face to face interview') {
      res.redirect('/pyi12b/404');
    } else {
  res.redirect('/pyi12b/enter_reference');
}
});

/********
Second Entry
*********/

app.get('/pyi12b/second_entry', function(req,res) {
    res.render('pyi12b/second_entry', {
    data     : content.getTableData()
    });
});
app.post('/pyi12b/second_entry', function(req,res) {
  req.session['pyi12b-second_entry'] = req.body;
    res.redirect('/pyi12b/enter_reference');
});

/******
Reset
*******/

app.get('/pyi12b/reset', function(req,res) {
    res.render('pyi12b/reset', {
    data       :   content.getTableData()
  });
});

app.post('/pyi12b/reset', function(req,res) {
  routeSettings = "default";
  req.session.destroy();
  res.redirect('/pyi12b/to_do_page');
});

/**************
Settings
***************/
app.get('/pyi12b/settings', function(req, res) {
  res.render('pyi12b/settings', {
    data    : content.getTableData()
  });
});

app.post('/pyi12b/settings', function(req, res) {
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
  res.redirect('/pyi12b/to_do_page');
});

/**************
404
***************/
app.get('/pyi12b/404', function(req,res) {
    res.render('pyi12b/404', {
    data     : content.getTableData()
    });
});
app.post('/pyi12b/404', function(req,res) {
  res.redirect('/pyi12b/to_do_page');
});

/*****
Expired
******/

app.get('/pyi12b/expired', function(req,res) {
    res.render('pyi12b/expired', {
     data     :   content.getTableData()
    });
});
app.post('/pyi12b/expired', function(req,res) {
  req.session['pyi12b-expired'] = req.body;
  res.redirect('/pyi12b/to_do_page');
});

/*****
Payment Failed
******/

app.get('/pyi12b/payment_failed', function(req,res) {
    res.render('pyi12b/payment_failed', {
     rollNumber  : req.session['pyi12b-has_roll_number'],
     data     :   content.getTableData()
    });
});
app.post('/pyi12b/payment_failed', function(req,res) {
  req.session['pyi12b-payment_failed'] = req.body;
  res.redirect('/pyi12b/to_do_page');
});

/*****
System failure
******/

app.get('/pyi12b/system_failure', function(req,res) {
    res.render('pyi12b/system_failure', {
     data     :   content.getTableData()
    });
});
app.post('/pyi12b/system_failure', function(req,res) {
  res.redirect('/pyi12b/to_do_page');
});

};
