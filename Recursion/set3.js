//Find Odd numbers using helper methods recurion

function findOdds(lstNum) {
  let result = [];
  function helper(lstHelper) {
    if (lstHelper.length === 0) return;
    if (lstHelper[0] % 2 !== 0) {
      result.push(lstHelper[0]);
    }
    helper(lstHelper.slice(1));
  }
  helper(lstNum);
  return result;
}

function findOdd2(lstNum) {
  let listNew = [];
  if (lstNum.length === 0) return [];
  if (lstNum[0] % 2 !== 0) {
    listNew.push(lstNum[0]);
  }
  listNew = listNew.concat(findOdd2(lstNum.slice(1)));
  return listNew;
}
console.log(findOdd2([10, 9, 8, 6, 5]));
