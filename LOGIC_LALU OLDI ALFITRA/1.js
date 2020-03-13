function cacah(N) {

    let result = []
    let temp = 0
    for (let i = 0; i < N; i++) {
        if (temp % 3 === 0 && temp > 0) {
            result.push(temp)
        }
        else if (temp % 7 === 0 && temp > 0) {
            result.push(temp)
        }
        else if (temp % 3 === 0 && temp % 7 === 0 && temp > 0) {
            result.push(temp)
        }
        else {
            i--
        }
        temp += 1
    }
    return result.join(', ')
}

function main() {
    let input = 13

    return cacah(input)
}

console.log(main())