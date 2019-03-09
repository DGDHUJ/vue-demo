export function _debounce(func, delay) {
  let timer
  
  const idelay = delay || 300
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, idelay)
  }
}

export function _throttle(fn, delay) {
  var timer = null;
  const idelay = delay || 300
  return function () {
    var context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, idelay);
  };
};

/**
 * 移除数组中的指定元素
 * @desc 移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组
 * @param {Array} arr 
 * @param {str} item 
 */
export function remove(arr, item) {
  var result=[];
      arr.forEach(function(element){
          if(element!=item){
              result.push(element);
          }
      });
  return result;
}
// 快速排序
export function _fastsort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  var left = [];
  var right = [];
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i])
    }
  }
  return _fastsort(left).concat([pivot], _fastsort(right));
}

/**
 * @desc 去除左右两边空格、制表符、换行符
 * @param {string} str 
 */
export function Trim(str){
  return str.replace(/(^[\s\n\t]+|[\s\n\t]+$)/g, "");
}

/**
 * 限定只能输入数字
 * @param {keydown.nativekeydown.native} e
 */
export function inputLimit(e) {
  let num = e.target.value || "";
  let code = e.which || e.keyCode;
  let str =
    e.key && e.key != "Unidentified" ? e.key : num.substr(num.length - 1);
  console.log(
    "|type:" + e.type + "|code:" + code + "|str:" + str + "|value:" + num
  );
  //无论任何情况，皆可执行
  if (code == "8") {
    return true;
  }
  //没有满足任何一种情况，中断执行
  if (!(/[\d.]/.test(str) || code == "190")) {
    e.returnValue = false;
    return false;
  }
  if (
    num.length > 12 ||
    (num.indexOf(".") >= 0 && code == "190") ||
    (num.indexOf(".") == num.length - 3 && num.length > 3) ||
    (num.length == 0 && code == "190")
  ) {
    e.returnValue = false;
    return false;
  }
}