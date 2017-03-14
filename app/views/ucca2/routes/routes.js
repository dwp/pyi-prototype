
module.exports = function (app) {
  var content = require('../content/content');

/********
To do page
*********/

app.get('/ucca2/to_do_page', function(req,res) {
    res.render('ucca2/to_do_page', {
      data          : content.getTableData(),
      bank_details  : req.session['ucca2-bank_details'],
      success       : req.session['ucca2-success']
    });
});
app.post('/ucca2/to_do_page', function (req, res) {
  res.redirect('/ucca2/how_verify');
});

/********
How verify
*********/

app.get('/ucca2/how_verify', function(req,res) {
    res.render('ucca2/how_verify', {
    data     : content.getTableData()
    });
});
app.post('/ucca2/how_verify', function(req,res) {
  if (req.body.howVerify == 'Use your bank account' ){
  res.redirect('/ucca2/info_bank');
} else {
res.redirect('/ucca2/no_page_exists');
}
});

/*****
info_bank
******/

app.get('/ucca2/info_bank', function(req,res) {
    res.render('ucca2/info_bank', {
     data     :   content.getTableData()
    });
});
app.post('/ucca2/info_bank', function(req,res) {
  res.redirect('/ucca2/bank_details');
});

/*****
bank_details
******/

app.get('/ucca2/bank_details', function(req,res) {
    res.render('ucca2/bank_details', {
      data    : content.getTableData()
    });
});
app.post('/ucca2/bank_details', function(req,res) {
  req.session['ucca2-bank_details'] = req.body;
  res.redirect('/ucca2/bank_submitted');
});

/*****
bank_details
******/

app.get('/ucca2/bank_submitted', function(req,res) {
    res.render('ucca2/bank_submitted', {
      data    : content.getTableData()
    });
});
app.post('/ucca2/bank_submitted', function(req,res) {
  res.redirect('/ucca2/enter_reference');
});

/********
Enter Reference
*********/

app.get('/ucca2/enter_reference', function(req,res) {
    res.render('ucca2/enter_reference', {
    data     :   content.getTableData(),
    });
});
app.post('/ucca2/enter_reference', function(req,res) {
  if (req.body.codeInput.toLowerCase() == 'uc1617899') {
    res.redirect('/ucca2/success');
  } else {
    res.redirect('/ucca2/failure');
  }
});

/********
No page exists
*********/

app.get('/ucca2/no_page_exists', function(req,res) {
    res.render('ucca2/no_page_exists', {
    data     :   content.getTableData()
    });
});
app.post('/ucca2/no_page_exists', function(req,res) {
  res.redirect('/ucca2/to_do_page');
});

/********
Success
*********/

app.get('/ucca2/success', function(req,res) {
    res.render('ucca2/success', {
    data     :   content.getTableData()
    });
});
app.post('/ucca2/success', function(req,res) {
  req.session['ucca2-success'] = req.body;
  res.redirect('/ucca2/to_do_page');
});

/********
Failure
*********/

app.get('/ucca2/failure', function(req,res) {
    req.session.attempts ++;
    res.render('ucca2/failure', {
      attempts    :   (req.session.attempts || 0) + 1,
      data        :   content.getTableData()
    });
});
app.post('/ucca2/failure', function(req,res) {
    req.session['ucca2-failure'] = req.body;
    if (req.session.attempts >= '2'){
      req.session.destroy();
      res.redirect('/ucca2/to_do_page');
    } else {
  res.redirect('/ucca2/enter_reference');
}
});

/******
Reset
*******/

app.get('/ucca2/reset', function(req,res) {
    res.render('ucca2/reset', {
    data       :   content.getTableData()
  });
});

app.post('/ucca2/reset', function(req,res) {
  req.session.destroy();
  res.redirect('/ucca2/to_do_page');
});

/**************
Research findings
***************/
app.get('/ucca2/research_findings', function(req,res) {
    res.render('ucca2/research_findings', {
    data     : content.getTableData()
    });
});

/**************
Changes made
***************/
app.get('/ucca2/changes_made', function(req,res) {
    res.render('ucca2/changes_made', {
    data     : content.getTableData()
    });
});

};
