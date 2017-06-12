
module.exports = function (app) {
  var content = require('../content/content');
  var routeSettings = routeSettings === undefined ? "default" : routeSettings;

/*********
UC Login Page
**********/

app.get('/pyi9/uc_login', function(req, res) {
  res.render('pyi9/uc_login', {
    data : content.getTableData()
  });
});
app.post('/pyi9/uc_login', function(req, res) {
  req.session['pyi9-uc_login'] = req.body;
  res.redirect('/pyi9/to_do_page');
});

/********
To-do Page
*********/

app.get('/pyi9/to_do_page', function(req,res) {
    res.render('pyi9/to_do_page', {
      data          : content.getTableData(),
      bank_details  : req.session['pyi9-bank_details'],
      success       : req.session['pyi9-success'],
      returning     : req.session['pyi9-uc_login'],
      payment_failed: req.session['pyi9-payment_failed'],
      expired       : req.session['pyi9-expired']
    });
});
app.post('/pyi9/to_do_page', function (req, res) {
  res.redirect('/pyi9/how_verify');
});

/********
How verify
*********/

app.get('/pyi9/how_verify', function(req,res) {
    res.render('pyi9/how_verify', {
    data     : content.getTableData()
    });
});
app.post('/pyi9/how_verify', function(req,res) {
//   if (req.body.howVerify == 'Get a reference sent to your bank account' ){
//   res.redirect('/pyi9/bank_details');
// } else {
// res.redirect('/pyi9/404');
// }
if (req.body.submit == 'Go to Prove Your Identity' ){
res.redirect('/pyi9/bank_details');
} else {
res.redirect('/pyi9/404');
}
});

/*****
bank_details
******/

app.get('/pyi9/bank_details', function(req,res) {
    res.render('pyi9/bank_details', {
      data    : content.getTableData()
    });
});
app.post('/pyi9/bank_details', function(req,res) {
  req.session['pyi9-bank_details'] = req.body;
  if(routeSettings === "failedPayment") {
    res.redirect('/pyi9/payment_failed');
  } else {
  res.redirect('/pyi9/bank_submitted');
}
});

/*****
bank_submitted
******/

app.get('/pyi9/bank_submitted', function(req,res) {
    res.render('pyi9/bank_submitted', {
      data    : content.getTableData(),
      twoPayments : false
    });
});
app.post('/pyi9/bank_submitted', function(req,res) {
  if(routeSettings === "failedPayment") {
    res.redirect('/pyi9/payment_failed');
  } else {
    res.redirect('/pyi9/enter_reference');
}
});


/*****
reminder
******/

app.get('/pyi9/reminder', function(req,res) {
    res.render('pyi9/reminder', {
     data     :   content.getTableData()
    });
});
app.post('/pyi9/reminder', function(req,res) {
  res.redirect('/pyi9/to_do_page');
});

/********
Enter Reference
*********/

app.get('/pyi9/enter_reference', function(req,res) {
    res.render('pyi9/enter_reference', {
    data     :   content.getTableData(),
    second_entry  : req.session['pyi9-second_entry']
    });
});
app.post('/pyi9/enter_reference', function(req,res) {
  if (req.body.codeTestInput.toLowerCase() == 'p9979630') {
    switch(routeSettings) {
      case "failedSystem":
        res.redirect('/pyi9/system_failure');
        break;
      case "expiredReference":
        res.redirect('/pyi9/expired');
        break;
      default:
      res.redirect('/pyi9/success');
    }
  } else {
    if(routeSettings === "failedSystem") {
      res.redirect('/pyi9/system_failure');
    } else {
      res.redirect('/pyi9/failure');
    }
  }
});

/********
No page exists
*********/

app.get('/pyi9/no_page_exists', function(req,res) {
    res.render('pyi9/no_page_exists', {
    data     :   content.getTableData()
    });
});
app.post('/pyi9/no_page_exists', function(req,res) {
  res.redirect('/pyi9/to_do_page');
});

/********
Success
*********/

app.get('/pyi9/success', function(req,res) {
    res.render('pyi9/success', {
    data     :   content.getTableData()
    });
});
app.post('/pyi9/success', function(req,res) {
  req.session['pyi9-success'] = req.body;
  res.redirect('/pyi9/to_do_page');
});

/********
Failure
*********/

app.get('/pyi9/failure', function(req,res) {
    req.session.attempts ++;
    res.render('pyi9/failure', {
      attempts    :   (req.session.attempts || 0) + 1,
      data        :   content.getTableData()
    });
    if (req.session.attempts === 2) {
      req.session.destroy();
    }
});
app.post('/pyi9/failure', function(req,res) {
    req.session['pyi9-failure'] = req.body;
    if (req.body.verifyAgain == 'Try GOV.UK Verify again') {
      res.redirect('/pyi9/404');
    } else if (req.body.verifyAgain == 'Try using your bank account again') {
      res.redirect('/pyi9/second_attempt');
    } else if (req.body.verifyAgain == 'Attend a face to face interview') {
      res.redirect('/pyi9/404');
    } else {
  res.redirect('/pyi9/enter_reference');
}
});

/********
Second Attempt
*********/

app.get('/pyi9/second_attempt', function(req,res) {
    res.render('pyi9/second_attempt', {
    data     : content.getTableData()
    });
});
app.post('/pyi9/second_attempt', function(req,res) {
  if (req.body.howVerify == 'Get another reference sent to your bank account' ){
  res.redirect('/pyi9/bank_details');
} else {
res.redirect('/pyi9/404');
}
});

/********
Second Entry
*********/

app.get('/pyi9/second_entry', function(req,res) {
    res.render('pyi9/second_entry', {
    data     : content.getTableData()
    });
});
app.post('/pyi9/second_entry', function(req,res) {
  if (req.body.howVerify == 'Continue using your bank account' ){
  req.session['pyi9-second_entry'] = req.body;
  if(routeSettings === "failedPayment") {
    res.redirect('/pyi9/payment_failed');
  } else {
    res.redirect('/pyi9/enter_reference');
}
} else {
res.redirect('/pyi9/404');
}
});

/******
Reset
*******/

app.get('/pyi9/reset', function(req,res) {
    res.render('pyi9/reset', {
    data       :   content.getTableData()
  });
});

app.post('/pyi9/reset', function(req,res) {
  routeSettings = "default";
  req.session.destroy();
  res.redirect('/pyi9/to_do_page');
});

/**************
Research findings
***************/
app.get('/pyi9/research_findings', function(req,res) {
    res.render('pyi9/research_findings', {
    data     : content.getTableData()
    });
});

/**************
Changes made
***************/
app.get('/pyi9/changes_made', function(req,res) {
    res.render('pyi9/changes_made', {
    data     : content.getTableData()
    });
});

/**************
Settings
***************/
app.get('/pyi9/settings', function(req, res) {
  res.render('pyi9/settings', {
    data    : content.getTableData()
  });
});

app.post('/pyi9/settings', function(req, res) {
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
  res.redirect('/pyi9/to_do_page');
});

/**************
404
***************/
app.get('/pyi9/404', function(req,res) {
    res.render('pyi9/404', {
    data     : content.getTableData()
    });
});
app.post('/pyi9/404', function(req,res) {
  res.redirect('/pyi9/to_do_page');
});

/*****
Expired
******/

app.get('/pyi9/expired', function(req,res) {
    res.render('pyi9/expired', {
     data     :   content.getTableData()
    });
});
app.post('/pyi9/expired', function(req,res) {
  req.session['pyi9-expired'] = req.body;
  res.redirect('/pyi9/to_do_page');
});

/*****
Payment Failed
******/

app.get('/pyi9/payment_failed', function(req,res) {
    res.render('pyi9/payment_failed', {
     data     :   content.getTableData()
    });
});
app.post('/pyi9/payment_failed', function(req,res) {
  req.session['pyi9-payment_failed'] = req.body;
  res.redirect('/pyi9/to_do_page');
});

/*****
System failure
******/

app.get('/pyi9/system_failure', function(req,res) {
    res.render('pyi9/system_failure', {
     data     :   content.getTableData()
    });
});
app.post('/pyi9/system_failure', function(req,res) {
  res.redirect('/pyi9/to_do_page');
});

};
