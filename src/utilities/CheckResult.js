/**
 * Constructor function for an object to be returned by all checks.
 *
 */
function CheckResult(checkName, hasError = false, HTML = '', hasDate = false) {
  this.checkName = checkName;
  this.description = '';
  this.hasError = hasError;
  this.HTML = HTML;
  this.plainText = '';
  this.hasTargetDate = hasDate;
}

export default CheckResult;
