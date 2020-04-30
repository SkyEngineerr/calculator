const button = document.getElementsByClassName("numbers")
const input = document.getElementById("input")
const operator = document.getElementsByClassName("operator")
const equalSign = document.getElementById("equal-sign-operator")
const inputSmall = document.getElementById('input-small')


let arr = []
let opArr = []

for (item of button) {
    item.addEventListener('click', keyOutPut)
}

function keyOutPut (e) {
    if(input.value == "+" || input.value == "-" || input.value == "/" || input.value == "*"){
        input.value = ""
        input.value = input.value + '' + e.target.value
    }
    else if (input.value == arr[0]) {
        input.value = ""
        input.value = input.value + '' + e.target.value
    }
    else {
        input.value = input.value + '' + e.target.value
    }
}


for (item of operator) {
    item.addEventListener('click', operatorFunction)
}

function operatorFunction (e) {
    
    if (opArr.length < 1) {
        arr.push(input.value)
        opArr.push(e.target.value)
        input.value = ""
        input.value = e.target.value 
        console.log(opArr)
        console.log(arr)
    }
    else if(opArr.length >= 1 ) {
        if (opArr[0] == "+") {
            arr.push(input.value)
            arr.unshift(parseFloat(arr[0]) + parseFloat(arr[1]))
            arr.splice(1)
            input.value = arr[0]
            opArr = []
            opArr.push(e.target.value)
            console.log(arr, opArr)
            
        }
        else if (opArr[0] == "/") {
            arr.push(input.value)
            arr.unshift(parseFloat(arr[0]) / parseFloat(arr[1]))
            arr.splice(1)
            input.value = arr[0]
            opArr = []
            opArr.push(e.target.value)
            console.log(arr, opArr)
        }
        else if (opArr[0] == "*") {
            arr.push(input.value)
            arr.unshift(parseFloat(arr[0]) * parseFloat(arr[1]))
            arr.splice(1)
            input.value = arr[0]
            opArr = []
            opArr.push(e.target.value)
            console.log(arr, opArr)
        }
        else if (opArr[0] == "-") {
            arr.push(input.value)
            arr.unshift(parseFloat(arr[0]) - parseFloat(arr[1]))
            arr.splice(1)
            input.value = arr[0]
            opArr = []
            opArr.push(e.target.value)
            console.log(arr, opArr)
        }
       
    }
}


document.getElementById('decimal').addEventListener('click', function (e) {
    if(!input.value.includes('.')) {
        input.value = input.value + '' + '.'
    }
    else{
        input.value = input.value
    }
    console.log('.')
})

document.getElementById("all-clear").addEventListener('click', function (e) {
    input.value = ""
    arr = []
    opArr = []
    console.log(arr)
    console.log(opArr)
})


equalSign.addEventListener('click', function equal(e){
    
    if (opArr.length < 1) {
       
    }
    else if(opArr.length >= 1 ) {
        if (opArr[0] == "+") {
            arr.push(input.value)
            input.value = parseFloat(arr[0]) + parseFloat(arr[1])
            arr = []
            opArr = []
        }
        else if (opArr[0] == "/") {
            arr.push(input.value)
            input.value = parseFloat(arr[0]) / parseFloat(arr[1])
            arr = []
            opArr = []
        }
        else if (opArr[0] == "*") {
            arr.push(input.value)
            input.value = parseFloat(arr[0]) * parseFloat(arr[1])
            arr = []
            opArr = []
        }
        else if (opArr[0] == "-") {
            arr.push(input.value)
            input.value = parseFloat(arr[0]) - parseFloat(arr[1])
            arr = []
            opArr = []
        }  
    }
})