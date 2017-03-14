/* global $ */
/* global GOVUK */

// Warn about using the kit in production
if (
  window.sessionStorage && window.sessionStorage.getItem('prototypeWarning') !== 'false' &&
  window.console && window.console.info
) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
  window.sessionStorage.setItem('prototypeWarning', true)
}

$(document).ready(function () {
  // Use GOV.UK selection-buttons.js to set selected
  // and focused states for block labels
  var $blockLabels = $(".block-label input[type='radio'], .block-label input[type='checkbox']")
  new GOVUK.SelectionButtons($blockLabels) // eslint-disable-line

  // Use GOV.UK shim-links-with-button-role.js to trigger a link styled to look like a button,
  // with role="button" when the space key is pressed.
  GOVUK.shimLinksWithButtonRole.init()

  // Show and hide toggled content
  // Where .block-label uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()
})

// Show/Hide for index page

  $('.show-older').click(function() {
    if ($('#olderVersions' + '.js-hidden').length !== 0) {
    $('#olderVersions').removeClass('js-hidden');
    } else {
    $('#olderVersions').addClass('js-hidden');
    }
    return false;
  });

  $('.browser-back').click(function() {
    history.back();
    return false;
  });




// Ignore below here, just trying to try different ways of achieving the same result.


var addDate = function(months,days) {
  var todayDate = new Date();
  var day = todayDate.getDay() + days;
  var dayName = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  var year = todayDate.getFullYear();
  var month = todayDate.getMonth() + months;
  var otherMonths = [0,2,4,6,7,9];
  var monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var futureDate = todayDate.getDate() + days;
  do {
  // December to January
  if (month > 11){
    month -= 12; year += 1;
  }
  // Where month has 30 days
  if ((month === 3 || month === 5 || month === 8 || month === 10) && (futureDate > 30)) {
    month += 1; futureDate -= 30;
  }
  //For December, February then all remaining months when adding days
    if (month === 11 && futureDate > 31) {
    month -= 11; futureDate -= 31; year += 1;
  } if (month === 1 && futureDate > 29 && (year % 4) === 0 && (year % 100) !== 0) {
    month += 1; futureDate -= 29;
  } if (month === 1 && futureDate > 28 && (year % 4) === 0 && (year % 100) === 0 && (year % 400) !== 0) {
    month += 1; futureDate -= 28;
  } if (month === 1 && futureDate > 29 && (year % 4) === 0 && (year % 100) === 0 && (year % 400) === 0) {
    month += 1; futureDate -= 29;
  } if (month === 1 && futureDate > 28 && (year % 4) !== 0) {
    month += 1; futureDate -= 28;
  } if (otherMonths.indexOf[month] !== -1 && futureDate > 31 ) {
    month += 1; futureDate -= 31;
  }} while((futureDate >= 32) ||
          (month === 1 && futureDate > 29 && (year % 4) === 0 && (year % 100) !== 0) ||
          (month === 1 && futureDate > 28 && (year % 4) === 0 && (year % 100) === 0 && (year % 400) !== 0) ||
          (month === 1 && futureDate > 29 && (year % 4) === 0 && (year % 100) === 0 && (year % 400) === 0) ||
          (month === 1 && futureDate > 28 && (year % 4) !== 0) ||
          ((month === 3 || month === 5 || month === 8 || month === 10) && (futureDate > 30))
        );

  return (dayName[(day % 7) - 1] + " " + futureDate + " " + monthName[month]);
};

$('.addSeven').html(addDate(0,7));
