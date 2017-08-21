
module.exports = function (app) {
  var content = require('../content/content');
  var routeSettings = routeSettings === undefined ? "default" : routeSettings;

/*********
UC Login Page
**********/

app.get('/pyi12a/uc_login', function(req, res) {
  res.render('pyi12a/uc_login', {
    data : content.getTableData()
  });
});
app.post('/pyi12a/uc_login', function(req, res) {
  req.session['pyi12a-uc_login'] = req.body;
  res.redirect('/pyi12a/to_do_page');
});

/********
To-do Page
*********/

app.get('/pyi12a/to_do_page', function(req,res) {
    res.render('pyi12a/to_do_page', {
      data          : content.getTableData(),
      bank_details  : req.session['pyi12a-bank_details'],
      enter_bank_details: req.session['pyi12a-enter_bank_details'],
      success       : req.session['pyi12a-success'],
      failure       : req.session['pyi12a-failure'],
      returning     : req.session['pyi12a-uc_login'],
      payment_failed: req.session['pyi12a-payment_failed'],
      expired       : req.session['pyi12a-expired']
    });
});
app.post('/pyi12a/to_do_page', function (req, res) {
  res.redirect('/pyi12a/verify_identity');
});

/*********
verify_identity
**********/

app.get('/pyi12a/verify_identity', function(req, res) {
  res.render('pyi12a/verify_identity', {
    data : content.getTableData()
  });
});
app.post('/pyi12a/verify_identity', function(req, res) {
    if (req.body.howVerify == 'Try another option - GOV.UK Verify didn’t work for me' ){
        res.redirect('/pyi12a/how_verify');
    } else {
        res.redirect('/pyi12a/404');
    }
});

/********
How verify
*********/

app.get('/pyi12a/how_verify', function(req,res) {
    res.render('pyi12a/how_verify', {
    data     : content.getTableData()
    });
});
app.post('/pyi12a/how_verify', function(req,res) {
    res.redirect('/pyi12a/bank_details');
});

/*****
bank_details
******/

app.get('/pyi12a/bank_details', function(req,res) {
    res.render('pyi12a/bank_details', {
      data    : content.getTableData()
    });
});
app.post('/pyi12a/bank_details', function(req,res) {
  req.session['pyi12a-bank_details'] = req.body;
  res.redirect('/pyi12a/has_roll_number');
});

/*****
has_roll_number
******/

app.get('/pyi12a/has_roll_number', function(req,res) {
    res.render('pyi12a/has_roll_number', {
      data    : content.getTableData()
    });
});
app.post('/pyi12a/has_roll_number', function(req,res) {
  req.session['pyi12a-has_roll_number'] = req.body;
  if(req.body.rollNumber === "Yes") {
    res.redirect('/pyi12a/payment_failed');
  } else {
  res.redirect('/pyi12a/enter_bank_details');
}
});

/*****
enter_bank_details
******/

app.get('/pyi12a/enter_bank_details', function(req,res) {
    res.render('pyi12a/enter_bank_details', {
      data    : content.getTableData()
    });
});
app.post('/pyi12a/enter_bank_details', function(req,res) {
  req.session['pyi12a-enter_bank_details'] = req.body;
  if(routeSettings === "failedPayment") {
    res.redirect('/pyi12a/payment_failed');
  } else {
  res.redirect('/pyi12a/bank_submitted');
}
});

/*****
bank_submitted
******/

app.get('/pyi12a/bank_submitted', function(req,res) {
    res.render('pyi12a/bank_submitted', {
      data    : content.getTableData(),
      twoPayments : false
    });
});
app.post('/pyi12a/bank_submitted', function(req,res) {
  if(routeSettings === "failedPayment") {
    res.redirect('/pyi12a/payment_failed');
  } else {
    res.redirect('/pyi12a/enter_reference');
}
});


/*****
reminder
******/

app.get('/pyi12a/reminder', function(req,res) {
    res.render('pyi12a/reminder', {
     data     :   content.getTableData()
    });
});
app.post('/pyi12a/reminder', function(req,res) {
    if(req.body.submit === 'Book interview') {
        res.redirect('/pyi12a/404');
    } else {
        res.redirect('/pyi12a/to_do_page');
    }
});

/********
Enter Reference
*********/

app.get('/pyi12a/enter_reference', function(req,res) {
    res.render('pyi12a/enter_reference', {
    data     :   content.getTableData(),
    second_entry  : req.session['pyi12a-second_entry']
    });
});
app.post('/pyi12a/enter_reference', function(req,res) {
  if (req.body.codeTestInput.toLowerCase() == 'p9979630') {
    switch(routeSettings) {
      case "failedSystem":
        res.redirect('/pyi12a/system_failure');
        break;
      case "expiredReference":
        res.redirect('/pyi12a/expired');
        break;
      default:
      res.redirect('/pyi12a/success');
    }
  } else {
    if(routeSettings === "failedSystem") {
      res.redirect('/pyi12a/system_failure');
    } else {
      res.redirect('/pyi12a/failure');
    }
  }
});

/********
No page exists
*********/

app.get('/pyi12a/no_page_exists', function(req,res) {
    res.render('pyi12a/no_page_exists', {
    data     :   content.getTableData()
    });
});
app.post('/pyi12a/no_page_exists', function(req,res) {
  res.redirect('/pyi12a/to_do_page');
});

/********
Success
*********/

app.get('/pyi12a/success', function(req,res) {
    res.render('pyi12a/success', {
    data     :   content.getTableData()
    });
});
app.post('/pyi12a/success', function(req,res) {
  req.session['pyi12a-success'] = req.body;
  if(req.body.submit === "Book my interview") {
      res.redirect('/pyi12a/404');
  } else {
     res.redirect('/pyi12a/to_do_page');
  }
});

/********
Failure
*********/

app.get('/pyi12a/failure', function(req,res) {
    req.session.attempts ++;
    res.render('pyi12a/failure', {
      attempts    :   (req.session.attempts || 0) + 1,
      data        :   content.getTableData()
    });
    if (req.session.attempts === 2) {
      req.session.destroy();
    }
});
app.post('/pyi12a/failure', function(req,res) {
    console.log(req.body);
    req.session['pyi12a-failure'] = req.body;
    if (req.body.verifyAgain == 'Try GOV.UK Verify again') {
      res.redirect('/pyi12a/404');
    } else if (req.body.verifyAgain == 'Try using your bank account again') {
      res.redirect('/pyi12a/to_do_page');
    } else if (req.body.verifyAgain == 'Attend a face to face interview') {
      res.redirect('/pyi12a/404');
    } else {
  res.redirect('/pyi12a/enter_reference');
}
});

/********
Second Entry
*********/

app.get('/pyi12a/second_entry', function(req,res) {
    res.render('pyi12a/second_entry', {
    data     : content.getTableData()
    });
});
app.post('/pyi12a/second_entry', function(req,res) {
  req.session['pyi12a-second_entry'] = req.body;
    res.redirect('/pyi12a/enter_reference');
});

/******
Reset
*******/

app.get('/pyi12a/reset', function(req,res) {
    res.render('pyi12a/reset', {
    data       :   content.getTableData()
  });
});

app.post('/pyi12a/reset', function(req,res) {
  routeSettings = "default";
  req.session.destroy();
  res.redirect('/pyi12a/to_do_page');
});

/**************
Settings
***************/
app.get('/pyi12a/settings', function(req, res) {
  res.render('pyi12a/settings', {
    data    : content.getTableData()
  });
});

app.post('/pyi12a/settings', function(req, res) {
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
  res.redirect('/pyi12a/to_do_page');
});

/**************
404
***************/
app.get('/pyi12a/404', function(req,res) {
    res.render('pyi12a/404', {
    data     : content.getTableData()
    });
});
app.post('/pyi12a/404', function(req,res) {
  res.redirect('/pyi12a/to_do_page');
});

/*****
Expired
******/

app.get('/pyi12a/expired', function(req,res) {
    res.render('pyi12a/expired', {
     data     :   content.getTableData()
    });
});
app.post('/pyi12a/expired', function(req,res) {
  req.session['pyi12a-expired'] = req.body;
  res.redirect('/pyi12a/to_do_page');
});

/*****
Payment Failed
******/

app.get('/pyi12a/payment_failed', function(req,res) {
    res.render('pyi12a/payment_failed', {
     rollNumber  : req.session['pyi12a-has_roll_number'],
     data     :   content.getTableData()
    });
});
app.post('/pyi12a/payment_failed', function(req,res) {
  req.session['pyi12a-payment_failed'] = req.body;
  res.redirect('/pyi12a/to_do_page');
});

/*****
System failure
******/

app.get('/pyi12a/system_failure', function(req,res) {
    res.render('pyi12a/system_failure', {
     data     :   content.getTableData()
    });
});
app.post('/pyi12a/system_failure', function(req,res) {
  res.redirect('/pyi12a/to_do_page');
});

};
