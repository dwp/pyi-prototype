
module.exports = function (app) {
  var content = require('../content/content');

/********
To do page
*********/

app.get('/ucca1/to_do_page', function(req,res) {
    res.render('ucca1/to_do_page', {
      data          : content.getTableData(),
      bank_details  : req.session['ucca1-bank_details'],
      success       : req.session['ucca1-success']
    });
});
app.post('/ucca1/to_do_page', function (req, res) {
  res.redirect('/ucca1/how_verify');
});

/********
How verify
*********/

app.get('/ucca1/how_verify', function(req,res) {
    res.render('ucca1/how_verify', {
    data     : content.getTableData()
    });
});
app.post('/ucca1/how_verify', function(req,res) {
  if (req.body.howVerify == 'Use your bank account to verify' ){
  res.redirect('/ucca1/info_bank');
} else {
res.redirect('/ucca1/no_page_exists');
}
});

/*****
info_bank
******/

app.get('/ucca1/info_bank', function(req,res) {
    res.render('ucca1/info_bank', {
     data     :   content.getTableData()
    });
});
app.post('/ucca1/info_bank', function(req,res) {
  res.redirect('/ucca1/bank_details');
});

/*****
bank_details
******/

app.get('/ucca1/bank_details', function(req,res) {
    res.render('ucca1/bank_details', {
      data    : content.getTableData()
    });
});
app.post('/ucca1/bank_details', function(req,res) {
  req.session['ucca1-bank_details'] = req.body;
  res.redirect('/ucca1/bank_submitted');
});

/*****
bank_details
******/

app.get('/ucca1/bank_submitted', function(req,res) {
    res.render('ucca1/bank_submitted', {
      data    : content.getTableData()
    });
});
app.post('/ucca1/bank_submitted', function(req,res) {
  res.redirect('/ucca1/enter_reference');
});

/********
Enter Reference
*********/

app.get('/ucca1/enter_reference', function(req,res) {
    res.render('ucca1/enter_reference', {
    data     :   content.getTableData(),
    });
});
app.post('/ucca1/enter_reference', function(req,res) {
  if (req.body.codeInput.toLowerCase() == 'widgets') {
    res.redirect('/ucca1/success');
  } else {
    res.redirect('/ucca1/failure');
  }
});

/********
No page exists
*********/

app.get('/ucca1/no_page_exists', function(req,res) {
    res.render('ucca1/no_page_exists', {
    data     :   content.getTableData()
    });
});
app.post('/ucca1/no_page_exists', function(req,res) {
  res.redirect('/ucca1/to_do_page');
});

/********
Success
*********/

app.get('/ucca1/success', function(req,res) {
    res.render('ucca1/success', {
    data     :   content.getTableData()
    });
});
app.post('/ucca1/success', function(req,res) {
  req.session['ucca1-success'] = req.body;
  res.redirect('/ucca1/to_do_page');
});

/********
Failure
*********/

app.get('/ucca1/failure', function(req,res) {
    req.session.attempts ++;
    res.render('ucca1/failure', {
      attempts    :   (req.session.attempts || 0) + 1,
      data        :   content.getTableData()
    });
});
app.post('/ucca1/failure', function(req,res) {
    req.session['ucca1-failure'] = req.body;
    if (req.session.attempts >= '2'){
      req.session.destroy();
      res.redirect('/ucca1/to_do_page');
    } else {
  res.redirect('/ucca1/enter_reference');
}
});

/******
Reset
*******/

app.get('/ucca1/reset', function(req,res) {
    res.render('ucca1/reset', {
    data       :   content.getTableData()
  });
});

app.post('/ucca1/reset', function(req,res) {
  req.session.destroy();
  res.redirect('/ucca1/to_do_page');

});

/**************
Research findings
***************/
app.get('/ucca1/research_findings', function(req,res) {
    res.render('ucca1/research_findings', {
    data     : content.getTableData()
    });
});

/**************
Changes made
***************/
app.get('/ucca1/changes_made', function(req,res) {
    res.render('ucca1/changes_made', {
    data     : content.getTableData()
    });
});

};
