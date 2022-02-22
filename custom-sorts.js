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
  let sortedArr = []

  //set object with key/value pairs
  arr.forEach(ele=>{
    if(freq[ele]===undefined){
      freq[ele]=1
    } else freq[ele]++;
  })

  //turn object into array
  const valArr = Object.entries(freq)

  //sorts by value
  valArr.sort(function (a, b) {
    return a[1] - b[1]
  });
  
  //cases for increasing order & same value
  let i = 0;
  while(valArr[i+1]){
    if (valArr[i][1] === valArr[i + 1][1]) {
      if (valArr[i][0] < valArr[i + 1][0]) {
        let temp = valArr[i]
        valArr[i] = valArr[i + 1]
        valArr[i + 1] = temp
      }
    }
    i++
  }

  //create new array from k/v 2D array
  for(let i = 0;i<valArr.length;i++){
    let pairs = valArr[i];
    for(let i = 0; i<pairs[1];i++){
      sortedArr.push(parseInt(pairs[0]))
    }
  }
  return sortedArr
}
const arr2 = [2, 3, 1, 3, 2];
const arr3 = [-1, 1, -6, 4, 5, -6, 1, 4, 1];
console.log(frequencySort(arr2))

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
