
module.exports = function (app) {
  var content = require('../content/content');
  var routeSettings = routeSettings === undefined ? "default" : routeSettings;

const version = 'pyi16';

/*********
UC Login Page
**********/

app.get('/' + version + '/uc_login', function(req, res) {
    debugger;
  res.render(version + '/uc_login', {
    data : content.getTableData(),
    version: version
  });
});
app.post('/' + version + '/uc_login', function(req, res) {
  req.session[version + '-uc_login'] = req.body;
  res.redirect('/' + version + '/bank_details');
});

/********
To-do Page
*********/

app.get('/' + version + '/to_do_page', function(req,res) {
    res.render(version + '/to_do_page', {
      data          : content.getTableData(),
      bank_details  : req.session[version + '-bank_details'],
      enter_bank_details: req.session[version + '-enter_bank_details'],
      success       : req.session[version + '-success'],
      failure       : req.session[version + '-failure'],
      returning     : req.session[version + '-uc_login'],
      payment_failed: req.session[version + '-payment_failed'],
      expired       : req.session[version + '-expired'],
      version: version
    });
});
app.post('/' + version + '/to_do_page', function (req, res) {
  res.redirect('/' + version + '/bank_details');
});

/*****
bank_details
******/

app.get('/' + version + '/bank_details', function(req,res) {
    res.render(version + '/bank_details', {
      data    : content.getTableData(),
      version: version
    });
});
app.post('/' + version + '/bank_details', function(req,res) {
  req.session[version + '-bank_details'] = req.body;
  res.redirect('/' + version + '/has_roll_number');
});

/*****
has_roll_number
******/

app.get('/' + version + '/has_roll_number', function(req,res) {
    res.render(version + '/has_roll_number', {
      data    : content.getTableData(),
      version: version
    });
});
app.post('/' + version + '/has_roll_number', function(req,res) {
  req.session[version + '-has_roll_number'] = req.body;
  if(req.body.rollNumber === "Yes") {
    res.redirect('/' + version + '/payment_failed');
  } else {
  res.redirect('/' + version + '/enter_bank_details');
}
});

/*****
enter_bank_details
******/

app.get('/' + version + '/enter_bank_details', function(req,res) {
    res.render(version + '/enter_bank_details', {
      data    : content.getTableData(),
      version: version
    });
});
app.post('/' + version + '/enter_bank_details', function(req,res) {
  req.session[version + '-enter_bank_details'] = req.body;
  if(routeSettings === "failedPayment") {
    res.redirect('/' + version + '/payment_failed');
  } else {
  res.redirect('/' + version + '/make_payment');
}
});

/*****
make_payment
******/

app.get('/' + version + '/make_payment', function(req,res) {
  res.render(version + '/make_payment', {
    data    : content.getTableData(),
    version: version
  });
});
app.post('/' + version + '/make_payment', function (req, res) {
  res.redirect('/' + version + '/bank_submitted');
});


/*****
bank_submitted
******/

app.get('/' + version + '/bank_submitted', function(req,res) {
    res.render(version + '/bank_submitted', {
      data    : content.getTableData(),
      twoPayments : false,
      version: version
    });
});
app.post('/' + version + '/bank_submitted', function(req,res) {
  if(routeSettings === "failedPayment") {
    res.redirect('/' + version + '/payment_failed');
  } else {
    res.redirect('/' + version + '/enter_reference');
}
});


/*****
reminder
******/

app.get('/' + version + '/reminder', function(req,res) {
    res.render(version + '/reminder', {
     data     :   content.getTableData(),
     version: version
    });
});
app.post('/' + version + '/reminder', function(req,res) {
    if(req.body.submit === 'Book interview') {
        res.redirect('/' + version + '/404');
    } else {
        res.redirect('/' + version + '/uc_login');
    }
});

/********
Enter Reference
*********/

app.get('/' + version + '/enter_reference', function(req,res) {
    res.render(version + '/enter_reference', {
    data     :   content.getTableData(),
    second_entry  : req.session[version + '-second_entry'],
    version: version
    });
});
app.post('/' + version + '/enter_reference', function(req,res) {
    if (req.body.codeTestInput.replace(/\s+/g, '') === '123456') {
    switch(routeSettings) {
      case "failedSystem":
        res.redirect('/' + version + '/system_failure');
        break;
      case "expiredReference":
        res.redirect('/' + version + '/expired');
        break;
      default:
      res.redirect('/' + version + '/success');
    }
  } else {
    if(routeSettings === "failedSystem") {
      res.redirect('/' + version + '/system_failure');
    } else {
      res.redirect('/' + version + '/failure');
    }
  }
});

/********
No page exists
*********/

app.get('/' + version + '/no_page_exists', function(req,res) {
    res.render(version + '/no_page_exists', {
    data     :   content.getTableData(),
    version: version
    });
});
app.post('/' + version + '/no_page_exists', function(req,res) {
  res.redirect('/' + version + '/bank_details');
});

/********
Success
*********/

app.get('/' + version + '/success', function(req,res) {
    res.render(version + '/success', {
    data     :   content.getTableData(),
    version: version
    });
});
app.post('/' + version + '/success', function(req,res) {
  req.session[version + '-success'] = req.body;
  if(req.body.submit === "Book my interview") {
      res.redirect('/' + version + '/404');
  } else {
     res.redirect('/' + version + '/uc_login');
  }
});

/********
Failure
*********/

app.get('/' + version + '/failure', function(req,res) {
    req.session.attempts ++;
    res.render(version + '/failure', {
      attempts    :   (req.session.attempts || 0) + 1,
      data        :   content.getTableData(),
      version: version
    });
    if (req.session.attempts === 2) {
      req.session.destroy();
    }
});
app.post('/' + version + '/failure', function(req,res) {
    console.log(req.body);
    req.session[version + '-failure'] = req.body;
    if (req.body.verifyAgain == 'Try GOV.UK Verify again') {
      res.redirect('/' + version + '/404');
    } else if (req.body.verifyAgain == 'Try using your bank account again') {
      res.redirect('/' + version + '/bank_details');
    } else if (req.body.verifyAgain == 'Attend a face to face interview') {
      res.redirect('/' + version + '/404');
    } else {
  res.redirect('/' + version + '/enter_reference');
}
});

/********
Second Entry
*********/

app.get('/' + version + '/second_entry', function(req,res) {
    res.render(version + '/second_entry', {
    data     : content.getTableData(),
    version: version
    });
});
app.post('/' + version + '/second_entry', function(req,res) {
  req.session[version + '-second_entry'] = req.body;
    res.redirect('/' + version + '/enter_reference');
});

/******
Reset
*******/

app.get('/' + version + '/reset', function(req,res) {
    res.render(version + '/reset', {
    data       :   content.getTableData(),
    version: version
  });
});

app.post('/' + version + '/reset', function(req,res) {
  routeSettings = "default";
  req.session.destroy();
  res.redirect('/' + version + '/bank_details');
});

/**************
Settings
***************/
app.get('/' + version + '/settings', function(req, res) {
  res.render(version + '/settings', {
    data    : content.getTableData(),
    version: version
  });
});

app.post('/' + version + '/settings', function(req, res) {
  /*switch(req.body.settings.toLowerCase()) {
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
  }*/

  if (req.body.settings.toLowerCase() === 'claimant') {
    res.cookie('claimantJourneyOption', req.body.settings_1)
    res.redirect('/' + version + '/bank_details');
  } else {
    res.cookie('agentJourneyOption', req.body.settings_2)
    res.redirect('/' + version + '/agent_search');
  }
});

/**************
404
***************/
app.get('/' + version + '/404', function(req,res) {
    res.render(version + '/404', {
    data     : content.getTableData(),
    version: version
    });
});
app.post('/' + version + '/404', function(req,res) {
  res.redirect('/' + version + '/bank_details');
});

/*****
Expired
******/

app.get('/' + version + '/expired', function(req,res) {
    res.render(version + '/expired', {
     data     :   content.getTableData(),
     version: version
    });
});
app.post('/' + version + '/expired', function(req,res) {
  req.session[version + '-expired'] = req.body;
  res.redirect('/' + version + '/uc_login');
});

/*****
Payment Failed
******/

app.get('/' + version + '/payment_failed', function(req,res) {
    res.render(version + '/payment_failed', {
     rollNumber  : req.session[version + '-has_roll_number'],
     data     :   content.getTableData(),
     version: version
    });
});
app.post('/' + version + '/payment_failed', function(req,res) {
  req.session[version + '-payment_failed'] = req.body;
  res.redirect('/' + version + '/uc_login');
});

/*****
System failure
******/

app.get('/' + version + '/system_failure', function(req,res) {
    res.render(version + '/system_failure', {
     data     :   content.getTableData(),
     version: version
    });
});
app.post('/' + version + '/system_failure', function(req,res) {
  res.redirect('/' + version + '/uc_login');
});

/*****
 Agent screens
 *****/
app.get('/' + version + '/agent_search', function(req,res) {
  res.render(version + '/agent_search', {
    data     :   content.getTableData(),
    version: version
  });
});

app.post('/' + version + '/agent_search', function(req,res) {
  res.send('POST FROM AGENT SEARCH')
  
  /*res.render(version + '/agent_search', {
    data     :   content.getTableData(),
    version: version
  });*/
});

app.get('/' + version + '/agent_result_success', function(req,res) {
  res.render(version + '/agent_result_success', {
    data     :   content.getTableData(),
    version: version
  });
});

app.get('/' + version + '/agent_result_failure', function(req,res) {
  res.render(version + '/agent_result_failure', {
    data     :   content.getTableData(),
    version: version
  });
});

};
