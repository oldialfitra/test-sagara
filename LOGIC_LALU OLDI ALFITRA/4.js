function pattern(N) {
    let result = ''
    let count = 0
    if (N % 2 === 0) {
        return 'Harus bilangan ganjil'
    }
    else {
        let O = N - 3
        for (let i = 0; i < N; i++) {
            let countO = 0
            for (let j = 0; j < N; j++) {
                if (N === 3) {
                    if (i === 0 || j === 0 || i === N - 1 || j === N - 1) {
                        result += 'A'
                    }
                    else if (i + 1 === j + 1) {
                        result += 'A'
                    }
                }
                else {
                    if (i === 0 || j === 0 || i === N - 1 || j === N - 1) {
                        result += 'A'
                    }
                    else if (j === N - i - 1) {
                        result += 'A'
                    }
                    else if (i === 1 && countO < O) {
                        result += 'O'
                        countO++
                    }
                    else if (i === 1 && countO === O) {
                        result += 'A'
                    }
                    else if (i === N - 2 && countO < O && j !== 1) {
                        result += 'O'
                        countO++
                    }
                    else if (i === N - 2 && countO < O && j === 1) {
                        result += 'A'
                    }
                    else if (i === Math.floor(N / 2) && countO < O && j !== Math.floor(N / 2)) {
                        result += 'O'
                        countO++
                    }
                    else if (i === Math.floor(N / 2) && countO < O && j === Math.floor(N / 2)) {
                        result += 'A'
                    }
                    else if (i === Math.floor(N / 2) && countO < O && j === Math.floor(N / 2)) {
                        result += 'A'
                    }
                    else {
                        result += 'O'
                        countO++
                    }
                }
            }
            if (i !== N - 1) {
                result += '\n'
            }
        }
    }
    return result
}

function main() {
    let input = 9
  
    return pattern(input)
  }
  
  console.log(main())