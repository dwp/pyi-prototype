
module.exports = function (app) {
  var content = require('../content/content');

/********
To do page
*********/

app.get('/pyi3/to_do_page', function(req,res) {
    res.render('pyi3/to_do_page', {
      data          : content.getTableData(),
      bank_details  : req.session['pyi3-bank_details'],
      success       : req.session['pyi3-success']
    });
});
app.post('/pyi3/to_do_page', function (req, res) {
  res.redirect('/pyi3/how_verify');
});

/********
How verify
*********/

app.get('/pyi3/how_verify', function(req,res) {
    res.render('pyi3/how_verify', {
    data     : content.getTableData()
    });
});
app.post('/pyi3/how_verify', function(req,res) {
  if (req.body.howVerify == 'Use your bank account' ){
  res.redirect('/pyi3/bank_details');
} else {
res.redirect('/pyi3/no_page_exists');
}
});

/*****
bank_details
******/

app.get('/pyi3/bank_details', function(req,res) {
    res.render('pyi3/bank_details', {
      data    : content.getTableData()
    });
});
app.post('/pyi3/bank_details', function(req,res) {
  req.session['pyi3-bank_details'] = req.body;
  res.redirect('/pyi3/bank_submitted');
});

/*****
bank_submitted
******/

app.get('/pyi3/bank_submitted', function(req,res) {
    res.render('pyi3/bank_submitted', {
      data    : content.getTableData()
    });
});
app.post('/pyi3/bank_submitted', function(req,res) {
  res.redirect('/pyi3/enter_reference');
});

/*****
reminder
******/

app.get('/pyi3/reminder', function(req,res) {
    res.render('pyi3/reminder', {
     data     :   content.getTableData()
    });
});
app.post('/pyi3/reminder', function(req,res) {
  res.redirect('/pyi3/to_do_page');
});

/********
Enter Reference
*********/

app.get('/pyi3/enter_reference', function(req,res) {
    res.render('pyi3/enter_reference', {
    data     :   content.getTableData(),
    });
});
app.post('/pyi3/enter_reference', function(req,res) {
  if (req.body.codeTestInput.toLowerCase() == '16178') {
    res.redirect('/pyi3/success');
  } else {
    res.redirect('/pyi3/failure');
  }
});

/********
No page exists
*********/

app.get('/pyi3/no_page_exists', function(req,res) {
    res.render('pyi3/no_page_exists', {
    data     :   content.getTableData()
    });
});
app.post('/pyi3/no_page_exists', function(req,res) {
  res.redirect('/pyi3/to_do_page');
});

/********
Success
*********/

app.get('/pyi3/success', function(req,res) {
    res.render('pyi3/success', {
    data     :   content.getTableData()
    });
});
app.post('/pyi3/success', function(req,res) {
  req.session['pyi3-success'] = req.body;
  res.redirect('/pyi3/to_do_page');
});

/********
Failure
*********/

app.get('/pyi3/failure', function(req,res) {
    req.session.attempts ++;
    res.render('pyi3/failure', {
      attempts    :   (req.session.attempts || 0) + 1,
      data        :   content.getTableData()
    });
    if (req.session.attempts === 2) {
      req.session.destroy();
    }
});
app.post('/pyi3/failure', function(req,res) {
    req.session['pyi3-failure'] = req.body;
    if (req.body.verifyAgain == 'Try GOV.UK Verify again') {
      res.redirect('/pyi3/no_page_exists');
    } else if (req.body.verifyAgain == 'Try using your bank account again') {
      res.redirect('/pyi3/bank_details');
    } else if (req.body.verifyAgain == 'Attend a face to face interview') {
      res.redirect('/pyi3/no_page_exists');
    } else {
  res.redirect('/pyi3/enter_reference');
}
});

/******
Reset
*******/

app.get('/pyi3/reset', function(req,res) {
    res.render('pyi3/reset', {
    data       :   content.getTableData()
  });
});

app.post('/pyi3/reset', function(req,res) {
  req.session.destroy();
  res.redirect('/pyi3/to_do_page');
});

/**************
Research findings
***************/
app.get('/pyi3/research_findings', function(req,res) {
    res.render('pyi3/research_findings', {
    data     : content.getTableData()
    });
});

/**************
Changes made
***************/
app.get('/pyi3/changes_made', function(req,res) {
    res.render('pyi3/changes_made', {
    data     : content.getTableData()
    });
});

};
