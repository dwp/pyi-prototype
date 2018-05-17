var data = [{
  "settings": [{
    "heading"     : "Prototype Options",
    "lede"        : "Select the user journey you wish to use",
    "radios"      : [{
      "radioWithConditionalContent": {
        "value": "Claimant",
        "radios": [{
          "value":"Default"
        }, {
          "value":"Expired reference"
        }, {
          "value":"Payment failed"
        }, {
          "value":"System failure"
        }, {
          "value": "User time-out"
        }]
      }
    }, {
      "radioWithConditionalContent": {
        "value": "Agent search",
        "radios": [
          {
            "value": "Claimant verified",
          }, {
            "value": "Claimant not verified"
          }, {
            "value": "System failure"
          }]
        }
    }, {
      "value": "Page not found"
    }],
    "button"      : "Start journey"
  }]
}]

exports.getTableData = function() {
  return data;
};
