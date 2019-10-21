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

function oddOrEven() {

}

function changeNextThreeToValue() {

}

module.exports = {
  changeLast,
  addMeToEnd,
  addMeToStart,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}