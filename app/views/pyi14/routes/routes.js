
module.exports = function (app) {
  var content = require('../content/content');
  var routeSettings = routeSettings === undefined ? "default" : routeSettings;

/*********
UC Login Page
**********/

app.get('/pyi14/uc_login', function(req, res) {
    debugger;
  res.render('pyi14/uc_login', {
    data : content.getTableData()
  });
});
app.post('/pyi14/uc_login', function(req, res) {
  req.session['pyi14-uc_login'] = req.body;
  res.redirect('/pyi14/bank_details');
});

/********
To-do Page
*********/

app.get('/pyi14/to_do_page', function(req,res) {
    res.render('pyi14/to_do_page', {
      data          : content.getTableData(),
      bank_details  : req.session['pyi14-bank_details'],
      enter_bank_details: req.session['pyi14-enter_bank_details'],
      success       : req.session['pyi14-success'],
      failure       : req.session['pyi14-failure'],
      returning     : req.session['pyi14-uc_login'],
      payment_failed: req.session['pyi14-payment_failed'],
      expired       : req.session['pyi14-expired']
    });
});
app.post('/pyi14/to_do_page', function (req, res) {
  res.redirect('/pyi14/bank_details');
});

/*****
bank_details
******/

app.get('/pyi14/bank_details', function(req,res) {
    res.render('pyi14/bank_details', {
      data    : content.getTableData()
    });
});
app.post('/pyi14/bank_details', function(req,res) {
  req.session['pyi14-bank_details'] = req.body;
  res.redirect('/pyi14/has_roll_number');
});

/*****
has_roll_number
******/

app.get('/pyi14/has_roll_number', function(req,res) {
    res.render('pyi14/has_roll_number', {
      data    : content.getTableData()
    });
});
app.post('/pyi14/has_roll_number', function(req,res) {
  req.session['pyi14-has_roll_number'] = req.body;
  if(req.body.rollNumber === "Yes") {
    res.redirect('/pyi14/payment_failed');
  } else {
  res.redirect('/pyi14/enter_bank_details');
}
});

/*****
enter_bank_details
******/

app.get('/pyi14/enter_bank_details', function(req,res) {
    res.render('pyi14/enter_bank_details', {
      data    : content.getTableData()
    });
});
app.post('/pyi14/enter_bank_details', function(req,res) {
  req.session['pyi14-enter_bank_details'] = req.body;
  if(routeSettings === "failedPayment") {
    res.redirect('/pyi14/payment_failed');
  } else {
  res.redirect('/pyi14/make_payment');
}
});

/*****
make_payment
******/

app.get('/pyi14/make_payment', function(req,res) {
  res.render('pyi14/make_payment', {
    data    : content.getTableData()
  });
});


/*****
bank_submitted
******/

app.get('/pyi14/bank_submitted', function(req,res) {
    res.render('pyi14/bank_submitted', {
      data    : content.getTableData(),
      twoPayments : false
    });
});
app.post('/pyi14/bank_submitted', function(req,res) {
  if(routeSettings === "failedPayment") {
    res.redirect('/pyi14/payment_failed');
  } else {
    res.redirect('/pyi14/enter_reference');
}
});


/*****
reminder
******/

app.get('/pyi14/reminder', function(req,res) {
    res.render('pyi14/reminder', {
     data     :   content.getTableData()
    });
});
app.post('/pyi14/reminder', function(req,res) {
    if(req.body.submit === 'Book interview') {
        res.redirect('/pyi14/404');
    } else {
        res.redirect('/pyi14/uc_login');
    }
});

/********
Enter Reference
*********/

app.get('/pyi14/enter_reference', function(req,res) {
    res.render('pyi14/enter_reference', {
    data     :   content.getTableData(),
    second_entry  : req.session['pyi14-second_entry']
    });
});
app.post('/pyi14/enter_reference', function(req,res) {
    if (req.body.codeTestInput.replace(/\s+/g, '') === '997963') {
    switch(routeSettings) {
      case "failedSystem":
        res.redirect('/pyi14/system_failure');
        break;
      case "expiredReference":
        res.redirect('/pyi14/expired');
        break;
      default:
      res.redirect('/pyi14/success');
    }
  } else {
    if(routeSettings === "failedSystem") {
      res.redirect('/pyi14/system_failure');
    } else {
      res.redirect('/pyi14/failure');
    }
  }
});

/********
No page exists
*********/

app.get('/pyi14/no_page_exists', function(req,res) {
    res.render('pyi14/no_page_exists', {
    data     :   content.getTableData()
    });
});
app.post('/pyi14/no_page_exists', function(req,res) {
  res.redirect('/pyi14/bank_details');
});

/********
Success
*********/

app.get('/pyi14/success', function(req,res) {
    res.render('pyi14/success', {
    data     :   content.getTableData()
    });
});
app.post('/pyi14/success', function(req,res) {
  req.session['pyi14-success'] = req.body;
  if(req.body.submit === "Book my interview") {
      res.redirect('/pyi14/404');
  } else {
     res.redirect('/pyi14/uc_login');
  }
});

/********
Failure
*********/

app.get('/pyi14/failure', function(req,res) {
    req.session.attempts ++;
    res.render('pyi14/failure', {
      attempts    :   (req.session.attempts || 0) + 1,
      data        :   content.getTableData()
    });
    if (req.session.attempts === 2) {
      req.session.destroy();
    }
});
app.post('/pyi14/failure', function(req,res) {
    console.log(req.body);
    req.session['pyi14-failure'] = req.body;
    if (req.body.verifyAgain == 'Try GOV.UK Verify again') {
      res.redirect('/pyi14/404');
    } else if (req.body.verifyAgain == 'Try using your bank account again') {
      res.redirect('/pyi14/bank_details');
    } else if (req.body.verifyAgain == 'Attend a face to face interview') {
      res.redirect('/pyi14/404');
    } else {
  res.redirect('/pyi14/enter_reference');
}
});

/********
Second Entry
*********/

app.get('/pyi14/second_entry', function(req,res) {
    res.render('pyi14/second_entry', {
    data     : content.getTableData()
    });
});
app.post('/pyi14/second_entry', function(req,res) {
  req.session['pyi14-second_entry'] = req.body;
    res.redirect('/pyi14/enter_reference');
});

/******
Reset
*******/

app.get('/pyi14/reset', function(req,res) {
    res.render('pyi14/reset', {
    data       :   content.getTableData()
  });
});

app.post('/pyi14/reset', function(req,res) {
  routeSettings = "default";
  req.session.destroy();
  res.redirect('/pyi14/bank_details');
});

/**************
Settings
***************/
app.get('/pyi14/settings', function(req, res) {
  res.render('pyi14/settings', {
    data    : content.getTableData()
  });
});

app.post('/pyi14/settings', function(req, res) {
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
  res.redirect('/pyi14/bank_details');
});

/**************
404
***************/
app.get('/pyi14/404', function(req,res) {
    res.render('pyi14/404', {
    data     : content.getTableData()
    });
});
app.post('/pyi14/404', function(req,res) {
  res.redirect('/pyi14/bank_details');
});

/*****
Expired
******/

app.get('/pyi14/expired', function(req,res) {
    res.render('pyi14/expired', {
     data     :   content.getTableData()
    });
});
app.post('/pyi14/expired', function(req,res) {
  req.session['pyi14-expired'] = req.body;
  res.redirect('/pyi14/uc_login');
});

/*****
Payment Failed
******/

app.get('/pyi14/payment_failed', function(req,res) {
    res.render('pyi14/payment_failed', {
     rollNumber  : req.session['pyi14-has_roll_number'],
     data     :   content.getTableData()
    });
});
app.post('/pyi14/payment_failed', function(req,res) {
  req.session['pyi14-payment_failed'] = req.body;
  res.redirect('/pyi14/uc_login');
});

/*****
System failure
******/

app.get('/pyi14/system_failure', function(req,res) {
    res.render('pyi14/system_failure', {
     data     :   content.getTableData()
    });
});
app.post('/pyi14/system_failure', function(req,res) {
  res.redirect('/pyi14/uc_login');
});

};
