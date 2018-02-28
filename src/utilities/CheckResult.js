/**
 * @constructor
 */
function CheckResult(checkName, hasError = false, HTML = '') {
  this.checkName = checkName;
  this.description = '';
  this.hasError = hasError;
  this.HTML = HTML;
  this.plainText = '';

  this.sourceDates = [];
  this.targetDates = [];

  /* These are currently unused */
  this.sourceNums = [];
  this.targetNums = [];
}

export default CheckResult;
