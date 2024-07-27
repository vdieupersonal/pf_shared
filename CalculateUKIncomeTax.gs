
/**
 * Calculate UK National Insurance Contributions (NICs).
 * 
 * @param {number} income The annual income.
 * @return {number} The amount of NICs to be paid.
 * @customfunction
 */
function calculateUKNICs(income) {
  // NICs calculation
  let nics;
  if (income <= 12570) {
    nics = 0;
  } else if (income <= 50270) {
    nics = (income - 12570) * 0.08;
  } else {
    nics = (50270 - 12570) * 0.08 + (income - 50270) * 0.02;
  }

  return nics;
}
