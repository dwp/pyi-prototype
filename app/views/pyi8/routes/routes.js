
module.exports = function (app) {
  var content = require('../content/content');

/*********
UC Login Page
**********/

app.get('/pyi8/uc_login', function(req, res) {
  res.render('pyi8/uc_login', {
    data : content.getTableData()
  });
});
app.post('/pyi8/uc_login', function(req, res) {
  req.session['pyi8-uc_login'] = req.body;
  res.redirect('/pyi8/to_do_page');
});

/********
To-do Page
*********/

app.get('/pyi8/to_do_page', function(req,res) {
    res.render('pyi8/to_do_page', {
      data          : content.getTableData(),
      bank_details  : req.session['pyi8-bank_details'],
      success       : req.session['pyi8-success'],
      returning     : req.session['pyi8-uc_login']
    });
});
app.post('/pyi8/to_do_page', function (req, res) {
  res.redirect('/pyi8/how_verify');
});

/********
How verify
*********/

app.get('/pyi8/how_verify', function(req,res) {
    res.render('pyi8/how_verify', {
    data     : content.getTableData()
    });
});
app.post('/pyi8/how_verify', function(req,res) {
  if (req.body.howVerify == 'Get a reference sent to your bank account' ){
  res.redirect('/pyi8/bank_details');
} else {
res.redirect('/pyi8/no_page_exists');
}
});

/*****
bank_details
******/

app.get('/pyi8/bank_details', function(req,res) {
    res.render('pyi8/bank_details', {
      data    : content.getTableData()
    });
});
app.post('/pyi8/bank_details', function(req,res) {
  req.session['pyi8-bank_details'] = req.body;
  res.redirect('/pyi8/bank_submitted');
});

/*****
bank_submitted
******/

app.get('/pyi8/bank_submitted', function(req,res) {
    res.render('pyi8/bank_submitted', {
      data    : content.getTableData(),
      twoPayments : false
    });
});
app.post('/pyi8/bank_submitted', function(req,res) {
  res.redirect('/pyi8/enter_reference');
});

/*****
reminder
******/

app.get('/pyi8/reminder', function(req,res) {
    res.render('pyi8/reminder', {
     data     :   content.getTableData()
    });
});
app.post('/pyi8/reminder', function(req,res) {
  res.redirect('/pyi8/to_do_page');
});

/*****
Expired
******/

app.get('/pyi8/expired', function(req,res) {
    res.render('pyi8/expired', {
     data     :   content.getTableData()
    });
});
app.post('/pyi8/expired', function(req,res) {
  res.redirect('/pyi8/to_do_page');
});

/*****
Payment Failed
******/

app.get('/pyi8/payment_failed', function(req,res) {
    res.render('pyi8/payment_failed', {
     data     :   content.getTableData()
    });
});
app.post('/pyi8/payment_failed', function(req,res) {
  res.redirect('/pyi8/to_do_page');
});

/********
Enter Reference
*********/

app.get('/pyi8/enter_reference', function(req,res) {
    res.render('pyi8/enter_reference', {
    data     :   content.getTableData(),
    second_entry  : req.session['pyi8-second_entry']
    });
});
app.post('/pyi8/enter_reference', function(req,res) {
  console.log(req.body.codeTestInput);
  if (req.body.codeTestInput.toLowerCase() == 'p9979630') {
    res.redirect('/pyi8/success');
  } else {
    res.redirect('/pyi8/failure');
  }
});

/********
No page exists
*********/

app.get('/pyi8/no_page_exists', function(req,res) {
    res.render('pyi8/no_page_exists', {
    data     :   content.getTableData()
    });
});
app.post('/pyi8/no_page_exists', function(req,res) {
  res.redirect('/pyi8/to_do_page');
});

/********
Success
*********/

app.get('/pyi8/success', function(req,res) {
    res.render('pyi8/success', {
    data     :   content.getTableData()
    });
});
app.post('/pyi8/success', function(req,res) {
  req.session['pyi8-success'] = req.body;
  res.redirect('/pyi8/to_do_page');
});

/********
Failure
*********/

app.get('/pyi8/failure', function(req,res) {
    req.session.attempts ++;
    res.render('pyi8/failure', {
      attempts    :   (req.session.attempts || 0) + 1,
      data        :   content.getTableData()
    });
    if (req.session.attempts === 2) {
      req.session.destroy();
    }
});
app.post('/pyi8/failure', function(req,res) {
    req.session['pyi8-failure'] = req.body;
    if (req.body.verifyAgain == 'Try GOV.UK Verify again') {
      res.redirect('/pyi8/no_page_exists');
    } else if (req.body.verifyAgain == 'Try using your bank account again') {
      res.redirect('/pyi8/second_attempt');
    } else if (req.body.verifyAgain == 'Attend a face to face interview') {
      res.redirect('/pyi8/no_page_exists');
    } else {
  res.redirect('/pyi8/enter_reference');
}
});

/********
Second Attempt
*********/

app.get('/pyi8/second_attempt', function(req,res) {
    res.render('pyi8/second_attempt', {
    data     : content.getTableData()
    });
});
app.post('/pyi8/second_attempt', function(req,res) {
  if (req.body.howVerify == 'Get another reference sent to your bank account' ){
  res.redirect('/pyi8/bank_details');
} else {
res.redirect('/pyi8/no_page_exists');
}
});

/********
Second Entry
*********/

app.get('/pyi8/second_entry', function(req,res) {
    res.render('pyi8/second_entry', {
    data     : content.getTableData()
    });
});
app.post('/pyi8/second_entry', function(req,res) {
  if (req.body.howVerify == 'Continue using your bank account' ){
  req.session['pyi8-second_entry'] = req.body;
  res.redirect('/pyi8/enter_reference');
} else {
res.redirect('/pyi8/no_page_exists');
}
});

/******
Reset
*******/

app.get('/pyi8/reset', function(req,res) {
    res.render('pyi8/reset', {
    data       :   content.getTableData()
  });
});

app.post('/pyi8/reset', function(req,res) {
  req.session.destroy();
  res.redirect('/pyi8/to_do_page');
});

/**************
Research findings
***************/
app.get('/pyi8/research_findings', function(req,res) {
    res.render('pyi8/research_findings', {
    data     : content.getTableData()
    });
});

/**************
Changes made
***************/
app.get('/pyi8/changes_made', function(req,res) {
    res.render('pyi8/changes_made', {
    data     : content.getTableData()
    });
});

};
