/*
 * @Author: YYM
 * @Date: 2022-12-02 17:41:48
 * @LastEditors: YYM
 * @LastEditTime: 2022-12-03 15:52:37
 * @FilePath: \y-code-problem\javascript\index.js
 * @FileDescribe: Code Problem
 */

$('#answer').click(function () {
  console.log('answer')
  const g_input = document.getElementById('question').value
  function qust1 () {
    /* 屏蔽身份证号码、手机号码，只保留后四位数字  */
    console.log('一、屏蔽身份证号码、手机号码，只保留后四位数字')
    var ipid = document.getElementById('question').value
    console.log(myInput)
    if (ipid.length <= 4) {
      document.getElementById('display').innerHTML = ipid
    } else {
      console.log('大于4')
      var ipidLong = ipid.length
      var numberFour
      console.log(ipid.substring(0, ipidLong - 4))
      var a = ipid.substring(0, ipidLong - 4)
      var b = ipid.substring(ipidLong - 4, ipidLong)
      var ra = a.replace(/[0-9]/gi, '*')
      console.log(ra + b)
      document.getElementById('display').innerHTML = ra + b
    }
  }
  // qust1();

  /* 筛选出不同的数字 */
  function qust2 () {
    console.log('二、筛选出不同的数字')
    var number = [2, 2, 2, 2, 3, 2, 2, 2, 2]
    var singleNumber
    // statement
    var sortArr = number.sort(function (a, b) {
      return a - b
    })
    console.log(sortArr)
    if (sortArr[0] == sortArr[1]) {
      singleNumber = sortArr[sortArr.length - 1]
    } else {
      singleNumber = sortArr[0]
    }
    console.log(singleNumber)
    console.log('good answer')
    const stray = (nums) => nums.reduce((a, b) => a ^ b)
  }
  // qust2();

  /* 排序输出最大最小值 */
  function qust3 () {
    console.log('三、排序输出最大最小值')
    let number = '1 2 10 8 3'
    var nmbarr = number.split(' ')
    var numarr0 = [1, 5, 46, 123, 3]
    console.log(nmbarr)
    console.log(
      nmbarr.sort(function (a, b) {
        return a - b
      })
    )
  }
  // qust3();

  /* 字符串筛选出大写字符的序号 */
  function qust4 () {
    console.log('四、字符串筛选出大写字符的序号')
    console.log(/[A-Z]/.test('G'))
    let str = $('#question').val()
    let strArr = str.split('')
    console.log(strArr)
    let n = []
    for (let i in strArr) {
      // statement
      if (/[A-Z]/.test(strArr[i]) == true) {
        n.push(i)
      }
    }
    console.log(n)
    var capitals = function (word) {
      return word.split('').reduce(function (memo, v, i) {
        return v === v.toUpperCase() ? memo.concat(i) : memo
      }, [])
    }
    console.log(capitals())
  }
  // qust4();

  /* 数字每一位数求和 */
  let qust5 = function () {
    console.log('五、数字每一位数求和')
    let input = document.querySelector('#question').value
    console.log(input)
    let str = input.toString()
    let i0 = str.slice(0, 1)
    let sum0 = 0
    function foo1 (str) {
      sum0 = 0
      for (let i = 0; i < str.toString().length; i++) {
        sum0 += parseInt(str.toString().slice(i, i + 1))
      }
      if (sum0.toString().length > 1) {
        foo1(sum0)
      } else {
        return sum0
      }
    }
    let foo2 = (str) => {
      sum0 = 0
      for (let i = 0; i < str.toString().length; i++) {
        sum0 += parseInt(str.toString().slice(i, i + 1))
      }
      if (sum0.toString().length > 1) foo1(sum0)
    }
    let foo3 = (n) => {
      return ((str - 1) % 9) + 1
    }
    let foo4 = (input) => {
      if (input < 10) return input
      return foo4(
        input
          .toString()
          .split('')
          .reduce(function (acc, d) {
            return acc + +d
          }, 0)
      )
    }
    foo2(str)
    console.log(str.length)
    console.log(i0)
    console.log(foo4(input))
  }
  // qust5();

  /* 去除数组内相同的元素 */
  const qust6 = function () {
    console.log('六、去除数组内相同的元素')
    let arr1 = [2, 1, 0, 2, 2, 3, 4, 3, 5]
    let arr2 = [2, 3, 2, 2, 4, 2, 6]
    let arrN1 = arr1
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arrN1[i] == arr2[j]) {
          delete arrN1[i]
        }
      }
    }
    let arrN2 = []
    for (let item of arrN1) {
      if (item || item == 0) {
        arrN2.push(item)
      }
      // statement
    }
    console.log(arrN2)
    let arr3 = arr1.filter(function (x) {
      return arr2.indexOf(x) == -1
    })
    console.log(arr3)
  }
  // qust6();

  /* 二进制数的1出现相同的次数 */
  const qust7 = function () {
    console.log('七、二进制数的1出现相同的次数')
    let $inputValue = $('#question').val()
    let $n = parseInt($inputValue).toString(2)
    var num = 0
    var arr = $n.split('')
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == 1) {
        num += 1
      }
    }
    console.log($n)
    console.log(arr)
    console.log(num)
  }
  // qust7();

  /* 
   八、岛屿的周长
   给定一个包含 0 和 1 的二维网格地图，其中 1 表示陆地 0 表示水域。
   网格中的格子水平和垂直方向相连（对角线方向不相连）。
   整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。
   */
  const qust8 = function () {
    console.log('八、岛屿的周长')
    let island_arr = [
      [0, 1, 0, 0],
      [1, 1, 1, 0],
      [0, 1, 0, 0],
      [1, 1, 0, 0],
    ]
    let perimeter = 0
    let cell_val = 0

    // i 为行数，j为列数
    for (let i = 0; i < island_arr.length; i++) {
      for (let j = 0; j < island_arr[i].length; j++) {
        if (island_arr[i][j] == 1) {
          console.log('i:' + i, 'j:' + j)
          cell_val = 4
          if (i > 0 && island_arr[i - 1][j] == 1) {
            cell_val -= 2
          }
          if (j > 0 && island_arr[i][j - 1] == 1) {
            cell_val -= 2
          }
          perimeter += cell_val
        }
      }
    }
    console.log(perimeter)
    return perimeter
  }
  // qust8()

  /** 
  * 字符串压缩。利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。
  * 比如，字符串aabcccccaaa会变为a2b1c5a3。若“压缩”后的字符串没有变短，则返回原先的字符串。
  * 你可以假设字符串中只包含大小写英文字母（a至z）。
  */
  const qust9 = () => {
    console.log('字符串压缩')
    let str = 'aabcccccaa'
    let arr = str.split('')
    arr.push('*')
    let new_arr = []
    let count = 1
    arr.reduce((pre, cur, index, arr) => {
      console.log(pre)
      if (pre != cur) {
        new_arr.push(pre)
        new_arr.push(count)
        count = 1
      } else {
        count++
      }
      return cur
    })
    let result = new_arr.join('')
    if (result.length >= str.length) {
      return str
    }
    console.log(result)
    return result
  }
  // qust9()

  /**
   *  最长公共前缀
   *查找字符串数组中的最长公共前缀
   * @param {string[]} strs
   * @return {string}
 */
  const qust10 = () => {
    let strs = ["flyower", "flyow", "fly", "flyight"]
    strs.sort((a, b) => a.length - b.length)
    let len = strs[0].length
    let str = ''
    for (i = 0; i < len; i++) {
      let temp = strs[0].slice(0, len - i)
      if (strs.every(item => item.indexOf(temp) == 0)) {
        str = temp
        break;
      }
    }
    console.log(str);
    return str
  }
  // qust10()


  /**
   * 回文数
   */
  const qust11 = function () {
    let $inVal = $("#question").val();
    let arr = []
    arr = $inVal.toString().split('')
    for (let i = 0; i < arr.length / 2; i++) {
      if (arr[i] !== arr[arr.length - (i + 1)]) {
        console.log(i)
        console.log('false')
        return false
      }
    }
    console.log('是回文数')
    return true
  }
  // qust11()

  /**
   * 罗马数字转化
   * 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
   */
  const qust12 = () => {
    console.log('罗马数字转换');
    const $inVal = $("#question").val();
    let strArr = $inVal.split('')
    let rNum = 0
    function numFilter (s) {
      switch (s) {
        case 'I':
          return 1
          break;
        case 'V':
          return 5
          break;
        case 'X':
          return 10
          break;
        case 'L':
          return 50
          break;
        case 'C':
          return 100
          break;
        case 'D':
          return 500
          break;
        case 'M':
          return 1000
          break;
        default:
          return 0
          break;
      }
    }
    strArr.reduce((pre, cur, index) => {
      if (pre == 'I' && cur == 'V' || pre == 'I' && cur == 'X') {
        rNum += (numFilter(cur) - 2 * numFilter(pre))
      } else if (pre == 'X' && cur == 'L' || pre == 'X' && cur == 'C') {
        rNum += (numFilter(cur) - 2 * numFilter(pre))
      } else if (pre == 'C' && cur == 'D' || pre == 'C' && cur == 'M') {
        rNum += (numFilter(cur) - 2 * numFilter(pre))
      } else {
        rNum += numFilter(cur)
      }
      return cur
    }, strArr[0])
    console.log(rNum);

  }
  // qust12()

  /**
   * 有效的括号
   * @returns 
   */
  const qust13 = () => {
    console.log('有效的括号');
    const $inVal = $("#question").val();
    let strArr = $inVal.split('')
    let result = $inVal
    while (result.indexOf('{}') >= 0 || result.indexOf('[]') >= 0 || result.indexOf('()') >= 0) {
      result = result.replace('{}', '')
      result = result.replace('[]', '')
      result = result.replace('()', '')
    }
    console.log(result);
    return result == ''
  }
  // qust13();


})
