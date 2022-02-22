function ageSort(users) {
  if (users.length <= 1) {
    return users;
  }
  let pivot = users.shift();
  let left = users.filter((el) => el.age < pivot.age);
  let right = users.filter((el) => el.age >= pivot.age);
  let leftSorted = ageSort(left);
  let rightSorted = ageSort(right);
  return [...leftSorted, pivot, ...rightSorted];
}

function oddEvenSort(arr) {
  let odd = arr.filter(ele=>{return ele%2!==0})
  let even = arr.filter(ele=>{return ele%2===0})
  odd.sort((a,b)=>a-b);
  even.sort((a, b) => a - b);
  return odd.concat(even);
}

function validAnagrams(s, t) {
  let string = s.split("");
  let variable = t.split("");
  string = string.sort().join("")
  variable = variable.sort().join("")
  return string===variable
}

function reverseBaseSort(arr) {
  let trip = [];
  let double = [];
  let single = [];
  arr.forEach(ele=>{
    if(ele<10){
      single.push(ele);
    } else if(ele>9&&ele<100){
      double.push(ele)
    } else trip.push(ele)
  })

  trip.sort((a,b)=>a-b);
  double.sort((a,b)=>a-b);
  single.sort((a,b)=>a-b);

  return [...trip,...double,...single]
}

function frequencySort(arr) {
  let freq = {};
  arr.forEach(ele=>{
    if(freq[ele]===undefined){
      freq[ele]=1
    } else freq[ele]++;
  })
  const valArr = Object.entries(freq)
  console.log(valArr)
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
