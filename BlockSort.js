require('colors')

const colors = ["red", "blue", "pink", "green", "white", "grey"]

PrintColors = (arr) => {
    let outStr = ""
    for (let i = 0; i < arr.length; i++) {
        switch(arr[i]) {
            case "red":
                outStr += "#".red
                break
            case "blue":
                outStr += "#".blue
                break
            case "pink":
                outStr += "#".magenta
                break
            case "green":
                outStr += "#".green
                break
            case "white":
                outStr += "#".white
                break
            case "grey":
                outStr += "#".grey
                break
            default: break
        }
    }
    console.log(outStr)
}

Check = (arr) => {
    let categories = []
    for(let i = 0; i < arr.length; i++) {
        if(!categories.includes(arr[i])) {
            categories.push(arr[i])
        } else {
            if(categories.indexOf(arr[i]) != categories.length-1)
                return false
        }
    }
    return true
}

BlockSort = (arr) => {
    let iter = 0
    while (!Check(arr)) {
        PrintColors(arr)
        let endOfBlock = 0
        let first = arr[0]
        let matched = true
        for(let i = 1 ; i < arr.length; i++) {
            if(matched) {
                if(arr[i] != first) {
                    matched = false
                    endOfBlock = i
                }
            } else {
                if(arr[i] == first) {
                    subArr = arr.slice(0, i)
                    subArr.reverse()
                    iter += subArr.length
                    for(let j = 0; j < subArr.length; j++)
                        arr[j] = subArr[j]
                    break
                }
                if(i == arr.length-1 && arr[i] != first) {
                    arrA = arr.slice(0, endOfBlock)
                    arrB = arr.slice(endOfBlock, arr.length)
                    arr = [...arrB, ...arrA]
                    iter += arr.length
                }
            }
        }
    }
    PrintColors(arr)
    console.log(iter)
}

let testObj = []
for(let i = 0; i < 100; i++)
    testObj.push(colors[Math.floor(Math.random() * colors.length)])

BlockSort(testObj)
