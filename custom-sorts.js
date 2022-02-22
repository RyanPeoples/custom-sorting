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
}

function validAnagrams(s, t) {
  // Your code here
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
