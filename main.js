function changeLast(arr,num) {
  arr[arr.length - 1] = num;

}

function addMeToEnd(arr) {
  arr[arr.push('Colin')]
}

function addMeToStart(arr) {
  arr[arr.unshift('Colin')]
}

function changeAllValuesTo(a,v) {
let i, num = a.length;
    for (i = 0; i < num; ++i) {
        a[i] = v;
    }
}

function oddOrEven(arr) {
  let i = 0
  while (i <arr.length) {
    if (arr[i] % 2 === 1) {
      arr[i] = 'odd';
    } else {
      arr[i] = 'even';
    }
    i++
  }
}

function changeNextThreeToValue(start, arr, value) {
  arr[start] = value;
  arr[start + 1] = value;
  arr[start + 2] = value;
}

module.exports = {
  changeLast,
  addMeToEnd,
  addMeToStart,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}