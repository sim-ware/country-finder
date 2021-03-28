function checkCliArg(cliArg) {
  if (cliArg.length > 1) return false;
  if (typeof cliArg[0] !== 'string') return false;
  return true;
}
module.exports = checkCliArg;