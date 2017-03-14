
module.exports = function (app) {
  var content = require('../content/content');

/*********
UC Login Page
**********/

app.get('/pyi6/uc_login', function(req, res) {
  res.render('pyi6/uc_login', {
    data : content.getTableData()
  });
});
app.post('/pyi6/uc_login', function(req, res) {
  req.session['pyi6-uc_login'] = req.body;
  console.log(req.session['pyi6-uc_login']);
  res.redirect('/pyi6/to_do_page');
});

/********
To-do Page
*********/

app.get('/pyi6/to_do_page', function(req,res) {
    res.render('pyi6/to_do_page', {
      data          : content.getTableData(),
      bank_details  : req.session['pyi6-bank_details'],
      success       : req.session['pyi6-success'],
      returning     : req.session['pyi6-uc_login']
    });
});
app.post('/pyi6/to_do_page', function (req, res) {
  res.redirect('/pyi6/how_verify');
});

/********
How verify
*********/

app.get('/pyi6/how_verify', function(req,res) {
    res.render('pyi6/how_verify', {
    data     : content.getTableData()
    });
});
app.post('/pyi6/how_verify', function(req,res) {
  if (req.body.howVerify == 'Use your bank account' ){
  res.redirect('/pyi6/bank_details');
} else {
res.redirect('/pyi6/no_page_exists');
}
});

/*****
bank_details
******/

app.get('/pyi6/bank_details', function(req,res) {
    res.render('pyi6/bank_details', {
      data    : content.getTableData()
    });
});
app.post('/pyi6/bank_details', function(req,res) {
  req.session['pyi6-bank_details'] = req.body;
  res.redirect('/pyi6/bank_submitted');
});

/*****
bank_submitted
******/

app.get('/pyi6/bank_submitted', function(req,res) {
    res.render('pyi6/bank_submitted', {
      data    : content.getTableData()
    });
});
app.post('/pyi6/bank_submitted', function(req,res) {
  res.redirect('/pyi6/enter_reference');
});

/*****
reminder
******/

app.get('/pyi6/reminder', function(req,res) {
    res.render('pyi6/reminder', {
     data     :   content.getTableData()
    });
});
app.post('/pyi6/reminder', function(req,res) {
  res.redirect('/pyi6/to_do_page');
});

/********
Enter Reference
*********/

app.get('/pyi6/enter_reference', function(req,res) {
    res.render('pyi6/enter_reference', {
    data     :   content.getTableData(),
    });
});
app.post('/pyi6/enter_reference', function(req,res) {
  if (req.body.codeTestInput.toLowerCase() == '16178') {
    res.redirect('/pyi6/success');
  } else {
    res.redirect('/pyi6/failure');
  }
});

/********
No page exists
*********/

app.get('/pyi6/no_page_exists', function(req,res) {
    res.render('pyi6/no_page_exists', {
    data     :   content.getTableData()
    });
});
app.post('/pyi6/no_page_exists', function(req,res) {
  res.redirect('/pyi6/to_do_page');
});

/********
Success
*********/

app.get('/pyi6/success', function(req,res) {
    res.render('pyi6/success', {
    data     :   content.getTableData()
    });
});
app.post('/pyi6/success', function(req,res) {
  req.session['pyi6-success'] = req.body;
  res.redirect('/pyi6/to_do_page');
});

/********
Failure
*********/

app.get('/pyi6/failure', function(req,res) {
    req.session.attempts ++;
    res.render('pyi6/failure', {
      attempts    :   (req.session.attempts || 0) + 1,
      data        :   content.getTableData()
    });
    if (req.session.attempts === 2) {
      req.session.destroy();
    }
});
app.post('/pyi6/failure', function(req,res) {
    req.session['pyi6-failure'] = req.body;
    if (req.body.verifyAgain == 'Try GOV.UK Verify again') {
      res.redirect('/pyi6/no_page_exists');
    } else if (req.body.verifyAgain == 'Try using your bank account again') {
      res.redirect('/pyi6/second_attempt');
    } else if (req.body.verifyAgain == 'Attend a face to face interview') {
      res.redirect('/pyi6/no_page_exists');
    } else {
  res.redirect('/pyi6/enter_reference');
}
});

/********
Second Attempt
*********/

app.get('/pyi6/second_attempt', function(req,res) {
    res.render('pyi6/second_attempt', {
    data     : content.getTableData()
    });
});
app.post('/pyi6/second_attempt', function(req,res) {
  if (req.body.howVerify == 'Use your bank account' ){
  res.redirect('/pyi6/bank_details');
} else {
res.redirect('/pyi6/no_page_exists');
}
});

/********
Second Entry
*********/

app.get('/pyi6/second_entry', function(req,res) {
    res.render('pyi6/second_entry', {
    data     : content.getTableData()
    });
});
app.post('/pyi6/second_entry', function(req,res) {
  if (req.body.howVerify == 'Continue using your bank account' ){
  res.redirect('/pyi6/enter_reference');
} else {
res.redirect('/pyi6/no_page_exists');
}
});

/******
Reset
*******/

app.get('/pyi6/reset', function(req,res) {
    res.render('pyi6/reset', {
    data       :   content.getTableData()
  });
});

app.post('/pyi6/reset', function(req,res) {
  req.session.destroy();
  res.redirect('/pyi6/to_do_page');
});

/**************
Research findings
***************/
app.get('/pyi6/research_findings', function(req,res) {
    res.render('pyi6/research_findings', {
    data     : content.getTableData()
    });
});

/**************
Changes made
***************/
app.get('/pyi6/changes_made', function(req,res) {
    res.render('pyi6/changes_made', {
    data     : content.getTableData()
    });
});

};
