function checkNumber(arr) {
    let result = []
    let sorted = arr.sort(function (a, b) {
      return a-b  
    })
    let temp = []
    let min = sorted[0]
    let max = sorted[sorted.length - 1]

    while (min <= max) {
      temp.push(min)
      min++
    }
    let i = 0
    min = sorted[0]
    max = sorted[sorted.length - 1]
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] !== sorted[i] && sorted[i] !== undefined) {
        result.push(temp[i])
      }
    }
    return result[0]
}

function main() {
  let input = [5, 2, 8, 4, 3, 10]

  return checkNumber(input)
}

console.log(main())