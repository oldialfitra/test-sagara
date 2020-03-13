function finder(str) {
    let result = []
    let arr = str.split(' ')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'gajah.' || arr[i] === 'serigala.' || arr[i] === 'harimau.') {
            let temp = arr[i].split('.')
            arr[i] = temp[0]    
        }
        else if (arr[i] === 'gajah,' || arr[i] === 'serigala,' || arr[i] === 'harimau,') {
            let temp = arr[i].split('.')
            arr[i] = temp[0]    
        }
        else if (arr[i] === 'gajah?' || arr[i] === 'serigala?' || arr[i] === 'harimau?') {
            let temp = arr[i].split('.')
            arr[i] = temp[0]    
        } 
        else if (arr[i] === 'gajah!' || arr[i] === 'serigala!' || arr[i] === 'harimau!') {
            let temp = arr[i].split('.')
            arr[i] = temp[0]    
        }
        if (arr[i].toLowerCase() === 'gajah' || arr[i].toLowerCase() === 'serigala' || arr[i].toLowerCase() === 'harimau') {
            result.push(arr[i].toLowerCase())
        }
    }
    return result.join(' - ')
}

function main() {
    let input = 'Berikut adalah kisah sang gajah. Sang gajah memiliki teman serigala. Gajah sering dibela oleh serigala ketika harimau mendekati gajah.'

    return finder(input)
}

console.log(main())