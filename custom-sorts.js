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
  return s.split("").sort().join("")===t.split("").sort().join("")
}

function reverseBaseSort(arr) {
  // Your code here
  return arr.sort((a,b)=> {
    if (a.toString().length == b.toString().length) return a - b
    return b.toString().length - a.toString().length
  })
}

function frequencySort(arr) {
  let count = {}
  arr.forEach(item=>{
    if (!count[item]) count[item]=0
    count[item]++
  })
  //console.log(count)
  return arr.sort((a,b)=> {
    if (count[a] != count[b]) return count[a]-count[b]
    return b-a
  })
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
