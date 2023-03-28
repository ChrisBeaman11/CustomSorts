function ageSort(users) {
  // Your code here
  return users.sort((a,b) => a.age - b.age)
}

function oddEvenSort(arr) {
  return arr.sort((a, b) => {
    if(a%2 === 1 && b%2 ===1){
      return a-b;
    }
    if(a%2 === 0 && b%2 ===0){
      return a-b;
    }
    if(a%2 === 1){
      return -1;
    }
    return 1;
  })
}
function validAnagrams(s, t) {
  s = s.split("");
  t = t.split("");
  let sret;
  let tret;
  sret = s.sort((a,b) => parseInt(a) - parseInt(b));
  tret = t.sort((a,b) => parseInt(a) - parseInt(b));
  sret = sret.join("");
  tret = tret.join("");
  console.log(sret, tret);
  return sret === tret;
}

function reverseBaseSort(arr) {
  // Your code here
}

function frequencySort(arr) {
  // Your code here
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
