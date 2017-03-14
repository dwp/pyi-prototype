
module.exports = function (app) {
  var content = require('../content/content');

/********
To do page
*********/

app.get('/pyi4/to_do_page', function(req,res) {
    res.render('pyi4/to_do_page', {
      data          : content.getTableData(),
      bank_details  : req.session['pyi4-bank_details'],
      success       : req.session['pyi4-success']
    });
});
app.post('/pyi4/to_do_page', function (req, res) {
  res.redirect('/pyi4/how_verify');
});

/********
How verify
*********/

app.get('/pyi4/how_verify', function(req,res) {
    res.render('pyi4/how_verify', {
    data     : content.getTableData()
    });
});
app.post('/pyi4/how_verify', function(req,res) {
  if (req.body.howVerify == 'Use your bank account' ){
  res.redirect('/pyi4/bank_details');
} else {
res.redirect('/pyi4/no_page_exists');
}
});

/*****
bank_details
******/

app.get('/pyi4/bank_details', function(req,res) {
    res.render('pyi4/bank_details', {
      data    : content.getTableData()
    });
});
app.post('/pyi4/bank_details', function(req,res) {
  req.session['pyi4-bank_details'] = req.body;
  res.redirect('/pyi4/bank_submitted');
});

/*****
bank_submitted
******/

app.get('/pyi4/bank_submitted', function(req,res) {
    res.render('pyi4/bank_submitted', {
      data    : content.getTableData()
    });
});
app.post('/pyi4/bank_submitted', function(req,res) {
  res.redirect('/pyi4/enter_reference');
});

/*****
reminder
******/

app.get('/pyi4/reminder', function(req,res) {
    res.render('pyi4/reminder', {
     data     :   content.getTableData()
    });
});
app.post('/pyi4/reminder', function(req,res) {
  res.redirect('/pyi4/to_do_page');
});

/********
Enter Reference
*********/

app.get('/pyi4/enter_reference', function(req,res) {
    res.render('pyi4/enter_reference', {
    data     :   content.getTableData(),
    });
});
app.post('/pyi4/enter_reference', function(req,res) {
  if (req.body.codeTestInput.toLowerCase() == '16178') {
    res.redirect('/pyi4/success');
  } else {
    res.redirect('/pyi4/failure');
  }
});

/********
No page exists
*********/

app.get('/pyi4/no_page_exists', function(req,res) {
    res.render('pyi4/no_page_exists', {
    data     :   content.getTableData()
    });
});
app.post('/pyi4/no_page_exists', function(req,res) {
  res.redirect('/pyi4/to_do_page');
});

/********
Success
*********/

app.get('/pyi4/success', function(req,res) {
    res.render('pyi4/success', {
    data     :   content.getTableData()
    });
});
app.post('/pyi4/success', function(req,res) {
  req.session['pyi4-success'] = req.body;
  res.redirect('/pyi4/to_do_page');
});

/********
Failure
*********/

app.get('/pyi4/failure', function(req,res) {
    req.session.attempts ++;
    res.render('pyi4/failure', {
      attempts    :   (req.session.attempts || 0) + 1,
      data        :   content.getTableData()
    });
    if (req.session.attempts === 2) {
      req.session.destroy();
    }
});
app.post('/pyi4/failure', function(req,res) {
    req.session['pyi4-failure'] = req.body;
    if (req.body.verifyAgain == 'Try GOV.UK Verify again') {
      res.redirect('/pyi4/no_page_exists');
    } else if (req.body.verifyAgain == 'Try using your bank account again') {
      res.redirect('/pyi4/second_attempt');
    } else if (req.body.verifyAgain == 'Attend a face to face interview') {
      res.redirect('/pyi4/no_page_exists');
    } else {
  res.redirect('/pyi4/enter_reference');
}
});

/********
Second Attempt
*********/

app.get('/pyi4/second_attempt', function(req,res) {
    res.render('pyi4/second_attempt', {
    data     : content.getTableData()
    });
});
app.post('/pyi4/second_attempt', function(req,res) {
  if (req.body.howVerify == 'Use your bank account' ){
  res.redirect('/pyi4/bank_details');
} else {
res.redirect('/pyi4/no_page_exists');
}
});

/******
Reset
*******/

app.get('/pyi4/reset', function(req,res) {
    res.render('pyi4/reset', {
    data       :   content.getTableData()
  });
});

app.post('/pyi4/reset', function(req,res) {
  req.session.destroy();
  res.redirect('/pyi4/to_do_page');
});

/**************
Research findings
***************/
app.get('/pyi4/research_findings', function(req,res) {
    res.render('pyi4/research_findings', {
    data     : content.getTableData()
    });
});

/**************
Changes made
***************/
app.get('/pyi4/changes_made', function(req,res) {
    res.render('pyi4/changes_made', {
    data     : content.getTableData()
    });
});

};
