function checkCliArg(cliArg) {
  if (cliArg.length > 1) return false;
  return true;
}
module.exports = checkCliArg;